import fs from 'fs'
import path from 'path'

export const generateSitemap = () => {
  const baseUrl = 'https://nexgen-ai-studio.netlify.app'
  
  const staticPages = [
    '',
    '/marketplace',
    '/blog',
    '/about',
    '/contact',
    '/admin'
  ]
  
  // In a real app, you'd fetch these from your database
  const blogPosts = [
    '/blog/1',
    '/blog/2',
    '/blog/3',
    '/blog/4',
    '/blog/5',
    '/blog/6'
  ]
  
  const templates = [
    '/template/1',
    '/template/2',
    '/template/3',
    '/template/4',
    '/template/5',
    '/template/6'
  ]
  
  const allPages = [...staticPages, ...blogPosts, ...templates]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map((page) => {
    return `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.includes('/blog/') ? 'weekly' : page === '' ? 'daily' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : page.includes('/blog/') ? '0.8' : '0.7'}</priority>
  </url>`
  })
  .join('')}
</urlset>`

  return sitemap
}

export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# AdSense
User-agent: Mediapartners-Google
Allow: /

Sitemap: https://nexgen-ai-studio.netlify.app/sitemap.xml

# Disallow admin pages
Disallow: /admin/
Disallow: /api/

# Allow important pages
Allow: /
Allow: /marketplace
Allow: /blog
Allow: /contact
Allow: /about`
}

export const generateRSSFeed = () => {
  const baseUrl = 'https://nexgen-ai-studio.netlify.app'
  
  // In a real app, you'd fetch these from your database
  const blogPosts = [
    {
      id: 1,
      title: "10 Web Design Trends That Will Dominate 2025",
      description: "Discover the latest web design trends that are shaping the digital landscape in 2025.",
      date: "2025-01-15",
      author: "Sarah Johnson"
    },
    {
      id: 2,
      title: "How to Choose the Perfect Color Palette for Your Website",
      description: "Learn the psychology behind colors and how to create harmonious color schemes.",
      date: "2025-01-12",
      author: "Mike Chen"
    }
  ]
  
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/" xmlns:slash="http://purl.org/rss/1.0/modules/slash/">
  <channel>
    <title>NexGen AI Studio Blog</title>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <link>${baseUrl}/blog</link>
    <description>Latest web design trends, tutorials, and insights from NexGen AI Studio</description>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <language>en-US</language>
    <sy:updatePeriod>hourly</sy:updatePeriod>
    <sy:updateFrequency>1</sy:updateFrequency>
    <generator>NexGen AI Studio</generator>
    
${blogPosts
  .map((post) => {
    return `    <item>
      <title>${post.title}</title>
      <link>${baseUrl}/blog/${post.id}</link>
      <comments>${baseUrl}/blog/${post.id}#comments</comments>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <dc:creator><![CDATA[${post.author}]]></dc:creator>
      <guid isPermaLink="false">${baseUrl}/blog/${post.id}</guid>
      <description><![CDATA[${post.description}]]></description>
    </item>`
  })
  .join('\n')}
  </channel>
</rss>`

  return rss
}

export const generateMetaData = (page: {
  title?: string
  description?: string
  keywords?: string
  image?: string
  type?: string
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
}) => {
  const baseUrl = 'https://nexgen-ai-studio.netlify.app'
  const defaultTitle = 'NexGen AI Studio - Premium Digital Templates & Assets'
  const defaultDescription = 'Discover premium digital templates, UI kits, and assets for your next project. High-quality designs for websites, apps, and digital products.'
  const defaultImage = `${baseUrl}/images/og-image.jpg`
  
  return {
    title: page.title || defaultTitle,
    description: page.description || defaultDescription,
    keywords: page.keywords || 'digital templates, UI kits, website templates, design assets',
    openGraph: {
      type: page.type || 'website',
      title: page.title || defaultTitle,
      description: page.description || defaultDescription,
      url: baseUrl,
      siteName: 'NexGen AI Studio',
      images: [
        {
          url: page.image || defaultImage,
          width: 1200,
          height: 630,
          alt: page.title || defaultTitle,
        },
      ],
      publishedTime: page.publishedTime,
      modifiedTime: page.modifiedTime,
      authors: page.author ? [page.author] : undefined,
      section: page.section,
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title || defaultTitle,
      description: page.description || defaultDescription,
      images: [page.image || defaultImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}
