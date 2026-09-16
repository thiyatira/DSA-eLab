// ==========================================================================
// eLab Explorer - Interactive Web Application Logic
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const data = window.ELAB_DATA || [];
  
  // State
  let currentFilter = 'all';
  let searchQuery = '';
  let activeChallenge = null;
  let currentView = 'split'; // 'split', 'question', 'solution'

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
  const copyCodeBtn = document.getElementById('copyCodeBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const toast = document.getElementById('toast');
  const statsBadge = document.getElementById('statsBadge');

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
        selectChallenge(item);
      });

      challengesList.appendChild(itemEl);
    });
  }

  // Select a Challenge
  function selectChallenge(item) {
    activeChallenge = item;
    window.location.hash = item.id;

    // Update Sidebar Active state
    document.querySelectorAll('.challenge-item').forEach(el => {
      el.classList.toggle('active', el.dataset.id === item.id);
    });

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

    // Auto-close sidebar on mobile after selection
    const sidebar = document.getElementById('sidebar');
    const sidebarBackdrop = document.getElementById('sidebarBackdrop');
    if (window.innerWidth <= 868 && sidebar) {
      sidebar.classList.remove('open');
      if (sidebarBackdrop) sidebarBackdrop.classList.remove('active');
    }
  }

  // View Switcher
  function setView(view) {
    currentView = view;
    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === view);
    });

    contentPanels.className = `content-panels view-${view}`;
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
    }
  });

  // Search
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    clearSearch.style.display = searchQuery ? 'block' : 'none';
    renderSidebar();
  });

  clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearch.style.display = 'none';
    renderSidebar();
  });

  // Copy C Code Action
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

  // Navigation (Prev / Next)
  function navigate(direction) {
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
  const initialItem = data.find(d => d.id === hash) || data[0];
  if (initialItem) {
    selectChallenge(initialItem);
  }

  // Ensure math formulas are rendered once CDN resources finish loading
  window.addEventListener('load', () => {
    if (activeChallenge) {
      renderMath(questionBody);
      renderMath(solutionBody);
    }
  });

  // Default view
  setView('split');
});
