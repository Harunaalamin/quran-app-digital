// ============================================
// AL-QUR'AN AL-KAREEM - MAIN JAVASCRIPT
// DA FASSARAR HAUSA DA KARANTAWA
// ============================================

// ============================================
// GLOBAL STATE
// ============================================
const state = {
    surahs: [],
    currentSurah: null,
    currentTranslation: null,
    currentHausaTranslation: null,
    currentReciter: 'ar.alafasy',
    currentTranslationKey: 'ha.gumi',
    currentAudioIndex: -1,
    currentView: 'grid',
    theme: 'light',
    bookmarks: [],
    isPlaying: false,
    isRepeat: false,
    isReadingHausa: false
};

// ============================================
// HAUSA SURAH NAMES MAPPING
// ============================================
const hausaSurahNames = {
    1: "Al-Fatiha (Mabudin Littafi)",
    2: "Al-Baqara (Saniya)",
    3: "Ali Imran (Iyalan Imrana)",
    4: "An-Nisa (Mata)",
    5: "Al-Ma'ida (Teburin Abinci)",
    6: "Al-An'am (Dabbobin Gida)",
    7: "Al-A'raf (Bangon Tsira)",
    8: "Al-Anfal (Ganimar Yaki)",
    9: "At-Tawba (Tuba)",
    10: "Yunus (Yunusa)",
    11: "Hud (Hudu)",
    12: "Yusuf (Yusufa)",
    13: "Ar-Ra'd (Tsawa)",
    14: "Ibrahim (Ibrahima)",
    15: "Al-Hijr (Wurin Duwatsu)",
    16: "An-Nahl (Kudan Zuma)",
    17: "Al-Isra (Tafiyar Dare)",
    18: "Al-Kahf (Kogo)",
    19: "Maryam (Maryamu)",
    20: "Ta-Ha (Ta-Ha)",
    21: "Al-Anbiya (Annabawa)",
    22: "Al-Hajj (Hajji)",
    23: "Al-Mu'minun (Muminai)",
    24: "An-Nur (Haske)",
    25: "Al-Furqan (Mabudin Gaskiya)",
    26: "Ash-Shu'ara (Mawaka)",
    27: "An-Naml (Tururuwa)",
    28: "Al-Qasas (Labarai)",
    29: "Al-Ankabut (Gizo-gizo)",
    30: "Ar-Rum (Rumawa)",
    31: "Luqman (Luqmanu)",
    32: "As-Sajda (Sujada)",
    33: "Al-Ahzab (Ƙungiyoyi)",
    34: "Saba (Saba'awa)",
    35: "Fatir (Mahalicci)",
    36: "Ya-Sin (Ya-Sin)",
    37: "As-Saffat (Masu Jere)",
    38: "Sad (Sad)",
    39: "Az-Zumar (Ƙungiyoyi)",
    40: "Ghafir (Mai Gafara)",
    41: "Fussilat (An Bayyana)",
    42: "Ash-Shura (Shawara)",
    43: "Az-Zukhruf (Ado)",
    44: "Ad-Dukhan (Hayaki)",
    45: "Al-Jathiya (Masu Gwiwoyi)",
    46: "Al-Ahqaf (Tuddan Yashi)",
    47: "Muhammad (Muhammadu)",
    48: "Al-Fath (Nasara)",
    49: "Al-Hujurat (Dakuna)",
    50: "Qaf (Ƙaf)",
    51: "Adh-Dhariyat (Masu Yayyafawa)",
    52: "At-Tur (Dutsen Sinai)",
    53: "An-Najm (Tauraro)",
    54: "Al-Qamar (Wata)",
    55: "Ar-Rahman (Mai Rahama)",
    56: "Al-Waqi'a (Mai Aukuwa)",
    57: "Al-Hadid (Ɓaƙin Ƙarfe)",
    58: "Al-Mujadila (Mai Jayayya)",
    59: "Al-Hashr (Tattarawa)",
    60: "Al-Mumtahana (Jarrabawa)",
    61: "As-Saff (Sahu)",
    62: "Al-Jumu'a (Juma'a)",
    63: "Al-Munafiqun (Munafukai)",
    64: "At-Taghabun (Riba da Asara)",
    65: "At-Talaq (Saki)",
    66: "At-Tahrim (Haramta)",
    67: "Al-Mulk (Mulki)",
    68: "Al-Qalam (Alƙalami)",
    69: "Al-Haqqa (Tabbatacciya)",
    70: "Al-Ma'arij (Matakai)",
    71: "Nuh (Nuhu)",
    72: "Al-Jinn (Aljannu)",
    73: "Al-Muzzammil (Wanda Ya Lulluɓe)",
    74: "Al-Muddaththir (Wanda Ya Rufa)",
    75: "Al-Qiyama (Tashin Ƙiyama)",
    76: "Al-Insan (Mutum)",
    77: "Al-Mursalat (Manzanni)",
    78: "An-Naba (Babban Labari)",
    79: "An-Nazi'at (Masu Fitarwa)",
    80: "Abasa (Ya Munƙarisa)",
    81: "At-Takwir (Nadewa)",
    82: "Al-Infitar (Tsagewa)",
    83: "Al-Mutaffifin (Masu Ƙwacewa)",
    84: "Al-Inshiqaq (Fashewa)",
    85: "Al-Buruj (Taurarin Sarari)",
    86: "At-Tariq (Mai Zuwa Da Dare)",
    87: "Al-A'la (Mafi Daukaka)",
    88: "Al-Ghashiya (Mai Rufe",
    89: "Al-Fajr (Alfijir)",
    90: "Al-Balad (Gari)",
    91: "Ash-Shams (Rana)",
    92: "Al-Layl (Dare)",
    93: "Ad-Duha (Hantsi)",
    94: "Ash-Sharh (Buɗaɗɗiyar Kirji)",
    95: "At-Tin (Ɗorawa)",
    96: "Al-Alaq (Gudan Jini)",
    97: "Al-Qadr (Ƙaddara)",
    98: "Al-Bayyina (Hujja Bayyananniya)",
    99: "Az-Zalzala (Girgizar Ƙasa)",
    100: "Al-Adiyat (Masu Gudu)",
    101: "Al-Qari'a (Mai Ƙwanƙwasa)",
    102: "At-Takathur (Ƙaruwar Dukiya)",
    103: "Al-Asr (Zamani)",
    104: "Al-Humaza (Mai Zunɗe)",
    105: "Al-Fil (Giwa)",
    106: "Quraysh (Ƙuraishawa)",
    107: "Al-Ma'un (Taimako)",
    108: "Al-Kawthar (Kawthar)",
    109: "Al-Kafirun (Kafirai)",
    110: "An-Nasr (Taimako)",
    111: "Al-Masad (Igilar Taba)",
    112: "Al-Ikhlas (Tauhidi)",
    113: "Al-Falaq (Alfijir)",
    114: "An-Nas (Mutane)"
};

