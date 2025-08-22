# NexGen AI Studio - Digital Marketplace

A premium digital templates and assets marketplace built with Next.js, featuring AdSense integration, SEO optimization, and a complete admin panel.

## 🚀 Features

- **Modern Design**: Premium UI with Tailwind CSS and beautiful animations
- **Marketplace**: Complete product catalog with categories, filters, and search
- **Blog System**: Article management with SEO optimization
- **Admin Panel**: Full-featured dashboard for template management
- **AdSense Integration**: Multiple ad units with responsive design
- **SEO Optimized**: Built-in sitemap, robots.txt, and meta tags
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized for speed and Core Web Vitals

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom components
- **Icons**: Heroicons
- **Animations**: Framer Motion & AOS
- **Forms**: React Hook Form
- **Deployment**: Netlify (static export)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nexgen-ai-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure AdSense**
   - Replace `ca-pub-XXXXXXXXXXXXXXXXX` in the following files:
     - `components/Layout.tsx`
     - `components/AdSense.tsx`
     - `components/ads/AdUnits.tsx`
   - Add your AdSense ad unit IDs in `components/ads/AdUnits.tsx`

4. **Configure Analytics**
   - Replace `GA_MEASUREMENT_ID` in `components/Layout.tsx` with your Google Analytics ID

5. **Run development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   npm run export
   ```

## 🔧 Configuration

### AdSense Setup

1. **Get AdSense Account**: Apply for Google AdSense and get approved
2. **Create Ad Units**: Create different ad units in your AdSense dashboard:
   - Header Banner (728x90)
   - Sidebar Ad (300x250)  
   - Mobile Banner (320x100)
   - In-Article Ad (Responsive)
   - Footer Ad (970x250)
   - Square Ad (300x300)

3. **Update Ad Unit IDs**: Replace the placeholder ad slots in `components/ads/AdUnits.tsx`:
   ```typescript
   // Replace these with your actual ad unit IDs
   export const HeaderBannerAd = () => (
     <AdSense adSlot="YOUR_HEADER_AD_SLOT_ID" />
   )
   ```

4. **Update Publisher ID**: Replace `ca-pub-XXXXXXXXXXXXXXXXX` with your actual publisher ID

### SEO Configuration

1. **Update Site URL**: Change the base URL in `utils/seo.ts`
2. **Customize Meta Data**: Update default titles, descriptions, and keywords
3. **Add Schema Markup**: Customize structured data in `components/Layout.tsx`

### Netlify Deployment

1. **Connect Repository**: Connect your GitHub repository to Netlify
2. **Build Settings**:
   - Build command: `npm run build && npm run export`
   - Publish directory: `out`
3. **Environment Variables**: Add any required environment variables
4. **Custom Domain**: Configure your custom domain (nexgenaistudio.com)

## 📁 Project Structure

```
nexgen-ai-studio/
├── components/           # Reusable UI components
│   ├── ads/             # AdSense ad components
│   ├── Layout.tsx       # Main layout with SEO
│   ├── Navigation.tsx   # Site navigation
│   └── AdSense.tsx      # AdSense wrapper component
├── pages/               # Next.js pages
│   ├── api/             # API routes (sitemap, robots)
│   ├── admin/           # Admin dashboard
│   ├── blog/            # Blog pages
│   ├── index.tsx        # Homepage
│   ├── marketplace.tsx  # Product catalog
│   └── contact.tsx      # Contact page
├── styles/              # Global styles
├── utils/               # Utility functions
├── public/              # Static assets
└── netlify.toml         # Netlify configuration
```

## 🎨 Customization

### Colors & Branding

Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary colors
  },
  secondary: {
    // Your secondary colors
  }
}
```

### Add New Templates

Use the admin panel at `/admin` to:
- Add new template listings
- Manage categories
- Update pricing
- Track analytics

### Content Management

1. **Blog Posts**: Add new blog posts by creating new pages in `pages/blog/`
2. **Templates**: Manage templates through the admin interface
3. **Categories**: Update categories in marketplace and admin components

## 🚀 Performance Optimization

- **Image Optimization**: Use Next.js Image component for automatic optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **Caching**: Configured caching headers in `netlify.toml`
- **Minification**: Automatic minification in production build

## 📈 SEO Features

- **Sitemap**: Auto-generated sitemap at `/sitemap.xml`
- **Robots.txt**: SEO-friendly robots.txt at `/robots.txt`
- **Meta Tags**: Comprehensive meta tags for all pages
- **Open Graph**: Social media sharing optimization
- **Schema Markup**: Structured data for better search results
- **RSS Feed**: Blog RSS feed for content syndication

## 🔒 Security

- **Headers**: Security headers configured in Netlify
- **HTTPS**: Automatic HTTPS with Netlify
- **Content Security**: XSS protection and content type validation

## 📊 Analytics & Monetization

- **Google Analytics**: Page views and user behavior tracking
- **AdSense**: Multiple ad placements for revenue generation
- **Performance**: Core Web Vitals monitoring
- **Conversion**: Contact form and template purchase tracking

## 🆘 Support

For support and customization requests:
- Email: hello@nexgenaistudio.com
- Website: https://nexgenaistudio.com

## 📄 License

This project is proprietary. All rights reserved.

---

Built with ❤️ by NexGen AI Studio
