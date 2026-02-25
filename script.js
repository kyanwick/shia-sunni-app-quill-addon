// Supabase configuration
const SUPABASE_URL = 'https://ckxwufkyutfkfqzttjam.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNreHd1Zmt5dXRma2ZxenR0amFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzNTU0MDksImV4cCI6MjA4NTkzMTQwOX0.1tkAfP4jLiYRCxlhRGy8kYR2rCQlhYK7Y_ZIrZj9cmo';

// عناصر DOM الأساسية
const splash = document.getElementById("splash");
const container = document.getElementById("container");

const sectionsDiv = document.getElementById("sections");
const sectionList = document.getElementById("sectionList");

const subSectionsDiv = document.getElementById("subSections");
const subSectionList = document.getElementById("subSectionList");
const subSectionTitle = document.getElementById("subSectionTitle");
const backToSectionsBtn = document.getElementById("backToSectionsBtn");

const topicsSection = document.getElementById("topicsSection");
const topicList = document.getElementById("topicList");
const topicSectionTitle = document.getElementById("topicSectionTitle");
const backToSubSectionsBtn = document.getElementById("backToSubSectionsBtn");

const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");
const searchToggle = document.getElementById("searchToggle");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const languageSelect = document.getElementById("languageSelect");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const backgroundSelect = document.getElementById("backgroundSelect");

const favoritesListDiv = document.getElementById("favoritesList");

// بيانات الأقسام بعد التعديل
const data = {
  ar: {
    sections: {
      "عقائد الشيعة الامامية":         
      { subSections: {
        "اصول الدين": { topics: [] },
"فروع الدين": { topics: [] },

      } 
      },
      
      "خصائص اهل البيت ع": 
      { subSections: {
"الرسول الاكرم محمد(ص وآله)": { topics: [] },
"أمير المؤمنين علي (ع)": { topics: [] },
"السيدة فاطمة الزهراء (ع)": { topics: [] },
"الامام الحسن المجتبى (ع)": { topics: [] },
"الامام الحسين الشهيد (ع)": { topics: [] },
"الامام علي السجاد (ع)": { topics: [] },
"الامام محمد الباقر (ع)": { topics: [] },
"الامام جعفر الصادق (ع)": { topics: [] },
"الامام موسى الكاظم (ع)": { topics: [] },
"الامام علي الرضا (ع)": { topics: [] },
"الامام محمد الجواد (ع)": { topics: [] },
"الامام علي الهادي (ع)": { topics: [] },
"الامام الحسن العسكري (ع)": { topics: [] },
"الامام الحجة المهدي (ع)": { topics: [] },
"خصائص متفرقة للعترة (ع)": { topics: [] },
     }
  },
      
      "صد الشبهات وردها":
      { subSections: {
          "النبي الأكــرم محمد ص وآله": { topics: [] },
          "أمير المؤمنيـــــــن علي ع": { topics: [] },
          "ام الائـمة فاطمة الزهراء ع": { topics: [] },
          "الامـام الحسن المجتبى ع": { topics: [] },
          "الامـام الحسين الشهيد ع": { topics: [] },
          "الامـــــــام علي السجاد ع": { topics: [] },
          "الامـــــــام محمد الباقر ع": { topics: [] },
          "الامـــــام جعفر الصادق ع": { topics: [] },
          "الامـــــام موسى الكاظم ع": { topics: [] },
          "الامـــــــــــام علي الرضا ع": { topics: [] },
          "الامــــــام محمد الجواد ع": { topics: [] },
          "الامـــــــــام علي الهادي ع": { topics: [] },
          "الامام الحسن العسكري ع": { topics: [] },
          "الامــــام الحجة المهدي ع": { topics: [] },
          "رد الشبهات المتفرقة": { topics: [] }
      } 
      },
      "الصحابة في الميزان":
      { subSections: {
"ابي بكر بن ابي قحافة": { topics: [] },
"عمر بن الخطاب": { topics: [] },
"عثمان بن عفان": { topics: [] },
"معاوية بن ابي سفيان": { topics: [] },
"عائشة بنت ابي بكر": { topics: [] },
"حفصة بنت عمر": { topics: [] },
"ابو هريرة": { topics: [] },
"خالد بن الوليد": { topics: [] },
"يزيد بن معاوية": { topics: [] },
"الوليد بن عقبة": { topics: [] },
"عمرو بن العاص": { topics: [] },
"الزبير بن العوام": { topics: [] },
"طلحة بن الزبير": { topics: [] },
"كعب الاحبار": { topics: [] },
"سمرة بن جندب": { topics: [] },
"الوليد بن عقبة": { topics: [] },
  
} 
},
      "فقه السلف تحت المجهر":
{ subSections: {
          "قسم الفتاوى الغريبة": { topics: ["تحريم مشاهدة كرة القدم ", "تحريم على المرأة الاختلاء بالحيوانات ","تحريم على المرأة لبس النعال ", "تحريم على المرأة لبس الذهب ","تحريم على المرأة حلق لحيتها ", "تحريم ذكر مقتل الحسين (ع) ","تحريم ارسال الرموز التعبيرية", "تحريم وضع القدم فوق الاخرى ","تحريم لبس الساعة في اليد ", "تحريم لبس البنطال ","تحريم السكن في اوربا ", "تحريم التقاط الصور لنفسك ","تحريم على المرأة الاستحمام بالحمام ", "موضوع ","موضوع ", "موضوع ","موضوع ", "تحريم الاحتفال بالمولد النبوي ","تحريم مقاومة الصهاينة ", "تحريم البقاء في غزة ","تحليل سماع الغناء ", "تحليل قراءة القرآن بطريقة الغناء ","تحليل اكل الحيوانات المحرمة ", "تحليل شرب البول ","تحليل شرب النبيذ ", "تحليل اكل الميتة ","تحليل الكذب ", "تحليل اكل لحوم الحمر الاهلية ","تحليل اكل الخراء ", "تحليل قراءة القرآن باللغة الفارسية ","تحليل كتاب القرآن بالبول والدم ", "تحليل السجود على المؤخرات ","تحليل السجود على النعال ", " تحليل الزواج من 9 نساء واكثر ","اباحة الصلاة في مكان نجس ", "اباحة الصلاة للعراة بدون ملابس ","موضوع ", "اباحة الاستعانة بالمشركين ","اباحة شرب حليب الاتان (انثى الحمار) ", "فتاوى تكفير الاشاعرة ","فتاوى تكفير الشيعة "
                                           ] 
                                 },
  
  
          "قسم الفتاوى الاباحية +18": { topics: ["", "اباحة ابتلاع المني", "اباحة الاستمناء","اباحة رضاع الكبير", "اباحة نكاح المحارم","اباحةاستئار النساء للزنا","اباحة نكاح البطيخة", "اباحة الاكربنج للنساء","اباحة اللواط في الجنة", "جواز المضاجعة من المؤخرة","نكاح الطفلة والرضيعة", "الحكم بطهارة المني","الاستمناء لا يفسد الصوم", "اللواط لا يفسد الصوم","اباحة نكاح الموتى", "ادخال العصا في المؤخرة لا يفسد الصوم","دخول الذبابة في المؤخرة لا ينقض الوضوء", "اباحة نظر الرجل الى فرج السنية عند الخطوبة","اباحة زواج المرأة بدون علمها او موافقتها", "جواز نكاح اكثر من زوجة في فراش واحد"," شق العضو الذكري وادخاله في فرجين"] }
}
},
 
 
"علم الرجال والحديث": {
  topics: [
    "رواية البخاري عن النواصب",
    "رواية البخاري عن الشيعة",
    "رواية البخاري عن الرافضة",
    "رواية البخاري عن الجهمية",
    "رواية البخاري عن المرجئة",
    "رواية البخاري عن القدرية",
    "رواية البخاري عن الخوارج",
    "رواية البخاري عن الملحدين",
    "رواية البخاري عن الجن",
    "رواية البخاري عن الضعفاء",
    "رواية البخاري عن نفسه",
    "رواية البخاري عن الكذابين",
    "رواية البخاري عن الوضاعين",
    "رواية البخاري عن السكارى",
    "رواية البخاري عن المجاهيل",
    "رواية البخاري عن السبئية",
    "رواية البخاري عن سراق الحديث",
    "رواية البخاري عمن يبيعون الأحاديث"
  ]
},
      "عقائدنا من كتب القوم":         { subSections: {} },
"حواراتنا مع المخالفين": {
  topics: [
    "اللطم حرام شيعي واتحداك ان...",
    "هل المتعة حلال يا شيعي؟",
    "ماذا استفادت الامة من غيبة المهدي يا شيعة؟",
    "الطواف حول الكعبة وليس حول القبور يا شيعة",
    "الشيعة في افريقيا بالنار لان بشرتهم سوداء ..",
    "اتحداكم ان تعطونا كتاب صحيح يا شيعة",
    "اين احاديث فاطمة الزهراء عندكم يا شيعة؟",
    "اتحداكم ان تثبت ان الائمة معصومين بحديث صحيح",
    "السلام على من اتبع الهدى يا شيعة",
    "لماذا تطعنون بعرض النبي يا شيعة",
    "لماذا تكفرون من انكر ولاية الامام علي؟",
    "الله امرنا باتباع الصحابة وانتم تسبونهم"
  ]
},

"مباحث عقائدية متنوعة": {
  topics: [
    "تحريف القرآن",
    "زواج المتعة",
    "المهدي (ع)",
    "اللطم",
    "التوسل",
    "آية التطهير",
    "آية الولاية",
    "آية الوضوء",
    "العنصرية عند السنة",
    "البخاري وصحيحه في الميزان",
    "آية الوضوء",
    "شخصية النبي الأكرم",
    "التقية بين السنة والشيعة",
    "السيدة نرجس (ع)",
    "قداسة أزواج الرسل",
    "حديثي حديث أبي",
    "فضائل أبي بكر",
    "جهل الشيعة في مناسك حجهم"
  ]
},
      "مواضيع أخرى متفرقة":           { subSections: {} },
      "اسألنا سؤالك":                   { subSections: {} },
      "تواصل معنا":                   { subSections: {} }
    },
    sectionsTitle:   "الأقسام",
    backButton:      "←",
    backButtonSub:   "←",
    settingsTitle:   "الإعدادات",
    languageLabel:   "اللغة:",
    themeLabel:      "الوضع:",
    toggleThemeBtn:  "تبديل الوضع",
    backgroundLabel: "خلفية التطبيق:",
    chooseBackground:"اختر الخلفية",
    background1: "خلفية 1",
    background2: "خلفية 2",
    background3: "خلفية 3",
    background4: "خلفية 4",
    background5: "خلفية 5",
    background6: "خلفية 6",
    background7: "خلفية 7",
    background8: "خلفية 8",
    background9: "خلفية 9",
    background10: "خلفية 10",
    background11: "خلفية 11",
    background12: "خلفية 12",
    background13: "خلفية 13",
    background14: "خلفية 14",
    background15: "خلفية 15",
    background16: "خلفية 16",
    background17: "خلفية 17",
    mainBannerTitle: "سبل السلام",
    appName: "سبل السلام",
    appSlogan: "لرد الشبهات حول الإسلام",
    favoritesTitle: "المفضلات",
    adminTitle: "الإدارة",
    exportLangBtn: "تحرير المحتوى",
    exportHelp: "سيتم تنزيل ملف JSON للغة الحالية حتى تتمكن من تحديثه ونشره.",
    sidebarToggleTitle: "فتح القائمة",
    searchToggleTitle: "بحث",
    searchPlaceholder: "ابحث...",
    messages: {
      noSubsectionsOrTopics: "هذا القسم قيد الانشاء ، سيتم فتح وعرض محتويات هذا القسم في التحديثات القادمة للتطبيق بإذن الله تعالى ، ولا تترد بالتواصل معنا في طرح وسرد الاسئلة والمواضيع والشبهات ليتم الرد عليها وادراجها بهذا القسم .",
      noTopicsAvailable:      "لا توجد مواضيع في هذا القسم.",
      noFavorites:            "لا توجد مفضلات حالياً.",
      copiedTopic:            "تم نسخ الموضوع",
      noResults:              "لا توجد نتائج",
      // CRUD Editor translations
      crudEditorTitle:        "✏️ تحرير المحتوى",
      crudClose:              "✕",
      crudEditType:           "نوع التحرير:",
      crudAddSection:         "إضافة/تعديل قسم رئيسي",
      crudAddSubsection:      "إضافة/تعديل قسم فرعي",
      crudAddTopic:           "إضافة/تعديل موضوع",
      crudSectionName:        "اسم القسم الرئيسي:",
      crudSectionPlaceholder: "مثال: عقائد الشيعة الامامية",
      crudParentSection:      "القسم الرئيسي:",
      crudSelectSection:      "-- اختر القسم --",
      crudSubsectionName:     "اسم القسم الفرعي:",
      crudSubsectionPlaceholder: "مثال: اصول الدين",
      crudSelectSubsection:   "-- اختر القسم الفرعي --",
      crudTopicTitle:         "عنوان الموضوع:",
      crudTopicTitlePlaceholder: "مثال: هل الشيعة مسلمون؟",
      crudTopicContent:       "المحتوى:",
      crudTopicContentPlaceholder: "اكتب محتوى الموضوع هنا...",
      crudTopicImage:         "صورة الموضوع (اختياري):",
      crudImageHelp:          "اختر صورة من جهازك (JPG, PNG, GIF)",
      crudRemoveImage:        "✕ إزالة الصورة",
      crudSave:               "💾 حفظ",
      crudDelete:             "🗑️ حذف",
      crudExport:             "📥 تصدير المحتوى",
      crudImport:             "📤 استيراد المحتوى",
      crudExportSuccess:      "✓ تم تصدير المحتوى بنجاح",
      crudImportSuccess:      "✓ تم استيراد المحتوى بنجاح",
      crudImportError:        "✗ ملف JSON غير صالح",
      crudNoContent:          "⚠️ لا يوجد محتوى للتصدير",
      crudSaved:              "✓ تم الحفظ بنجاح",
      crudError:              "✗ حدث خطأ",
      crudEnterAll:           "⚠️ الرجاء إدخال جميع الحقول",
      crudDeleteWIP:          "⚠️ ميزة الحذف قيد التطوير",
      adminLogin:             "✏️ تحرير المحتوى",
      adminLoginTitle:        "🔐 التحقق من كلمة المرور",
      adminPasswordVerifyText: "الرجاء إدخال كلمة المرور للحفظ أو الحذف",
      adminPassword:          "كلمة المرور",
      adminLoginBtn:          "تأكيد",
      adminCancel:            "إلغاء",
      adminLoginSuccess:      "✓ تم تسجيل الدخول بنجاح",
      adminLoginError:        "✗ كلمة مرور خاطئة"
    }
  },
  // باقي البيانات (en, fa) كما هي بدون تغيير
};

