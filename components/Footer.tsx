import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
              <li><Link href="/booking" className="hover:underline">Booking</Link></li>
              <li><Link href="/garages" className="hover:underline">Garages</Link></li>
              <li><Link href="/tips" className="hover:underline">Tips</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Feedback</h3>
            <Link href="/request-feature">
              <Button variant="outline">Request a Feature</Button>
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {currentYear} Garage Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
