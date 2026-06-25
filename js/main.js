// ============================================
// RehaVerse Games - Main JavaScript
// ============================================

// --- Game Database ---
const GAMES = [
  {
    id: 'elemental-chain',
    title: 'Elemental Chain',
    category: 'puzzle',
    description: 'Place elemental tiles on a 6×6 grid to trigger powerful chain reactions! Combine Fire, Water, Earth, Air, and Lightning in strategic patterns to score big. A brain-teasing puzzle game by RehaVerse Studios.',
    tags: ['Puzzle', 'Strategy', 'Elements'],
    rating: 4.8,
    plays: '12K',
    color: '#7c3aed',
    emoji: '⚡',
    featured: true,
    isOwn: true,
    path: 'games/elemental-chain/index.html'
  },
  {
    id: '2048',
    title: '2048',
    category: 'puzzle',
    description: 'Slide numbered tiles on a 4×4 grid to combine them and reach the 2048 tile. A classic math puzzle that tests your strategic thinking.',
    tags: ['Puzzle', 'Numbers', 'Classic'],
    rating: 4.7,
    plays: '85K',
    color: '#f59e0b',
    emoji: '🔢',
    featured: false,
    isOwn: false,
    path: 'games/2048/index.html'
  },
  {
    id: 'flappy-bird',
    title: 'Flappy Bird',
    category: 'arcade',
    description: 'Tap to fly through pipes without crashing! Simple to learn, impossibly hard to master. How far can you go?',
    tags: ['Arcade', 'Casual', 'Endless'],
    rating: 4.5,
    plays: '120K',
    color: '#10b981',
    emoji: '🐦',
    featured: false,
    isOwn: false,
    path: 'games/flappy-bird/index.html'
  },
  {
    id: 'snake',
    title: 'Snake',
    category: 'arcade',
    description: 'Guide the snake to eat food and grow longer without hitting the walls or yourself. The original mobile classic, now on the web!',
    tags: ['Arcade', 'Classic', 'Retro'],
    rating: 4.6,
    plays: '95K',
    color: '#10b981',
    emoji: '🐍',
    featured: false,
    isOwn: false,
    path: 'games/snake/index.html'
  },
  {
    id: 'breakout',
    title: 'Breakout',
    category: 'arcade',
    description: 'Bounce the ball off the paddle to destroy all the bricks. A timeless arcade classic with colorful levels and power-ups.',
    tags: ['Arcade', 'Classic', 'Action'],
    rating: 4.4,
    plays: '67K',
    color: '#ef4444',
    emoji: '🧱',
    featured: false,
    isOwn: false,
    path: 'games/breakout/index.html'
  },
  {
    id: 'memory-match',
    title: 'Memory Match',
    category: 'puzzle',
    description: 'Flip cards and find matching pairs before time runs out. Train your memory with increasingly challenging levels.',
    tags: ['Puzzle', 'Memory', 'Cards'],
    rating: 4.3,
    plays: '43K',
    color: '#ec4899',
    emoji: '🃏',
    featured: false,
    isOwn: false,
    path: 'games/memory-match/index.html'
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    category: 'strategy',
    description: 'The classic game of Xs and Os. Play against an AI opponent or challenge a friend in this timeless strategy game.',
    tags: ['Strategy', 'Classic', '2-Player'],
    rating: 4.2,
    plays: '78K',
    color: '#3b82f6',
    emoji: '❌',
    featured: false,
    isOwn: false,
    path: 'games/tic-tac-toe/index.html'
  },
  {
    id: 'color-switch',
    title: 'Color Switch',
    category: 'arcade',
    description: 'Navigate a ball through color-coded obstacles. Pass through barriers that match your color, avoid the rest!',
    tags: ['Arcade', 'Reflex', 'Colorful'],
    rating: 4.5,
    plays: '56K',
    color: '#f59e0b',
    emoji: '🎨',
    featured: false,
    isOwn: false,
    path: 'games/color-switch/index.html'
  },
  {
    id: 'word-scramble',
    title: 'Word Scramble',
    category: 'puzzle',
    description: 'Unscramble letters to form words before the timer runs out. Test your vocabulary with hundreds of challenging words.',
    tags: ['Puzzle', 'Words', 'Educational'],
    rating: 4.4,
    plays: '38K',
    color: '#8b5cf6',
    emoji: '📝',
    featured: false,
    isOwn: false,
    path: 'games/word-scramble/index.html'
  },
  {
    id: 'space-invaders',
    title: 'Space Invaders',
    category: 'action',
    description: 'Defend Earth from waves of descending aliens! Shoot them down before they reach the bottom. A legendary retro shooter.',
    tags: ['Action', 'Shooter', 'Retro'],
    rating: 4.6,
    plays: '71K',
    color: '#06b6d4',
    emoji: '👾',
    featured: false,
    isOwn: false,
    path: 'games/space-invaders/index.html'
  },
  {
    id: 'tetris',
    title: 'Tetris',
    category: 'puzzle',
    description: 'Arrange falling blocks to complete rows. The speed increases as you level up. How long can you survive?',
    tags: ['Puzzle', 'Classic', 'Block'],
    rating: 4.8,
    plays: '102K',
    color: '#ef4444',
    emoji: '🟦',
    featured: false,
    isOwn: false,
    path: 'games/tetris/index.html'
  },
  {
    id: 'pong',
    title: 'Pong',
    category: 'sports',
    description: 'The granddaddy of all video games. Bounce the ball past your opponent\'s paddle to score. Simple yet competitive.',
    tags: ['Sports', 'Classic', '2-Player'],
    rating: 4.1,
    plays: '45K',
    color: '#22c55e',
    emoji: '🏓',
    featured: false,
    isOwn: false,
    path: 'games/pong/index.html'
  }
];