// محتويات المواضيع (قابلة للإضافة لاحقًا)
const topicContents = {
  // "اسم الموضوع": "نص المحتوى التفصيلي..."
};

// Remote override data (optional) and helper to pick language data
let remoteData = null;
let bundledContentLoaded = false;

// Load bundled custom-content.json on first run
async function loadBundledContent() {
  if (bundledContentLoaded) return;
  
  // Only load if localStorage is empty
  if (localStorage.getItem('customContent')) {
    bundledContentLoaded = true;
    return;
  }
  
  try {
    const response = await fetch('./custom-content.json');
    if (response.ok) {
      const content = await response.text();
      localStorage.setItem('customContent', content);
      console.log('✅ Loaded bundled custom-content.json');
      bundledContentLoaded = true;
    }
  } catch (e) {
    console.warn('Could not load bundled custom-content.json:', e);
    bundledContentLoaded = true;
  }
}

function getLangData(lang) {
  // Check remote data first (from fetched JSON files)
  const fromRemote = remoteData && remoteData[lang];
  // Fallback to inline data
  const baseData = fromRemote || data[lang] || data.ar;
  
  // Check for custom Arabic content (single source of truth)
  const customArabic = localStorage.getItem('customContent');
  if (customArabic) {
    try {
      const parsed = JSON.parse(customArabic);
      // Return language-specific UI with custom Arabic sections
      return {
        ...baseData,
        sections: parsed.sections || data.ar.sections
      };
    } catch (e) {
      console.warn('Failed to load custom content:', e);
    }
  }
  
  // Fallback: return language data with Arabic sections
  return {
    ...baseData,
    sections: data.ar.sections
  };
}

let navigationStack = [];
let currentPath = [];

// دالة الانتقال بالتلاشي
function fadeOut(element, callback) {
  element.classList.add("fade-out");
  element.classList.remove("fade-in");
  setTimeout(() => {
    callback();
    element.classList.remove("fade-out");
    element.classList.add("fade-in");
  }, 400);
}

// ترجمة النصوص حسب اللغة
function translatePage(lang) {
  const t = getLangData(lang);
  
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    // Check both top level and messages object
    const value = t?.[key] || t?.messages?.[key];
    if (value) {
      el.textContent = value;
    }
  });
  // Translate common attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = t?.[key] || t?.messages?.[key];
    if (value) el.setAttribute('placeholder', value);
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    const value = t?.[key] || t?.messages?.[key];
    if (value) el.setAttribute('title', value);
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria-label');
    const value = t?.[key] || t?.messages?.[key];
    if (value) el.setAttribute('aria-label', value);
  });
}

// Try to fetch remote content for a specific language.
// Supports either a single data.json containing language keys
// or per-language files like data.ar.json or ar.json under the same base URL.
async function fetchRemoteForLang(lang) {
  let rawUrl = localStorage.getItem('remoteDataUrl') || '';
  const tried = new Set();
  async function tryUrl(u) {
    if (!u || tried.has(u)) return null;
    tried.add(u);
    try {
      const resp = await fetch(u, { cache: 'no-store' });
      if (!resp.ok) return null;
      const json = await resp.json();
      return { url: u, json };
    } catch (e) {
      return null;
    }
  }

  // Build candidate URLs to try. If a saved remote URL exists, try it first plus derived variants.
  let candidates = [];
  if (rawUrl) {
    candidates.push(rawUrl);
    const base = rawUrl.replace(/\.json$/i, '');
    candidates.push(`${base}.${lang}.json`, `${base}-${lang}.json`, `${base}/${lang}.json`, `${base}/data.${lang}.json`, `${base}/data-${lang}.json`, `${base}/${lang}/data.json`);
  } else {
    // no saved URL: try common paths relative to the app
    candidates = [
      `./data.${lang}.json`,
      `./data-${lang}.json`,
      `./${lang}.json`,
      `./data.json`,
      `/data.${lang}.json`,
      `/data-${lang}.json`,
      `/data.json`
    ];
  }

  for (const u of candidates) {
    const res = await tryUrl(u);
    if (res) {
      // if top-level contains multiple languages and requested lang is present
      if (res.json[lang]) {
        remoteData = res.json;
        try { const cache = await caches.open('shia-sunni-content-v1'); await cache.put(u, new Response(JSON.stringify(res.json), { headers: { 'Content-Type': 'application/json' } })); } catch(e){}
        return true;
      }
      // per-language payload
      remoteData = { [lang]: res.json };
      try { const cache = await caches.open('shia-sunni-content-v1'); await cache.put(u, new Response(JSON.stringify(res.json), { headers: { 'Content-Type': 'application/json' } })); } catch(e){}
      return true;
    }
  }

  return false;
}

// تحميل المفضلات من localStorage
function loadFavorites() {
  const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
  favoritesListDiv.innerHTML = "";
  if (favs.length === 0) {
    favoritesListDiv.textContent = getLangData(languageSelect.value).messages.noFavorites;
    return;
  }
  const lang = languageSelect.value || 'ar';
  const t = getLangData(lang) || {};
  const ui = t.ui || {};
  favs.forEach(topic => {
    const favDiv = document.createElement("div");
    favDiv.style.display = "flex";
    favDiv.style.justifyContent = "space-between";
    favDiv.style.alignItems = "center";
    favDiv.style.padding = "4px 8px";
    favDiv.style.borderBottom = "1px solid #90caf9";
    favDiv.style.cursor = "pointer";
    favDiv.tabIndex = 0;
    favDiv.setAttribute("role", "button");

    const topicSpan = document.createElement("span");
    topicSpan.textContent = topic;
    topicSpan.addEventListener("click", e => {
      e.stopPropagation();
      openTopicsRecursive(topic, [topic]);
    });
    topicSpan.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openTopicsRecursive(topic, [topic]);
      }
    });

  const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "×";
  deleteBtn.title = ui.favRemoveTitle || "إزالة من المفضلات";
    deleteBtn.style.background = "transparent";
    deleteBtn.style.border = "none";
    deleteBtn.style.color = "red";
    deleteBtn.style.fontWeight = "bold";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.fontSize = "1.2rem";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", e => {
      e.stopPropagation();
      removeFavorite(topic);
    });

    favDiv.appendChild(topicSpan);
    favDiv.appendChild(deleteBtn);
    favoritesListDiv.appendChild(favDiv);
  });
}

// إزالة من المفضلات
function removeFavorite(topicName) {
  let favs = JSON.parse(localStorage.getItem("favorites") || "[]");
  favs = favs.filter(t => t !== topicName);
  localStorage.setItem("favorites", JSON.stringify(favs));
  loadFavorites();
  updateTopicFavIcon(topicName, false);
}

// إضافة/إزالة من المفضلات
function toggleFavorite(topicName) {
  let favs = JSON.parse(localStorage.getItem("favorites") || "[]");
  let added = false;
  if (favs.includes(topicName)) {
    favs = favs.filter(t => t !== topicName);
  } else {
    favs.push(topicName);
    added = true;
  }
  localStorage.setItem("favorites", JSON.stringify(favs));
  loadFavorites();
  updateTopicFavIcon(topicName, added);
}

// تحديث أيقونة المفضلة عند المواضيع القائمة
function updateTopicFavIcon(topicName, isFav) {
  [...topicList.children].forEach(child => {
    if (child.textContent === topicName) {
      const toolbar = child.querySelector(".topic-toolbar");
      if (!toolbar) return;
      const favBtn = toolbar.querySelector(".fav-btn");
      if (!favBtn) return;
      const lang = languageSelect.value || 'ar';
      const t = getLangData(lang) || {};
      const ui = t.ui || {};
      if (isFav) {
        favBtn.innerHTML = "★";
        favBtn.style.color = "gold";
        favBtn.title = ui.favRemoveTitle || "إزالة من المفضلات";
      } else {
        favBtn.innerHTML = "☆";
        favBtn.style.color = "gray";
        favBtn.title = ui.favAddTitle || "إضافة إلى المفضلات";
      }
    }
  });
}

// إنشاء شريط أدوات عند عرض محتوى الموضوع
function createTopicToolbarForContent(topicName, contentElement) {
  const toolbar = document.createElement("div");
  toolbar.className = "topic-toolbar";
  toolbar.style.display = "flex";
  toolbar.style.justifyContent = "flex-end";
  toolbar.style.gap = "12px";
  toolbar.style.marginBottom = "10px";

  const lang = languageSelect.value || 'ar';
  const t = getLangData(lang) || {};
  const ui = t.ui || {};

  // زر النسخ
  const copyBtn = document.createElement("button");
  copyBtn.textContent = (ui && ui.copyContentBtn) || "نسخ المحتوى";
  copyBtn.title = (ui && ui.copyContentTitle) || "نسخ محتوى الموضوع";
  copyBtn.style.cursor = "pointer";
  copyBtn.style.padding = "4px 8px";
  copyBtn.style.border = "1px solid #90caf9";
  copyBtn.style.borderRadius = "6px";
  copyBtn.style.background = "#e3f2fd";
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(contentElement.textContent)
      .then(() => alert((t.messages && t.messages.copiedTopic) || "تم نسخ محتوى الموضوع"));
  });

  // زر المفضلة
  const favBtn = document.createElement("button");
  favBtn.className = "fav-btn";
  favBtn.style.cursor = "pointer";
  favBtn.style.fontSize = "1.3rem";
  favBtn.style.border = "none";
  favBtn.style.background = "transparent";

  function updateFavIcon() {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (favs.includes(topicName)) {
      favBtn.innerHTML = "★";
      favBtn.style.color = "gold";
      favBtn.title = ui.favRemoveTitle || "إزالة من المفضلات";
    } else {
      favBtn.innerHTML = "☆";
      favBtn.style.color = "gray";
      favBtn.title = ui.favAddTitle || "إضافة إلى المفضلات";
    }
  }
  updateFavIcon();
  favBtn.addEventListener("click", () => {
    toggleFavorite(topicName);
    updateFavIcon();
  });

  // زر المشاركة
  const shareBtn = document.createElement("button");
  shareBtn.textContent = (ui && ui.shareBtn) || "مشاركة";
  shareBtn.title = (ui && ui.shareTitle) || "مشاركة الموضوع";
  shareBtn.style.cursor = "pointer";
  shareBtn.style.padding = "4px 8px";
  shareBtn.style.border = "1px solid #90caf9";
  shareBtn.style.borderRadius = "6px";
  shareBtn.style.background = "#e3f2fd";
  shareBtn.addEventListener("click", () => {
    const url = window.location.href.split("#")[0] + "#topic=" + encodeURIComponent(topicName);
    navigator.clipboard.writeText(url)
      .then(() => alert((t.messages && t.messages.shareLinkCopied) || "تم نسخ رابط الموضوع للمشاركة"));
  });

  toolbar.appendChild(copyBtn);
  toolbar.appendChild(favBtn);
  toolbar.appendChild(shareBtn);
  return toolbar;
}

