# ★ TrustSpace — Nigeria's Most Trusted Review Platform

A full-featured business review platform built specifically for the Nigerian market. The Trustpilot of Nigeria.

![TrustSpace](https://img.shields.io/badge/TrustSpace-Nigeria-008751?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🚀 Live Demo

Deploy to Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/trustspace)

## ✨ Features

### Consumer Features
- **Homepage** — Hero search, category browser, top-rated businesses, recent reviews
- **Business Profiles** — Full profiles with rating breakdown, reviews, about, contact tabs
- **Write Reviews** — Star rating, full review form with Nigerian states
- **User Profile** — Review history, account settings, follow businesses
- **Sign Up / Sign In** — Email + social auth (Google, Facebook), password strength meter, forgot password
- **Settings** — Edit profile, notification preferences

### Business Features
- **Business Dashboard** — Overview stats, recent reviews, quick actions
- **Review Management** — View and respond to reviews
- **Analytics** — Rating breakdown, profile views, conversion tracking
- **Business Profile Editor** — Edit business info, description, category
- **For Business Page** — Features overview, pricing (₦0/₦15,000/Custom), FAQ

### Platform Features
- 12 business listings (Paystack, Jumia, GTBank, Konga, GIG Logistics, Chowdeck, MTN, Flutterwave, Opay, Chicken Republic, Airtel, Bolt)
- 8+ sample reviews with verified badges
- Filter by category, sort by rating
- Search across all businesses
- Toast notifications
- Persistent auth via localStorage
- NDPR & FCCPC compliance messaging

## 📁 Project Structure

```
trustspace/
├── index.html          # Main application (single-page app)
├── css/
│   └── style.css       # All styles
├── js/
│   └── app.js          # All data, state & logic
├── vercel.json         # Vercel deployment config
└── README.md
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and click **New Project**
3. Import your GitHub repository
4. Vercel auto-detects the config — click **Deploy**
5. Your site is live in ~30 seconds ✓

### Deploy to GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Set Source to **Deploy from a branch**
3. Select `main` branch, `/ (root)` folder
4. Click **Save** — live at `https://yourusername.github.io/trustspace`

### Run Locally

```bash
# Option 1: Python (no install needed)
python3 -m http.server 3000

# Option 2: Node.js
npx serve .

# Option 3: VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

Then open `http://localhost:3000`

## 🇳🇬 Nigerian Market Details

- **Businesses:** Paystack, Jumia, GTBank, Konga, GIG Logistics, Chowdeck, MTN, Flutterwave, Opay, Chicken Republic, Airtel, Bolt
- **Pricing:** All in Nigerian Naira (₦)
- **States:** All 36 Nigerian states + FCT in review forms
- **Compliance:** NDPR, FCCPC, CBN guidelines
- **Cities:** Lagos, Abuja, Port Harcourt, Enugu, Kano

## 🔧 Customisation

### Adding a Business
In `js/app.js`, add to the `BUSINESSES` array:
```javascript
{
  id: 12, name: 'Your Business', cat: 'Category', tag: 'finance',
  logo: 'YB', color: '#123456', rating: 4.5, reviews: 1000,
  desc: 'Your business description.',
  tags: ['Tag1', 'Tag2'], verified: true, city: 'Lagos', state: 'Lagos',
  website: 'yourbusiness.com', founded: '2020', employees: '50-100',
  about: 'Full about text...',
  breakdown: [60, 20, 10, 5, 5],
  phone: '+234 800 000 0000',
  address: 'Your Address, Lagos',
  claimed: true,
  responseRate: '90%',
  responseTime: 'Within 24 hours'
}
```

### Changing Colors
In `css/style.css`, update the `:root` variables:
```css
:root {
  --green: #00b67a;      /* Primary green */
  --green-dark: #00935f; /* Hover state */
  --accent: #0f1923;     /* Dark navy */
}
```

### Adding Auth Backend
Replace the localStorage auth in `js/app.js` with your backend:
```javascript
async function doLogin() {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' }
  });
  const user = await res.json();
  // ... handle user
}
```

## 📋 Roadmap

- [ ] Backend API (Node.js/Express or Supabase)
- [ ] Real authentication (JWT)
- [ ] Database (PostgreSQL)
- [ ] Email notifications
- [ ] SMS via Termii or Sendchamp
- [ ] Paystack integration for Pro plans
- [ ] Admin moderation panel
- [ ] Mobile app (React Native)
- [ ] WhatsApp review collection

## 📄 License

MIT License — free to use, modify and distribute.

---

Built with ❤️ in Lagos, Nigeria 🇳🇬
