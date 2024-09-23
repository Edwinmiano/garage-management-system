'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

interface VehicleDetails {
  id: string
  make: string
  model: string
  year: string
  vin: string
  licensePlate: string
  color: string
  owner: {
    name: string
    email: string
    phone: string
  }
  serviceHistory: {
    date: string
    service: string
    cost: number
    status: string
  }[]
}

export default function VehicleProfile() {
  const [vehicle, setVehicle] = useState<VehicleDetails | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchVehicleDetails = async () => {
      setLoading(true)
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const sampleVehicle: VehicleDetails = {
        id: 'sample-001',
        make: 'Toyota',
        model: 'Corolla',
        year: '2020',
        vin: '1HGBH41JXMN109186',
        licensePlate: 'ABC123',
        color: 'Blue',
        owner: {
          name: 'John Doe',
          email: 'john@example.com',
          phone: '(123) 456-7890',
        },
        serviceHistory: [
          { date: '2023-01-15', service: 'Oil Change', cost: 50, status: 'Completed' },
          { date: '2023-03-20', service: 'Tire Rotation', cost: 30, status: 'Completed' },
          { date: '2023-06-10', service: 'Brake Service', cost: 200, status: 'In Progress' },
        ],
      }
      setVehicle(sampleVehicle)
      setLoading(false)
    }

    fetchVehicleDetails()
  }, [])

  if (loading) {
    return <div className="container mx-auto py-8">Loading...</div>
  }

  if (!vehicle) {
    return <div className="container mx-auto py-8">No vehicle data found</div>
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Vehicle Profile (Sample)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Vehicle Details</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="font-semibold">Make</dt>
                <dd>{vehicle.make}</dd>
              </div>
              <div>
                <dt className="font-semibold">Model</dt>
                <dd>{vehicle.model}</dd>
              </div>
              <div>
                <dt className="font-semibold">Year</dt>
                <dd>{vehicle.year}</dd>
              </div>
              <div>
                <dt className="font-semibold">VIN</dt>
                <dd>{vehicle.vin}</dd>
              </div>
              <div>
                <dt className="font-semibold">License Plate</dt>
                <dd>{vehicle.licensePlate}</dd>
              </div>
              <div>
                <dt className="font-semibold">Color</dt>
                <dd>{vehicle.color}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Owner Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="font-semibold">Name</dt>
                <dd>{vehicle.owner.name}</dd>
              </div>
              <div>
                <dt className="font-semibold">Email</dt>
                <dd>{vehicle.owner.email}</dd>
              </div>
              <div>
                <dt className="font-semibold">Phone</dt>
                <dd>{vehicle.owner.phone}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Service History</CardTitle>
          <CardDescription>Recent maintenance and repairs</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Cost</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vehicle.serviceHistory.map((service, index) => (
                <TableRow key={index}>
                  <TableCell>{service.date}</TableCell>
                  <TableCell>{service.service}</TableCell>
                  <TableCell>${service.cost.toFixed(2)}</TableCell>
                  <TableCell>{service.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}