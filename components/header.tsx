"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, FileText, Phone, Mail } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="govt-header text-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-gray-800 text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Phone className="w-3 h-3 mr-1" />
              Gandhinagar: 9909039131/32/38
            </span>
            <span className="flex items-center">
              <Mail className="w-3 h-3 mr-1" />
              customer@eqdc.in
            </span>
          </div>
          <div className="text-xs">ISO/IEC 17025:2017 Accredited | NABL Recognized</div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8 text-blue-900" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">EQDC</h1>
              <p className="text-sm opacity-90">Electronics & Quality Development Centre</p>
              <p className="text-xs opacity-75">Ministry of Electronics & IT, Govt. of India</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-200 transition-colors">
              Home
            </Link>
            <Link href="/forms" className="hover:text-blue-200 transition-colors">
              Forms
            </Link>
            <Link href="/terms" className="hover:text-blue-200 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-blue-200 transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-blue-400">
            <div className="flex flex-col space-y-2 mt-4">
              <Link href="/" className="hover:text-blue-200 transition-colors py-2">
                Home
              </Link>
              <Link href="/forms" className="hover:text-blue-200 transition-colors py-2">
                Forms
              </Link>
              <Link href="/terms" className="hover:text-blue-200 transition-colors py-2">
                Terms & Conditions
              </Link>
              <Link href="/contact" className="hover:text-blue-200 transition-colors py-2">
                Contact Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
