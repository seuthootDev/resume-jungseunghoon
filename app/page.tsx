'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Certifications from '@/components/Certifications'
import Languages from '@/components/Languages'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Volunteer from '@/components/Volunteer'
import Contact from '@/components/Contact'

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <main>
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Certifications />
      <Languages />
      <Experience />
      <Education />
      <Volunteer />
      <Contact />
    </main>
  )
}
