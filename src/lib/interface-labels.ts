import type { Locale } from './content';

const idLabels = {
  title: 'Ramadan', intro: 'Bacaan, catatan amal harian, dan halaman yang dibaca.',
  editorial: 'Materi ini dikutip dari arsip Qari (qari.solusikoding.com), belum ditinjau secara editorial. Klaim waktu, keutamaan, hadis, dan pengelompokan sepuluh hari adalah atribusi sumber, bukan ketetapan agama yang telah diverifikasi. Hak penggunaan sumber juga belum dipastikan.',
  newPrayers: 'Bacaan dari arsip', existingPrayers: 'Bacaan yang sudah ada di aplikasi', quranExcerpt: 'Kutipan ayat Al-Qur’an dalam arsip', sourceTiming: 'Menurut sumber', sourceTranslation: 'Terjemahan sumber', sourceLatin: 'Latin sumber', openPrayer: 'Buka doa di koleksi', openVerse: 'Buka ayat lengkap',
  checklist: 'Checklist amal', checklistIntro: 'Catat aktivitas untuk hari ini di perangkat ini; bukan penilaian kualitas ibadah.',
  khatam: 'Kemajuan khatam', khatamIntro: 'Catat jumlah kumulatif halaman yang sudah dibaca di perangkat ini.', target: 'Target halaman', pagesRead: 'Halaman dibaca', savePages: 'Simpan jumlah halaman', progress: 'Kemajuan', milestones: 'Penanda dari arsip (perkiraan halaman)', noSaved: 'Belum ada catatan tersimpan di perangkat ini.', storageUnavailable: 'Penyimpanan lokal tidak tersedia atau data tersimpan tidak valid. Catatan lama tidak diubah.', saved: 'Catatan tersimpan.', noJavaScript: 'Pencatatan memerlukan JavaScript dan penyimpanan lokal; daftar bacaan tetap tersedia.'
};
const ramadanLabels = {
  id: idLabels,
  en: {
    title: 'Ramadan', intro: 'Readings, a daily activity checklist, and pages read.',
    editorial: 'This material is quoted from the Qari archive (qari.solusikoding.com) and awaits editorial review. Claims about timing, virtues, hadith, and ten-day groupings are source attributions, not verified religious rulings. Source reuse rights remain unresolved.',
    newPrayers: 'Readings from the archive', existingPrayers: 'Readings already in the app', quranExcerpt: 'Quran verse excerpt in the archive', sourceTiming: 'According to the source', sourceTranslation: 'Source translation', sourceLatin: 'Source transliteration', openPrayer: 'Open prayer in collection', openVerse: 'Open full verse',
    checklist: 'Activity checklist', checklistIntro: 'Record today’s activities on this device; this is not an assessment of worship.',
    khatam: 'Khatam progress', khatamIntro: 'Record the cumulative number of pages read on this device.', target: 'Page target', pagesRead: 'Pages read', savePages: 'Save page count', progress: 'Progress', milestones: 'Source milestones (approximate pages)', noSaved: 'No record saved on this device yet.', storageUnavailable: 'Local storage is unavailable or saved data is invalid. Existing records were not changed.', saved: 'Record saved.', noJavaScript: 'Recording requires JavaScript and local storage; the readings remain available.'
  },
  ja: {
    title: 'ラマダン', intro: '祈りの文、日々の活動記録、読んだページ。',
    editorial: 'この資料は Qari アーカイブ（qari.solusikoding.com）からの引用で、編集上の確認が必要です。時期、功徳、ハディース、各10日間の分類は出典側の主張であり、検証済みの宗教的判断ではありません。再利用の権利も未確認です。',
    newPrayers: 'アーカイブの祈りの文', existingPrayers: 'アプリにすでにある祈りの文', quranExcerpt: 'アーカイブにあるクルアーンの節の抜粋', sourceTiming: '出典による時期', sourceTranslation: '出典の翻訳', sourceLatin: '出典の転写', openPrayer: '既存の祈りを開く', openVerse: '節の全文を開く',
    checklist: '活動チェックリスト', checklistIntro: '今日の活動をこの端末に記録します。礼拝の質を評価するものではありません。',
    khatam: '読了の進捗', khatamIntro: 'この端末に読んだページの累計を記録します。', target: '目標ページ数', pagesRead: '読んだページ数', savePages: 'ページ数を保存', progress: '進捗', milestones: '出典の目安（概算ページ数）', noSaved: 'この端末にはまだ記録がありません。', storageUnavailable: 'ローカルストレージが利用できないか、保存データが無効です。既存の記録は変更していません。', saved: '記録を保存しました。', noJavaScript: '記録には JavaScript とローカルストレージが必要です。読書資料は利用できます。'
  },
  'zh-Hans': {
    title: '斋月', intro: '祈祷文、每日活动记录与已读页数。',
    editorial: '这些材料引自 Qari 档案（qari.solusikoding.com），仍需编辑审查。关于时间、功德、圣训及各十日分组的说法均为来源主张，并非已核实的宗教裁定。来源的再使用权利也尚未确认。',
    newPrayers: '档案中的祈祷文', existingPrayers: '应用中已有的祈祷文', quranExcerpt: '档案中的古兰经经文摘录', sourceTiming: '据来源所述', sourceTranslation: '来源译文', sourceLatin: '来源音译', openPrayer: '打开已有祈祷文', openVerse: '打开完整经文',
    checklist: '活动清单', checklistIntro: '在此设备记录今天的活动；这不是对功修质量的评判。',
    khatam: '通读进度', khatamIntro: '在此设备记录累计已读页数。', target: '目标页数', pagesRead: '已读页数', savePages: '保存页数', progress: '进度', milestones: '来源中的里程碑（约计页数）', noSaved: '此设备尚无保存记录。', storageUnavailable: '本地存储不可用或已存数据无效。现有记录未被修改。', saved: '记录已保存。', noJavaScript: '记录需要 JavaScript 和本地存储；阅读材料仍可使用。'
  }
} satisfies Record<Locale, Record<keyof typeof idLabels, string>>;
const id = {
  tasbih: 'Tasbih digital', tasbihIntro: 'Hitung dzikir dengan tenang, satu bacaan setiap ketukan.', target: 'Target', count: 'Hitungan', add: 'Tambah +1', subtract: 'Kurangi satu', reset: 'Mulai ulang', confirmReset: 'Hapus hitungan untuk bacaan ini?', reached: 'Target tercapai', virtue: 'Keutamaan menurut arsip', sourceReview: 'Teks dan klaim keutamaan dari arsip Qari; rujukan dan hak pakai belum ditinjau editorial.', storageError: 'Penyimpanan perangkat tidak tersedia; hitungan hanya berlaku selama halaman ini terbuka.',
  calendar: 'Kalender Hijriyah', calendarIntro: 'Tanggal Hijriah dan padanan Masehi dari arsip.', calendarCoverage: 'Snapshot hanya mencakup 1448 H (12 bulan). Bukan kalender berjalan; awal bulan dapat berbeda menurut rukyat dan otoritas setempat.', calendarUnavailable: 'Bulan yang diminta tidak tersedia dalam snapshot 1448 H.', gregorian: 'Masehi', hijri: 'Hijriah', sourceEvents: 'Penanda peristiwa menurut sumber arsip, bukan penetapan tanggal setempat.', noEvents: 'Tidak ada penanda peristiwa sumber untuk bulan ini.',
  qibla: 'Arah kiblat', qiblaIntro: 'Sudut dari utara geografis menuju Kaabah, dihitung pada perangkat.', defaultLocation: 'Koordinat contoh: pusat Jakarta; bukan lokasi perangkat Anda.', latitude: 'Lintang', longitude: 'Bujur', calculate: 'Hitung dari koordinat', useLocation: 'Gunakan lokasi perangkat', useSensor: 'Aktifkan sensor orientasi', bearing: 'Arah kiblat dari utara', degrees: 'derajat', north: 'Utara', east: 'Timur', south: 'Selatan', west: 'Barat', coordinatesInvalid: 'Masukkan lintang −90 hingga 90 dan bujur −180 hingga 180; jangan gunakan tepat di Kaabah.', locationDenied: 'Lokasi ditolak atau tidak tersedia. Gunakan koordinat manual.', locationUnsupported: 'Geolokasi tidak didukung. Gunakan koordinat manual.', sensorUnsupported: 'Sensor orientasi tidak tersedia. Gunakan sudut dari utara di atas.', sensorDenied: 'Izin sensor ditolak. Gunakan sudut dari utara di atas.', sensorWaiting: 'Menunggu pembacaan sensor; gunakan sudut dari utara sementara ini.', sensorHeading: 'Arah perangkat dari utara', aligned: 'Sejajar dengan kiblat (toleransi ±5°).', notAligned: 'Putar perangkat menuju arah kiblat.', sensorCaution: 'Pembacaan sensor hanya perkiraan; jauhkan perangkat dari logam. SVG tetap menunjukkan sudut geografis, bukan kompas sensor langsung.',
  mosques: 'Masjid sekitar Jakarta', mosqueIntro: 'Daftar lokal dari snapshot OpenStreetMap pusat Jakarta, radius 5 km; bukan pencarian di sekitar Anda.', mosqueDate: 'Snapshot OSM per 11 Oktober 2026. Lokasi dan nama dapat berubah; periksa sebelum berangkat. Objek berdekatan mungkin duplikat.', distance: 'Jarak garis lurus dari pusat Jakarta', mosqueUnnamed: 'Tempat ibadah tanpa nama di OSM', attribution: 'Data © kontributor OpenStreetMap · ODbL.'
} as const;
const devotionalLabels = {
  id,
  en: { tasbih: 'Digital tasbih', tasbihIntro: 'Count each remembrance at your own pace.', target: 'Target', count: 'Count', add: 'Add +1', subtract: 'Subtract one', reset: 'Reset', confirmReset: 'Delete the count for this remembrance?', reached: 'Target reached', virtue: 'Virtue claimed by the archive', sourceReview: 'The recitations and virtue claims come from the Qari archive; references and rights have not undergone editorial review.', storageError: 'Device storage is unavailable; counts last only until you close this page.', calendar: 'Hijri calendar', calendarIntro: 'Hijri dates and Gregorian equivalents from the archive.', calendarCoverage: 'Snapshot covers only 1448 AH (12 months). Not a live calendar; month starts may vary by local moon sighting and authorities.', calendarUnavailable: 'The requested month is outside the 1448 AH snapshot.', gregorian: 'Gregorian', hijri: 'Hijri', sourceEvents: 'Events marked by the source archive, not locally confirmed dates.', noEvents: 'No source event markers for this month.', qibla: 'Qibla direction', qiblaIntro: 'Angle from geographic north to the Kaaba, computed on this device.', defaultLocation: 'Example coordinates: central Jakarta; not your device location.', latitude: 'Latitude', longitude: 'Longitude', calculate: 'Calculate from coordinates', useLocation: 'Use device location', useSensor: 'Enable orientation sensor', bearing: 'Qibla bearing from north', degrees: 'degrees', north: 'North', east: 'East', south: 'South', west: 'West', coordinatesInvalid: 'Enter latitude −90 to 90 and longitude −180 to 180; do not use the Kaaba itself.', locationDenied: 'Location denied or unavailable. Enter coordinates manually.', locationUnsupported: 'Geolocation is unsupported. Enter coordinates manually.', sensorUnsupported: 'Orientation sensor unavailable. Use the north bearing above.', sensorDenied: 'Sensor permission denied. Use the north bearing above.', sensorWaiting: 'Waiting for sensor readings; use the north bearing meanwhile.', sensorHeading: 'Device heading from north', aligned: 'Aligned with the qibla (±5° tolerance).', notAligned: 'Turn the device toward the qibla.', sensorCaution: 'Sensor readings are approximate; keep away from metal. The SVG shows geographic bearing, not a live sensor compass.', mosques: 'Mosques near central Jakarta', mosqueIntro: 'Local OpenStreetMap snapshot within 5 km of central Jakarta; not a search near you.', mosqueDate: 'OSM snapshot from 11 October 2026. Names and locations may change; check before travelling. Nearby objects may be duplicates.', distance: 'Straight-line distance from central Jakarta', mosqueUnnamed: 'Unnamed worship place in OSM', attribution: 'Data © OpenStreetMap contributors · ODbL.' },
  ja: { tasbih: 'デジタルタスビーフ', tasbihIntro: '唱えるたびに一回ずつ数えます。', target: '目標', count: '回数', add: '＋1回', subtract: '１回減らす', reset: 'リセット', confirmReset: 'この唱句の回数を消去しますか？', reached: '目標に達しました', virtue: '資料が伝える功徳', sourceReview: '唱句と功徳の記述はQariアーカイブのものです。出典と利用権は編集上の確認が済んでいません。', storageError: '端末への保存ができません。このページを閉じると回数は失われます。', calendar: 'ヒジュラ暦', calendarIntro: '資料に記録されたヒジュラ暦と西暦の対応。', calendarCoverage: 'この記録はヒジュラ暦1448年の12か月のみです。現行の暦ではなく、月の始まりは地域の月の観測や当局の判断で異なります。', calendarUnavailable: '指定された月は1448年の記録範囲外です。', gregorian: '西暦', hijri: 'ヒジュラ暦', sourceEvents: '行事の印は資料提供元によるもので、現地で確定した日付ではありません。', noEvents: 'この月に資料提供元の行事印はありません。', qibla: 'キブラの方向', qiblaIntro: 'この端末で計算した真北からカアバへの角度です。', defaultLocation: '例としてジャカルタ中心部の座標を使用。端末の現在地ではありません。', latitude: '緯度', longitude: '経度', calculate: '座標から計算', useLocation: '端末の現在地を使う', useSensor: '方位センサーを有効にする', bearing: '真北からのキブラの角度', degrees: '度', north: '北', east: '東', south: '南', west: '西', coordinatesInvalid: '緯度は−90～90、経度は−180～180を入力してください。カアバ自体の座標は使えません。', locationDenied: '位置情報が拒否されたか利用できません。座標を手入力してください。', locationUnsupported: '位置情報は未対応です。座標を手入力してください。', sensorUnsupported: '方位センサーを利用できません。上の真北からの角度を使ってください。', sensorDenied: 'センサーの許可が拒否されました。上の角度を使ってください。', sensorWaiting: 'センサーの測定を待っています。それまでは上の角度を使ってください。', sensorHeading: '端末の北からの向き', aligned: 'キブラと一致しています（許容差±5度）。', notAligned: '端末をキブラの方向に向けてください。', sensorCaution: 'センサーは概算です。金属から離してください。図は地理的な角度を示し、リアルタイムのセンサー表示ではありません。', mosques: 'ジャカルタ中心部付近のモスク', mosqueIntro: 'ジャカルタ中心部から半径5 kmのOpenStreetMap記録です。現在地周辺の検索ではありません。', mosqueDate: '2026年10月11日時点のOSM記録です。場所や名称は変わることがあります。出発前に確認してください。近くの項目が重複している場合があります。', distance: 'ジャカルタ中心部からの直線距離', mosqueUnnamed: 'OSMで名称のない礼拝所', attribution: 'データ © OpenStreetMap contributors · ODbL。' },
  'zh-Hans': { tasbih: '电子赞念计数', tasbihIntro: '每念诵一次，记录一次。', target: '目标', count: '次数', add: '加一', subtract: '减一', reset: '重置', confirmReset: '删除此念词的计数吗？', reached: '已达到目标', virtue: '档案所述功德', sourceReview: '念词及功德陈述来自 Qari 档案；出处及使用权尚未经编辑审核。', storageError: '无法使用设备存储；关闭页面后计数将丢失。', calendar: '希吉来历', calendarIntro: '档案中的希吉来历与公历日期对应。', calendarCoverage: '快照仅涵盖希吉来历1448年的12个月，并非实时历法；月份起始可能因当地观月和主管机构而异。', calendarUnavailable: '所选月份不在1448年的快照范围内。', gregorian: '公历', hijri: '希吉来历', sourceEvents: '事件标记来自来源档案，并非当地确认的日期。', noEvents: '该月没有来源档案的事件标记。', qibla: '朝拜方向', qiblaIntro: '在设备上计算从地理正北至克尔白的角度。', defaultLocation: '示例坐标为雅加达市中心，并非设备位置。', latitude: '纬度', longitude: '经度', calculate: '按坐标计算', useLocation: '使用设备位置', useSensor: '启用方向传感器', bearing: '从正北起的朝拜角度', degrees: '度', north: '北', east: '东', south: '南', west: '西', coordinatesInvalid: '纬度应为−90至90，经度应为−180至180；不可使用克尔白本身的位置。', locationDenied: '位置权限被拒绝或不可用。请手动输入坐标。', locationUnsupported: '不支持地理定位。请手动输入坐标。', sensorUnsupported: '方向传感器不可用。请使用上方的正北角度。', sensorDenied: '传感器权限被拒绝。请使用上方的角度。', sensorWaiting: '等待传感器读数；此时请使用上方的角度。', sensorHeading: '设备相对正北的朝向', aligned: '与朝拜方向一致（容差±5°）。', notAligned: '请转动设备朝向克尔白。', sensorCaution: '传感器读数仅为估算，请远离金属。图示为地理方位角，并非实时传感器指南针。', mosques: '雅加达市中心附近的清真寺', mosqueIntro: '雅加达市中心5公里范围内的本地 OpenStreetMap 快照，并非您附近的实时搜索。', mosqueDate: 'OSM 快照日期为2026年10月11日。名称和位置可能变化，出行前请核实；相近地点可能重复。', distance: '距雅加达市中心的直线距离', mosqueUnnamed: 'OSM 中未命名的礼拜场所', attribution: '数据 © OpenStreetMap contributors · ODbL。' }
} satisfies Record<Locale, Record<keyof typeof id, string>>;
type PrayerCopy = {
  schedule: string; reminders: string; intro: string; city: string; method: string;
  date: string; defaultDate: string; localDisclosure: string; scheduleLink: string; reminderLink: string;
  unavailable: string; storageError: string; timezone: string; names: Record<'Fajr' | 'Sunrise' | 'Dhuhr' | 'Asr' | 'Maghrib' | 'Isha', string>;
  notification: string; permission: Record<'granted' | 'denied' | 'default' | 'unsupported' | 'unknown', string>;
  requestPermission: string; before: string; after: string; minutes: string;
  prayersToRemind: string; sunriseNote: string; save: string; saved: string; openOnly: string;
  notificationBody: string; notificationBefore: string; notificationAfter: string;
};

