'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useDarkMode } from '../hooks/useDarkMode'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [darkMode] = useDarkMode()

  return (
    <header className="border-b border-secondary dark:border-gray-700 bg-background-secondary">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold text-primary dark:text-gray-200">My Literary Corner</Link>
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${darkMode ? 'text-white' : 'text-black'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
        <ul className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:justify-center md:space-x-6 text-sm font-medium mt-4 md:mt-0`}>
          <li><Link href="/" className="block py-2 text-primary dark:text-gray-200 hover:text-secondary dark:hover:text-gray-400 transition-colors">Home</Link></li>
          <li><Link href="/poetry" className="block py-2 text-primary dark:text-gray-200 hover:text-secondary dark:hover:text-gray-400 transition-colors">Poetry</Link></li>
          <li><Link href="/stories" className="block py-2 text-primary dark:text-gray-200 hover:text-secondary dark:hover:text-gray-400 transition-colors">Short Stories</Link></li>
          <li><Link href="/about" className="block py-2 text-primary dark:text-gray-200 hover:text-secondary dark:hover:text-gray-400 transition-colors">About</Link></li>
          <li><Link href="/admin/login" className="block py-2 text-primary dark:text-gray-200 hover:text-secondary dark:hover:text-gray-400 transition-colors">Admin</Link></li>
        </ul>
      </nav>
    </header>
  )
}

