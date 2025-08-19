"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function Footer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before rendering theme-dependent elements
  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine which logo to show based on theme
  const logoSrc = mounted && resolvedTheme === "dark" ? "/logo-light.png" : "/logo-dark.png"

  return (
    <footer className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              {mounted ? (
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3 flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/light-logo-9qPvRfO9XkzZMzM3tBGbxbOQbQGzzQ.png"
                      alt="Gafah Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">Gafah</span>
                </div>
              ) : (
                <div className="h-8 w-[120px]" />
              )}
            </Link>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6 leading-relaxed">
              Leading the future of artificial intelligence with innovative solutions that transform businesses. From
              predictive analytics to intelligent automation, we make AI accessible and impactful.
            </p>

            {/* AI Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-[#7A7FEE]">500+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">AI Models Deployed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#7A7FEE]">99.9%</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#7A7FEE]">24/7</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">AI Monitoring</div>
              </div>
            </div>
          </div>

          {/* AI Solutions */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">AI Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#7A7FEE] transition-colors">
                  Predictive Analytics
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#7A7FEE] transition-colors">
                  Natural Language Processing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#7A7FEE] transition-colors">
                  Computer Vision
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#7A7FEE] transition-colors">
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#7A7FEE] transition-colors">
                  Intelligent Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#7A7FEE] transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#7A7FEE] transition-colors">
                  Finance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#7A7FEE] transition-colors">
                  Retail
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#7A7FEE] transition-colors">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#7A7FEE] transition-colors">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Gafah. Pioneering AI Solutions for Tomorrow.
          </p>

          {/* Trust Indicators */}
          <div className="flex items-center gap-6 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>AI Systems Online</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Processing Data</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Secure & Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