// فتح القائمة الرئيسية للأقسام
function openMainSections() {
  fadeOut(sectionsDiv, () => {
    navigationStack = [];
    sectionsDiv.style.display = "block";
    subSectionsDiv.style.display = "none";
    topicsSection.style.display = "none";
    sectionList.innerHTML = "";

  const lang = languageSelect.value;
  const langSections = getLangData(lang).sections;
    for (const sectionName in langSections) {
      const div = document.createElement("div");
      div.className = "section-item";
      div.textContent = sectionName;
      div.tabIndex = 0;
      div.setAttribute("role", "button");
      div.setAttribute("aria-label", sectionName);
      div.addEventListener("click", () => {
        navigationStack = [{ name: sectionName, data: langSections[sectionName] }];
        openSubSectionRecursive(sectionName, langSections[sectionName]);
        hideSearch();
      });
      div.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          div.click();
        }
      });
      sectionList.appendChild(div);
    }
  });
}

// عرض قائمة بالأقسام الفرعية
function renderSectionsList(sectionsObj) {
  subSectionList.innerHTML = "";
  for (const key in sectionsObj) {
    const div = document.createElement("div");
    div.className = "section-item";
    div.textContent = key;
    div.tabIndex = 0;
    div.setAttribute("role", "button");
    div.setAttribute("aria-label", key);
    div.addEventListener("click", () => {
      navigationStack.push({ name: key, data: sectionsObj[key] });
      openSubSectionRecursive(key, sectionsObj[key]);
      hideSearch();
    });
    div.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        div.click();
      }
    });
    subSectionList.appendChild(div);
  }
}

// التنقل لتحتوي الأقسام الفرعية أو المواضيع
function openSubSectionRecursive(name, sectionData) {
  fadeOut(subSectionsDiv, () => {
    const lang = languageSelect.value;
    if (sectionData.subSections && Object.keys(sectionData.subSections).length > 0) {
      subSectionTitle.textContent = name;
      renderSectionsList(sectionData.subSections);
      sectionsDiv.style.display = "none";
      subSectionsDiv.style.display = "block";
      topicsSection.style.display = "none";
      subSectionsDiv.focus();
    } else if (sectionData.topics && sectionData.topics.length > 0) {
      openTopicsRecursive(name, sectionData.topics);
    } else {
      alert(getLangData(lang).messages.noSubsectionsOrTopics);
      navigationStack.pop();
    }
  });
}

// عرض المواضيع داخل قسم
function openTopicsRecursive(name, topics) {
  fadeOut(topicsSection, () => {
    const lang = languageSelect.value;
    topicSectionTitle.textContent = name;
    topicList.innerHTML = "";

    // set currentPath for content operations
    currentPath = navigationStack.map(n => n.name);
    if (topics.length === 1) {
      // when viewing a single topic, include it in the path
      if (currentPath[currentPath.length - 1] !== name) currentPath.push(name);
    }

    if (topics.length === 0) {
      const noTopicsDiv = document.createElement("div");
      noTopicsDiv.textContent = getLangData(lang).messages.noTopicsAvailable;
      topicList.appendChild(noTopicsDiv);

    } else if (topics.length === 1) {
      // Handle both string topics and object topics {title, content, images}
      const topicItem = topics[0];
      const topicName = typeof topicItem === 'string' ? topicItem : topicItem.title;
      const topicImages = typeof topicItem === 'object' ? (topicItem.images || topicItem.image) : null; // Support both 'images' and 'image'
      const tmsg = (getLangData(lang) && getLangData(lang).messages) || {};
      
      // Check if topic has embedded content (new CRUD format) or use topicContents lookup (old format)
      let contentText;
      if (typeof topicItem === 'object' && topicItem.content) {
        contentText = topicItem.content;
      } else {
        contentText = topicContents[topicName] || tmsg.noContentForTopic || "لا يوجد محتوى متوفر لهذا الموضوع.";
      }
      
      // Create images display if available (supports multiple images)
      if (topicImages) {
        const imagesContainer = document.createElement("div");
        imagesContainer.style.marginTop = "10px";
        imagesContainer.style.marginBottom = "10px";
        imagesContainer.style.display = "flex";
        imagesContainer.style.flexWrap = "wrap";
        imagesContainer.style.gap = "10px";
        imagesContainer.style.justifyContent = "center";
        
        // Handle both single image (string) and multiple images (array)
        const imagesArray = Array.isArray(topicImages) ? topicImages : [topicImages];
        
        imagesArray.forEach((imgSrc, index) => {
          const imageDiv = document.createElement("div");
          imageDiv.style.flex = "0 1 auto";
          imageDiv.style.maxWidth = imagesArray.length > 1 ? "300px" : "100%";
          
          const img = document.createElement("img");
          img.src = imgSrc;
          img.alt = `${topicName} - Image ${index + 1}`;
          img.style.width = "100%";
          img.style.maxHeight = "400px";
          img.style.borderRadius = "8px";
          img.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
          img.style.objectFit = "contain";
          img.style.cursor = "pointer";
          
          // Click to view full size
          img.addEventListener("click", () => {
            window.open(imgSrc, '_blank');
          });
          
          imageDiv.appendChild(img);
          imagesContainer.appendChild(imageDiv);
        });
        
        topicList.appendChild(imagesContainer);
      }
      
      const contentDiv = document.createElement("div");
      contentDiv.innerHTML = contentText;
      contentDiv.className = "topic-content";
      contentDiv.style.padding = "12px";
      contentDiv.style.border = "1px solid #ddd";
      contentDiv.style.borderRadius = "6px";
      contentDiv.style.marginTop = "10px";
      contentDiv.style.whiteSpace = "pre-wrap";
      contentDiv.style.backgroundColor = "#fafafa";
      
      // Make images responsive
      const images = contentDiv.querySelectorAll('img');
      images.forEach(img => {
        img.style.maxWidth = "100%";
        img.style.height = "auto";
        img.style.display = "block";
        img.style.margin = "10px auto";
        img.style.borderRadius = "6px";
      });

  const toolbar = createTopicToolbarForContent(topicName, contentDiv);
  topicList.appendChild(toolbar);
  topicList.appendChild(contentDiv);

    } else {
      topics.forEach(topic => {
        // Handle both string topics and object topics
        const topicName = typeof topic === 'string' ? topic : topic.title;
        const div = document.createElement("div");
        div.textContent = topicName;
        div.style.padding = "12px 8px";
        div.style.borderBottom = "1px solid #ccc";
        div.style.background = "rgba(0, 0, 0, 0.6)";
        div.style.color = "#ffffff";
        div.style.borderRadius = "4px";
        div.style.marginBottom = "4px";
        div.style.cursor = "pointer";
        div.style.transition = "all 0.2s";
        div.tabIndex = 0;
        div.setAttribute("role", "button");
        
        // Hover effect
        div.addEventListener("mouseenter", () => {
          div.style.background = "rgba(0, 0, 0, 0.8)";
        });
        div.addEventListener("mouseleave", () => {
          div.style.background = "rgba(0, 0, 0, 0.6)";
        });
        
        div.addEventListener("click", () => openTopicsRecursive(topicName, [topic]));
        div.addEventListener("keydown", e => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            div.click();
          }
        });
        topicList.appendChild(div);
      });
    }

    sectionsDiv.style.display = "none";
    subSectionsDiv.style.display = "none";
    topicsSection.style.display = "block";
    topicsSection.focus();
  });
}

// أزرار العودة
backToSectionsBtn.addEventListener("click", () => {
  if (navigationStack.length > 1) {
    navigationStack.pop();
    const prev = navigationStack[navigationStack.length - 1];
    if (prev.data.subSections) {
      subSectionTitle.textContent = prev.name;
      renderSectionsList(prev.data.subSections);
      sectionsDiv.style.display = "none";
      subSectionsDiv.style.display = "block";
      topicsSection.style.display = "none";
      subSectionsDiv.focus();
    } else {
      openMainSections();
    }
  } else {
    openMainSections();
  }
});

backToSubSectionsBtn.addEventListener("click", () => {
  openMainSections();
});

// الشريط الجانبي والبحث
sidebarToggle.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("open");
  sidebar.setAttribute("aria-hidden", isOpen ? "false" : "true");
  sidebarToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  if (isOpen) {
    hideSearch();
    sidebar.focus();
  }
});

searchToggle.addEventListener("click", () => {
  const visible = searchInput.classList.toggle("visible");
  if (visible) {
    searchInput.classList.remove("hidden");
    searchInput.focus();
    searchToggle.setAttribute("aria-expanded", "true");
    if (sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
      sidebar.setAttribute("aria-hidden", "true");
      sidebarToggle.setAttribute("aria-expanded", "false");
    }
  } else {
    hideSearch();
  }
});

function hideSearch() {
  searchInput.classList.remove("visible");
  searchInput.classList.add("hidden");
  searchInput.value = "";
  searchResults.classList.remove("visible");
  searchResults.classList.add("hidden");
  searchResults.innerHTML = "";
}

document.addEventListener("click", e => {
  const toggleAdminBtn = document.getElementById("toggleAdminBtn");
  const adminSection = document.getElementById("adminSection");
  
  if (!sidebar.contains(e.target) &&
      !sidebarToggle.contains(e.target) &&
      !searchToggle.contains(e.target) &&
      !searchInput.contains(e.target) &&
      !searchResults.contains(e.target) &&
      (!toggleAdminBtn || !toggleAdminBtn.contains(e.target)) &&
      (!adminSection || !adminSection.contains(e.target))) {
    sidebar.classList.remove("open");
    sidebar.setAttribute("aria-hidden", "true");
    sidebarToggle.setAttribute("aria-expanded", "false");
    hideSearch();
  }
});

// دعم لمس لفتح الشريط الجانبي
let touchStartX = null;
let touchEndX = null;
document.addEventListener("touchstart", e => {
  touchStartX = e.changedTouches[0].clientX;
});
document.addEventListener("touchend", e => {
  touchEndX = e.changedTouches[0].clientX;
  if (touchStartX > window.innerWidth - 50 && touchEndX < touchStartX - 50) {
    sidebar.classList.add("open");
    sidebar.setAttribute("aria-hidden", "false");
    sidebarToggle.setAttribute("aria-expanded", "true");
    hideSearch();
    sidebar.focus();
  }
});

// إغلاق بـ Escape
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    if (sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
      sidebar.setAttribute("aria-hidden", "true");
      sidebarToggle.setAttribute("aria-expanded", "false");
      hideSearch();
      sidebarToggle.focus();
    } else if (searchInput.classList.contains("visible")) {
      hideSearch();
      searchToggle.focus();
    }
  }
});

// تبديل الوضع الليلي
toggleThemeBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  toggleThemeBtn.setAttribute("aria-pressed", isDark.toString());
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// تغيير اللغة
languageSelect.addEventListener("change", async () => {
  const lang = languageSelect.value;
  localStorage.setItem("lang", lang);
  // Update document language and direction
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'en') ? 'ltr' : 'rtl';
  // Reflect language in URL without reload
  try {
    const u = new URL(window.location.href);
    u.searchParams.set('lang', lang);
    history.replaceState({}, '', u.toString());
  } catch (e) { /* noop */ }
  // Always try to fetch language-specific content (local per-language JSON or remote),
  // even if no remote URL is configured.
  try {
    await fetchRemoteForLang(lang);
  } catch (e) {
    console.warn('Fetch for language failed', e);
  }
  // Guard: if no data exists for the selected language, fall back to Arabic.
  const t = getLangData(lang);
  if (!t) {
    console.warn('No content for selected language; falling back to Arabic.');
    // Save Arabic as fallback but keep trying to fetch the selected language
    const savedLang = localStorage.getItem('lang');
    languageSelect.value = 'ar';
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    translatePage('ar');
    openMainSections();
    loadFavorites();
    // Restore the user's language selection in dropdown (even if content not loaded yet)
    if (savedLang && savedLang !== 'ar') {
      setTimeout(() => {
        languageSelect.value = savedLang;
      }, 100);
    }
    return;
  }
  translatePage(lang);
  openMainSections();
  loadFavorites();
});