// --- Category Definitions ---
const CATEGORIES = [
  { id: 'all', name: 'All Games', emoji: '🎮' },
  { id: 'puzzle', name: 'Puzzle', emoji: '🧩' },
  { id: 'arcade', name: 'Arcade', emoji: '👾' },
  { id: 'action', name: 'Action', emoji: '💥' },
  { id: 'strategy', name: 'Strategy', emoji: '♟️' },
  { id: 'sports', name: 'Sports', emoji: '⚽' },
  { id: 'racing', name: 'Racing', emoji: '🏎️' },
  { id: 'adventure', name: 'Adventure', emoji: '🗺️' }
];

// --- State ---
let currentCategory = 'all';
let searchQuery = '';

// --- DOM Ready ---
document.addEventListener('DOMContentLoaded', () => {
  initPage();
});

function initPage() {
  const page = document.body.dataset.page;

  if (page === 'home') {
    renderCategories();
    renderGames();
    initSearch();
    initMobileMenu();
    updateStats();
  } else if (page === 'play') {
    loadGame();
    renderRelatedGames();
    initMobileMenu();
  } else if (page === 'premium' || page === 'about') {
    initMobileMenu();
  }
}

// --- Render Category Tabs ---
function renderCategories() {
  const container = document.getElementById('categoryTabs');
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => `
    <button class="category-tab ${cat.id === currentCategory ? 'active' : ''}" 
            data-category="${cat.id}" onclick="filterCategory('${cat.id}')">
      <span class="emoji">${cat.emoji}</span>${cat.name}
    </button>
  `).join('');
}

// --- Filter by Category ---
function filterCategory(categoryId) {
  currentCategory = categoryId;
  renderCategories();
  renderGames();
}

