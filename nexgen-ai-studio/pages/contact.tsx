import { useState } from 'react'
import Layout from '../components/Layout'
import Navigation from '../components/Navigation'
import { InArticleAd } from '../components/ads/AdUnits'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ClockIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      })
    }, 2000)
  }

  const services = [
    {
      title: "Custom Website Design",
      description: "Bespoke website designs tailored to your brand and business needs",
      price: "Starting at $2,500",
      features: ["Custom Design", "Responsive Layout", "SEO Optimized", "CMS Integration"]
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions for web and mobile applications",
      price: "Starting at $1,800",
      features: ["User Research", "Wireframes", "Prototypes", "User Testing"]
    },
    {
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with payment integration",
      price: "Starting at $3,500",
      features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Analytics"]
    },
    {
      title: "Mobile App Design",
      description: "Native and cross-platform mobile application designs",
      price: "Starting at $4,000",
      features: ["iOS & Android", "User Interface", "App Store Ready", "Backend Integration"]
    }
  ]

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      title: "Email Us",
      details: "hello@nexgenaistudio.com",
      description: "Send us an email anytime!"
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm EST"
    },
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: "Visit Us",
      details: "123 Design Street, Creative City, CC 12345",
      description: "Come and visit our office"
    },
    {
      icon: <ClockIcon className="h-6 w-6" />,
      title: "Working Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM",
      description: "Weekend support available"
    }
  ]

  return (
    <Layout 
      title="Contact Us - Get Your Custom Design Project Started"
      description="Contact NexGen AI Studio for custom web design, UI/UX, and digital solutions. Get a free quote for your next project."
      keywords="contact, custom design, web development, UI UX design, freelance designer"
    >
      <Navigation />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white border-b border-gray-200">
          <div className="container-custom section-padding">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Let's Work <span className="text-gradient">Together</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have a project in mind? We'd love to hear about it. Get in touch and let's create something amazing together.
              </p>
            </div>
          </div>
        </section>

        <div className="container-custom py-16">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-heading font-bold mb-6">Start Your Project</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-green-600 mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="input-field"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="input-field"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="Your Company Name"
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Type *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          required
                          className="input-field"
                        >
                          <option value="">Select Project Type</option>
                          <option value="website">Website Design</option>
                          <option value="ecommerce">E-commerce</option>
                          <option value="mobile-app">Mobile App</option>
                          <option value="ui-ux">UI/UX Design</option>
                          <option value="branding">Branding</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                          Budget Range *
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          required
                          className="input-field"
                        >
                          <option value="">Select Budget</option>
                          <option value="1000-2500">$1,000 - $2,500</option>
                          <option value="2500-5000">$2,500 - $5,000</option>
                          <option value="5000-10000">$5,000 - $10,000</option>
                          <option value="10000+">$10,000+</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline *
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                      >
                        <option value="">Select Timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-2weeks">1-2 weeks</option>
                        <option value="1-month">1 month</option>
                        <option value="2-3months">2-3 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="input-field"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="loading-spinner mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-6">Get in Touch</h2>
                  <p className="text-gray-600 mb-8">
                    We're here to help bring your ideas to life. Whether you need a simple website 
                    or a complex web application, our team is ready to deliver exceptional results.
                  </p>
                </div>

                {/* Contact Info Cards */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-4">
                          {info.icon}
                        </div>
                        <h3 className="font-semibold">{info.title}</h3>
                      </div>
                      <p className="font-medium mb-1">{info.details}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  ))}
                </div>

                {/* In-Article Ad */}
                <InArticleAd />

                {/* Services Overview */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-heading font-bold mb-6">Our Services</h3>
                  <div className="space-y-6">
                    {services.map((service, index) => (
                      <div key={index} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{service.title}</h4>
                          <span className="text-primary-600 font-medium text-sm">{service.price}</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <span 
                              key={featureIndex}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-heading font-bold mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">How long does a typical project take?</h4>
                      <p className="text-gray-600 text-sm">
                        Project timelines vary based on complexity, but most websites take 2-6 weeks from start to finish.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Do you provide ongoing support?</h4>
                      <p className="text-gray-600 text-sm">
                        Yes, we offer maintenance packages and ongoing support for all our projects.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Can you work with my existing brand?</h4>
                      <p className="text-gray-600 text-sm">
                        Absolutely! We can work with your existing brand guidelines or help develop new ones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
