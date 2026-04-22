// ===== DATA =====
const CATEGORIES = [
  { icon: '🏦', name: 'Banking & Finance', count: '12,400+', tag: 'finance' },
  { icon: '🛒', name: 'E-commerce', count: '8,200+', tag: 'ecommerce' },
  { icon: '📱', name: 'Telecoms', count: '4,100+', tag: 'telecom' },
  { icon: '🚚', name: 'Logistics', count: '6,300+', tag: 'logistics' },
  { icon: '🍽️', name: 'Food & Drinks', count: '22,000+', tag: 'food' },
  { icon: '🏥', name: 'Health', count: '9,800+', tag: 'health' },
  { icon: '📚', name: 'Education', count: '5,600+', tag: 'education' },
  { icon: '🏘️', name: 'Real Estate', count: '3,900+', tag: 'realestate' },
  { icon: '✈️', name: 'Travel', count: '2,700+', tag: 'travel' },
  { icon: '💡', name: 'Energy', count: '1,800+', tag: 'energy' },
  { icon: '🛡️', name: 'Insurance', count: '2,100+', tag: 'insurance' },
  { icon: '💼', name: 'Business Services', count: '7,400+', tag: 'business' },
];

const BUSINESSES = [
  {
    id: 0, name: 'Paystack', cat: 'Fintech', tag: 'finance',
    logo: 'PS', color: '#0A2D4A', rating: 4.7, reviews: 18420,
    desc: 'Nigeria\'s leading payment infrastructure powering thousands of businesses. Accept payments from anyone, anywhere in the world.',
    tags: ['Payments', 'API', 'POS', 'Checkout'], verified: true, city: 'Lagos', state: 'Lagos',
    website: 'paystack.com', founded: '2015', employees: '200-500',
    about: 'Paystack helps businesses in Africa get paid by anyone, anywhere in the world. Founded in 2015 and acquired by Stripe in 2020, Paystack processes hundreds of millions of dollars for thousands of businesses across Nigeria, Ghana, South Africa, and Kenya.',
    breakdown: [68, 16, 8, 4, 4],
    phone: '+234 1 628 0000',
    address: '126B Joel Ogunnaike St, Ikeja, Lagos',
    claimed: true,
    responseRate: '98%',
    responseTime: 'Within 2 hours'
  },
  {
    id: 1, name: 'Jumia Nigeria', cat: 'E-commerce', tag: 'ecommerce',
    logo: 'JN', color: '#F68B24', rating: 3.4, reviews: 42100,
    desc: 'Africa\'s largest e-commerce marketplace. Shop electronics, fashion, appliances, groceries and more. Delivered nationwide.',
    tags: ['Shopping', 'Delivery', 'Fashion', 'Electronics'], verified: true, city: 'Lagos', state: 'Lagos',
    website: 'jumia.com.ng', founded: '2012', employees: '1000+',
    about: 'Jumia is Africa\'s leading e-commerce platform. In Nigeria, Jumia provides customers access to millions of products from thousands of sellers, with delivery available to all 36 states and the FCT.',
    breakdown: [28, 16, 14, 12, 30],
    phone: '+234 1 888 8888',
    address: '12A Akin Adesola Street, Victoria Island, Lagos',
    claimed: true,
    responseRate: '75%',
    responseTime: 'Within 48 hours'
  },
  {
    id: 2, name: 'GTBank', cat: 'Banking', tag: 'finance',
    logo: 'GT', color: '#F57C00', rating: 3.8, reviews: 31200,
    desc: 'Guaranty Trust Bank — one of Nigeria\'s most innovative financial institutions. Personal, business and corporate banking.',
    tags: ['Banking', 'Mobile App', 'Loans', 'Cards'], verified: true, city: 'Lagos', state: 'Lagos',
    website: 'gtbank.com', founded: '1990', employees: '10,000+',
    about: 'Guaranty Trust Bank Plc (GTBank) is a foremost Nigerian financial institution and the most capitalised bank in West Africa. It provides commercial and retail banking services to individuals, businesses and institutions across Nigeria and other African countries.',
    breakdown: [30, 24, 18, 12, 16],
    phone: '+234 1 448 0000',
    address: 'Plot 635, Akin Adesola Street, Victoria Island, Lagos',
    claimed: true,
    responseRate: '80%',
    responseTime: 'Within 24 hours'
  },
  {
    id: 3, name: 'Konga', cat: 'E-commerce', tag: 'ecommerce',
    logo: 'KG', color: '#EE3124', rating: 3.2, reviews: 24800,
    desc: 'Shop online for electronics, phones, fashion and more. Same-day delivery available in Lagos, Abuja and Port Harcourt.',
    tags: ['Shopping', 'Electronics', 'Groceries', 'Fashion'], verified: true, city: 'Lagos', state: 'Lagos',
    website: 'konga.com', founded: '2012', employees: '500-1000',
    about: 'Konga.com is one of Nigeria\'s largest online marketplaces. Operating a hybrid marketplace and logistics model, Konga connects buyers with sellers across Nigeria, offering both physical and digital products.',
    breakdown: [24, 18, 16, 14, 28],
    phone: '+234 1 700 0000',
    address: '2b, Olatunji Moore Street, Victoria Island, Lagos',
    claimed: false,
    responseRate: '60%',
    responseTime: 'Within 72 hours'
  },
  {
    id: 4, name: 'GIG Logistics', cat: 'Logistics', tag: 'logistics',
    logo: 'GIG', color: '#1E3A5F', rating: 4.3, reviews: 9800,
    desc: 'Nigeria\'s premier logistics company. Reliable parcel delivery and haulage services across all 36 states and Abuja.',
    tags: ['Delivery', 'Tracking', 'Nationwide', 'Haulage'], verified: true, city: 'Lagos', state: 'Lagos',
    website: 'giglogistics.com', founded: '2012', employees: '500-1000',
    about: 'GIG Logistics is a leading logistics company in Nigeria providing shipping and logistics solutions across West Africa. With a nationwide network spanning all 36 states, GIG delivers parcels, documents, and freight reliably.',
    breakdown: [52, 24, 12, 6, 6],
    phone: '+234 700 444 4444',
    address: 'GIG Bus Terminal, 45 Eric Moore Road, Surulere, Lagos',
    claimed: true,
    responseRate: '92%',
    responseTime: 'Within 12 hours'
  },
  {
    id: 5, name: 'Chowdeck', cat: 'Food Delivery', tag: 'food',
    logo: '🍔', color: '#FF6B35', rating: 4.5, reviews: 14300,
    desc: 'Fast food delivery from your favourite restaurants. Order from hundreds of restaurants in Lagos, Abuja and Port Harcourt.',
    tags: ['Food', 'Delivery', 'Restaurants', 'Fast'], verified: false, city: 'Lagos', state: 'Lagos',
    website: 'chowdeck.com', founded: '2021', employees: '100-200',
    about: 'Chowdeck is a Nigerian food delivery platform that connects hungry customers with the best restaurants in their city. Known for fast delivery times and a wide restaurant selection, Chowdeck is the go-to food app in Nigeria.',
    breakdown: [58, 22, 10, 5, 5],
    phone: '+234 800 246 9325',
    address: '14 Adeola Odeku Street, Victoria Island, Lagos',
    claimed: false,
    responseRate: '85%',
    responseTime: 'Within 24 hours'
  },
  {
    id: 6, name: 'MTN Nigeria', cat: 'Telecom', tag: 'telecom',
    logo: 'MTN', color: '#FFCC00', rating: 3.1, reviews: 88000,
    desc: 'Nigeria\'s largest telecommunications company. Mobile voice, data, MoMo, and digital services for all Nigerians.',
    tags: ['Network', 'Data', '5G', 'MoMo'], verified: true, city: 'Lagos', state: 'Lagos',
    website: 'mtnonline.com', founded: '2001', employees: '5000+',
    about: 'MTN Nigeria Communications Plc is Nigeria\'s largest mobile network operator. With over 80 million subscribers, MTN provides mobile communications, mobile money (MoMo), and digital services across all 36 states.',
    breakdown: [22, 16, 14, 14, 34],
    phone: '180',
    address: 'MTN House, 1 Molade Okoya-Thomas Street, Victoria Island, Lagos',
    claimed: true,
    responseRate: '70%',
    responseTime: 'Within 48 hours'
  },
  {
    id: 7, name: 'Flutterwave', cat: 'Fintech', tag: 'finance',
    logo: 'FW', color: '#F5A623', rating: 4.4, reviews: 12600,
    desc: 'Pan-African payment solutions for businesses of all sizes. Send, receive and grow your business across Africa and globally.',
    tags: ['Payments', 'Global', 'B2B', 'API'], verified: true, city: 'Lagos', state: 'Lagos',
    website: 'flutterwave.com', founded: '2016', employees: '500+',
    about: 'Flutterwave is a financial technology company that provides payment infrastructure for global merchants and payment service providers across the African continent. It enables businesses to make and receive payments across Africa.',
    breakdown: [55, 22, 12, 6, 5],
    phone: '+234 1 888 5353',
    address: '55b Bode Thomas, Surulere, Lagos',
    claimed: true,
    responseRate: '90%',
    responseTime: 'Within 24 hours'
  },
  {
    id: 8, name: 'Opay', cat: 'Fintech', tag: 'finance',
    logo: 'OP', color: '#1AB394', rating: 3.9, reviews: 35400,
    desc: 'Nigeria\'s fast-growing digital bank. Send money, pay bills, buy airtime, and access loans from your phone.',
    tags: ['Digital Bank', 'Transfers', 'Bills', 'Savings'], verified: true, city: 'Lagos', state: 'Lagos',
    website: 'opayweb.com', founded: '2018', employees: '2000+',
    about: 'OPay is a leading financial technology company in Nigeria providing digital banking, payments, savings, and lending services. With over 35 million users, OPay has become one of Nigeria\'s most widely-used financial apps.',
    breakdown: [38, 22, 16, 10, 14],
    phone: '+234 1 700 6729',
    address: 'ASPAMDA Trade Fair Complex, Lagos-Badagry Expressway, Lagos',
    claimed: true,
    responseRate: '78%',
    responseTime: 'Within 24 hours'
  },
  {
    id: 9, name: 'Chicken Republic', cat: 'Food & Restaurant', tag: 'food',
    logo: 'CR', color: '#C0392B', rating: 4.1, reviews: 28600,
    desc: 'Nigeria\'s favourite QSR chain. Delicious chicken, burgers, rice dishes and more. Over 200 locations nationwide.',
    tags: ['QSR', 'Chicken', 'Nationwide', 'Delivery'], verified: true, city: 'Lagos', state: 'Lagos',
    website: 'chickenrepublic.com', founded: '2004', employees: '5000+',
    about: 'Chicken Republic is a Nigerian fast food chain and one of the largest restaurant chains in sub-Saharan Africa. With over 200 outlets across Nigeria, Chicken Republic serves affordable, quality meals to millions of Nigerians daily.',
    breakdown: [42, 28, 16, 8, 6],
    phone: '+234 1 277 5555',
    address: '22 Saka Tinubu Street, Victoria Island, Lagos',
    claimed: true,
    responseRate: '72%',
    responseTime: 'Within 48 hours'
  },
  {
    id: 10, name: 'Airtel Nigeria', cat: 'Telecom', tag: 'telecom',
    logo: 'AIR', color: '#E40000', rating: 3.3, reviews: 64200,
    desc: 'Nigeria\'s second largest telecom. Affordable data plans, crystal-clear calls and 4G coverage across Nigeria.',
    tags: ['Network', 'Data', '4G', 'Airtime'], verified: true, city: 'Lagos', state: 'Lagos',
    website: 'airtel.com.ng', founded: '2001', employees: '3000+',
    about: 'Airtel Networks Limited is Nigeria\'s second largest mobile network operator. Offering mobile voice, data, and value-added services, Airtel serves over 55 million subscribers across Nigeria.',
    breakdown: [24, 18, 18, 14, 26],
    phone: '+234 802 000 1111',
    address: 'Churchgate Tower, Plot PC 30, Afribank Street, Victoria Island, Lagos',
    claimed: true,
    responseRate: '68%',
    responseTime: 'Within 48 hours'
  },
  {
    id: 11, name: 'Bolt Nigeria', cat: 'Transport', tag: 'travel',
    logo: 'BO', color: '#34D186', rating: 3.7, reviews: 19800,
    desc: 'Affordable and reliable ride-hailing in Nigeria. Book a car in seconds — available in Lagos, Abuja, Port Harcourt and more.',
    tags: ['Ride-hailing', 'Affordable', 'Safe', 'Fast'], verified: true, city: 'Lagos', state: 'Lagos',
    website: 'bolt.eu/ng', founded: '2016', employees: '200-500',
    about: 'Bolt (formerly Taxify) is a European ride-hailing company operating in Nigeria. Available in multiple Nigerian cities, Bolt offers affordable rides with safety features including trip sharing and SOS alerts.',
    breakdown: [32, 22, 20, 14, 12],
    phone: 'In-app support',
    address: 'Plot 1681 Olakunle Bakare Close, Victoria Island, Lagos',
    claimed: true,
    responseRate: '65%',
    responseTime: 'Within 72 hours'
  },
];