// تغيير الخلفية
backgroundSelect.addEventListener("change", () => {
  const selectedBg = backgroundSelect.value;
  if (selectedBg) {
    document.body.style.backgroundImage = `url('${selectedBg}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    if (selectedBg === "https://i.pinimg.com/736x/b3/9c/6f/b39c6ff39048059c457bf6141ae8bf0f.jpg") {
      document.body.style.backgroundPosition = "center 5%";
    } else {
      document.body.style.backgroundPosition = "center top";
    }
    localStorage.setItem("background", selectedBg);
  } else {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "#f0f0f5";
    localStorage.removeItem("background");
  }
});

// بحث ذكي بالأقسام والفرعيات والمواضيع
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    searchResults.innerHTML = "";
    searchResults.classList.remove("visible");
    searchResults.classList.add("hidden");
    return;
  }
  const lang = languageSelect.value;
  const sectionsData = getLangData(lang).sections;
  let results = [];
  function highlight(text, term) {
    const re = new RegExp(`(${term.replace(/[-/\\^$*+?.()|[\]{}]/g,'\\$&')})`, "gi");
    return text.replace(re, '<mark>$1</mark>');
  }
  for (const mainSec in sectionsData) {
    if (mainSec.toLowerCase().includes(query)) {
      results.push({ name: mainSec, type: "main", originalName: mainSec });
    }
    const subSecs = sectionsData[mainSec].subSections || {};
    for (const subSec in subSecs) {
      if (subSec.toLowerCase().includes(query)) {
        results.push({ name: subSec, type: "sub", parent: mainSec, originalName: subSec });
      }
      (subSecs[subSec].topics || []).forEach(topic => {
        if (topic.toLowerCase().includes(query)) {
          results.push({
            name: topic,
            type: "topic",
            parent: subSec,
            grandParent: mainSec,
            originalName: topic
          });
        }
      });
    }
  }
  if (results.length === 0) {
    searchResults.innerHTML = `<div>${getLangData(lang).messages.noResults}</div>`;
  } else {
    searchResults.innerHTML = "";
    results.forEach(item => {
      const div = document.createElement("div");
      div.innerHTML = highlight(item.name, query);
      div.tabIndex = 0;
      div.setAttribute("role", "option");
      div.addEventListener("click", () => {
        if (item.type === "main") {
          navigationStack = [{ name: item.originalName, data: getLangData(lang).sections[item.originalName] }];
          openSubSectionRecursive(item.originalName, getLangData(lang).sections[item.originalName]);
        } else if (item.type === "sub") {
          navigationStack = [{ name: item.parent, data: getLangData(lang).sections[item.parent] }];
          openSubSectionRecursive(item.parent, getLangData(lang).sections[item.parent]);
          setTimeout(() => {
            const subData = getLangData(lang).sections[item.parent].subSections[item.originalName];
            navigationStack.push({ name: item.originalName, data: subData });
            if (subData.subSections && Object.keys(subData.subSections).length > 0) {
              subSectionTitle.textContent = item.originalName;
              renderSectionsList(subData.subSections);
              sectionsDiv.style.display = "none";
              subSectionsDiv.style.display = "block";
              topicsSection.style.display = "none";
              subSectionsDiv.focus();
            } else if (subData.topics && subData.topics.length > 0) {
              openTopicsRecursive(item.originalName, subData.topics);
            } else {
              alert(getLangData(lang).messages.noSubsectionsOrTopics);
            }
          }, 100);
        } else if (item.type === "topic") {
          navigationStack = [{ name: item.grandParent, data: getLangData(lang).sections[item.grandParent] }];
          openSubSectionRecursive(item.grandParent, getLangData(lang).sections[item.grandParent]);
          setTimeout(() => {
            const subData = getLangData(lang).sections[ item.grandParent ].subSections[item.parent];
            navigationStack.push({ name: item.parent, data: subData });
            openTopicsRecursive(item.parent, subData.topics);
            setTimeout(() => {
              [...topicList.children].forEach(child => {
                child.style.backgroundColor = "";
                if (child.textContent === item.originalName) {
                  child.style.backgroundColor = "#90caf9";
                  child.scrollIntoView({ behavior: "smooth", block: "center" });
                }
              });
            }, 100);
          }, 100);
        }
        hideSearch();
      });
      div.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          div.click();
        }
      });
      searchResults.appendChild(div);
    });
  }
  searchResults.classList.remove("hidden");
  searchResults.classList.add("visible");
});

searchInput.addEventListener("keydown", e => {
  if (e.key === "Enter") hideSearch();
});

// تهيئة عند تحميل الصفحة
window.onload = () => {
  sidebarToggle.classList.add("hidden");
  searchToggle.classList.add("hidden");
  searchInput.classList.add("hidden");

  const logo = splash.querySelector("#logo");
  const appName = splash.querySelector("#appName");
  const appSlogan = splash.querySelector("#appSlogan");

  logo.classList.add("spin");
  logo.addEventListener("animationend", () => {
    logo.classList.remove("spin");
    logo.classList.add("glow");
    setTimeout(() => {
      logo.classList.remove("glow");
      appName.classList.add("glow");
      setTimeout(() => {
        appName.classList.remove("glow");
        appSlogan.classList.add("glow");
        setTimeout(() => {
          appSlogan.classList.remove("glow");
          splash.style.transition = "opacity 0.5s ease";
          splash.style.opacity = "0";
          setTimeout(async () => {
            splash.style.display = "none";
            container.style.display = "block";
            sidebarToggle.classList.remove("hidden");
            searchToggle.classList.remove("hidden");
            searchInput.classList.add("hidden");

            // Decide initial language: URL (?lang= / #lang=) > saved > browser default > 'ar'
            const urlInit = new URL(window.location.href);
            const hashParamsInit = new URLSearchParams(urlInit.hash.replace(/^#/, ''));
            const urlLangInit = urlInit.searchParams.get('lang') || hashParamsInit.get('lang');
            const savedLangInit = localStorage.getItem('lang');
            const browserLang = (navigator.language || navigator.userLanguage || 'ar').toLowerCase();
            const blInit = browserLang.startsWith('en') ? 'en' : browserLang.startsWith('fa') ? 'fa' : browserLang.startsWith('ur') ? 'ur' : browserLang.startsWith('ar') ? 'ar' : null;
            const initialLang = urlLangInit || savedLangInit || blInit || 'ar';

            languageSelect.value = initialLang;
            document.documentElement.lang = initialLang;
            document.documentElement.dir = (initialLang === 'en') ? 'ltr' : 'rtl';
            localStorage.setItem('lang', initialLang);
            translatePage(initialLang);
            try {
              const newUrl = new URL(window.location.href);
              newUrl.searchParams.set('lang', initialLang);
              history.replaceState({}, '', newUrl.toString());
            } catch (e) { /* noop */ }

            const savedTheme = localStorage.getItem("theme");
            if (savedTheme === "dark") {
              document.body.classList.add("dark-mode");
              toggleThemeBtn.setAttribute("aria-pressed", "true");
            }

            const savedBg = localStorage.getItem("background");
            if (savedBg) {
              backgroundSelect.value = savedBg;
              document.body.style.backgroundImage = `url('${savedBg}')`;
              document.body.style.backgroundSize = "cover";
              document.body.style.backgroundRepeat = "no-repeat";
              if (savedBg === "https://i.pinimg.com/736x/b3/9c/6f/b39c6ff39048059c457bf6141ae8bf0f.jpg") {
                document.body.style.backgroundPosition = "center 5%";
              } else {
                document.body.style.backgroundPosition = "center top";
              }
            }

            loadFavorites();
            // Ensure we have data for the initial language before opening sections; otherwise fallback to Arabic
            
            // Load bundled custom-content.json on first launch
            await loadBundledContent();
            
            // Auto-sync from Supabase on startup to ensure all devices have latest content
            await autoSyncFromServer();
            
            const currentLang = languageSelect.value || 'ar';
            if (!getLangData(currentLang)) {
              // Temporarily show Arabic content but keep user's language preference
              const savedLang = localStorage.getItem('lang');
              languageSelect.value = 'ar';
              document.documentElement.lang = 'ar';
              document.documentElement.dir = 'rtl';
              translatePage('ar');
              // Restore the language dropdown to user's preference
              if (savedLang && savedLang !== 'ar') {
                setTimeout(() => {
                  languageSelect.value = savedLang;
                }, 100);
              }
            }
            openMainSections();
            sectionsDiv.classList.add("fade-in");
            // register service worker for offline support
            if ('serviceWorker' in navigator) {
              const swUrl = new URL('sw.js', location.href).toString();
              navigator.serviceWorker.register(swUrl, { scope: './' })
                .then(() => console.log('Service worker registered:', swUrl))
                .catch(err => console.warn('Service worker registration failed', err));
            }

            // Automatic remote detection: try to fetch per-language content from predictable paths
            (async () => {
              const lang = languageSelect.value || 'ar';
              // If a previously configured remote URL exists, try it first silently
              const savedUrl = localStorage.getItem('remoteDataUrl') || '';
              if (savedUrl) {
                try {
                  const cached = await caches.match(savedUrl);
                  if (cached) {
                    const remote = await cached.json();
                    remoteData = remote;
                    translatePage(lang);
                    openMainSections();
                    loadFavorites();
                  }
                } catch (e) { console.warn('Error loading cached remote data', e); }
                // then attempt network fetch (fetchRemoteForLang will try savedUrl first)
                await fetchRemoteForLang(lang);
              } else {
                // No saved URL: try typical per-language files relative to the app
                await fetchRemoteForLang(lang);
              }
            })();

            // Export language JSON (for the single editor workflow A)
            const exportBtn = document.getElementById('exportLangBtn');
            // Admin flag handling: ?admin=1 sets admin mode (persisted); ?admin=0 clears it
            function resolveAdminFlag() {
              try {
                const u = new URL(window.location.href);
                const adminParam = u.searchParams.get('admin');
                if (adminParam === '1') {
                  localStorage.setItem('isAdmin', '1');
                  // Remove the admin param from URL for cleaner links
                  u.searchParams.delete('admin');
                  history.replaceState({}, '', u.toString());
                } else if (adminParam === '0') {
                  localStorage.removeItem('isAdmin');
                  u.searchParams.delete('admin');
                  history.replaceState({}, '', u.toString());
                }
              } catch (e) { /* noop */ }
              return localStorage.getItem('isAdmin') === '1';
            }
            const isAdmin = resolveAdminFlag();

            if (exportBtn) {
              // Keep export button hidden (only used internally)
              exportBtn.style.display = 'none';
              exportBtn.addEventListener('click', async () => {
                // Always export Arabic content (single source of truth)
                const payload = getLangData('ar');
                // Attach/refresh a version using timestamp
                const merged = { version: new Date().toISOString(), ...payload };
                const blob = new Blob([JSON.stringify(merged, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `data.ar.json`;
                document.body.appendChild(a);
                a.click();
                a.remove();
                URL.revokeObjectURL(url);
              });
            }

            /**
             * Save content to Supabase (split into multiple rows)
             */
            async function saveToServer(content) {
              try {
                console.log('💾 Saving content to Supabase (split into chunks)...');
                
                // Split sections into individual rows
                const rows = [];
                const timestamp = new Date().toISOString();
                
                if (content.sections) {
                  for (const sectionName in content.sections) {
                    const section = content.sections[sectionName];
                    
                    // Save section structure
                    rows.push({
                      key: `section_${sectionName}`,
                      content: {
                        name: sectionName,
                        subSections: section.subSections ? Object.keys(section.subSections) : [],
                        topics: section.topics || []
                      },
                      updated_at: timestamp
                    });
                    
                    // Save each subsection with topics
                    if (section.subSections) {
                      for (const subName in section.subSections) {
                        rows.push({
                          key: `${sectionName}__${subName}`,
                          content: {
                            section: sectionName,
                            subsection: subName,
                            topics: section.subSections[subName].topics || []
                          },
                          updated_at: timestamp
                        });
                      }
                    }
                  }
                }
                
                // Upload each row individually using upsert
                let successCount = 0;
                for (const row of rows) {
                  try {
                    // Try to update first with Prefer: return=representation to see if any rows were affected
                    const updateResponse = await fetch(`${SUPABASE_URL}/rest/v1/app_content?key=eq.${encodeURIComponent(row.key)}`, {
                      method: 'PATCH',
                      headers: {
                        'apikey': SUPABASE_KEY,
                        'Authorization': `Bearer ${SUPABASE_KEY}`,
                        'Content-Type': 'application/json',
                        'Prefer': 'return=representation'
                      },
                      body: JSON.stringify({
                        content: row.content,
                        updated_at: row.updated_at
                      })
                    });
                    
                    if (updateResponse.ok) {
                      const updated = await updateResponse.json();
                      if (updated && updated.length > 0) {
                        // Row was updated
                        successCount++;
                        console.log(`✓ Updated: ${row.key}`);
                      } else {
                        // Row doesn't exist, try insert
                        const insertResponse = await fetch(`${SUPABASE_URL}/rest/v1/app_content`, {
                          method: 'POST',
                          headers: {
                            'apikey': SUPABASE_KEY,
                            'Authorization': `Bearer ${SUPABASE_KEY}`,
                            'Content-Type': 'application/json',
                            'Prefer': 'return=minimal'
                          },
                          body: JSON.stringify(row)
                        });
                        
                        if (insertResponse.ok || insertResponse.status === 201) {
                          successCount++;
                          console.log(`✓ Inserted: ${row.key}`);
                        } else {
                          const errorText = await insertResponse.text();
                          console.error(`✗ Failed to insert ${row.key}:`, errorText);
                        }
                      }
                    } else {
                      const errorText = await updateResponse.text();
                      console.error(`✗ Failed to update ${row.key}:`, errorText);
                    }
                  } catch (error) {
                    console.error(`✗ Error saving row ${row.key}:`, error);
                  }
                }
                
                if (successCount > 0) {
                  console.log(`✓ Saved ${successCount}/${rows.length} content chunks to Supabase`);
                  return true;
                } else {
                  console.error('✗ Failed to save any content chunks');
                  return false;
                }
              } catch (error) {
                console.error('✗ Network error saving to Supabase:', error);
                return false;
              }
            }
            
            /**
             * Auto-sync content from Supabase on app launch
             */
            async function autoSyncFromServer() {
              try {
                // Fetch all content rows
                const response = await fetch(`${SUPABASE_URL}/rest/v1/app_content?select=key,content`, {
                  headers: {
                    'apikey': SUPABASE_KEY,
                    'Authorization': `Bearer ${SUPABASE_KEY}`
                  }
                });
                
                if (response.ok) {
                  const rows = await response.json();
                  
                  if (rows && rows.length > 0) {
                    // Reconstruct content from multiple rows
                    const reconstructed = { sections: {} };
                    
                    // First pass: collect section structures
                    for (const row of rows) {
                      if (row.key && row.key.startsWith('section_')) {
                        const sectionName = row.key.replace('section_', '');
                        reconstructed.sections[sectionName] = {
                          subSections: {},
                          topics: row.content.topics || []
                        };
                      }
                    }
                    
                    // Second pass: fill in subsections
                    for (const row of rows) {
                      if (row.key && row.key.includes('__')) {
                        const [sectionName, subName] = row.key.split('__');
                        if (reconstructed.sections[sectionName]) {
                          reconstructed.sections[sectionName].subSections[subName] = {
                            topics: row.content.topics || []
                          };
                        }
                      }
                    }
                    
                    // Update localStorage
                    localStorage.setItem('customContent', JSON.stringify(reconstructed));
                    
                    // Update in-memory data
                    if (data.ar) {
                      data.ar.sections = reconstructed.sections;
                    }
                    
                    console.log(`✓ Synced ${rows.length} content chunks from Supabase`);
                    
                    // Refresh UI
                    const lang = languageSelect?.value || 'ar';
                    translatePage(lang);
                    if (typeof openMainSections === 'function') openMainSections();
                  } else {
                    console.log('Supabase is empty, keeping local content');
                  }
                } else {
                  console.log('No content in Supabase, keeping local content');
                }
              } catch (error) {
                console.log('Using local storage (Supabase sync unavailable)');
              }
            }

            // ========================================
            // 🔐 PASSWORD-PROTECTED ADMIN PANEL
            // ========================================
            
            const ADMIN_PASSWORD = 'password'; // Password for admin access
            let isAdminAuthenticated = sessionStorage.getItem('adminAuth') === 'true';
            let pendingAdminAction = null; // Store pending action after password verification
            
            const adminLoginBtn = document.getElementById('adminLoginBtn');
            const adminPasswordModal = document.getElementById('adminPasswordModal');
            const adminPasswordInput = document.getElementById('adminPasswordInput');
            const adminPasswordSubmit = document.getElementById('adminPasswordSubmit');
            const adminPasswordCancel = document.getElementById('adminPasswordCancel');
            
            const adminEditorModal = document.getElementById('adminEditorModal');
            const adminEditorClose = document.getElementById('adminEditorClose');
            const adminLangSelect = document.getElementById('adminLangSelect');
            const adminContentEditor = document.getElementById('adminContentEditor');
            const adminLoadContent = document.getElementById('adminLoadContent');
            const adminValidateJSON = document.getElementById('adminValidateJSON');
            const adminSaveContent = document.getElementById('adminSaveContent');
            const adminExportJSON = document.getElementById('adminExportJSON');
            const adminImportJSON = document.getElementById('adminImportJSON');
            const adminImportFile = document.getElementById('adminImportFile');
            const adminEditorStatus = document.getElementById('adminEditorStatus');
            
            /**
             * Show admin status message
             */
            function showAdminStatus(message, type = 'info') {
              if (!adminEditorStatus) return;
              const colors = {
                success: '#4caf50',
                error: '#f44336',
                warning: '#ff9800',
                info: '#2196f3'
              };
              adminEditorStatus.style.display = 'block';
              adminEditorStatus.style.background = colors[type] || colors.info;
              adminEditorStatus.style.color = '#fff';
              adminEditorStatus.textContent = message;
              setTimeout(() => {
                adminEditorStatus.style.display = 'none';
              }, 3000);
            }
            
            /**
             * Show admin login modal
             */
            function showAdminLogin() {
              if (adminPasswordModal) {
                adminPasswordModal.style.display = 'flex';
                adminPasswordInput.value = '';
                adminPasswordInput.focus();
              }
            }
            
            /**
             * Request password verification for an action
             */
            function requestPasswordVerification(action) {
              pendingAdminAction = action;
              showAdminLogin();
            }
            
            /**
             * Hide admin login modal
             */
            function hideAdminLogin() {
              if (adminPasswordModal) {
                adminPasswordModal.style.display = 'none';
              }
            }
            
            /**
             * Authenticate admin
             */
            function authenticateAdmin(password) {
              console.log('Checking password...');
              console.log('Entered password:', password);
              console.log('Expected password:', ADMIN_PASSWORD);
              console.log('Match:', password === ADMIN_PASSWORD);
              
              if (password === ADMIN_PASSWORD) {
                isAdminAuthenticated = true;
                sessionStorage.setItem('adminAuth', 'true');
                hideAdminLogin();
                
                // Execute pending action if any
                if (pendingAdminAction) {
                  pendingAdminAction();
                  pendingAdminAction = null;
                }
                return true;
              }
              return false;
            }
            
            /**
             * Show admin editor modal (no auth required to view)
             */
            function showAdminEditor() {
              if (adminEditorModal) {
                adminEditorModal.style.display = 'block';
                adminLangSelect.value = languageSelect.value || 'ar';
                loadAdminContent();
              }
            }
            
            /**
             * Hide admin editor modal
             */
            function hideAdminEditor() {
              if (adminEditorModal) {
                adminEditorModal.style.display = 'none';
              }
            }
            
            /**
             * Load current content into admin editor
             */
            function loadAdminContent() {
              const lang = adminLangSelect.value;
              const content = getLangData(lang);
              if (content) {
                adminContentEditor.value = JSON.stringify(content, null, 2);
                showAdminStatus(`تم تحميل محتوى اللغة: ${lang}`, 'success');
              } else {
                adminContentEditor.value = '{\n  "sections": {},\n  "messages": {}\n}';
                showAdminStatus(`لا يوجد محتوى للغة: ${lang}`, 'warning');
              }
            }
            
            /**
             * Validate JSON content
             */
            function validateAdminJSON() {
              try {
                JSON.parse(adminContentEditor.value);
                showAdminStatus('✓ JSON صحيح', 'success');
                return true;
              } catch (error) {
                showAdminStatus(`✗ خطأ في JSON: ${error.message}`, 'error');
                return false;
              }
            }
            
            /**
             * Save content to localStorage
             */
            function saveAdminContent() {
              if (!validateAdminJSON()) return;
              
              try {
                const lang = adminLangSelect.value;
                const content = JSON.parse(adminContentEditor.value);
                
                // Store in localStorage with lang-specific key
                localStorage.setItem(`customData_${lang}`, JSON.stringify(content));
                
                // Update in-memory data
                if (lang === 'ar') data.ar = content;
                else if (lang === 'en') data.en = content;
                else if (lang === 'fa') data.fa = content;
                else if (lang === 'ur') data.ur = content;
                
                // Refresh UI if current language
                if (languageSelect.value === lang) {
                  translatePage(lang);
                  openMainSections();
                }
                
                showAdminStatus('✓ تم حفظ التغييرات بنجاح', 'success');
              } catch (error) {
                showAdminStatus(`✗ فشل الحفظ: ${error.message}`, 'error');
              }
            }
            
            /**
             * Export JSON to file
             */
            function exportAdminJSON() {
              if (!validateAdminJSON()) return;
              
              try {
                const lang = adminLangSelect.value;
                const content = JSON.parse(adminContentEditor.value);
                const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `data.${lang}.json`;
                document.body.appendChild(a);
                a.click();
                a.remove();
                URL.revokeObjectURL(url);
                showAdminStatus('✓ تم تصدير الملف', 'success');
              } catch (error) {
                showAdminStatus(`✗ فشل التصدير: ${error.message}`, 'error');
              }
            }
            
            /**
             * Import JSON from file
             */
            function importAdminJSON() {
              adminImportFile.click();
            }
            
            // Event listeners for admin panel
            if (adminLoginBtn) {
              adminLoginBtn.addEventListener('click', () => {
                // Always show CRUD editor - no authentication needed to view
                showCrudEditor();
              });
            }
            
            if (adminPasswordSubmit) {
              adminPasswordSubmit.addEventListener('click', () => {
                const password = adminPasswordInput.value;
                const lang = languageSelect.value || 'ar';
                const t = getLangData(lang);
                const messages = t.messages || {};
                
                if (authenticateAdmin(password)) {
                  showAdminStatus(messages.adminLoginSuccess || '✓ تم تسجيل الدخول بنجاح', 'success');
                  setTimeout(() => {
                    showCrudEditor();
                  }, 500);
                } else {
                  showAdminStatus(messages.adminLoginError || '✗ كلمة مرور خاطئة', 'error');
                  adminPasswordInput.value = '';
                  adminPasswordInput.focus();
                }
              });
            }
            
            if (adminPasswordInput) {
              adminPasswordInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                  adminPasswordSubmit.click();
                }
              });
            }
            
            if (adminPasswordCancel) {
              adminPasswordCancel.addEventListener('click', hideAdminLogin);
            }
            
            if (adminEditorClose) {
              adminEditorClose.addEventListener('click', hideAdminEditor);
            }
            
            if (adminLangSelect) {
              adminLangSelect.addEventListener('change', loadAdminContent);
            }
            
            if (adminLoadContent) {
              adminLoadContent.addEventListener('click', loadAdminContent);
            }
            
            if (adminValidateJSON) {
              adminValidateJSON.addEventListener('click', validateAdminJSON);
            }
            
            if (adminSaveContent) {
              adminSaveContent.addEventListener('click', saveAdminContent);
            }
            
            if (adminExportJSON) {
              adminExportJSON.addEventListener('click', exportAdminJSON);
            }
            
            if (adminImportJSON) {
              adminImportJSON.addEventListener('click', importAdminJSON);
            }
            
            if (adminImportFile) {
              adminImportFile.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (!file) return;
                
                const reader = new FileReader();
                reader.onload = (event) => {
                  try {
                    const content = JSON.parse(event.target.result);
                    adminContentEditor.value = JSON.stringify(content, null, 2);
                    showAdminStatus('✓ تم استيراد الملف بنجاح', 'success');
                  } catch (error) {
                    showAdminStatus(`✗ فشل الاستيراد: ${error.message}`, 'error');
                  }
                };
                reader.readAsText(file);
                adminImportFile.value = ''; // Reset input
              });
            }
            
            // ========================================
            // 🎨 SIMPLE CRUD EDITOR
            // ========================================
            
            const crudEditorModal = document.getElementById('crudEditorModal');
            const crudEditorClose = document.getElementById('crudEditorClose');
            const crudType = document.getElementById('crudType');
            const crudSectionFields = document.getElementById('crudSectionFields');
            const crudSubsectionFields = document.getElementById('crudSubsectionFields');
            const crudTopicFields = document.getElementById('crudTopicFields');
            const crudSaveBtn = document.getElementById('crudSaveBtn');
            const crudDeleteBtn = document.getElementById('crudDeleteBtn');
            const crudStatus = document.getElementById('crudStatus');
            
            // Global array to store multiple images
            let selectedImages = [];
            
            // ========================================
            // 📝 Quill Rich Text Editor (initialized when modal opens)
            // ========================================
            let quillEditor = null;
            
            /**
             * Show CRUD status message
             */
            function showCrudStatus(message, type = 'info') {
              if (!crudStatus) return;
              const colors = {
                success: '#4caf50',
                error: '#f44336',
                warning: '#ff9800',
                info: '#2196f3'
              };
              crudStatus.style.display = 'block';
              crudStatus.style.background = colors[type] || colors.info;
              crudStatus.style.color = '#fff';
              crudStatus.textContent = message;
              setTimeout(() => {
                crudStatus.style.display = 'none';
              }, 3000);
            }
            
            /**
             * Show CRUD editor
             */
            function showCrudEditor() {
              // No authentication required to VIEW - anyone can open the editor
              if (crudEditorModal) {
                crudEditorModal.style.display = 'flex';
                crudEditorModal.style.alignItems = 'flex-start';
                populateSectionDropdowns();
                updateCrudFields();
                
                // Initialize Quill editor if not already initialized
                if (!quillEditor) {
                  // Small delay to ensure DOM is ready
                  setTimeout(() => {
                    const contentDiv = document.getElementById('crudTopicContent');
                    
                    if (!contentDiv) {
                      console.error('crudTopicContent element not found');
                      return;
                    }
                    
                    if (typeof Quill === 'undefined') {
                      console.error('Quill library not loaded');
                      return;
                    }
                    
                    try {
                      const toolbarOptions = [
                        [{ 'header': [1, 2, 3, false] }],
                        ['bold', 'italic', 'underline'],
                        [{ 'color': [] }, { 'background': [] }],
                        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                        [{ 'align': [] }],
                        ['link', 'image'],
                        ['clean']
                      ];
                      
                      quillEditor = new Quill('#crudTopicContent', {
                        modules: {
                          toolbar: toolbarOptions
                        },
                        theme: 'snow',
                        placeholder: 'اكتب محتوى الموضوع هنا...'
                      });
                      
                      console.log('Quill editor initialized successfully');
                      
                      // Enable clipboard image paste
                      quillEditor.root.addEventListener('paste', function(e) {
                        const clipboardData = e.clipboardData || window.clipboardData;
                        const items = clipboardData.items;
                        
                        if (!items) return;
                        
                        // Check for image in clipboard
                        for (let i = 0; i < items.length; i++) {
                          if (items[i].type.indexOf('image') !== -1) {
                            e.preventDefault();
                            
                            const blob = items[i].getAsFile();
                            const reader = new FileReader();
                            
                            reader.onload = function(event) {
                              const base64Image = event.target.result;
                              
                              // Insert image at cursor position
                              const range = quillEditor.getSelection(true);
                              quillEditor.insertEmbed(range.index, 'image', base64Image);
                              quillEditor.setSelection(range.index + 1);
                            };
                            
                            reader.readAsDataURL(blob);
                            break;
                          }
                        }
                      });
                    } catch (err) {
                      console.error('Error initializing Quill:', err);
                    }
                  }, 100);
                }
                
                // Retranslate modal in current language
                const currentLang = languageSelect.value || 'ar';
                translatePage(currentLang);
              }
            }
            
            /**
             * Hide CRUD editor
             */
            function hideCrudEditor() {
              if (crudEditorModal) {
                crudEditorModal.style.display = 'none';
                clearCrudFields();
              }
            }
            
            /**
             * Update visible fields based on CRUD type
             */
            function updateCrudFields() {
              const type = crudType.value;
              crudSectionFields.style.display = type === 'section' ? '' : 'none';
              crudSubsectionFields.style.display = type === 'subsection' ? '' : 'none';
              crudTopicFields.style.display = type === 'topic' ? '' : 'none';
              
              // Initialize Quill when switching to topic type
              if (type === 'topic' && !quillEditor) {
                setTimeout(() => {
                  const contentDiv = document.getElementById('crudTopicContent');
                  
                  if (!contentDiv) {
                    console.error('crudTopicContent element not found');
                    return;
                  }
                  
                  if (typeof Quill === 'undefined') {
                    console.error('Quill library not loaded');
                    return;
                  }
                  
                  try {
                    const toolbarOptions = [
                      [{ 'header': [1, 2, 3, false] }],
                      ['bold', 'italic', 'underline'],
                      [{ 'color': [] }, { 'background': [] }],
                      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                      [{ 'align': [] }],
                      ['link', 'image'],
                      ['clean']
                    ];
                    
                    quillEditor = new Quill('#crudTopicContent', {
                      modules: {
                        toolbar: toolbarOptions
                      },
                      theme: 'snow',
                      placeholder: 'اكتب محتوى الموضوع هنا...'
                    });
                    
                    console.log('✓ Quill editor initialized');
                    
                    // Enable clipboard image paste
                    quillEditor.root.addEventListener('paste', function(e) {
                      const clipboardData = e.clipboardData || window.clipboardData;
                      const items = clipboardData.items;
                      
                      if (!items) return;
                      
                      for (let i = 0; i < items.length; i++) {
                        if (items[i].type.indexOf('image') !== -1) {
                          e.preventDefault();
                          
                          const blob = items[i].getAsFile();
                          const reader = new FileReader();
                          
                          reader.onload = function(event) {
                            const base64Image = event.target.result;
                            const range = quillEditor.getSelection(true);
                            quillEditor.insertEmbed(range.index, 'image', base64Image);
                            quillEditor.setSelection(range.index + 1);
                          };
                          
                          reader.readAsDataURL(blob);
                          break;
                        }
                      }
                    });
                  } catch (err) {
                    console.error('Error initializing Quill:', err);
                  }
                }, 150);
              }
              
              // Don't clear fields when switching types - keep selections
              // Only populate dropdowns if they're empty
              if (type === 'subsection' || type === 'topic') {
                const parentSelect = document.getElementById('crudParentSection');
                const topicSectionSelect = document.getElementById('crudTopicSection');
                
                // Populate parent section dropdown if empty
                if (parentSelect && parentSelect.options.length <= 1) {
                  populateSectionDropdowns();
                }
                if (topicSectionSelect && topicSectionSelect.options.length <= 1) {
                  populateSectionDropdowns();
                }
              }
            }
            
            /**
             * Clear all CRUD fields (but preserve dropdown selections for convenience)
             */
            function clearCrudFields() {
              document.getElementById('crudSectionName').value = '';
              document.getElementById('crudSubsectionName').value = '';
              // Don't clear parent selections or "Select Existing" dropdowns - keep them for convenience
              // document.getElementById('crudParentSection').value = '';
              // document.getElementById('crudTopicSection').value = '';
              // document.getElementById('crudTopicSubsection').value = '';
              // document.getElementById('crudSectionSelector').value = '';
              // document.getElementById('crudSubsectionSelector').value = '';
              // document.getElementById('crudTopicSelector').value = '';
              document.getElementById('crudTopicTitle').value = '';
              if (quillEditor) {
                quillEditor.setText('');
              }
              
              // Clear images
              const imageInput = document.getElementById('crudTopicImage');
              const imagePreview = document.getElementById('crudImagePreview');
              if (imageInput) imageInput.value = '';
              if (imagePreview) {
                imagePreview.innerHTML = '';
                imagePreview.style.display = 'none';
              }
              selectedImages = []; // Clear selected images array
              
              originalSectionName = '';
              originalSubsectionName = '';
              originalTopicIndex = -1;
            }
            
            /**
             * Populate section dropdowns and populate existing items for editing
             */
            function populateSectionDropdowns() {
              const lang = languageSelect.value || 'ar';
              const content = getLangData(lang);
              if (!content || !content.sections) return;
              
              const messages = content.messages || {};
              const sections = Object.keys(content.sections);
              
              // Populate section selector (for editing/deleting sections)
              const sectionSelector = document.getElementById('crudSectionSelector');
              if (sectionSelector) {
                sectionSelector.innerHTML = '<option value="">-- Create New / Select to Edit/Delete --</option>';
                sections.forEach(sec => {
                  sectionSelector.innerHTML += `<option value="${sec}">${sec}</option>`;
                });
              }
              
              // Populate parent section dropdown (for subsections)
              const parentSelect = document.getElementById('crudParentSection');
              parentSelect.innerHTML = `<option value="">${messages.crudSelectSection || '-- اختر القسم --'}</option>`;
              sections.forEach(sec => {
                parentSelect.innerHTML += `<option value="${sec}">${sec}</option>`;
              });
              
              // Populate topic section dropdown
              const topicSectionSelect = document.getElementById('crudTopicSection');
              topicSectionSelect.innerHTML = `<option value="">${messages.crudSelectSection || '-- اختر القسم --'}</option>`;
              sections.forEach(sec => {
                topicSectionSelect.innerHTML += `<option value="${sec}">${sec}</option>`;
              });
            }
            
            /**
             * Update subsection dropdown and load existing subsections for deletion
             */
            function updateSubsectionDropdown() {
              const lang = languageSelect.value || 'ar';
              const content = getLangData(lang);
              const messages = content.messages || {};
              const selectedSection = document.getElementById('crudTopicSection').value;
              const subsectionSelect = document.getElementById('crudTopicSubsection');
              
              subsectionSelect.innerHTML = `<option value="">${messages.crudSelectSubsection || '-- اختر القسم الفرعي --'}</option>`;
              
              if (selectedSection && content.sections[selectedSection]) {
                const subsections = Object.keys(content.sections[selectedSection].subSections || {});
                subsections.forEach(sub => {
                  subsectionSelect.innerHTML += `<option value="${sub}">${sub}</option>`;
                });
              }
              
              // Clear topics selector when section changes
              const topicSelector = document.getElementById('crudTopicSelector');
              if (topicSelector) {
                topicSelector.innerHTML = '<option value="">-- Create New / Select to Edit/Delete --</option>';
              }
            }
            
            /**
             * Update subsection selector when parent section is selected
             */
            function updateSubsectionSelector() {
              const parentSection = document.getElementById('crudParentSection').value;
              const subsectionSelector = document.getElementById('crudSubsectionSelector');
              
              if (!subsectionSelector) return;
              
              subsectionSelector.innerHTML = '<option value="">-- Create New / Select to Edit/Delete --</option>';
              
              if (!parentSection) return;
              
              const lang = languageSelect.value || 'ar';
              const content = getLangData(lang);
              const subsections = Object.keys(content.sections?.[parentSection]?.subSections || {});
              
              subsections.forEach(sub => {
                subsectionSelector.innerHTML += `<option value="${sub}">${sub}</option>`;
              });
            }
            
            /**
             * Load selected section for editing/deleting
             */
            function loadSelectedSection() {
              const sectionSelector = document.getElementById('crudSectionSelector');
              const sectionName = sectionSelector?.value;
              
              document.getElementById('crudSectionName').value = sectionName || '';
              originalSectionName = sectionName || ''; // Track for editing
              
              if (sectionName) {
                showCrudStatus('✏️ Loaded section for editing/deleting', 'info');
              }
            }
            
            /**
             * Load selected subsection for editing/deleting
             */
            function loadSelectedSubsection() {
              const subsectionSelector = document.getElementById('crudSubsectionSelector');
              const subsectionName = subsectionSelector?.value;
              
              document.getElementById('crudSubsectionName').value = subsectionName || '';
              originalSubsectionName = subsectionName || ''; // Track for editing
              
              if (subsectionName) {
                showCrudStatus('✏️ Loaded subsection for editing/deleting', 'info');
              }
            }
            
            /**
             * Update topics selector when subsection is selected
             */
            function updateTopicsSelector() {
              const section = document.getElementById('crudTopicSection').value;
              const subsection = document.getElementById('crudTopicSubsection').value;
              const topicSelector = document.getElementById('crudTopicSelector');
              
              if (!topicSelector) return;
              
              topicSelector.innerHTML = '<option value="">-- Create New / Select to Edit/Delete --</option>';
              
              if (!section || !subsection) return;
              
              const lang = languageSelect.value || 'ar';
              const content = getLangData(lang);
              const topics = content.sections?.[section]?.subSections?.[subsection]?.topics || [];
              
              topics.forEach((topic, index) => {
                const topicTitle = typeof topic === 'string' ? topic : topic.title;
                topicSelector.innerHTML += `<option value="${index}">${topicTitle}</option>`;
              });
            }
            
            /**
             * Load selected topic for editing/deleting
             */
            function loadSelectedTopic() {
              const section = document.getElementById('crudTopicSection').value;
              const subsection = document.getElementById('crudTopicSubsection').value;
              const topicSelector = document.getElementById('crudTopicSelector');
              const topicIndex = topicSelector?.value;
              
              if (!section || !subsection || topicIndex === '') {
                // Clear fields if no topic selected
                document.getElementById('crudTopicTitle').value = '';
                if (quillEditor) {
                  quillEditor.setText('');
                }
                originalTopicIndex = -1;
                return;
              }
              
              const lang = languageSelect.value || 'ar';
              const content = getLangData(lang);
              const topics = content.sections?.[section]?.subSections?.[subsection]?.topics || [];
              const topic = topics[parseInt(topicIndex)];
              
              if (topic) {
                const topicTitle = typeof topic === 'string' ? topic : topic.title;
                const topicContent = typeof topic === 'object' ? topic.content || '' : '';
                const topicImages = typeof topic === 'object' ? topic.images || topic.image || '' : ''; // Support both old 'image' and new 'images'
                
                document.getElementById('crudTopicTitle').value = topicTitle;
                if (quillEditor) {
                  quillEditor.root.innerHTML = topicContent;
                }
                
                // Show existing images if available
                const imagePreview = document.getElementById('crudImagePreview');
                if (topicImages && imagePreview) {
                  imagePreview.innerHTML = '';
                  imagePreview.style.display = 'flex';
                  
                  // Handle both single image (string) and multiple images (array)
                  const imagesArray = Array.isArray(topicImages) ? topicImages : [topicImages];
                  selectedImages = [...imagesArray]; // Populate selectedImages for editing
                  
                  imagesArray.forEach((imgSrc, index) => {
                    const imgContainer = document.createElement('div');
                    imgContainer.style.cssText = 'position:relative; display:inline-block;';
                    
                    const img = document.createElement('img');
                    img.src = imgSrc;
                    img.style.cssText = 'max-width:150px; max-height:150px; border-radius:6px; border:2px solid #ddd; object-fit:cover;';
                    
                    const removeBtn = document.createElement('button');
                    removeBtn.innerHTML = '✕';
                    removeBtn.style.cssText = 'position:absolute; top:5px; right:5px; width:25px; height:25px; background:#f44336; color:#fff; border:none; border-radius:50%; cursor:pointer; font-size:14px; line-height:1;';
                    removeBtn.onclick = function() {
                      selectedImages.splice(index, 1);
                      imgContainer.remove();
                      if (selectedImages.length === 0) {
                        imagePreview.style.display = 'none';
                      }
                    };
                    
                    imgContainer.appendChild(img);
                    imgContainer.appendChild(removeBtn);
                    imagePreview.appendChild(imgContainer);
                  });
                } else if (imagePreview) {
                  imagePreview.style.display = 'none';
                  selectedImages = [];
                }
                
                // Track the original index for editing
                originalTopicIndex = parseInt(topicIndex);
                
                showCrudStatus('✏️ Loaded topic for editing/deleting', 'info');
              }
            }
            
            // Track original names for editing (to handle renames)
            let originalSectionName = '';
            let originalSubsectionName = '';
            let originalTopicIndex = -1; // Track which topic is being edited
            
            /**
             * Save CRUD data (requires password verification)
             */
            function saveCrudData() {
              // Check if authenticated, if not, request password
              if (!isAdminAuthenticated) {
                requestPasswordVerification(saveCrudData);
                return;
              }
              
              const lang = languageSelect.value || 'ar';
              const content = getLangData(lang) || { sections: {}, messages: {} };
              const messages = content.messages || {};
              const type = crudType.value;
              
              try {
                if (type === 'section') {
                  const sectionName = document.getElementById('crudSectionName').value.trim();
                  if (!sectionName) {
                    showCrudStatus(messages.crudEnterAll || '⚠️ الرجاء إدخال اسم القسم', 'warning');
                    return;
                  }
                  
                  if (!content.sections) content.sections = {};
                  
                  // If editing (original name exists and different), rename
                  if (originalSectionName && originalSectionName !== sectionName) {
                    if (content.sections[originalSectionName]) {
                      content.sections[sectionName] = content.sections[originalSectionName];
                      delete content.sections[originalSectionName];
                      showCrudStatus(messages.crudSaved || '✓ تم تحديث القسم بنجاح', 'success');
                    }
                  } else {
                    // Create new section
                    if (!content.sections[sectionName]) {
                      content.sections[sectionName] = { subSections: {} };
                    }
                    showCrudStatus(messages.crudSaved || '✓ تم حفظ القسم بنجاح', 'success');
                  }
                  
                  originalSectionName = ''; // Reset
                  
                } else if (type === 'subsection') {
                  const parentSection = document.getElementById('crudParentSection').value;
                  const subsectionName = document.getElementById('crudSubsectionName').value.trim();
                  
                  if (!parentSection || !subsectionName) {
                    showCrudStatus(messages.crudEnterAll || '⚠️ الرجاء إدخال جميع الحقول', 'warning');
                    return;
                  }
                  
                  if (!content.sections[parentSection]) {
                    content.sections[parentSection] = { subSections: {} };
                  }
                  if (!content.sections[parentSection].subSections) {
                    content.sections[parentSection].subSections = {};
                  }
                  
                  // If editing (original name exists and different), rename
                  if (originalSubsectionName && originalSubsectionName !== subsectionName) {
                    if (content.sections[parentSection].subSections[originalSubsectionName]) {
                      content.sections[parentSection].subSections[subsectionName] = 
                        content.sections[parentSection].subSections[originalSubsectionName];
                      delete content.sections[parentSection].subSections[originalSubsectionName];
                      showCrudStatus(messages.crudSaved || '✓ تم تحديث القسم الفرعي بنجاح', 'success');
                    }
                  } else {
                    // Create new subsection
                    if (!content.sections[parentSection].subSections[subsectionName]) {
                      content.sections[parentSection].subSections[subsectionName] = { topics: [] };
                    }
                    showCrudStatus(messages.crudSaved || '✓ تم حفظ القسم الفرعي بنجاح', 'success');
                  }
                  
                  originalSubsectionName = ''; // Reset
                  
                } else if (type === 'topic') {
                  const section = document.getElementById('crudTopicSection').value;
                  const subsection = document.getElementById('crudTopicSubsection').value;
                  const title = document.getElementById('crudTopicTitle').value.trim();
                  const topicContent = quillEditor ? quillEditor.root.innerHTML.trim() : '';
                  const imageInput = document.getElementById('crudTopicImage');
                  
                  if (!section || !subsection || !title || !topicContent) {
                    showCrudStatus(messages.crudEnterAll || '⚠️ الرجاء إدخال جميع الحقول', 'warning');
                    return;
                  }
                  
                  if (!content.sections[section]) {
                    content.sections[section] = { subSections: {} };
                  }
                  if (!content.sections[section].subSections[subsection]) {
                    content.sections[section].subSections[subsection] = { topics: [] };
                  }
                  if (!content.sections[section].subSections[subsection].topics) {
                    content.sections[section].subSections[subsection].topics = [];
                  }
                  
                  const topics = content.sections[section].subSections[subsection].topics;
                  
                  // Handle multiple images if uploaded
                  const processTopicSave = (imagesData) => {
                    const topicData = {
                      title: title,
                      content: topicContent
                    };
                    
                    // Add images if available (can be single or multiple)
                    if (imagesData && imagesData.length > 0) {
                      // Store as array if multiple images, or single value if one image
                      topicData.images = imagesData.length > 1 ? imagesData : imagesData[0];
                    }
                    
                    // If we have an originalTopicIndex, we're editing - update that specific topic
                    if (originalTopicIndex >= 0 && originalTopicIndex < topics.length) {
                      // Keep existing images if no new images uploaded
                      if ((!imagesData || imagesData.length === 0) && topics[originalTopicIndex].images) {
                        topicData.images = topics[originalTopicIndex].images;
                      }
                      topics[originalTopicIndex] = topicData;
                      showCrudStatus(messages.crudSaved || '✓ تم تحديث الموضوع بنجاح', 'success');
                    } else {
                      // Add new topic
                      topics.push(topicData);
                      showCrudStatus(messages.crudSaved || '✓ تم إضافة الموضوع بنجاح', 'success');
                    }
                    
                    // Reset original topic index
                    originalTopicIndex = -1;
                    
                    // Save to single source (Arabic content only)
                    const contentToSave = {
                      sections: content.sections,
                      messages: data.ar.messages // Keep original Arabic messages
                    };
                    
                    // Save to localStorage FIRST (primary storage)
                    showCrudStatus('⏳ Saving...', 'info');
                    
                    try {
                      localStorage.setItem('customContent', JSON.stringify(contentToSave));
                      
                      // Update in-memory Arabic data
                      data.ar.sections = content.sections;
                      
                      console.log('Content saved:', Object.keys(contentToSave.sections));
                      
                      showCrudStatus('✓ Saved successfully!', 'success');
                      
                      // Refresh UI
                      translatePage(lang);
                      openMainSections();
                      
                      // Clear fields after save
                      setTimeout(() => {
                        clearCrudFields();
                        populateSectionDropdowns();
                        selectedImages = []; // Clear selected images
                      }, 1000);
                      
                      // Sync to server
                      saveToServer(contentToSave).then(success => {
                        if (success) {
                          console.log('✓ Synced to server');
                        }
                      }).catch(err => {
                        console.warn('Server sync failed:', err.message);
                      });
                      
                    } catch (e) {
                      showCrudStatus('✗ Save failed: ' + e.message, 'error');
                    }
                    
                    return; // Exit here - server save handles the rest
                  };
                  
                  // Use the selectedImages array from the file input handler
                  if (selectedImages && selectedImages.length > 0) {
                    processTopicSave(selectedImages);
                  } else {
                    // No images, save without them
                    processTopicSave([]);
                  }
                  
                  return; // Exit here since processTopicSave handles the rest
                }
                
                // For section and subsection saves (no images)
                const contentToSave = {
                  sections: content.sections,
                  messages: data.ar.messages
                };
                
                showCrudStatus('⏳ Saving...', 'info');
                
                try {
                  // Save to localStorage (primary storage)
                  localStorage.setItem('customContent', JSON.stringify(contentToSave));
                  data.ar.sections = content.sections;
                  
                  showCrudStatus('✓ Saved successfully!', 'success');
                  
                  translatePage(lang);
                  openMainSections();
                  
                  setTimeout(() => {
                    clearCrudFields();
                    populateSectionDropdowns();
                  }, 1000);
                  
                  // Sync to server
                  saveToServer(contentToSave).catch(err => {
                    console.warn('Server sync failed:', err.message);
                  });
                } catch (e) {
                  showCrudStatus('✗ Save failed: ' + e.message, 'error');
                }
                
              } catch (error) {
                showCrudStatus(`✗ ${messages.crudError || 'فشل الحفظ'}: ${error.message}`, 'error');
              }
            }
            
            /**
             * Delete CRUD data
             */
            function deleteCrudData() {
              // Check if authenticated, if not, request password
              if (!isAdminAuthenticated) {
                requestPasswordVerification(deleteCrudData);
                return;
              }
              
              const lang = languageSelect.value || 'ar';
              const content = getLangData(lang) || { sections: {}, messages: {} };
              const messages = content.messages || {};
              const type = crudType.value;
              
              if (!confirm(messages.crudDeleteConfirm || 'Are you sure you want to delete this item?')) {
                return;
              }
              
              try {
                if (type === 'section') {
                  const sectionName = document.getElementById('crudSectionName').value.trim();
                  if (!sectionName || !content.sections[sectionName]) {
                    showCrudStatus(messages.crudEnterAll || '⚠️ القسم غير موجود', 'warning');
                    return;
                  }
                  
                  delete content.sections[sectionName];
                  showCrudStatus(messages.crudDeleted || '✓ تم حذف القسم بنجاح', 'success');
                  
                } else if (type === 'subsection') {
                  const parentSection = document.getElementById('crudParentSection').value;
                  const subsectionName = document.getElementById('crudSubsectionName').value.trim();
                  
                  if (!parentSection || !subsectionName || !content.sections[parentSection]?.subSections[subsectionName]) {
                    showCrudStatus(messages.crudEnterAll || '⚠️ القسم الفرعي غير موجود', 'warning');
                    return;
                  }
                  
                  delete content.sections[parentSection].subSections[subsectionName];
                  showCrudStatus(messages.crudDeleted || '✓ تم حذف القسم الفرعي بنجاح', 'success');
                  
                } else if (type === 'topic') {
                  const section = document.getElementById('crudTopicSection').value;
                  const subsection = document.getElementById('crudTopicSubsection').value;
                  const title = document.getElementById('crudTopicTitle').value.trim();
                  
                  if (!section || !subsection || !title) {
                    showCrudStatus(messages.crudEnterAll || '⚠️ الرجاء إدخال جميع الحقول', 'warning');
                    return;
                  }
                  
                  const topics = content.sections[section]?.subSections[subsection]?.topics;
                  if (!topics) {
                    showCrudStatus(messages.crudEnterAll || '⚠️ الموضوع غير موجود', 'warning');
                    return;
                  }
                  
                  // Handle both string topics and object topics
                  const index = topics.findIndex(t => {
                    const topicTitle = typeof t === 'string' ? t : t.title;
                    return topicTitle === title;
                  });
                  
                  if (index >= 0) {
                    topics.splice(index, 1);
                    showCrudStatus(messages.crudDeleted || '✓ تم حذف الموضوع بنجاح', 'success');
                  } else {
                    showCrudStatus(messages.crudEnterAll || '⚠️ الموضوع غير موجود', 'warning');
                    return;
                  }
                }
                
                // Save to single source
                const contentToSave = {
                  sections: content.sections,
                  messages: data.ar.messages
                };
                localStorage.setItem('customContent', JSON.stringify(contentToSave));
                
                // Update in-memory Arabic data
                data.ar.sections = content.sections;
                
                // Refresh UI
                translatePage(lang);
                openMainSections();
                
                // Clear fields after delete
                setTimeout(() => {
                  clearCrudFields();
                  populateSectionDropdowns();
                }, 1000);
                
              } catch (error) {
                showCrudStatus(`✗ ${messages.crudError || 'فشل الحذف'}: ${error.message}`, 'error');
              }
            }
            
            /**
             * Export content as JSON file
             */
            function exportCrudData() {
              const content = localStorage.getItem('customContent');
              const lang = languageSelect.value || 'ar';
              const messages = getLangData(lang).messages || {};
              
              if (!content) {
                showCrudStatus(messages.crudNoContent || '⚠️ No content to export', 'warning');
                return;
              }
              
              // Create download
              const blob = new Blob([content], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              const date = new Date().toISOString().split('T')[0];
              a.download = `custom-content.json`; // Changed: always same filename for easy workflow
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
              
              showCrudStatus(messages.crudExportSuccess || '✓ Content exported! Save to project folder and rebuild APK.', 'success');
            }
            
            /**
             * Trigger file import
             */
            function importCrudData() {
              const fileInput = document.getElementById('crudImportFile');
              if (fileInput) {
                fileInput.click();
              }
            }
            
            /**
             * Handle imported JSON file
             */
            function handleImportFile(event) {
              const file = event.target.files[0];
              if (!file) return;
              
              const lang = languageSelect.value || 'ar';
              const messages = getLangData(lang).messages || {};
              
              const reader = new FileReader();
              reader.onload = (e) => {
                try {
                  const content = JSON.parse(e.target.result);
                  
                  // Validate structure
                  if (!content.sections) {
                    throw new Error('Invalid content structure');
                  }
                  
                  // Save to localStorage
                  localStorage.setItem('customContent', JSON.stringify(content));
                  
                  // Update in-memory data
                  data.ar.sections = content.sections;
                  if (content.messages) {
                    data.ar.messages = content.messages;
                  }
                  
                  // Refresh UI
                  openMainSections();
                  populateSectionDropdowns();
                  
                  showCrudStatus(messages.crudImportSuccess || '✓ Content imported successfully!', 'success');
                  
                  // Clear file input
                  event.target.value = '';
                } catch (error) {
                  console.error('Import error:', error);
                  showCrudStatus(messages.crudImportError || '✗ Invalid JSON file', 'error');
                  event.target.value = '';
                }
              };
              reader.readAsText(file);
            }
            
            // CRUD Event Listeners
            if (crudEditorClose) {
              crudEditorClose.addEventListener('click', hideCrudEditor);
            }
            
            if (crudType) {
              crudType.addEventListener('change', updateCrudFields);
            }
            
            if (crudSaveBtn) {
              crudSaveBtn.addEventListener('click', saveCrudData);
            }
            
            if (crudDeleteBtn) {
              crudDeleteBtn.addEventListener('click', deleteCrudData);
            }
            
            // Export/Import buttons
            const crudExportBtn = document.getElementById('crudExportBtn');
            const crudImportBtn = document.getElementById('crudImportBtn');
            const crudImportFile = document.getElementById('crudImportFile');
            
            if (crudExportBtn) {
              crudExportBtn.addEventListener('click', exportCrudData);
            }
            
            if (crudImportBtn) {
              crudImportBtn.addEventListener('click', importCrudData);
            }
            
            if (crudImportFile) {
              crudImportFile.addEventListener('change', handleImportFile);
            }
            
            // Image upload preview and removal (Multiple images support with drag-drop)
            const crudTopicImage = document.getElementById('crudTopicImage');
            const crudImagePreview = document.getElementById('crudImagePreview');
            const imageDropZone = document.getElementById('imageDropZone');
            
            // Click to select files
            if (imageDropZone && crudTopicImage) {
              imageDropZone.addEventListener('click', function() {
                crudTopicImage.click();
              });
              
              // Drag and drop support
              imageDropZone.addEventListener('dragover', function(e) {
                e.preventDefault();
                e.stopPropagation();
                imageDropZone.style.borderColor = '#1976d2';
                imageDropZone.style.background = '#e3f2fd';
              });
              
              imageDropZone.addEventListener('dragleave', function(e) {
                e.preventDefault();
                e.stopPropagation();
                imageDropZone.style.borderColor = '#2196f3';
                imageDropZone.style.background = '#f5f5f5';
              });
              
              imageDropZone.addEventListener('drop', function(e) {
                e.preventDefault();
                e.stopPropagation();
                imageDropZone.style.borderColor = '#2196f3';
                imageDropZone.style.background = '#f5f5f5';
                
                const files = Array.from(e.dataTransfer.files);
                processImageFiles(files);
              });
            }
            
            // Process multiple image files
            /**
             * Compress image to reduce file size and prevent quota errors
             */
            function compressImage(file, maxWidth = 800, quality = 0.7) {
              return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = function(e) {
                  const img = new Image();
                  img.onload = function() {
                    const canvas = document.createElement('canvas');
                    let width = img.width;
                    let height = img.height;
                    
                    // Calculate new dimensions
                    if (width > maxWidth) {
                      height = (height * maxWidth) / width;
                      width = maxWidth;
                    }
                    
                    canvas.width = width;
                    canvas.height = height;
                    
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);
                    
                    // Convert to base64 with compression
                    const compressedBase64 = canvas.toDataURL('image/jpeg', quality);
                    resolve(compressedBase64);
                  };
                  img.onerror = reject;
                  img.src = e.target.result;
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
              });
            }
            
            function processImageFiles(files) {
              if (files.length > 0) {
                crudImagePreview.style.display = 'flex';
                
                // Process images sequentially to avoid memory issues
                files.forEach((file, index) => {
                  if (file.type.startsWith('image/')) {
                    compressImage(file).then(compressedBase64 => {
                      selectedImages.push(compressedBase64);
                      
                      // Create image preview container
                      const imgContainer = document.createElement('div');
                      imgContainer.style.cssText = 'position:relative; display:inline-block;';
                      
                      const img = document.createElement('img');
                      img.src = compressedBase64;
                      img.style.cssText = 'max-width:150px; max-height:150px; border-radius:6px; border:2px solid #ddd; object-fit:cover;';
                      
                      const removeBtn = document.createElement('button');
                      removeBtn.innerHTML = '✕';
                      removeBtn.type = 'button';
                      removeBtn.style.cssText = 'position:absolute; top:5px; right:5px; width:25px; height:25px; background:#f44336; color:#fff; border:none; border-radius:50%; cursor:pointer; font-size:14px; line-height:1; z-index:10;';
                      removeBtn.onclick = function(e) {
                        e.preventDefault();
                        const imgSrc = img.src;
                        const idx = selectedImages.indexOf(imgSrc);
                        if (idx > -1) {
                          selectedImages.splice(idx, 1);
                        }
                        imgContainer.remove();
                        if (selectedImages.length === 0) {
                          crudImagePreview.style.display = 'none';
                        }
                      };
                      
                      imgContainer.appendChild(img);
                      imgContainer.appendChild(removeBtn);
                      crudImagePreview.appendChild(imgContainer);
                    }).catch(error => {
                      console.error('Error compressing image:', error);
                      showCrudStatus('✗ Failed to compress image', 'error');
                    });
                  }
                });
                
                // Reset file input so same files can be selected again
                if (crudTopicImage) crudTopicImage.value = '';
              }
            }
            
            if (crudTopicImage) {
              crudTopicImage.addEventListener('change', function(e) {
                const files = Array.from(e.target.files);
                processImageFiles(files);
              });
            }
            
            // Section selector for editing/deleting
            const sectionSelector = document.getElementById('crudSectionSelector');
            if (sectionSelector) {
              sectionSelector.addEventListener('change', loadSelectedSection);
            }
            
            // Parent section selector for subsections
            const parentSectionSelect = document.getElementById('crudParentSection');
            if (parentSectionSelect) {
              parentSectionSelect.addEventListener('change', updateSubsectionSelector);
            }
            
            // Subsection selector for editing/deleting
            const subsectionSelector = document.getElementById('crudSubsectionSelector');
            if (subsectionSelector) {
              subsectionSelector.addEventListener('change', loadSelectedSubsection);
            }
            
            // Update subsection dropdown when section changes
            const topicSectionSelect = document.getElementById('crudTopicSection');
            if (topicSectionSelect) {
              topicSectionSelect.addEventListener('change', updateSubsectionDropdown);
            }
            
            // Update topics selector when subsection changes
            const topicSubsectionSelect = document.getElementById('crudTopicSubsection');
            if (topicSubsectionSelect) {
              topicSubsectionSelect.addEventListener('change', updateTopicsSelector);
            }
            
            // Load topic data when selected from dropdown
            const topicSelector = document.getElementById('crudTopicSelector');
            if (topicSelector) {
              topicSelector.addEventListener('change', loadSelectedTopic);
            }
            
            // Load custom Arabic content from localStorage on startup (single source of truth)
            const customContent = localStorage.getItem('customContent');
            if (customContent) {
              try {
                const parsed = JSON.parse(customContent);
                if (parsed.sections) {
                  data.ar.sections = parsed.sections;
                  console.log('Loaded custom Arabic content from localStorage');
                }
              } catch (e) {
                console.warn('Failed to load custom content:', e);
              }
            } else {
              // Migration: check for old per-language storage and migrate Arabic content
              const oldArabicData = localStorage.getItem('customData_ar');
              if (oldArabicData) {
                try {
                  const parsed = JSON.parse(oldArabicData);
                  if (parsed.sections) {
                    localStorage.setItem('customContent', JSON.stringify({
                      sections: parsed.sections,
                      messages: data.ar.messages
                    }));
                    data.ar.sections = parsed.sections;
                    console.log('Migrated old Arabic data to new storage format');
                    
                    // Clean up old storage
                    ['ar', 'en', 'fa', 'ur'].forEach(lang => {
                      localStorage.removeItem(`customData_${lang}`);
                    });
                  }
                } catch (e) {
                  console.warn('Failed to migrate old data:', e);
                }
              }
            }

            // Optional: keyboard shortcut Ctrl+E to export
            document.addEventListener('keydown', (e) => {
              if ((e.ctrlKey || e.metaKey) && (e.key === 'e' || e.key === 'E')) {
                const btn = document.getElementById('exportLangBtn');
                if (btn) btn.click();
              }
            });

            // ========================================
            // 📱 PWA UPDATE DETECTION SYSTEM
            // ========================================
            
            /**
             * Check for app version updates by comparing local version with server version.json
             * Uses localStorage to track current version and prevent repeated notifications.
             */
            async function checkForUpdates(showNotification = true) {
              try {
                // Fetch version.json with cache-busting timestamp
                const response = await fetch(`version.json?t=${Date.now()}`, {
                  cache: 'no-store'
                });
                
                if (!response.ok) {
                  console.warn('Could not fetch version.json');
                  return null;
                }
                
                const serverVersion = await response.json();
                const currentVersion = localStorage.getItem('appVersion') || '0.0.0';
                
                console.log('Current version:', currentVersion);
                console.log('Server version:', serverVersion.version);
                
                // Compare versions (simple string comparison, works for semver)
                if (serverVersion.version !== currentVersion) {
                  console.log('New version available!', serverVersion);
                  
                  if (showNotification) {
                    // Show update notification in Arabic
                    const updateMsg = `
                      <div style="position:fixed; top:60px; left:50%; transform:translateX(-50%); 
                                  background:#4caf50; color:#fff; padding:12px 20px; 
                                  border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.3);
                                  z-index:10000; text-align:center; max-width:90%;">
                        <strong>✨ تحديث متاح!</strong><br>
                        <small>الإصدار ${serverVersion.version} - ${serverVersion.description || ''}</small><br>
                        <button onclick="updateApp()" style="margin-top:8px; padding:6px 12px; 
                                background:#fff; color:#4caf50; border:none; border-radius:4px; 
                                cursor:pointer; font-weight:bold;">
                          تحديث الآن
                        </button>
                        <button onclick="this.closest('div').remove()" 
                                style="margin-top:8px; margin-right:8px; padding:6px 12px; 
                                background:transparent; color:#fff; border:1px solid #fff; 
                                border-radius:4px; cursor:pointer;">
                          لاحقاً
                        </button>
                      </div>
                    `;
                    document.body.insertAdjacentHTML('beforeend', updateMsg);
                  }
                  
                  return serverVersion;
                } else {
                  console.log('App is up to date');
                  if (showNotification) {
                    showTemporaryMessage('✅ التطبيق محدث', 2000);
                  }
                }
                
                return null;
              } catch (error) {
                console.error('Error checking for updates:', error);
                return null;
              }
            }
            
            /**
             * Update the app by clearing all caches and reloading
             */
            window.updateApp = async function() {
              try {
                showTemporaryMessage('⏳ جاري التحديث...', 2000);
                
                // Clear all caches
                const cacheNames = await caches.keys();
                await Promise.all(cacheNames.map(name => caches.delete(name)));
                
                // Unregister service worker
                if ('serviceWorker' in navigator) {
                  const registrations = await navigator.serviceWorker.getRegistrations();
                  await Promise.all(registrations.map(reg => reg.unregister()));
                }
                
                // Fetch latest version and store it
                const response = await fetch(`version.json?t=${Date.now()}`, { cache: 'no-store' });
                const newVersion = await response.json();
                localStorage.setItem('appVersion', newVersion.version);
                
                // Force reload from server
                window.location.reload(true);
              } catch (error) {
                console.error('Error updating app:', error);
                alert('فشل التحديث. يرجى المحاولة مرة أخرى.');
              }
            };
            
            /**
             * Show temporary message (utility function)
             */
            function showTemporaryMessage(message, duration = 3000) {
              const msg = document.createElement('div');
              msg.textContent = message;
              Object.assign(msg.style, {
                position: 'fixed',
                top: '60px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#333',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '6px',
                zIndex: '10000',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
              });
              document.body.appendChild(msg);
              setTimeout(() => msg.remove(), duration);
            }
            
            // Check for updates on app load (after 5 seconds)
            setTimeout(() => {
              checkForUpdates(true);
            }, 5000);
            
            // Store current version on first load
            if (!localStorage.getItem('appVersion')) {
              fetch('version.json')
                .then(r => r.json())
                .then(v => localStorage.setItem('appVersion', v.version))
                .catch(e => console.warn('Could not store version', e));
            }
            
          }, 500);
        }, 1000);
      }, 1500);
    }, 1500);
  }, { once: true });
};