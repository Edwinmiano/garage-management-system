'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

interface AnalyticsData {
  totalVehicles: number
  totalGarages: number
  revenueThisMonth: number
  popularServices: { service: string; count: number }[]
  monthlyRevenue: { month: string; revenue: number }[]
}

export default function AdminAnalytics() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null)
  const [selectedGarage, setSelectedGarage] = useState('all')

  useEffect(() => {
    // Fetch analytics data from API
    // This is a mock implementation
    const mockData: AnalyticsData = {
      totalVehicles: 1250,
      totalGarages: 15,
      revenueThisMonth: 75000,
      popularServices: [
        { service: 'Oil Change', count: 450 },
        { service: 'Tire Rotation', count: 300 },
        { service: 'Brake Service', count: 200 },
        { service: 'Engine Tune-up', count: 150 },
        { service: 'Battery Replacement', count: 100 },
      ],
      monthlyRevenue: [
        { month: 'Jan', revenue: 50000 },
        { month: 'Feb', revenue: 55000 },
        { month: 'Mar', revenue: 60000 },
        { month: 'Apr', revenue: 65000 },
        { month: 'May', revenue: 70000 },
        { month: 'Jun', revenue: 75000 },
      ],
    }
    setAnalyticsData(mockData)
  }, [])

  if (!analyticsData) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>
      <div className="mb-4">
        <Select value={selectedGarage} onValueChange={setSelectedGarage}>
          <SelectTrigger>
            <SelectValue placeholder="Select Garage" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Garages</SelectItem>
            <SelectItem value="garage1">Garage 1</SelectItem>
            <SelectItem value="garage2">Garage 2</SelectItem>
            {/* Add more garages as needed */}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Vehicles</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{analyticsData.totalVehicles}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Garages</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{analyticsData.totalGarages}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Revenue This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">${analyticsData.revenueThisMonth.toLocaleString()}</p>
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
                {analyticsData.popularServices.map((service, index) => (
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
              <BarChart data={analyticsData.monthlyRevenue}>
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