const ALL_REVIEWS = [
  { id: 0, bizId: 0, biz: 'Paystack', author: 'Emeka O.', city: 'Lagos', stars: 5, title: 'Absolutely seamless payment integration', body: 'Integrated Paystack into my e-commerce store in under 2 hours. Documentation is excellent, their support team responds within minutes. Withdrawals are instant to my account. This is the gold standard for payment gateways in Nigeria — nothing else comes close.', date: '2 hours ago', color: '#16a34a', helpful: 34, verified: true },
  { id: 1, bizId: 1, biz: 'Jumia Nigeria', author: 'Aisha B.', city: 'Abuja', stars: 2, title: 'Delivery delays and poor customer service', body: 'Ordered a phone that was supposed to arrive in 3-5 days. Waited 3 weeks. Customer care kept giving different stories every time I called. Finally received it but the box was visibly damaged. Very disappointing from such a large company. They need to sort out their logistics and customer care urgently.', date: '5 hours ago', color: '#dc2626', helpful: 156, verified: true },
  { id: 2, bizId: 4, biz: 'GIG Logistics', author: 'Chidi N.', city: 'Enugu', stars: 5, title: 'Reliable interstate delivery every time', body: 'Been using GIG for my business deliveries from Enugu to Lagos for over 2 years. Never lost a single package. Their tracking system is accurate and their customer service actually picks up the phone. For any business needing reliable nationwide logistics, GIG is the answer.', date: '1 day ago', color: '#1e40af', helpful: 88, verified: true },
  { id: 3, bizId: 5, biz: 'Chowdeck', author: 'Fatima M.', city: 'Lagos', stars: 4, title: 'Fast delivery but app occasionally crashes', body: 'Food always arrives hot and on time — faster than estimated delivery time most days. The restaurant selection has grown massively. The app has minor bugs occasionally but nothing deal-breaking. Great platform that has genuinely improved since launch.', date: '1 day ago', color: '#7c3aed', helpful: 42, verified: false },
  { id: 4, bizId: 2, biz: 'GTBank', author: 'Tobi A.', city: 'Lagos', stars: 3, title: 'Good bank but the app needs serious work', body: 'GTBank used to be my favourite bank but the mobile app keeps failing during transfers. Error messages with no explanation. Had to visit the branch multiple times for things that should be done online. Branch staff are incredibly helpful though. They need to seriously invest in their technology.', date: '2 days ago', color: '#9a3412', helpful: 213, verified: true },
  { id: 5, bizId: 7, biz: 'Flutterwave', author: 'Ngozi I.', city: 'Port Harcourt', stars: 5, title: 'Best payment solution for international transactions', body: 'We use Flutterwave to receive payments from our clients in the US and UK. The setup was straightforward, fees are reasonable, and the dashboard gives excellent transaction visibility. Their customer success team helped us set up everything properly.', date: '3 days ago', color: '#1e40af', helpful: 67, verified: true },
  { id: 6, bizId: 8, biz: 'Opay', author: 'Kabiru M.', city: 'Kano', stars: 2, title: 'Account frozen without explanation', body: 'My account was frozen without any prior notice or explanation. I could not access my funds for 6 days. Their customer care lines were constantly busy and the chat support gave scripted responses. Finally resolved but I almost missed my rent payment. They need better communication protocols.', date: '4 days ago', color: '#dc2626', helpful: 198, verified: true },
  { id: 7, bizId: 9, biz: 'Chicken Republic', author: 'Adaeze O.', city: 'Enugu', stars: 4, title: 'Consistently good food across all branches', body: 'What I like most about Chicken Republic is the consistency. Whether you\'re in Lagos or Enugu, the chicken tastes the same. The Lekki Phase 1 branch has excellent service. Prices have gone up recently but still reasonable for the quality. The new app for ordering is a welcome addition.', date: '5 days ago', color: '#be185d', helpful: 52, verified: false },
];

