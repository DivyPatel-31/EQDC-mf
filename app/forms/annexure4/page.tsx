"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, FileText, Calculator } from "lucide-react"
import Link from "next/link"

export default function Annexure4Form() {
  const [formData, setFormData] = useState({
    customerName: "",
    billingAddress: "",
    workOrderNo: "",
    workOrderDate: "",
    telephone: "",
    email: "",
    gstNo: "",
    tanNo: "",
    panNo: "",
    advancePayment: "",
    srfNo: "",
    reportDate: "",
    invoicingDate: "",
    headOfService: "",
    serviceAmount: "",
    gstAmount: "",
    totalAmount: "",
    otherDetails: "",
  })

  const calculateBilling = (serviceAmount: string) => {
    const amount = Number.parseFloat(serviceAmount) || 0
    const gstAmount = amount * 0.18
    const totalAmount = amount + gstAmount

    setFormData((prev) => ({
      ...prev,
      serviceAmount: serviceAmount,
      gstAmount: gstAmount.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Annexure 4 Form Data:", formData)
    alert("Annexure 4 Bill submitted successfully!")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Forms
          </Link>

          <Card>
            <CardHeader className="bg-purple-600 text-white">
              <CardTitle className="text-2xl flex items-center">
                <Calculator className="w-6 h-6 mr-3" />
                Annexure 4 - Declaration to Raise Invoice
              </CardTitle>
              <p className="text-purple-100 text-sm">Information required from CSC to raise the Invoice</p>
            </CardHeader>

            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Customer Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Customer Details</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="customerName">Name of Party *</Label>
                      <Input
                        id="customerName"
                        value={formData.customerName}
                        onChange={(e) => setFormData((prev) => ({ ...prev, customerName: e.target.value }))}
                        placeholder="Enter party name"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="workOrderNo">Work Order No. and Date</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          value={formData.workOrderNo}
                          onChange={(e) => setFormData((prev) => ({ ...prev, workOrderNo: e.target.value }))}
                          placeholder="W.O. No."
                        />
                        <Input
                          type="date"
                          value={formData.workOrderDate}
                          onChange={(e) => setFormData((prev) => ({ ...prev, workOrderDate: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="billingAddress">Billing Address *</Label>
                      <Textarea
                        id="billingAddress"
                        value={formData.billingAddress}
                        onChange={(e) => setFormData((prev) => ({ ...prev, billingAddress: e.target.value }))}
                        placeholder="Enter complete billing address"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="telephone">Telephone/Mobile Number</Label>
                      <Input
                        id="telephone"
                        value={formData.telephone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, telephone: e.target.value }))}
                        placeholder="Enter phone number"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        placeholder="Enter email address"
                      />
                    </div>

                    <div>
                      <Label htmlFor="gstNo">GST No.</Label>
                      <Input
                        id="gstNo"
                        value={formData.gstNo}
                        onChange={(e) => setFormData((prev) => ({ ...prev, gstNo: e.target.value }))}
                        placeholder="Enter GST number"
                      />
                    </div>

                    <div>
                      <Label htmlFor="tanNo">TAN Number</Label>
                      <Input
                        id="tanNo"
                        value={formData.tanNo}
                        onChange={(e) => setFormData((prev) => ({ ...prev, tanNo: e.target.value }))}
                        placeholder="Enter TAN number"
                      />
                    </div>

                    <div>
                      <Label htmlFor="panNo">PAN Number</Label>
                      <Input
                        id="panNo"
                        value={formData.panNo}
                        onChange={(e) => setFormData((prev) => ({ ...prev, panNo: e.target.value }))}
                        placeholder="Enter PAN number"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Service Details</h3>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="srfNo">SRF No.</Label>
                      <Input
                        id="srfNo"
                        value={formData.srfNo}
                        onChange={(e) => setFormData((prev) => ({ ...prev, srfNo: e.target.value }))}
                        placeholder="Enter SRF number"
                      />
                    </div>

                    <div>
                      <Label htmlFor="reportDate">Report Date</Label>
                      <Input
                        id="reportDate"
                        type="date"
                        value={formData.reportDate}
                        onChange={(e) => setFormData((prev) => ({ ...prev, reportDate: e.target.value }))}
                      />
                    </div>

                    <div>
                      <Label htmlFor="invoicingDate">Invoicing Date</Label>
                      <Input
                        id="invoicingDate"
                        type="date"
                        value={formData.invoicingDate}
                        onChange={(e) => setFormData((prev) => ({ ...prev, invoicingDate: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="headOfService">Head of Service (under which head income to be booked)</Label>
                    <Input
                      id="headOfService"
                      value={formData.headOfService}
                      onChange={(e) => setFormData((prev) => ({ ...prev, headOfService: e.target.value }))}
                      placeholder="Enter head of service"
                    />
                  </div>

                  <div>
                    <Label>Advance Payment</Label>
                    <div className="flex items-center space-x-4 mt-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="advancePayment"
                          value="YES"
                          checked={formData.advancePayment === "YES"}
                          onChange={(e) => setFormData((prev) => ({ ...prev, advancePayment: e.target.value }))}
                          className="mr-2"
                        />
                        YES
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="advancePayment"
                          value="NO"
                          checked={formData.advancePayment === "NO"}
                          onChange={(e) => setFormData((prev) => ({ ...prev, advancePayment: e.target.value }))}
                          className="mr-2"
                        />
                        NO
                      </label>
                    </div>
                  </div>
                </div>

                {/* Billing Calculation */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Billing Calculation</h3>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="serviceAmount">a. Amount of Service (Rs.) *</Label>
                      <Input
                        id="serviceAmount"
                        value={formData.serviceAmount}
                        onChange={(e) => calculateBilling(e.target.value)}
                        placeholder="0"
                        type="number"
                        step="0.01"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="gstAmount">b. GST @ 18% (Rs.)</Label>
                      <Input
                        id="gstAmount"
                        value={formData.gstAmount}
                        placeholder="0"
                        readOnly
                        className="bg-gray-50"
                      />
                    </div>

                    <div>
                      <Label htmlFor="totalAmount">c. Total Bill Amount (a+b) (Rs.)</Label>
                      <Input
                        id="totalAmount"
                        value={formData.totalAmount}
                        placeholder="0"
                        readOnly
                        className="bg-gray-50 font-semibold text-green-600"
                      />
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">💡 Auto Calculation</h4>
                    <p className="text-sm text-blue-800">
                      GST @ 18% and total amount are automatically calculated when you enter the service amount.
                    </p>
                    {formData.serviceAmount && (
                      <div className="mt-2 text-sm text-blue-700">
                        <p>Service Amount: ₹{formData.serviceAmount}</p>
                        <p>GST (18%): ₹{formData.gstAmount}</p>
                        <p className="font-semibold">Total: ₹{formData.totalAmount}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Additional Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Additional Details</h3>

                  <div>
                    <Label htmlFor="otherDetails">Other details if any</Label>
                    <Textarea
                      id="otherDetails"
                      value={formData.otherDetails}
                      onChange={(e) => setFormData((prev) => ({ ...prev, otherDetails: e.target.value }))}
                      placeholder="Enter any additional details or remarks"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end space-x-4 pt-6 border-t">
                  <Button type="button" variant="outline">
                    Save Draft
                  </Button>
                  <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                    <FileText className="w-4 h-4 mr-2" />
                    Submit Annexure 4 Bill
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-4 text-center text-xs text-gray-500">
            <p>Subject to Gandhinagar Jurisdiction | This is a Computer Generated Annexure 4 Bill</p>
            <p>Signature of Head of CSC Department: _________________</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
