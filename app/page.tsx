import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gradient-to-b from-gray-100 to-gray-200">
      <h1 className="text-5xl font-bold mb-8 text-center">Welcome to Garage Management System</h1>
      <p className="text-xl mb-12 text-center max-w-2xl">
        Streamline your garage operations, manage vehicle maintenance, and connect with customers effortlessly.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          title="Garage Search"
          description="Find and book services at registered garages near you."
          link="/garages"
        />
        <FeatureCard
          title="Vehicle Maintenance"
          description="Track your vehicle's maintenance progress in real-time."
          link="/maintenance"
        />
        <FeatureCard
          title="AI-Powered Tips"
          description="Get personalized vehicle tips based on your make and model."
          link="/vehicle-tips"
        />
      </div>
      <div className="flex space-x-4">
        <Link href="/login">
          <Button size="lg">Login</Button>
        </Link>
        <Link href="/signup">
          <Button variant="outline" size="lg">Sign Up</Button>
        </Link>
      </div>
    </div>
  )
}

function FeatureCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <Link href={link} className="mt-4 inline-block">
          <Button variant="link">Learn More</Button>
        </Link>
      </CardContent>
    </Card>
  )
}