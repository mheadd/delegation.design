import React, { useState } from 'react'
import { Building2, ArrowRight, Shield, Eye, Users, FileText, AlertTriangle, CheckCircle, Clock, ExternalLink, Info, ChevronDown, ChevronUp } from 'lucide-react'

const CrossSystemPattern = () => {
  const [activeStep, setActiveStep] = useState(2)
  const [expandedHandoff, setExpandedHandoff] = useState(null)
  const [showDataFlow, setShowDataFlow] = useState(false)

  const delegationChain = [
    {
      id: 1,
      agency: "Syracuse City Clerk",
      level: "Local",
      role: "Initial Request Processing",
      status: "completed",
      timestamp: "9:15 AM",
      description: "Food truck permit application received and basic eligibility verified",
      dataShared: ["Business name", "Contact info", "Proposed location"],
      accountability: "Lisa Martinez, Permit Coordinator",
      phone: "(315) 448-8166"
    },
    {
      id: 2,
      agency: "NYS Department of Health", 
      level: "State",
      role: "Food Safety Inspection",
      status: "in_progress",
      timestamp: "10:22 AM",
      description: "Agent coordinating food safety requirements and mobile vendor certification",
      dataShared: ["Business info", "Equipment specifications", "Food handling procedures"],
      accountability: "Mark Thompson, Regional Inspector",
      phone: "(518) 474-2121",
      handoffReason: "State-level food safety certification required for mobile food vendors per NYS health code §14-1.21"
    },
    {
      id: 3,
      agency: "NYS Department of Taxation",
      level: "State", 
      role: "Tax Registration Verification",
      status: "pending",
      timestamp: "Not started",
      description: "Verify sales tax registration and obtain mobile vendor tax certificate",
      dataShared: ["Will share: Business registration", "Tax ID", "Revenue estimates"],
      accountability: "TBD - Will be assigned when handoff occurs",
      phone: "TBD",
      handoffReason: "Mobile food vendors must have valid NYS sales tax registration and special mobile vendor certificate"
    },
    {
      id: 4,
      agency: "Syracuse Fire Department",
      level: "Local",
      role: "Fire Safety Approval", 
      status: "pending",
      timestamp: "Not started",
      description: "Fire safety inspection for propane equipment and emergency procedures",
      dataShared: ["Will share: Equipment details", "Safety procedures", "Location info"],
      accountability: "TBD - Will be assigned when handoff occurs", 
      phone: "TBD",
      handoffReason: "Local fire department approval required for mobile vendors using propane or other flame-based equipment"
    }
  ]

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200'
      case 'in_progress': return 'bg-gov-blue-100 text-gov-blue-800 border-gov-blue-200'
      case 'pending': return 'bg-gov-gray-100 text-gov-gray-600 border-gov-gray-200'
      default: return 'bg-gov-gray-100 text-gov-gray-600 border-gov-gray-200'
    }
  }

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed': return CheckCircle
      case 'in_progress': return Clock
      case 'pending': return AlertTriangle
      default: return AlertTriangle
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gov-gray-200 p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gov-gray-900">Food Truck Permit Application</h3>
            <p className="text-sm text-gov-gray-600">Cross-System Navigation Pattern</p>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setShowDataFlow(!showDataFlow)}
              className="flex items-center px-3 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
              aria-expanded={showDataFlow}
              aria-controls="data-flow-section"
            >
              <Shield className="w-4 h-4 mr-2" aria-hidden="true" />
              {showDataFlow ? 'Hide' : 'Show'} Data Flow
            </button>
          </div>
        </div>
        
        <div className="bg-gov-blue-50 border border-gov-blue-200 rounded-lg p-4 mb-6" role="region" aria-labelledby="multi-agency-status">
          <div className="flex items-start">
            <Info className="w-5 h-5 text-gov-blue-600 mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
            <div>
              <h4 id="multi-agency-status" className="text-gov-blue-900 font-medium mb-1">Multi-Agency Process Active</h4>
              <p className="text-gov-blue-800 text-sm">
                Your agent is coordinating across 4 agencies to complete your food truck permit. 
                You can see exactly where your information goes and who's accountable at each step.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Flow Visualization */}
      {showDataFlow && (
        <section id="data-flow-section" className="mb-8 bg-purple-50 border border-purple-200 rounded-lg p-6" aria-labelledby="data-flow-heading">
          <h4 id="data-flow-heading" className="font-semibold text-purple-900 mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2" aria-hidden="true" />
            Information Sharing Transparency
          </h4>
          <div className="space-y-3" role="list" aria-label="Data sharing details">
            <div className="flex items-center justify-between bg-white rounded-lg p-3 border" role="listitem">
              <span className="text-sm font-medium">Business Contact Info</span>
              <div className="flex items-center gap-2 text-sm text-gov-gray-600">
                <span>Shared with:</span>
                <span className="bg-gov-blue-100 text-gov-blue-800 px-2 py-1 rounded">All Agencies</span>
              </div>
            </div>
            <div className="flex items-center justify-between bg-white rounded-lg p-3 border" role="listitem">
              <span className="text-sm font-medium">Equipment Specifications</span>
              <div className="flex items-center gap-2 text-sm text-gov-gray-600">
                <span>Shared with:</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Health Dept</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded">Fire Dept</span>
              </div>
            </div>
            <div className="flex items-center justify-between bg-white rounded-lg p-3 border" role="listitem">
              <span className="text-sm font-medium">Revenue Estimates</span>
              <div className="flex items-center gap-2 text-sm text-gov-gray-600">
                <span>Shared with:</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">Tax Dept Only</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-purple-700 mt-3">
            Your delegation settings allow cross-agency information sharing for permit processing. 
            Sensitive financial data is limited to tax-related agencies only.
          </p>
        </section>
      )}

      {/* Delegation Chain */}
      <section className="space-y-4" aria-labelledby="coordination-heading">
        <h4 id="coordination-heading" className="font-semibold text-gov-gray-900 mb-4">Agency Coordination Chain</h4>
        
        {delegationChain.map((step, index) => {
          const StatusIcon = getStatusIcon(step.status)
          const isActive = activeStep === step.id
          const isExpanded = expandedHandoff === step.id
          
          return (
            <article key={step.id} className={`border-2 rounded-lg ${isActive ? 'border-gov-blue-300 bg-gov-blue-50' : 'border-gov-gray-200 bg-white'}`}>
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start flex-1">
                    <div className="flex flex-col items-center mr-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getStatusColor(step.status)} border`} aria-hidden="true">
                        <StatusIcon className="w-5 h-5" />
                      </div>
                      {index < delegationChain.length - 1 && (
                        <div className="w-0.5 h-8 bg-gov-gray-300 mt-2" aria-hidden="true"></div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h5 className="font-medium text-gov-gray-900 flex items-center">
                            <Building2 className="w-4 h-4 mr-2" aria-hidden="true" />
                            {step.agency}
                            <span className={`ml-2 px-2 py-1 text-xs font-medium rounded-full ${
                              step.level === 'Federal' ? 'bg-purple-100 text-purple-800' :
                              step.level === 'State' ? 'bg-gov-blue-100 text-gov-blue-800' : 'bg-green-100 text-green-800'
                            }`}>
                              {step.level}
                            </span>
                          </h5>
                          <p className="text-sm text-gov-gray-600">{step.role}</p>
                        </div>
                        <div className="text-right">
                          <div className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(step.status)}`}>
                            {step.status.replace('_', ' ').toUpperCase()}
                          </div>
                          {step.timestamp !== 'Not started' && (
                            <time className="text-xs text-gov-gray-500 mt-1 block" dateTime={step.timestamp}>
                              {step.timestamp}
                            </time>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-sm text-gov-gray-700 mb-3">{step.description}</p>
                      
                      {/* Accountability Info */}
                      <div className="bg-gov-gray-50 rounded-lg p-3 mb-3" role="region" aria-labelledby={`accountability-${step.id}`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Users className="w-4 h-4 text-gov-gray-600 mr-2" aria-hidden="true" />
                            <div>
                              <h6 id={`accountability-${step.id}`} className="text-sm font-medium text-gov-gray-900">Accountable Official</h6>
                              <p className="text-sm text-gov-gray-600">{step.accountability}</p>
                              {step.phone && (
                                <p className="text-xs text-gov-gray-500">{step.phone}</p>
                              )}
                            </div>
                          </div>
                          {step.phone && step.phone !== 'TBD' && (
                            <button 
                              className="text-sm text-gov-blue-600 hover:text-gov-blue-700 focus:outline-none focus:ring-2 focus:ring-gov-blue-500 focus:ring-offset-2 rounded flex items-center"
                              aria-label={`Contact ${step.accountability} at ${step.phone}`}
                            >
                              <ExternalLink className="w-4 h-4 mr-1" aria-hidden="true" />
                              Contact
                            </button>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => setExpandedHandoff(isExpanded ? null : step.id)}
                          className="flex items-center text-sm text-gov-blue-600 hover:text-gov-blue-700 focus:outline-none focus:ring-2 focus:ring-gov-blue-500 focus:ring-offset-2 rounded"
                          aria-expanded={isExpanded}
                          aria-controls={`handoff-details-${step.id}`}
                        >
                          <Eye className="w-4 h-4 mr-1" aria-hidden="true" />
                          {isExpanded ? 'Hide Handoff Details' : 'View Handoff Details'}
                          {isExpanded ? <ChevronUp className="w-4 h-4 ml-1" aria-hidden="true" /> : <ChevronDown className="w-4 h-4 ml-1" aria-hidden="true" />}
                        </button>
                        
                        {step.status === 'in_progress' && (
                          <span className="flex items-center text-sm text-green-600">
                            <Clock className="w-4 h-4 mr-1" aria-hidden="true" />
                            Agent working on this step
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Expanded Handoff Details */}
                {isExpanded && (
                  <div id={`handoff-details-${step.id}`} className="mt-4 pt-4 border-t border-gov-gray-200 ml-14" role="region" aria-labelledby={`handoff-heading-${step.id}`}>
                    <div className="space-y-3">
                      {step.handoffReason && (
                        <div>
                          <h6 id={`handoff-heading-${step.id}`} className="font-medium text-gov-gray-900 text-sm mb-1">Why this agency is involved:</h6>
                          <p className="text-sm text-gov-gray-600">{step.handoffReason}</p>
                        </div>
                      )}
                      
                      <div>
                        <h6 className="font-medium text-gov-gray-900 text-sm mb-2">Information shared:</h6>
                        <div className="flex flex-wrap gap-1" role="list" aria-label="Shared information">
                          {step.dataShared.map((item, i) => (
                            <span key={i} role="listitem" className="inline-block px-2 py-1 bg-gov-blue-100 text-gov-blue-800 text-xs rounded">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </article>
          )
        })}
      </section>

      {/* Control Actions */}
      <div className="mt-6 flex gap-3" role="toolbar" aria-label="Process controls">
        <button 
          className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors"
          aria-describedby="pause-process-description"
        >
          Pause Multi-Agency Process
        </button>
        <span id="pause-process-description" className="sr-only">Stop coordination between agencies temporarily</span>
        
        <button 
          className="px-4 py-2 bg-gov-blue-600 text-white rounded-lg hover:bg-gov-blue-700 focus:outline-none focus:ring-2 focus:ring-gov-blue-500 focus:ring-offset-2 transition-colors"
          aria-describedby="contact-coordinator-description"
        >
          Contact Oversight Coordinator
        </button>
        <span id="contact-coordinator-description" className="sr-only">Speak with the coordinator managing this multi-agency process</span>
      </div>
    </div>
  )
}

export default CrossSystemPattern