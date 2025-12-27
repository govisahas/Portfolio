# Portfolio Website

A modern, interactive portfolio website built with React and Vite, showcasing professional work, skills, and services with premium design aesthetics and smooth animations.


## 🛠️ Tech Stack

### Core Technologies
- **React 19.2.0** - UI library for building component-based interfaces
- **Vite 7.2.4** - Fast build tool and development server
- **Framer Motion 12.23.26** - Animation library for smooth transitions

### Additional Libraries
- **React Icons 5.5.0** - Icon library (Font Awesome, Simple Icons, etc.)
- **React Scroll 1.9.3** - Smooth scrolling navigation
- **Swiper 12.0.3** - Touch slider component
- **Axios 1.13.2** - HTTP client for API requests

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Vite Plugin React** - Fast refresh and JSX support

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── assets/              # Images and static assets
│   ├── components/
│   │   ├── header/          # Navigation header and sidebar
│   │   ├── footer/          # Footer component
│   │   ├── services/        # Services section
│   │   ├── skills/          # Skills display
│   │   ├── portfolio/       # Portfolio gallery
│   │   │   ├── details/     # Modal component for project details
│   │   │   ├── Items.jsx    # Portfolio card items
│   │   │   ├── List.jsx     # Category filter list
│   │   │   └── Portfolio.jsx # Main portfolio component
│   │   ├── contact/         # Contact form
│   │   ├── Home.jsx         # Hero section
│   │   └── Animations.jsx   # Framer Motion animation variants
│   ├── Data.jsx             # Project data and content
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Entry point
├── public/                  # Public assets
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint



## 🎨 Key Components

### Home Component
- Hero section with animated introduction
- Floating technology icons with continuous animations
- Social media links (LinkedIn, GitHub)
- Call-to-action buttons

### Portfolio Component
- Category-based project filtering
- Animated card grid with hover effects
- Modal integration for detailed project views
- Responsive layout with Framer Motion animations

### Modal Component
- Glassmorphism design with backdrop blur
- Project details with technology badges
- External links with security attributes
- Image gallery with responsive grid
- Multiple close methods (X, backdrop, ESC)

### Services Component
- Creative card-based layout
- Hover animations and effects
- Service descriptions with icons


## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Desktop** - Full-width layout with multi-column grids
- **Tablet** (768px) - Adjusted layouts and spacing
- **Mobile** (480px) - Single-column layout with optimized touch targets

## 🎭 Animations

Powered by Framer Motion:
- **Page Load** - Staggered fade-in animations
- **Scroll Animations** - Elements animate on scroll
- **Hover Effects** - Interactive card and button animations
- **Modal Transitions** - Smooth open/close with scale and fade
- **Floating Icons** - Continuous floating animations on tech icons



Built with ❤️ using React + Vite
