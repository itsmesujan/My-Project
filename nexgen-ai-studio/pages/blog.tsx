import { useState } from 'react'
import Layout from '../components/Layout'
import Navigation from '../components/Navigation'
import { SidebarAd, InArticleAd } from '../components/ads/AdUnits'
import Link from 'next/link'
import { CalendarIcon, UserIcon, TagIcon, ClockIcon } from '@heroicons/react/24/outline'

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    'All Posts',
    'Web Design',
    'UI/UX',
    'Development',
    'Trends',
    'Tutorials',
    'Templates',
    'Tips & Tricks'
  ]

  const blogPosts = [
    {
      id: 1,
      title: "10 Web Design Trends That Will Dominate 2025",
      excerpt: "Discover the latest web design trends that are shaping the digital landscape in 2025. From AI-powered designs to sustainable web practices.",
      content: "Full article content here...",
      author: "Sarah Johnson",
      date: "2025-01-15",
      category: "Trends",
      image: "/images/blog/web-trends-2025.jpg",
      readTime: "5 min read",
      tags: ["Design", "Trends", "2025"],
      featured: true
    },
    {
      id: 2,
      title: "How to Choose the Perfect Color Palette for Your Website",
      excerpt: "Learn the psychology behind colors and how to create harmonious color schemes that enhance user experience and brand identity.",
      content: "Full article content here...",
      author: "Mike Chen",
      date: "2025-01-12",
      category: "Web Design",
      image: "/images/blog/color-palette.jpg",
      readTime: "7 min read",
      tags: ["Colors", "Design", "Psychology"],
      featured: false
    },
    {
      id: 3,
      title: "Building Responsive Layouts with CSS Grid and Flexbox",
      excerpt: "Master modern CSS layout techniques with this comprehensive guide to CSS Grid and Flexbox. Includes practical examples and best practices.",
      content: "Full article content here...",
      author: "Emma Davis",
      date: "2025-01-10",
      category: "Development",
      image: "/images/blog/css-layouts.jpg",
      readTime: "12 min read",
      tags: ["CSS", "Layout", "Responsive"],
      featured: true
    },
    {
      id: 4,
      title: "The Ultimate Guide to UI Design Principles",
      excerpt: "Essential UI design principles every designer should know. Learn about hierarchy, contrast, alignment, and more.",
      content: "Full article content here...",
      author: "Alex Turner",
      date: "2025-01-08",
      category: "UI/UX",
      image: "/images/blog/ui-principles.jpg",
      readTime: "8 min read",
      tags: ["UI", "Design", "Principles"],
      featured: false
    },
    {
      id: 5,
      title: "Creating Engaging Landing Pages That Convert",
      excerpt: "Learn the secrets of high-converting landing pages. From compelling headlines to effective call-to-actions.",
      content: "Full article content here...",
      author: "Lisa Rodriguez",
      date: "2025-01-05",
      category: "Templates",
      image: "/images/blog/landing-pages.jpg",
      readTime: "6 min read",
      tags: ["Landing Pages", "Conversion", "Marketing"],
      featured: false
    },
    {
      id: 6,
      title: "Mastering Typography in Web Design",
      excerpt: "Typography plays a crucial role in web design. Learn how to choose fonts, create hierarchy, and improve readability.",
      content: "Full article content here...",
      author: "David Kim",
      date: "2025-01-03",
      category: "Web Design",
      image: "/images/blog/typography.jpg",
      readTime: "9 min read",
      tags: ["Typography", "Fonts", "Readability"],
      featured: true
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    return selectedCategory === 'all' || post.category.toLowerCase() === selectedCategory.toLowerCase()
  })

  const featuredPosts = blogPosts.filter(post => post.featured)

  return (
    <Layout 
      title="Blog - Web Design Tips, Tutorials & Trends"
      description="Stay updated with the latest web design trends, tutorials, and tips. Learn from industry experts and improve your design skills."
      keywords="web design blog, design tutorials, UI UX tips, web development, design trends"
    >
      <Navigation />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white border-b border-gray-200">
          <div className="container-custom section-padding">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Design <span className="text-gradient">Blog</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest trends, tutorials, and insights from the world of web design and development
              </p>
            </div>
          </div>
        </section>

        <div className="container-custom py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              {/* Categories */}
              <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                <h3 className="font-heading font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category === 'All Posts' ? 'all' : category)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        (selectedCategory === 'all' && category === 'All Posts') ||
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
              
              {/* Featured Posts */}
              <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                <h3 className="font-heading font-semibold mb-4">Featured Posts</h3>
                <div className="space-y-4">
                  {featuredPosts.slice(0, 3).map((post) => (
                    <Link key={post.id} href={`/blog/${post.id}`} className="block group">
                      <div className="flex gap-3">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm group-hover:text-primary-600 transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{post.readTime}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Sidebar Ad */}
              <SidebarAd />
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Featured Article */}
              {featuredPosts.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img 
                        src={featuredPosts[0].image} 
                        alt={featuredPosts[0].title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center mb-3">
                        <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                        <span className="ml-3 text-primary-600 text-sm font-medium">
                          {featuredPosts[0].category}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 hover:text-primary-600 transition-colors">
                        <Link href={`/blog/${featuredPosts[0].id}`}>
                          {featuredPosts[0].title}
                        </Link>
                      </h2>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {featuredPosts[0].excerpt}
                      </p>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <UserIcon className="h-4 w-4 mr-1" />
                        <span className="mr-4">{featuredPosts[0].author}</span>
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        <span className="mr-4">{new Date(featuredPosts[0].date).toLocaleDateString()}</span>
                        <ClockIcon className="h-4 w-4 mr-1" />
                        <span>{featuredPosts[0].readTime}</span>
                      </div>
                      
                      <Link 
                        href={`/blog/${featuredPosts[0].id}`}
                        className="btn-primary inline-block"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* In-Article Ad */}
              <InArticleAd />

              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {filteredPosts.filter(post => !post.featured || post.id !== featuredPosts[0]?.id).map((post) => (
                  <article key={post.id} className="card overflow-hidden">
                    <div className="aspect-w-16 aspect-h-9">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-primary-600 text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>
                      
                      <h3 className="font-heading font-semibold text-xl mb-3 hover:text-primary-600 transition-colors">
                        <Link href={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <UserIcon className="h-4 w-4 mr-1" />
                        <span className="mr-4">{post.author}</span>
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        href={`/blog/${post.id}`}
                        className="btn-outline w-full text-center"
                      >
                        Read Article
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="btn-outline">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage
