export interface Listing {
  id: string
  price: number
  address: string
  bedrooms: number
  bathrooms: number
  squareFeet: number
  propertyType: string
  yearBuilt: number
  description: string
  photos: string[]
  estimatedRent: number
  propertyTaxes: number
  insuranceCost: number
  maintenanceCost: number
  mortgageRate?: number
}

export interface Module {
  id: string
  title: string
  content: string
  quiz: Quiz[]
}

export interface Quiz {
  question: string
  options: string[]
  correct: number
}

export interface UserProgress {
  moduleId: string
  score: number
} 