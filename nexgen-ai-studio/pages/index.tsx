import Layout from '../components/Layout'
import Navigation from '../components/Navigation'
import { HeaderBannerAd, MobileBannerAd, InArticleAd, FooterAd } from '../components/ads/AdUnits'
import Link from 'next/link'
import { ArrowRightIcon, StarIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const HomePage = () => {
  const features = [
    {
      title: "Premium Quality",
      description: "High-quality templates designed by professional designers",
      icon: "⭐"
    },
    {
      title: "Easy Customization",
      description: "Fully customizable templates with clean, well-documented code",
      icon: "🎨"
    },
    {
      title: "Mobile Responsive",
      description: "All templates are fully responsive and mobile-friendly",
      icon: "📱"
    },
    {
      title: "Fast Support",
      description: "24/7 customer support to help you with any questions",
      icon: "🚀"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Web Developer",
      content: "Amazing templates! Saved me weeks of development time.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Startup Founder",
      content: "Professional designs that helped launch our product quickly.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Freelancer",
      content: "High-quality assets at affordable prices. Highly recommended!",
      rating: 5
    }
  ]

  const categories = [
    { name: "Website Templates", count: 150, image: "/images/website-templates.jpg" },
    { name: "UI Kits", count: 80, image: "/images/ui-kits.jpg" },
    { name: "Mobile Apps", count: 45, image: "/images/mobile-apps.jpg" },
    { name: "Dashboards", count: 35, image: "/images/dashboards.jpg" },
    { name: "Landing Pages", count: 120, image: "/images/landing-pages.jpg" },
    { name: "E-commerce", count: 60, image: "/images/ecommerce.jpg" }
  ]

  return (
    <Layout>
      <Navigation />
      
      {/* Header Ad */}
      <HeaderBannerAd />
      <MobileBannerAd />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in">
              Premium <span className="text-gradient">Digital Templates</span> for Your Next Project
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in animation-delay-200">
              Discover thousands of high-quality templates, UI kits, and digital assets. 
              Build stunning websites and apps faster than ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
              <Link href="/marketplace" className="btn-primary">
                Browse Templates
                <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link href="/contact" className="btn-outline">
                Get Custom Design
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-60 float-animation"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-200 rounded-full opacity-40 float-animation animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent-200 rounded-full opacity-50 float-animation animation-delay-200"></div>
      </section>

      {/* In-Article Ad */}
      <InArticleAd />

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Why Choose <span className="text-gradient">NexGen AI Studio</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide premium digital assets that help you create professional projects faster and more efficiently.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="card p-8 text-center hover:shadow-2xl transition-all duration-500"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-heading font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Browse by <span className="text-gradient">Category</span>
            </h2>
            <p className="text-xl text-gray-600">
              Find the perfect template for your specific needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link 
                key={index}
                href={`/marketplace?category=${category.name.toLowerCase().replace(' ', '-')}`}
                className="card overflow-hidden group"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-600">{category.count} templates available</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* In-Article Ad */}
      <InArticleAd />

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              What Our <span className="text-gradient">Customers Say</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers and bring your ideas to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/marketplace" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Browse Templates
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Ad */}
      <FooterAd />

      {/* Footer */}
      <footer className="bg-gray-900 text-white section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">N</span>
                </div>
                <span className="text-xl font-heading font-bold">NexGen AI Studio</span>
              </div>
              <p className="text-gray-300">
                Premium digital templates and assets for modern web development.
              </p>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/marketplace" className="text-gray-300 hover:text-white transition-colors">Marketplace</Link></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><Link href="/marketplace?category=website-templates" className="text-gray-300 hover:text-white transition-colors">Website Templates</Link></li>
                <li><Link href="/marketplace?category=ui-kits" className="text-gray-300 hover:text-white transition-colors">UI Kits</Link></li>
                <li><Link href="/marketplace?category=mobile-apps" className="text-gray-300 hover:text-white transition-colors">Mobile Apps</Link></li>
                <li><Link href="/marketplace?category=dashboards" className="text-gray-300 hover:text-white transition-colors">Dashboards</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Email: hello@nexgenaistudio.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Design Street, Creative City</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">
              © 2025 NexGen AI Studio. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  )
}

export default HomePage
