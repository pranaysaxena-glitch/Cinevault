const movies = [
  {
    id: 1,
    title: 'Nightfall Protocol',
    description: 'A disgraced pilot races through a collapsing city to stop a rogue AI using stolen orbital tech.',
    poster: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80',
    category: 'Sci‑Fi',
    genre: 'Action',
    duration: '2h 08m',
    year: 2024,
    rating: 8.8,
    isPremium: true,
    trending: true,
    featured: true,
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 2,
    title: 'Iron Harbor',
    description: 'An ex-soldier and a salvager discover a secret bunker beneath the harbor and a world-changing map.',
    poster: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
    category: 'Action',
    genre: 'Thriller',
    duration: '1h 54m',
    year: 2023,
    rating: 8.4,
    isPremium: true,
    trending: true,
    videoUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
  },
  {
    id: 3,
    title: 'Silent Ridge',
    description: 'A local ranger must protect a remote valley when a hidden military project begins to wake up.',
    poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    category: 'Drama',
    genre: 'Mystery',
    duration: '1h 46m',
    year: 2024,
    rating: 8.6,
    isPremium: false,
    trending: true,
    videoUrl: 'https://www.w3schools.com/html/movie.mp4'
  },
  {
    id: 4,
    title: 'Blue Echo',
    description: 'A gifted sound engineer starts hearing a signal that only appears before disasters strike.',
    poster: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=900&q=80',
    category: 'Mystery',
    genre: 'Sci‑Fi',
    duration: '2h 14m',
    year: 2022,
    rating: 8.2,
    isPremium: false,
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
  },
  {
    id: 5,
    title: 'Velvet Run',
    description: 'A high-speed courier uncovers a citywide conspiracy while racing against a hostile syndicate.',
    poster: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
    category: 'Crime',
    genre: 'Action',
    duration: '2h 01m',
    year: 2024,
    rating: 8.9,
    isPremium: true,
    videoUrl: 'https://archive.org/download/BigBuckBunny_328/BigBuckBunny_512kb.mp4'
  },
  {
    id: 6,
    title: 'Aurora City',
    description: 'A teenage architect draws a future skyline from a recurring dream that could save the city.',
    poster: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=900&q=80',
    category: 'Fantasy',
    genre: 'Drama',
    duration: '1h 39m',
    year: 2021,
    rating: 8.0,
    isPremium: false,
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 7,
    title: 'Atlas Bloom',
    description: 'An agritech engineer reclaims a dying valley by building a living bridge for an entire community.',
    poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80',
    category: 'Adventure',
    genre: 'Drama',
    duration: '2h 07m',
    year: 2023,
    rating: 8.5,
    isPremium: false,
    videoUrl: 'https://www.w3schools.com/html/movie.mp4'
  },
  {
    id: 8,
    title: 'Midnight Circuit',
    description: 'A nightclub DJ discovers a hidden AI that can predict crimes before they happen.',
    poster: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
    category: 'Sci‑Fi',
    genre: 'Thriller',
    duration: '1h 57m',
    year: 2024,
    rating: 8.7,
    isPremium: true,
    videoUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
  },
  {
    id: 9,
    title: 'Glass Horizon',
    description: 'An astronaut returns to Earth to find a new kind of gravity war tearing apart the coastline.',
    poster: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=900&q=80',
    category: 'Sci‑Fi',
    genre: 'Adventure',
    duration: '2h 18m',
    year: 2022,
    rating: 8.3,
    isPremium: true,
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
  },
  {
    id: 10,
    title: 'Fable of Ash',
    description: 'A village bard discovers the last ember of an ancient fire that grants impossible wishes.',
    poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    category: 'Fantasy',
    genre: 'Adventure',
    duration: '1h 52m',
    year: 2023,
    rating: 8.1,
    isPremium: false,
    videoUrl: 'https://archive.org/download/BigBuckBunny_328/BigBuckBunny_512kb.mp4'
  },
  {
    id: 11,
    title: 'Neon Tides',
    description: 'A daring investigator follows a trail of coded messages left behind beneath the ocean floor.',
    poster: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80',
    category: 'Thriller',
    genre: 'Mystery',
    duration: '1h 48m',
    year: 2024,
    rating: 8.7,
    isPremium: false,
    videoUrl: 'https://www.w3schools.com/html/movie.mp4'
  },
  {
    id: 12,
    title: 'Starlight Echo',
    description: 'A radio host finds a message from the future and must warn a nation before midnight.',
    poster: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80',
    category: 'Drama',
    genre: 'Sci‑Fi',
    duration: '2h 10m',
    year: 2021,
    rating: 8.4,
    isPremium: true,
    videoUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4'
  },
  {
    id: 13,
    title: 'Hallow Harbor',
    description: 'A haunted lighthouse keeper and a marine biologist uncover an ancient signal in the dark sea.',
    poster: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
    category: 'Mystery',
    genre: 'Drama',
    duration: '1h 42m',
    year: 2022,
    rating: 7.9,
    isPremium: false,
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
  },
  {
    id: 14,
    title: 'Prism Run',
    description: 'Three stunt racers venture into a hidden energy storm to rescue their missing mentor.',
    poster: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=900&q=80',
    category: 'Action',
    genre: 'Adventure',
    duration: '1h 58m',
    year: 2023,
    rating: 8.6,
    isPremium: true,
    videoUrl: 'https://archive.org/download/BigBuckBunny_328/BigBuckBunny_512kb.mp4'
  },
  {
    id: 15,
    title: 'Moonlight Docket',
    description: 'A local attorney uncovers a cover-up while tracing a legal document that predicts tomorrow.',
    poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80',
    category: 'Crime',
    genre: 'Drama',
    duration: '2h 02m',
    year: 2024,
    rating: 8.8,
    isPremium: true,
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 16,
    title: 'Orbit Here',
    description: 'A crew of cosmic gardeners must restore life to a frozen moon before the next eclipse.',
    poster: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=900&q=80',
    category: 'Adventure',
    genre: 'Sci‑Fi',
    duration: '1h 44m',
    year: 2021,
    rating: 7.8,
    isPremium: false,
    videoUrl: 'https://www.w3schools.com/html/movie.mp4'
  }
];

