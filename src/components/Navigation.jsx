import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Bot } from 'lucide-react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Design Patterns', href: '/patterns' },
    { name: 'About', href: '/about' }
  ]

  const isActive = (href) => location.pathname === href

  return (
    <nav className="bg-white shadow-sm border-b border-gov-gray-200" role="navigation" aria-label="Main navigation">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2" aria-label="Designing for Delegation - Go to homepage">
              <div className="w-8 h-8 bg-gov-blue-600 rounded-lg flex items-center justify-center" aria-hidden="true">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-gov-gray-900">
                Designing for Delegation
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8" role="menubar">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                role="menuitem"
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-gov-blue-600 border-b-2 border-gov-blue-600'
                    : 'text-gov-gray-700 hover:text-gov-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gov-gray-600 hover:text-gov-blue-600 hover:bg-gov-gray-100 focus:outline-none focus:ring-2 focus:ring-gov-blue-500 focus:ring-offset-2"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gov-gray-200" id="mobile-menu" role="menu">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-gov-blue-600 bg-gov-blue-50'
                      : 'text-gov-gray-700 hover:text-gov-blue-600 hover:bg-gov-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation