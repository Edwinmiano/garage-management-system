'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

interface GarageAnalytics {
  totalVehicles: number
  revenueThisMonth: number
  popularServices: { service: string; count: number }[]
  monthlyRevenue: { month: string; revenue: number }[]
}

export default function GarageAnalytics() {
  const [analytics, setAnalytics] = useState<GarageAnalytics | null>(null)

  useEffect(() => {
    // Fetch garage analytics data from API
    // This is a mock implementation
    const mockData: GarageAnalytics = {
      totalVehicles: 250,
      revenueThisMonth: 15000,
      popularServices: [
        { service: 'Oil Change', count: 80 },
        { service: 'Tire Rotation', count: 60 },
        { service: 'Brake Service', count: 40 },
        { service: 'Engine Tune-up', count: 30 },
        { service: 'Battery Replacement', count: 20 },
      ],
      monthlyRevenue: [
        { month: 'Jan', revenue: 10000 },
        { month: 'Feb', revenue: 12000 },
        { month: 'Mar', revenue: 13000 },
        { month: 'Apr', revenue: 14000 },
        { month: 'May', revenue: 15000 },
        { month: 'Jun', revenue: 15000 },
      ],
    }
    setAnalytics(mockData)
  }, [])

  if (!analytics) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Garage Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Vehicles Serviced</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{analytics.totalVehicles}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Revenue This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">${analytics.revenueThisMonth.toLocaleString()}</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Popular Services</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service</TableHead>
                  <TableHead>Count</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {analytics.popularServices.map((service, index) => (
                  <TableRow key={index}>
                    <TableCell>{service.service}</TableCell>
                    <TableCell>{service.count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={analytics.monthlyRevenue}>
                <XAxis dataKey="month" />
                <YAxis />
                <Bar dataKey="revenue" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}