# 🚀 Deployment Guide for NexGen AI Studio

## Quick Start

Your NexGen AI Studio website is ready for deployment! Follow these steps to get it live on Netlify.

## 📋 Pre-Deployment Checklist

### 1. AdSense Configuration
**IMPORTANT**: Replace placeholder AdSense IDs before going live:

```typescript
// In components/Layout.tsx, components/AdSense.tsx, and components/ads/AdUnits.tsx
// Replace: ca-pub-XXXXXXXXXXXXXXXXX
// With your actual AdSense Publisher ID

// Example:
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456"
```

### 2. Analytics Configuration
```typescript
// In components/Layout.tsx
// Replace: GA_MEASUREMENT_ID
// With your Google Analytics ID (e.g., G-XXXXXXXXXX)
```

### 3. Update Site Information
```typescript
// In utils/seo.ts
const siteUrl = "https://your-domain.com" // Update this
```

## 🌐 Netlify Deployment

### Option 1: Git-based Deployment (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Select the repository

3. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: `18`

4. **Deploy**:
   - Click "Deploy site"
   - Wait for deployment to complete

### Option 2: Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload the `out` folder**:
   - Zip the `out` folder
   - Go to Netlify dashboard
   - Drag and drop the zip file

## 🔧 Post-Deployment Configuration

### 1. Custom Domain
- In Netlify dashboard → Domain settings
- Add your custom domain (e.g., nexgenaistudio.com)
- Configure DNS records as instructed

### 2. SSL Certificate
- Automatically enabled by Netlify
- Force HTTPS in domain settings

### 3. Environment Variables (if needed)
- Netlify dashboard → Site settings → Environment variables
- Add any required environment variables

## 📊 AdSense Setup

### 1. Create AdSense Account
- Apply at [adsense.google.com](https://adsense.google.com)
- Wait for approval (can take 1-14 days)

### 2. Create Ad Units
Create these ad units in your AdSense dashboard:

| Ad Unit Name | Size | Type | Placement |
|--------------|------|------|-----------|
| Header Banner | 728x90 | Display | Header |
| Sidebar Ad | 300x250 | Display | Sidebar |
| Mobile Banner | 320x100 | Display | Mobile Header |
| In-Article | Responsive | Display | Between content |
| Footer Ad | 970x250 | Display | Footer |
| Square Ad | 300x300 | Display | Sidebar/Content |

### 3. Update Ad Unit IDs
Replace placeholder IDs in `components/ads/AdUnits.tsx`:

```typescript
export const HeaderBannerAd = () => (
  <AdSense adSlot="1234567890" /> // Replace with actual ad slot ID
)
```

### 4. Enable Auto Ads
Auto ads are already configured in the Layout component. They'll start showing once your site is approved.

## 🔍 SEO Optimization

### 1. Submit Sitemap
- Your sitemap is available at: `https://yoursite.com/sitemap.xml`
- Submit to Google Search Console
- Submit to Bing Webmaster Tools

### 2. Google Search Console
- Add and verify your property
- Submit sitemap
- Monitor indexing status

### 3. Google Analytics
- Create GA4 property
- Add tracking code (already implemented)
- Set up goals and conversions

## 📈 Performance Monitoring

### 1. Core Web Vitals
- Monitor via Google Search Console
- Use PageSpeed Insights
- Check regularly for performance issues

### 2. AdSense Performance
- Monitor revenue via AdSense dashboard
- Optimize ad placements based on performance
- A/B test different ad configurations

## 🔒 Security Considerations

### 1. Headers
Security headers are configured in `netlify.toml`:
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff

### 2. Content Security Policy
Consider adding CSP headers for enhanced security:

```toml
# Add to netlify.toml
[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' *.googletagmanager.com *.google-analytics.com *.googlesyndication.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src fonts.gstatic.com; img-src 'self' data: *.google-analytics.com *.googlesyndication.com;"
```

## 🚨 Important Notes

### AdSense Compliance
- Ensure your content meets AdSense policies
- Don't click your own ads
- Maintain good user experience
- Follow placement policies

### Performance
- Monitor page load times
- Optimize images before upload
- Use WebP format when possible
- Monitor Core Web Vitals

### Legal
- Add Privacy Policy (required for AdSense)
- Add Terms of Service
- Implement cookie consent if targeting EU users

## 📞 Support

If you need help with deployment or customization:
- Email: hello@nexgenaistudio.com
- Documentation: Check README.md for detailed setup

## 🎉 You're All Set!

Your website should now be live and monetized with AdSense. Monitor your analytics and AdSense dashboard to track performance and optimize for better results.

Remember to:
- ✅ Replace all placeholder IDs
- ✅ Submit sitemap to search engines  
- ✅ Monitor performance metrics
- ✅ Keep content fresh with regular blog posts
- ✅ Optimize based on user behavior

Happy earning! 💰
