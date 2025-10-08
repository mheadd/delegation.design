import React from 'react'
import { ExternalLink, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gov-gray-900 text-gov-gray-300" role="contentinfo">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Designing for Delegation</h3>
            <p className="text-sm leading-relaxed">
              Design patterns for delegation-based digital services, preparing agencies for 
              citizen-agent interactions with thoughtful, technology-agnostic approaches.
            </p>
          </div>
          
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-sm hover:text-white transition-colors duration-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/patterns" className="text-sm hover:text-white transition-colors duration-200">
                    Design Patterns
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-sm hover:text-white transition-colors duration-200">
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2">
              <a 
                href="mailto:hello@adhocteam.us" 
                className="flex items-center text-sm hover:text-white transition-colors duration-200"
                aria-label="Send email to hello@delegation.design"
              >
                <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                hello@adhocteam.us
              </a>
              <a 
                href="https://github.com/mheadd/delegation.design" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-sm hover:text-white transition-colors duration-200"
                aria-label="Visit our GitHub repository (opens in new tab)"
              >
                <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gov-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm">
            © 2025 Designing for Delegation. Licensed under{' '}
            <a 
              href="https://opensource.org/licenses/MIT" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              aria-label="MIT License (opens in new tab)"
            >
              MIT License
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer