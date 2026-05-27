# ⭐ **u-sell-it-demo**

A lightweight marketplace demo built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.  
This project fetches real product data from the **Platzi Fake Store API** and displays it using a clean, responsive UI.

The goal of this demo is to explore UI patterns, API integration, and component structure for the future **U‑Sell‑It** application.

---

# 🌍 **Live Demo**

The project is deployed on GitHub Pages:

```
https://YOUR_USERNAME.github.io/u-sell-it-demo
```

Replace `YOUR_USERNAME` with the GitHub account hosting the repo.

---

# 🛠 **Tech Stack**

- **React 18**  
- **TypeScript**  
- **Vite** (fast dev server + optimized build)  
- **Tailwind CSS v3** (utility‑first styling)  
- **Platzi Fake Store API** (product data source)

---

# 🚀 **Running the Project**

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/u-sell-it-demo
cd u-sell-it-demo
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173/
```

---

# 🌐 **API — Platzi Fake Store**

This demo uses the Fake Store API:

```
https://api.escuelajs.co/api/v1/
```

Common endpoints:

- Products  
  `https://api.escuelajs.co/api/v1/products`
- Categories  
  `https://api.escuelajs.co/api/v1/categories`
- Users  
  `https://api.escuelajs.co/api/v1/users`

Example request:

```ts
const response = await fetch("https://api.escuelajs.co/api/v1/products");
const products = await response.json();
```

API logic is organized inside:

```
src/services/
```

---

# 📁 **Project Structure**

```
u-sell-it-demo/
│
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
│
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    │
    ├── components/
    ├── services/
    ├── hooks/
    ├── types/
    └── views/
```

---

# 🎨 **Styling**

This project uses **Tailwind CSS only**.

- No component‑level `.css` files  
- No nested CSS  
- No Vite template styles  

All UI is built using Tailwind utility classes.

---

# 📦 **Build**

Create a production build:

```bash
npm run build
```

Output is generated in:

```
dist/
```

---

# 🌍 **Deploying to GitHub Pages**

Deployment uses the `gh-pages` package.

Install (if not already installed):

```bash
npm install -D gh-pages
```

Add to `package.json`:

```json
"homepage": "https://YOUR_USERNAME.github.io/u-sell-it-demo",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Deploy:

```bash
npm run deploy
```

---

# 🏁 **Roadmap**

Planned enhancements:

- Product listing grid  
- Product detail modal  
- Category filtering  
- User authentication flow  
- Dashboard UI  
- Mobile‑first responsive layout  

---