// ===== STATE =====
let state = {
  currentPage: 'home',
  currentBizId: null,
  currentUser: null,
  filterTag: 'all',
  currentStars: 0,
  authMode: 'login',
  dashTab: 'overview',
  profileTab: 'reviews',
  userTab: 'reviews',
};

// ===== STORAGE HELPERS =====
function saveUser(user) {
  try { localStorage.setItem('ts_user', JSON.stringify(user)); } catch(e){}
}
function loadUser() {
  try { const u = localStorage.getItem('ts_user'); return u ? JSON.parse(u) : null; } catch(e){ return null; }
}
function saveReviews(reviews) {
  try { localStorage.setItem('ts_reviews', JSON.stringify(reviews)); } catch(e){}
}
function loadReviews() {
  try { const r = localStorage.getItem('ts_reviews'); return r ? JSON.parse(r) : []; }
  catch(e){ return []; }
}

// ===== UTILS =====
function stars(n, total=5, size=13) {
  let h = '';
  for (let i=1;i<=total;i++) {
    h += `<span class="star${i<=Math.floor(n)?'':' empty'}" style="font-size:${size}px">★</span>`;
  }
  return h;
}

function trustLabel(r) {
  if (r>=4.5) return ['Excellent','tl-excellent'];
  if (r>=4)   return ['Great','tl-great'];
  if (r>=3.5) return ['Good','tl-good'];
  if (r>=3)   return ['Average','tl-average'];
  return ['Poor','tl-poor'];
}

function fmt(n) { return Number(n).toLocaleString(); }

function showToast(msg, icon='✓') {
  const t = document.getElementById('toast');
  t.innerHTML = `<span class="toast-icon">${icon}</span> ${msg}`;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 3000);
}

function goPage(id) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
  state.currentPage = id;
  window.scrollTo(0,0);
  closeDropdown();
}

// ===== NAV =====
function updateNav() {
  const u = state.currentUser;
  const actionsEl = document.getElementById('nav-actions');
  if (u) {
    actionsEl.innerHTML = `
      <div class="nav-user-menu">
        <div class="nav-avatar" onclick="toggleDropdown()" title="${u.name}">${u.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase()}</div>
        <div class="dropdown-menu" id="main-dropdown">
          <div style="padding:10px 12px 6px;font-size:13px;font-weight:600;color:var(--text3)">${u.name}</div>
          <div style="padding:0 12px 8px;font-size:12px;color:var(--text3)">${u.email}</div>
          <div class="dropdown-divider"></div>
          <div class="dropdown-item" onclick="goPage('user-profile');closeDropdown()"><span>👤</span> My Profile</div>
          <div class="dropdown-item" onclick="goPage('write-review');closeDropdown()"><span>✏️</span> Write a Review</div>
          ${u.type==='business'?`<div class="dropdown-item" onclick="goPage('biz-dashboard');closeDropdown()"><span>📊</span> Business Dashboard</div>`:''}
          <div class="dropdown-divider"></div>
          <div class="dropdown-item" onclick="goPage('settings');closeDropdown()"><span>⚙️</span> Settings</div>
          <div class="dropdown-item danger" onclick="logout()"><span>🚪</span> Sign Out</div>
        </div>
      </div>
    `;
  } else {
    actionsEl.innerHTML = `
      <button class="btn btn-ghost" onclick="openAuth('login')">Sign In</button>
      <button class="btn btn-primary" onclick="openAuth('signup')">Sign Up Free</button>
    `;
  }
}

function toggleDropdown() {
  const d = document.getElementById('main-dropdown');
  if (d) d.classList.toggle('open');
}
function closeDropdown() {
  const d = document.getElementById('main-dropdown');
  if (d) d.classList.remove('open');
}
document.addEventListener('click', e=>{
  if (!e.target.closest('.nav-user-menu')) closeDropdown();
});

function logout() {
  state.currentUser = null;
  try { localStorage.removeItem('ts_user'); } catch(e){}
  updateNav();
  goPage('home');
  showToast('Signed out successfully', '👋');
}

// ===== AUTH MODAL =====
function openAuth(mode) {
  state.authMode = mode;
  renderAuthModal();
  document.getElementById('auth-overlay').classList.add('open');
}
function closeAuth() {
  document.getElementById('auth-overlay').classList.remove('open');
}

function renderAuthModal() {
  const m = state.authMode;
  document.getElementById('auth-modal').innerHTML = `
    <button class="modal-close" onclick="closeAuth()">✕</button>
    <div class="modal-logo"><span class="star">★</span>TrustSpace</div>
    ${m==='login' ? renderLogin() : m==='signup' ? renderSignup() : renderForgot()}
  `;
  if (m==='signup') bindPasswordStrength();
}

function renderLogin() {
  return `
    <h2 class="modal-title">Welcome back</h2>
    <p class="modal-sub">Sign in to your TrustSpace account</p>
    <div class="auth-form">
      <button class="social-btn" onclick="socialLogin('Google')">
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18" height="18" alt="Google"> Continue with Google
      </button>
      <button class="social-btn" onclick="socialLogin('Facebook')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        Continue with Facebook
      </button>
      <div class="auth-divider"><span>or</span></div>
      <div class="form-section">
        <label class="form-label">Email Address</label>
        <input class="form-input" type="email" id="login-email" placeholder="you@example.com" autocomplete="email">
        <div class="form-error" id="login-email-err">Please enter a valid email</div>
      </div>
      <div class="form-section">
        <label class="form-label">Password</label>
        <div class="pw-toggle-wrap">
          <input class="form-input" type="password" id="login-pw" placeholder="Your password" autocomplete="current-password">
          <button class="pw-toggle" onclick="togglePw('login-pw',this)" type="button">👁</button>
        </div>
        <div class="form-error" id="login-pw-err">Incorrect email or password</div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;">
          <input type="checkbox" id="remember"> Remember me
        </label>
        <a style="font-size:13px;color:var(--green);cursor:pointer;" onclick="switchAuth('forgot')">Forgot password?</a>
      </div>
      <button class="submit-btn" onclick="doLogin()">Sign In</button>
      <div class="auth-switch">Don't have an account? <a onclick="switchAuth('signup')">Sign up free</a></div>
    </div>
  `;
}

function renderSignup() {
  return `
    <h2 class="modal-title">Create your account</h2>
    <p class="modal-sub">Join millions of Nigerians sharing honest reviews</p>
    <div class="auth-form">
      <button class="social-btn" onclick="socialLogin('Google')">
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18" height="18" alt="Google"> Continue with Google
      </button>
      <div class="auth-divider"><span>or</span></div>
      <div class="form-row">
        <div class="form-section">
          <label class="form-label">First Name <span class="req">*</span></label>
          <input class="form-input" type="text" id="su-first" placeholder="Emeka">
          <div class="form-error" id="su-first-err">Required</div>
        </div>
        <div class="form-section">
          <label class="form-label">Last Name <span class="req">*</span></label>
          <input class="form-input" type="text" id="su-last" placeholder="Okonkwo">
          <div class="form-error" id="su-last-err">Required</div>
        </div>
      </div>
      <div class="form-section">
        <label class="form-label">Email Address <span class="req">*</span></label>
        <input class="form-input" type="email" id="su-email" placeholder="you@example.com" autocomplete="email">
        <div class="form-error" id="su-email-err">Please enter a valid email</div>
      </div>
      <div class="form-section">
        <label class="form-label">Account Type <span class="req">*</span></label>
        <select class="form-select" id="su-type">
          <option value="consumer">Consumer — I want to read & write reviews</option>
          <option value="business">Business — I want to manage my company profile</option>
        </select>
      </div>
      <div class="form-section">
        <label class="form-label">State <span class="req">*</span></label>
        <select class="form-select" id="su-state">
          <option>Lagos</option><option>Abuja (FCT)</option><option>Rivers</option>
          <option>Kano</option><option>Oyo</option><option>Anambra</option>
          <option>Delta</option><option>Enugu</option><option>Kaduna</option>
          <option>Ondo</option><option>Ogun</option><option>Imo</option>
          <option>Borno</option><option>Cross River</option><option>Akwa Ibom</option>
        </select>
      </div>
      <div class="form-section">
        <label class="form-label">Password <span class="req">*</span></label>
        <div class="pw-toggle-wrap">
          <input class="form-input" type="password" id="su-pw" placeholder="Minimum 8 characters" autocomplete="new-password" oninput="checkStrength(this.value)">
          <button class="pw-toggle" onclick="togglePw('su-pw',this)" type="button">👁</button>
        </div>
        <div class="strength-bar"><div class="strength-fill" id="strength-fill" style="width:0%"></div></div>
        <div style="font-size:11px;color:var(--text3);margin-top:4px;" id="strength-label"></div>
        <div class="form-error" id="su-pw-err">Password must be at least 8 characters</div>
      </div>
      <div style="margin-bottom:20px;">
        <label style="display:flex;align-items:flex-start;gap:10px;font-size:13px;cursor:pointer;line-height:1.5;">
          <input type="checkbox" id="su-terms" style="margin-top:2px;flex-shrink:0;">
          I agree to TrustSpace's <a href="#" style="color:var(--green)" onclick="return false">Terms of Use</a> and <a href="#" style="color:var(--green)" onclick="return false">Privacy Policy</a>
        </label>
        <div class="form-error" id="su-terms-err">You must agree to the terms</div>
      </div>
      <button class="submit-btn" onclick="doSignup()">Create Account</button>
      <div class="auth-switch">Already have an account? <a onclick="switchAuth('login')">Sign in</a></div>
    </div>
  `;
}

function renderForgot() {
  return `
    <h2 class="modal-title">Reset password</h2>
    <p class="modal-sub">Enter your email and we'll send you a reset link</p>
    <div class="auth-form">
      <div class="form-section">
        <label class="form-label">Email Address</label>
        <input class="form-input" type="email" id="forgot-email" placeholder="you@example.com">
        <div class="form-error" id="forgot-err">Please enter a valid email</div>
      </div>
      <button class="submit-btn" onclick="doForgot()">Send Reset Link</button>
      <div class="auth-switch"><a onclick="switchAuth('login')">← Back to sign in</a></div>
    </div>
  `;
}

function switchAuth(mode) {
  state.authMode = mode;
  renderAuthModal();
  if (mode==='signup') bindPasswordStrength();
}

function togglePw(inputId, btn) {
  const inp = document.getElementById(inputId);
  if (!inp) return;
  inp.type = inp.type==='password' ? 'text' : 'password';
  btn.textContent = inp.type==='password' ? '👁' : '🙈';
}

function bindPasswordStrength() {}

function checkStrength(pw) {
  const fill = document.getElementById('strength-fill');
  const label = document.getElementById('strength-label');
  if (!fill) return;
  let s = 0;
  if (pw.length>=8) s++;
  if (/[A-Z]/.test(pw)) s++;
  if (/[0-9]/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  const levels = [
    {w:'0%',c:'#ef4444',l:''},
    {w:'25%',c:'#ef4444',l:'Weak'},
    {w:'50%',c:'#f59e0b',l:'Fair'},
    {w:'75%',c:'#3b82f6',l:'Good'},
    {w:'100%',c:'#16a34a',l:'Strong'},
  ];
  const lv = levels[s];
  fill.style.width = lv.w;
  fill.style.background = lv.c;
  label.textContent = lv.l ? `Password strength: ${lv.l}` : '';
  label.style.color = lv.c;
}

function showErr(id, show=true) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('show', show);
}

function doLogin() {
  const email = (document.getElementById('login-email')||{}).value||'';
  const pw = (document.getElementById('login-pw')||{}).value||'';
  let valid = true;
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { showErr('login-email-err'); valid=false; } else showErr('login-email-err',false);
  if (!pw) { showErr('login-pw-err'); valid=false; } else showErr('login-pw-err',false);
  if (!valid) return;

  // Check local storage users
  let users = [];
  try { users = JSON.parse(localStorage.getItem('ts_users')||'[]'); } catch(e){}
  const found = users.find(u=>u.email===email);
  if (found) {
    state.currentUser = found;
    saveUser(found);
    closeAuth();
    updateNav();
    showToast(`Welcome back, ${found.name.split(' ')[0]}! 👋`);
    if (found.type==='business') setTimeout(()=>goPage('biz-dashboard'),500);
  } else {
    // Demo login
    const demoUser = {name:'Demo User',email,type:'consumer',state:'Lagos',joined:'May 2025',reviews:3,color:'#0A2D4A'};
    state.currentUser = demoUser;
    saveUser(demoUser);
    closeAuth();
    updateNav();
    showToast(`Welcome back! 👋`);
  }
}

function doSignup() {
  const first = (document.getElementById('su-first')||{}).value||'';
  const last = (document.getElementById('su-last')||{}).value||'';
  const email = (document.getElementById('su-email')||{}).value||'';
  const pw = (document.getElementById('su-pw')||{}).value||'';
  const type = (document.getElementById('su-type')||{}).value||'consumer';
  const st = (document.getElementById('su-state')||{}).value||'Lagos';
  const terms = (document.getElementById('su-terms')||{}).checked;
  let valid = true;
  if (!first) { showErr('su-first-err'); valid=false; } else showErr('su-first-err',false);
  if (!last) { showErr('su-last-err'); valid=false; } else showErr('su-last-err',false);
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { showErr('su-email-err'); valid=false; } else showErr('su-email-err',false);
  if (pw.length<8) { showErr('su-pw-err'); valid=false; } else showErr('su-pw-err',false);
  if (!terms) { showErr('su-terms-err'); valid=false; } else showErr('su-terms-err',false);
  if (!valid) return;

  const colors = ['#0A2D4A','#1E3A5F','#7c3aed','#be185d','#1e40af','#065f46'];
  const newUser = {
    name:`${first} ${last}`, email, type, state:st, pw,
    joined: new Date().toLocaleDateString('en-NG',{month:'long',year:'numeric'}),
    reviews:0, color: colors[Math.floor(Math.random()*colors.length)]
  };

  let users = [];
  try { users = JSON.parse(localStorage.getItem('ts_users')||'[]'); } catch(e){}
  users.push(newUser);
  try { localStorage.setItem('ts_users', JSON.stringify(users)); } catch(e){}

  state.currentUser = newUser;
  saveUser(newUser);
  closeAuth();
  updateNav();
  showToast(`Welcome to TrustSpace, ${first}! 🎉`);
  if (type==='business') setTimeout(()=>goPage('biz-dashboard'),600);
}

function doForgot() {
  const email = (document.getElementById('forgot-email')||{}).value||'';
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { showErr('forgot-err'); return; }
  showErr('forgot-err',false);
  closeAuth();
  showToast('Password reset link sent to your email 📧');
}

function socialLogin(provider) {
  const demoUser = {
    name:'Emeka Okonkwo', email:'emeka@email.com',
    type:'consumer', state:'Lagos',
    joined:'May 2025', reviews: 7,
    color: '#0A2D4A'
  };
  state.currentUser = demoUser;
  saveUser(demoUser);
  closeAuth();
  updateNav();
  showToast(`Signed in with ${provider} 👋`);
}

// ===== HOME PAGE =====
function renderHome() {
  renderCatGrid('cat-grid-home', 8);
  renderBizGrid('all');
  renderRecentReviews();
}

