import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PatternsPage from './pages/PatternsPage'
import AboutPage from './pages/AboutPage'
import DelegationCandidatesPage from './pages/DelegationCandidatesPage'

function App() {
  return (
    <div className="min-h-screen bg-gov-gray-50 flex flex-col">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gov-blue-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/patterns" element={<PatternsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/delegation-candidates" element={<DelegationCandidatesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App