import React, { useState } from 'react'
import { CheckCircle, Clock, AlertCircle, FileText, Building, CreditCard, Eye, Pause, RotateCcw, MessageSquare, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'

const AsyncActionPattern = () => {
  const [expandedAction, setExpandedAction] = useState(null)
  const [showReasoningFor, setShowReasoningFor] = useState(null)

  const agentSummary = {
    taskTitle: "Business License Renewal",
    status: "completed",
    completedAt: "2:34 AM, March 15, 2025",
    totalActions: 4,
    nextSteps: "Your renewed license will arrive by mail in 5-7 business days."
  }

  const actions = [
    {
      id: 1,
      type: "information_gathered",
      title: "Updated address information",
      timestamp: "2:12 AM",
      status: "completed",
      icon: FileText,
      summary: "Retrieved current address from DMV records",
      details: "Agent accessed your DMV records to get your current address (123 Oak St, Syracuse NY 13210) since your business license still shows your old address (456 Pine Ave, Syracuse NY 13203).",
      reasoning: "Your delegation settings allow cross-agency information sharing for routine updates. The address change was necessary to complete the renewal since NYS requires current address on file.",
      agenciesInvolved: ["DMV", "NYS Department of State"],
      canRevert: false,
      revertReason: "Information gathering cannot be undone, but no changes were made to your records yet."
    },
    {
      id: 2,
      type: "fee_payment",
      title: "Paid renewal fee",
      timestamp: "2:18 AM", 
      status: "completed",
      icon: CreditCard,
      summary: "$75 renewal fee charged to your saved payment method",
      details: "Paid the standard business license renewal fee of $75 using your saved payment method ending in 4532. This was within your pre-approved spending limit of $100 for routine government fees.",
      reasoning: "Payment was required to complete renewal. The fee amount ($75) was under your $100 threshold for automatic payments of routine government fees.",
      agenciesInvolved: ["NYS Department of State"],
      canRevert: true,
      revertReason: "Fee can be refunded if you cancel the renewal within 24 hours."
    },
    {
      id: 3,
      type: "cross_agency",
      title: "Coordinated with Tax Department",
      timestamp: "2:25 AM",
      status: "completed", 
      icon: Building,
      summary: "Verified tax compliance status for license renewal",
      details: "Agent confirmed with NYS Tax Department that your business has no outstanding tax obligations, which is required for license renewal approval.",
      reasoning: "NYS requires tax compliance verification for all business license renewals. Your delegation settings permit routine compliance checks across government agencies.",
      agenciesInvolved: ["NYS Tax Department", "NYS Department of State"],
      canRevert: false,
      revertReason: "Compliance verification cannot be undone, but no sensitive information was shared."
    },
    {
      id: 4,
      type: "form_submission",
      title: "Submitted renewal application",
      timestamp: "2:34 AM",
      status: "completed",
      icon: CheckCircle,
      summary: "License renewal application completed and submitted",
      details: "Submitted your business license renewal with updated address, verified tax compliance, and payment confirmation. Application reference number: BL-2025-8472936.",
      reasoning: "All requirements met: updated address on file, fee paid, tax compliance verified. Application submitted to complete the renewal process you requested.",
      agenciesInvolved: ["NYS Department of State"],
      canRevert: true,
      revertReason: "Application can be withdrawn within 24 hours, but fees may not be refundable."
    }
  ]

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'text-green-600 bg-green-100'
      case 'in_progress': return 'text-yellow-600 bg-yellow-100'
      case 'needs_attention': return 'text-red-600 bg-red-100'
      default: return 'text-gov-gray-600 bg-gov-gray-100'
    }
  }

  const getActionIcon = (type) => {
    switch(type) {
      case 'information_gathered': return FileText
      case 'fee_payment': return CreditCard
      case 'cross_agency': return Building
      case 'form_submission': return CheckCircle
      default: return Clock
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gov-gray-200 p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gov-gray-900">{agentSummary.taskTitle}</h3>
            <p className="text-sm text-gov-gray-600">Asynchronous Action Communication Pattern</p>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(agentSummary.status)}`}>
            Task Complete
          </div>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6" role="region" aria-labelledby="completion-status">
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" aria-hidden="true" />
            <div>
              <h4 id="completion-status" className="text-green-900 font-medium mb-1">Your business license renewal is complete</h4>
              <p className="text-green-800 text-sm mb-2">
                Completed at {agentSummary.completedAt} while you were offline. 
                {agentSummary.totalActions} actions taken on your behalf.
              </p>
              <p className="text-green-800 text-sm">{agentSummary.nextSteps}</p>
            </div>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex gap-3 mb-6" role="toolbar" aria-label="Action controls">
          <button 
            className="flex items-center px-4 py-2 bg-white border border-gov-gray-300 rounded-lg text-gov-gray-700 hover:bg-gov-gray-50 focus:outline-none focus:ring-2 focus:ring-gov-blue-500 focus:ring-offset-2 transition-colors"
            aria-describedby="pause-description"
          >
            <Pause className="w-4 h-4 mr-2" aria-hidden="true" />
            Pause Future Actions
          </button>
          <span id="pause-description" className="sr-only">Stop the agent from taking automatic actions in the future</span>
          
          <button 
            className="flex items-center px-4 py-2 bg-white border border-gov-gray-300 rounded-lg text-gov-gray-700 hover:bg-gov-gray-50 focus:outline-none focus:ring-2 focus:ring-gov-blue-500 focus:ring-offset-2 transition-colors"
            aria-describedby="revert-description"
          >
            <RotateCcw className="w-4 h-4 mr-2" aria-hidden="true" />
            Revert & Redo
          </button>
          <span id="revert-description" className="sr-only">Undo recent actions and perform them differently</span>
          
          <button 
            className="flex items-center px-4 py-2 bg-gov-blue-600 text-white rounded-lg hover:bg-gov-blue-700 focus:outline-none focus:ring-2 focus:ring-gov-blue-500 focus:ring-offset-2 transition-colors"
            aria-describedby="contact-description"
          >
            <MessageSquare className="w-4 h-4 mr-2" aria-hidden="true" />
            Contact Human Agent
          </button>
          <span id="contact-description" className="sr-only">Speak with a human government representative</span>
        </div>
      </div>

      {/* Action Timeline */}
      <section className="space-y-4" aria-labelledby="actions-heading">
        <h4 id="actions-heading" className="font-semibold text-gov-gray-900 mb-4">Actions Taken on Your Behalf</h4>
        
        {actions.map((action, index) => {
          const ActionIcon = getActionIcon(action.type)
          const isExpanded = expandedAction === action.id
          const showReasoning = showReasoningFor === action.id
          
          return (
            <article key={action.id} className="border border-gov-gray-200 rounded-lg">
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start flex-1">
                    <div className="w-10 h-10 bg-gov-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0" aria-hidden="true">
                      <ActionIcon className="w-5 h-5 text-gov-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="font-medium text-gov-gray-900">{action.title}</h5>
                        <time className="text-sm text-gov-gray-500" dateTime={action.timestamp}>
                          {action.timestamp}
                        </time>
                      </div>
                      <p className="text-sm text-gov-gray-600 mb-2">{action.summary}</p>
                      
                      {action.agenciesInvolved.length > 0 && (
                        <div className="flex items-center flex-wrap gap-1 mb-3" role="list" aria-label="Government agencies involved">
                          <span className="text-xs text-gov-gray-500 mr-2">Agencies:</span>
                          {action.agenciesInvolved.map((agency, i) => (
                            <span key={i} role="listitem" className="inline-block px-2 py-1 bg-gov-gray-100 text-gov-gray-700 text-xs rounded">
                              {agency}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mt-3 ml-13">
                  <button 
                    onClick={() => setExpandedAction(isExpanded ? null : action.id)}
                    className="flex items-center text-sm text-gov-blue-600 hover:text-gov-blue-700 focus:outline-none focus:ring-2 focus:ring-gov-blue-500 focus:ring-offset-2 rounded"
                    aria-expanded={isExpanded}
                    aria-controls={`details-${action.id}`}
                  >
                    <Eye className="w-4 h-4 mr-1" aria-hidden="true" />
                    {isExpanded ? 'Hide Details' : 'View Details'}
                    {isExpanded ? <ChevronUp className="w-4 h-4 ml-1" aria-hidden="true" /> : <ChevronDown className="w-4 h-4 ml-1" aria-hidden="true" />}
                  </button>
                  
                  <button 
                    onClick={() => setShowReasoningFor(showReasoning ? null : action.id)}
                    className="flex items-center text-sm text-purple-600 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded"
                    aria-expanded={showReasoning}
                    aria-controls={`reasoning-${action.id}`}
                  >
                    <MessageSquare className="w-4 h-4 mr-1" aria-hidden="true" />
                    {showReasoning ? 'Hide Reasoning' : 'Why This Action?'}
                  </button>
                  
                  {action.canRevert && (
                    <button 
                      className="flex items-center text-sm text-orange-600 hover:text-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
                      aria-describedby={`revert-${action.id}-description`}
                    >
                      <RotateCcw className="w-4 h-4 mr-1" aria-hidden="true" />
                      Revert Action
                    </button>
                  )}
                  {action.canRevert && (
                    <span id={`revert-${action.id}-description`} className="sr-only">
                      This action can be undone. {action.revertReason}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Expanded Details */}
              {isExpanded && (
                <div 
                  id={`details-${action.id}`}
                  className="border-t border-gov-gray-200 bg-gov-gray-50 p-4"
                  role="region"
                  aria-labelledby={`details-heading-${action.id}`}
                >
                  <h6 id={`details-heading-${action.id}`} className="sr-only">Detailed information for {action.title}</h6>
                  <p className="text-sm text-gov-gray-700 mb-3">{action.details}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        action.canRevert ? 'bg-orange-100 text-orange-700' : 'bg-gov-gray-100 text-gov-gray-700'
                      }`}>
                        {action.canRevert ? 'Reversible' : 'Cannot Revert'}
                      </span>
                    </div>
                    {!action.canRevert && (
                      <p className="text-xs text-gov-gray-500">{action.revertReason}</p>
                    )}
                  </div>
                </div>
              )}
              
              {/* Agent Reasoning */}
              {showReasoning && (
                <div 
                  id={`reasoning-${action.id}`}
                  className="border-t border-gov-gray-200 bg-purple-50 p-4"
                  role="region"
                  aria-labelledby={`reasoning-heading-${action.id}`}
                >
                  <div className="flex items-start">
                    <MessageSquare className="w-4 h-4 text-purple-600 mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h6 id={`reasoning-heading-${action.id}`} className="text-sm font-medium text-purple-900 mb-1">Agent Reasoning</h6>
                      <p className="text-sm text-purple-800">{action.reasoning}</p>
                    </div>
                  </div>
                </div>
              )}
            </article>
          )
        })}
      </section>
    </div>
  )
}

export default AsyncActionPattern