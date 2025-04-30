'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnalysisChart from '@/components/AnalysisChart'
import { Listing } from '@/types'

// Define analysis scenario types
type Scenario = 'buy-to-rent' | 'flip' | 'long-term-hold'

// Define feasibility result type
interface FeasibilityResult {
  scenario: Scenario
  roi: number
  cashFlow: number
  totalExpenses: number
  netProfit: number
}

export default function AnalysisPage() {
  // State for the property to analyze
  const [property, setProperty] = useState<Listing>({
    id: 'custom',
    price: 500000,
    address: 'Enter property address',
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1500,
    propertyType: 'Single Family',
    yearBuilt: 2010,
    description: 'Custom property for analysis',
    photos: [],
    estimatedRent: 2500,
    propertyTaxes: 5000,
    insuranceCost: 1200,
    maintenanceCost: 1800,
    mortgageRate: 0.0675
  })

  // Handler for form inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProperty(prev => ({
      ...prev,
      [name]: name === 'address' || name === 'description' || name === 'propertyType' 
        ? value 
        : Number(value)
    }))
  }

  // Calculate feasibility metrics for different scenarios
  const calculateFeasibility = (scenario: Scenario): FeasibilityResult => {
    const {
      price,
      estimatedRent,
      propertyTaxes,
      insuranceCost,
      maintenanceCost,
      mortgageRate = 0.0675, // Default 6.75% if not provided
    } = property

    // Calculate monthly mortgage payment (simple calculation, not accounting for amortization)
    const mortgagePayment = (price * 0.8 * mortgageRate) / 12 // Assuming 20% down payment

    let roi = 0
    let cashFlow = 0
    let totalExpenses = 0
    let netProfit = 0

    switch (scenario) {
      case 'buy-to-rent':
        // Monthly expenses
        const monthlyExpenses = (propertyTaxes + insuranceCost + maintenanceCost) / 12 + mortgagePayment
        cashFlow = estimatedRent - monthlyExpenses
        
        // Annual return on investment
        const annualCashFlow = cashFlow * 12
        const downPayment = price * 0.2 // 20% down payment
        roi = (annualCashFlow / downPayment) * 100
        
        totalExpenses = monthlyExpenses * 12
        netProfit = annualCashFlow
        break

      case 'flip':
        // Assume renovation costs at 10% of purchase price
        const renovationCost = price * 0.1
        
        // Assume selling costs at 8% (realtor fees, closing costs, etc.)
        const sellingCosts = price * 0.08
        
        // Assume 15% appreciation after renovation
        const salePrice = price * 1.15
        
        // Calculate holding costs for 6 months
        const holdingCosts = ((propertyTaxes + insuranceCost) / 2) + ((price * 0.8 * mortgageRate) / 2)
        
        totalExpenses = renovationCost + sellingCosts + holdingCosts
        netProfit = salePrice - price - totalExpenses
        roi = (netProfit / (price * 0.2)) * 100 // ROI based on down payment
        cashFlow = 0 // No monthly cash flow in flip scenario
        break

      case 'long-term-hold':
        // Assume 3% annual appreciation
        const annualAppreciation = price * 0.03
        
        // Monthly expenses same as buy-to-rent
        const monthlyHoldingExpenses = (propertyTaxes + insuranceCost + maintenanceCost) / 12 + mortgagePayment
        cashFlow = estimatedRent - monthlyHoldingExpenses
        
        totalExpenses = monthlyHoldingExpenses * 12
        
        // Net profit includes both cash flow and appreciation
        netProfit = (cashFlow * 12) + annualAppreciation
        
        // ROI considers both cash flow and appreciation
        roi = (netProfit / (price * 0.2)) * 100
        break
    }

    return {
      scenario,
      roi: parseFloat(roi.toFixed(2)),
      cashFlow: parseFloat(cashFlow.toFixed(2)),
      totalExpenses: parseFloat(totalExpenses.toFixed(2)),
      netProfit: parseFloat(netProfit.toFixed(2))
    }
  }

  // Calculate feasibility for all scenarios
  const scenarios: Scenario[] = ['buy-to-rent', 'flip', 'long-term-hold']
  const results = scenarios.map(scenario => calculateFeasibility(scenario))

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Property Investment Analysis</h1>
        
        {/* Property Input Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Property Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Purchase Price</label>
              <input
                type="number"
                name="price"
                value={property.price}
                onChange={handleInputChange}
                className="input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Monthly Rent</label>
              <input
                type="number"
                name="estimatedRent"
                value={property.estimatedRent}
                onChange={handleInputChange}
                className="input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Annual Property Taxes</label>
              <input
                type="number"
                name="propertyTaxes"
                value={property.propertyTaxes}
                onChange={handleInputChange}
                className="input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Annual Insurance Cost</label>
              <input
                type="number"
                name="insuranceCost"
                value={property.insuranceCost}
                onChange={handleInputChange}
                className="input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Annual Maintenance Cost</label>
              <input
                type="number"
                name="maintenanceCost"
                value={property.maintenanceCost}
                onChange={handleInputChange}
                className="input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mortgage Interest Rate (%)</label>
              <input
                type="number"
                name="mortgageRate"
                value={property.mortgageRate ? property.mortgageRate * 100 : 6.75}
                onChange={(e) => {
                  const value = parseFloat(e.target.value)
                  setProperty(prev => ({
                    ...prev,
                    mortgageRate: value / 100
                  }))
                }}
                step="0.01"
                className="input"
              />
            </div>
          </div>
        </div>
        
        {/* Results */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Feasibility Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {results.map(result => (
              <div key={result.scenario} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3 capitalize">{result.scenario.replace(/-/g, ' ')}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">ROI:</span>
                    <span className={`font-medium ${result.roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {result.roi}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Cash Flow:</span>
                    <span className={`font-medium ${result.cashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {formatCurrency(result.cashFlow)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual Expenses:</span>
                    <span className="font-medium">{formatCurrency(result.totalExpenses)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual Profit:</span>
                    <span className={`font-medium ${result.netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {formatCurrency(result.netProfit)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Charts */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Comparison Chart</h2>
          <AnalysisChart data={results} />
        </div>
      </main>
      <Footer />
    </div>
  )
} 