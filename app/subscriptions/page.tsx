'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const plans = [
  {
    name: 'Basic',
    price: '$9.99',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    color: 'bg-black',
  },
  {
    name: 'Pro',
    price: '$19.99',
    features: ['All Basic features', 'Feature 4', 'Feature 5'],
    color: 'bg-pink-500',
  },
  {
    name: 'Enterprise',
    price: '$29.99',
    features: ['All Pro features', 'Feature 6', 'Feature 7'],
    color: 'bg-purple-500',
  },
]

export default function Subscriptions() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Choose Your Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-yellow-300 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Card 
              className={`relative cursor-pointer transition-colors duration-300 ${
                selectedPlan === plan.name ? `${plan.color} text-white` : 'bg-white'
              }`}
              onClick={() => setSelectedPlan(plan.name)}
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription className={selectedPlan === plan.name ? 'text-gray-200' : ''}>{plan.price}/month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/garages" className="w-full">
                  <Button className="w-full" variant={selectedPlan === plan.name ? 'secondary' : 'default'}>
                    {selectedPlan === plan.name ? 'Selected' : 'Select Plan'}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}