const prayerLabels = {
  id: {
    schedule: 'Jadwal sholat', reminders: 'Pengingat sholat', intro: 'Periksa waktu sholat untuk kota pilihanmu.', city: 'Kota', method: 'Metode', date: 'Tanggal',
    defaultDate: 'Tanpa JavaScript, jadwal ini menampilkan Jakarta, metode Kemenag RI (20), pada tanggal penerbitan halaman. Buka ulang halaman untuk jadwal terbaru.',
    localDisclosure: 'Waktu dihitung secara lokal dari rumus astronomi dengan metode {method}. Ini perkiraan, bukan ketetapan otoritas setempat. Cocokkan dengan jadwal resmi setempat.',
    scheduleLink: 'Lihat jadwal', reminderLink: 'Atur pengingat', unavailable: 'Waktu tidak dapat dihitung untuk lokasi dan tanggal ini.',
    storageError: 'Pengaturan tidak dapat disimpan di perangkat ini.', timezone: 'Zona waktu',
    names: { Fajr: 'Subuh', Sunrise: 'Terbit', Dhuhr: 'Dzuhur', Asr: 'Ashar', Maghrib: 'Maghrib', Isha: 'Isya' },
    notification: 'Izin notifikasi', permission: { granted: 'Diizinkan', denied: 'Ditolak; ubah lewat pengaturan situs browser.', default: 'Belum diminta', unsupported: 'Tidak didukung browser ini', unknown: 'Status izin akan diperiksa saat JavaScript tersedia.' },
    requestPermission: 'Izinkan notifikasi', before: 'Sebelum sholat', after: 'Sesudah sholat', minutes: 'menit', prayersToRemind: 'Sholat yang diingatkan', sunriseNote: 'Terbit adalah penanda waktu, bukan sholat yang dapat diingatkan.', save: 'Simpan pengingat', saved: 'Pengaturan tersimpan di perangkat ini.',
    openOnly: 'Pengingat membutuhkan izin notifikasi dan bekerja hanya selama halaman ini terbuka. Saat tab ditutup atau perangkat tidur, pengiriman tidak tersedia; ini bukan alarm tepat waktu.',
    notificationBody: 'Waktu {prayer} ({city}) sekitar {time}.', notificationBefore: '{minutes} menit sebelum', notificationAfter: '{minutes} menit sesudah',
  },
  en: {
    schedule: 'Prayer times', reminders: 'Prayer reminders', intro: 'Check prayer times for your chosen city.', city: 'City', method: 'Method', date: 'Date',
    defaultDate: 'Without JavaScript, this schedule shows Jakarta, Kemenag RI method (20), on the page publication date. Reload for a newer schedule.',
    localDisclosure: 'Times are calculated locally using astronomical formulas with the {method} method. They are approximate, not a local authority ruling. Check your local official schedule.',
    scheduleLink: 'View schedule', reminderLink: 'Set reminders', unavailable: 'Times cannot be calculated for this location and date.',
    storageError: 'Settings cannot be saved on this device.', timezone: 'Time zone',
    names: { Fajr: 'Fajr', Sunrise: 'Sunrise', Dhuhr: 'Dhuhr', Asr: 'Asr', Maghrib: 'Maghrib', Isha: 'Isha' },
    notification: 'Notification permission', permission: { granted: 'Granted', denied: 'Denied; change this in browser site settings.', default: 'Not requested', unsupported: 'Not supported by this browser', unknown: 'Permission status is checked when JavaScript is available.' },
    requestPermission: 'Allow notifications', before: 'Before prayer', after: 'After prayer', minutes: 'minutes', prayersToRemind: 'Prayers to remind', sunriseNote: 'Sunrise is a time marker, not a prayer to remind.', save: 'Save reminders', saved: 'Settings saved on this device.',
    openOnly: 'Reminders require notification permission and work only while this page is open. Delivery when the tab is closed or the device sleeps is unavailable; this is not an exact alarm.',
    notificationBody: '{prayer} time ({city}) is around {time}.', notificationBefore: '{minutes} minutes before', notificationAfter: '{minutes} minutes after',
  },
  ja: {
    schedule: '礼拝時刻', reminders: '礼拝リマインダー', intro: '選択した都市の礼拝時刻を確認できます。', city: '都市', method: '計算方法', date: '日付',
    defaultDate: 'JavaScript が無効の場合、ページ公開日時点のジャカルタ・Kemenag RI 方式（20）の時刻を表示します。最新の時刻はページを再読み込みしてください。',
    localDisclosure: '時刻は {method} 方式の天文計算式で端末内で算出しています。概算であり、地域の宗教当局による判断ではありません。現地の公式時刻表をご確認ください。',
    scheduleLink: '時刻表を見る', reminderLink: 'リマインダーを設定', unavailable: 'この場所と日付の時刻は計算できません。',
    storageError: 'この端末に設定を保存できません。', timezone: 'タイムゾーン',
    names: { Fajr: 'ファジュル', Sunrise: '日の出', Dhuhr: 'ズフル', Asr: 'アスル', Maghrib: 'マグリブ', Isha: 'イシャー' },
    notification: '通知の許可', permission: { granted: '許可済み', denied: '拒否されています。ブラウザーのサイト設定で変更してください。', default: '未要求', unsupported: 'このブラウザーでは利用できません', unknown: 'JavaScript が利用可能な場合に許可状態を確認します。' },
    requestPermission: '通知を許可', before: '礼拝前', after: '礼拝後', minutes: '分', prayersToRemind: '通知する礼拝', sunriseNote: '日の出は時刻の目安であり、通知対象の礼拝ではありません。', save: '設定を保存', saved: '設定をこの端末に保存しました。',
    openOnly: 'リマインダーには通知の許可が必要で、このページが開いている間のみ機能します。タブを閉じた後や端末のスリープ中は配信できず、正確なアラームではありません。',
    notificationBody: '{city} の {prayer} は {time} 頃です。', notificationBefore: '{minutes} 分前', notificationAfter: '{minutes} 分後',
  },
  'zh-Hans': {
    schedule: '礼拜时间', reminders: '礼拜提醒', intro: '查看所选城市的礼拜时间。', city: '城市', method: '计算方法', date: '日期',
    defaultDate: '禁用 JavaScript 时，显示页面发布当日雅加达 Kemenag RI 方法（20）的时间。请重新加载页面以获取较新的时间。',
    localDisclosure: '时间由本地天文公式按 {method} 方法计算，仅为近似值，并非当地宗教主管机构的裁定。请核对当地官方时刻表。',
    scheduleLink: '查看时间表', reminderLink: '设置提醒', unavailable: '无法计算该地点和日期的时间。',
    storageError: '无法在此设备上保存设置。', timezone: '时区',
    names: { Fajr: '晨礼', Sunrise: '日出', Dhuhr: '晌礼', Asr: '晡礼', Maghrib: '昏礼', Isha: '宵礼' },
    notification: '通知权限', permission: { granted: '已允许', denied: '已拒绝；请在浏览器网站设置中修改。', default: '尚未请求', unsupported: '此浏览器不支持', unknown: '启用 JavaScript 后检查权限状态。' },
    requestPermission: '允许通知', before: '礼拜前', after: '礼拜后', minutes: '分钟', prayersToRemind: '要提醒的礼拜', sunriseNote: '日出只是时间标记，不是可设置提醒的礼拜。', save: '保存提醒', saved: '设置已保存在此设备上。',
    openOnly: '提醒需要通知权限，且仅在本页面保持打开时有效。关闭标签页或设备休眠后无法送达；这不是精确闹钟。',
    notificationBody: '{city} 的 {prayer} 约在 {time}。', notificationBefore: '提前 {minutes} 分钟', notificationAfter: '延后 {minutes} 分钟',
  },
} satisfies Record<Locale, PrayerCopy>;
const readerLabels = {
  id: { savedVerses: 'Ayat tersimpan', verseRange: 'Ayat', of: 'dari', allVerses: 'ayat', scale: 'Skala bacaan' },
  en: { savedVerses: 'Saved verses', verseRange: 'Verses', of: 'of', allVerses: 'verses', scale: 'Reading scale' },
  ja: { savedVerses: '保存した節', verseRange: '節', of: '／', allVerses: '節', scale: '本文の倍率' },
  'zh-Hans': { savedVerses: '已保存经节', verseRange: '经节', of: '共', allVerses: '节', scale: '阅读缩放' }
} satisfies Record<Locale, Record<'savedVerses' | 'verseRange' | 'of' | 'allVerses' | 'scale', string>>;
const baseInterfaceLabels = {
  id: { settings: 'Pengaturan', downloads: 'Unduhan', sources: 'Sumber bacaan', controls: 'Kontrol baca', display: 'Tampilan', reading: 'Tampilan bacaan', jump: 'Ke ayat', openVerse: 'Buka ayat', arabicSize: 'Ukuran teks Arab', translationSize: 'Ukuran terjemahan', lineSpacing: 'Jarak baris', actions: 'Aksi ayat', light: 'Terang', dark: 'Gelap', theme: 'Tema', languageHelp: 'Pilih bahasa tampilan dan terjemahan. Teks Al-Qur’an tetap dalam bahasa Arab.', readingHelp: 'Atur teks Arab dan terjemahan secara terpisah lewat Tampilan di halaman baca.', range: 'Masukkan nomor ayat', invalid: 'Masukkan angka bulat dalam rentang', searchPrayer: 'Cari judul atau tema doa', directory: 'Daftar surah', surahs: 'surah', search: 'Cari nama atau nomor surah', stored: 'Disimpan di perangkat ini', smaller: 'Perkecil', larger: 'Perbesar', home: 'Beranda', quranNav: "Al-Qur'an", savedNav: 'Tersimpan', bottomNav: 'Navigasi utama', greeting: 'Assalamu’alaikum', encouragement: 'Luangkan waktu untuk membaca hari ini.', services: 'Jelajahi fitur', continueReading: 'Lanjutkan membaca', prayerService: 'Doa', aboutService: 'Tentang', languageService: 'Bahasa', featuredVerse: 'Pilihan ayat', dailyVerse: 'Ayat hari ini' },
  en: { settings: 'Settings', downloads: 'Downloads', sources: 'Reading sources', controls: 'Reading controls', display: 'Display', reading: 'Reading display', jump: 'Go to verse', openVerse: 'Open verse', arabicSize: 'Arabic text size', translationSize: 'Translation size', lineSpacing: 'Line spacing', actions: 'Verse actions', light: 'Light', dark: 'Dark', theme: 'Theme', languageHelp: 'Choose the interface and translation language. Quran text remains in Arabic.', readingHelp: 'Adjust Arabic and translation text separately using Display on a reading page.', range: 'Enter a verse number', invalid: 'Enter a whole number in the range', searchPrayer: 'Search prayer titles or topics', directory: 'Surah directory', surahs: 'surahs', search: 'Search surah name or number', stored: 'Saved on this device', smaller: 'Decrease', larger: 'Increase', home: 'Home', quranNav: 'Al-Qur’an', savedNav: 'Saved', bottomNav: 'Main navigation', greeting: 'Assalamu’alaikum', encouragement: 'Make time to read today.', services: 'Explore features', continueReading: 'Continue reading', prayerService: 'Prayers', aboutService: 'About', languageService: 'Language', featuredVerse: 'Featured verse', dailyVerse: 'Today’s verse' },
  ja: { settings: '設定', downloads: 'ダウンロード', sources: '出典', controls: '閲覧設定', display: '表示', reading: '本文の表示', jump: '節へ移動', openVerse: '節を開く', arabicSize: 'アラビア語の文字サイズ', translationSize: '翻訳の文字サイズ', lineSpacing: '行間', actions: '節の操作', light: 'ライト', dark: 'ダーク', theme: 'テーマ', languageHelp: '表示と翻訳の言語を選択してください。クルアーンの本文はアラビア語のままです。', readingHelp: '閲覧ページの「表示」で、アラビア語と翻訳の文字サイズを個別に調整できます。', range: '節番号を入力', invalid: '次の範囲の整数を入力してください', searchPrayer: '祈りの題名やテーマを検索', directory: '章の一覧', surahs: '章', search: '章名または番号で検索', stored: 'この端末に保存', smaller: '小さく', larger: '大きく', home: 'ホーム', quranNav: 'クルアーン', savedNav: '保存済み', bottomNav: 'メインナビゲーション', greeting: 'Assalamu’alaikum', encouragement: '今日も読む時間をつくりましょう。', services: '機能を探す', continueReading: '続きを読む', prayerService: '祈り', aboutService: 'このアプリについて', languageService: '言語', featuredVerse: 'おすすめの節', dailyVerse: '今日の節' },
  'zh-Hans': { settings: '设置', downloads: '下载', sources: '阅读来源', controls: '阅读控制', display: '显示', reading: '阅读显示', jump: '跳转经节', openVerse: '打开经节', arabicSize: '阿拉伯语字号', translationSize: '译文字号', lineSpacing: '行距', actions: '经节操作', light: '浅色', dark: '深色', theme: '主题', languageHelp: '选择界面和译文语言。古兰经原文保持阿拉伯语。', readingHelp: '在阅读页的“显示”中分别调整阿拉伯语原文和译文字号。', range: '输入经节编号', invalid: '请输入以下范围内的整数', searchPrayer: '搜索祈祷标题或主题', directory: '章节目录', surahs: '章', search: '搜索章节名称或编号', stored: '保存在此设备上', smaller: '缩小', larger: '放大', home: '首页', quranNav: '古兰经', savedNav: '已保存', bottomNav: '主导航', greeting: 'Assalamu’alaikum', encouragement: '今天也留一点时间阅读。', services: '探索功能', continueReading: '继续阅读', prayerService: '祈祷', aboutService: '关于', languageService: '语言', featuredVerse: '精选经节', dailyVerse: '今日经节' }
} satisfies Record<Locale, Record<string, string>>;