const demoUser = {
  id: 'demo-user',
  name: 'Aarav Mehta',
  email: 'demo@cinevault.com',
  password: 'Demo@123',
  plan: 'Premium',
  expiry: formatDate(addDays(new Date(), 30))
};

const storageKeys = {
  users: 'cinevaultUsers',
  currentUser: 'cinevaultCurrentUser',
  favorites: 'cinevaultFavorites',
  history: 'cinevaultHistory'
};

const state = {
  currentUser: getCurrentUser(),
  filters: {
    search: '',
    category: 'All',
    genre: 'All',
    access: 'All'
  }
};

document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
  seedDemoUser();
  populateFilterOptions();
  bindEvents();
  renderAll();
}

function seedDemoUser() {
  const users = readStorage(storageKeys.users, []);
  if (!users.length) {
    writeStorage(storageKeys.users, [demoUser]);
  }
  const currentUser = getCurrentUser();
  if (currentUser) {
    const savedUser = readStorage(storageKeys.users, []).find((user) => user.email.toLowerCase() === currentUser.email.toLowerCase());
    if (savedUser) {
      state.currentUser = { ...savedUser };
    } else {
      state.currentUser = null;
      removeStorage(storageKeys.currentUser);
    }
  }
}

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn('Storage failed:', error);
  }
}

function removeStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.warn('Remove failed:', error);
  }
}

function getCurrentUser() {
  return readStorage(storageKeys.currentUser, null);
}

function setCurrentUser(user) {
  state.currentUser = user;
  if (user) {
    writeStorage(storageKeys.currentUser, user);
  } else {
    removeStorage(storageKeys.currentUser);
  }
  syncAuthUI();
  renderDashboard();
  renderPlanButtons();
}

