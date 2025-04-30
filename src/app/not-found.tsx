import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-gray-600 text-lg max-w-md mx-auto mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
          </p>
          <div className="space-x-4">
            <Link href="/" className="btn btn-primary">
              Return Home
            </Link>
            <Link href="/listings" className="btn btn-outline">
              Browse Listings
            </Link>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">You might be interested in:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link href="/education" className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium mb-2">Educational Resources</h4>
                <p className="text-gray-600">Learn about real estate investing fundamentals</p>
              </Link>
              <Link href="/analysis" className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium mb-2">Investment Analysis</h4>
                <p className="text-gray-600">Analyze potential property investments</p>
              </Link>
              <Link href="/contact" className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium mb-2">Contact Us</h4>
                <p className="text-gray-600">Need help? Reach out to our team</p>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 