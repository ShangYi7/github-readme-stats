// @ts-check

import { encodeHTML } from "./common/utils.js";

/**
 * Retrieves stat card labels in the available locales.
 *
 * @param {object} props Function arguments.
 * @param {string} props.name The name of the locale.
 * @param {string} props.apostrophe Whether to use apostrophe or not.
 * @returns {object} The locales object.
 *
 * @see https://www.andiamo.co.uk/resources/iso-language-codes/ for language codes.
 */
const statCardLocales = ({ name, apostrophe }) => {
  const encodedName = encodeHTML(name);
  return {
    "statcard.title": {
      ar: `${encodedName} إحصائيات غيت هاب`,
      cn: `${encodedName} 的 GitHub 统计数据`,
      "zh-tw": `${encodedName} 的 GitHub 統計數據`,
      cs: `GitHub statistiky uživatele ${encodedName}`,
      de: `${encodedName + apostrophe} GitHub-Statistiken`,
      en: `${encodedName}'${apostrophe} GitHub Stats`,
      bn: `${encodedName} এর GitHub পরিসংখ্যান`,
      es: `Estadísticas de GitHub de ${encodedName}`,
      fr: `Statistiques GitHub de ${encodedName}`,
      hu: `${encodedName} GitHub statisztika`,
      it: `Statistiche GitHub di ${encodedName}`,
      ja: `${encodedName}の GitHub 統計`,
      kr: `${encodedName}의 GitHub 통계`,
      nl: `${encodedName}'${apostrophe} GitHub-statistieken`,
      "pt-pt": `Estatísticas do GitHub de ${encodedName}`,
      "pt-br": `Estatísticas do GitHub de ${encodedName}`,
      np: `${encodedName}'${apostrophe} गिटहब तथ्याङ्क`,
      el: `Στατιστικά GitHub του ${encodedName}`,
      ru: `Статистика GitHub пользователя ${encodedName}`,
      "uk-ua": `Статистика GitHub користувача ${encodedName}`,
      id: `Statistik GitHub ${encodedName}`,
      ml: `${encodedName}'${apostrophe} ഗിറ്റ്ഹബ് സ്ഥിതിവിവരക്കണക്കുകൾ`,
      my: `Statistik GitHub ${encodedName}`,
      sk: `GitHub štatistiky používateľa ${encodedName}`,
      tr: `${encodedName} Hesabının GitHub Yıldızları`,
      pl: `Statystyki GitHub użytkownika ${encodedName}`,
      uz: `${encodedName}ning GitHub'dagi statistikasi`,
      vi: `Thống Kê GitHub ${encodedName}`,
      se: `GitHubstatistik för ${encodedName}`,
    },
    "statcard.ranktitle": {
      ar: `${encodedName} إحصائيات غيت هاب`,
      cn: `${encodedName} 的 GitHub 统计数据`,
      "zh-tw": `${encodedName} 的 GitHub 統計數據`,
      cs: `GitHub statistiky uživatele ${encodedName}`,
      de: `${encodedName + apostrophe} GitHub-Statistiken`,
      en: `${encodedName}'${apostrophe} GitHub Rank`,
      bn: `${encodedName} এর GitHub পরিসংখ্যান`,
      es: `Estadísticas de GitHub de ${encodedName}`,
      fr: `Statistiques GitHub de ${encodedName}`,
      hu: `${encodedName} GitHub statisztika`,
      it: `Statistiche GitHub di ${encodedName}`,
      ja: `${encodedName} の GitHub ランク`,
      kr: `${encodedName}의 GitHub 통계`,
      nl: `${encodedName}'${apostrophe} GitHub-statistieken`,
      "pt-pt": `Estatísticas do GitHub de ${encodedName}`,
      "pt-br": `Estatísticas do GitHub de ${encodedName}`,
      np: `${encodedName}'${apostrophe} गिटहब तथ्याङ्क`,
      el: `Στατιστικά GitHub του ${encodedName}`,
      ru: `Статистика GitHub пользователя ${encodedName}`,
      "uk-ua": `Статистика GitHub користувача ${encodedName}`,
      id: `Statistik GitHub ${encodedName}`,
      ml: `${encodedName}'${apostrophe} ഗിറ്റ്ഹബ് സ്ഥിതിവിവരക്കണക്കുകൾ`,
      my: `Statistik GitHub ${encodedName}`,
      sk: `GitHub štatistiky používateľa ${encodedName}`,
      tr: `${encodedName} Hesabının GitHub Yıldızları`,
      pl: `Statystyki GitHub użytkownika ${encodedName}`,
      uz: `${encodedName}ning GitHub'dagi statistikasi`,
      vi: `Thống Kê GitHub ${encodedName}`,
      se: `GitHubstatistik för ${encodedName}`,
    },
    "statcard.totalstars": {
      ar: "مجموع النجوم",
      cn: "获标星数（star）",
      "zh-tw": "獲標星數（star）",
      cs: "Celkem hvězd",
      de: "Insgesamt erhaltene Sterne",
      en: "Total Stars Earned",
      bn: "সর্বমোট Star",
      es: "Estrellas totales",
      fr: "Total d'étoiles",
      hu: "Csillagok",
      it: "Stelle totali",
      ja: "スターされた数",
      kr: "받은 스타 수",
      nl: "Totaal Sterren Ontvangen",
      "pt-pt": "Total de estrelas",
      "pt-br": "Total de estrelas",
      np: "कुल ताराहरू",
      el: "Σύνολο Αστεριών",
      ru: "Всего звезд",
      "uk-ua": "Всього зірок",
      id: "Total Bintang",
      ml: "ആകെ നക്ഷത്രങ്ങൾ",
      my: "Jumlah Bintang",
      sk: "Hviezdy",
      tr: "Toplam Yıldız",
      pl: "Liczba otrzymanych gwiazdek",
      uz: "Yulduzchalar",
      vi: "Tổng Số Sao",
      se: "Antal intjänade stjärnor",
    },
    "statcard.commits": {
      ar: "مجموع الحفظ",
      cn: "累计提交数（commit）",
      "zh-tw": "累計提交數（commit）",
      cs: "Celkem commitů",
      de: "Anzahl Commits",
      en: "Total Commits",
      bn: "সর্বমোট Commit",
      es: "Commits totales",
      fr: "Total des Commits",
      hu: "Összes commit",
      it: "Commit totali",
      ja: "合計コミット数",
      kr: "전체 커밋 수",
      nl: "Aantal commits",
      "pt-pt": "Total de Commits",
      "pt-br": "Total de Commits",
      np: "कुल Commits",
      el: "Σύνολο Commits",
      ru: "Всего коммитов",
      "uk-ua": "Всього комітів",
      id: "Total Komitmen",
      ml: "ആകെ കമ്മിറ്റുകൾ",
      my: "Jumlah Komitmen",
      sk: "Všetky commity",
      tr: "Toplam Commit",
      pl: "Wszystkie commity",
      uz: "'Commit'lar",
      vi: "Tổng Số Cam Kết",
      se: "Totalt antal commits",
    },
    "statcard.prs": {
      ar: "مجموع طلبات السحب",
      cn: "拉取请求数（PR）",
      "zh-tw": "拉取請求數（PR）",
      cs: "Celkem PRs",
      de: "PRs Insgesamt",
      en: "Total PRs",
      bn: "সর্বমোট PR",
      es: "PRs totales",
      fr: "Total des PRs",
      hu: "Összes PR",
      it: "PR totali",
      ja: "合計 PR",
      kr: "PR 횟수",
      nl: "Aantal PR's",
      "pt-pt": "Total de PRs",
      "pt-br": "Total de PRs",
      np: "कुल PRs",
      el: "Σύνολο PRs",
      ru: "Всего pull request`ов",
      "uk-ua": "Всього pull request`iв",
      id: "Total Permintaan Tarik",
      ml: "ആകെ പുൾ അഭ്യർത്ഥനകൾ",
      my: "Jumlah PR",
      sk: "Všetky PR",
      tr: "Toplam PR",
      pl: "Wszystkie PR-y",
      uz: "'Pull Request'lar",
      vi: "Tổng Số PR",
      se: "Totalt antal PR",
    },
    "statcard.issues": {
      ar: "مجموع التحسينات",
      cn: "指出问题数（issue）",
      "zh-tw": "指出問題數（issue）",
      cs: "Celkem problémů",
      de: "Anzahl Issues",
      en: "Total Issues",
      bn: "সর্বমোট Issue",
      es: "Issues totales",
      fr: "Nombre total d'incidents",
      hu: "Összes hibajegy",
      it: "Segnalazioni totali",
      ja: "合計 issue",
      kr: "이슈 개수",
      nl: "Aantal kwesties",
      "pt-pt": "Total de Issues",
      "pt-br": "Total de Issues",
      np: "कुल मुद्दाहरू",
      el: "Σύνολο Ζητημάτων",
      ru: "Всего issue",
      "uk-ua": "Всього issue",
      id: "Total Masalah Dilaporkan",
      ml: "ആകെ ലക്കങ്ങൾ",
      my: "Jumlah Isu Dilaporkan",
      sk: "Všetky problémy",
      tr: "Toplam Hata",
      pl: "Wszystkie problemy",
      uz: "'Issue'lar",
      vi: "Tổng Số Vấn Đề",
      se: "Total antal issues",
    },
    "statcard.contribs": {
      ar: "ساهم في (العام الماضي)",
      cn: "贡献于（去年）",
      "zh-tw": "參與項目數 （去年）",
      cs: "Přispěl k (minulý rok)",
      de: "Beigetragen zu (letztes Jahr)",
      en: "Contributed to (last year)",
      bn: "অবদান (গত বছর)",
      es: "Contribuciones en (el año pasado)",
      fr: "Contribué à (l'année dernière)",
      hu: "Hozzájárulások (tavaly)",
      it: "Ha contribuito a (l'anno scorso)",
      ja: "貢献したリポジトリ （昨年）",
      kr: "(작년) 기여",
      nl: "Bijgedragen aan (vorig jaar)",
      "pt-pt": "Contribuiu em (ano passado)",
      "pt-br": "Contribuiu para (ano passado)",
      np: "कुल योगदानहरू (गत वर्ष)",
      el: "Συνεισφέρθηκε σε (πέρυσι)",
      ru: "Внёс вклад в (за прошлый год)",
      "uk-ua": "Зробив внесок у (за минулий рік)",
      id: "Berkontribusi ke (tahun lalu)",
      ml: "സമർപ്പിച്ചിരിക്കുന്നത് (കഴിഞ്ഞ വർഷം)",
      my: "Menyumbang kepada (tahun lepas)",
      sk: "Účasti (minulý rok)",
      tr: "Katkı Verildi (geçen yıl)",
      pl: "Kontrybucje (w zeszłym roku)",
      uz: "Hissa qoʻshgan (o'tgan yili)",
      vi: "Đã Đóng Góp (năm ngoái)",
      se: "Bidragit till (förra året)",
    },
    "statcard.reviews": {
      ar: "تمت مراجعة إجمالي العلاقات العامة",
      cn: "审查的 PR 总数",
      "zh-tw": "審查的 PR 總數",
      cs: "Celkový počet PR",
      de: "Insgesamt überprüfte PRs",
      en: "Total PRs Reviewed",
      bn: "সর্বমোট পুনরালোচনা করা PR",
      es: "PR totales revisados",
      fr: "Nombre total de PR examinés",
      hu: "Összes ellenőrzött PR",
      it: "PR totali esaminati",
      ja: "レビューされた PR の総数",
      kr: "검토된 총 PR",
      nl: "Totaal beoordeelde PR's",
      "pt-pt": "Total de PRs revistos",
      "pt-br": "Total de PRs revisados",
      np: "कुल पीआर समीक्षित",
      el: "Σύνολο Αναθεωρημένων PR",
      ru: "Всего pull request`ов проверено",
      "uk-ua": "Всього pull request`iв перевірено",
      id: "Total PR yang Direview",
      ml: "ആകെ പുൾ അഭിപ്രായങ്ങൾ",
      my: "Jumlah PR Dikaji Semula",
      sk: "Celkový počet PR",
      tr: "İncelenen toplam PR",
      pl: "Łącznie sprawdzonych PR",
      uz: "Koʻrib chiqilgan PR-lar soni",
      vi: "Tổng Số PR Đã Xem Xét",
      se: "Totalt antal granskade PR",
    },
    "statcard.discussions-started": {
      ar: "مجموع بدء المناقشات",
      cn: "发起的讨论总数",
      "zh-tw": "發起的討論總數",
      cs: "Celkem zahájených diskusí",
      de: "Gesamt gestartete Diskussionen",
      en: "Total Discussions Started",
      bn: "সর্বমোট আলোচনা শুরু",
      es: "Discusiones totales iniciadas",
      fr: "Nombre total de discussions lancées",
      hu: "Összes megkezdett megbeszélés",
      it: "Discussioni totali avviate",
      ja: "開始されたディスカッションの総数",
      kr: "시작된 토론 총 수",
      nl: "Totaal gestarte discussies",
      "pt-pt": "Total de Discussões Iniciadas",
      "pt-br": "Total de Discussões Iniciadas",
      np: "कुल चर्चा सुरु",
      el: "Σύνολο Συζητήσεων που Ξεκίνησαν",
      ru: "Всего начатых дискуссий",
      "uk-ua": "Всього розпочатих дискусій",
      id: "Total Diskusi Dimulai",
      ml: "ആരംഭിച്ച ആലോചനകൾ",
      my: "Jumlah Perbincangan Bermula",
      sk: "Celkový počet začatých diskusií",
      tr: "Başlatılan Toplam Tartışma",
      pl: "Łącznie rozpoczętych dyskusji",
      uz: "Boshlangan muzokaralar soni",
      vi: "Tổng Số Thảo Luận Bắt Đầu",
      se: "Totalt antal diskussioner startade",
    },
    "statcard.discussions-answered": {
      ar: "مجموع الردود على المناقشات",
      cn: "回复的讨论总数",
      "zh-tw": "回覆的討論總數",
      cs: "Celkem zodpovězených diskusí",
      de: "Gesamt beantwortete Diskussionen",
      en: "Total Discussions Answered",
      bn: "সর্বমোট আলোচনা উত্তর",
      es: "Discusiones totales respondidas",
      fr: "Nombre total de discussions répondues",
      hu: "Összes megválaszolt megbeszélés",
      it: "Discussioni totali risposte",
      ja: "回答されたディスカッションの総数",
      kr: "답변된 토론 총 수",
      nl: "Totaal beantwoorde discussies",
      "pt-pt": "Total de Discussões Respondidas",
      "pt-br": "Total de Discussões Respondidas",
      np: "कुल चर्चा उत्तर",
      el: "Σύνολο Συζητήσεων που Απαντήθηκαν",
      ru: "Всего отвеченных дискуссий",
      "uk-ua": "Всього відповідей на дискусії",
      id: "Total Diskusi Dibalas",
      ml: "ഉത്തരം നൽകിയ ആലോചനകൾ",
      my: "Jumlah Perbincangan Dijawab",
      sk: "Celkový počet zodpovedaných diskusií",
      tr: "Toplam Cevaplanan Tartışma",
      pl: "Łącznie odpowiedzianych dyskusji",
      uz: "Javob berilgan muzokaralar soni",
      vi: "Tổng Số Thảo Luận Đã Trả Lời",
      se: "Totalt antal diskussioner besvarade",
    },
    "statcard.prs-merged": {
      ar: "مجموع الطلبات المدمجة",
      cn: "合并的 PR 总数",
      "zh-tw": "合併的 PR 總數",
      cs: "Celkem sloučených PR",
      de: "Insgesamt zusammengeführte PRs",
      en: "Total PRs Merged",
      bn: "সর্বমোট PR একত্রীকৃত",
      es: "PR totales fusionados",
      fr: "Nombre total de PR fusionnés",
      hu: "Összes egyesített PR",
      it: "PR totali uniti",
      ja: "マージされた PR の総数",
      kr: "병합된 총 PR",
      nl: "Totaal samengevoegde PR's",
      "pt-pt": "Total de PRs Fundidos",
      "pt-br": "Total de PRs Fundidos",
      np: "कुल PRs मर्ज गरिएको",
      el: "Σύνολο Συγχωνευμένων PR",
      ru: "Всего объединённых pull request`ов",
      "uk-ua": "Всього об'єднаних pull request`iв",
      id: "Total PR Digabungkan",
      my: "Jumlah PR Digabungkan",
      sk: "Celkový počet zlúčených PR",
      tr: "Toplam Birleştirilmiş PR",
      pl: "Łącznie połączonych PR",
      uz: "Birlangan PR-lar soni",
      vi: "Tổng Số PR Đã Hợp Nhất",
      se: "Totalt antal sammanfogade PR",
    },
    "statcard.prs-merged-percentage": {
      ar: "نسبة الطلبات المدمجة",
      cn: "合并的 PR 百分比",
      "zh-tw": "合併的 PR 百分比",
      cs: "Sloučené PRs v procentech",
      de: "Zusammengeführte PRs in Prozent",
      en: "Merged PRs Percentage",
      bn: "PR একত্রীকরণের শতাংশ",
      es: "Porcentaje de PR fusionados",
      fr: "Pourcentage de PR fusionnés",
      hu: "Egyesített PR-k százaléka",
      it: "Percentuale di PR uniti",
      ja: "マージされた PR の割合",
      kr: "병합된 PR의 비율",
      nl: "Percentage samengevoegde PR's",
      "pt-pt": "Percentagem de PRs Fundidos",
      "pt-br": "Porcentagem de PRs Fundidos",
      np: "PR मर्ज गरिएको प्रतिशत",
      el: "Ποσοστό Συγχωνευμένων PR",
      ru: "Процент объединённых pull request`ов",
      "uk-ua": "Відсоток об'єднаних pull request`iв",
      id: "Persentase PR Digabungkan",
      my: "Peratus PR Digabungkan",
      sk: "Percento zlúčených PR",
      tr: "Birleştirilmiş PR Yüzdesi",
      pl: "Procent połączonych PR",
      uz: "Birlangan PR-lar foizi",
      vi: "Tỷ Lệ PR Đã Hợp Nhất",
      se: "Procent av sammanfogade PR",
    },
  };
};

