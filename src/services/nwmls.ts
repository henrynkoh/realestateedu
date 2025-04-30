import axios from 'axios'
import { Listing } from '@/types'

// In a real application, this would be set from environment variables
const API_BASE_URL = process.env.NEXT_PUBLIC_NWMLS_API_BASE_URL || 'https://api.nwmls.com'
const API_KEY = process.env.NWMLS_API_KEY

// Create axios instance for NWMLS API
const nwmlsApiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  }
})

/**
 * Fetch daily listings from NWMLS API
 */
export const fetchDailyListings = async (filters = {}) => {
  // This is a mock implementation since we don't have actual NWMLS API access
  // In a real app, we would call the API like this:
  // const response = await nwmlsApiClient.get('/listings/daily', { params: filters })
  // return response.data
  
  // For demo purposes, we're returning mock data
  return mockFetchDailyListings(filters)
}

/**
 * Mock function to simulate fetching listings
 */
const mockFetchDailyListings = async (filters: any): Promise<Listing[]> => {
  console.log('Mock fetch listings with filters:', filters)
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  // Mock data is provided in the listings page component
  // In a real application, this would be removed and the actual API would be used
  return []
}

/**
 * Fetch a specific listing by ID
 */
export const fetchListingById = async (id: string) => {
  // This is a mock implementation
  // In a real app, we would call the API like this:
  // const response = await nwmlsApiClient.get(`/listings/${id}`)
  // return response.data
  
  // For demo purposes, we're simulating a delay
  await new Promise(resolve => setTimeout(resolve, 300))
  
  // Return null to indicate listing not found
  return null
}

/**
 * Fetch market trends data
 */
export const fetchMarketTrends = async () => {
  // This is a mock implementation
  // In a real app, we would call the API like this:
  // const response = await nwmlsApiClient.get('/market/trends')
  // return response.data
  
  return {
    medianPrice: 550000,
    averageDaysOnMarket: 15,
    inventory: 2.5, // months of inventory
    yearOverYearChange: 5.2 // percentage
  }
} 