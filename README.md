---

# 🛒 u-sell-it-demo

A lightweight, modern e-commerce marketplace prototype built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. 

This project acts as an architectural blueprint and UI sandbox for the future **U‑Sell‑It** platform. It integrates with the **Platzi Fake Store API** to handle mock product cycles, dynamic routing, and responsive layouts. The foundational authentication user interfaces—including user login, registration, and account recovery—are near completion.

---

## 🛠 Tech Stack

* **Frontend:** React 18 & TypeScript
* **Build Tool:** Vite (Optimized HMR & production bundling)
* **Styling:** Tailwind CSS v3 (Strict utility-first workflow)
* **Data Layer:** Platzi Fake Store Rest API

---

## 📁 Core Architecture

```text
u-sell-it-demo/
├── src/
│   ├── assets/       # Static media assets (Logos, graphics)
│   ├── components/   # Reusable UI elements (Modals, Footers, Cards)
│   ├── layout/       # Global application structural layouts
│   ├── pages/        # View components (Login, Registration, Password Reset)
│   ├── router/       # Centralized client-side routing logic
│   └── index.css     # Tailwind injections

```

---

## 🎨 Styling Principles

This project enforces a highly maintainable, modern styling paradigm:

* **Zero Custom CSS:** No component-level `.css` modules or nested stylesheets.
* **Utility-First:** 100% of the interface is driven by Tailwind CSS design tokens.
* **Responsive Architecture:** Fully fluid UI configured specifically to handle complex grid-to-mobile layouts cleanly.

---

## 🌐 API Integration

Data fetching is modularized to mimic real-world production environments.

* **Base Endpoint:** `https://api.escuelajs.co/api/v1/`
* **Target Resources:** `/products`, `/categories`, `/users`

```typescript
// Sample asynchronous ingestion layout utilized across endpoints
const response = await fetch("[https://api.escuelajs.co/api/v1/products](https://api.escuelajs.co/api/v1/products)");
const data = await response.json();

```

---

## 🚀 Getting Started (Local Development)

To spin up a local instance of the application:

1. **Clone the repository:**
```bash
git clone [https://github.com/KingNeoIV/u-sell-it-demo.git](https://github.com/KingNeoIV/u-sell-it-demo.git)
cd u-sell-it-demo

```


2. **Install dependencies:**
```bash
npm install

```


3. **Launch the development server:**
```bash
npm run dev

```



---

## 📦 Production & Deployment

### Building Locally

To generate a compiled, production-ready bundle inside the `/dist` directory:

```bash
npm run build

```

### GitHub Pages Deployment (Upcoming)

Once prototyping wraps up, the demo will be hosted via GitHub Pages. The automation pipeline will utilize the `gh-pages` deployment suite:

```json
"homepage": "[https://KingNeoIV.github.io/u-sell-it-demo](https://KingNeoIV.github.io/u-sell-it-demo)",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

```

---

## 🏁 Development Roadmap

* [x] Scaffold scalable React + TS + Tailwind architecture
* [x] Complete User Login UI layout
* [x] Complete User Registration UI layout
* [x] Complete Forgot Password / Account Recovery UI elements
* [ ] Implement global state management/custom hooks for async API fetching
* [ ] Connect dynamic product grid and view filtering layouts
* [ ] Integrate full user sign-up/login request flows with backend API
* [ ] Deploy live demonstration client via GitHub Pages
