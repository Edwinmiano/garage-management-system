'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

interface JobStatus {
  id: string
  vehicle: string
  service: string
  status: 'pending' | 'in-progress' | 'completed'
  progress: number
  estimatedCompletion: string
  updates: { timestamp: string; message: string }[]
}

export default function JobStatus() {
  const [job, setJob] = useState<JobStatus | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJobStatus = async () => {
      setLoading(true)
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const sampleJob: JobStatus = {
        id: 'job-001',
        vehicle: 'Toyota Corolla (ABC123)',
        service: 'Full Service',
        status: 'in-progress',
        progress: 60,
        estimatedCompletion: '2023-07-15 14:00',
        updates: [
          { timestamp: '2023-07-15 09:00', message: 'Vehicle received for service' },
          { timestamp: '2023-07-15 10:30', message: 'Oil change completed' },
          { timestamp: '2023-07-15 11:45', message: 'Tire rotation in progress' },
        ],
      }
      setJob(sampleJob)
      setLoading(false)
    }

    fetchJobStatus()
  }, [])

  useEffect(() => {
    if (job && job.status !== 'completed') {
      const interval = setInterval(() => {
        setJob(prevJob => {
          if (prevJob && prevJob.progress < 100) {
            return {
              ...prevJob,
              progress: Math.min(prevJob.progress + 5, 100),
              updates: [
                ...prevJob.updates,
                { timestamp: new Date().toLocaleString(), message: 'Work in progress' }
              ]
            }
          }
          return prevJob
        })
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [job])

  if (loading) {
    return <div className="container mx-auto py-8">Loading...</div>
  }

  if (!job) {
    return <div className="container mx-auto py-8">No job data found</div>
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Job Status (Sample)</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{job.vehicle}</CardTitle>
          <CardDescription>{job.service}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span>Progress</span>
                <span>{job.progress}%</span>
              </div>
              <Progress value={job.progress} className="w-full" />
            </div>
            <div>
              <span className="font-semibold">Status: </span>
              <span className="capitalize">{job.status}</span>
            </div>
            <div>
              <span className="font-semibold">Estimated Completion: </span>
              <span>{job.estimatedCompletion}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Job Updates</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {job.updates.map((update, index) => (
              <li key={index} className="border-b pb-4 last:border-b-0">
                <span className="font-semibold">{update.timestamp}</span>
                <p>{update.message}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}