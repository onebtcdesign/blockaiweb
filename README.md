# Blockai - Web3 Development Services Portal

Blockai is a portal focused on the Crypto/Web3 industry, providing one-stop product design, full-stack development, and operational services for blockchain projects. The website features a modern crypto style design with strong tech vibes and cyberpunk visual effects.

![Blockai Preview](https://via.placeholder.com/800x400?text=Blockai+Preview)

## Project Features

- **Modern Design**: Cyberpunk style combining gradients, neon effects, and dynamic backgrounds
- **Responsive Layout**: Perfect adaptation for various screen sizes from mobile devices to desktop monitors
- **Interactive Experience**: Rich animations and interactive elements providing an immersive user experience
- **High Performance**: Built with Next.js 15, delivering excellent loading performance and SEO optimization
- **Modular Components**: Component-based design for easy maintenance and extensibility

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animation**: CSS animations & Canvas API
- **State Management**: React Hooks
- **Deployment**: Vercel

## Core Modules

The website includes the following core modules:

### 1. Home Introduction Section
Highlights Blockai as a specialized portal service platform for the crypto industry, including:
- Dynamic background effects (grid and particle animations)
- Visually striking headline
- Service introduction
- Call-to-action buttons

### 2. Services Module
Showcases Blockai's core services:
- Crypto project design
- Full-stack development
- One-stop development
- Project collaboration
Each service includes detailed descriptions and features.

### 3. Case Studies Module
Displays Blockai's past project cases:
- Category filtering functionality
- Horizontal scrolling display
- Case detail popup effects
- Technology tag display

### 4. Team Introduction Module
Presents Blockai's core team members:
- Member profiles
- Professional areas and skills
- Social media links

### 5. Technology Framework Module
Showcases the technology stack used by Blockai:
- Frontend technologies
- Backend technologies
- Blockchain technologies
Includes technology descriptions and advantages.

### 6. FAQ Module
Frequently asked questions:
- Accordion effect for Q&A display
- Categorized common questions

### 7. Contact Module
Provides multiple contact methods:
- Contact form
- Social media links
- Email and instant messaging tools

## Running the Project

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager

### Install Dependencies
```bash
npm install
# or
yarn install
```

### Development Mode
```bash
npm run dev
# or
yarn dev
```
Then access http://localhost:3000 in your browser

### Build Project
```bash
npm run build
# or
yarn build
```

### Start Production Server
```bash
npm run start
# or
yarn start
```

## Project Structure

```
blockai/
├── app/                  # Main application directory
│   ├── layout.tsx        # Global layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # Components directory
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Home main visual
│   ├── Services.tsx      # Services module
│   ├── CaseStudies.tsx   # Case studies display
│   ├── Team.tsx          # Team introduction
│   ├── Technology.tsx    # Technology framework
│   ├── Faq.tsx           # Frequently asked questions
│   ├── Contact.tsx       # Contact methods
│   └── Footer.tsx        # Footer
├── public/               # Static resources
└── README.md             # Project documentation
```

## Future Plans

- Add multilingual support
- Integrate Web3 wallet connection
- Implement case study detail pages
- Add blog/news module
- Develop admin management system

## Contribution

Issues and PRs are welcome to improve the project!

## License

MIT
