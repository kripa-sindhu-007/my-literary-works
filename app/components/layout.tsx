'use client'

import { useState, useEffect } from 'react'
import Header from './header'
import Footer from './footer'
import { Button } from "@/components/ui/button"
import { Moon, Sun } from 'lucide-react'
import { useDarkMode } from '../hooks/useDarkMode'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useDarkMode()

  // Removed useEffect hook

  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 sm:py-8">
        {children}
      </main>
      <Footer />
      <Button
        variant="outline"
        size="icon"
        className={`fixed bottom-4 right-4 rounded-full ${
          darkMode === undefined
            ? 'bg-background-secondary text-primary'
            : darkMode
            ? 'bg-secondary text-primary'
            : 'bg-background-secondary text-primary'
        }`}
        onClick={() => setDarkMode(prev => !prev)}
      >
        {darkMode === undefined ? (
          <span className="h-[1.2rem] w-[1.2rem]" />
        ) : darkMode ? (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        )}
        <span className="sr-only">Toggle dark mode</span>
      </Button>
    </div>
  )
}

