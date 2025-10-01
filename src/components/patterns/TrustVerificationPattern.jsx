import React, { useState } from 'react'
import { Shield, AlertTriangle, CheckCircle, Users, Brain, Clock, Eye, Phone, Mail, ExternalLink, Info, HelpCircle, Zap } from 'lucide-react'

const TrustVerificationPattern = () => {
  const [activeTab, setActiveTab] = useState('confidence')

  const agentCapabilities = {
    taskName: "Unemployment Benefits Application",
    confidenceLevel: 87,
    lastUpdated: "March 15, 2025",
    totalSimilarCases: 2847,
    successRate: 94
  }

  const confidenceFactors = [
    {
      factor: "Document Requirements",
      confidence: 95,
      reasoning: "Standard unemployment application - agent has processed 2,847 similar cases",
      status: "high"
    },
    {
      factor: "Eligibility Determination", 
      confidence: 82,
      reasoning: "Your employment history is straightforward, but some wage calculations may need verification",
      status: "moderate"
    },
    {
      factor: "Appeal Process Knowledge",
      confidence: 68,
      reasoning: "Complex legal procedures - agent will recommend human assistance if appeal is needed",
      status: "moderate"
    },
    {
      factor: "Multi-State Coordination",
      confidence: 45,
      reasoning: "Your work history spans NY and PA - cross-state verification often requires human review",
      status: "low"
    }
  ]

  const limitations = [
    {
      category: "Cannot Decide",
      items: [
        "Cannot make final eligibility determinations (human review required)",
        "Cannot represent you in formal hearings or appeals", 
        "Cannot override system flags for unusual circumstances"
      ]
    },
    {
      category: "Will Escalate Automatically",
      items: [
        "If eligibility calculation shows discrepancies > $500",
        "If application triggers fraud detection systems",
        "If required documentation is unclear or incomplete",
        "If cross-state wage verification fails after 2 attempts"
      ]
    },
    {
      category: "Knowledge Limitations",
      items: [
        "May not reflect policy changes effective after March 1, 2025",
        "Limited knowledge of local workforce development programs",
        "Cannot provide legal advice on employment disputes"
      ]
    }
  ]

  const oversightStructure = [
    {
      level: "Direct Supervision",
      role: "Sarah Chen, Senior Benefits Specialist",
      agency: "NYS Department of Labor",
      responsibilities: "Reviews all agent decisions, approves benefit amounts",
      contact: "sarah.chen@labor.ny.gov | (518) 457-2518",
      responseTime: "Within 4 hours during business days",
      canOverride: true
    },
    {
      level: "Quality Assurance",
      role: "Michael Rodriguez, QA Manager", 
      agency: "NYS Department of Labor",
      responsibilities: "Monitors agent performance, investigates errors",
      contact: "quality.assurance@labor.ny.gov | (518) 457-9000",
      responseTime: "Within 24 hours",
      canOverride: true
    },
    {
      level: "Citizen Appeals",
      role: "Administrative Law Judge",
      agency: "NYS Office of Administrative Hearings",
      responsibilities: "Independent review of disputed decisions",
      contact: "appeals@oah.ny.gov | (518) 474-4094",
      responseTime: "30 days for hearing scheduling",
      canOverride: true
    }
  ]

  const getConfidenceColor = (confidence) => {
    if (confidence >= 80) return 'text-green-700 bg-green-100 border-green-200'
    if (confidence >= 60) return 'text-yellow-700 bg-yellow-100 border-yellow-200'
    return 'text-red-700 bg-red-100 border-red-200'
  }

  const getConfidenceIcon = (confidence) => {
    if (confidence >= 80) return CheckCircle
    if (confidence >= 60) return AlertTriangle
    return AlertTriangle
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gov-gray-200 p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gov-gray-900">{agentCapabilities.taskName}</h3>
            <p className="text-sm text-gov-gray-600">Trust and Verification Pattern</p>
          </div>
          <div className="flex items-center gap-2">
            <div className={`px-3 py-1 rounded-full border text-sm font-medium ${getConfidenceColor(agentCapabilities.confidenceLevel)}`}>
              {agentCapabilities.confidenceLevel}% Confidence
            </div>
          </div>
        </div>
        
        <div className="bg-gov-blue-50 border border-gov-blue-200 rounded-lg p-4 mb-6" role="region" aria-labelledby="capability-assessment">
          <div className="flex items-start">
            <Shield className="w-5 h-5 text-gov-blue-600 mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
            <div>
              <h4 id="capability-assessment" className="text-gov-blue-900 font-medium mb-1">Agent Capability Assessment</h4>
              <p className="text-gov-blue-800 text-sm">
                Based on {agentCapabilities.totalSimilarCases.toLocaleString()} similar cases with a {agentCapabilities.successRate}% success rate. 
                Human oversight is built into every step of the process.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="flex border-b border-gov-gray-200 mb-6" role="tablist" aria-label="Trust verification information">
        <button 
          onClick={() => setActiveTab('confidence')}
          className={`px-4 py-2 text-sm font-medium border-b-2 focus:outline-none focus:ring-2 focus:ring-gov-blue-500 focus:ring-offset-2 ${
            activeTab === 'confidence' 
              ? 'border-gov-blue-600 text-gov-blue-600' 
              : 'border-transparent text-gov-gray-500 hover:text-gov-gray-700'
          }`}
          role="tab"
          aria-selected={activeTab === 'confidence'}
          aria-controls="confidence-panel"
          id="confidence-tab"
        >
          <Brain className="w-4 h-4 mr-2 inline" aria-hidden="true" />
          Confidence Breakdown
        </button>
        <button 
          onClick={() => setActiveTab('limitations')}
          className={`px-4 py-2 text-sm font-medium border-b-2 focus:outline-none focus:ring-2 focus:ring-gov-blue-500 focus:ring-offset-2 ${
            activeTab === 'limitations' 
              ? 'border-gov-blue-600 text-gov-blue-600' 
              : 'border-transparent text-gov-gray-500 hover:text-gov-gray-700'
          }`}
          role="tab"
          aria-selected={activeTab === 'limitations'}
          aria-controls="limitations-panel"
          id="limitations-tab"
        >
          <AlertTriangle className="w-4 h-4 mr-2 inline" aria-hidden="true" />
          Agent Limitations
        </button>
        <button 
          onClick={() => setActiveTab('oversight')}
          className={`px-4 py-2 text-sm font-medium border-b-2 focus:outline-none focus:ring-2 focus:ring-gov-blue-500 focus:ring-offset-2 ${
            activeTab === 'oversight' 
              ? 'border-gov-blue-600 text-gov-blue-600' 
              : 'border-transparent text-gov-gray-500 hover:text-gov-gray-700'
          }`}
          role="tab"
          aria-selected={activeTab === 'oversight'}
          aria-controls="oversight-panel"
          id="oversight-tab"
        >
          <Users className="w-4 h-4 mr-2 inline" aria-hidden="true" />
          Human Oversight
        </button>
      </nav>

      {/* Confidence Breakdown Tab */}
      {activeTab === 'confidence' && (
        <div className="space-y-4" role="tabpanel" aria-labelledby="confidence-tab" id="confidence-panel">
          <h4 className="font-semibold text-gov-gray-900 mb-4">Agent Confidence by Task Component</h4>
          
          {confidenceFactors.map((factor, index) => {
            const ConfidenceIcon = getConfidenceIcon(factor.confidence)
            
            return (
              <article key={index} className="border border-gov-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <ConfidenceIcon className={`w-5 h-5 mr-3 ${
                      factor.confidence >= 80 ? 'text-green-600' :
                      factor.confidence >= 60 ? 'text-yellow-600' : 'text-red-600'
                    }`} aria-hidden="true" />
                    <h5 className="font-medium text-gov-gray-900">{factor.factor}</h5>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getConfidenceColor(factor.confidence)}`}>
                    {factor.confidence}%
                  </div>
                </div>
                
                <div className="ml-8">
                  <div className="w-full bg-gov-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        factor.confidence >= 80 ? 'bg-green-600' :
                        factor.confidence >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${factor.confidence}%` }}
                      role="progressbar"
                      aria-valuenow={factor.confidence}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label={`Confidence level for ${factor.factor}: ${factor.confidence} percent`}
                    />
                  </div>
                  <p className="text-sm text-gov-gray-600">{factor.reasoning}</p>
                </div>
              </article>
            )
          })}
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6" role="alert">
            <div className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
              <div>
                <h5 className="text-yellow-900 font-medium mb-1">Lower Confidence Areas</h5>
                <p className="text-yellow-800 text-sm">
                  The agent has identified areas where human review will likely be needed. 
                  These areas will automatically trigger human oversight to ensure accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Limitations Tab */}
      {activeTab === 'limitations' && (
        <section className="space-y-6" role="tabpanel" aria-labelledby="limitations-tab" id="limitations-panel">
          <h4 className="font-semibold text-gov-gray-900 mb-4">Agent Limitations and Boundaries</h4>
          
          {limitations.map((category, index) => (
            <article key={index} className="border border-gov-gray-200 rounded-lg p-4">
              <h5 className="font-medium text-gov-gray-900 mb-3 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" aria-hidden="true" />
                {category.category}
              </h5>
              <ul className="space-y-2 ml-7" role="list">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-gov-gray-700 flex items-start" role="listitem">
                    <span className="w-1.5 h-1.5 bg-gov-gray-400 rounded-full mt-2 mr-2 flex-shrink-0" aria-hidden="true"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
          
          <div className="bg-gov-blue-50 border border-gov-blue-200 rounded-lg p-4" role="complementary">
            <div className="flex items-start">
              <Info className="w-5 h-5 text-gov-blue-600 mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
              <div>
                <h5 className="text-gov-blue-900 font-medium mb-1">Transparency Commitment</h5>
                <p className="text-gov-blue-800 text-sm">
                  The agent will always disclose when it encounters situations beyond its capabilities 
                  and will automatically connect you with appropriate human assistance.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Human Oversight Tab */}
      {activeTab === 'oversight' && (
        <section className="space-y-6" role="tabpanel" aria-labelledby="oversight-tab" id="oversight-panel">
          <h4 className="font-semibold text-gov-gray-900 mb-4">Human Oversight Structure</h4>
          
          {oversightStructure.map((oversight, index) => (
            <article key={index} className="border border-gov-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h5 className="font-medium text-gov-gray-900 flex items-center mb-1">
                    <Users className="w-4 h-4 mr-2 text-gov-blue-600" aria-hidden="true" />
                    {oversight.level}
                  </h5>
                  <p className="text-sm text-gov-gray-600">{oversight.agency}</p>
                </div>
                <div className="flex gap-2">
                  <button 
                    className="text-gov-blue-600 hover:text-gov-blue-700 focus:outline-none focus:ring-2 focus:ring-gov-blue-500 focus:ring-offset-2 rounded p-1"
                    aria-label={`Send email to ${oversight.role}`}
                  >
                    <Mail className="w-4 h-4" />
                  </button>
                  <button 
                    className="text-gov-blue-600 hover:text-gov-blue-700 focus:outline-none focus:ring-2 focus:ring-gov-blue-500 focus:ring-offset-2 rounded p-1"
                    aria-label={`Call ${oversight.role}`}
                  >
                    <Phone className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h6 className="text-sm font-medium text-gov-gray-900">{oversight.role}</h6>
                  <p className="text-sm text-gov-gray-600">{oversight.responsibilities}</p>
                </div>
                
                <div className="bg-gov-gray-50 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gov-gray-900">Contact Information</span>
                    <span className="text-sm text-gov-gray-600">Response Time: {oversight.responseTime}</span>
                  </div>
                  <address className="text-sm text-gov-gray-600 not-italic">{oversight.contact}</address>
                </div>
              </div>
            </article>
          ))}
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4" role="complementary">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
              <div>
                <h5 className="text-green-900 font-medium mb-1">Always Available Escalation</h5>
                <p className="text-green-800 text-sm">
                  You can escalate to human oversight at any time during the process. 
                  All decisions can be reviewed and overridden by qualified human staff.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default TrustVerificationPattern