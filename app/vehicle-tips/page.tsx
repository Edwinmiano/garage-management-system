'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

// Mock data for vehicle tips
const vehicleTips = [
  { id: 1, make: 'Toyota', model: 'Corolla', tip: 'Regular oil changes every 5,000 miles can significantly extend your engine\'s life.' },
  { id: 2, make: 'Honda', model: 'Civic', tip: 'Check and replace your air filter every 15,000 to 30,000 miles for optimal fuel efficiency.' },
  { id: 3, make: 'Ford', model: 'F-150', tip: 'Rotate your tires every 5,000 to 8,000 miles to ensure even wear and extend their lifespan.' },
]

export default function VehicleTipsPage() {
  const [selectedMake, setSelectedMake] = useState('')
  const [selectedModel, setSelectedModel] = useState('')

  const filteredTips = vehicleTips.filter(tip =>
    (!selectedMake || tip.make === selectedMake) &&
    (!selectedModel || tip.model === selectedModel)
  )

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">AI-Generated Vehicle Tips</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <Label htmlFor="make">Vehicle Make</Label>
          <Select value={selectedMake} onValueChange={setSelectedMake}>
            <SelectTrigger id="make">
              <SelectValue placeholder="Select make" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Toyota">Toyota</SelectItem>
              <SelectItem value="Honda">Honda</SelectItem>
              <SelectItem value="Ford">Ford</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <Label htmlFor="model">Vehicle Model</Label>
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger id="model">
              <SelectValue placeholder="Select model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Corolla">Corolla</SelectItem>
              <SelectItem value="Civic">Civic</SelectItem>
              <SelectItem value="F-150">F-150</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTips.map(tip => (
          <Card key={tip.id}>
            <CardHeader>
              <CardTitle>{tip.make} {tip.model}</CardTitle>
              <CardDescription>Maintenance Tip</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{tip.tip}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}