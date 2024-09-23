'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'

interface UserProfile {
  name: string
  email: string
  phone: string
  address: string
}

interface GarageProfile {
  name: string
  email: string
  phone: string
  address: string
  description: string
  services: string[]
}

export default function ProfileManagement() {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: '',
    email: '',
    phone: '',
    address: '',
  })
  const [garageProfile, setGarageProfile] = useState<GarageProfile>({
    name: '',
    email: '',
    phone: '',
    address: '',
    description: '',
    services: [],
  })
  const [activeTab, setActiveTab] = useState('user')

  useEffect(() => {
    // Fetch user and garage profiles from API
    // This is a mock implementation
    setUserProfile({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '(123) 456-7890',
      address: '123 Main St, Anytown, USA',
    })
    setGarageProfile({
      name: 'AutoFix Garage',
      email: 'info@autofixgarage.com',
      phone: '(987) 654-3210',
      address: '456 Service Rd, Mechanicsville, USA',
      description: 'We provide top-notch auto repair services.',
      services: ['Oil Change', 'Tire Rotation', 'Brake Service'],
    })
  }, [])

  const handleUserProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value })
  }

  const handleGarageProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setGarageProfile({ ...garageProfile, [e.target.name]: e.target.value })
  }

  const handleUserProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement user profile update logic here
    console.log('Updated user profile:', userProfile)
  }

  const handleGarageProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement garage profile update logic here
    console.log('Updated garage profile:', garageProfile)
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Profile Management</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="user">User Profile</TabsTrigger>
          <TabsTrigger value="garage">Garage Profile</TabsTrigger>
        </TabsList>
        <TabsContent value="user">
          <Card>
            <CardHeader>
              <CardTitle>User Profile</CardTitle>
              <CardDescription>Manage your personal information</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUserProfileSubmit}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="userName">Name</Label>
                    <Input id="userName" name="name" value={userProfile.name} onChange={handleUserProfileChange} />
                  </div>
                  <div>
                    <Label htmlFor="userEmail">Email</Label>
                    <Input id="userEmail" name="email" type="email" value={userProfile.email} onChange={handleUserProfileChange} />
                  </div>
                  <div>
                    <Label htmlFor="userPhone">Phone</Label>
                    <Input id="userPhone" name="phone" value={userProfile.phone} onChange={handleUserProfileChange} />
                  </div>
                  <div>
                    <Label htmlFor="userAddress">Address</Label>
                    <Input id="userAddress" name="address" value={userProfile.address} onChange={handleUserProfileChange} />
                  </div>
                  <Button type="submit">Update Profile</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="garage">
          <Card>
            <CardHeader>
              <CardTitle>Garage Profile</CardTitle>
              <CardDescription>Manage your garage information</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleGarageProfileSubmit}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="garageName">Garage Name</Label>
                    <Input id="garageName" name="name" value={garageProfile.name} onChange={handleGarageProfileChange} />
                  </div>
                  <div>
                    <Label htmlFor="garageEmail">Email</Label>
                    <Input id="garageEmail" name="email" type="email" value={garageProfile.email} onChange={handleGarageProfileChange} />
                  </div>
                  <div>
                    <Label htmlFor="garagePhone">Phone</Label>
                    <Input id="garagePhone" name="phone" value={garageProfile.phone} onChange={handleGarageProfileChange} />
                  </div>
                  <div>
                    <Label htmlFor="garageAddress">Address</Label>
                    <Input id="garageAddress" name="address" value={garageProfile.address} onChange={handleGarageProfileChange} />
                  </div>
                  <div>
                    <Label htmlFor="garageDescription">Description</Label>
                    <Textarea id="garageDescription" name="description" value={garageProfile.description} onChange={handleGarageProfileChange} />
                  </div>
                  <div>
                    <Label htmlFor="garageServices">Services (comma-separated)</Label>
                    <Input id="garageServices" name="services" value={garageProfile.services.join(', ')} onChange={(e) => setGarageProfile({ ...garageProfile, services: e.target.value.split(',').map(s => s.trim()) })} />
                  </div>
                  <Button type="submit">Update Garage Profile</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}