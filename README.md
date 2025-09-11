
# My Portfolio App

A modern personal portfolio built with **Next.js**, **TypeScript**, and **Tailwind CSS**, deployed on **Firebase Hosting**.

---

## 🔗 Live Demo

[Visit Live Portfolio](https://persona-portfolio-cm5es.web.app)

---

## 🌐 Overview

This project is a minimalistic starter for a personal portfolio website.  
It’s designed for easy customization, clean design, and fast deployment using Firebase.

---

## 🧰 Tech Stack

- Next.js — React framework with SSR/SSG  
- TypeScript — Static type safety  
- Tailwind CSS — Utility-first styling  
- Firebase Hosting — For deployment  
- Node.js / npm — Dependency & build management  

---

## ✨ Features

- Responsive, clean portfolio layout  
- Built using TypeScript + Tailwind for maintainability  
- Firebase Hosting configuration is already integrated  
- Easy to update: you can edit “About”, “Projects”, “Contact” sections easily  

---

## 🚀 Getting Started

Follow these steps to run and modify locally:

```bash
# 1. Clone the repository
git clone https://github.com/harishgg20/my-portfolio-app.git
cd my-portfolio-app

# 2. Install dependencies
npm install
# or
yarn install

# 3. Run in development mode
npm run dev


Open http://localhost:3000 in your browser to view locally.
```

### 🛠️ Deployment

This project is set up to deploy to Firebase Hosting. To publish changes, use:

```bash
# Build the production version
npm run build

# Deploy to Firebase Hosting
firebase deploy --only hosting
```

After deploying, view your site at:
https://persona-portfolio-cm5es.web.app

### 🗂️ Project Structure
my-portfolio-app/
├── src/
│   └── app/
│       └── page.tsx        # Main portfolio page content
├── public/                  # Static assets (images, icons, etc.)
├── .gitignore
├── apphosting.yaml          # Firebase hosting config
├── next.config.ts           # Next.js config
├── package.json             # Scripts & dependencies
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── README.md

### 📚 License

This project is licensed under the MIT License — feel free to use, modify, and share.

### ✉️ Contact

Created by Harish Gouda

GitHub: @harishgg20

LinkedIn: https://www.linkedin.com/in/harishgouda20/

Email: harishgouda52001@gmail.com
