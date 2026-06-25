(function () {
  const STORAGE_KEY = 'connectionouob-theme';
  const TAB_KEY = 'connectionouob-tab';

  const root = document.documentElement;
  const tabs = document.querySelectorAll('.nav-tab');
  const panels = document.querySelectorAll('.tab-panel');
  const themeToggle = document.getElementById('theme-toggle');
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const headerTitle = document.getElementById('panel-title');
  const headerDesc = document.getElementById('panel-desc');
  const headerEyebrow = document.getElementById('panel-eyebrow');

  const panelMeta = {
    personal: {
      eyebrow: 'Projects',
      title: '個人專案',
      desc: '分子視覺化、履歷生成、蛋白質代理等原創應用與工具。',
    },
    classics: {
      eyebrow: 'Classics',
      title: '經典圖譜',
      desc: '以互動圖譜呈現中國古典文獻：莊子、論語、道德經等。',
    },
    tools: {
      eyebrow: 'Research',
      title: '工具與研究',
      desc: 'NLP、伺服器掃描、翻譯服務與實驗性開源專案。',
    },
    competition: {
      eyebrow: 'Competition',
      title: '競賽作品',
      desc: '校園競賽與黑客松參賽作品。',
    },
    links: {
      eyebrow: 'Connect',
      title: '外部連結',
      desc: 'GitHub、組織、贊助與相關社群資源。',
    },
  };

  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', theme === 'light' ? '切換至暗色模式' : '切換至亮色模式');
    }
  }

  function activateTab(tabId) {
    tabs.forEach((tab) => {
      const active = tab.dataset.tab === tabId;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
    });

    panels.forEach((panel) => {
      const active = panel.dataset.panel === tabId;
      panel.classList.toggle('is-active', active);
      panel.hidden = !active;
    });

    const meta = panelMeta[tabId];
    if (meta && headerTitle) {
      headerEyebrow.textContent = meta.eyebrow;
      headerTitle.textContent = meta.title;
      headerDesc.textContent = meta.desc;
    }

    localStorage.setItem(TAB_KEY, tabId);
    closeSidebar();
  }

  function closeSidebar() {
    sidebar?.classList.remove('is-open');
    overlay?.classList.remove('is-visible');
    document.body.style.overflow = '';
  }

  function openSidebar() {
    sidebar?.classList.add('is-open');
    overlay?.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  }

  applyTheme(getPreferredTheme());

  const savedTab = localStorage.getItem(TAB_KEY);
  if (savedTab && panelMeta[savedTab]) {
    activateTab(savedTab);
  }

  themeToggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    applyTheme(next);
  });

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => activateTab(tab.dataset.tab));
  });

  menuToggle?.addEventListener('click', () => {
    if (sidebar?.classList.contains('is-open')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  overlay?.addEventListener('click', closeSidebar);

  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(e.matches ? 'light' : 'dark');
    }
  });
})();
