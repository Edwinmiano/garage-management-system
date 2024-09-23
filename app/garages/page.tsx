'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link' // Import Link from Next.js
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

// Mock data for garages
const garages = [
  { id: 1, name: 'AutoFix Garage', image: '/placeholder.svg?height=200&width=300', location: 'New York, NY' },
  { id: 2, name: 'Quick Service Auto', image: '/placeholder.svg?height=200&width=300', location: 'Los Angeles, CA' },
  { id: 3, name: 'Elite Car Care', image: '/placeholder.svg?height=200&width=300', location: 'Chicago, IL' },
]

export default function GaragePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedService, setSelectedService] = useState('')

  const filteredGarages = garages.filter(garage =>
    garage.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    garage.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Find a Garage</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <Label htmlFor="search">Search by name or location</Label>
          <Input
            id="search"
            placeholder="Search garages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full md:w-64">
          <Label htmlFor="service">Filter by service</Label>
          <Select value={selectedService} onValueChange={setSelectedService}>
            <SelectTrigger id="service">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="oil-change">Oil Change</SelectItem>
              <SelectItem value="tire-rotation">Tire Rotation</SelectItem>
              <SelectItem value="brake-service">Brake Service</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGarages.map(garage => (
          <Card key={garage.id} className="flex flex-col">
            <CardHeader>
              <Image
                src={garage.image}
                alt={garage.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle>{garage.name}</CardTitle>
              <p className="text-gray-600">{garage.location}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              {/* Link to Services Page */}
              <Link href="/services">
                <Button variant="outline">
                  View Services
                </Button>
              </Link>

              {/* Link to Garages Page */}
              <Link href="/booking">
                <Button>
                  Book Now
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
