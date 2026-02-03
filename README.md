# DZBuild - Connect With Us

A beautiful, modern, and SEO-optimized social media hub showcasing all DZBuild platforms and contact channels. Built with React, TypeScript, Vite, and Tailwind CSS.

## About DZBuild

**Your Gateway to Digital Commerce** - Building the future of e-commerce.

## Connect With Us

- **Facebook**: [facebook.com/dzbuild](https://facebook.com/dzbuild)
- **Instagram**: [@dz_build](https://instagram.com/dz_build)
- **YouTube**: [@DZBuild-off](https://www.youtube.com/@DZBuild-off)
- **GitHub**: [DZBuild-com](https://github.com/DZBuild-com)
- **WhatsApp**: [+213 782 729 944](https://wa.me/213782729944)
- **Telegram**: [@dzbuild](https://t.me/dzbuild)
- **Website**: [dzbuild.com](https://dzbuild.com)

## Features

- Modern and responsive design with smooth animations
- SEO optimized with comprehensive meta tags
- Open Graph and Twitter Card support for social sharing
- Structured data (JSON-LD) for search engines
- Fully accessible with ARIA labels
- Interactive hover effects and smooth transitions
- Mobile-first responsive design
- Professional gradient effects and animations

## Repository Structure

```
dzbuild-social-links/
├── public/
│   ├── dzb_uhq.png          # DZBuild logo
│   ├── robots.txt           # Search engine crawlers configuration
│   └── sitemap.xml          # XML sitemap for SEO
├── src/
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   ├── index.css            # Global styles and animations
│   └── vite-env.d.ts        # TypeScript declarations
├── index.html               # HTML template with SEO meta tags
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.ts           # Vite build configuration
└── README.md                # This file
```

## Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DZBuild-com/social-links.git
   cd social-links
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:5173` to see the application running.

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization Guide

### Update Social Media Links

Edit the `socialLinks` array in `src/App.tsx`:

```typescript
const socialLinks = [
  {
    name: 'Your Platform',
    url: 'https://your-url.com',
    icon: <YourIcon size={28} strokeWidth={2} />,
    gradient: 'from-blue-500 to-blue-600'
  },
  // Add more links...
]
```

### Change Colors

Modify the gradient colors in `src/App.tsx` or update Tailwind configuration in `tailwind.config.js`.

### Update SEO Information

Edit meta tags in `index.html`:
- Title and description
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)

### Customize Logo

Replace `public/dzb_uhq.png` with your own logo (recommended size: 512x512px).

## SEO Features

This project includes comprehensive SEO optimization:

- **Meta Tags**: Title, description, keywords, author
- **Open Graph**: Facebook sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Structured Data**: JSON-LD schema for Organization
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling instructions
- **Canonical URLs**: Prevent duplicate content issues
- **Semantic HTML**: Proper heading hierarchy and ARIA labels

## License & Usage Rights

### Open Source License

This project is **open source** and available for anyone to use, modify, and distribute.

### You Are Free To:

- **Fork** this repository
- **Clone** and use it for your own projects
- **Modify** the code to fit your needs
- **Share** your modifications with others
- **Use commercially** without restrictions
- **Contribute** improvements back to the project

### How to Fork

1. Click the "Fork" button at the top right of this repository
2. Clone your forked repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/social-links.git
   ```
3. Make your changes
4. Push to your fork and create a pull request if you want to contribute back

### Attribution

While not required, we appreciate attribution back to DZBuild when you use this project.

## Contributing

We welcome contributions from the community! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add some amazing feature"
   ```
4. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Write clear, concise commit messages
- Follow the existing code style
- Test your changes thoroughly
- Update documentation as needed
- Be respectful and collaborative

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Fully optimized assets

## Support

Need help? Reach out to us:

- **Email**: Contact through our social media
- **WhatsApp**: [+213 782 729 944](https://wa.me/213782729944)
- **Telegram**: [@dzbuild](https://t.me/dzbuild)
- **GitHub Issues**: [Create an issue](https://github.com/DZBuild-com/social-links/issues)

## Roadmap

- [ ] Add dark/light theme toggle
- [ ] Add language support (English/Arabic)
- [ ] Add analytics integration
- [ ] Add contact form
- [ ] Add blog section
- [ ] Add newsletter subscription

## Acknowledgments

- Built with React and Vite
- Icons by Lucide
- Styled with Tailwind CSS
- Inspired by modern web design trends

---

**Built with ❤️ by DZBuild**

*Building the future of e-commerce*

[Website](https://dzbuild.com) • [Facebook](https://facebook.com/dzbuild) • [Instagram](https://instagram.com/dz_build) • [YouTube](https://www.youtube.com/@DZBuild-off) • [GitHub](https://github.com/DZBuild-com)
