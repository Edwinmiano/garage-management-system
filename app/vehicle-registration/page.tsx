'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function VehicleRegistration() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    make: '',
    model: '',
    year: '',
    vin: '',
    licensePlate: '',
    color: '',
    additionalNotes: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement vehicle registration logic here
    console.log('Vehicle registration data:', formData)
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Vehicle Registration</CardTitle>
          <CardDescription>Enter your details and vehicle information</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="make">Make</Label>
                <Input id="make" name="make" value={formData.make} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="model">Model</Label>
                <Input id="model" name="model" value={formData.model} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="year">Year</Label>
                <Input id="year" name="year" value={formData.year} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="vin">VIN (Vehicle Identification Number)</Label>
                <Input id="vin" name="vin" value={formData.vin} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="licensePlate">License Plate Number</Label>
                <Input id="licensePlate" name="licensePlate" value={formData.licensePlate} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="color">Color</Label>
                <Input id="color" name="color" value={formData.color} onChange={handleChange} required />
              </div>
            </div>
            <div className="mt-4">
              <Label htmlFor="additionalNotes">Additional Notes</Label>
              <Textarea id="additionalNotes" name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} />
            </div>
            <Button type="submit" className="mt-6">Register Vehicle</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}