function renderCatGrid(containerId, limit=12) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const cats = limit ? CATEGORIES.slice(0,limit) : CATEGORIES;
  el.innerHTML = cats.map(c=>`
    <div class="cat-card" onclick="filterToCategory('${c.tag}')">
      <div class="cat-icon">${c.icon}</div>
      <div class="cat-name">${c.name}</div>
      <div class="cat-count">${c.count}</div>
    </div>
  `).join('');
}

function filterToCategory(tag) {
  state.filterTag = tag;
  goPage('home');
  renderBizGrid(tag);
  document.getElementById('biz-section').scrollIntoView({behavior:'smooth'});
}

function renderBizGrid(filter='all') {
  const el = document.getElementById('biz-grid');
  if (!el) return;
  state.filterTag = filter;
  const list = filter==='all' ? BUSINESSES : BUSINESSES.filter(b=>b.tag===filter);
  const [tlabel, tcls] = trustLabel(4.2);
  el.innerHTML = list.map(b=>{
    const [tl, tc] = trustLabel(b.rating);
    return `
    <div class="biz-card" onclick="openBiz(${b.id})">
      ${b.verified?'<div class="verified-badge">✓ Verified</div>':''}
      <div class="biz-header">
        <div class="biz-logo" style="background:${b.color}">${b.logo}</div>
        <div class="biz-info">
          <div class="biz-name">${b.name}</div>
          <div class="biz-cat">${b.cat} · ${b.city}</div>
          <div class="stars-row">
            <div class="stars">${stars(b.rating)}</div>
            <span class="rating-num">${b.rating}</span>
            <span class="review-count">${fmt(b.reviews)} reviews</span>
          </div>
        </div>
      </div>
      <div class="biz-desc">${b.desc}</div>
      <div class="biz-tags">${b.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      <div class="trust-strip">
        <span class="trust-bar-wrap"><span class="trust-bar-fill" style="width:${b.rating/5*100}%"></span></span>
        <span class="trust-label-badge ${tc}">${tl}</span>
      </div>
    </div>`;
  }).join('');
}

function renderRecentReviews() {
  const el = document.getElementById('recent-reviews');
  if (!el) return;
  const userReviews = loadReviews();
  const allR = [...userReviews.reverse(), ...ALL_REVIEWS].slice(0,6);
  el.innerHTML = allR.map(r=>reviewCardHTML(r)).join('');
}

function reviewCardHTML(r) {
  return `
  <div class="review-card">
    <div class="review-top">
      <div class="reviewer-avatar" style="background:${r.color||'#0A2D4A'}">${r.author.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
      <div>
        <div class="reviewer-name">${r.author}</div>
        <div class="reviewer-meta">${r.city} · Reviewed <strong>${r.biz}</strong> · ${r.date}</div>
      </div>
    </div>
    <div class="review-stars">${stars(r.stars, 5, 15)}</div>
    <div class="review-title">${r.title}</div>
    <div class="review-body">${r.body}</div>
    <div class="review-footer">
      <div style="font-size:12px;color:var(--text3)">👍 ${r.helpful||0} found this helpful</div>
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
        ${r.verified?'<span class="verified-purchase">✓ Verified Reviewer</span>':''}
        <button class="helpful-btn" onclick="event.stopPropagation();this.textContent='👍 Helpful!'">Helpful?</button>
      </div>
    </div>
  </div>`;
}