const repoCardLocales = {
  "repocard.template": {
    ar: "قالب",
    bn: "টেমপ্লেট",
    cn: "模板",
    "zh-tw": "模板",
    cs: "Šablona",
    de: "Vorlage",
    en: "Template",
    es: "Plantilla",
    fr: "Modèle",
    hu: "Sablon",
    it: "Template",
    ja: "テンプレート",
    kr: "템플릿",
    nl: "Sjabloon",
    "pt-pt": "Modelo",
    "pt-br": "Modelo",
    np: "टेम्पलेट",
    el: "Πρότυπο",
    ru: "Шаблон",
    "uk-ua": "Шаблон",
    id: "Pola",
    ml: "ടെംപ്ലേറ്റ്",
    my: "Templat",
    sk: "Šablóna",
    tr: "Şablon",
    pl: "Szablony",
    uz: "Shablon",
    vi: "Mẫu",
    se: "Mall",
  },
  "repocard.archived": {
    ar: "محفوظ",
    bn: "আর্কাইভড",
    cn: "已归档",
    "zh-tw": "已歸檔",
    cs: "Archivováno",
    de: "Archiviert",
    en: "Archived",
    es: "Archivados",
    fr: "Archivé",
    hu: "Archivált",
    it: "Archiviata",
    ja: "アーカイブ済み",
    kr: "보관됨",
    nl: "Gearchiveerd",
    "pt-pt": "Arquivados",
    "pt-br": "Arquivados",
    np: "अभिलेख राखियो",
    el: "Αρχειοθετημένα",
    ru: "Архивирован",
    "uk-ua": "Архивований",
    id: "Arsip",
    ml: "ശേഖരിച്ചത്",
    my: "Arkib",
    sk: "Archivované",
    tr: "Arşiv",
    pl: "Zarchiwizowano",
    uz: "Arxivlangan",
    vi: "Đã Lưu Trữ",
    se: "Arkiverade",
  },
};

