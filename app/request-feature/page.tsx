'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'

export default function RequestFeature() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [feature, setFeature] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log({ name, email, feature })
    toast({
      title: "Feature Request Submitted",
      description: "Thank you for your feedback. We'll review your request.",
    })
    setName('')
    setEmail('')
    setFeature('')
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Request a Feature</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="feature" className="block text-sm font-medium mb-1">Feature Request</label>
            <Textarea
              id="feature"
              value={feature}
              onChange={(e) => setFeature(e.target.value)}
              required
              rows={5}
            />
          </div>
          <Button type="submit" className="w-full">Submit Request</Button>
        </div>
      </form>
    </div>
  )
}