'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Module, Quiz, UserProgress } from '@/types'

// Mock education modules (in a real app, these would come from a database)
const EDUCATION_MODULES: Module[] = [
  {
    id: 'basics',
    title: 'Real Estate Basics',
    content: `
      <h3>Introduction to Real Estate Investing</h3>
      <p>Real estate investing involves the purchase, ownership, management, rental, or sale of real estate for profit. It encompasses a wide range of activities, from buying and holding properties to flipping houses and more.</p>
      
      <h3>Key Concepts</h3>
      <ul>
        <li><strong>Appreciation:</strong> The increase in a property's value over time.</li>
        <li><strong>Cash Flow:</strong> The net income from a rental property after all expenses.</li>
        <li><strong>ROI (Return on Investment):</strong> A metric used to evaluate the efficiency of an investment.</li>
        <li><strong>Cap Rate:</strong> The ratio of net operating income to property value.</li>
      </ul>
      
      <h3>Types of Real Estate Investments</h3>
      <p>There are several ways to invest in real estate, including:</p>
      <ul>
        <li>Residential properties (single-family homes, multi-family properties)</li>
        <li>Commercial properties (office buildings, retail spaces)</li>
        <li>Industrial properties (warehouses, factories)</li>
        <li>REITs (Real Estate Investment Trusts)</li>
        <li>Fix-and-flip properties</li>
      </ul>
    `,
    quiz: [
      {
        question: 'What is ROI in real estate investing?',
        options: [
          'Return On Investment - a metric to evaluate investment efficiency',
          'Rate Of Increase - the rate at which property values rise',
          'Rental Opportunity Index - a measure of rental market demand',
          'Real Owner Income - the taxable income from a property'
        ],
        correct: 0
      },
      {
        question: 'Which of the following is NOT a common type of real estate investment?',
        options: [
          'Residential properties',
          'Commercial properties',
          'Stock market shares',
          'REITs'
        ],
        correct: 2
      },
      {
        question: 'What is cash flow in real estate?',
        options: [
          'The total income from a property before expenses',
          'The net income from a rental property after all expenses',
          'The amount of money needed to purchase a property',
          'The profit made when selling a property'
        ],
        correct: 1
      }
    ]
  },
  {
    id: 'analysis',
    title: 'Property Analysis Fundamentals',
    content: `
      <h3>Understanding Property Valuation</h3>
      <p>Property valuation is the process of determining the current market value of a property. Several methods can be used for valuation, including:</p>
      <ul>
        <li><strong>Comparative Market Analysis (CMA):</strong> Comparing the property to similar properties that have recently sold.</li>
        <li><strong>Income Approach:</strong> Valuing a property based on the income it generates (mainly for investment properties).</li>
        <li><strong>Cost Approach:</strong> Estimating the cost to rebuild the property from scratch plus the land value.</li>
      </ul>
      
      <h3>Key Financial Metrics</h3>
      <p>When analyzing a property, investors should consider several financial metrics:</p>
      <ul>
        <li><strong>Cash-on-Cash Return:</strong> Annual cash flow divided by total cash invested.</li>
        <li><strong>Gross Rent Multiplier (GRM):</strong> Property price divided by annual gross rental income.</li>
        <li><strong>Debt Service Coverage Ratio (DSCR):</strong> Net operating income divided by debt service (loan payments).</li>
        <li><strong>1% Rule:</strong> Monthly rent should be at least 1% of the purchase price.</li>
      </ul>
      
      <h3>Analyzing Different Property Types</h3>
      <p>Different property types require different analysis approaches:</p>
      <ul>
        <li><strong>Single-Family Homes:</strong> Focus on appreciation, rental demand, and neighborhood trends.</li>
        <li><strong>Multi-Family Properties:</strong> Emphasize cash flow, expense ratios, and tenant turnover rates.</li>
        <li><strong>Commercial Properties:</strong> Analyze lease terms, tenant quality, and location factors.</li>
      </ul>
    `,
    quiz: [
      {
        question: 'What is the Comparative Market Analysis (CMA) method?',
        options: [
          'Valuing a property based on the income it generates',
          'Comparing the property to similar properties that have recently sold',
          'Estimating the cost to rebuild the property plus land value',
          'Analyzing a property based on its architectural features'
        ],
        correct: 1
      },
      {
        question: 'What does the 1% rule in real estate suggest?',
        options: [
          'Property taxes should be less than 1% of the property value',
          'Property maintenance costs should be 1% of rental income',
          'Monthly rent should be at least 1% of the purchase price',
          'Property should appreciate by at least 1% annually'
        ],
        correct: 2
      },
      {
        question: 'Which financial metric divides annual cash flow by total cash invested?',
        options: [
          'Cap Rate',
          'Cash-on-Cash Return',
          'Gross Rent Multiplier',
          'Debt Service Coverage Ratio'
        ],
        correct: 1
      }
    ]
  },
  {
    id: 'financing',
    title: 'Real Estate Financing Options',
    content: `
      <h3>Mortgage Basics</h3>
      <p>A mortgage is a loan used to purchase real estate. Key mortgage components include:</p>
      <ul>
        <li><strong>Principal:</strong> The amount borrowed.</li>
        <li><strong>Interest Rate:</strong> The cost of borrowing money, expressed as a percentage.</li>
        <li><strong>Term:</strong> The length of time to repay the loan (typically 15 or 30 years).</li>
        <li><strong>Down Payment:</strong> The initial payment made by the buyer (typically 3-20% of the purchase price).</li>
      </ul>
      
      <h3>Types of Mortgage Loans</h3>
      <p>Several types of mortgage loans are available for real estate investors:</p>
      <ul>
        <li><strong>Conventional Loans:</strong> Traditional loans offered by banks and mortgage companies.</li>
        <li><strong>FHA Loans:</strong> Government-backed loans with lower down payment requirements.</li>
        <li><strong>VA Loans:</strong> Loans for veterans and service members with favorable terms.</li>
        <li><strong>Hard Money Loans:</strong> Short-term loans from private lenders, often used for house flipping.</li>
        <li><strong>Commercial Loans:</strong> Specifically for commercial properties, often with different terms.</li>
      </ul>
      
      <h3>Creative Financing Strategies</h3>
      <p>Beyond traditional mortgages, investors can use creative financing methods:</p>
      <ul>
        <li><strong>Seller Financing:</strong> The property seller acts as the lender.</li>
        <li><strong>Home Equity Loans/HELOCs:</strong> Using equity in existing properties to finance new purchases.</li>
        <li><strong>Partnership Investing:</strong> Pooling resources with other investors.</li>
        <li><strong>Lease Options:</strong> Leasing a property with the option to buy in the future.</li>
      </ul>
    `,
    quiz: [
      {
        question: 'What is the typical down payment range for conventional mortgage loans?',
        options: [
          '0-3%',
          '3-20%',
          '25-40%',
          '50-70%'
        ],
        correct: 1
      },
      {
        question: 'Which type of loan is often used for house flipping projects?',
        options: [
          'FHA Loans',
          'VA Loans',
          'Hard Money Loans',
          'Conventional Loans'
        ],
        correct: 2
      },
      {
        question: 'In seller financing, who serves as the lender?',
        options: [
          'A bank or credit union',
          'The property seller',
          'A private investor',
          'The government'
        ],
        correct: 1
      }
    ]
  }
]

