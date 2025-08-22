import AdSense from '../AdSense'

// Header Banner Ad (728x90)
export const HeaderBannerAd = () => (
  <AdSense 
    adSlot="1234567890"
    className="adsense-tablet hidden md:block"
  />
)

// Sidebar Ad (300x250)
export const SidebarAd = () => (
  <AdSense 
    adSlot="2345678901"
    className="adsense-sidebar"
    style={{ width: '300px', height: '250px' }}
  />
)

// Mobile Banner Ad (320x100)
export const MobileBannerAd = () => (
  <AdSense 
    adSlot="3456789012"
    className="adsense-mobile block md:hidden"
  />
)

// In-Article Ad (Responsive)
export const InArticleAd = () => (
  <AdSense 
    adSlot="4567890123"
    adFormat="fluid"
    className="my-8"
  />
)

// Footer Ad (970x250)
export const FooterAd = () => (
  <AdSense 
    adSlot="5678901234"
    className="adsense-desktop hidden lg:block"
  />
)

// Square Ad (300x300)
export const SquareAd = () => (
  <AdSense 
    adSlot="6789012345"
    className="adsense-square"
    style={{ width: '300px', height: '300px' }}
  />
)
