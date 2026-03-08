# 🧭 Safarnama — Your Journey, Your Story

**Safarnama** is a modern, immersive travel platform built with React, offering curated tour packages, destination exploration, trip planning, and a rich visual experience for travel enthusiasts.

🌐 **Live Preview**: [View Website](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID)

---

## ✨ Features

### 🏠 Home & Landing
- Cinematic splash screen with animated intro
- Full-screen hero section with typewriter animation and CTA
- Scroll progress indicator
- Destination carousel (auto-scrolling featured destinations)
- Interactive Leaflet map with destination pins
- Testimonials with animated cards
- Curated photo gallery

### 🗺️ Destinations
- Browse destinations with detailed cards (rating, price, description)
- Filter by region
- Dynamic destination detail pages

### 🎒 Tours
- Curated tour packages with pricing, duration, and difficulty
- Tour cards with hover effects and quick-view details

### 📝 Blog
- Travel blog with article listings
- Individual blog post pages with rich content

### 📅 Trip Planner
- Interactive trip planning tool
- Customize itineraries and preferences

### 🛒 Booking & Checkout
- Tour booking flow with form validation
- Checkout page with order summary

### 📬 Contact
- Contact form for inquiries
- Business information and social links

### 🎨 Design & UX
- Dark/Light mode with persistent preference
- Scroll reveal animations
- Smooth page transitions and micro-interactions with Framer Motion
- Fully responsive design
- Custom design system with semantic colors and consistent typography

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
| **State Management** | TanStack React Query |
| **Charts** | Recharts |
| **Icons** | Lucide React |
| **Toasts** | Sonner |

---

## 📁 Project Structure

```text
src/
├── components/          # Reusable UI components
├── pages/               # Route-level pages
├── data/                # Static data & content
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── lib/                 # Library configuration
├── index.css            # Global styles & design tokens
├── App.tsx              # Root app with routing
└── main.tsx             # Entry point
