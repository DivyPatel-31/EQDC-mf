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
import { ArrowLeft, FileText, Building2 } from "lucide-react"
import Link from "next/link"

export default function PGVCLForm() {
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
    serviceAmount: "",
    gstAmount: "",
    totalAmount: "",
    items: [{ srNo: 1, nomenclature: "", qty: "", serviceCharge: "" }],
  })

  const addItem = () => {
    setFormData((prev) => ({
      ...prev,
      items: [...prev.items, { srNo: prev.items.length + 1, nomenclature: "", qty: "", serviceCharge: "" }],
    }))
  }

  const updateItem = (index: number, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      items: prev.items.map((item, i) => (i === index ? { ...item, [field]: value } : item)),
    }))
  }

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
    console.log("PGVCL Form Data:", formData)
    alert("Form submitted successfully!")
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
            <CardHeader className="eqdc-primary text-white">
              <CardTitle className="text-2xl flex items-center">
                <Building2 className="w-6 h-6 mr-3" />
                PGVCL Form - Paschim Gujarat Vij Company Ltd.
              </CardTitle>
              <p className="text-blue-100 text-sm">
                Corporate Office "Paschim Gujarat vijsevaSadan", Off. Nana Mava Main Road, Laxminagar, Rajkot-360 004
              </p>
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

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800 mb-2">
                      <strong>Service Code:</strong> T-CAB (Cable Testing)
                    </p>
                    <p className="text-sm text-blue-800">
                      <strong>Head of Service:</strong> Cable Testing Services
                    </p>
                  </div>
                </div>

                {/* Items Selection with Drag & Drop */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Items for Testing</h3>

                  {/* Available Items */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-3">Available PGVCL Items (Drag to select)</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {[
                        "55 Sqmm AAA Conductor",
                        "3.5C x 70 Lt PVC Cable",
                        "4C x 4 mm2 Lt PVC Cable",
                        "3C x 35 mm2 + 16mm2+ 25mm2 Lt AB Cable",
                        "3C x 50 mm2 + 1c x 25 mm2+ 35 mm2 Lt AB Cable",
                        "11 KV XLPE Cable",
                        "LT ABC Cable 3C x 95 mm2",
                        "HT Cable 33 KV",
                        "Overhead Conductor ACSR",
                        "Underground Cable LT",
                      ].map((item, index) => (
                        <div
                          key={index}
                          draggable
                          onDragStart={(e) => e.dataTransfer.setData("text/plain", item)}
                          className="bg-white p-2 rounded border cursor-move hover:bg-blue-50 hover:border-blue-300 transition-colors text-sm"
                        >
                          📋 {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Drop Zone */}
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 min-h-[200px] bg-blue-50"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault()
                      const item = e.dataTransfer.getData("text/plain")
                      if (item && !formData.items.some((existingItem) => existingItem.nomenclature === item)) {
                        setFormData((prev) => ({
                          ...prev,
                          items: [
                            ...prev.items,
                            {
                              srNo: prev.items.length + 1,
                              nomenclature: item,
                              qty: "1",
                              serviceCharge: "",
                            },
                          ],
                        }))
                      }
                    }}
                  >
                    <div className="text-center text-gray-500 mb-4">
                      <div className="text-4xl mb-2">📦</div>
                      <p className="font-semibold">Drop Items Here</p>
                      <p className="text-sm">Drag items from above to add them to your request</p>
                    </div>

                    {/* Selected Items */}
                    {formData.items.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-700">Selected Items:</h4>
                        {formData.items.map((item, index) => (
                          <div key={index} className="bg-white p-3 rounded border flex items-center justify-between">
                            <div className="flex-1 grid grid-cols-4 gap-2 items-center">
                              <div className="font-medium text-sm">{item.nomenclature}</div>
                              <Input
                                value={item.qty}
                                onChange={(e) => updateItem(index, "qty", e.target.value)}
                                placeholder="Qty"
                                className="text-sm"
                              />
                              <Input
                                value={item.serviceCharge}
                                onChange={(e) => updateItem(index, "serviceCharge", e.target.value)}
                                placeholder="Service Charge"
                                className="text-sm"
                              />
                              <Button
                                type="button"
                                onClick={() =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    items: prev.items.filter((_, i) => i !== index),
                                  }))
                                }
                                variant="destructive"
                                size="sm"
                              >
                                Remove
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Billing Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Billing Details</h3>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="serviceAmount">Amount of Service (Rs.)</Label>
                      <Input
                        id="serviceAmount"
                        value={formData.serviceAmount}
                        onChange={(e) => calculateBilling(e.target.value)}
                        placeholder="0"
                        type="number"
                        step="0.01"
                      />
                    </div>

                    <div>
                      <Label htmlFor="gstAmount">GST @ 18% (Rs.)</Label>
                      <Input
                        id="gstAmount"
                        value={formData.gstAmount}
                        placeholder="0"
                        readOnly
                        className="bg-gray-50"
                      />
                    </div>

                    <div>
                      <Label htmlFor="totalAmount">Total Bill Amount (Rs.)</Label>
                      <Input
                        id="totalAmount"
                        value={formData.totalAmount}
                        placeholder="0"
                        readOnly
                        className="bg-gray-50 font-semibold text-green-600"
                      />
                    </div>
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

                {/* Submit Button */}
                <div className="flex justify-end space-x-4 pt-6 border-t">
                  <Button type="button" variant="outline">
                    Save Draft
                  </Button>
                  <Button type="submit" className="eqdc-primary hover:bg-blue-800">
                    <FileText className="w-4 h-4 mr-2" />
                    Submit PGVCL Form
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-4 text-center text-xs text-gray-500">
            <p>Subject to Gandhinagar Jurisdiction | This is a Computer Generated Annexure 4 Bill</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