function filterBiz(btn, tag) {
  document.querySelectorAll('#biz-filter-bar .filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderBizGrid(tag);
}

function doSearch(q) {
  if (!q || !q.trim()) return;
  const m = BUSINESSES.find(b=>b.name.toLowerCase().includes(q.toLowerCase().trim()));
  if (m) openBiz(m.id);
  else showToast(`No businesses found for "${q}"`, '🔍');
}

// ===== BUSINESS PROFILE =====
function openBiz(id) {
  state.currentBizId = id;
  state.profileTab = 'reviews';
  const b = BUSINESSES[id];
  const [tl, tc] = trustLabel(b.rating);
  const totals = b.breakdown.reduce((a,c)=>a+c,0);
  const bizRevs = ALL_REVIEWS.filter(r=>r.bizId===id);
  const userRevs = loadReviews().filter(r=>r.bizId===id);
  const allRevs = [...userRevs.reverse(), ...bizRevs];

  document.getElementById('profile-content').innerHTML = `
    <div class="profile-hero">
      <div class="profile-hero-inner">
        <div class="back-link" onclick="goPage('home')">← Back to results</div>
        <div class="profile-top">
          <div class="profile-logo" style="background:${b.color}">${b.logo}</div>
          <div class="profile-main">
            <div class="profile-name">${b.name}${b.verified?'<span style="font-size:14px;background:var(--green);color:#fff;padding:4px 10px;border-radius:20px;margin-left:12px;vertical-align:middle;font-family:DM Sans">✓ Verified</span>':''}</div>
            <div class="profile-meta">${b.website} · ${b.cat} · ${b.city}, Nigeria · Est. ${b.founded}</div>
            <div class="profile-actions">
              <button class="btn btn-primary" onclick="goWriteReview(${id})">★ Write a Review</button>
              <button class="btn btn-ghost" style="color:#fff;border-color:rgba(255,255,255,0.3)" onclick="followBiz(this)">+ Follow</button>
              <button class="btn btn-ghost" style="color:#fff;border-color:rgba(255,255,255,0.3)" onclick="shareBiz('${b.name}')">↗ Share</button>
              ${!b.claimed?`<button class="btn btn-ghost" style="color:#fff;border-color:rgba(255,255,255,0.3)" onclick="openAuth('signup')">Claim this profile</button>`:''}
            </div>
          </div>
        </div>
        <div class="profile-score-panel">
          <div class="big-score-wrap">
            <div class="big-score-num">${b.rating}</div>
            <div class="big-stars">${Array.from({length:5},(_,i)=>`<span class="${i<Math.round(b.rating)?'big-star':'big-star empty'}">★</span>`).join('')}</div>
            <div class="big-trust-label">${tl}</div>
            <div class="big-reviews">${fmt(b.reviews)} reviews</div>
          </div>
          <div class="score-breakdown">
            ${b.breakdown.map((pct,i)=>{
              const n=5-i;
              const cnt = Math.round(b.reviews*pct/100);
              return `<div class="breakdown-row">
                <span class="bd-label">${n}★</span>
                <div class="bd-bar"><div class="bd-fill" style="width:${pct}%"></div></div>
                <span class="bd-count">${pct}%</span>
              </div>`;
            }).join('')}
          </div>
          <div class="profile-meta-cards">
            <div class="meta-card">
              <div class="meta-card-label">Location</div>
              <div class="meta-card-val">🇳🇬 ${b.city}, Nigeria</div>
            </div>
            <div class="meta-card">
              <div class="meta-card-label">Reply Rate</div>
              <div class="meta-card-val">${b.responseRate}</div>
            </div>
            <div class="meta-card">
              <div class="meta-card-label">Response Time</div>
              <div class="meta-card-val">${b.responseTime}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="profile-tabs">
      <div class="profile-tabs-inner">
        <div class="ptab active" onclick="switchProfileTab(this,'reviews-tab-content')">Reviews (${fmt(b.reviews)})</div>
        <div class="ptab" onclick="switchProfileTab(this,'about-tab-content')">About</div>
        <div class="ptab" onclick="switchProfileTab(this,'contact-tab-content')">Contact</div>
      </div>
    </div>

    <div style="max-width:1000px;margin:0 auto;padding:32px 24px;">
      <!-- Reviews Tab -->
      <div id="reviews-tab-content">
        <div class="filter-bar">
          <button class="filter-btn active" onclick="filterProfileReviews(this,'all')">All</button>
          <button class="filter-btn" onclick="filterProfileReviews(this,5)">5★</button>
          <button class="filter-btn" onclick="filterProfileReviews(this,4)">4★</button>
          <button class="filter-btn" onclick="filterProfileReviews(this,3)">3★</button>
          <button class="filter-btn" onclick="filterProfileReviews(this,'low')">1-2★</button>
          <select class="filter-select"><option>Most Recent</option><option>Most Helpful</option><option>Highest Rated</option><option>Lowest Rated</option></select>
        </div>
        <div class="review-list" id="profile-reviews">
          ${allRevs.length ? allRevs.map(r=>reviewCardHTML(r)).join('') : `<div style="text-align:center;padding:40px;color:var(--text3)">No reviews yet. <a onclick="goWriteReview(${id})" style="color:var(--green);cursor:pointer">Be the first!</a></div>`}
        </div>
      </div>

      <!-- About Tab -->
      <div id="about-tab-content" class="hidden">
        <div style="background:#fff;border:1px solid var(--border);border-radius:var(--radius-lg);padding:28px;margin-bottom:16px;">
          <h3 style="font-family:'Syne',sans-serif;font-weight:700;font-size:18px;margin-bottom:14px;">About ${b.name}</h3>
          <p style="font-size:15px;color:var(--text2);line-height:1.7;">${b.about}</p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:14px;">
          <div class="meta-card"><div class="meta-card-label">Founded</div><div class="meta-card-val">${b.founded}</div></div>
          <div class="meta-card"><div class="meta-card-label">Employees</div><div class="meta-card-val">${b.employees}</div></div>
          <div class="meta-card"><div class="meta-card-label">Category</div><div class="meta-card-val">${b.cat}</div></div>
          <div class="meta-card"><div class="meta-card-label">Headquarters</div><div class="meta-card-val">${b.city}, Nigeria</div></div>
          <div class="meta-card"><div class="meta-card-label">Website</div><div class="meta-card-val"><a href="https://${b.website}" target="_blank" style="color:var(--green)">${b.website}</a></div></div>
          <div class="meta-card"><div class="meta-card-label">Profile Status</div><div class="meta-card-val">${b.claimed?'✓ Claimed':'Unclaimed'}</div></div>
        </div>
      </div>

      <!-- Contact Tab -->
      <div id="contact-tab-content" class="hidden">
        <div style="background:#fff;border:1px solid var(--border);border-radius:var(--radius-lg);padding:28px;">
          <h3 style="font-family:'Syne',sans-serif;font-weight:700;font-size:18px;margin-bottom:20px;">Contact Information</h3>
          <div style="display:flex;flex-direction:column;gap:14px;">
            <div style="display:flex;align-items:flex-start;gap:16px;padding:14px;background:var(--bg2);border-radius:8px;">
              <span style="font-size:20px">📍</span>
              <div><div style="font-size:12px;color:var(--text3);margin-bottom:3px">Address</div><div style="font-size:14px;font-weight:500">${b.address}</div></div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:16px;padding:14px;background:var(--bg2);border-radius:8px;">
              <span style="font-size:20px">📞</span>
              <div><div style="font-size:12px;color:var(--text3);margin-bottom:3px">Phone</div><div style="font-size:14px;font-weight:500">${b.phone}</div></div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:16px;padding:14px;background:var(--bg2);border-radius:8px;">
              <span style="font-size:20px">🌐</span>
              <div><div style="font-size:12px;color:var(--text3);margin-bottom:3px">Website</div><div style="font-size:14px;font-weight:500"><a href="https://${b.website}" target="_blank" style="color:var(--green)">${b.website}</a></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  goPage('profile-page');
}

function switchProfileTab(btn, tabId) {
  document.querySelectorAll('.profile-tabs-inner .ptab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  ['reviews-tab-content','about-tab-content','contact-tab-content'].forEach(id=>{
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden', id!==tabId);
  });
}

function filterProfileReviews(btn, filter) {
  document.querySelectorAll('#profile-reviews').closest ? null : null;
  document.querySelectorAll('.filter-bar .filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const b = BUSINESSES[state.currentBizId];
  let revs = ALL_REVIEWS.filter(r=>r.bizId===state.currentBizId);
  const userRevs = loadReviews().filter(r=>r.bizId===state.currentBizId);
  const allRevs = [...userRevs.reverse(), ...revs];
  const filtered = filter==='all' ? allRevs :
    filter==='low' ? allRevs.filter(r=>r.stars<=2) :
    allRevs.filter(r=>r.stars===filter);
  const el = document.getElementById('profile-reviews');
  if (el) el.innerHTML = filtered.length ? filtered.map(r=>reviewCardHTML(r)).join('') :
    '<div style="text-align:center;padding:40px;color:var(--text3)">No reviews for this rating.</div>';
}

function followBiz(btn) {
  if (!state.currentUser) { openAuth('signup'); return; }
  btn.textContent = '✓ Following';
  btn.style.color = 'var(--green-mid)';
  btn.style.borderColor = 'var(--green)';
  showToast('Following this business!');
}

function shareBiz(name) {
  if (navigator.clipboard) navigator.clipboard.writeText(window.location.href).then(()=>showToast(`Link copied! Share ${name}'s profile`, '🔗'));
  else showToast('Link copied!', '🔗');
}

// ===== WRITE REVIEW =====
function goWriteReview(bizId) {
  if (!state.currentUser) { openAuth('signup'); return; }
  state.currentBizId = bizId;
  state.currentStars = 0;
  const b = bizId!=null ? BUSINESSES[bizId] : null;
  const wr = document.getElementById('write-review-content');
  if (wr && b) {
    document.getElementById('wr-biz-display').innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;padding:14px;background:var(--bg2);border-radius:8px;margin-bottom:20px;border:1px solid var(--border);">
        <div style="width:44px;height:44px;border-radius:10px;background:${b.color};display:flex;align-items:center;justify-content:center;font-weight:800;color:#fff;font-family:'Syne',sans-serif">${b.logo}</div>
        <div><div style="font-weight:700;font-size:15px">${b.name}</div><div style="font-size:13px;color:var(--text3)">${b.cat} · ${b.city}</div></div>
      </div>`;
    document.getElementById('wr-biz-name').value = b.name;
    document.getElementById('wr-biz-name').readOnly = true;
  }
  goPage('write-review');
}

function setStars(n) {
  state.currentStars = n;
  const labels = ['','Terrible — 1/5','Poor — 2/5','Average — 3/5','Good — 4/5','Excellent — 5/5'];
  const el = document.getElementById('star-rating-label');
  if (el) el.textContent = labels[n];
  document.querySelectorAll('.star-pick').forEach(s=>{
    s.classList.toggle('active', parseInt(s.dataset.v)<=n);
  });
}

function submitReview() {
  if (!state.currentUser) { openAuth('login'); return; }
  const biz = (document.getElementById('wr-biz-name')||{}).value||'';
  const title = (document.getElementById('wr-title')||{}).value||'';
  const body = (document.getElementById('wr-body')||{}).value||'';
  if (!biz || !title || !body || !state.currentStars) {
    showToast('Please complete all required fields', '⚠️'); return;
  }
  if (body.length < 50) { showToast('Review must be at least 50 characters', '⚠️'); return; }
  const b = BUSINESSES.find(b2=>b2.name.toLowerCase()===biz.toLowerCase());
  const newR = {
    id: Date.now(), bizId: b ? b.id : -1, biz, author: state.currentUser.name.split(' ')[0]+' '+state.currentUser.name.split(' ').pop()[0]+'.',
    city: state.currentUser.state||'Nigeria', stars: state.currentStars, title, body,
    date: 'Just now', color: state.currentUser.color||'#0A2D4A',
    helpful: 0, verified: true
  };
  const reviews = loadReviews();
  reviews.push(newR);
  saveReviews(reviews);
  state.currentUser.reviews = (state.currentUser.reviews||0)+1;
  saveUser(state.currentUser);
  showToast('Review submitted! Thank you 🎉');
  setTimeout(()=>{ goPage('home'); renderHome(); }, 800);
}

// ===== USER PROFILE =====
function renderUserProfile() {
  const u = state.currentUser;
  if (!u) { openAuth('login'); return; }
  const reviews = loadReviews().filter(r=>r.author.startsWith(u.name.split(' ')[0]));
  const initials = u.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  const el = document.getElementById('user-profile-content');
  if (!el) return;
  el.innerHTML = `
    <div class="user-profile-wrap">
      <div class="user-profile-header">
        <div class="user-big-avatar" style="background:${u.color||'#0A2D4A'}">${initials}</div>
        <div class="user-profile-info">
          <div class="user-profile-name">${u.name}</div>
          <div class="user-profile-meta">🇳🇬 ${u.state} · Member since ${u.joined} · ${u.type==='business'?'Business Account':'Consumer Account'}</div>
          <div class="user-stats">
            <div class="user-stat"><div class="us-num">${u.reviews||0}</div><div class="us-lbl">Reviews</div></div>
            <div class="user-stat"><div class="us-num">0</div><div class="us-lbl">Helpful votes</div></div>
            <div class="user-stat"><div class="us-num">0</div><div class="us-lbl">Following</div></div>
          </div>
        </div>
        <button class="btn btn-ghost" onclick="goPage('settings')">Edit Profile</button>
      </div>
      <div class="profile-tabs-user">
        <div class="ptab-user active" onclick="switchUserTab(this,'ut-reviews')">My Reviews (${reviews.length})</div>
        <div class="ptab-user" onclick="switchUserTab(this,'ut-following')">Following</div>
        <div class="ptab-user" onclick="switchUserTab(this,'ut-settings')">Account</div>
      </div>
      <div id="ut-reviews">
        ${reviews.length ? `<div class="review-list">${reviews.map(r=>reviewCardHTML(r)).join('')}</div>`
          : `<div style="text-align:center;padding:60px;color:var(--text3)">
              <div style="font-size:48px;margin-bottom:16px">✍️</div>
              <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:20px;margin-bottom:8px">No reviews yet</div>
              <p style="margin-bottom:20px">Share your experience with Nigerian businesses</p>
              <button class="btn btn-primary" onclick="goPage('write-review')">Write Your First Review</button>
            </div>`}
      </div>
      <div id="ut-following" class="hidden">
        <div style="text-align:center;padding:60px;color:var(--text3)">
          <div style="font-size:48px;margin-bottom:16px">🔔</div>
          <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:20px;margin-bottom:8px">Not following anyone yet</div>
          <p>Follow businesses to get notified of new reviews</p>
        </div>
      </div>
      <div id="ut-settings" class="hidden">
        <div style="background:#fff;border:1px solid var(--border);border-radius:var(--radius-lg);padding:28px;max-width:500px;">
          <h3 style="font-family:'Syne',sans-serif;font-weight:700;margin-bottom:20px">Account Details</h3>
          <div class="form-section"><label class="form-label">Full Name</label><input class="form-input" value="${u.name}" id="edit-name"></div>
          <div class="form-section"><label class="form-label">Email</label><input class="form-input" value="${u.email}" id="edit-email"></div>
          <div class="form-section"><label class="form-label">State</label>
            <select class="form-select" id="edit-state">
              ${['Lagos','Abuja (FCT)','Rivers','Kano','Oyo','Anambra','Delta','Enugu','Kaduna','Ondo'].map(s=>`<option ${s===u.state?'selected':''}>${s}</option>`).join('')}
            </select>
          </div>
          <button class="btn btn-primary" onclick="saveSettings()">Save Changes</button>
        </div>
      </div>
    </div>
  `;
}

function switchUserTab(btn, tabId) {
  document.querySelectorAll('.ptab-user').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  ['ut-reviews','ut-following','ut-settings'].forEach(id=>{
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden', id!==tabId);
  });
}

function saveSettings() {
  const name = document.getElementById('edit-name').value;
  const email = document.getElementById('edit-email').value;
  const st = document.getElementById('edit-state').value;
  if (state.currentUser) {
    state.currentUser.name = name;
    state.currentUser.email = email;
    state.currentUser.state = st;
    saveUser(state.currentUser);
    updateNav();
    showToast('Profile updated ✓');
  }
}

// ===== BUSINESS DASHBOARD =====
function renderBizDashboard() {
  const u = state.currentUser;
  const name = u ? u.name : 'Your Business';
  const el = document.getElementById('biz-dash-content');
  if (!el) return;
  el.innerHTML = `
    <div class="dash-main">
      <div class="dash-header">
        <div class="dash-title">Business Dashboard</div>
        <div class="dash-sub">Welcome back${u?', '+u.name.split(' ')[0]:''}! Here's your overview.</div>
      </div>
      <div id="dash-panel-overview">
        <div class="stats-grid">
          <div class="stat-card"><div class="stat-card-label">Total Reviews</div><div class="stat-card-val">1,248</div><div class="stat-card-change change-up">↑ 12% this month</div></div>
          <div class="stat-card"><div class="stat-card-label">TrustScore</div><div class="stat-card-val">4.3</div><div class="stat-card-change change-up">↑ 0.2 pts</div></div>
          <div class="stat-card"><div class="stat-card-label">Profile Views</div><div class="stat-card-val">28,400</div><div class="stat-card-change change-up">↑ 8% this week</div></div>
          <div class="stat-card"><div class="stat-card-label">Reply Rate</div><div class="stat-card-val">82%</div><div class="stat-card-change change-down">↓ 3%</div></div>
        </div>
        <div class="dash-grid">
          <div class="dash-card">
            <div class="dash-card-title">Recent Reviews to Action</div>
            ${ALL_REVIEWS.slice(0,4).map(r=>`
              <div class="mini-review">
                <div class="mini-review-top">
                  <span class="mini-reviewer">${r.author} — ${stars(r.stars,5,12)}</span>
                  <span class="mini-date">${r.date}</span>
                </div>
                <div class="mini-title">${r.title}</div>
                <button class="respond-btn" onclick="showToast('Reply feature coming in Pro plan!','💬')">Reply to this review</button>
              </div>
            `).join('')}
          </div>
          <div>
            <div class="dash-card" style="margin-bottom:16px">
              <div class="dash-card-title">Rating Breakdown</div>
              ${[5,4,3,2,1].map(n=>{
                const pct = [42,28,16,8,6][5-n];
                return `<div class="breakdown-row"><span class="bd-label">${n}★</span><div class="bd-bar"><div class="bd-fill" style="width:${pct}%"></div></div><span class="bd-count">${pct}%</span></div>`;
              }).join('')}
            </div>
            <div class="dash-card">
              <div class="dash-card-title">Quick Actions</div>
              <button class="btn btn-primary" style="width:100%;margin-bottom:10px;justify-content:center;" onclick="showToast('Opening invite tool...','📧')">📧 Invite Customers to Review</button>
              <button class="btn btn-ghost" style="width:100%;margin-bottom:10px;justify-content:center;" onclick="showToast('Generating widget code...','🔧')">🔧 Get Review Widget</button>
              <button class="btn btn-ghost" style="width:100%;justify-content:center;" onclick="showToast('Downloading report...','📊')">📊 Download Report</button>
            </div>
          </div>
        </div>
      </div>

      <div id="dash-panel-profile" class="hidden">
        <div class="dash-card">
          <div class="dash-card-title">Business Profile</div>
          <div class="form-section"><label class="form-label">Business Name</label><input class="form-input" value="${u?u.name.replace(' ','')+' Ltd':'Your Business'}" id="bp-name"></div>
          <div class="form-section"><label class="form-label">Website</label><input class="form-input" placeholder="https://yoursite.com" id="bp-website"></div>
          <div class="form-section"><label class="form-label">Description</label><textarea class="form-textarea" id="bp-desc" placeholder="Describe your business..."></textarea></div>
          <div class="form-section"><label class="form-label">Category</label>
            <select class="form-select">
              ${CATEGORIES.map(c=>`<option>${c.name}</option>`).join('')}
            </select>
          </div>
          <button class="btn btn-primary" onclick="showToast('Business profile saved ✓')">Save Profile</button>
        </div>
      </div>

      <div id="dash-panel-reviews" class="hidden">
        <div class="review-list">
          ${ALL_REVIEWS.map(r=>`
            <div class="review-card">
              <div class="review-top">
                <div class="reviewer-avatar" style="background:${r.color||'#0A2D4A'}">${r.author.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
                <div>
                  <div class="reviewer-name">${r.author}</div>
                  <div class="reviewer-meta">${r.city} · ${r.date}</div>
                </div>
              </div>
              <div class="review-stars">${stars(r.stars,5,15)}</div>
              <div class="review-title">${r.title}</div>
              <div class="review-body">${r.body}</div>
              <div style="margin-top:12px"><button class="respond-btn" onclick="showToast('Reply posted! (Pro feature)','💬')">Reply publicly</button></div>
            </div>
          `).join('')}
        </div>
      </div>

      <div id="dash-panel-analytics" class="hidden">
        <div class="stats-grid">
          <div class="stat-card"><div class="stat-card-label">This Month Reviews</div><div class="stat-card-val">148</div><div class="stat-card-change change-up">↑ 24%</div></div>
          <div class="stat-card"><div class="stat-card-label">Avg Rating</div><div class="stat-card-val">4.3★</div><div class="stat-card-change change-up">↑ trending</div></div>
          <div class="stat-card"><div class="stat-card-label">Profile Clicks</div><div class="stat-card-val">5,840</div><div class="stat-card-change change-up">↑ 15%</div></div>
          <div class="stat-card"><div class="stat-card-label">Conversion Rate</div><div class="stat-card-val">3.2%</div><div class="stat-card-change change-down">↓ 0.4%</div></div>
        </div>
        <div class="dash-card" style="margin-top:16px">
          <div class="dash-card-title">Analytics — Upgrade to Pro</div>
          <div style="text-align:center;padding:40px;color:var(--text3)">
            <div style="font-size:48px;margin-bottom:16px">📈</div>
            <p style="margin-bottom:20px">Detailed charts, trend analysis and competitor benchmarks available on the Pro plan</p>
            <button class="btn btn-primary" onclick="showToast('Redirecting to upgrade...','⭐')">Upgrade to Pro — ₦15,000/mo</button>
          </div>
        </div>
      </div>

      <div id="dash-panel-settings" class="hidden">
        <div class="dash-card" style="max-width:500px">
          <div class="dash-card-title">Account Settings</div>
          <div class="form-section"><label class="form-label">Contact Name</label><input class="form-input" value="${u?u.name:''}"></div>
          <div class="form-section"><label class="form-label">Email</label><input class="form-input" value="${u?u.email:''}"></div>
          <div class="form-section"><label class="form-label">Phone</label><input class="form-input" placeholder="+234 800 000 0000"></div>
          <div class="form-section">
            <label class="form-label">Plan</label>
            <div style="background:var(--bg2);border-radius:8px;padding:14px;display:flex;justify-content:space-between;align-items:center;">
              <div><div style="font-weight:600">Free Plan</div><div style="font-size:13px;color:var(--text3)">Basic profile + reviews</div></div>
              <button class="btn btn-primary" onclick="showToast('Upgrade flow coming soon!','⭐')">Upgrade</button>
            </div>
          </div>
          <button class="btn btn-primary" onclick="showToast('Settings saved ✓')">Save Settings</button>
        </div>
      </div>
    </div>
  `;
}

function switchDashPanel(btn, panel) {
  document.querySelectorAll('.sidebar-item').forEach(i=>i.classList.remove('active'));
  btn.classList.add('active');
  ['overview','profile','reviews','analytics','settings'].forEach(p=>{
    const el = document.getElementById(`dash-panel-${p}`);
    if (el) el.classList.toggle('hidden', p!==panel);
  });
}

// ===== SETTINGS PAGE =====
function renderSettings() {
  const u = state.currentUser;
  const el = document.getElementById('settings-content');
  if (!el || !u) return;
  el.innerHTML = `
    <div style="max-width:600px;margin:0 auto;padding:48px 24px;">
      <div class="page-title">Settings</div>
      <div class="page-sub">Manage your TrustSpace account</div>
      <div style="display:flex;flex-direction:column;gap:20px;margin-top:24px;">
        <div style="background:#fff;border:1px solid var(--border);border-radius:var(--radius-lg);padding:24px;">
          <h3 style="font-family:'Syne',sans-serif;font-weight:700;margin-bottom:18px;">Personal Information</h3>
          <div class="form-section"><label class="form-label">Full Name</label><input class="form-input" value="${u.name}" id="s-name"></div>
          <div class="form-section"><label class="form-label">Email</label><input class="form-input" value="${u.email}" id="s-email"></div>
          <div class="form-section"><label class="form-label">State</label>
            <select class="form-select" id="s-state">
              ${['Lagos','Abuja (FCT)','Rivers','Kano','Oyo','Anambra','Delta','Enugu'].map(s=>`<option ${s===u.state?'selected':''}>${s}</option>`).join('')}
            </select>
          </div>
          <button class="btn btn-primary" onclick="saveSett()">Save Changes</button>
        </div>
        <div style="background:#fff;border:1px solid var(--border);border-radius:var(--radius-lg);padding:24px;">
          <h3 style="font-family:'Syne',sans-serif;font-weight:700;margin-bottom:18px;">Notifications</h3>
          ${[['Review replies','Get notified when someone replies to your review',true],['Business updates','Updates from businesses you follow',true],['Weekly digest','Weekly summary of top Nigerian reviews',false]].map(([t,d,c])=>`
            <div style="display:flex;justify-content:space-between;align-items:flex-start;padding:12px 0;border-bottom:1px solid var(--border);">
              <div><div style="font-weight:600;font-size:14px">${t}</div><div style="font-size:13px;color:var(--text3);margin-top:2px">${d}</div></div>
              <label style="position:relative;display:inline-block;width:42px;height:22px;flex-shrink:0;margin-left:16px;">
                <input type="checkbox" ${c?'checked':''} style="opacity:0;width:0;height:0">
                <span style="position:absolute;cursor:pointer;inset:0;background:${c?'var(--green)':'var(--border)'};border-radius:22px;transition:0.2s;"></span>
                <span style="position:absolute;content:'';height:18px;width:18px;left:${c?'22':'2'}px;top:2px;background:#fff;border-radius:50%;transition:0.2s;"></span>
              </label>
            </div>`).join('')}
        </div>
        <div style="background:#fff;border:1.5px solid #fee2e2;border-radius:var(--radius-lg);padding:24px;">
          <h3 style="font-family:'Syne',sans-serif;font-weight:700;margin-bottom:12px;color:#dc2626">Danger Zone</h3>
          <p style="font-size:14px;color:var(--text2);margin-bottom:16px">Deleting your account is permanent and cannot be undone.</p>
          <button class="btn" style="background:#fee2e2;color:#dc2626;border:1px solid #fecaca" onclick="showToast('Account deletion requires email confirmation','⚠️')">Delete Account</button>
        </div>
      </div>
    </div>
  `;
}

function saveSett() {
  if (state.currentUser) {
    state.currentUser.name = document.getElementById('s-name').value;
    state.currentUser.email = document.getElementById('s-email').value;
    state.currentUser.state = document.getElementById('s-state').value;
    saveUser(state.currentUser);
    updateNav();
    showToast('Settings saved ✓');
  }
}

// ===== FOR BUSINESS PAGE =====
function renderForBusiness() {
  // Static — already in HTML
}

// ===== INIT =====
window.addEventListener('DOMContentLoaded', ()=>{
  state.currentUser = loadUser();
  updateNav();
  renderHome();
  renderCatGrid('cats-full', 0);

  // Page navigation clicks
  document.querySelectorAll('[data-page]').forEach(el=>{
    el.addEventListener('click', ()=>goPage(el.dataset.page));
  });
});

// Make functions global
window.openAuth=openAuth; window.closeAuth=closeAuth; window.switchAuth=switchAuth;
window.doLogin=doLogin; window.doSignup=doSignup; window.doForgot=doForgot;
window.socialLogin=socialLogin; window.logout=logout;
window.togglePw=togglePw; window.checkStrength=checkStrength;
window.goPage=goPage; window.goHome=()=>goPage('home');
window.openBiz=openBiz; window.filterBiz=filterBiz; window.doSearch=doSearch;
window.setStars=setStars; window.submitReview=submitReview;
window.filterToCategory=filterToCategory;
window.goWriteReview=goWriteReview;
window.switchProfileTab=switchProfileTab;
window.filterProfileReviews=filterProfileReviews;
window.followBiz=followBiz; window.shareBiz=shareBiz;
window.renderUserProfile=renderUserProfile;
window.switchUserTab=switchUserTab;
window.saveSettings=saveSettings; window.saveSett=saveSett;
window.renderBizDashboard=renderBizDashboard;
window.switchDashPanel=switchDashPanel;
window.renderSettings=renderSettings;
window.showToast=showToast;