const langCardLocales = {
  "langcard.title": {
    ar: "أكثر اللغات إستخداماً",
    cn: "最常用的语言",
    "zh-tw": "最常用的語言",
    cs: "Nejpoužívanější jazyky",
    de: "Meist verwendete Sprachen",
    bn: "সর্বাধিক ব্যবহৃত ভাষা সমূহ",
    en: "Most Used Languages",
    es: "Lenguajes más usados",
    fr: "Langages les plus utilisés",
    hu: "Leggyakrabban használt nyelvek",
    it: "Linguaggi più utilizzati",
    ja: "最もよく使っている言語",
    kr: "가장 많이 사용된 언어",
    nl: "Meest gebruikte talen",
    "pt-pt": "Idiomas mais usados",
    "pt-br": "Linguagens mais usadas",
    np: "अधिक प्रयोग गरिएको भाषाहरू",
    el: "Οι περισσότερο χρησιμοποιούμενες γλώσσες",
    ru: "Наиболее часто используемые языки",
    "uk-ua": "Найчастіше використовувані мови",
    id: "Bahasa Yang Paling Banyak Digunakan",
    ml: "കൂടുതൽ ഉപയോഗിച്ച ഭാഷകൾ",
    my: "Bahasa Paling Digunakan",
    sk: "Najviac používané jazyky",
    tr: "En Çok Kullanılan Diller",
    pl: "Najczęściej używane języki",
    uz: "Eng koʻp ishlatiladigan tillar",
    vi: "Ngôn Ngữ Thường Sử Dụng",
    se: "Mest använda språken",
  },
  "langcard.nodata": {
    ar: "لا توجد بيانات لغات.",
    cn: "沒有語言數據。",
    "zh-tw": "沒有語言數據。",
    cs: "Žádné jazykové údaje.",
    de: "Keine Sprachdaten.",
    bn: "কোন ভাষার ডেটা নেই।",
    en: "No languages data.",
    es: "Sin datos de idiomas.",
    fr: "Aucune donnée sur les langues.",
    hu: "Nincsenek nyelvi adatok.",
    it: "Nessun dato sulle lingue.",
    ja: "言語データがありません。",
    kr: "언어 데이터가 없습니다.",
    nl: "Ingen sprogdata.",
    "pt-pt": "Sem dados de idiomas.",
    "pt-br": "Sem dados de idiomas.",
    np: "कुनै भाषा डाटा छैन।",
    el: "Δεν υπάρχουν δεδομένα γλωσσών.",
    ru: "Нет данных о языках.",
    "uk-ua": "Немає даних про мови.",
    id: "Tidak ada data bahasa.",
    ml: "ഭാഷാ ഡാറ്റയില്ല.",
    my: "Tiada data bahasa.",
    sk: "Žiadne údaje o jazykoch.",
    tr: "Dil verisi yok.",
    pl: "Brak danych dotyczących języków.",
    uz: "Til haqida ma'lumot yo'q.",
    vi: "Không có dữ liệu ngôn ngữ.",
    se: "Inga språkdata.",
  },
};

