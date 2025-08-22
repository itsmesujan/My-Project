import Layout from '../components/Layout'
import Navigation from '../components/Navigation'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <Layout 
      title="About Us - NexGen AI Studio"
      description="Learn about NexGen AI Studio, our mission to provide premium digital templates and assets for modern web development."
      keywords="about nexgen ai studio, digital templates, web design company"
    >
      <Navigation />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white border-b border-gray-200">
          <div className="container-custom section-padding">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                About <span className="text-gradient">NexGen AI Studio</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're passionate about creating premium digital assets that help developers and designers build amazing projects faster.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-heading font-bold mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-4">
                  Founded in 2024, NexGen AI Studio emerged from a simple observation: developers and designers were spending countless hours creating the same foundational elements for their projects. We believed there had to be a better way.
                </p>
                <p className="text-gray-600 mb-4">
                  Our team of experienced designers and developers set out to create a marketplace where quality meets efficiency. Every template in our collection is meticulously crafted, thoroughly tested, and designed with modern best practices in mind.
                </p>
                <p className="text-gray-600">
                  Today, we serve thousands of customers worldwide, helping them bring their ideas to life faster and more efficiently than ever before.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-heading font-bold mb-6">Our Mission</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="font-semibold mb-2">Quality Design</h3>
                  <p className="text-gray-600 text-sm">Every template meets the highest standards of design and usability.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-semibold mb-2">Speed</h3>
                  <p className="text-gray-600 text-sm">Help developers build projects faster without compromising quality.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-600 text-sm">Stay ahead with cutting-edge design trends and technologies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