function bindEvents() {
  document.querySelector('.search-toggle').addEventListener('click', () => {
    document.getElementById('explore').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('searchInput').focus();
  });

  document.querySelector('.login-toggle').addEventListener('click', () => openAuthModal('login'));
  document.querySelector('.signup-toggle').addEventListener('click', () => openAuthModal('register'));
  document.getElementById('logoutButton').addEventListener('click', logout);
  document.querySelector('.logout-button').addEventListener('click', logout);
  document.querySelector('.upgrade-action').addEventListener('click', () => {
    if (!state.currentUser) {
      openAuthModal('login');
      showToast('Login to manage your subscription plans.');
      return;
    }
    showUpgradeModal();
  });

  document.getElementById('searchInput').addEventListener('input', (event) => {
    state.filters.search = event.target.value.trim();
    renderCatalog();
  });

  document.getElementById('categoryFilter').addEventListener('change', (event) => {
    state.filters.category = event.target.value;
    renderCatalog();
  });

  document.getElementById('genreFilter').addEventListener('change', (event) => {
    state.filters.genre = event.target.value;
    renderCatalog();
  });

  document.getElementById('accessFilter').addEventListener('change', (event) => {
    state.filters.access = event.target.value;
    renderCatalog();
  });

  document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    handleLogin();
  });

  document.getElementById('registerForm').addEventListener('submit', (event) => {
    event.preventDefault();
    handleRegister();
  });

  document.querySelectorAll('.tab-button').forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.authTab;
      switchAuthTab(target);
    });
  });

  document.querySelectorAll('.plan-button').forEach((button) => {
    button.addEventListener('click', () => {
      const selectedPlan = button.dataset.plan;
      handlePlanSelection(selectedPlan);
    });
  });

  document.getElementById('confirmUpgradeBtn').addEventListener('click', () => {
    activatePlan('Premium');
  });

  document.querySelectorAll('[data-close]').forEach((button) => {
    button.addEventListener('click', () => {
      const modalId = button.dataset.close;
      closeModal(modalId);
    });
  });

  document.addEventListener('click', (event) => {
    const watchButton = event.target.closest('.watch-button');
    if (watchButton) {
      const movie = movies.find((item) => item.id === Number(watchButton.dataset.id));
      if (movie) {
        openPlayer(movie);
      }
    }

    const favoriteButton = event.target.closest('.favorite-button');
    if (favoriteButton) {
      const movieId = Number(favoriteButton.dataset.id);
      toggleFavorite(movieId);
    }

    const dashboardTarget = event.target.closest('[data-target]');
    if (dashboardTarget) {
      const sectionSelector = dashboardTarget.dataset.target;
      const section = document.querySelector(sectionSelector);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }

    const relatedLink = event.target.closest('.related-item');
    if (relatedLink) {
      const movieId = Number(relatedLink.dataset.id);
      const relatedMovie = movies.find((item) => item.id === movieId);
      if (relatedMovie) {
        openPlayer(relatedMovie);
      }
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal('authModal');
      closeModal('playerModal');
      closeModal('upgradeModal');
    }
  });

  document.querySelector('.watch-featured').addEventListener('click', () => {
    const featuredMovie = movies.find((movie) => movie.featured) || movies[0];
    openPlayer(featuredMovie);
  });

  document.querySelector('.info-featured').addEventListener('click', () => {
    document.getElementById('explore').scrollIntoView({ behavior: 'smooth' });
  });
}

function populateFilterOptions() {
  const categoryFilter = document.getElementById('categoryFilter');
  const genreFilter = document.getElementById('genreFilter');

  const categories = ['All', ...new Set(movies.map((movie) => movie.category))];
  const genres = ['All', ...new Set(movies.map((movie) => movie.genre))];

  categoryFilter.innerHTML = categories
    .map((category) => `<option value="${category}">${category === 'All' ? 'All categories' : category}</option>`)
    .join('');

  genreFilter.innerHTML = genres
    .map((genre) => `<option value="${genre}">${genre === 'All' ? 'All genres' : genre}</option>`)
    .join('');
}

function renderAll() {
  renderFeaturedMovie();
  renderRows();
  renderCatalog();
  renderDashboard();
  renderPlanButtons();
  syncAuthUI();
}