export default function EducationPage() {
  const [activeModule, setActiveModule] = useState<Module | null>(null)
  const [quizActive, setQuizActive] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<number[]>([])
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [userProgress, setUserProgress] = useState<UserProgress[]>([])
  const router = useRouter()

  // In a real app, this would check auth and fetch user progress
  useEffect(() => {
    // Mock auth check - in a real app, this would use Supabase or similar
    const isAuthenticated = true // For demo purposes, always consider user as authenticated
    
    if (!isAuthenticated) {
      router.push('/auth')
      return
    }
    
    // Mock fetch user progress
    const fetchProgress = async () => {
      // In a real app, this would fetch from a database
      // For demo, we'll use localStorage to persist some state
      const savedProgress = localStorage.getItem('userProgress')
      if (savedProgress) {
        try {
          setUserProgress(JSON.parse(savedProgress))
        } catch (e) {
          console.error('Failed to parse saved progress:', e)
        }
      }
    }
    
    fetchProgress()
  }, [router])

  const handleStartModule = (module: Module) => {
    setActiveModule(module)
    setQuizActive(false)
    setQuizSubmitted(false)
    setQuizAnswers([])
  }

  const handleStartQuiz = () => {
    if (!activeModule) return
    setQuizActive(true)
    setQuizAnswers(new Array(activeModule.quiz.length).fill(-1))
  }

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    if (quizSubmitted) return
    
    const newAnswers = [...quizAnswers]
    newAnswers[questionIndex] = answerIndex
    setQuizAnswers(newAnswers)
  }

  const handleSubmitQuiz = () => {
    if (!activeModule) return
    
    setQuizSubmitted(true)
    
    // Calculate score
    const score = quizAnswers.reduce((total, answer, index) => {
      const correctAnswer = activeModule.quiz[index].correct
      return answer === correctAnswer ? total + 1 : total
    }, 0)
    
    // Save progress
    const scorePercentage = Math.round((score / activeModule.quiz.length) * 100)
    const moduleIndex = userProgress.findIndex(p => p.moduleId === activeModule.id)
    
    if (moduleIndex >= 0) {
      // Update existing progress
      const newProgress = [...userProgress]
      newProgress[moduleIndex] = { ...newProgress[moduleIndex], score: scorePercentage }
      setUserProgress(newProgress)
      localStorage.setItem('userProgress', JSON.stringify(newProgress))
    } else {
      // Add new progress
      const newProgress = [...userProgress, { moduleId: activeModule.id, score: scorePercentage }]
      setUserProgress(newProgress)
      localStorage.setItem('userProgress', JSON.stringify(newProgress))
    }
  }

  const getModuleProgress = (moduleId: string) => {
    const progress = userProgress.find(p => p.moduleId === moduleId)
    return progress ? progress.score : null
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {!activeModule ? (
          // Module selection screen
          <>
            <h1 className="text-3xl font-bold mb-8">Real Estate Education Modules</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EDUCATION_MODULES.map(module => {
                const progress = getModuleProgress(module.id)
                
                return (
                  <div 
                    key={module.id} 
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-2">{module.title}</h2>
                      <p className="text-gray-600 mb-4">
                        {module.content.split('</h3>')[0].replace(/<[^>]*>/g, '').trim().substring(0, 100)}...
                      </p>
                      
                      {progress !== null && (
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className="bg-primary-600 h-2.5 rounded-full" 
                              style={{ width: `${progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      
                      <button
                        onClick={() => handleStartModule(module)}
                        className="btn btn-primary w-full"
                      >
                        {progress !== null ? 'Continue' : 'Start'} Module
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        ) : !quizActive ? (
          // Module content screen
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">{activeModule.title}</h1>
              <button 
                onClick={() => setActiveModule(null)}
                className="btn btn-secondary"
              >
                Back to Modules
              </button>
            </div>
            
            <div 
              className="prose prose-lg max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: activeModule.content }}
            />
            
            <div className="flex justify-center">
              <button
                onClick={handleStartQuiz}
                className="btn btn-primary"
              >
                Take Quiz
              </button>
            </div>
          </div>
        ) : (
          // Quiz screen
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Quiz: {activeModule.title}</h1>
              <button 
                onClick={() => setQuizActive(false)}
                className="btn btn-secondary"
                disabled={quizSubmitted}
              >
                Back to Module
              </button>
            </div>
            
            <div className="space-y-8 mb-8">
              {activeModule.quiz.map((question, qIndex) => (
                <div key={qIndex} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-lg mb-3">
                    {qIndex + 1}. {question.question}
                  </h3>
                  <div className="space-y-2">
                    {question.options.map((option, oIndex) => (
                      <div 
                        key={oIndex}
                        className={`p-3 rounded-lg border cursor-pointer ${
                          quizAnswers[qIndex] === oIndex 
                            ? quizSubmitted
                              ? oIndex === question.correct 
                                ? 'bg-green-100 border-green-500'
                                : 'bg-red-100 border-red-500'
                              : 'bg-primary-50 border-primary-500'
                            : quizSubmitted && oIndex === question.correct
                              ? 'bg-green-100 border-green-500'
                              : 'border-gray-200 hover:bg-gray-50'
                        }`}
                        onClick={() => handleAnswerSelect(qIndex, oIndex)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {quizSubmitted ? (
              <div className="text-center">
                <div className="mb-4 text-lg">
                  Your Score:{' '}
                  <span className="font-bold">
                    {quizAnswers.reduce((total, answer, index) => {
                      const correctAnswer = activeModule.quiz[index].correct
                      return answer === correctAnswer ? total + 1 : total
                    }, 0)}{' '}
                    / {activeModule.quiz.length}
                  </span>
                </div>
                <button
                  onClick={() => setActiveModule(null)}
                  className="btn btn-primary"
                >
                  Back to Modules
                </button>
              </div>
            ) : (
              <div className="flex justify-center">
                <button
                  onClick={handleSubmitQuiz}
                  className="btn btn-primary"
                  disabled={quizAnswers.includes(-1)}
                >
                  Submit Quiz
                </button>
              </div>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
} 