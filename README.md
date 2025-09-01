# FleetWise Landing Page

A modern, responsive landing page for FleetWise - an African-based fleet management system designed to help businesses manage their fleets efficiently.

## Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI**: Clean and professional design with FleetWise branding
- **Interactive Components**: 
  - Hero section with call-to-action buttons
  - About section with fleet management information
  - Testimonials carousel
  - Pricing plans (Core & Advanced)
  - Contact form
- **Mobile-First**: Hamburger menu and mobile-optimized layouts
- **Smooth Animations**: Fade-in animations for better user experience

## Technology Stack

- **React**: Frontend framework
- **CSS Modules**: Component-scoped styling
- **Responsive Design**: Mobile-first approach with media queries
- **Modern CSS**: Flexbox, Grid, and CSS custom properties

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/EdiEdison/fleetwise.git
cd fleetwise
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── About/           # About section component
│   ├── AnimatedSection/ # Animation wrapper
│   ├── CTA/            # Call-to-action component
│   ├── Contact/        # Contact form
│   ├── DashboardImage/ # Dashboard showcase
│   ├── Footer/         # Footer component
│   ├── Header/         # Navigation header
│   ├── Hero/           # Hero section
│   ├── Pricing/        # Pricing plans
│   ├── Testimonials/   # Customer testimonials
│   └── TrustedBy/      # Trusted by section
├── styles/
│   ├── main.css        # Global styles
│   └── variables.css   # CSS custom properties
└── assets/
    └── images/         # Project images
```

## Deployment

The app can be deployed to any static hosting service:

1. Build the project:
```bash
npm run build
```

2. Deploy the `build` folder to your hosting service.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact the FleetWise team.