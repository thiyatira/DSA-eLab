// ==========================================================================
// eLab Explorer - Interactive Web Application Logic
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const data = window.ELAB_DATA || [];
  
  // State
  let currentFilter = 'all';
  let searchQuery = '';
  let activeChallenge = null;
  let currentView = 'split'; // 'split', 'question', 'solution', 'all'
  let allCardsCollapsed = false;

  // DOM Elements
  const challengesList = document.getElementById('challengesList');
  const topicFilter = document.getElementById('topicFilter');
  const searchInput = document.getElementById('searchInput');
  const clearSearch = document.getElementById('clearSearch');
  const themeToggle = document.getElementById('themeToggle');
  const currentTopic = document.getElementById('currentTopic');
  const currentTitle = document.getElementById('currentTitle');
  const questionBody = document.getElementById('questionBody');
  const solutionBody = document.getElementById('solutionBody');
  const solutionStatusBadge = document.getElementById('solutionStatusBadge');
  const contentPanels = document.getElementById('contentPanels');
  const allInOneContainer = document.getElementById('allInOneContainer');
  const allChallengesFeed = document.getElementById('allChallengesFeed');
  const singleControls = document.getElementById('singleControls');
  const allControls = document.getElementById('allControls');
  const toggleAllCardsBtn = document.getElementById('toggleAllCardsBtn');
  const toggleAllText = document.getElementById('toggleAllText');
  const printBtn = document.getElementById('printBtn');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const copyCodeBtn = document.getElementById('copyCodeBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const toast = document.getElementById('toast');
  const statsBadge = document.getElementById('statsBadge');
  const allChallengesCount = document.getElementById('allChallengesCount');
  const allSolvedCount = document.getElementById('allSolvedCount');
  const topicJumpBar = document.getElementById('topicJumpBar');

  // Cache for rendered cards to maximize performance
  const renderedCardsCache = new Map();

  // Configure Marked.js & KaTeX
  if (typeof marked !== 'undefined') {
    if (typeof markedKatex !== 'undefined') {
      marked.use(markedKatex({
        throwOnError: false,
        nonStandard: true
      }));
    }
    marked.setOptions({
      gfm: true,
      breaks: true,
      highlight: function(code, lang) {
        if (typeof Prism !== 'undefined' && Prism.languages[lang]) {
          return Prism.highlight(code, Prism.languages[lang], lang);
        }
        return code;
      }
    });
  }

  // Render LaTeX math formulas and symbols with KaTeX
  function renderMath(element) {
    if (!element) return;
    if (typeof renderMathInElement !== 'undefined') {
      try {
        renderMathInElement(element, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true }
          ],
          throwOnError: false,
          ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
        });
      } catch (err) {
        console.warn('KaTeX rendering error:', err);
      }
    }
  }

  // Update Stats
  function updateStats() {
    const solved = data.filter(d => d.has_solution).length;
    statsBadge.innerHTML = `<span class="solved-count">${solved}</span>/40 Solved`;
    if (allChallengesCount) allChallengesCount.textContent = data.length;
    if (allSolvedCount) allSolvedCount.textContent = solved;
  }

  // Filter Challenges
  function getFilteredChallenges() {
    return data.filter(item => {
      const matchesTopic = currentFilter === 'all' || item.topic === currentFilter;
      const query = searchQuery.toLowerCase();
      const matchesSearch = !query || 
        item.challenge.toLowerCase().includes(query) ||
        item.topic.toLowerCase().includes(query) ||
        item.question_raw.toLowerCase().includes(query) ||
        (item.solution_raw && item.solution_raw.toLowerCase().includes(query));
      return matchesTopic && matchesSearch;
    });
  }

  // Render Sidebar Challenge Items
  function renderSidebar() {
    const filtered = getFilteredChallenges();
    challengesList.innerHTML = '';

    if (filtered.length === 0) {
      challengesList.innerHTML = `<div style="padding: 1rem; color: var(--text-muted); text-align: center;">No challenges found.</div>`;
      return;
    }

    filtered.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.className = `challenge-item ${activeChallenge && activeChallenge.id === item.id ? 'active' : ''}`;
      itemEl.dataset.id = item.id;

      const topicClass = `tag-${item.topic.toLowerCase().replace(/\s+/g, '')}`;

      itemEl.innerHTML = `
        <div class="challenge-info">
          <span class="challenge-title">${item.challenge}</span>
          <div class="challenge-meta">
            <span class="challenge-tag ${topicClass}">${item.topic}</span>
          </div>
        </div>
        <div class="status-dot ${item.has_solution ? 'solved' : 'pending'}" title="${item.has_solution ? 'Solution Available' : 'Pending'}"></div>
      `;

      itemEl.addEventListener('click', () => {
        if (currentView === 'all') {
          activeChallenge = item;
          window.location.hash = item.id;
          document.querySelectorAll('.challenge-item').forEach(el => {
            el.classList.toggle('active', el.dataset.id === item.id);
          });
          const targetCard = document.getElementById(`card-${item.id}`);
          if (targetCard) {
            targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
            targetCard.classList.add('card-highlight');
            setTimeout(() => targetCard.classList.remove('card-highlight'), 1600);
          }
          if (window.innerWidth <= 868 && sidebar) {
            sidebar.classList.remove('open');
            if (sidebarBackdrop) sidebarBackdrop.classList.remove('active');
          }
        } else {
          selectChallenge(item);
        }
      });

      challengesList.appendChild(itemEl);
    });
  }

  // Select a Challenge (Single View)
  function selectChallenge(item) {
    activeChallenge = item;
    window.location.hash = item.id;

    // Update Sidebar Active state
    document.querySelectorAll('.challenge-item').forEach(el => {
      el.classList.toggle('active', el.dataset.id === item.id);
    });

    if (currentView !== 'all') {
      // Update Toolbar
      currentTopic.textContent = item.topic;
      currentTopic.className = `badge topic-badge tag-${item.topic.toLowerCase().replace(/\s+/g, '')}`;
      currentTitle.textContent = item.challenge;

      // Render Question Markdown
      if (typeof marked !== 'undefined') {
        questionBody.innerHTML = marked.parse(item.question_raw);
      } else {
        questionBody.innerText = item.question_raw;
      }
      renderMath(questionBody);

      // Render Solution Markdown
      if (item.has_solution && item.solution_raw) {
        solutionStatusBadge.textContent = 'Solved';
        solutionStatusBadge.className = 'badge';
        solutionStatusBadge.style.backgroundColor = 'var(--success-bg)';
        solutionStatusBadge.style.color = 'var(--success-color)';
        copyCodeBtn.style.display = 'inline-flex';

        if (typeof marked !== 'undefined') {
          solutionBody.innerHTML = marked.parse(item.solution_raw);
        } else {
          solutionBody.innerText = item.solution_raw;
        }
        renderMath(solutionBody);
      } else {
        solutionStatusBadge.textContent = 'Pending';
        solutionStatusBadge.className = 'badge';
        solutionStatusBadge.style.backgroundColor = 'var(--warning-bg)';
        solutionStatusBadge.style.color = 'var(--warning-color)';
        copyCodeBtn.style.display = 'none';

        solutionBody.innerHTML = `
          <div style="padding: 2.5rem 1rem; text-align: center; color: var(--text-muted);">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">⏳</div>
            <h3>Solution in Progress</h3>
            <p style="margin-top: 0.5rem;">The solution for this challenge is currently pending.</p>
          </div>
        `;
      }

      // Re-run Prism highlighting
      if (typeof Prism !== 'undefined') {
        Prism.highlightAllUnder(questionBody);
        Prism.highlightAllUnder(solutionBody);
      }

      // Scroll to top of panels
      questionBody.scrollTop = 0;
      solutionBody.scrollTop = 0;
    }

    // Auto-close sidebar on mobile after selection
    const sidebar = document.getElementById('sidebar');
    const sidebarBackdrop = document.getElementById('sidebarBackdrop');
    if (window.innerWidth <= 868 && sidebar) {
      sidebar.classList.remove('open');
      if (sidebarBackdrop) sidebarBackdrop.classList.remove('active');
    }
  }

  // Create or retrieve cached card element for One Page View
  function getChallengeCardElement(item) {
    if (renderedCardsCache.has(item.id)) {
      return renderedCardsCache.get(item.id);
    }

    const card = document.createElement('div');
    card.className = 'all-challenge-card';
    card.id = `card-${item.id}`;

    const topicClass = `tag-${item.topic.toLowerCase().replace(/\s+/g, '')}`;

    const qHtml = typeof marked !== 'undefined' ? marked.parse(item.question_raw) : item.question_raw;
    const solHtml = item.has_solution && item.solution_raw 
      ? (typeof marked !== 'undefined' ? marked.parse(item.solution_raw) : item.solution_raw)
      : '<p style="color: var(--text-muted);">Solution pending.</p>';

    card.innerHTML = `
      <div class="card-header">
        <div class="card-header-left">
          <span class="card-num-badge">#${item.number}</span>
          <span class="card-title">${item.challenge}</span>
          <span class="badge topic-badge ${topicClass}">${item.topic}</span>
          <span class="badge" style="background-color: ${item.has_solution ? 'var(--success-bg)' : 'var(--warning-bg)'}; color: ${item.has_solution ? 'var(--success-color)' : 'var(--warning-color)'}; font-size: 0.72rem;">
            ${item.has_solution ? '✓ Solved' : '⏳ Pending'}
          </span>
        </div>
        <div class="card-header-right">
          ${item.c_code ? `
            <button class="card-btn card-btn-copy" data-id="${item.id}" title="Copy C Code">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>Copy Code</span>
            </button>
          ` : ''}
          <button class="card-btn card-btn-focus" data-id="${item.id}" title="Open in Split View">
            ⚡ Focus View
          </button>
          <button class="card-btn card-btn-collapse" data-id="${item.id}" title="Collapse or Expand">
            ▲
          </button>
        </div>
      </div>
      <div class="card-body">
        <div class="card-pane card-problem-pane">
          <div class="card-pane-title">
            <h4>📋 Problem Description</h4>
          </div>
          <div class="markdown-content">
            ${qHtml}
          </div>
        </div>
        <div class="card-pane card-solution-pane">
          <div class="card-pane-title">
            <h4>💡 Solution & Approach</h4>
          </div>
          <div class="markdown-content">
            ${solHtml}
          </div>
        </div>
      </div>
    `;

    // KaTeX math rendering inside this card
    renderMath(card);

    // Prism syntax highlighting inside this card
    if (typeof Prism !== 'undefined') {
      Prism.highlightAllUnder(card);
    }

    // Attach copy code listener
    const cardCopyBtn = card.querySelector('.card-btn-copy');
    if (cardCopyBtn && item.c_code) {
      cardCopyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(item.c_code).then(() => {
          cardCopyBtn.classList.add('copied');
          cardCopyBtn.querySelector('span').textContent = 'Copied!';
          showToast(`Copied C Code for ${item.challenge}!`);
          setTimeout(() => {
            cardCopyBtn.classList.remove('copied');
            cardCopyBtn.querySelector('span').textContent = 'Copy Code';
          }, 2000);
        }).catch(() => {
          showToast('Failed to copy code.');
        });
      });
    }

    // Attach Focus View listener
    const cardFocusBtn = card.querySelector('.card-btn-focus');
    if (cardFocusBtn) {
      cardFocusBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        selectChallenge(item);
        setView('split');
      });
    }

    // Attach Collapse/Expand listener
    const cardCollapseBtn = card.querySelector('.card-btn-collapse');
    const cardBody = card.querySelector('.card-body');
    if (cardCollapseBtn && cardBody) {
      cardCollapseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isCollapsed = cardBody.classList.toggle('collapsed');
        cardCollapseBtn.textContent = isCollapsed ? '▼' : '▲';
      });
    }

    renderedCardsCache.set(item.id, card);
    return card;
  }

  // Render One Page View (All Challenges Feed)
  function renderAllInOneView() {
    if (!allChallengesFeed) return;
    const filtered = getFilteredChallenges();
    allChallengesFeed.innerHTML = '';

    if (filtered.length === 0) {
      allChallengesFeed.innerHTML = `
        <div class="all-empty-state">
          <div style="font-size: 3rem;">🔍</div>
          <h3>No challenges match your search</h3>
          <p>Try clearing your search query or selecting "All" topics.</p>
        </div>
      `;
      return;
    }

    // Topic icons map
    const topicIcons = {
      'Searching': '🔍',
      'Sorting': '🔀',
      'Arrays': '📊',
      'Linked List': '🔗'
    };

    // Group challenges by topic
    const topicGroups = {};
    const topicOrder = ['Searching', 'Sorting', 'Arrays', 'Linked List'];

    topicOrder.forEach(topic => {
      topicGroups[topic] = filtered.filter(item => item.topic === topic);
    });

    topicOrder.forEach(topic => {
      const items = topicGroups[topic];
      if (items && items.length > 0) {
        const secId = `topic-sec-${topic.toLowerCase().replace(/\s+/g, '')}`;
        const divider = document.createElement('div');
        divider.className = 'topic-section-divider';
        divider.id = secId;
        divider.innerHTML = `
          <h3><span>${topicIcons[topic] || '📁'}</span> ${topic}</h3>
          <span class="topic-count-pill">${items.length} ${items.length === 1 ? 'Challenge' : 'Challenges'}</span>
          <div class="topic-divider-line"></div>
        `;
        allChallengesFeed.appendChild(divider);

        items.forEach(item => {
          const cardEl = getChallengeCardElement(item);
          allChallengesFeed.appendChild(cardEl);
        });
      }
    });
  }

  // View Switcher
  function setView(view) {
    currentView = view;
    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === view);
    });

    if (view === 'all') {
      contentPanels.style.display = 'none';
      allInOneContainer.style.display = 'block';
      if (singleControls) singleControls.style.display = 'none';
      if (allControls) allControls.style.display = 'flex';

      const filtered = getFilteredChallenges();
      currentTopic.textContent = currentFilter === 'all' ? 'All Topics' : currentFilter;
      currentTopic.className = `badge topic-badge tag-${currentFilter.toLowerCase().replace(/\s+/g, '')}`;
      currentTitle.textContent = `All Challenges (${filtered.length} visible)`;

      renderAllInOneView();

      // Scroll to active challenge if requested
      if (activeChallenge) {
        setTimeout(() => {
          const targetCard = document.getElementById(`card-${activeChallenge.id}`);
          if (targetCard) {
            targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
            targetCard.classList.add('card-highlight');
            setTimeout(() => targetCard.classList.remove('card-highlight'), 1600);
          }
        }, 120);
      }
    } else {
      allInOneContainer.style.display = 'none';
      contentPanels.style.display = 'flex';
      if (singleControls) singleControls.style.display = 'flex';
      if (allControls) allControls.style.display = 'none';

      contentPanels.className = `content-panels view-${view}`;
      if (activeChallenge) {
        currentTopic.textContent = activeChallenge.topic;
        currentTopic.className = `badge topic-badge tag-${activeChallenge.topic.toLowerCase().replace(/\s+/g, '')}`;
        currentTitle.textContent = activeChallenge.challenge;
      }
    }
  }

  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setView(btn.dataset.view);
    });
  });

  // Topic Filters
  topicFilter.addEventListener('click', (e) => {
    if (e.target.classList.contains('pill')) {
      document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.dataset.topic;
      renderSidebar();
      if (currentView === 'all') {
        const filtered = getFilteredChallenges();
        currentTopic.textContent = currentFilter === 'all' ? 'All Topics' : currentFilter;
        currentTopic.className = `badge topic-badge tag-${currentFilter.toLowerCase().replace(/\s+/g, '')}`;
        currentTitle.textContent = `All Challenges (${filtered.length} visible)`;
        renderAllInOneView();
      }
    }
  });

  // Search
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    clearSearch.style.display = searchQuery ? 'block' : 'none';
    renderSidebar();
    if (currentView === 'all') {
      const filtered = getFilteredChallenges();
      currentTitle.textContent = `All Challenges (${filtered.length} visible)`;
      renderAllInOneView();
    }
  });

  clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearch.style.display = 'none';
    renderSidebar();
    if (currentView === 'all') {
      const filtered = getFilteredChallenges();
      currentTitle.textContent = `All Challenges (${filtered.length} visible)`;
      renderAllInOneView();
    }
  });

  // Toggle Collapse All / Expand All in One Page View
  if (toggleAllCardsBtn) {
    toggleAllCardsBtn.addEventListener('click', () => {
      allCardsCollapsed = !allCardsCollapsed;
      document.querySelectorAll('.card-body').forEach(body => {
        body.classList.toggle('collapsed', allCardsCollapsed);
      });
      document.querySelectorAll('.card-btn-collapse').forEach(btn => {
        btn.textContent = allCardsCollapsed ? '▼' : '▲';
      });
      if (toggleAllText) {
        toggleAllText.textContent = allCardsCollapsed ? 'Expand All' : 'Collapse All';
      }
    });
  }

  // Print Action
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      if (currentView !== 'all') {
        setView('all');
      }
      // Expand all cards before printing
      document.querySelectorAll('.card-body').forEach(body => {
        body.classList.remove('collapsed');
      });
      document.querySelectorAll('.card-btn-collapse').forEach(btn => {
        btn.textContent = '▲';
      });
      if (toggleAllText) toggleAllText.textContent = 'Collapse All';
      allCardsCollapsed = false;

      setTimeout(() => {
        window.print();
      }, 250);
    });
  }

  // Topic Jump Pills Navigation
  if (topicJumpBar) {
    topicJumpBar.addEventListener('click', (e) => {
      const pill = e.target.closest('.jump-pill');
      if (pill && pill.dataset.jump) {
        const targetSection = document.getElementById(pill.dataset.jump);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }

  // Back to Top button logic
  if (allInOneContainer && backToTopBtn) {
    allInOneContainer.addEventListener('scroll', () => {
      if (allInOneContainer.scrollTop > 350) {
        backToTopBtn.style.display = 'flex';
      } else {
        backToTopBtn.style.display = 'none';
      }
    });

    backToTopBtn.addEventListener('click', () => {
      allInOneContainer.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Copy C Code Action (Single View)
  copyCodeBtn.addEventListener('click', () => {
    if (!activeChallenge || !activeChallenge.c_code) {
      showToast('No C code found to copy!');
      return;
    }
    navigator.clipboard.writeText(activeChallenge.c_code).then(() => {
      showToast('C code copied to clipboard!');
    }).catch(() => {
      showToast('Failed to copy code.');
    });
  });

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2200);
  }

  // Navigation (Prev / Next in Single View)
  function navigate(direction) {
    if (currentView === 'all') return;
    const list = getFilteredChallenges();
    if (!list.length || !activeChallenge) return;
    const currentIndex = list.findIndex(item => item.id === activeChallenge.id);
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = list.length - 1;
    if (nextIndex >= list.length) nextIndex = 0;
    selectChallenge(list[nextIndex]);
  }

  prevBtn.addEventListener('click', () => navigate(-1));
  nextBtn.addEventListener('click', () => navigate(1));

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (document.activeElement === searchInput) return;
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });

  // Theme Toggle
  const savedTheme = localStorage.getItem('elab-theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    themeToggle.querySelector('.theme-icon').textContent = '☀️';
  }

  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme', !isLight);
    themeToggle.querySelector('.theme-icon').textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('elab-theme', isLight ? 'light' : 'dark');
  });

  // Mobile Drawer Toggle
  const menuToggle = document.getElementById('menuToggle');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');
  const sidebar = document.getElementById('sidebar');

  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      if (sidebarBackdrop) sidebarBackdrop.classList.toggle('active', sidebar.classList.contains('open'));
    });
  }

  if (sidebarBackdrop && sidebar) {
    sidebarBackdrop.addEventListener('click', () => {
      sidebar.classList.remove('open');
      sidebarBackdrop.classList.remove('active');
    });
  }

  // Initial load
  updateStats();
  renderSidebar();

  // Hash Navigation or default to first challenge
  const hash = window.location.hash.replace('#', '');
  if (hash === 'all') {
    setView('all');
  } else {
    const initialItem = data.find(d => d.id === hash) || data[0];
    if (initialItem) {
      selectChallenge(initialItem);
    }
    setView('split');
  }

  // Ensure math formulas are rendered once CDN resources finish loading
  window.addEventListener('load', () => {
    if (activeChallenge && currentView !== 'all') {
      renderMath(questionBody);
      renderMath(solutionBody);
    }
  });
});