function renderFeaturedMovie() {
  const featuredMovie = movies.find((movie) => movie.featured) || movies[0];
  document.getElementById('featuredTitle').textContent = featuredMovie.title;
  document.getElementById('featuredGenre').textContent = featuredMovie.category;
  document.getElementById('featuredDuration').textContent = featuredMovie.duration;
  document.getElementById('featuredYear').textContent = String(featuredMovie.year);
  document.getElementById('featuredRating').textContent = `★ ${featuredMovie.rating}`;
  document.getElementById('featuredDescription').textContent = featuredMovie.description;
  document.getElementById('featuredPoster').src = featuredMovie.poster;
  document.getElementById('featuredPoster').alt = `${featuredMovie.title} poster`;
}

function renderRows() {
  const trending = movies.filter((movie) => movie.trending).slice(0, 6);
  const continueWatching = getContinueWatchingMovies();
  const popular = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 6);
  const recommended = [...movies]
    .filter((movie) => {
      if (!state.currentUser) return !movie.isPremium;
      return state.currentUser.plan === 'Premium' ? true : !movie.isPremium;
    })
    .slice(0, 6);
  const latest = [...movies].sort((a, b) => b.year - a.year).slice(0, 6);
  const topRated = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 6);
  const freeMovies = movies.filter((movie) => !movie.isPremium).slice(0, 6);
  const premiumMovies = movies.filter((movie) => movie.isPremium).slice(0, 6);

  renderMovieRow('trendingRow', trending);
  renderMovieRow('continueWatchingRow', continueWatching.length ? continueWatching : trending.slice(0, 6));
  renderMovieRow('popularRow', popular);
  renderMovieRow('recommendedRow', recommended);
  renderMovieRow('latestRow', latest);
  renderMovieRow('topRatedRow', topRated);
  renderMovieRow('freeRow', freeMovies);
  renderMovieRow('premiumRow', premiumMovies);
}

function renderMovieRow(containerId, movieList) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = movieList.map((movie) => createMovieCard(movie)).join('');
}

function getVisibleMovies() {
  const query = state.filters.search.toLowerCase();

  return movies.filter((movie) => {
    const matchesSearch =
      !query ||
      movie.title.toLowerCase().includes(query) ||
      movie.description.toLowerCase().includes(query) ||
      movie.category.toLowerCase().includes(query) ||
      movie.genre.toLowerCase().includes(query);

    const matchesCategory = state.filters.category === 'All' || movie.category === state.filters.category;
    const matchesGenre = state.filters.genre === 'All' || movie.genre === state.filters.genre;
    const matchesAccess =
      state.filters.access === 'All' ||
      (state.filters.access === 'Free' && !movie.isPremium) ||
      (state.filters.access === 'Premium' && movie.isPremium);

    return matchesSearch && matchesCategory && matchesGenre && matchesAccess;
  });
}

function renderCatalog() {
  const matchedMovies = getVisibleMovies();
  const catalog = document.getElementById('catalogGrid');

  if (!matchedMovies.length) {
    catalog.innerHTML = '<div class="empty-state">No videos match your search and filter selection.</div>';
    return;
  }

  catalog.innerHTML = matchedMovies.map((movie) => createMovieCard(movie)).join('');
}

function createMovieCard(movie) {
  const favorites = getFavoriteIds();
  const isFavorite = favorites.includes(movie.id);
  const statusClass = movie.isPremium ? 'premium' : 'free';
  const statusLabel = movie.isPremium ? 'Premium' : 'Free';

  return `
    <article class="movie-card">
      <div class="movie-poster">
        <img src="${movie.poster}" alt="${movie.title} poster" />
      </div>
      <div class="card-content">
        <div class="card-meta">
          <span>${movie.year}</span>
          <span>${movie.duration}</span>
        </div>
        <h3 class="card-title">${movie.title}</h3>
        <div class="movie-badges">
          <span class="type-badge">${movie.genre}</span>
          <span class="badge ${statusClass}">${statusLabel}</span>
        </div>
        <div class="card-actions">
          <button class="watch-button" type="button" data-id="${movie.id}">Watch</button>
          <button class="favorite-button ${isFavorite ? 'active' : ''}" type="button" data-id="${movie.id}" aria-label="Toggle favorite">
            ${isFavorite ? '♥' : '♡'}
          </button>
        </div>
      </div>
    </article>
  `;
}

