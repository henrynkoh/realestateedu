'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Listing } from '@/types'
import { fetchListingById } from '@/services/nwmls'

// Mock data for a specific listing (would be fetched from API in a real app)
const MOCK_LISTING: Listing = {
  id: '1',
  price: 499000,
  address: '123 Main St, Seattle, WA 98101',
  bedrooms: 3,
  bathrooms: 2,
  squareFeet: 1500,
  propertyType: 'Single Family',
  yearBuilt: 2010,
  description: 'Beautiful modern home in the heart of downtown. This stunning property features an open floor plan, updated kitchen with stainless steel appliances, and a spacious backyard perfect for entertaining. Walking distance to shops, restaurants, and parks. Don\'t miss this opportunity!',
  photos: ['/images/house1.jpg'],
  estimatedRent: 2500,
  propertyTaxes: 3500,
  insuranceCost: 1200,
  maintenanceCost: 1800,
  mortgageRate: 0.0675,
}

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  const [listing, setListing] = useState<Listing | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchListing = async () => {
      try {
        // In a real app, this would fetch from the API
        // const data = await fetchListingById(params.id)
        
        // For demo purposes, use mock data
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500))
        
        // Check if this is our mock listing ID
        if (params.id === '1') {
          setListing(MOCK_LISTING)
        } else {
          // For demo purposes, use a modified version of the mock data
          setListing({
            ...MOCK_LISTING,
            id: params.id,
            price: 500000 + Math.floor(Math.random() * 300000),
            address: `${Math.floor(Math.random() * 999)} ${['Oak', 'Pine', 'Maple', 'Cedar'].at(Math.floor(Math.random() * 4))} St, Seattle, WA 98101`,
            bedrooms: Math.floor(Math.random() * 3) + 2, // 2-4 bedrooms
            bathrooms: Math.random() < 0.5 ? Math.floor(Math.random() * 2) + 2 : Math.floor(Math.random() * 2) + 2.5, // 2-3 or 2.5-3.5 bathrooms
          })
        }
      } catch (error) {
        console.error('Failed to fetch listing:', error)
        router.push('/listings')
      } finally {
        setLoading(false)
      }
    }

    fetchListing()
  }, [params.id, router])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 flex justify-center items-center">
          <div className="text-gray-500">Loading listing details...</div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!listing) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-yellow-700">
            Listing not found. <Link href="/listings" className="underline">Browse all listings</Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-4">
          <Link href="/listings" className="text-primary-600 hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Listings
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Property Images */}
          <div className="h-80 bg-gray-200 relative">
            {/* Placeholder for actual listing image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-lg">
              Property Image Gallery
            </div>
          </div>

          {/* Property Details */}
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{formatCurrency(listing.price)}</h1>
              <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-semibold rounded-full">
                {listing.propertyType}
              </span>
            </div>

            <p className="text-gray-700 text-lg mb-4">{listing.address}</p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Bedrooms</p>
                <p className="text-xl font-semibold">{listing.bedrooms}</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Bathrooms</p>
                <p className="text-xl font-semibold">{listing.bathrooms}</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Square Feet</p>
                <p className="text-xl font-semibold">{listing.squareFeet.toLocaleString()}</p>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="text-gray-700">{listing.description}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Property Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Year Built</span>
                  <span className="font-medium">{listing.yearBuilt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Property Type</span>
                  <span className="font-medium">{listing.propertyType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estimated Monthly Rent</span>
                  <span className="font-medium">{formatCurrency(listing.estimatedRent)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual Property Tax</span>
                  <span className="font-medium">{formatCurrency(listing.propertyTaxes)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual Insurance</span>
                  <span className="font-medium">{formatCurrency(listing.insuranceCost)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual Maintenance</span>
                  <span className="font-medium">{formatCurrency(listing.maintenanceCost)}</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Link 
                href={`/analysis?listingId=${listing.id}`}
                className="btn btn-primary flex-1"
              >
                Analyze Investment
              </Link>
              <button className="btn btn-secondary flex-1">
                Schedule Viewing
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 