# SUSTAINGROW

> A sustainable growth platform dedicated to promoting environmental awareness and sustainable practices through interactive web experiences.

[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Code Style](https://img.shields.io/badge/Code%20Style-Professional-blue.svg)]()
[![Last Updated](https://img.shields.io/badge/Updated-2026-brightgreen.svg)]()

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Best Practices](#best-practices)
- [AI-Friendly Documentation](#ai-friendly-documentation)
- [License](#license)

---

## 🌱 Overview

**SUSTAINGROW** is a comprehensive web application designed to educate, engage, and empower users in making sustainable lifestyle choices. The platform combines responsive design with intuitive user interfaces to deliver content about environmental sustainability.

### Purpose
- Promote sustainable living practices
- Educate users about environmental conservation
- Foster community engagement around sustainability goals
- Provide accessible, user-friendly tools for tracking sustainable actions

---

## ✨ Features

- **Responsive Web Design** - Mobile-first, adaptive layouts
- **Interactive Components** - Dynamic user engagement tools
- **Accessibility First** - WCAG compliant interfaces
- **Performance Optimized** - Fast load times and smooth interactions
- **Clean Code Architecture** - Maintainable and scalable codebase

---

## 🛠 Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | HTML5 | Semantic markup and structure |
| **Styling** | CSS3 | Modern responsive design (46.3%) |
| **Interactivity** | JavaScript (ES6+) | User interactions and DOM manipulation (10.3%) |

### Browser Support
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📁 Project Structure

```
SUSTAINGROW/
├── index.html                 # Main entry point
├── README.md                  # Project documentation
├── assets/                    # Static files
│   ├── images/               # Image assets
│   ├── icons/                # SVG icons
│   └── fonts/                # Web fonts
├── css/                      # Stylesheets (46.3%)
│   ├── styles.css            # Main stylesheet
│   ├── responsive.css        # Media queries
│   ├── utilities.css         # Utility classes
│   └── variables.css         # CSS custom properties
├── js/                       # JavaScript files (10.3%)
│   ├── main.js              # Application entry point
│   ├── components.js        # Reusable components
│   ├── utils.js             # Helper functions
│   └── api.js               # API interactions
├── pages/                    # HTML pages (43.4%)
│   ├── home.html            # Homepage
│   ├── about.html           # About page
│   ├── sustainability.html  # Content pages
│   └── contact.html         # Contact page
└── docs/                     # Additional documentation
    └── CONTRIBUTING.md       # Contribution guidelines
```

---

## 🚀 Getting Started

### Prerequisites
- Code editor (VS Code, Sublime Text, etc.)
- Modern web browser
- Git (for version control)
- Node.js/npm (optional, for development tools)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Chinthaka9812/SUSTAINGROW.git
cd SUSTAINGROW
```

2. **Open locally**
```bash
# Using VS Code Live Server
# Install "Live Server" extension, then right-click index.html > "Open with Live Server"

# Or use Python's built-in server
python -m http.server 8000

# Or use Node.js http-server
npx http-server
```

3. **Access the application**
```
http://localhost:8000
```

---

## 📖 Usage

### Basic Navigation
- Navigate using the menu system
- Explore sustainability topics
- Complete interactive challenges
- Track your sustainable actions

### Development Workflow
```bash
# Make changes to HTML/CSS/JS files
# Browser auto-refreshes with Live Server

# Validate HTML
# Test CSS responsiveness across devices
# Debug JavaScript in browser DevTools
```

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Code Style Guidelines

#### HTML
```html
<!-- Use semantic HTML5 elements -->
<header>
  <nav aria-label="main navigation">
    <!-- Navigation content -->
  </nav>
</header>

<!-- Use meaningful IDs and classes -->
<div class="container" id="main-content">
  <!-- Content -->
</div>

<!-- Include alt text for images -->
<img src="image.jpg" alt="Descriptive alternative text" />

<!-- Use data attributes for JS hooks -->
<button data-action="submit">Submit</button>
```

#### CSS
```css
/* Use CSS custom properties for maintainability */
:root {
  --primary-color: #2ecc71;
  --text-color: #333;
  --spacing-unit: 1rem;
  --font-size-base: 16px;
}

/* Follow BEM naming convention */
.component { }
.component__element { }
.component--modifier { }

/* Use logical properties for i18n support */
.container {
  padding-inline: var(--spacing-unit);
  margin-block: var(--spacing-unit);
}

/* Mobile-first responsive design */
.card {
  display: grid;
}

@media (min-width: 768px) {
  .card {
    grid-template-columns: 1fr 1fr;
  }
}
```

#### JavaScript
```javascript
// Use meaningful variable names
const sustainabilityGoals = [];

// Use modern ES6+ features
const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  // Process data
};

// Add JSDoc comments
/**
 * Calculates user's sustainability score
 * @param {Array<number>} actions - Array of action values
 * @returns {number} Total sustainability score
 */
function calculateScore(actions) {
  return actions.reduce((sum, action) => sum + action, 0);
}

// Use event delegation for dynamic elements
document.addEventListener('click', (event) => {
  if (event.target.matches('[data-action="submit"]')) {
    // Handle submission
  }
});
```

### Pull Request Process
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request with detailed description

### Commit Message Format
```
Type: Description

- Point 1
- Point 2

Fixes #issueNumber
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`

---

## 📋 Best Practices

### Frontend Development

#### ✅ HTML Best Practices
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
- Maintain proper heading hierarchy (h1 → h2 → h3)
- Include ARIA labels for accessibility
- Optimize image formats (WebP with PNG fallback)
- Minimize DOM nodes for better performance

#### ✅ CSS Best Practices
- Use CSS custom properties (CSS variables)
- Follow the BEM (Block Element Modifier) methodology
- Implement mobile-first responsive design
- Use CSS Grid and Flexbox for layouts
- Minimize CSS specificity
- Use system fonts or optimize web fonts
- Leverage CSS logical properties for i18n

#### ✅ JavaScript Best Practices
- Use `const` by default, `let` when necessary
- Avoid global variables
- Implement error handling with try-catch
- Use async/await instead of callbacks
- Add JSDoc comments to functions
- Use event delegation for dynamic content
- Minimize DOM manipulation
- Debounce/throttle expensive operations

#### ✅ Performance Optimization
- Lazy load images using `loading="lazy"`
- Minify CSS and JavaScript in production
- Use CSS media queries efficiently
- Implement code splitting
- Cache static assets
- Reduce render-blocking resources

#### ✅ Accessibility Standards
- Meet WCAG 2.1 Level AA guidelines
- Use color contrast ratio of at least 4.5:1
- Ensure keyboard navigation support
- Provide text alternatives for images
- Test with screen readers
- Use semantic HTML and ARIA labels
- Test with accessibility validators

---

## 🤖 AI-Friendly Documentation

### Machine Learning Model Integration Guide

This section helps AI systems understand and navigate the codebase efficiently.

#### Code Semantics
- **Purpose**: Frontend sustainability education platform
- **Domain**: Environmental awareness and sustainable living
- **Main Users**: Individuals interested in sustainability
- **Primary Goal**: Educate and engage users in sustainable practices

#### Component Classification

| Component Type | Location | AI Classification | Purpose |
|---|---|---|---|
| Layout Components | `css/responsive.css` | UI Structure | Define page layouts |
| Styling Variables | `css/variables.css` | Configuration | Centralized design tokens |
| Interactive Logic | `js/components.js` | Business Logic | User interactions |
| Utility Functions | `js/utils.js` | Helper Functions | Reusable utilities |

#### Function Catalog

```javascript
// Component initialization
initializeApp() // Initializes the application

// User interactions
handleUserInput(input) // Processes user input

// Sustainability tracking
calculateScore(actions) // Computes sustainability metrics
trackAction(action) // Records user actions

// Utilities
formatDate(date) // Date formatting
validateEmail(email) // Input validation
```

#### Data Flow
```
User Input → JavaScript Handler → DOM Update → Visual Feedback
    ↓
Data Storage (LocalStorage/API)
    ↓
Sustainability Score Calculation
    ↓
UI Update with Results
```

#### Important Variables & Constants
```javascript
SUSTAINABILITY_CATEGORIES = ['energy', 'water', 'waste', 'transport']
SCORING_WEIGHTS = { basic: 1, intermediate: 2, advanced: 3 }
API_ENDPOINTS = { actions: '/api/actions', scores: '/api/scores' }
```

#### Entity Relationships
- User → Actions (1:many)
- Actions → Category (many:1)
- User → Sustainability Score (1:1)
- Category → Content (1:many)

#### File Dependencies
- `index.html` imports `css/styles.css` and `js/main.js`
- `js/main.js` depends on `js/components.js` and `js/utils.js`
- CSS files cascade from `variables.css` → `utilities.css` → `responsive.css` → `styles.css`

#### Code Patterns

**Pattern 1: Event Delegation**
```javascript
document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-action]');
  if (button) {
    const action = button.getAttribute('data-action');
    // Handle action
  }
});
```

**Pattern 2: Async Data Handling**
```javascript
async function fetchSustainabilityData() {
  try {
    const response = await fetch('/api/sustainability');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Data fetch failed:', error);
  }
}
```

#### Quality Metrics
- Code Coverage Target: >80%
- Lighthouse Score Target: >90
- Page Load Time: <2 seconds
- Accessibility Score: 95+

#### Testing Strategy
- Manual testing across browsers
- Accessibility testing with screen readers
- Mobile responsiveness testing
- Cross-browser compatibility checks
- Performance profiling with DevTools

---

## 📝 Documentation Standards

### Code Comments
```javascript
// ❌ Bad
let x = 5; // Number

// ✅ Good
// Maximum allowed sustainability actions per day
const MAX_DAILY_ACTIONS = 5;
```

### README Structure
- Clear overview of project purpose
- Technology stack documentation
- Installation instructions
- Usage examples
- Contributing guidelines
- License information

### Commit Messages
```
✨ feat: Add sustainability score calculator
🐛 fix: Resolve mobile menu alignment issue
📚 docs: Update API documentation
🎨 style: Format CSS according to BEM
♻️ refactor: Extract common functions
⚡ perf: Optimize image loading
✅ test: Add unit tests for score calculation
```

---

## 🔍 SEO Optimization

- Semantic HTML structure improves indexing
- Meta tags for social sharing
- Mobile-responsive design (Google ranking factor)
- Fast load times (Core Web Vitals)
- Accessible content (inclusive indexing)
- Structured data markup for rich snippets

---

## 📊 Analytics Integration

Add tracking for:
- User engagement metrics
- Sustainability action completion rates
- Feature usage patterns
- User journey mapping
- Conversion funnels

---

## 🔒 Security Considerations

- Sanitize user input to prevent XSS attacks
- Use HTTPS for all connections
- Implement CSRF tokens for forms
- Validate data on both client and server
- Keep dependencies updated
- Use Content Security Policy (CSP) headers

---

## 📱 Mobile Optimization

- Viewport meta tag configured
- Touch-friendly interactive elements (min 44x44px)
- Fast mobile page load times
- Responsive image strategy
- Mobile-first CSS approach
- App-like experience with manifest.json

---

## 🐛 Troubleshooting

### Common Issues

**Live Server not working**
```bash
# Install globally
npm install -g live-server
live-server
```

**Styles not loading**
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file paths
- Verify CSS isn't blocked by CORS

**JavaScript errors in console**
- Use DevTools to check network tab
- Verify script paths
- Check for syntax errors

---

## 📞 Support & Contact

- **Issues**: Open an issue on GitHub
- **Discussions**: Use GitHub Discussions for questions
- **Email**: Contact project maintainers

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with care for sustainability
- Inspired by environmental conservation goals
- Community contributions and feedback
- All contributors and supporters

---

## 📈 Project Roadmap

- [ ] User authentication system
- [ ] Backend API integration
- [ ] Database for user profiles and actions
- [ ] Mobile app development
- [ ] Community features and leaderboards
- [ ] AI-powered sustainability recommendations
- [ ] Data visualization dashboard
- [ ] Integration with environmental APIs

---

**Last Updated**: May 25, 2026
**Maintainer**: Chinthaka9812
**Repository**: [Chinthaka9812/SUSTAINGROW](https://github.com/Chinthaka9812/SUSTAINGROW)