const wakatimeCardLocales = {
  "wakatimecard.title": {
    ar: "إحصائيات واكا تايم",
    cn: "WakaTime 周统计",
    "zh-tw": "WakaTime 周統計",
    cs: "Statistiky WakaTime",
    de: "WakaTime Status",
    en: "WakaTime Stats",
    bn: "WakaTime স্ট্যাটাস",
    es: "Estadísticas de WakaTime",
    fr: "Statistiques de WakaTime",
    hu: "WakaTime statisztika",
    it: "Statistiche WakaTime",
    ja: "WakaTime ワカタイム統計",
    kr: "WakaTime 주간 통계",
    nl: "WakaTime-statistieken",
    "pt-pt": "Estatísticas WakaTime",
    "pt-br": "Estatísticas WakaTime",
    np: "WakaTime तथ्या .्क",
    el: "Στατιστικά WakaTime",
    ru: "Статистика WakaTime",
    "uk-ua": "Статистика WakaTime",
    id: "Status WakaTime",
    ml: "വേക്ക് ടൈം സ്ഥിതിവിവരക്കണക്കുകൾ",
    my: "Statistik WakaTime",
    sk: "WakaTime štatistika",
    tr: "WakaTime İstatistikler",
    pl: "Statystyki WakaTime",
    uz: "WakaTime statistikasi",
    vi: "Thống Kê WakaTime",
    se: "WakaTime statistik",
  },
  "wakatimecard.lastyear": {
    ar: "العام الماضي",
    cn: "去年",
    "zh-tw": "去年",
    cs: "Minulý rok",
    de: "Letztes Jahr",
    en: "last year",
    bn: "গত বছর",
    es: "El año pasado",
    fr: "L'année dernière",
    hu: "Tavaly",
    it: "L'anno scorso",
    ja: "昨年",
    kr: "작년",
    nl: "Vorig jaar",
    "pt-pt": "Ano passado",
    "pt-br": "Ano passado",
    np: "गत वर्ष",
    el: "Πέρυσι",
    ru: "За прошлый год",
    "uk-ua": "За минулий рік",
    id: "Tahun lalu",
    ml: "കഴിഞ്ഞ വർഷം",
    my: "Tahun lepas",
    sk: "Minulý rok",
    tr: "Geçen yıl",
    pl: "W zeszłym roku",
    uz: "O'tgan yil",
    vi: "Năm ngoái",
    se: "Förra året",
  },
  "wakatimecard.last7days": {
    ar: "آخر 7 أيام",
    cn: "最近 7 天",
    "zh-tw": "最近 7 天",
    cs: "Posledních 7 dní",
    de: "Letzte 7 Tage",
    en: "last 7 days",
    bn: "গত ৭ দিন",
    es: "Últimos 7 días",
    fr: "7 derniers jours",
    hu: "Elmúlt 7 nap",
    it: "Ultimi 7 giorni",
    ja: "過去 7 日間",
    kr: "지난 7 일",
    nl: "Afgelopen 7 dagen",
    "pt-pt": "Últimos 7 dias",
    "pt-br": "Últimos 7 dias",
    np: "गत ७ दिन",
    el: "Τελευταίες 7 ημέρες",
    ru: "Последние 7 дней",
    "uk-ua": "Останні 7 днів",
    id: "7 hari terakhir",
    ml: "കഴിഞ്ഞ 7 ദിവസം",
    my: "7 hari lepas",
    sk: "Posledných 7 dní",
    tr: "Son 7 gün",
    pl: "Ostatnie 7 dni",
    uz: "O'tgan 7 kun",
    vi: "7 ngày qua",
    se: "Senaste 7 dagarna",
  },
  "wakatimecard.notpublic": {
    ar: "ملف المستخدم غير عام",
    cn: "WakaTime 用户个人资料未公开",
    "zh-tw": "WakaTime 使用者個人資料未公開",
    cs: "Profil uživatele WakaTime není veřejný",
    de: "WakaTime-Benutzerprofil nicht öffentlich",
    en: "WakaTime user profile not public",
    bn: "WakaTime ব্যবহারকারীর প্রোফাইল প্রকাশ্য নয়",
    es: "Perfil de usuario de WakaTime no público",
    fr: "Profil utilisateur WakaTime non public",
    hu: "A WakaTime felhasználói profilja nem nyilvános",
    it: "Profilo utente WakaTime non pubblico",
    ja: "WakaTime ユーザープロファイルは公開されていません",
    kr: "WakaTime 사용자 프로필이 공개되지 않았습니다",
    nl: "WakaTime gebruikersprofiel niet openbaar",
    "pt-pt": "Perfil de usuário WakaTime não público",
    "pt-br": "Perfil de usuário WakaTime não público",
    np: "WakaTime प्रयोगकर्ता प्रोफाइल सार्वजनिक छैन",
    el: "Το προφίλ χρήστη WakaTime δεν είναι δημόσιο",
    ru: "Профиль пользователя WakaTime не является общедоступным",
    "uk-ua": "Профіль користувача WakaTime не є публічним",
    id: "Profil pengguna WakaTime tidak publik",
    ml: "WakaTime ഉപയോക്തൃ പ്രൊഫൈൽ പൊതുവായി പ്രസിദ്ധീകരിക്കപ്പെടാത്തതാണ്",
    my: "Profil pengguna WakaTime tidak awam",
    sk: "Profil používateľa WakaTime nie je verejný",
    tr: "WakaTime kullanıcı profili herkese açık değil",
    pl: "Profil użytkownika WakaTime nie jest publiczny",
    uz: "WakaTime foydalanuvchi profili ochiq emas",
    vi: "Hồ sơ người dùng WakaTime không công khai",
    se: "WakaTime användarprofil inte offentlig",
  },
  "wakatimecard.nocodedetails": {
    ar: "المستخدم لا يشارك معلومات تفصيلية عن البرمجة",
    cn: "用户不公开分享详细的代码统计信息",
    "zh-tw": "使用者不公開分享詳細的程式碼統計資訊",
    cs: "Uživatel nesdílí podrobné statistiky kódu",
    de: "Benutzer teilt keine detaillierten Code-Statistiken",
    en: "User doesn't publicly share detailed code statistics",
    bn: "ব্যবহারকারী বিস্তারিত কোড পরিসংখ্যান প্রকাশ করেন না",
    es: "El usuario no comparte públicamente estadísticas detalladas de código",
    fr: "L'utilisateur ne partage pas publiquement de statistiques de code détaillées",
    hu: "A felhasználó nem osztja meg nyilvánosan a részletes kódstatisztikákat",
    it: "L'utente non condivide pubblicamente statistiche dettagliate sul codice",
    ja: "ユーザーは詳細なコード統計を公開しません",
    kr: "사용자는 자세한 코드 통계를 공개하지 않습니다",
    nl: "Gebruiker deelt geen gedetailleerde code-statistieken",
    "pt-pt":
      "O utilizador não partilha publicamente estatísticas detalhadas de código",
    "pt-br":
      "O usuário não compartilha publicamente estatísticas detalhadas de código",
    np: "प्रयोगकर्ता सार्वजनिक रूपमा विस्तृत कोड तथ्याङ्क साझा गर्दैन",
    el: "Ο χρήστης δεν δημοσιεύει δημόσια λεπτομερείς στατιστικές κώδικα",
    ru: "Пользователь не делится подробной статистикой кода",
    "uk-ua": "Користувач не публікує детальну статистику коду",
    id: "Pengguna tidak membagikan statistik kode terperinci secara publik",
    ml: "ഉപയോക്താവ് പൊതുവെ വിശദീകരിച്ച കോഡ് സ്റ്റാറ്റിസ്റ്റിക്സ് പങ്കിടുന്നില്ല",
    my: "Pengguna tidak berkongsi statistik kod terperinci secara awam",
    sk: "Používateľ neposkytuje verejne podrobné štatistiky kódu",
    tr: "Kullanıcı ayrıntılı kod istatistiklerini herkese açık olarak paylaşmıyor",
    pl: "Użytkownik nie udostępnia publicznie szczegółowych statystyk kodu",
    uz: "Foydalanuvchi umumiy ko`d statistikasini ochiq ravishda almashmaydi",
    vi: "Người dùng không chia sẻ thống kê mã chi tiết công khai",
    se: "Användaren delar inte offentligt detaljerad kodstatistik",
  },
  "wakatimecard.nocodingactivity": {
    ar: "لا يوجد نشاط برمجي لهذا الأسبوع",
    cn: "本周没有编程活动",
    "zh-tw": "本周沒有編程活動",
    cs: "Tento týden žádná aktivita v kódování",
    de: "Keine Aktivitäten in dieser Woche",
    en: "No coding activity this week",
    bn: "এই সপ্তাহে কোন কোডিং অ্যাক্টিভিটি নেই",
    es: "No hay actividad de codificación esta semana",
    fr: "Aucune activité de codage cette semaine",
    hu: "Nem volt aktivitás ezen a héten",
    it: "Nessuna attività in questa settimana",
    ja: "今週のコーディング活動はありません",
    kr: "이번 주 작업내역 없음",
    nl: "Geen programmeeractiviteit deze week",
    "pt-pt": "Sem atividade esta semana",
    "pt-br": "Nenhuma atividade de codificação esta semana",
    np: "यस हप्ता कुनै कोडिंग गतिविधि छैन",
    el: "Δεν υπάρχει δραστηριότητα κώδικα γι' αυτή την εβδομάδα",
    ru: "На этой неделе не было активности",
    "uk-ua": "На цьому тижні не було активності",
    id: "Tidak ada aktivitas perkodingan minggu ini",
    ml: "ഈ ആഴ്ച കോഡിംഗ് പ്രവർത്തനങ്ങളൊന്നുമില്ല",
    my: "Tiada aktiviti pengekodan minggu ini",
    sk: "Žiadna kódovacia aktivita tento týždeň",
    tr: "Bu hafta herhangi bir kod yazma aktivitesi olmadı",
    pl: "Brak aktywności w tym tygodniu",
    uz: "Bu hafta faol bo'lmadi",
    vi: "Không Có Hoạt Động Trong Tuần Này",
    se: "Ingen aktivitet denna vecka",
  },
};

const availableLocales = Object.keys(repoCardLocales["repocard.archived"]);

/**
 * Checks whether the locale is available or not.
 *
 * @param {string} locale The locale to check.
 * @returns {boolean} Boolean specifying whether the locale is available or not.
 */
const isLocaleAvailable = (locale) => {
  return availableLocales.includes(locale.toLowerCase());
};

export {
  availableLocales,
  isLocaleAvailable,
  langCardLocales,
  repoCardLocales,
  statCardLocales,
  wakatimeCardLocales,
};