// --- Render Games Grid ---
function renderGames() {
  const container = document.getElementById('gamesGrid');
  if (!container) return;

  let filteredGames = GAMES;

  if (currentCategory !== 'all') {
    filteredGames = filteredGames.filter(g => g.category === currentCategory);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filteredGames = filteredGames.filter(g =>
      g.title.toLowerCase().includes(q) ||
      g.category.toLowerCase().includes(q) ||
      g.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  if (filteredGames.length === 0) {
    container.innerHTML = `
      <div class="no-results" style="grid-column: 1 / -1;">
        <h3>No games found</h3>
        <p>Try a different search or category</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredGames.map(game => `
    <a href="play.html?game=${game.id}" class="game-card ${game.featured ? 'featured' : ''}">
      ${game.featured ? '<div class="featured-badge">⭐ FEATURED</div>' : ''}
      <div class="game-thumb">
        <div class="game-thumb-placeholder" style="background: linear-gradient(135deg, ${game.color}, ${game.color}88);">
          ${game.emoji}
        </div>
      </div>
      <div class="game-info">
        <div class="game-title">${game.title}</div>
        <div class="game-meta">
          <span class="game-tag">${game.tags[0]}</span>
          <span class="game-rating">⭐ ${game.rating}</span>
        </div>
      </div>
    </a>
  `).join('');
}

// --- Search ---
function initSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;

  input.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderGames();
  });
}

// --- Mobile Menu ---
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const nav = document.getElementById('mobileNav');
  const closeBtn = document.getElementById('closeMenuBtn');

  if (!btn || !nav) return;

  btn.addEventListener('click', () => nav.classList.add('open'));
  if (closeBtn) closeBtn.addEventListener('click', () => nav.classList.remove('open'));

  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// --- Update Stats ---
function updateStats() {
  const totalGames = document.getElementById('totalGames');
  const totalPlays = document.getElementById('totalPlays');
  const totalCategories = document.getElementById('totalCategories');

  if (totalGames) totalGames.textContent = GAMES.length;
  if (totalPlays) totalPlays.textContent = '500K+';
  if (totalCategories) totalCategories.textContent = CATEGORIES.length - 1; // exclude "All"
}

// --- Game Player ---
function loadGame() {
  const params = new URLSearchParams(window.location.search);
  const gameId = params.get('game');
  const game = GAMES.find(g => g.id === gameId);

  if (!game) {
    document.getElementById('gamePlayerWrapper').innerHTML = `
      <div style="padding: 80px; text-align: center; color: var(--text-muted);">
        <h2>Game not found</h2>
        <p>Return to <a href="index.html" style="color: var(--accent-secondary);">homepage</a></p>
      </div>
    `;
    return;
  }

  // Update page title
  document.title = `${game.title} - RehaVerse Games`;

  // Update player UI
  const titleEl = document.getElementById('gamePlayerTitle');
  if (titleEl) titleEl.textContent = game.title;

  // Load game in iframe
  const iframe = document.getElementById('gameIframe');
  if (iframe) iframe.src = game.path;

  // Update game description
  const descTitle = document.getElementById('gameDescTitle');
  const descText = document.getElementById('gameDescText');
  const tagsContainer = document.getElementById('gameTags');

  if (descTitle) descTitle.textContent = `About ${game.title}`;
  if (descText) descText.textContent = game.description;
  if (tagsContainer) {
    tagsContainer.innerHTML = game.tags.map(t => `<span class="tag">${t}</span>`).join('');
  }
}

// --- Fullscreen ---
function toggleFullscreen() {
  const iframe = document.getElementById('gameIframe');
  if (!iframe) return;

  if (iframe.requestFullscreen) iframe.requestFullscreen();
  else if (iframe.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
  else if (iframe.mozRequestFullScreen) iframe.mozRequestFullScreen();
}

// --- Related Games ---
function renderRelatedGames() {
  const container = document.getElementById('relatedGames');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const gameId = params.get('game');
  const currentGame = GAMES.find(g => g.id === gameId);

  let related = GAMES.filter(g => g.id !== gameId);
  if (currentGame) {
    related = related.filter(g => g.category === currentGame.category);
  }
  if (related.length < 4) {
    related = GAMES.filter(g => g.id !== gameId).slice(0, 4);
  }

  container.innerHTML = related.slice(0, 4).map(game => `
    <a href="play.html?game=${game.id}" class="game-card">
      <div class="game-thumb">
        <div class="game-thumb-placeholder" style="background: linear-gradient(135deg, ${game.color}, ${game.color}88);">
          ${game.emoji}
        </div>
      </div>
      <div class="game-info">
        <div class="game-title">${game.title}</div>
        <div class="game-meta">
          <span class="game-tag">${game.tags[0]}</span>
          <span class="game-rating">⭐ ${game.rating}</span>
        </div>
      </div>
    </a>
  `).join('');
}