const tajwidLabels: Record<Locale, { title: string; intro: string; groups: string; note: string; source: string }> = {
  id: { title: 'Belajar tajwid', intro: 'Kenali hukum bacaan, lalu praktikkan saat membaca Al-Qur’an.', groups: 'Hukum bacaan', note: 'Panduan sumber Qari; perlu tinjauan editorial sebelum publikasi.', source: 'Nama dan penjelasan hukum dari arsip Qari, belum ditinjau secara editorial.' },
  en: { title: 'Learn tajwid', intro: 'A reference to recitation rules from the Qari archive.', groups: 'Recitation rules', note: 'Rule names, category labels and descriptions are available only in Indonesian or Arabic; no verified English translation is available.', source: 'Qari archive reference; requires editorial review.' },
  ja: { title: 'タジュウィードを学ぶ', intro: 'Qari アーカイブの読誦規則の資料です。', groups: '読誦規則', note: '規則名・分類名・説明はインドネシア語またはアラビア語のみです。確認済みの日本語訳はありません。', source: 'Qari アーカイブの資料です。公開前に編集上の確認が必要です。' },
  'zh-Hans': { title: '学习诵读规则', intro: '来自 Qari 归档的诵读规则参考资料。', groups: '诵读规则', note: '规则名称、分类和说明仅有印尼语或阿拉伯语；没有经过核实的中文译文。', source: 'Qari 归档参考资料；发布前需要编辑审核。' },
};
type InterfaceCopy = typeof baseInterfaceLabels.id & {
  reader: typeof readerLabels.id;
  prayer: PrayerCopy;
  devotional: Record<keyof typeof id, string>;
  ramadan: Record<keyof typeof idLabels, string>;
  tajwid: { title: string; intro: string; groups: string; note: string; source: string };
};

export const interfaceLabels = {
  id: { ...baseInterfaceLabels.id, reader: readerLabels.id, prayer: prayerLabels.id, devotional: devotionalLabels.id, ramadan: ramadanLabels.id, tajwid: tajwidLabels.id },
  en: { ...baseInterfaceLabels.en, reader: readerLabels.en, prayer: prayerLabels.en, devotional: devotionalLabels.en, ramadan: ramadanLabels.en, tajwid: tajwidLabels.en },
  ja: { ...baseInterfaceLabels.ja, reader: readerLabels.ja, prayer: prayerLabels.ja, devotional: devotionalLabels.ja, ramadan: ramadanLabels.ja, tajwid: tajwidLabels.ja },
  'zh-Hans': { ...baseInterfaceLabels['zh-Hans'], reader: readerLabels['zh-Hans'], prayer: prayerLabels['zh-Hans'], devotional: devotionalLabels['zh-Hans'], ramadan: ramadanLabels['zh-Hans'], tajwid: tajwidLabels['zh-Hans'] }
} satisfies Record<Locale, InterfaceCopy>;
