'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Youtube } from 'lucide-react'

// This would come from your authentication system
const isLoggedIn = false // Change this to true to see logged-in state

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Garages', href: '/garages' },
    { name: 'Services', href: '/services' },
    { name: 'Booking', href: '/booking' },
    { name: 'Subscriptions', href: '/subscriptions' },
    { name: 'Vehicle Tips', href: '/vehicle-tips' },
  ]


  if (isLoggedIn) {
    navItems.push({ name: 'Progress', href: '/progress' })
  }

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">GMS</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button variant={pathname === item.href ? "secondary" : "ghost"}>{item.name}</Button>
              </Link>
            ))}
            {!isLoggedIn && (
              <>
                <Link href="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
                <Link href="/signup">
                  <Button variant="outline">Sign Up</Button>
                </Link>
              </>
            )}
            <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                className="bg-red-600 hover:bg-red-700 text-white animate-pulse"
              >
                <Youtube className="mr-2 h-4 w-4" /> YouTube
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              Menu
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-2 space-y-2 md:hidden">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="block">
                <Button 
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className="w-full text-left"
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            {!isLoggedIn && (
              <>
                <Link href="/login" className="block">
                  <Button variant="secondary" className="w-full">Login</Button>
                </Link>
                <Link href="/signup" className="block">
                  <Button variant="outline" className="w-full">Sign Up</Button>
                </Link>
              </>
            )}
            <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="block">
              <Button 
                variant="outline" 
                className="w-full bg-red-600 hover:bg-red-700 text-white animate-pulse"
              >
                <Youtube className="mr-2 h-4 w-4" /> YouTube
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}