import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Dashboard() {
  return (
    <div className="container mx-auto py-8">
      <header className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-black">Welcome to GMS Dashboard</h1>
        <nav className="flex space-x-4">
          <Link href="/garages">
            <Button variant="ghost">Garages</Button>
          </Link>
          <Link href="/vehicle-tips">
            <Button variant="ghost">Vehicle Tips</Button>
          </Link>
          <Link href="/profile">
            <Button variant="ghost">Profile</Button>
          </Link>
          <Link href="https://www.youtube.com/channel/your-channel-id" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="hover:bg-red-600 hover:text-white">YouTube</Button>
          </Link>
        </nav>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>My Vehicles</CardTitle>
            <CardDescription>Manage your registered vehicles</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/vehicles">
              <Button>View Vehicles</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Maintenance History</CardTitle>
            <CardDescription>View your vehicle maintenance history</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/login">
              <Button>View History</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Book Maintenance</CardTitle>
            <CardDescription>Schedule a maintenance appointment</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/book-maintenance">
              <Button>Book Now</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}