// ============================================
// RECITERS & TRANSLATIONS DATA
// ============================================
const RECITERS = [
    { id: 'ar.alafasy', name: 'Sheikh Mishary Al-Afasy', style: 'Murattal' },
    { id: 'ar.ahmedajamy', name: 'Sheikh Ahmed Al-Ajamy', style: 'Murattal' },
    { id: 'ar.hudhaify', name: 'Sheikh Ali Al-Hudhaify', style: 'Murattal' },
    { id: 'ar.minshawi', name: 'Sheikh Mohamed Al-Minshawi', style: 'Mujawwad' },
    { id: 'ar.husary', name: 'Sheikh Mahmoud Al-Husary', style: 'Murattal' },
    { id: 'ar.abdulbasit', name: 'Sheikh Abdul Basit', style: 'Mujawwad' },
    { id: 'ar.saoodshuraym', name: 'Sheikh Saood Al-Shuraym', style: 'Murattal' },
    { id: 'ar.abdurrahmaansudais', name: 'Sheikh Al-Sudais', style: 'Murattal' }
];

const TRANSLATIONS = [
    { id: 'ha.gumi', name: 'Abubakar Gumi (Hausa)', language: 'Hausa', isHausa: true, hasAudio: true },
    { id: 'en.asad', name: 'Muhammad Asad', language: 'English', isHausa: false, hasAudio: true },
    { id: 'en.sahih', name: 'Sahih International', language: 'English', isHausa: false, hasAudio: true },
    { id: 'en.yusufali', name: 'Yusuf Ali', language: 'English', isHausa: false, hasAudio: true },
    { id: 'en.pickthall', name: 'Marmaduke Pickthall', language: 'English', isHausa: false, hasAudio: true },
    { id: 'fr.hamidullah', name: 'Muhammad Hamidullah', language: 'French', isHausa: false, hasAudio: true }
];

// ============================================
// DOM ELEMENTS
// ============================================
function $(id) {
    return document.getElementById(id);
}

function getElements() {
    return {
        splashScreen: $('splash-screen'),
        preloader: $('preloader'),
        navbar: $('navbar'),
        themeToggle: $('theme-toggle'),
        bookmarksBtn: $('bookmarks-btn'),
        reciterBtn: $('reciter-btn'),
        translationBtn: $('translation-btn'),
        translationIndicator: $('translation-indicator'),
        bookmarksCount: $('bookmarks-count'),
        searchInput: $('search-input'),
        searchClear: $('search-clear'),
        surahListSection: $('surah-list-section'),
        surahGrid: $('surah-grid'),
        surahList: $('surah-list'),
        surahSkeleton: $('surah-skeleton'),
        emptySearch: $('empty-search'),
        viewBtns: document.querySelectorAll('.view-btn'),
        surahDetailSection: $('surah-detail-section'),
        backBtn: $('back-btn'),
        prevSurahBtn: $('prev-surah-btn'),
        nextSurahBtn: $('next-surah-btn'),
        currentSurahPosition: $('current-surah-position'),
        bookmarkSurahBtn: $('bookmark-surah-btn'),
        listenSurahBtn: $('listen-surah-btn'),
        detailSurahAr: $('detail-surah-ar'),
        detailSurahEn: $('detail-surah-en'),
        detailSurahHa: $('detail-surah-ha'),
        detailSurahType: $('detail-surah-type'),
        detailSurahInfo: $('detail-surah-info'),
        translationBadge: $('translation-badge'),
        bismillahText: $('bismillah-text'),
        bismillahHausa: $('bismillah-hausa'),
        ayahList: $('ayah-list'),
        audioPlayerBar: $('audio-player-bar'),
        mainAudio: $('main-audio'),
        playBtn: $('play-btn'),
        prevAyahBtn: $('prev-ayah-btn'),
        nextAyahBtn: $('next-ayah-btn'),
        playerSurahName: $('player-surah-name'),
        playerReciterName: $('player-reciter-name'),
        playerTranslationLang: $('player-translation-lang'),
        playerAyahBadge: $('player-ayah-badge'),
        playerProgressBar: $('player-progress-bar'),
        playerProgressFill: $('player-progress-fill'),
        playerTime: $('player-time'),
        playerCloseBtn: $('player-close-btn'),
        repeatAyahBtn: $('repeat-ayah-btn'),
        reciterModal: $('reciter-modal'),
        translationModal: $('translation-modal'),
        bookmarksModal: $('bookmarks-modal'),
        closeReciterModal: $('close-reciter-modal'),
        closeTranslationModal: $('close-translation-modal'),
        closeBookmarksModal: $('close-bookmarks-modal'),
        reciterList: $('reciter-list'),
        translationList: $('translation-list'),
        bookmarksList: $('bookmarks-list'),
        toastContainer: $('toast-container'),
        scrollIndicator: $('scroll-indicator')
    };
}

let dom = {};

