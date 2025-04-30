import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">About RealEstateEdu</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At RealEstateEdu, our mission is to empower individuals with the knowledge, tools, and resources 
            needed to make informed real estate investment decisions. We believe that real estate investing 
            should be accessible to everyone, not just industry insiders or wealthy individuals.
          </p>
          <p className="text-gray-700 mb-4">
            We're dedicated to providing comprehensive education and data-driven analysis tools that help 
            our users understand market trends, evaluate investment opportunities, and build wealth through 
            real estate.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            RealEstateEdu was founded in 2023 by a team of real estate professionals, data scientists, and 
            educators who recognized a significant gap in the market. While there was abundant information 
            about real estate investing, much of it was fragmented, outdated, or inaccessible to beginners.
          </p>
          <p className="text-gray-700 mb-4">
            We set out to create a unified platform that combines property listings, investment analysis tools, 
            and educational resources—all designed with both beginners and experienced investors in mind.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Property Listings</h3>
              <p className="text-gray-700">
                Access to thousands of up-to-date property listings with comprehensive details to help you 
                find the perfect investment opportunity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Investment Analysis</h3>
              <p className="text-gray-700">
                Powerful tools to analyze potential returns, compare investment strategies, and make 
                data-driven decisions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Educational Resources</h3>
              <p className="text-gray-700">
                Comprehensive courses, tutorials, and guides covering everything from real estate 
                fundamentals to advanced investment strategies.
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-gray-700 mb-6">
            RealEstateEdu is powered by a diverse team of experts in real estate, technology, education, 
            and finance, all united by a common passion for making real estate investing more accessible.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold">Jane Smith</h3>
              <p className="text-gray-600">CEO & Co-Founder</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-gray-600">CTO & Co-Founder</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold">Sarah Johnson</h3>
              <p className="text-gray-600">Chief Education Officer</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 