'use client'

import { useState, useEffect } from 'react'

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode')
    const isDark = storedDarkMode === null ? true : storedDarkMode === 'true'
    setDarkMode(isDark)
  }, [])

  useEffect(() => {
    if (darkMode !== undefined) {
      if (darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem('darkMode', darkMode.toString())
    }
  }, [darkMode])

  return [darkMode, setDarkMode] as const
}

