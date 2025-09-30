'use client'

import React, { useState } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mr-3">
          <span className="text-white font-bold text-lg">P&P</span>
        </div>
        <span className="text-xl font-bold text-gray-900">Pixel & Purpose Creative</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-8">
          <a href="#home" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
            Home
          </a>
          <a href="#services" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
            Services
          </a>
          <a href="#portfolio" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
            Portfolio
          </a>
          <a href="#about" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
            About
          </a>
          <a href="#blog" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
            Blog
          </a>
          <a href="#contact" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-purple-700 hover:to-pink-600 transition-all duration-200 transform hover:scale-105">
            Get Started
          </a>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button className="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path className="inline-flex" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Navigation Menu */}
  <div className="mobile-menu hidden md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
      <a href="#home" className="text-gray-900 hover:text-purple-600 block px-3 py-2 text-base font-medium">
        Home
      </a>
      <a href="#services" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">
        Services
      </a>
      <a href="#portfolio" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">
        Portfolio
      </a>
      <a href="#about" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">
        About
      </a>
      <a href="#blog" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">
        Blog
      </a>
      <a href="#contact" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white block px-3 py-2 text-base font-medium rounded-md mx-3 mt-4 text-center">
        Get Started
      </a>
    </div>
  </div>
</nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
  {/* Animated Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-20 left-10 w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
    <div className="absolute top-40 right-20 w-1 h-1 bg-purple-300 rounded-full animate-ping"></div>
    <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-300"></div>
    <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-indigo-300 rounded-full animate-ping delay-700"></div>
  </div>
  
  {/* Grid Overlay */}
  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%236366f1" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

  <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
    <div className="max-w-4xl mx-auto text-center">
      {/* Brand Badge */}
      <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-400/20 rounded-full px-4 py-2 mb-8">
        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
        <span className="text-indigo-300 text-sm font-medium">Award-Winning Creative Agency</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
        Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Pixel</span> Has
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Purpose</span>
      </h1>

      {/* Subheadline */}
      <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
        We craft digital experiences that don't just look stunning—they drive results. 
        From brand identity to conversion-focused campaigns, we turn creative vision into measurable growth.
      </p>

      {/* Stats Row */}
      <div className="flex flex-wrap justify-center gap-8 mb-12 text-center">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-4">
          <div className="text-2xl font-bold text-indigo-400">250%</div>
          <div className="text-sm text-slate-400">Avg. ROI Increase</div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-4">
          <div className="text-2xl font-bold text-purple-400">500+</div>
          <div className="text-sm text-slate-400">Brands Transformed</div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-4">
          <div className="text-2xl font-bold text-blue-400">98%</div>
          <div className="text-sm text-slate-400">Client Retention</div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="group relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/25 hover:scale-105">
          <span className="relative z-10">Start Your Project</span>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
        
        <button className="group border-2 border-indigo-400/30 text-indigo-300 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-400/10 hover:text-white">
          View Our Portfolio
          <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>

      {/* Trust Indicators */}
      <div className="mt-16 pt-8 border-t border-white/10">
        <p className="text-slate-400 text-sm mb-6">Trusted by industry leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-slate-500 font-semibold">TechCorp</div>
          <div className="text-slate-500 font-semibold">InnovateLab</div>
          <div className="text-slate-500 font-semibold">GrowthCo</div>
          <div className="text-slate-500 font-semibold">BrandForge</div>
        </div>
      </div>
    </div>
  </div>

  {/* Floating Elements */}
  <div className="absolute bottom-10 right-10 w-20 h-20 border border-indigo-400/20 rounded-lg rotate-12 animate-bounce"></div>
  <div className="absolute top-1/4 left-10 w-16 h-16 border border-purple-400/20 rounded-full animate-pulse"></div>
