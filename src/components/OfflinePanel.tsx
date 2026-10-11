import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Progress } from './ui/progress';
import { requestOffline, type OfflinePackage } from '../lib/offline';
import type { Labels, Locale } from '../lib/content';

interface InstallEvent extends Event { prompt(): Promise<void>; userChoice: Promise<{ outcome: string }> }
export default function OfflinePanel({ locale, labels: t }: { locale: Locale; labels: Labels }) {
  const [ready, setReady] = useState<OfflinePackage | null>(null);
  const [available, setAvailable] = useState<OfflinePackage | null>(null);
  const [progress, setProgress] = useState<{ completed: number; total: number } | null>(null);
  const [checking, setChecking] = useState(true);
  const [failed, setFailed] = useState(false);
  const [supported, setSupported] = useState(true);
  const [update, setUpdate] = useState(false);
  const [install, setInstall] = useState<InstallEvent | null>(null);
  const [installHelp, setInstallHelp] = useState(false);
  const downloadRequest = useRef<AbortController | null>(null);
  useEffect(() => {
    if (!('serviceWorker' in navigator) || !('caches' in window) || !('locks' in navigator)) { setSupported(false); setChecking(false); return; }
    const onUpdate = () => setUpdate(true);
    const onInstall = (event: Event) => {
      if ('prompt' in event && typeof event.prompt === 'function' && 'userChoice' in event) {
        event.preventDefault();
        // Browser-created beforeinstallprompt event exposes this documented install contract.
        setInstall(event as InstallEvent);
      }
    };
    let statusRequest: AbortController | null = null;
    const refresh = async () => {
      if (downloadRequest.current) return;
      statusRequest?.abort();
      const request = new AbortController();
      statusRequest = request;
      setChecking(true);
      try {
        const reply = await requestOffline('status', locale, request.signal);
        if (request.signal.aborted || reply.type !== 'status') return;
        setReady(reply.package); setAvailable(reply.available); setFailed(false);
        const registration = await navigator.serviceWorker.getRegistration();
        if (!request.signal.aborted) setUpdate(Boolean(registration?.waiting));
      } catch {
        if (!request.signal.aborted) { setReady(null); setAvailable(null); setFailed(true); }
      } finally { if (!request.signal.aborted) setChecking(false); }
    };
    const cancelRequests = () => {
      statusRequest?.abort(); downloadRequest.current?.abort(); downloadRequest.current = null;
    };
    const onPageHide = () => { cancelRequests(); setProgress(null); };
    const onControllerChange = () => { setUpdate(false); void refresh(); };
    window.addEventListener('pwa-update', onUpdate);
    window.addEventListener('beforeinstallprompt', onInstall);
    window.addEventListener('focus', refresh);
    window.addEventListener('online', refresh);
    window.addEventListener('offline', refresh);
    document.addEventListener('visibilitychange', refresh);
    window.addEventListener('pagehide', onPageHide);
    window.addEventListener('pageshow', refresh);
    navigator.serviceWorker.addEventListener('controllerchange', onControllerChange);
    void refresh();
    return () => {
      cancelRequests();
      window.removeEventListener('pwa-update', onUpdate);
      window.removeEventListener('beforeinstallprompt', onInstall);
      window.removeEventListener('focus', refresh);
      window.removeEventListener('online', refresh);
      window.removeEventListener('offline', refresh);
      document.removeEventListener('visibilitychange', refresh);
      window.removeEventListener('pagehide', onPageHide);
      window.removeEventListener('pageshow', refresh);
      navigator.serviceWorker.removeEventListener('controllerchange', onControllerChange);
    };
  }, [locale]);
  async function download() {
    if (downloadRequest.current) return;
    const request = new AbortController();
    downloadRequest.current = request;
    const requestedVersion = available?.version;
    setFailed(false); setProgress({ completed: 0, total: 1 });
    try {
      if (navigator.storage?.persist) {
        try { await navigator.storage.persist(); } catch { /* Persistence is optional; cache writes report real storage failures. */ }
      }
      const reply = await requestOffline('download', locale, request.signal, (completed, total) => setProgress({ completed, total }));
      if (!request.signal.aborted && reply.type === 'complete') { setReady(reply.package); setAvailable(reply.package); }
    } catch {
      if (request.signal.aborted) return;
      setReady(null); setFailed(true); setProgress(null); setChecking(true);
      try {
        const status = await requestOffline('status', locale, request.signal);
        if (request.signal.aborted || status.type !== 'status') return;
        setReady(status.package); setAvailable(status.available);
        const verifiedVersion = requestedVersion ?? status.available?.version;
        if (verifiedVersion && status.package?.version === verifiedVersion && (!status.available || status.available.version === verifiedVersion)) setFailed(false);
      } catch { /* Keep readiness unknown and the retryable error if verification also fails. */ }
      finally { if (!request.signal.aborted) setChecking(false); }
    }
    finally {
      if (!request.signal.aborted) setProgress(null);
      if (downloadRequest.current === request) downloadRequest.current = null;
    }
  }
  const newerPackage = Boolean(ready && available && ready.version !== available.version);
  const alreadySaved = Boolean(ready && (!available || ready.version === available.version));
  return <div className="offline-panel">
    <Alert><AlertTitle>{ready ? t.ready : t.notSaved}</AlertTitle><AlertDescription>{t.offlineScope}</AlertDescription></Alert>
    {available && <p className="metadata">{t.estimatedSize}: {(available.bytes / 1024 / 1024).toFixed(1)} MB</p>}
    {!supported ? <p role="status">{t.unsupported}</p> : <>
      {progress && <div><Progress aria-label={t.downloading} value={progress.completed / progress.total * 100} /><p className="metadata mt-2">{t.downloading}: {progress.completed} / {progress.total}</p></div>}
      <div role="status" aria-live="polite">{failed ? t.downloadFailed : progress ? t.downloading : ready ? t.ready : t.notSaved}</div>
      <Button className="min-h-11 whitespace-normal h-auto py-3" disabled={checking || Boolean(progress) || (alreadySaved && !failed)} onClick={download}>{failed ? t.retry : newerPackage ? t.updateNow : alreadySaved ? t.ready : t.saveOffline}</Button>
      {newerPackage && <p className="metadata">{t.oldPackage}</p>}
    </>}
    {update && <Alert><AlertTitle>{t.updateAvailable}</AlertTitle><AlertDescription><Button variant="outline" className="min-h-11 mt-3" disabled={checking || Boolean(progress)} onClick={() => window.dispatchEvent(new Event('apply-pwa-update'))}>{t.updateNow}</Button></AlertDescription></Alert>}
    <Button variant="outline" className="min-h-11" onClick={async () => {
      if (!install) { setInstallHelp(true); return; }
      try { await install.prompt(); await install.userChoice; setInstall(null); }
      catch { setInstallHelp(true); }
    }}>{t.install}</Button>
    {installHelp && <p role="status">{t.installHelp}</p>}
    <p className="metadata">{t.storageWarning}</p>
  </div>;
}
