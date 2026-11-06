/**
 * KAIROX Intelligence Commerciale x Youmi Cake
 * Application Logic & Interactive State Manager
 */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    selectedLevel: 'all',
    selectedCategory: 'all',
    selectedUrgency: 'all',
    searchQuery: '',
    presenterMode: false,
    activeDossier: null
  };

  // DOM Elements Cache
  const cardsGrid = document.getElementById('cardsGrid');
  const emptyState = document.getElementById('emptyState');
  const displayedCount = document.getElementById('displayedCount');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const categoryFilter = document.getElementById('categoryFilter');
  const urgencyFilter = document.getElementById('urgencyFilter');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');
  const levelTabs = document.querySelectorAll('.level-tab');

  // Presenter Elements
  const togglePresenterBtn = document.getElementById('togglePresenterBtn');
  const presenterBanner = document.getElementById('presenterBanner');
  const closePresenterBanner = document.getElementById('closePresenterBanner');
  const presenterToggleText = document.getElementById('presenterToggleText');

  // Drawer Elements
  const actionDrawer = document.getElementById('actionDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerContent = document.getElementById('drawerContent');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const closeDrawerFooterBtn = document.getElementById('closeDrawerFooterBtn');
  const copyScriptBtn = document.getElementById('copyScriptBtn');
  const copyScriptFooterBtn = document.getElementById('copyScriptFooterBtn');
  const copyBtnLabel = document.getElementById('copyBtnLabel');
  const copyToast = document.getElementById('copyToast');

  // Counter Elements
  const countAll = document.getElementById('countAll');
  const countConfirmed = document.getElementById('countConfirmed');
  const countQualif = document.getElementById('countQualif');
  const countVerified = document.getElementById('countVerified');

  /**
   * Initialize Counters
   */
  function initCounters() {
    if (countAll) countAll.textContent = OPPORTUNITIES_DATA.length;
    if (countConfirmed) countConfirmed.textContent = OPPORTUNITIES_DATA.filter(d => d.niveau === 'OPPORTUNITÉ CONFIRMÉE').length;
    if (countQualif) countQualif.textContent = OPPORTUNITIES_DATA.filter(d => d.niveau === 'SIGNAL À QUALIFIER').length;
    if (countVerified) countVerified.textContent = OPPORTUNITIES_DATA.filter(d => d.niveau === 'PROSPECT QUALIFIÉ / POTENTIEL').length;
  }

  /**
   * Filter Data based on current state
   */
  function getFilteredData() {
    return OPPORTUNITIES_DATA.filter(item => {
      // Level filter
      if (state.selectedLevel !== 'all' && item.niveau !== state.selectedLevel) {
        return false;
      }

      // Category filter
      if (state.selectedCategory !== 'all' && !item.categorie.includes(state.selectedCategory)) {
        return false;
      }

      // Urgency filter
      if (state.selectedUrgency !== 'all') {
        if (!item.urgence.toUpperCase().includes(state.selectedUrgency)) {
          return false;
        }
      }

      // Search query filter
      if (state.searchQuery.trim() !== '') {
        const query = state.searchQuery.toLowerCase();
        const matchName = item.nom.toLowerCase().includes(query);
        const matchQuartier = item.quartier.toLowerCase().includes(query);
        const matchCat = item.categorie.toLowerCase().includes(query);
        const matchPertinence = item.pertinence.toLowerCase().includes(query);
        const matchContact = item.contact.nom.toLowerCase().includes(query) || (item.contact.email && item.contact.email.toLowerCase().includes(query));

        if (!matchName && !matchQuartier && !matchCat && !matchPertinence && !matchContact) {
          return false;
        }
      }

      return true;
    });
  }

  /**
   * Render Opportunity Cards
   */
  function renderCards() {
    const data = getFilteredData();
    displayedCount.textContent = data.length;

    if (data.length === 0) {
      cardsGrid.innerHTML = '';
      emptyState.classList.remove('hidden');
      return;
    }

    emptyState.classList.add('hidden');

    cardsGrid.innerHTML = data.map(item => {
      // Badges classes & style
      let levelBadgeHtml = '';
      if (item.isSimulated) {
        levelBadgeHtml = `
          <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide badge-simulated">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping inline-block"></span>
            ${item.simulationBadge}
          </div>
        `;
      } else if (item.niveau === 'SIGNAL À QUALIFIER') {
        levelBadgeHtml = `
          <div class="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide badge-medium">
            SIGNAL À QUALIFIER
          </div>
        `;
      } else {
        levelBadgeHtml = `
          <div class="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide badge-verified-entity flex items-center gap-1">
            <i data-lucide="check-check" class="w-3 h-3 text-emerald-400"></i>
            DOSSIER RÉEL VÉRIFIÉ
          </div>
        `;
      }

      // Urgency badge
      let urgencyBadgeClass = 'badge-medium';
      if (item.urgenceClass === 'urgent' || item.urgenceClass === 'critical') {
        urgencyBadgeClass = 'badge-urgent';
      } else if (item.urgenceClass === 'seasonal') {
        urgencyBadgeClass = 'badge-seasonal';
      }

      // Contact badge
      const contactBadgeHtml = `
        <span class="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded ${item.isSimulated ? 'bg-gray-800 text-gray-400 border border-gray-700' : 'badge-contact-confirm'}">
          <i data-lucide="shield-alert" class="w-3 h-3"></i>
          ${item.contact.contactBadge}
        </span>
      `;

      return `
        <article class="opportunity-card glass-panel rounded-2xl p-5 flex flex-col justify-between ${item.isSimulated ? 'card-simulated' : ''} border border-gray-800 hover:border-gray-700 transition">
          
          <div class="space-y-3.5">
            <!-- Header Badges -->
            <div class="flex flex-wrap items-center justify-between gap-2">
              ${levelBadgeHtml}
              <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${urgencyBadgeClass}">
                ${item.urgence}
              </span>
            </div>

            <!-- Title & Subcategory -->
            <div>
              <div class="flex items-center gap-1.5 text-[11px] text-gray-400 mb-1">
                <span class="font-medium text-blue-400">${item.categorie}</span>
                <span>•</span>
                <span class="text-gray-400 flex items-center gap-1">
                  <i data-lucide="map-pin" class="w-3 h-3"></i>
                  ${item.quartier}
                </span>
              </div>
              <h3 class="text-base font-bold text-white tracking-tight leading-snug group-hover:text-blue-400">
                ${item.nom}
              </h3>
            </div>

            <!-- Why relevant for Youmi Cake -->
            <div class="p-3 rounded-xl bg-gray-900/90 border border-gray-800/90 space-y-1">
              <div class="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                <i data-lucide="sparkle" class="w-3 h-3 text-amber-400"></i>
                Pertinence Youmi Cake
              </div>
              <p class="text-xs text-gray-300 leading-relaxed font-normal">
                ${item.pertinence}
              </p>
            </div>

            <!-- Signal / Source & Date -->
            <div class="text-[11px] text-gray-400 space-y-1 pt-1">
              <div class="flex items-start gap-1.5">
                <i data-lucide="radio" class="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5"></i>
                <span class="text-gray-300 font-medium">${item.source}</span>
              </div>
              <div class="flex items-center gap-1.5 text-gray-500">
                <i data-lucide="calendar" class="w-3.5 h-3.5 shrink-0"></i>
                <span>Échéance : <strong class="text-gray-300 font-medium">${item.dateEvenement}</strong></span>
              </div>
            </div>

            <!-- Contact Overview -->
            <div class="pt-2 border-t border-gray-800/80 flex flex-wrap items-center justify-between gap-2">
              <div class="text-[11px] text-gray-300">
                <span class="text-gray-500">Contact :</span> 
                <strong>${item.contact.nom}</strong>
              </div>
              ${contactBadgeHtml}
            </div>

          </div>

          <!-- Bottom Action Button -->
          <div class="pt-4 mt-4 border-t border-gray-800/80">
            <button 
              onclick="openDossierDrawer('${item.id}')"
              class="w-full py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${item.isSimulated ? 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40' : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20'}"
            >
              <span>Consulter la Fiche Action</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </div>

        </article>
      `;
    }).join('');

    // Re-initialize Lucide Icons after DOM mutation
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  /**
   * Open Slide-Out Action Card Drawer
   */
  window.openDossierDrawer = function(id) {
    const dossier = OPPORTUNITIES_DATA.find(d => d.id === id);
    if (!dossier) return;

    state.activeDossier = dossier;

    // Badges in Header
    let badgesHtml = '';
    if (dossier.isSimulated) {
      badgesHtml += `
        <span class="px-2.5 py-1 rounded text-[10px] font-bold tracking-wide badge-simulated">
          ${dossier.simulationBadge}
        </span>
      `;
    } else {
      badgesHtml += `
        <span class="px-2.5 py-1 rounded text-[10px] font-bold tracking-wide badge-verified-entity">
          DOSSIER RÉEL VÉRIFIÉ
        </span>
      `;
    }

    let urgencyBadgeClass = 'badge-medium';
    if (dossier.urgenceClass === 'urgent' || dossier.urgenceClass === 'critical') {
      urgencyBadgeClass = 'badge-urgent';
    } else if (dossier.urgenceClass === 'seasonal') {
      urgencyBadgeClass = 'badge-seasonal';
    }

    badgesHtml += `
      <span class="px-2.5 py-1 rounded text-[10px] font-bold uppercase ${urgencyBadgeClass}">
        ${dossier.urgence}
      </span>
    `;

    document.getElementById('drawerBadges').innerHTML = badgesHtml;
    document.getElementById('drawerTitle').textContent = dossier.nom;
    document.getElementById('drawerLocation').textContent = dossier.quartier;
    document.getElementById('drawerCategory').textContent = `${dossier.categorie} — ${dossier.sousCategorie}`;
    document.getElementById('drawerPertinence').textContent = dossier.pertinence;
    document.getElementById('drawerSaisonnalite').textContent = dossier.saisonnaliteNote;

    // Contact Card
    document.getElementById('drawerContactName').textContent = dossier.contact.nom;
    document.getElementById('drawerContactRole').textContent = dossier.contact.poste;
    document.getElementById('drawerContactPhone').textContent = dossier.contact.telephone || 'Non renseigné';
    document.getElementById('drawerContactEmail').textContent = dossier.contact.email || 'Non renseigné';
    document.getElementById('drawerContactChannel').textContent = dossier.contact.canalRecommande;
    
    // Contact Reliability Badge
    document.getElementById('drawerContactReliabilityBadge').innerHTML = `
      <span class="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded ${dossier.isSimulated ? 'bg-gray-800 text-gray-400' : 'badge-contact-confirm'}">
        <i data-lucide="shield-check" class="w-3 h-3"></i>
        ${dossier.contact.contactBadge}
      </span>
    `;

    // Pitch Section
    document.getElementById('drawerPitchText').textContent = `"${dossier.pitch.quoiDire}"`;
    document.getElementById('drawerArgumentMassue').textContent = dossier.pitch.argumentMassue;

    // Script to Copy
    document.getElementById('drawerScriptArea').value = dossier.scriptCopier;
    document.getElementById('drawerDossierId').textContent = dossier.id;

    // Open Drawer
    actionDrawer.classList.remove('invisible');
    setTimeout(() => {
      drawerBackdrop.classList.remove('opacity-0');
      drawerBackdrop.classList.add('opacity-100');
      drawerContent.classList.remove('translate-x-full');
      drawerContent.classList.add('translate-x-0');
    }, 10);

    if (window.lucide) {
      window.lucide.createIcons();
    }
  };

  /**
   * Close Drawer
   */
  function closeDrawer() {
    drawerBackdrop.classList.remove('opacity-100');
    drawerBackdrop.classList.add('opacity-0');
    drawerContent.classList.remove('translate-x-0');
    drawerContent.classList.add('translate-x-full');

    setTimeout(() => {
      actionDrawer.classList.add('invisible');
      state.activeDossier = null;
    }, 300);
  }

  closeDrawerBtn.addEventListener('click', closeDrawer);
  closeDrawerFooterBtn.addEventListener('click', closeDrawer);
  drawerBackdrop.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !actionDrawer.classList.contains('invisible')) {
      closeDrawer();
    }
  });

  /**
   * Copy Script to Clipboard
   */
  function copyScriptToClipboard() {
    if (!state.activeDossier) return;
    const textToCopy = state.activeDossier.scriptCopier;

    navigator.clipboard.writeText(textToCopy).then(() => {
      // Toast notification
      copyToast.classList.add('show');
      copyBtnLabel.textContent = 'Message copié !';

      setTimeout(() => {
        copyToast.classList.remove('show');
        copyBtnLabel.textContent = 'Copier le message';
      }, 3000);
    }).catch(err => {
      console.error('Erreur de copie dans le presse-papier:', err);
    });
  }

  copyScriptBtn.addEventListener('click', copyScriptToClipboard);
  copyScriptFooterBtn.addEventListener('click', copyScriptToClipboard);

  /**
   * Presenter Banner Toggle
   */
  togglePresenterBtn.addEventListener('click', () => {
    state.presenterMode = !state.presenterMode;
    if (state.presenterMode) {
      presenterBanner.classList.remove('hidden');
      presenterToggleText.textContent = 'Masquer Guide Présentateur';
      togglePresenterBtn.classList.add('bg-blue-600', 'text-white');
    } else {
      presenterBanner.classList.add('hidden');
      presenterToggleText.textContent = 'Activer Guide Présentateur (19h)';
      togglePresenterBtn.classList.remove('bg-blue-600', 'text-white');
    }
  });

  closePresenterBanner.addEventListener('click', () => {
    state.presenterMode = false;
    presenterBanner.classList.add('hidden');
    presenterToggleText.textContent = 'Activer Guide Présentateur (19h)';
    togglePresenterBtn.classList.remove('bg-blue-600', 'text-white');
  });

  /**
   * Filter Event Handlers
   */
  levelTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      levelTabs.forEach(t => {
        t.classList.remove('active', 'bg-blue-600', 'text-white');
        t.classList.add('text-gray-400');
      });
      tab.classList.add('active', 'bg-blue-600', 'text-white');
      tab.classList.remove('text-gray-400');

      state.selectedLevel = tab.getAttribute('data-level');
      renderCards();
    });
  });

  // Search Input
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    if (state.searchQuery.length > 0) {
      clearSearchBtn.classList.remove('hidden');
    } else {
      clearSearchBtn.classList.add('hidden');
    }
    renderCards();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    clearSearchBtn.classList.add('hidden');
    renderCards();
  });

  // Category Filter
  categoryFilter.addEventListener('change', (e) => {
    state.selectedCategory = e.target.value;
    renderCards();
  });

  // Urgency Filter
  urgencyFilter.addEventListener('change', (e) => {
    state.selectedUrgency = e.target.value;
    renderCards();
  });

  // Reset Filters
  window.resetAllFilters = function() {
    state.selectedLevel = 'all';
    state.selectedCategory = 'all';
    state.selectedUrgency = 'all';
    state.searchQuery = '';

    searchInput.value = '';
    clearSearchBtn.classList.add('hidden');
    categoryFilter.value = 'all';
    urgencyFilter.value = 'all';

    levelTabs.forEach(t => {
      if (t.getAttribute('data-level') === 'all') {
        t.classList.add('active', 'bg-blue-600', 'text-white');
        t.classList.remove('text-gray-400');
      } else {
        t.classList.remove('active', 'bg-blue-600', 'text-white');
        t.classList.add('text-gray-400');
      }
    });

    renderCards();
  };

  resetFiltersBtn.addEventListener('click', resetAllFilters);

  // Quick jump helper for seasonality banner buttons
  window.scrollToFilter = function(type) {
    if (type === 'confirmes') {
      const confirmedTab = document.querySelector('[data-level="OPPORTUNITÉ CONFIRMÉE"]');
      if (confirmedTab) confirmedTab.click();
    } else if (type === 'reels') {
      const verifiedTab = document.querySelector('[data-level="PROSPECT QUALIFIÉ / POTENTIEL"]');
      if (verifiedTab) verifiedTab.click();
    }

    const grid = document.getElementById('cardsGrid');
    if (grid) {
      grid.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Initial Run
  initCounters();
  renderCards();
});

