'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LandingPage() {
  const [showContactForm, setShowContactForm] = useState(false)
  const [formData, setFormData] = useState({
    businessName: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    volume: '',
    needs: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Business Inquiry Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center p-4" onClick={() => {
          setShowContactForm(false)
          setSubmitted(false)
        }}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 sm:p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="mb-6">
                    <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Thank You!</h3>
                  <p className="text-gray-600 mb-6 px-4">
                    Your request has been submitted. We&apos;ll be in touch soon.
                  </p>
                  <button
                    onClick={() => {
                      setShowContactForm(false)
                      setSubmitted(false)
                      setFormData({
                        businessName: '',
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        volume: '',
                        needs: ''
                      })
                    }}
                    className="px-6 py-2.5 bg-gradient-to-r from-[#C54A3F] to-[#B73E34] text-white font-semibold rounded-lg hover:from-[#B73E34] hover:to-[#A53329] transition-all"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Get Started with AiroPhone</h2>
                  <p className="text-sm sm:text-base text-gray-600">Tell us about your business and our team will review your application</p>
                </div>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                >
                  &times;
                </button>
              </div>

              <form
                onSubmit={async (e) => {
                  e.preventDefault()
                  setSubmitting(true)

                  try {
                    const response = await fetch('/api/submit-request', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(formData)
                    })

                    const result = await response.json()

                    if (!response.ok) {
                      throw new Error(result.error || 'Failed to submit request')
                    }

                    setSubmitted(true)
                  } catch (error) {
                    console.error('Submission error:', error)
                    alert('Failed to submit request. Please try again or contact us directly.')
                  } finally {
                    setSubmitting(false)
                  }
                }}
                className="space-y-4 sm:space-y-6"
              >
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Business Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C54A3F] focus:border-transparent transition-all"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C54A3F] focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C54A3F] focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C54A3F] focus:border-transparent transition-all"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C54A3F] focus:border-transparent transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Expected Monthly Message Volume <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.volume}
                    onChange={(e) => setFormData({...formData, volume: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C54A3F] focus:border-transparent transition-all"
                  >
                    <option value="">Select volume range</option>
                    <option value="0-5000">0 - 5,000 messages</option>
                    <option value="5001-10000">5,001 - 10,000 messages</option>
                    <option value="10001-50000">10,001 - 50,000 messages</option>
                    <option value="50001+">50,000+ messages</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Tell Us About Your Needs
                  </label>
                  <textarea
                    rows={4}
                    value={formData.needs}
                    onChange={(e) => setFormData({...formData, needs: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C54A3F] focus:border-transparent transition-all resize-none"
                    placeholder="What are you looking to achieve with AiroPhone? Any specific requirements or questions?"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="w-full sm:flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
                    disabled={submitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:flex-1 px-6 py-3 bg-gradient-to-r from-[#C54A3F] to-[#B73E34] text-white font-semibold rounded-xl hover:from-[#B73E34] hover:to-[#A53329] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-2"></i>
                        Submit Application
                      </>
                    )}
                  </button>
                </div>
              </form>
              </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#C54A3F] to-[#B73E34] rounded-lg flex items-center justify-center shadow-lg">
                <i className="fas fa-phone-alt text-white text-sm sm:text-lg"></i>
              </div>
              <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-[#C54A3F] to-[#B73E34] bg-clip-text text-transparent">
                AiroPhone
              </span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <a
                href="https://ap.airosofts.com/login"
                className="px-2 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base text-gray-700 hover:text-[#C54A3F] font-medium transition-colors"
              >
                Sign In
              </a>
              <button
                onClick={() => setShowContactForm(true)}
                className="px-3 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base bg-gradient-to-r from-[#C54A3F] to-[#B73E34] text-white rounded-lg font-semibold hover:from-[#B73E34] hover:to-[#A53329] transition-all shadow-md hover:shadow-lg whitespace-nowrap"
              >
                Request Access
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Powerful SMS & Voice{' '}
              <span className="bg-gradient-to-r from-[#C54A3F] to-[#B73E34] bg-clip-text text-transparent">
                Campaign Platform
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Reach thousands of customers instantly with bulk SMS campaigns, manage conversations,
              and track engagement - all from one intuitive platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setShowContactForm(true)}
                className="px-8 py-4 bg-gradient-to-r from-[#C54A3F] to-[#B73E34] text-white text-lg font-semibold rounded-xl hover:from-[#B73E34] hover:to-[#A53329] transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Request Access
              </button>
              <a
                href="#pricing"
                className="px-8 py-4 bg-white text-gray-700 text-lg font-semibold rounded-xl border-2 border-gray-300 hover:border-[#C54A3F] transition-all"
              >
                <i className="fas fa-dollar-sign mr-2"></i>
                View Pricing
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-[#C54A3F] mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Delivery Rate</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-[#C54A3F] mb-2">10M+</div>
              <div className="text-gray-600 font-medium">Messages Sent</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-[#C54A3F] mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Scale
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help businesses communicate effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#C54A3F] transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-[#C54A3F] to-[#B73E34] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <i className="fas fa-bullhorn text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bulk SMS Campaigns</h3>
              <p className="text-gray-600 leading-relaxed">
                Send thousands of personalized messages instantly with dynamic tags and smart scheduling.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#C54A3F] transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-[#C54A3F] to-[#B73E34] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <i className="fas fa-inbox text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Unified Inbox</h3>
              <p className="text-gray-600 leading-relaxed">
                Manage all customer conversations in one place with real-time updates and smart filters.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#C54A3F] transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-[#C54A3F] to-[#B73E34] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <i className="fas fa-map-marker-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Number Selection</h3>
              <p className="text-gray-600 leading-relaxed">
                Buy phone numbers from specific states or area codes to maintain local presence.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#C54A3F] transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-[#C54A3F] to-[#B73E34] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <i className="fas fa-address-book text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Organize contacts with lists, CSV imports, and custom fields for better targeting.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#C54A3F] transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-[#C54A3F] to-[#B73E34] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <i className="fas fa-magic text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Message Templates</h3>
              <p className="text-gray-600 leading-relaxed">
                Save time with reusable templates featuring dynamic personalization tags.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#C54A3F] transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-[#C54A3F] to-[#B73E34] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics & Reports</h3>
              <p className="text-gray-600 leading-relaxed">
                Track delivery rates, engagement metrics, and campaign performance in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pay only for what you use. No hidden fees. Volume discounts automatically applied.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Tier 1 */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden hover:border-[#C54A3F] transition-all">
              <div className="p-8">
                <div className="mb-4">
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-bold rounded-full">
                    STARTER
                  </span>
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">$0.03</span>
                  <span className="text-gray-600 ml-2">per message</span>
                </div>
                <p className="text-gray-600 mb-6">Perfect for getting started</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                    <span className="text-gray-700">0 - 5,000 messages</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                    <span className="text-gray-700">All features included</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                    <span className="text-gray-700">24/7 email support</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                    <span className="text-gray-700">Deliverability reports</span>
                  </li>
                </ul>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="block w-full text-center px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-xl hover:bg-gray-200 transition-all"
                >
                  Request Access
                </button>
              </div>
            </div>

            {/* Tier 2 - Popular */}
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-[#C54A3F] overflow-hidden transform md:scale-105 relative">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#C54A3F] to-[#B73E34] text-white text-center py-2 text-sm font-bold">
                MOST POPULAR
              </div>
              <div className="p-8 pt-12">
                <div className="mb-4">
                  <span className="px-4 py-2 bg-red-50 text-[#C54A3F] text-sm font-bold rounded-full">
                    GROWTH
                  </span>
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">$0.025</span>
                  <span className="text-gray-600 ml-2">per message</span>
                </div>
                <p className="text-gray-600 mb-6">17% savings for scaling businesses</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                    <span className="text-gray-700">5,001 - 10,000 messages</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                    <span className="text-gray-700">All features included</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                    <span className="text-gray-700">24/7 email support</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                    <span className="text-gray-700">Deliverability reports</span>
                  </li>
                </ul>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#C54A3F] to-[#B73E34] text-white font-semibold rounded-xl hover:from-[#B73E34] hover:to-[#A53329] transition-all shadow-lg"
                >
                  Request Access
                </button>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden hover:border-[#C54A3F] transition-all">
              <div className="p-8">
                <div className="mb-4">
                  <span className="px-4 py-2 bg-green-50 text-green-700 text-sm font-bold rounded-full">
                    ENTERPRISE
                  </span>
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">$0.02</span>
                  <span className="text-gray-600 ml-2">per message</span>
                </div>
                <p className="text-gray-600 mb-6">33% savings for high volume</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                    <span className="text-gray-700">10,000+ messages</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                    <span className="text-gray-700">All features included</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                    <span className="text-gray-700">24/7 email support</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                    <span className="text-gray-700">Deliverability reports</span>
                  </li>
                </ul>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="block w-full text-center px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-xl hover:bg-gray-200 transition-all"
                >
                  Request Access
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#C54A3F] to-[#B73E34]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of businesses using AiroPhone to connect with their customers
          </p>
          <button
            onClick={() => setShowContactForm(true)}
            className="inline-block px-10 py-4 bg-white text-[#C54A3F] text-lg font-bold rounded-xl hover:bg-gray-100 transition-all shadow-2xl transform hover:scale-105"
          >
            <i className="fas fa-paper-plane mr-2"></i>
            Request Access
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#C54A3F] to-[#B73E34] rounded-lg flex items-center justify-center">
                  <i className="fas fa-phone-alt text-white"></i>
                </div>
                <span className="text-2xl font-bold">AiroPhone</span>
              </div>
              <p className="text-gray-400 mb-4">
                The complete SMS and voice communication platform for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setShowContactForm(true)} className="hover:text-white transition-colors">Features</button></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><button onClick={() => setShowContactForm(true)} className="hover:text-white transition-colors">Get Started</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://ap.airosofts.com/login" className="hover:text-white transition-colors">Sign In</a></li>
                <li><button onClick={() => setShowContactForm(true)} className="hover:text-white transition-colors">Request Access</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AiroPhone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
