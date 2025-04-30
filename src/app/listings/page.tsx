'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ListingCard from '@/components/ListingCard'
import { Listing } from '@/types'
import { fetchDailyListings } from '@/services/nwmls'

// Mock data (replace with actual API data)
const MOCK_LISTINGS: Listing[] = [
  {
    id: '1',
    price: 499000,
    address: '123 Main St, Seattle, WA 98101',
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1500,
    propertyType: 'Single Family',
    yearBuilt: 2010,
    description: 'Beautiful modern home in the heart of downtown',
    photos: ['/images/house1.jpg'],
    estimatedRent: 2500,
    propertyTaxes: 3500,
    insuranceCost: 1200,
    maintenanceCost: 1800,
    mortgageRate: 0.0675,
  },
  {
    id: '2',
    price: 625000,
    address: '456 Oak Ave, Bellevue, WA 98004',
    bedrooms: 4,
    bathrooms: 2.5,
    squareFeet: 2100,
    propertyType: 'Single Family',
    yearBuilt: 2005,
    description: 'Spacious family home with a large backyard',
    photos: ['/images/house2.jpg'],
    estimatedRent: 3000,
    propertyTaxes: 4200,
    insuranceCost: 1500,
    maintenanceCost: 2200,
    mortgageRate: 0.0675,
  },
  {
    id: '3',
    price: 389000,
    address: '789 Pine Ln, Kirkland, WA 98033',
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1200,
    propertyType: 'Condo',
    yearBuilt: 2015,
    description: 'Modern condo with great amenities',
    photos: ['/images/house3.jpg'],
    estimatedRent: 2200,
    propertyTaxes: 2800,
    insuranceCost: 800,
    maintenanceCost: 1200,
    mortgageRate: 0.0675,
  },
  {
    id: '4',
    price: 849000,
    address: '321 Lake Dr, Mercer Island, WA 98040',
    bedrooms: 5,
    bathrooms: 3.5,
    squareFeet: 3200,
    propertyType: 'Single Family',
    yearBuilt: 2000,
    description: 'Luxurious home with lake views',
    photos: ['/images/house4.jpg'],
    estimatedRent: 4200,
    propertyTaxes: 7500,
    insuranceCost: 2200,
    maintenanceCost: 3500,
    mortgageRate: 0.0675,
  },
]

export default function ListingsPage() {
  const [listings, setListings] = useState<Listing[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    minBeds: '',
    minBaths: '',
    propertyType: '',
  })

  useEffect(() => {
    // Simulate API fetch
    const fetchListings = async () => {
      try {
        // In a real app, this would be: const data = await fetchDailyListings()
        setListings(MOCK_LISTINGS)
      } catch (error) {
        console.error('Failed to fetch listings:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchListings()
  }, [])

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  const filteredListings = listings.filter(listing => {
    const { minPrice, maxPrice, minBeds, minBaths, propertyType } = filters
    
    if (minPrice && listing.price < parseInt(minPrice)) return false
    if (maxPrice && listing.price > parseInt(maxPrice)) return false
    if (minBeds && listing.bedrooms < parseInt(minBeds)) return false
    if (minBaths && listing.bathrooms < parseFloat(minBaths)) return false
    if (propertyType && listing.propertyType !== propertyType) return false
    
    return true
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Real Estate Listings</h1>
        
        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Min Price</label>
              <input
                type="number"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleFilterChange}
                className="input"
                placeholder="Min Price"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Max Price</label>
              <input
                type="number"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleFilterChange}
                className="input"
                placeholder="Max Price"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Min Beds</label>
              <input
                type="number"
                name="minBeds"
                value={filters.minBeds}
                onChange={handleFilterChange}
                className="input"
                placeholder="Min Beds"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Min Baths</label>
              <input
                type="number"
                name="minBaths"
                value={filters.minBaths}
                onChange={handleFilterChange}
                className="input"
                placeholder="Min Baths"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
              <select
                name="propertyType"
                value={filters.propertyType}
                onChange={handleFilterChange}
                className="input"
              >
                <option value="">All Types</option>
                <option value="Single Family">Single Family</option>
                <option value="Condo">Condo</option>
                <option value="Townhouse">Townhouse</option>
                <option value="Multi-Family">Multi-Family</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Listings */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-gray-500">Loading listings...</div>
          </div>
        ) : filteredListings.length === 0 ? (
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-yellow-700">
            No listings found matching your criteria. Try adjusting your filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
} 