'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function FreeTrialPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [trialDays, setTrialDays] = useState(3)

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Signing up for free trial with email: ${email}`)
    // Implement free trial signup logic here
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Start Your Free Trial</h1>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>3-Day Free Trial</CardTitle>
          <CardDescription>Experience the full features of our Garage Management System</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">Start Free Trial</Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-600">
            Your free trial will expire in {trialDays} days. You can upgrade to a paid plan at any time.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}