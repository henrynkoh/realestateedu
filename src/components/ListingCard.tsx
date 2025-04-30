import Link from 'next/link'
import { Listing } from '@/types'

interface ListingCardProps {
  listing: Listing
}

export default function ListingCard({ listing }: ListingCardProps) {
  const { 
    id, 
    price, 
    address, 
    bedrooms, 
    bathrooms, 
    squareFeet, 
    propertyType, 
    description 
  } = listing

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  })

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 bg-gray-200">
        {/* Placeholder for actual listing image */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          Property Image
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800 truncate">{formatter.format(price)}</h3>
          <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs font-semibold rounded-full">
            {propertyType}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-2 truncate">{address}</p>
        
        <div className="flex justify-between text-gray-600 text-sm mb-4">
          <span>{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
          <span>{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
          <span>{squareFeet.toLocaleString()} sqft</span>
        </div>
        
        <p className="text-gray-700 mb-4 text-sm line-clamp-2">{description}</p>
        
        <Link
          href={`/listings/${id}`}
          className="btn btn-primary w-full text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  )
} 