function handlePlanSelection(plan) {
  if (plan === 'Free') {
    if (!state.currentUser) {
      openAuthModal('login');
      showToast('Login to update your subscription.');
      return;
    }
    activatePlan('Free');
    return;
  }

  if (!state.currentUser) {
    openAuthModal('login');
    showToast('Create an account to unlock Premium content.');
    return;
  }

  showUpgradeModal();
}

function activatePlan(plan) {
  if (!state.currentUser) {
    openAuthModal('login');
    showToast('Please login before activating a plan.');
    return;
  }

  const users = readStorage(storageKeys.users, []);
  const userIndex = users.findIndex((user) => user.email.toLowerCase() === state.currentUser.email.toLowerCase());

  const nextUser = { ...state.currentUser, plan, expiry: formatDate(addDays(new Date(), 30)) };
  if (userIndex >= 0) {
    users[userIndex] = { ...users[userIndex], plan, expiry: nextUser.expiry };
    writeStorage(storageKeys.users, users);
  }

  setCurrentUser(nextUser);
  closeModal('upgradeModal');
  showToast(`${plan} plan activated successfully.`);
  renderDashboard();
  renderRows();
}

function renderPlanButtons() {
  const planButtons = document.querySelectorAll('.plan-button');
  planButtons.forEach((button) => {
    const selectedPlan = button.dataset.plan;
    const currentPlan = state.currentUser ? state.currentUser.plan : 'Free';

    if (selectedPlan === currentPlan) {
      button.textContent = selectedPlan === 'Free' ? 'Current Plan' : 'Premium Active';
      button.classList.add('active-plan');
    } else {
      button.textContent = selectedPlan === 'Free' ? 'Choose Free' : 'Upgrade to Premium';
      button.classList.remove('active-plan');
    }
  });
}

function openAuthModal(mode = 'login') {
  const modal = document.getElementById('authModal');
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  switchAuthTab(mode);
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');

  if (modalId === 'playerModal') {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    videoPlayer.src = '';
  }
}

function switchAuthTab(mode) {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const tabs = document.querySelectorAll('.tab-button');

  const shouldLogin = mode === 'login';
  loginForm.classList.toggle('active', shouldLogin);
  registerForm.classList.toggle('active', !shouldLogin);

  tabs.forEach((tab) => {
    const isActive = tab.dataset.authTab === mode;
    tab.classList.toggle('active', isActive);
  });
}

function handleLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (!email || !password) {
    showToast('Please enter both email and password.');
    return;
  }

  const users = readStorage(storageKeys.users, []);
  const user = users.find(
    (item) => item.email.toLowerCase() === email.toLowerCase() && item.password === password
  );

  if (!user) {
    showToast('Invalid email or password. Use demo@cinevault.com / Demo@123');
    return;
  }

  setCurrentUser({ ...user });
  closeModal('authModal');
  document.getElementById('loginForm').reset();
  showToast(`Welcome back, ${user.name}!`);
  renderAll();
}

function handleRegister() {
  const name = document.getElementById('registerName').value.trim();
  const email = document.getElementById('registerEmail').value.trim();
  const password = document.getElementById('registerPassword').value;
  const confirmPassword = document.getElementById('registerConfirm').value;

  if (!name || !email || !password || !confirmPassword) {
    showToast('Please fill in all registration fields.');
    return;
  }

  if (password.length < 6) {
    showToast('Password must be at least 6 characters long.');
    return;
  }

  if (password !== confirmPassword) {
    showToast('Passwords do not match.');
    return;
  }

  const users = readStorage(storageKeys.users, []);
  const exists = users.some((user) => user.email.toLowerCase() === email.toLowerCase());

  if (exists) {
    showToast('This email is already registered. Please login instead.');
    switchAuthTab('login');
    return;
  }

  const newUser = {
    id: String(Date.now()),
    name,
    email,
    password,
    plan: 'Free',
    expiry: formatDate(addDays(new Date(), 30))
  };

  users.push(newUser);
  writeStorage(storageKeys.users, users);
  setCurrentUser({ ...newUser });
  closeModal('authModal');
  document.getElementById('registerForm').reset();
  showToast('Account created successfully!');
  renderAll();
}

