import Head from 'next/head'
import Script from 'next/script'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
  keywords?: string
  canonical?: string
}

const Layout = ({ 
  children, 
  title = "NexGen AI Studio - Premium Digital Templates & Assets",
  description = "Discover premium digital templates, UI kits, and assets for your next project. High-quality designs for websites, apps, and digital products.",
  keywords = "digital templates, UI kits, website templates, design assets, premium templates, web design, app design",
  canonical
}: LayoutProps) => {
  const siteUrl = "https://nexgen-ai-studio.netlify.app"
  const fullTitle = title.includes("NexGen AI Studio") ? title : `${title} | NexGen AI Studio`

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical || siteUrl} />
        <meta property="og:site_name" content="NexGen AI Studio" />
        <meta property="og:image" content={`${siteUrl}/images/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/images/og-image.jpg`} />
        
        {/* Canonical */}
        <link rel="canonical" href={canonical || siteUrl} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#2563eb" />
        
        {/* Additional SEO */}
        <meta name="author" content="NexGen AI Studio" />
        <meta name="language" content="en" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "NexGen AI Studio",
              "url": siteUrl,
              "logo": `${siteUrl}/images/logo.svg`,
              "description": description,
              "sameAs": [
                "https://twitter.com/nexgenaistudio",
                "https://linkedin.com/company/nexgenaistudio"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-XXX-XXX-XXXX",
                "contactType": "customer service"
              }
            })
          }}
        />
      </Head>

      {/* Google AdSense */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXX"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>

      {/* Auto Ads */}
      <Script id="adsense-auto-ads" strategy="afterInteractive">
        {`
          (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-XXXXXXXXXXXXXXXXX",
            enable_page_level_ads: true
          });
        `}
      </Script>

      <main className="min-h-screen">
        {children}
      </main>
    </>
  )
}

export default Layout
