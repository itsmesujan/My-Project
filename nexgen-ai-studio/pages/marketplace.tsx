import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Navigation from '../components/Navigation'
import { SidebarAd, InArticleAd } from '../components/ads/AdUnits'
import Link from 'next/link'
import { MagnifyingGlassIcon, FunnelIcon, StarIcon } from '@heroicons/react/24/outline'

const MarketplacePage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('popular')

  const categories = [
    'All Categories',
    'Website Templates',
    'UI Kits',
    'Mobile Apps',
    'Dashboards',
    'Landing Pages',
    'E-commerce',
    'Portfolio',
    'Blog Themes',
    'Admin Panels'
  ]

  const templates = [
    {
      id: 1,
      title: "Modern E-commerce Website",
      category: "Website Templates",
      price: 49,
      rating: 4.8,
      reviews: 234,
      image: "/images/templates/ecommerce-1.jpg",
      tags: ["React", "Next.js", "Tailwind"],
      featured: true
    },
    {
      id: 2,
      title: "Dashboard UI Kit",
      category: "UI Kits",
      price: 35,
      rating: 4.9,
      reviews: 156,
      image: "/images/templates/dashboard-1.jpg",
      tags: ["Vue.js", "Vuetify", "Charts"],
      featured: false
    },
    {
      id: 3,
      title: "Mobile App Template",
      category: "Mobile Apps",
      price: 59,
      rating: 4.7,
      reviews: 89,
      image: "/images/templates/mobile-1.jpg",
      tags: ["React Native", "iOS", "Android"],
      featured: true
    },
    {
      id: 4,
      title: "Creative Portfolio",
      category: "Portfolio",
      price: 29,
      rating: 4.6,
      reviews: 167,
      image: "/images/templates/portfolio-1.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      featured: false
    },
    {
      id: 5,
      title: "SaaS Landing Page",
      category: "Landing Pages",
      price: 39,
      rating: 4.8,
      reviews: 203,
      image: "/images/templates/saas-1.jpg",
      tags: ["React", "Framer Motion", "SEO"],
      featured: true
    },
    {
      id: 6,
      title: "Blog Theme Pro",
      category: "Blog Themes",
      price: 25,
      rating: 4.5,
      reviews: 134,
      image: "/images/templates/blog-1.jpg",
      tags: ["WordPress", "PHP", "MySQL"],
      featured: false
    }
  ]

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || template.category.toLowerCase() === selectedCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  return (
    <Layout 
      title="Marketplace - Premium Digital Templates"
      description="Browse our extensive collection of premium digital templates, UI kits, and design assets. Find the perfect template for your next project."
      keywords="marketplace, digital templates, UI kits, website templates, design assets"
    >
      <Navigation />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white border-b border-gray-200">
          <div className="container-custom section-padding">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Digital <span className="text-gradient">Marketplace</span>
              </h1>
              <p className="text-xl text-gray-600">
                Discover premium templates and digital assets for your projects
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-field pl-10"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="container-custom py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                <h3 className="font-heading font-semibold mb-4 flex items-center">
                  <FunnelIcon className="h-5 w-5 mr-2" />
                  Filters
                </h3>
                
                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category === 'All Categories' ? 'all' : category)}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          (selectedCategory === 'all' && category === 'All Categories') ||
                          selectedCategory === category
                            ? 'bg-primary-100 text-primary-700'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {['All Prices', 'Free', '$1 - $25', '$26 - $50', '$51 - $100', '$100+'].map((range) => (
                      <button
                        key={range}
                        onClick={() => setPriceRange(range)}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          priceRange === range
                            ? 'bg-primary-100 text-primary-700'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Sidebar Ad */}
              <SidebarAd />
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Sort Options */}
              <div className="bg-white rounded-xl p-4 shadow-lg mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <p className="text-gray-600 mb-4 sm:mb-0">
                    Showing {filteredTemplates.length} results
                  </p>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="newest">Newest First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>

              {/* Templates Grid */}
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTemplates.map((template) => (
                  <div key={template.id} className="card overflow-hidden">
                    {template.featured && (
                      <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                        Featured
                      </div>
                    )}
                    
                    <div className="aspect-w-16 aspect-h-10 bg-gray-200">
                      <img 
                        src={template.image} 
                        alt={template.title}
                        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-primary-600 font-medium">
                          {template.category}
                        </span>
                        <span className="text-2xl font-bold text-primary-600">
                          ${template.price}
                        </span>
                      </div>
                      
                      <h3 className="font-heading font-semibold text-lg mb-2">
                        {template.title}
                      </h3>
                      
                      <div className="flex items-center mb-3">
                        <div className="flex items-center">
                          <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm font-medium">{template.rating}</span>
                        </div>
                        <span className="text-gray-500 text-sm ml-2">
                          ({template.reviews} reviews)
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {template.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <Link 
                          href={`/template/${template.id}`}
                          className="flex-1 btn-primary text-center"
                        >
                          View Details
                        </Link>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                          ♡
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* In-Article Ad */}
              <div className="my-12">
                <InArticleAd />
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="btn-outline">
                  Load More Templates
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MarketplacePage