// ============================================
// UTILITY FUNCTIONS
// ============================================
function showToast(message, type) {
    type = type || 'info';
    if (!dom.toastContainer) return;
    
    var toast = document.createElement('div');
    toast.className = 'toast ' + type;
    
    var icons = {
        success: 'fa-circle-check',
        error: 'fa-circle-exclamation',
        info: 'fa-circle-info'
    };
    
    toast.innerHTML = '<i class="fa-solid ' + (icons[type] || icons.info) + '"></i><span>' + message + '</span>';
    dom.toastContainer.appendChild(toast);
    
    setTimeout(function() {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(function() {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    var mins = Math.floor(seconds / 60);
    var secs = Math.floor(seconds % 60);
    return mins + ':' + (secs < 10 ? '0' : '') + secs;
}

function showPreloader() {
    if (dom.preloader) {
        dom.preloader.style.display = 'flex';
        dom.preloader.classList.remove('hidden');
    }
}

function hidePreloader() {
    if (dom.preloader) {
        dom.preloader.classList.add('hidden');
        setTimeout(function() {
            dom.preloader.style.display = 'none';
        }, 500);
    }
}

function showElement(el) {
    if (el) el.style.display = '';
}

function hideElement(el) {
    if (el) el.style.display = 'none';
}

function isHausaTranslation() {
    var trans = TRANSLATIONS.find(function(t) { return t.id === state.currentTranslationKey; });
    return trans && trans.isHausa;
}

function getTranslationName() {
    var trans = TRANSLATIONS.find(function(t) { return t.id === state.currentTranslationKey; });
    return trans ? trans.language : 'Unknown';
}

// ============================================
// THEME MANAGEMENT
// ============================================
function initTheme() {
    var savedTheme = localStorage.getItem('quran-theme');
    if (savedTheme) {
        state.theme = savedTheme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        state.theme = 'dark';
    }
    applyTheme();
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    if (dom.themeToggle) {
        var icon = dom.themeToggle.querySelector('i');
        if (icon) {
            icon.className = state.theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        }
    }
}

function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('quran-theme', state.theme);
    applyTheme();
}

// ============================================
// BOOKMARK MANAGEMENT
// ============================================
function loadBookmarks() {
    try {
        var saved = localStorage.getItem('quran-bookmarks');
        state.bookmarks = saved ? JSON.parse(saved) : [];
        if (!Array.isArray(state.bookmarks)) state.bookmarks = [];
    } catch (e) {
        state.bookmarks = [];
    }
    updateBookmarkUI();
}

function saveBookmarks() {
    localStorage.setItem('quran-bookmarks', JSON.stringify(state.bookmarks));
    updateBookmarkUI();
}

function isBookmarked(surahNumber) {
    return state.bookmarks.indexOf(surahNumber) > -1;
}

function toggleBookmark(surahNumber) {
    var index = state.bookmarks.indexOf(surahNumber);
    if (index > -1) {
        state.bookmarks.splice(index, 1);
        showToast('An cire surah daga bookmarks', 'info');
    } else {
        state.bookmarks.push(surahNumber);
        showToast('An ajiye surah!', 'success');
    }
    saveBookmarks();
    updateDetailBookmarkButton(surahNumber);
}

function updateBookmarkUI() {
    if (!dom.bookmarksCount) return;
    
    var count = state.bookmarks.length;
    if (count > 0) {
        dom.bookmarksCount.style.display = 'flex';
        dom.bookmarksCount.textContent = count;
    } else {
        dom.bookmarksCount.style.display = 'none';
    }
}

function updateDetailBookmarkButton(surahNumber) {
    if (!dom.bookmarkSurahBtn) return;
    
    var icon = dom.bookmarkSurahBtn.querySelector('i');
    var text = dom.bookmarkSurahBtn.querySelector('span');
    
    if (isBookmarked(surahNumber)) {
        if (icon) icon.className = 'fa-solid fa-bookmark';
        if (text) text.textContent = 'An Ajiye';
        dom.bookmarkSurahBtn.classList.add('bookmarked');
    } else {
        if (icon) icon.className = 'fa-regular fa-bookmark';
        if (text) text.textContent = 'Ajiye';
        dom.bookmarkSurahBtn.classList.remove('bookmarked');
    }
}

function renderBookmarksList() {
    if (!dom.bookmarksList) return;
    
    dom.bookmarksList.innerHTML = '';
    
    if (state.bookmarks.length === 0) {
        dom.bookmarksList.innerHTML = '<div class="empty-state" style="padding: 2rem; text-align: center;"><i class="fa-solid fa-bookmark" style="font-size: 2rem;"></i><p style="margin-top: 1rem;">Babu surori da aka ajiye</p></div>';
        return;
    }
    
    state.bookmarks.forEach(function(surahNumber) {
        var surah = state.surahs.find(function(s) { return s.number === surahNumber; });
        if (!surah) return;
        
        var hausaName = hausaSurahNames[surahNumber] || '';
        
        var item = document.createElement('div');
        item.className = 'select-item';
        item.innerHTML = '<div class="select-item-avatar">' + surah.number + '</div>' +
            '<div class="select-item-info">' +
            '<h4>' + surah.englishName + '</h4>' +
            '<p>' + (hausaName || surah.englishNameTranslation) + ' - ' + surah.numberOfAyahs + ' Ayahs</p>' +
            '</div>';
        
        item.addEventListener('click', function() {
            closeModal('bookmarksModal');
            loadSurahDetail(surahNumber);
        });
        
        dom.bookmarksList.appendChild(item);
    });
}

// ============================================
// MODAL MANAGEMENT
// ============================================
function openModal(modalId) {
    var modal = $(modalId);
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeModal(modalId) {
    var modal = $(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// ============================================
// API CALLS
// ============================================
var API_BASE = 'https://api.alquran.cloud/v1';

async function fetchSurahList() {
    try {
        var response = await fetch(API_BASE + '/surah');
        if (!response.ok) throw new Error('Network error');
        var data = await response.json();
        if (data.code === 200 && data.data) {
            state.surahs = data.data;
            return data.data;
        }
        throw new Error('Invalid data');
    } catch (error) {
        console.error('Fetch surahs error:', error);
        throw error;
    }
}

async function fetchSurahDetail(surahNumber, reciterId, translationId) {
    try {
        var url1 = API_BASE + '/surah/' + surahNumber + '/' + reciterId;
        var url2 = API_BASE + '/surah/' + surahNumber + '/' + translationId;
        
        var responses = await Promise.all([
            fetch(url1),
            fetch(url2)
        ]);
        
        if (!responses[0].ok || !responses[1].ok) {
            throw new Error('Network error');
        }
        
        var data1 = await responses[0].json();
        var data2 = await responses[1].json();
        
        if (data1.code === 200 && data2.code === 200) {
            return {
                arabic: data1.data,
                translation: data2.data
            };
        }
        throw new Error('Invalid data');
    } catch (error) {
        console.error('Fetch surah detail error:', error);
        throw error;
    }
}

// ============================================
// RENDER SURAH LIST
// ============================================
function renderSurahGrid(surahArray) {
    if (!dom.surahGrid || !dom.surahList) return;
    
    dom.surahGrid.innerHTML = '';
    dom.surahList.innerHTML = '';
    
    if (!surahArray || surahArray.length === 0) {
        hideElement(dom.surahGrid);
        hideElement(dom.surahList);
        showElement(dom.emptySearch);
        return;
    }
    
    hideElement(dom.emptySearch);
    
    if (state.currentView === 'grid') {
        showElement(dom.surahGrid);
        hideElement(dom.surahList);
        renderGridView(surahArray);
    } else {
        hideElement(dom.surahGrid);
        showElement(dom.surahList);
        renderListView(surahArray);
    }
}

function renderGridView(surahArray) {
    surahArray.forEach(function(surah) {
        var hausaName = hausaSurahNames[surah.number] || '';
        
        var card = document.createElement('div');
        card.className = 'surah-card';
        
        card.innerHTML = '<div class="surah-info-left">' +
            '<div class="surah-number">' + surah.number + '</div>' +
            '<div class="surah-details">' +
            '<h3>' + surah.englishName + '</h3>' +
            '<p>' + (hausaName || surah.englishNameTranslation) + '</p>' +
            '<p style="font-size: 0.75rem; color: var(--text-tertiary);">' + surah.numberOfAyahs + ' Ayahs</p>' +
            '</div>' +
            '</div>' +
            '<div class="surah-name-arabic">' + surah.name + '</div>';
        
        card.addEventListener('click', function() {
            loadSurahDetail(surah.number);
        });
        
        dom.surahGrid.appendChild(card);
    });
}

function renderListView(surahArray) {
    surahArray.forEach(function(surah) {
        var hausaName = hausaSurahNames[surah.number] || surah.englishNameTranslation;
        
        var item = document.createElement('div');
        item.className = 'surah-list-item';
        
        item.innerHTML = '<span class="surah-list-number">' + surah.number + '</span>' +
            '<span class="surah-list-name">' + surah.englishName + ' <small style="color: var(--text-tertiary);">(' + hausaName + ')</small></span>' +
            '<span class="surah-list-arabic">' + surah.name + '</span>' +
            '<span class="surah-list-ayahs">' + surah.numberOfAyahs + ' Ayahs</span>';
        
        item.addEventListener('click', function() {
            loadSurahDetail(surah.number);
        });
        
        dom.surahList.appendChild(item);
    });
}

// ============================================
// SEARCH
// ============================================
function handleSearch(query) {
    query = query.toLowerCase().trim();
    
    if (query.length > 0) {
        showElement(dom.searchClear);
    } else {
        hideElement(dom.searchClear);
    }
    
    if (!query) {
        renderSurahGrid(state.surahs);
        return;
    }
    
    var filtered = state.surahs.filter(function(surah) {
        var hausaName = hausaSurahNames[surah.number] || '';
        return surah.englishName.toLowerCase().indexOf(query) > -1 ||
               surah.number.toString() === query ||
               surah.englishNameTranslation.toLowerCase().indexOf(query) > -1 ||
               surah.name.indexOf(query) > -1 ||
               hausaName.toLowerCase().indexOf(query) > -1;
    });
    
    renderSurahGrid(filtered);
}

function clearSearch() {
    if (!dom.searchInput) return;
    dom.searchInput.value = '';
    hideElement(dom.searchClear);
    renderSurahGrid(state.surahs);
    dom.searchInput.focus();
}

// ============================================
// LOAD SURAH DETAIL
// ============================================
async function loadSurahDetail(surahNumber) {
    showPreloader();
    stopAudio();
    
    try {
        var data = await fetchSurahDetail(surahNumber, state.currentReciter, state.currentTranslationKey);
        state.currentSurah = data.arabic;
        state.currentTranslation = data.translation;
        
        renderSurahDetail();
        
        // Save last read
        localStorage.setItem('quran-lastread', JSON.stringify({
            surahNumber: surahNumber,
            timestamp: Date.now()
        }));
        
    } catch (error) {
        console.error('Load surah error:', error);
        showToast('An samu matsala. Da fatan za a duba intanet.', 'error');
    } finally {
        hidePreloader();
    }
}

function renderSurahDetail() {
    if (!state.currentSurah || !state.currentTranslation) return;
    
    var surah = state.currentSurah;
    var trans = state.currentTranslation;
    var hausaName = hausaSurahNames[surah.number] || '';
    var isHausa = isHausaTranslation();
    
    // Update header
    if (dom.detailSurahAr) dom.detailSurahAr.textContent = surah.name;
    if (dom.detailSurahEn) dom.detailSurahEn.textContent = surah.englishName;
    
    // Hausa name
    if (dom.detailSurahHa) {
        if (hausaName) {
            dom.detailSurahHa.textContent = hausaName;
            showElement(dom.detailSurahHa);
        } else {
            hideElement(dom.detailSurahHa);
        }
    }
    
    if (dom.detailSurahType) dom.detailSurahType.textContent = surah.revelationType === 'Meccan' ? 'MAKKIYAH' : 'MADANIYYAH';
    if (dom.detailSurahInfo) dom.detailSurahInfo.textContent = surah.numberOfAyahs + ' Ayahs';
    
    // Translation badge
    if (dom.translationBadge) {
        dom.translationBadge.textContent = getTranslationName();
        if (isHausa) {
            dom.translationBadge.classList.add('translation-badge');
        } else {
            dom.translationBadge.classList.remove('translation-badge');
        }
    }
    
    // Bismillah
    if (dom.bismillahText) {
        if (surah.number === 9) {
            hideElement(dom.bismillahText);
            if (dom.bismillahHausa) hideElement(dom.bismillahHausa);
        } else {
            showElement(dom.bismillahText);
            if (dom.bismillahHausa && isHausa) {
                showElement(dom.bismillahHausa);
            } else if (dom.bismillahHausa) {
                hideElement(dom.bismillahHausa);
            }
        }
    }
    
    // Navigation
    if (dom.currentSurahPosition) {
        dom.currentSurahPosition.textContent = surah.number + ' / 114';
    }
    
    if (dom.prevSurahBtn) {
        dom.prevSurahBtn.style.visibility = surah.number > 1 ? 'visible' : 'hidden';
    }
    if (dom.nextSurahBtn) {
        dom.nextSurahBtn.style.visibility = surah.number < 114 ? 'visible' : 'hidden';
    }
    
    // Bookmark button
    updateDetailBookmarkButton(surah.number);
    
    // Update translation indicator
    if (dom.translationIndicator) {
        dom.translationIndicator.textContent = isHausa ? 'HA' : getTranslationName().substring(0, 2).toUpperCase();
    }
    
    // Render ayahs
    if (dom.ayahList) {
        dom.ayahList.innerHTML = '';
        
        surah.ayahs.forEach(function(ayah, index) {
            var transAyah = trans.ayahs[index];
            if (!transAyah) return;
            
            var arabicText = ayah.text;
            
            // Remove Bismillah from first ayah except Al-Fatiha
            if (surah.number !== 1 && index === 0) {
                var bismillah = 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ';
                if (arabicText.indexOf(bismillah) === 0) {
                    arabicText = arabicText.replace(bismillah, '').trim();
                }
            }
            
            var ayahNumber = surah.number + ':' + ayah.numberInSurah;
            
            var card = document.createElement('div');
            card.className = 'ayah-card';
            
            var translationHTML = '';
            if (isHausa) {
                // For Hausa, show as primary with special styling
                translationHTML = '<div class="ayah-translation-label">Fassarar Hausa</div>' +
                    '<div class="ayah-text-hausa">' + transAyah.text + '</div>';
            } else {
                translationHTML = '<div class="ayah-translation-label">' + getTranslationName() + ' Translation</div>' +
                    '<div class="ayah-text-translation">' + transAyah.text + '</div>';
            }
            
            card.innerHTML = '<div class="ayah-top">' +
                '<span class="ayah-badge">' + ayahNumber + '</span>' +
                '<div class="ayah-actions">' +
                '<button class="ayah-action-btn play-btn" title="Saurari Ayah"><i class="fa-solid fa-play"></i></button>' +
                '<button class="ayah-action-btn listen-hausa-btn" title="Karanta Fassarar Hausa"><i class="fa-solid fa-volume-high"></i></button>' +
                '<button class="ayah-action-btn copy-btn" title="Kwafa Ayah"><i class="fa-solid fa-copy"></i></button>' +
                '</div>' +
                '</div>' +
                '<div class="ayah-text-arabic">' + arabicText + '</div>' +
                translationHTML;
            
            // Play button event
            var playBtn = card.querySelector('.play-btn');
            if (playBtn) {
                playBtn.addEventListener('click', function() {
                    playAyah(ayah.audio, surah.englishName, ayahNumber, index);
                });
            }
            
            // Listen Hausa button event
            var listenHausaBtn = card.querySelector('.listen-hausa-btn');
            if (listenHausaBtn) {
                listenHausaBtn.addEventListener('click', function() {
                    readHausaText(transAyah.text, ayahNumber, index);
                });
            }
            
            // Copy button event
            var copyBtn = card.querySelector('.copy-btn');
            if (copyBtn) {
                copyBtn.addEventListener('click', function() {
                    var text = arabicText + '\n\n' + transAyah.text + '\n\n- ' + ayahNumber;
                    if (navigator.clipboard) {
                        navigator.clipboard.writeText(text).then(function() {
                            showToast('An kwafa ayah!', 'success');
                        }).catch(function() {
                            showToast('Ba a iya kwafa ba', 'error');
                        });
                    }
                });
            }
            
            dom.ayahList.appendChild(card);
        });
    }
    
    // Switch views
    hideElement(dom.surahListSection);
    showElement(dom.surahDetailSection);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// GO BACK TO LIST
// ============================================
function goBackToList() {
    hideElement(dom.surahDetailSection);
    showElement(dom.surahListSection);
    stopAudio();
    hideAudioPlayer();
    state.currentSurah = null;
    state.currentTranslation = null;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// AUDIO PLAYER
// ============================================
function playAyah(audioUrl, surahName, ayahNumber, index) {
    if (!dom.mainAudio || !dom.audioPlayerBar) return;
    
    stopAudio();
    
    state.currentAudioIndex = index;
    state.isPlaying = true;
    state.isReadingHausa = false;
    
    if (dom.playerSurahName) dom.playerSurahName.textContent = surahName;
    if (dom.playerAyahBadge) dom.playerAyahBadge.textContent = ayahNumber;
    if (dom.playerTranslationLang) {
        dom.playerTranslationLang.textContent = 'Larabci - ' + getTranslationName();
    }
    
    // Get reciter name
    var reciter = RECITERS.find(function(r) { return r.id === state.currentReciter; });
    if (dom.playerReciterName && reciter) {
        dom.playerReciterName.textContent = reciter.name;
    }
    
    dom.mainAudio.src = audioUrl;
    
    // Show player
    dom.audioPlayerBar.style.display = 'block';
    setTimeout(function() {
        dom.audioPlayerBar.style.transform = 'translateY(0)';
        dom.audioPlayerBar.style.opacity = '1';
        dom.audioPlayerBar.classList.remove('hidden');
    }, 50);
    
    // Update play button
    if (dom.playBtn) {
        dom.playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        dom.playBtn.classList.remove('speaking');
    }
    
    dom.mainAudio.play().then(function() {
        // Playing
    }).catch(function(error) {
        console.error('Audio play error:', error);
        showToast('Ba a iya kunna sauti ba', 'error');
    });
    
    dom.mainAudio.onended = function() {
        if (state.isRepeat) {
            // Repeat the same ayah
            dom.mainAudio.currentTime = 0;
            dom.mainAudio.play();
        } else {
            // Read translation after audio ends
            readTranslationAfterAudio(index);
        }
    };
    
    dom.mainAudio.ontimeupdate = function() {
        if (dom.playerProgressFill && dom.mainAudio.duration) {
            var progress = (dom.mainAudio.currentTime / dom.mainAudio.duration) * 100;
            dom.playerProgressFill.style.width = progress + '%';
        }
        if (dom.playerTime) {
            dom.playerTime.textContent = formatTime(dom.mainAudio.currentTime);
        }
    };
}

function readTranslationAfterAudio(index) {
    if (!state.currentTranslation || !state.currentTranslation.ayahs[index]) {
        onPlaybackEnd();
        return;
    }
    
    var ayah = state.currentTranslation.ayahs[index];
    var isHausa = isHausaTranslation();
    
    // Use appropriate voice based on language
    if ('speechSynthesis' in window) {
        state.isReadingHausa = true;
        
        if (dom.playBtn) {
            dom.playBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
            dom.playBtn.classList.add('speaking');
        }
        
        if (dom.playerTranslationLang) {
            dom.playerTranslationLang.textContent = isHausa ? 'Ana Karanta Hausa...' : 'Reading Translation...';
        }
        
        if (isHausa) {
            readHausaText(ayah.text, '', index);
        } else {
            readEnglishText(ayah.text);
        }
    } else {
        onPlaybackEnd();
    }
}

function readHausaText(text, ayahNumber, index) {
    if (!('speechSynthesis' in window)) {
        showToast('Na\'urar ka ba ta da karantawa', 'error');
        return;
    }
    
    // Stop any current speech
    window.speechSynthesis.cancel();
    
    state.isReadingHausa = true;
    
    if (dom.playBtn) {
        dom.playBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        dom.playBtn.classList.add('speaking');
    }
    
    var utterance = new SpeechSynthesisUtterance(text);
    
    // Try to find Hausa voice
    var voices = window.speechSynthesis.getVoices();
    var hausaVoice = voices.find(function(voice) {
        return voice.lang.indexOf('ha') > -1 || 
               voice.name.toLowerCase().indexOf('hausa') > -1 ||
               voice.lang.indexOf('ar') > -1; // Fallback to Arabic voice for better pronunciation
    });
    
    if (hausaVoice) {
        utterance.voice = hausaVoice;
    }
    
    // Configure for best Hausa pronunciation
    utterance.lang = 'ha-NG'; // Hausa (Nigeria)
    utterance.rate = 0.85; // Slower for better understanding
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    
    utterance.onstart = function() {
        console.log('Speaking Hausa:', text.substring(0, 50) + '...');
    };
    
    utterance.onend = function() {
        state.isReadingHausa = false;
        if (dom.playBtn) {
            dom.playBtn.classList.remove('speaking');
        }
        onPlaybackEnd();
        
        if (ayahNumber) {
            showToast('An gama karanta ayar ' + ayahNumber, 'info');
        }
    };
    
    utterance.onerror = function(event) {
        console.error('Hausa speech error:', event);
        state.isReadingHausa = false;
        if (dom.playBtn) {
            dom.playBtn.classList.remove('speaking');
        }
        
        // Try fallback with different language code
        if (utterance.lang === 'ha-NG') {
            utterance.lang = 'ar-SA'; // Try Arabic voice for better Arabic words pronunciation
            window.speechSynthesis.speak(utterance);
        } else {
            onPlaybackEnd();
            showToast('Ba a iya karanta Hausa ba. Ana gwada madadi.', 'info');
        }
    };
    
    window.speechSynthesis.speak(utterance);
}

function readEnglishText(text) {
    if (!('speechSynthesis' in window)) return;
    
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    
    utterance.onend = function() {
        state.isReadingHausa = false;
        if (dom.playBtn) {
            dom.playBtn.classList.remove('speaking');
        }
        onPlaybackEnd();
    };
    
    utterance.onerror = function() {
        state.isReadingHausa = false;
        if (dom.playBtn) {
            dom.playBtn.classList.remove('speaking');
        }
        onPlaybackEnd();
    };
    
    window.speechSynthesis.speak(utterance);
}

function onPlaybackEnd() {
    state.isPlaying = false;
    state.isReadingHausa = false;
    
    if (dom.playBtn) {
        dom.playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        dom.playBtn.classList.remove('speaking');
    }
    if (dom.playerProgressFill) dom.playerProgressFill.style.width = '0%';
    if (dom.playerTime) dom.playerTime.textContent = '0:00';
    if (dom.playerTranslationLang) {
        dom.playerTranslationLang.textContent = getTranslationName();
    }
}

function togglePlay() {
    if (!dom.mainAudio || !dom.mainAudio.src) return;
    
    if (state.isReadingHausa) {
        // Toggle Hausa speech
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.pause();
            if (dom.playBtn) {
                dom.playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
                dom.playBtn.classList.remove('speaking');
            }
        } else if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
            if (dom.playBtn) {
                dom.playBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
                dom.playBtn.classList.add('speaking');
            }
        }
        return;
    }
    
    if (dom.mainAudio.paused) {
        dom.mainAudio.play();
        if (dom.playBtn) dom.playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        state.isPlaying = true;
    } else {
        dom.mainAudio.pause();
        if (dom.playBtn) dom.playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        state.isPlaying = false;
    }
}

function playNextAyah() {
    if (!state.currentSurah || state.currentAudioIndex === -1) return;
    
    stopAudio();
    
    var nextIndex = state.currentAudioIndex + 1;
    if (nextIndex < state.currentSurah.ayahs.length) {
        var ayah = state.currentSurah.ayahs[nextIndex];
        var ayahNumber = state.currentSurah.number + ':' + ayah.numberInSurah;
        playAyah(ayah.audio, state.currentSurah.englishName, ayahNumber, nextIndex);
    }
}

function playPrevAyah() {
    if (!state.currentSurah || state.currentAudioIndex <= 0) return;
    
    stopAudio();
    
    var prevIndex = state.currentAudioIndex - 1;
    var ayah = state.currentSurah.ayahs[prevIndex];
    var ayahNumber = state.currentSurah.number + ':' + ayah.numberInSurah;
    playAyah(ayah.audio, state.currentSurah.englishName, ayahNumber, prevIndex);
}

function stopAudio() {
    if (dom.mainAudio) {
        dom.mainAudio.pause();
        dom.mainAudio.currentTime = 0;
        dom.mainAudio.src = '';
    }
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
    state.isPlaying = false;
    state.isReadingHausa = false;
    state.currentAudioIndex = -1;
    onPlaybackEnd();
}

function hideAudioPlayer() {
    if (dom.audioPlayerBar) {
        dom.audioPlayerBar.style.transform = 'translateY(100%)';
        dom.audioPlayerBar.style.opacity = '0';
        dom.audioPlayerBar.classList.add('hidden');
        setTimeout(function() {
            dom.audioPlayerBar.style.display = 'none';
        }, 400);
    }
}

function toggleRepeat() {
    state.isRepeat = !state.isRepeat;
    if (dom.repeatAyahBtn) {
        if (state.isRepeat) {
            dom.repeatAyahBtn.classList.add('active');
            showToast('An kunna maimaita ayah', 'info');
        } else {
            dom.repeatAyahBtn.classList.remove('active');
        }
    }
}

// ============================================
// LISTEN FULL SURAH IN HAUSA
// ============================================
function listenFullSurahInHausa() {
    if (!state.currentTranslation || !state.currentTranslation.ayahs) {
        showToast('Ba a samu fassarar Hausa ba', 'error');
        return;
    }
    
    if (!('speechSynthesis' in window)) {
        showToast('Na\'urar ka ba ta da karantawa', 'error');
        return;
    }
    
    stopAudio();
    hideAudioPlayer();
    
    showToast('Ana karanta duka surah cikin Hausa...', 'info');
    
    var ayahs = state.currentTranslation.ayahs;
    var currentIndex = 0;
    
    function speakNext() {
        if (currentIndex >= ayahs.length) {
            showToast('An gama karanta surah duka!', 'success');
            return;
        }
        
        var ayah = ayahs[currentIndex];
        var utterance = new SpeechSynthesisUtterance(ayah.text);
        
        // Configure for Hausa
        var voices = window.speechSynthesis.getVoices();
        var hausaVoice = voices.find(function(voice) {
            return voice.lang.indexOf('ha') > -1 || 
                   voice.lang.indexOf('ar') > -1;
        });
        
        if (hausaVoice) utterance.voice = hausaVoice;
        utterance.lang = 'ha-NG';
        utterance.rate = 0.85;
        utterance.pitch = 1.0;
        
        utterance.onend = function() {
            currentIndex++;
            speakNext();
        };
        
        utterance.onerror = function() {
            currentIndex++;
            speakNext();
        };
        
        window.speechSynthesis.speak(utterance);
    }
    
    speakNext();
}

// ============================================
// RECITER & TRANSLATION MODALS
// ============================================
function renderReciterList() {
    if (!dom.reciterList) return;
    
    dom.reciterList.innerHTML = '';
    
    RECITERS.forEach(function(reciter) {
        var item = document.createElement('div');
        item.className = 'select-item';
        if (reciter.id === state.currentReciter) {
            item.classList.add('active');
        }
        
        item.innerHTML = '<div class="select-item-avatar"><i class="fa-solid fa-microphone"></i></div>' +
            '<div class="select-item-info">' +
            '<h4>' + reciter.name + '</h4>' +
            '<p>' + reciter.style + '</p>' +
            '</div>';
        
        item.addEventListener('click', async function() {
            state.currentReciter = reciter.id;
            localStorage.setItem('quran-reciter', reciter.id);
            closeModal('reciterModal');
            
            if (state.currentSurah) {
                await loadSurahDetail(state.currentSurah.number);
            }
            
            showToast('An zabi ' + reciter.name, 'success');
        });
        
        dom.reciterList.appendChild(item);
    });
}

function renderTranslationList() {
    if (!dom.translationList) return;
    
    dom.translationList.innerHTML = '';
    
    TRANSLATIONS.forEach(function(translation) {
        var item = document.createElement('div');
        item.className = 'select-item';
        if (translation.id === state.currentTranslationKey) {
            item.classList.add('active');
        }
        if (translation.isHausa) {
            item.classList.add('hausa-item');
        }
        
        var badgeHTML = '';
        if (translation.isHausa) {
            badgeHTML = '<span class="select-item-badge">Hausa</span>';
        }
        if (translation.hasAudio && translation.isHausa) {
            badgeHTML += ' <span style="font-size: 0.65rem; color: #10b981;">🔊 Karantawa</span>';
        }
        
        item.innerHTML = '<div class="select-item-avatar">' +
            (translation.isHausa ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-solid fa-language"></i>') +
            '</div>' +
            '<div class="select-item-info">' +
            '<h4>' + translation.name + '</h4>' +
            '<p>' + translation.language + (translation.hasAudio ? ' - Tare da Karantawa' : '') + '</p>' +
            '</div>' +
            badgeHTML;
        
        item.addEventListener('click', async function() {
            state.currentTranslationKey = translation.id;
            localStorage.setItem('quran-translation', translation.id);
            closeModal('translationModal');
            
            // Update translation indicator
            if (dom.translationIndicator) {
                dom.translationIndicator.textContent = translation.isHausa ? 'HA' : translation.language.substring(0, 2).toUpperCase();
            }
            
            if (state.currentSurah) {
                await loadSurahDetail(state.currentSurah.number);
            }
            
            var message = 'An zabi fassarar ' + translation.name;
            if (translation.isHausa) {
                message = 'An zabi Fassarar Hausa! ' + translation.name;
            }
            showToast(message, 'success');
        });
        
        dom.translationList.appendChild(item);
    });
}

// ============================================
// INITIALIZATION
// ============================================
async function initApp() {
    try {
        dom = getElements();
        
        initTheme();
        loadBookmarks();
        
        var savedReciter = localStorage.getItem('quran-reciter');
        if (savedReciter) state.currentReciter = savedReciter;
        
        var savedTranslation = localStorage.getItem('quran-translation');
        if (savedTranslation) state.currentTranslationKey = savedTranslation;
        
        // Update translation indicator
        if (dom.translationIndicator) {
            var isHausa = isHausaTranslation();
            dom.translationIndicator.textContent = isHausa ? 'HA' : getTranslationName().substring(0, 2).toUpperCase();
        }
        
        // Preload voices for Hausa
        if ('speechSynthesis' in window) {
            window.speechSynthesis.getVoices();
            window.speechSynthesis.onvoiceschanged = function() {
                window.speechSynthesis.getVoices();
            };
        }
        
        if (dom.surahSkeleton) showElement(dom.surahSkeleton);
        if (dom.surahGrid) hideElement(dom.surahGrid);
        
        await fetchSurahList();
        
        if (dom.surahSkeleton) hideElement(dom.surahSkeleton);
        if (dom.surahGrid) showElement(dom.surahGrid);
        
        renderSurahGrid(state.surahs);
        
        setTimeout(function() {
            if (dom.splashScreen) {
                dom.splashScreen.classList.add('hidden');
                setTimeout(function() {
                    if (dom.splashScreen) dom.splashScreen.style.display = 'none';
                }, 800);
            }
        }, 1500);
        
    } catch (error) {
        console.error('Init error:', error);
        
        if (dom.surahSkeleton) hideElement(dom.surahSkeleton);
        if (dom.surahGrid) {
            showElement(dom.surahGrid);
            dom.surahGrid.innerHTML = '<div class="empty-state" style="grid-column: 1/-1; padding: 3rem;">' +
                '<i class="fa-solid fa-triangle-exclamation" style="font-size: 3rem; color: #ef4444;"></i>' +
                '<h3 style="margin-top: 1rem;">An samu matsala</h3>' +
                '<p>Da fatan za a duba intanet din ka sake gwadawa</p>' +
                '<button onclick="location.reload()" style="margin-top: 1.5rem; padding: 0.75rem 2rem; background: var(--accent); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem;">Sake Gwadawa</button>' +
                '</div>';
        }
        
        setTimeout(function() {
            if (dom.splashScreen) {
                dom.splashScreen.classList.add('hidden');
                setTimeout(function() {
                    if (dom.splashScreen) dom.splashScreen.style.display = 'none';
                }, 800);
            }
        }, 2000);
    }
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    dom = getElements();
    
    if (dom.themeToggle) {
        dom.themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (dom.searchInput) {
        dom.searchInput.addEventListener('input', function() {
            handleSearch(this.value);
        });
    }
    
    if (dom.searchClear) {
        dom.searchClear.addEventListener('click', clearSearch);
    }
    
    if (dom.viewBtns) {
        dom.viewBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                dom.viewBtns.forEach(function(b) { b.classList.remove('active'); });
                this.classList.add('active');
                state.currentView = this.getAttribute('data-view');
                var query = dom.searchInput ? dom.searchInput.value.trim() : '';
                if (query) {
                    handleSearch(query);
                } else {
                    renderSurahGrid(state.surahs);
                }
            });
        });
    }
    
    if (dom.backBtn) {
        dom.backBtn.addEventListener('click', goBackToList);
    }
    
    if (dom.prevSurahBtn) {
        dom.prevSurahBtn.addEventListener('click', function() {
            if (state.currentSurah && state.currentSurah.number > 1) {
                loadSurahDetail(state.currentSurah.number - 1);
            }
        });
    }
    
    if (dom.nextSurahBtn) {
        dom.nextSurahBtn.addEventListener('click', function() {
            if (state.currentSurah && state.currentSurah.number < 114) {
                loadSurahDetail(state.currentSurah.number + 1);
            }
        });
    }
    
    if (dom.bookmarkSurahBtn) {
        dom.bookmarkSurahBtn.addEventListener('click', function() {
            if (state.currentSurah) {
                toggleBookmark(state.currentSurah.number);
            }
        });
    }
    
    // Listen full surah in Hausa
    if (dom.listenSurahBtn) {
        dom.listenSurahBtn.addEventListener('click', function() {
            if (isHausaTranslation()) {
                listenFullSurahInHausa();
            } else {
                showToast('Da fatan za a zabi fassarar Hausa tukuna', 'info');
            }
        });
    }
    
    if (dom.playBtn) {
        dom.playBtn.addEventListener('click', togglePlay);
    }
    
    if (dom.prevAyahBtn) {
        dom.prevAyahBtn.addEventListener('click', playPrevAyah);
    }
    
    if (dom.nextAyahBtn) {
        dom.nextAyahBtn.addEventListener('click', playNextAyah);
    }
    
    if (dom.repeatAyahBtn) {
        dom.repeatAyahBtn.addEventListener('click', toggleRepeat);
    }
    
    if (dom.playerCloseBtn) {
        dom.playerCloseBtn.addEventListener('click', function() {
            stopAudio();
            hideAudioPlayer();
        });
    }
    
    if (dom.playerProgressBar) {
        dom.playerProgressBar.addEventListener('click', function(e) {
            if (!dom.mainAudio || !dom.mainAudio.duration) return;
            var rect = this.getBoundingClientRect();
            var percent = (e.clientX - rect.left) / rect.width;
            dom.mainAudio.currentTime = percent * dom.mainAudio.duration;
        });
    }
    
    if (dom.reciterBtn) {
        dom.reciterBtn.addEventListener('click', function() {
            renderReciterList();
            openModal('reciterModal');
        });
    }
    
    if (dom.translationBtn) {
        dom.translationBtn.addEventListener('click', function() {
            renderTranslationList();
            openModal('translationModal');
        });
    }
    
    if (dom.bookmarksBtn) {
        dom.bookmarksBtn.addEventListener('click', function() {
            renderBookmarksList();
            openModal('bookmarksModal');
        });
    }
    
    if (dom.closeReciterModal) {
        dom.closeReciterModal.addEventListener('click', function() {
            closeModal('reciterModal');
        });
    }
    
    if (dom.closeTranslationModal) {
        dom.closeTranslationModal.addEventListener('click', function() {
            closeModal('translationModal');
        });
    }
    
    if (dom.closeBookmarksModal) {
        dom.closeBookmarksModal.addEventListener('click', function() {
            closeModal('bookmarksModal');
        });
    }
    
    ['reciterModal', 'translationModal', 'bookmarksModal'].forEach(function(modalId) {
        var modal = $(modalId);
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeModal(modalId);
                }
            });
        }
    });
    
    if (dom.scrollIndicator) {
        dom.scrollIndicator.addEventListener('click', function() {
            var target = dom.surahListSection;
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    window.addEventListener('scroll', function() {
        if (dom.navbar) {
            if (window.scrollY > 50) {
                dom.navbar.classList.add('scrolled');
            } else {
                dom.navbar.classList.remove('scrolled');
            }
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (dom.surahDetailSection && dom.surahDetailSection.style.display !== 'none') {
                goBackToList();
            }
            ['reciterModal', 'translationModal', 'bookmarksModal'].forEach(function(id) {
                closeModal(id);
            });
            stopAudio();
        }
        
        if (e.key === ' ' && document.activeElement === document.body) {
            e.preventDefault();
            togglePlay();
        }
        
        if (e.key === 'ArrowRight' && state.currentSurah && state.currentSurah.number < 114 &&
            dom.surahDetailSection && dom.surahDetailSection.style.display !== 'none') {
            e.preventDefault();
            loadSurahDetail(state.currentSurah.number + 1);
        }
        
        if (e.key === 'ArrowLeft' && state.currentSurah && state.currentSurah.number > 1 &&
            dom.surahDetailSection && dom.surahDetailSection.style.display !== 'none') {
            e.preventDefault();
            loadSurahDetail(state.currentSurah.number - 1);
        }
        
        // 'R' for repeat toggle
        if (e.key === 'r' && !e.ctrlKey && document.activeElement === document.body) {
            toggleRepeat();
        }
    });
}

// ============================================
// START APP
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    initApp();
});

window.goBackToList = goBackToList;