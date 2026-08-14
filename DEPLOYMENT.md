# Deployment Guide

## Quick Start

### Local Development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

## Deployment Options

### 1. Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### 2. Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`

### 3. Static Export (Any Host)

Update `next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
}

export default nextConfig
```

Then build:

```bash
npm run build
```

The static files will be in the `out` directory. Upload to any static host (Netlify, GitHub Pages, AWS S3, etc.)

## Environment Variables

If you add backend functionality (contact form submission, etc.), create a `.env.local` file:

```
NEXT_PUBLIC_API_URL=your_api_url
```

## Custom Domain

### Vercel
- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

### Netlify
- Go to Domain Management
- Add custom domain
- Update DNS records as instructed

## Performance Tips

1. Images are automatically optimized by Next.js
2. Fonts are self-hosted for better performance
3. Code splitting is handled automatically
4. Static generation for instant page loads

## Monitoring

Consider adding:
- **Vercel Analytics** for usage tracking
- **Sentry** for error monitoring
- **Google Analytics** for visitor insights

## Contact Form Integration

To make the contact form functional, integrate with:
- **Formspree** (easiest)
- **EmailJS**
- **Custom API endpoint**
- **Resend** (for email sending)

Example with Formspree:

```js
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* form fields */}
</form>
```
