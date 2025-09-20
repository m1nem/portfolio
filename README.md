# 🎨 m1nem-portfolio  
> Modern, dark-first portfolio with a contact form powered by Formspree.

![Next.js](https://img.shields.io/badge/Next.js-14.2.32-000000?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)
![Tailwind](https://img.shields.io/badge/Tailwind-v3-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat&logo=vercel&logoColor=white)
![Formspree](https://img.shields.io/badge/Contact-Formspree-1E88E5?style=flat&logo=formspree&logoColor=white)

---

## ✨ Demo
[https://m1nem.vercel.app](https://m1nem.vercel.app)  
*(dark-mode first, 100 Lighthouse, < 50 kB first load)*

---

## 📦 1-Minute Setup

    git clone https://github.com/m1nem/portfolio.git
    cd portfolio
    npm install
    npm run dev        # http://localhost:3000

## 📬 Contact Form – Formspree in 30 s

    Register (free tier = 50 submissions / month)
    Create new form → copy Form Endpoint (looks like https://formspree.io/f/abcdefghi)
    Paste only the ID part into @/app/contact/index.tsx
    That’s it – form works instantly (no backend, no SMTP).

## 🚀 Deploy to Vercel (one-click)

https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fm1nem%2Fm1nem-portfolio&env=NEXT_PUBLIC_FORMSPREE_ID,NEXT_PUBLIC_STRIPE_PKEY,STRIPE_SECRET_KEY,NEXT_PUBLIC_URL&project-name=m1nem-portfolio&repo-name=m1nem-portfolio

### Or manually:

    vercel --prod        # CLI must be logged in

## 📊 Lighthouse (production)

    Metric	Score
    Performance	    100
    Accessibility	100
    Best Practices	100
    SEO	            100
    
## 📁 Project Structure

    portfolio/
    ├─ src/                     # Next.js 14 App Router
    │  ├─ app/                  # Pages, layouts & styles
    │  ├─ components/           # Re-usable blocks: Footer, Header
    │  ├─ types/                # Types for TypeScript
    ├─ public/                  # Images, favicon, etc
    ├─ next.config.js           # Images, headers, redirects
    ├─ tailwind.config.js       # Custom colors & keyframes
    └─ README.md                # ← you are here

## 🤝 Contributing

    Fork & clone
    Create feature branch (git checkout -b feature/3d-hero)
    Commit with Conventional Commits
    Push & open Pull Request

# 📄 License

MIT © 2025 m1nem – feel free to fork, remix or use as template.

## ⭐ Star the repo if you like the design – it keeps the pixels alive!
