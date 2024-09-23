'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const paymentMethods = ['Mpesa', 'Bank', 'Paypal', 'Crypto', 'Credit/Debit Cards']

export default function PaymentsPage() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(paymentMethods[0])
  const [amount, setAmount] = useState('')

  const handlePayment = () => {
    alert(`Processing payment of $${amount} using ${selectedPaymentMethod}`)
    // Implement payment processing logic here
  }

  const handleDownloadInvoice = () => {
    alert('Downloading invoice...')
    // Implement invoice download logic here
  }

  const handleDownloadReceipt = () => {
    alert('Downloading receipt...')
    // Implement receipt download logic here
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Payments</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Make a Payment</CardTitle>
          <CardDescription>Choose your payment method and enter the amount</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <RadioGroup value={selectedPaymentMethod} onValueChange={setSelectedPaymentMethod}>
            {paymentMethods.map((method) => (
              <div key={method} className="flex items-center space-x-2">
                <RadioGroupItem value={method} id={method} />
                <Label htmlFor={method}>{method}</Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter>
          <Button onClick={handlePayment}>Process Payment</Button>
        </CardFooter>
      </Card>
      <div className="flex space-x-4">
        <Button variant="outline" onClick={handleDownloadInvoice}>Download Invoice</Button>
        <Button variant="outline" onClick={handleDownloadReceipt}>Download Receipt</Button>
      </div>
    </div>
  )
}