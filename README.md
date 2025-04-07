# Personal Portfolio Website

A modern, responsive portfolio website to showcase some of my projects and career. Features include dark mode, smooth animations, and interactive components.

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

1. Update your personal information in the following components:
   - `src/components/Hero.tsx`: Update your name and title
   - `src/components/About.tsx`: Update your bio, skills, and experience
   - `src/components/Projects.tsx`: Add your projects
   - `src/components/Contact.tsx`: Update social links and location

### Styling

1. The website uses Tailwind CSS for styling. You can customize the colors, spacing, and other design elements in:
   - `src/app/globals.css`: Global styles and custom utilities
   - `tailwind.config.js`: Tailwind configuration

### Images

1. Add your project images to the `public/projects` directory
2. Update image paths in `src/components/Projects.tsx`

### Contact Form

1. The contact form is currently set up to log form data to the console. To make it functional:
   - Add your preferred form handling service (e.g., Formspree, EmailJS)
   - Update the `handleSubmit` function in `src/components/Contact.tsx`

## Deployment

This website can be easily deployed to Vercel:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy

## License

MIT License - feel free to use this template for your own portfolio