</section>
      
      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Why Choose Pixel & Purpose Creative
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Pixel & Purpose Creative delivers marketing solutions that combine stunning visuals with strategic purpose, 
        driving measurable results for brands across industries.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Award-Winning Creative Team */}
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center group">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3l1.25 4.5L18 9l-4.75 1.5L12 15l-1.25-4.5L6 9l4.75-1.5L12 3z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Award-Winning Creative Team</h3>
        <p className="text-gray-600 leading-relaxed">
          Pixel & Purpose Creative's internationally recognized designers and strategists bring fresh perspectives 
          to every campaign, ensuring your brand stands out in competitive markets.
        </p>
      </div>

      {/* ROI-Focused Approach */}
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center group">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Proven ROI-Focused Approach</h3>
        <p className="text-gray-600 leading-relaxed">
          Every marketing initiative by Pixel & Purpose Creative is designed with measurable outcomes in mind, 
          delivering an average 300% increase in conversion rates for our clients.
        </p>
      </div>

      {/* Full-Service Creative Solutions */}
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center group">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Full-Service Creative Solutions</h3>
        <p className="text-gray-600 leading-relaxed">
          From brand identity and digital campaigns to content marketing and social media strategy, 
          Pixel & Purpose Creative provides comprehensive marketing services under one roof.
        </p>
      </div>

      {/* Collaborative Design Process */}
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center group">
        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Collaborative Design Process</h3>
        <p className="text-gray-600 leading-relaxed">
          Pixel & Purpose Creative partners closely with your team throughout every project phase, 
          ensuring alignment with your vision while bringing expert marketing insights to the table.
        </p>
      </div>
    </div>

    <div className="text-center mt-12">
      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
        Start Your Marketing Transformation
      </button>
    </div>
  </div>
</section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        What Our Clients Say
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Trusted by marketing leaders across industries
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="Sarah Chen"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-900">Sarah Chen</h4>
            <p className="text-sm text-gray-600">Marketing Director, TechFlow Solutions</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 italic">
          "Pixel & Purpose Creative transformed our brand identity and digital presence. Their strategic approach to our rebranding campaign resulted in a 40% increase in lead generation. The team truly understands how to blend creativity with data-driven results."
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Marcus Rodriguez"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-900">Marcus Rodriguez</h4>
            <p className="text-sm text-gray-600">CMO, GreenLeaf Organics</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 italic">
          "Working with Pixel & Purpose Creative was a game-changer for our product launch. Their integrated marketing campaign across social media, email, and content marketing drove our highest conversion rates ever. They're not just creatives—they're strategic partners."
        </p>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
            alt="Jennifer Walsh"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-900">Jennifer Walsh</h4>
            <p className="text-sm text-gray-600">VP Marketing, FinanceFirst</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 italic">
          "The ROI we've seen from our partnership with Pixel & Purpose Creative speaks for itself. Their data-driven approach to our PPC campaigns and marketing automation reduced our cost per acquisition by 35% while doubling our qualified leads. Exceptional work!"
        </p>
      </div>
    </div>
  </div>
</section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Company Info */}
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-2xl font-bold text-white mb-4">Pixel & Purpose Creative</h3>
        <p className="text-gray-300 mb-4 max-w-md">
          Crafting compelling brand stories and digital experiences that drive results. 
          We blend creativity with strategy to help your business stand out.
        </p>
        <div className="space-y-2 text-gray-300">
          <p className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            hello@pixelandpurpose.com
          </p>
          <p className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            (555) 123-4567
          </p>
        </div>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Services</h4>
        <ul className="space-y-2 text-gray-300">
          <li><a href="#" className="hover:text-white transition-colors">Brand Strategy</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Web Design</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Content Creation</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Social Media</a></li>
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Company</h4>
        <ul className="space-y-2 text-gray-300">
          <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
    </div>

    {/* Social Media & Copyright */}
    <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
      <div className="flex space-x-6 mb-4 sm:mb-0">
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.013C24.007 5.367 18.641.001 12.017.001z"/>
          </svg>
        </a>
      </div>
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Pixel & Purpose Creative. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </main>
  )
}