'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary-600">
              RealEstateEdu
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/listings" 
              className={`${isActive('/listings') ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}
            >
              Listings
            </Link>
            <Link 
              href="/analysis" 
              className={`${isActive('/analysis') ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}
            >
              Analysis
            </Link>
            <Link 
              href="/education" 
              className={`${isActive('/education') ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}
            >
              Education
            </Link>
            <Link href="/auth" className="btn btn-primary">
              Sign In
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary-600 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/listings"
              className={`block px-3 py-2 rounded-md ${isActive('/listings') ? 'bg-primary-100 text-primary-600' : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Listings
            </Link>
            <Link 
              href="/analysis"
              className={`block px-3 py-2 rounded-md ${isActive('/analysis') ? 'bg-primary-100 text-primary-600' : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Analysis
            </Link>
            <Link 
              href="/education"
              className={`block px-3 py-2 rounded-md ${isActive('/education') ? 'bg-primary-100 text-primary-600' : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Education
            </Link>
            <Link 
              href="/auth"
              className="block px-3 py-2 rounded-md bg-primary-600 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
} 