function logout() {
  setCurrentUser(null);
  showToast('Logged out successfully.');
  renderAll();
}

function syncAuthUI() {
  const userChip = document.getElementById('userChip');
  const loginToggle = document.querySelector('.login-toggle');
  const signupToggle = document.querySelector('.signup-toggle');
  const userNameLabel = document.getElementById('userNameLabel');
  const avatarBadge = document.getElementById('avatarBadge');

  if (state.currentUser) {
    userChip.classList.remove('hidden');
    loginToggle.classList.add('hidden');
    signupToggle.classList.add('hidden');
    userNameLabel.textContent = state.currentUser.name.split(' ')[0];
    avatarBadge.textContent = state.currentUser.name.charAt(0).toUpperCase();
  } else {
    userChip.classList.add('hidden');
    loginToggle.classList.remove('hidden');
    signupToggle.classList.remove('hidden');
  }
}

function showUpgradeModal() {
  const modal = document.getElementById('upgradeModal');
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function openPlayer(movie) {
  if (!state.currentUser) {
    openAuthModal('login');
    showToast('Please log in to watch videos.');
    return;
  }

  if (movie.isPremium && state.currentUser.plan !== 'Premium') {
    showUpgradeModal();
    return;
  }

  const player = document.getElementById('videoPlayer');
  const playerTitle = document.getElementById('playerTitle');
  const playerDescription = document.getElementById('playerDescription');
  const relatedList = document.getElementById('relatedList');

  playerTitle.textContent = movie.title;
  playerDescription.textContent = movie.description;
  player.src = movie.videoUrl;
  player.load();

  const relatedMovies = movies.filter(
    (item) => item.id !== movie.id && (item.category === movie.category || item.genre === movie.genre)
  ).slice(0, 4);

  relatedList.innerHTML = relatedMovies.length
    ? relatedMovies
        .map(
          (relatedMovie) => `
            <div class="related-item" data-id="${relatedMovie.id}" role="button" tabindex="0">
              <img src="${relatedMovie.poster}" alt="${relatedMovie.title}" />
              <div>
                <strong>${relatedMovie.title}</strong>
                <div class="card-meta"><span>${relatedMovie.genre}</span></div>
              </div>
            </div>
          `
        )
        .join('')
    : '<div class="empty-state">No related videos available.</div>';

  document.getElementById('playerModal').classList.remove('hidden');
  addToHistory(movie);
  renderRows();
  renderDashboard();
  player.play().catch(() => {
    showToast('Press play to start the video.');
  });
}

function addToHistory(movie) {
  if (!state.currentUser) return;

  const email = state.currentUser.email;
  const historyMap = readStorage(storageKeys.history, {});
  const currentHistory = Array.isArray(historyMap[email]) ? historyMap[email] : [];

  const filtered = currentHistory.filter((item) => item.id !== movie.id);
  filtered.unshift({ id: movie.id, title: movie.title, watchedAt: new Date().toISOString() });

  historyMap[email] = filtered.slice(0, 6);
  writeStorage(storageKeys.history, historyMap);
}

function getFavoriteIds() {
  if (!state.currentUser) return [];
  const favorites = readStorage(storageKeys.favorites, {});
  return Array.isArray(favorites[state.currentUser.email]) ? favorites[state.currentUser.email] : [];
}

function toggleFavorite(movieId) {
  if (!state.currentUser) {
    openAuthModal('login');
    showToast('Login to save your favorite titles.');
    return;
  }

  const favorites = readStorage(storageKeys.favorites, {});
  const key = state.currentUser.email;
  const currentFavorites = Array.isArray(favorites[key]) ? favorites[key] : [];

  if (currentFavorites.includes(movieId)) {
    favorites[key] = currentFavorites.filter((id) => id !== movieId);
    showToast('Removed from favorites.');
  } else {
    favorites[key] = [...currentFavorites, movieId];
    showToast('Added to favorites.');
  }

  writeStorage(storageKeys.favorites, favorites);
  renderCatalog();
  renderDashboard();
  renderRows();
}

function getContinueWatchingMovies() {
  if (!state.currentUser) {
    return movies.slice(0, 6);
  }

  const historyMap = readStorage(storageKeys.history, {});
  const watched = Array.isArray(historyMap[state.currentUser.email]) ? historyMap[state.currentUser.email] : [];
  const watchedIds = watched.map((entry) => entry.id);
  const uniqueMovies = movies.filter((movie) => watchedIds.includes(movie.id));

  return uniqueMovies.slice(0, 6);
}

function renderDashboard() {
  const greeting = document.getElementById('dashboardGreeting');
  const dashboardPlan = document.getElementById('dashboardPlanText');
  const profileName = document.getElementById('profileName');
  const profileEmail = document.getElementById('profileEmail');
  const profilePlan = document.getElementById('profilePlan');
  const profileExpiry = document.getElementById('profileExpiry');
  const watchHistoryList = document.getElementById('watchHistoryList');
  const continueWatchingList = document.getElementById('continueWatchingList');
  const favoriteList = document.getElementById('favoriteList');

  if (!state.currentUser) {
    greeting.textContent = 'Welcome to CineVault';
    dashboardPlan.textContent = 'Current plan: Free • Login to unlock more features';
    profileName.textContent = 'Guest';
    profileEmail.textContent = '-';
    profilePlan.textContent = 'Free';
    profileExpiry.textContent = '-';
    watchHistoryList.innerHTML = '<li>Log in to view your watch history.</li>';
    continueWatchingList.innerHTML = '<div class="empty-state">Login to resume shows.</div>';
    favoriteList.innerHTML = '<div class="empty-state">No favorites yet.</div>';
    return;
  }

  greeting.textContent = `Welcome back, ${state.currentUser.name.split(' ')[0]}`;
  dashboardPlan.textContent = `Current plan: ${state.currentUser.plan} • Expires ${state.currentUser.expiry || 'N/A'}`;
  profileName.textContent = state.currentUser.name;
  profileEmail.textContent = state.currentUser.email;
  profilePlan.textContent = state.currentUser.plan;
  profileExpiry.textContent = state.currentUser.expiry || 'N/A';

  const historyMap = readStorage(storageKeys.history, {});
  const userHistory = Array.isArray(historyMap[state.currentUser.email]) ? historyMap[state.currentUser.email] : [];
  watchHistoryList.innerHTML = userHistory.length
    ? userHistory
        .slice(0, 5)
        .map((entry) => `<li>${entry.title}</li>`)
        .join('')
    : '<li>No recent watch activity yet.</li>';

  const continueWatching = getContinueWatchingMovies();
  continueWatchingList.innerHTML = continueWatching.length
    ? continueWatching
        .slice(0, 4)
        .map(
          (movie) => `
            <div class="mini-card">
              <img src="${movie.poster}" alt="${movie.title}" />
              <div>
                <strong>${movie.title}</strong>
                <div>${movie.genre}</div>
              </div>
            </div>
          `
        )
        .join('')
    : '<div class="empty-state">Nothing in progress.</div>';

  const favoriteMovieIds = getFavoriteIds();
  const favorites = movies.filter((movie) => favoriteMovieIds.includes(movie.id));
  favoriteList.innerHTML = favorites.length
    ? favorites
        .slice(0, 4)
        .map(
          (movie) => `
            <div class="mini-card">
              <img src="${movie.poster}" alt="${movie.title}" />
              <div>
                <strong>${movie.title}</strong>
                <div>${movie.genre}</div>
              </div>
            </div>
          `
        )
        .join('')
    : '<div class="empty-state">No favorite titles yet.</div>';
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.remove('hidden');

  clearTimeout(showToast.timerId);
  showToast.timerId = setTimeout(() => {
    toast.classList.add('hidden');
  }, 2200);
}

function formatDate(date) {
  return new Intl.DateTimeFormat('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
}

function addDays(date, days) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}
