# Portfolio Frontend (Next.js)

A modern, animated portfolio website built with Next.js, TailwindCSS, and Framer Motion.

## Features

- 🎨 Modern Design with Dark Theme
- 🔄 Smooth Animations with Framer Motion
- 📱 Fully Responsive
- 🚀 Server-Side Rendering
- 🔌 API Integration with Backend
- 🎯 Performance Optimized

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env.local` file:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
frontend/
├── components/     # Reusable components
├── pages/         # Next.js pages
├── styles/        # Global styles
└── public/        # Static assets
```

## Deployment (Vercel)

1. Push to GitHub
2. Import to Vercel
3. Set environment variables:
   - `NEXT_PUBLIC_API_URL`: Your Flask backend URL
4. Deploy!

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint 