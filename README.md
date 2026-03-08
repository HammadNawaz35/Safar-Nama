# Welcome to your Lovable project
# 🧭 Safarnama — Your Journey, Your Story
## Project info
**Safarnama** is a modern, immersive travel platform built with React, offering curated tour packages, destination exploration, trip planning, and a rich visual experience for travel enthusiasts.
**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID
🌐 **Live Preview**: [View App](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID)
## How can I edit this code?
---
There are several ways of editing your application.
## ✨ Features
**Use Lovable**
### 🏠 Home & Landing
- **Cinematic Splash Screen** — Animated intro with branding on first visit
- **Hero Section** — Full-screen hero with typewriter text animation and CTA
- **Scroll Progress Indicator** — Visual progress bar as users scroll
- **Destination Carousel** — Auto-scrolling featured destinations
- **Interactive Travel Map** — Leaflet-powered map with destination pins
- **Testimonials** — Customer reviews with animated cards
- **Photo Gallery** — Curated travel photography grid
Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.
### 🗺️ Destinations
- Browse destinations with detailed cards (rating, price, description)
- Filter and explore by region
- Dynamic destination detail pages
Changes made via Lovable will be committed automatically to this repo.
### 🎒 Tours
- Curated tour packages with pricing, duration, and difficulty
- Tour cards with hover effects and quick-view details
**Use your preferred IDE**
### 📝 Blog
- Travel blog with article listings
- Individual blog post pages with rich content
If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.
### 📅 Trip Planner
- Interactive trip planning tool
- Customize itineraries and preferences
The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
### 🛒 Booking & Checkout
- Tour booking flow with form validation
- Checkout page with order summary
Follow these steps:
### 📬 Contact
- Contact form for inquiries
- Business information and social links
```sh
# Step 1: Clone the repository using the project's Git URL.
### 🎨 Design & UX
- **Dark/Light Mode** — Toggle with persistent preference
- **Scroll Reveal Animations** — Elements animate into view on scroll
- **Framer Motion** — Smooth page transitions and micro-interactions
- **Fully Responsive** — Mobile-first design across all breakpoints
- **Custom Design System** — Semantic color tokens, consistent typography
---
## 🛠️ Tech Stack
| Layer | Technology |
|-------|-----------|
| **Framework** | React 18 + TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS + shadcn/ui |
| **Animations** | Framer Motion |
| **Routing** | React Router DOM v6 |
| **Maps** | Leaflet + React Leaflet |
| **Forms** | React Hook Form + Zod validation |
| **State** | TanStack React Query |
| **Charts** | Recharts |
| **Icons** | Lucide React |
| **Toasts** | Sonner |
---
## 📁 Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/              # shadcn/ui primitives (Button, Card, Dialog, etc.)
│   ├── Navbar.tsx        # Site navigation with mobile menu
│   ├── Hero.tsx          # Landing hero section
│   ├── Footer.tsx        # Site footer
│   ├── Gallery.tsx       # Photo gallery grid
│   ├── Testimonials.tsx  # Customer testimonials
│   ├── SplashScreen.tsx  # Animated splash intro
│   ├── ScrollProgress.tsx# Scroll progress bar
│   ├── InteractiveTravelMap.tsx  # Leaflet map
│   ├── DestinationCard.tsx       # Destination card component
│   ├── DestinationCarousel.tsx   # Auto-scroll carousel
│   ├── TourCard.tsx      # Tour package card
│   └── MapView.tsx       # Map wrapper component
├── pages/               # Route-level page components
│   ├── Home.tsx          # Landing page
│   ├── Destinations.tsx  # Destinations listing
│   ├── Tours.tsx         # Tour packages
│   ├── Blog.tsx          # Blog listing
│   ├── BlogPost.tsx      # Individual blog post
│   ├── Booking.tsx       # Booking form
│   ├── Checkout.tsx      # Payment checkout
│   ├── Contact.tsx       # Contact page
│   ├── TripPlanner.tsx   # Trip planning tool
│   └── NotFound.tsx      # 404 page
├── data/                # Static data & content
│   ├── destinations.ts   # Destination listings
│   ├── tours.ts          # Tour packages
│   ├── blogs.ts          # Blog articles
│   ├── gallery.ts        # Gallery images
│   └── testimonials.ts   # Customer reviews
├── hooks/               # Custom React hooks
│   ├── useDarkMode.ts    # Dark mode toggle
│   ├── useScrollReveal.ts# Scroll animation trigger
│   ├── useTypewriter.ts  # Typewriter text effect
│   └── use-mobile.tsx    # Mobile breakpoint detection
├── utils/               # Utility functions
│   └── format.ts         # Formatting helpers
├── lib/                 # Library configuration
│   └── utils.ts          # Tailwind merge utilities
├── index.css            # Global styles & design tokens
├── App.tsx              # Root app with routing
└── main.tsx             # Entry point
```
---
## 🚀 Getting Started
### Prerequisites
- **Node.js** ≥ 18
- **npm** or **bun**
### Installation
```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd safarnama
# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>
# Install dependencies
npm install
# Step 3: Install the necessary dependencies.
npm i
# Step 4: Start the development server with auto-reloading and an instant preview.
# Start development server
npm run dev
```
**Edit a file directly in GitHub**
The app will be available at `http://localhost:8080`.
- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.
### Build for Production
**Use GitHub Codespaces**
```bash
npm run build
npm run preview
```
- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.
---
## What technologies are used for this project?
## 🎨 Design System
This project is built with:
Safarnama uses a custom design system with semantic CSS tokens defined in `src/index.css`:
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- **Colors**: HSL-based tokens (`--background`, `--foreground`, `--primary`, `--accent`, etc.)
- **Dark Mode**: Full dark theme support via CSS custom properties
- **Components**: Extended shadcn/ui components with custom variants
- **Typography**: Carefully paired fonts for headings and body text
## How can I deploy this project?
---
Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.
## 🧪 Testing
## Can I connect a custom domain to my Lovable project?
```bash
# Run tests
npm run test
```
Yes, you can!
Tests are configured with **Vitest** and located in `src/test/`.
To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.
---
Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
## 📦 Deployment
Deploy instantly via [Lovable](https://lovable.dev):
1. Open your project in Lovable
2. Click **Share → Publish**
3. Optionally connect a [custom domain](https://docs.lovable.dev/features/custom-domain)
---
## 📄 License
This project is privately maintained. All rights reserved.
---
<p align="center">
  <strong>Safarnama</strong> — <em>Because every journey tells a story</em> 🌍
</p>
