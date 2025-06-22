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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, FileText, Award } from "lucide-react"
import Link from "next/link"

export default function JobCardForm() {
  const [formData, setFormData] = useState({
    srfNo: "",
    srfDate: "",
    sampleReceiptDate: "",
    serviceType: "",
    sampleProjectName: "",
    testTypes: "",
    periodDuration: "",
    customerRequirement: "",
    calibrationPeriodicity: "",
    periodicityRequired: "",
    items: [{ srNo: 1, nomenclature: "", qty: "", makeModel: "", serialId: "", eqdcJobNo: "", serviceCharge: "" }],
    documents: {
      operatingManual: false,
      specification: false,
      previousReport: "",
      others: "",
      accessories: false,
      subcontract: false,
    },
    officeUse: {
      jobAccepted: "",
      itemsReceived: "",
      serviceCharges: "",
      gstAmount: "",
      totalAmount: "",
      amendmentCommunicated: "",
      contractReviewed: "",
      amendmentReasons: "",
      contractDeviation: "",
      customerAcceptance: "",
      completionDate: "",
      labCapacity: "",
      calibrationMethod: "",
      contractAmended: "",
      conformityStatement: "",
    },
  })

  const addItem = () => {
    setFormData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          srNo: prev.items.length + 1,
          nomenclature: "",
          qty: "",
          makeModel: "",
          serialId: "",
          eqdcJobNo: "",
          serviceCharge: "",
        },
      ],
    }))
  }

  const updateItem = (index: number, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      items: prev.items.map((item, i) => (i === index ? { ...item, [field]: value } : item)),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Job Card Form Data:", formData)
    alert("Job Card submitted successfully!")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Forms
          </Link>

          <Card>
            <CardHeader className="bg-red-600 text-white">
              <CardTitle className="text-2xl flex items-center">
                <Award className="w-6 h-6 mr-3" />
                Job Card - EQDC
              </CardTitle>
              <p className="text-red-100 text-sm">ELECTRONICS AND QUALITY DEVELOPMENT CENTRE</p>
              <p className="text-red-100 text-sm">
                (Under STQC Programme, Ministry of Electronics & Information Technology, Govt.of India)
              </p>
            </CardHeader>

            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Header Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Job Card Information</h3>

                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="srfNo">SRF No. *</Label>
                      <Input
                        id="srfNo"
                        value={formData.srfNo}
                        onChange={(e) => setFormData((prev) => ({ ...prev, srfNo: e.target.value }))}
                        placeholder="Enter SRF number"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="srfDate">SRF Date *</Label>
                      <Input
                        id="srfDate"
                        type="date"
                        value={formData.srfDate}
                        onChange={(e) => setFormData((prev) => ({ ...prev, srfDate: e.target.value }))}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="sampleReceiptDate">Sample Receipt Date</Label>
                      <Input
                        id="sampleReceiptDate"
                        type="date"
                        value={formData.sampleReceiptDate}
                        onChange={(e) => setFormData((prev) => ({ ...prev, sampleReceiptDate: e.target.value }))}
                      />
                    </div>

                    <div>
                      <Label htmlFor="serviceType">Service Type</Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, serviceType: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="CALIBRATION">CALIBRATION</SelectItem>
                          <SelectItem value="TESTING">TESTING</SelectItem>
                          <SelectItem value="TPI">TPI</SelectItem>
                          <SelectItem value="DEV.ASSISTANCE">DEV.ASSISTANCE</SelectItem>
                          <SelectItem value="TRAINING">TRAINING</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Development Assistance Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                    Development Assistance (D.A.) Service Details
                  </h3>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="sampleProjectName">Sample/Project Name</Label>
                      <Input
                        id="sampleProjectName"
                        value={formData.sampleProjectName}
                        onChange={(e) => setFormData((prev) => ({ ...prev, sampleProjectName: e.target.value }))}
                        placeholder="Enter sample/project name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="testTypes">Types of Test under D.A.</Label>
                      <Select
                        value={formData.testTypes}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, testTypes: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select test type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="EMC">EMC</SelectItem>
                          <SelectItem value="Environmental">Environmental</SelectItem>
                          <SelectItem value="Electrical">Electrical</SelectItem>
                          <SelectItem value="Others">Others</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="periodDuration">Period/Duration</Label>
                      <Input
                        id="periodDuration"
                        value={formData.periodDuration}
                        onChange={(e) => setFormData((prev) => ({ ...prev, periodDuration: e.target.value }))}
                        placeholder="Enter period/duration"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="customerRequirement">
                      Customer Requirement/Specification/Method to be followed
                    </Label>
                    <Textarea
                      id="customerRequirement"
                      value={formData.customerRequirement}
                      onChange={(e) => setFormData((prev) => ({ ...prev, customerRequirement: e.target.value }))}
                      placeholder="Enter customer requirements and specifications"
                      rows={3}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label>Periodicity of Calibration Required</Label>
                      <div className="flex items-center space-x-4 mt-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="periodicityRequired"
                            value="YES"
                            checked={formData.periodicityRequired === "YES"}
                            onChange={(e) => setFormData((prev) => ({ ...prev, periodicityRequired: e.target.value }))}
                            className="mr-2"
                          />
                          YES
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="periodicityRequired"
                            value="NO"
                            checked={formData.periodicityRequired === "NO"}
                            onChange={(e) => setFormData((prev) => ({ ...prev, periodicityRequired: e.target.value }))}
                            className="mr-2"
                          />
                          NO
                        </label>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="calibrationPeriodicity">If Yes, mention the Periodicity</Label>
                      <Input
                        id="calibrationPeriodicity"
                        value={formData.calibrationPeriodicity}
                        onChange={(e) => setFormData((prev) => ({ ...prev, calibrationPeriodicity: e.target.value }))}
                        placeholder="Enter periodicity"
                        disabled={formData.periodicityRequired !== "YES"}
                      />
                    </div>
                  </div>
                </div>

                {/* Items Selection with Drag & Drop */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Items Submitted/Job to be Executed</h3>

                  {/* Available Items */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-3">Available Equipment Items (Drag to select)</h4>
                    <div className="grid md:grid-cols-3 gap-2">
                      {[
                        "Digital Multimeter",
                        "Function Generator",
                        "Oscilloscope",
                        "Power Supply",
                        "Energy Meter",
                        "Temperature Sensor",
                        "Pressure Gauge",
                        "Flow Meter",
                        "Vibration Analyzer",
                        "EMC Test Equipment",
                        "Environmental Chamber",
                        "Calibration Standard",
                        "Measurement Device",
                        "Testing Instrument",
                        "Specialized Equipment",
                      ].map((item, index) => (
                        <div
                          key={index}
                          draggable
                          onDragStart={(e) => e.dataTransfer.setData("text/plain", item)}
                          className="bg-white p-2 rounded border cursor-move hover:bg-red-50 hover:border-red-300 transition-colors text-sm"
                        >
                          🔧 {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Drop Zone */}
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 min-h-[200px] bg-red-50"
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
                              makeModel: "",
                              serialId: "",
                              eqdcJobNo: "",
                              serviceCharge: "",
                            },
                          ],
                        }))
                      }
                    }}
                  >
                    <div className="text-center text-gray-500 mb-4">
                      <div className="text-4xl mb-2">📦</div>
                      <p className="font-semibold">Drop Equipment Here</p>
                      <p className="text-sm">Drag items from above to add them to your job card</p>
                    </div>

                    {/* Selected Items */}
                    {formData.items.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-700">Selected Equipment:</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300 text-sm">
                            <thead>
                              <tr className="bg-gray-50">
                                <th className="border border-gray-300 p-2 text-left">Sr. No</th>
                                <th className="border border-gray-300 p-2 text-left">Nomenclature</th>
                                <th className="border border-gray-300 p-2 text-left">Qty</th>
                                <th className="border border-gray-300 p-2 text-left">Make/Model/Type</th>
                                <th className="border border-gray-300 p-2 text-left">Sr.No./ID No.</th>
                                <th className="border border-gray-300 p-2 text-left">EQDC Job No.</th>
                                <th className="border border-gray-300 p-2 text-left">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {formData.items.map((item, index) => (
                                <tr key={index}>
                                  <td className="border border-gray-300 p-1">{item.srNo}</td>
                                  <td className="border border-gray-300 p-1 font-medium">{item.nomenclature}</td>
                                  <td className="border border-gray-300 p-1">
                                    <Input
                                      value={item.qty}
                                      onChange={(e) => updateItem(index, "qty", e.target.value)}
                                      placeholder="Qty"
                                      className="border-0 text-xs"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-1">
                                    <Input
                                      value={item.makeModel}
                                      onChange={(e) => updateItem(index, "makeModel", e.target.value)}
                                      placeholder="Make/Model"
                                      className="border-0 text-xs"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-1">
                                    <Input
                                      value={item.serialId}
                                      onChange={(e) => updateItem(index, "serialId", e.target.value)}
                                      placeholder="Serial No."
                                      className="border-0 text-xs"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-1">
                                    <Input
                                      value={item.eqdcJobNo}
                                      onChange={(e) => updateItem(index, "eqdcJobNo", e.target.value)}
                                      placeholder="Job No."
                                      className="border-0 text-xs"
                                    />
                                  </td>
                                  <td className="border border-gray-300 p-1">
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
                                      className="text-xs"
                                    >
                                      Remove
                                    </Button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Documents Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                    Documents Enclosed/Details Provided
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="operatingManual"
                          checked={formData.documents.operatingManual}
                          onCheckedChange={(checked) =>
                            setFormData((prev) => ({
                              ...prev,
                              documents: { ...prev.documents, operatingManual: !!checked },
                            }))
                          }
                        />
                        <Label htmlFor="operatingManual" className="text-sm">
                          Operating Manual of Equipment
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="specification"
                          checked={formData.documents.specification}
                          onCheckedChange={(checked) =>
                            setFormData((prev) => ({
                              ...prev,
                              documents: { ...prev.documents, specification: !!checked },
                            }))
                          }
                        />
                        <Label htmlFor="specification" className="text-sm">
                          Specification/Declaration/Acceptance Criteria
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="accessories"
                          checked={formData.documents.accessories}
                          onCheckedChange={(checked) =>
                            setFormData((prev) => ({
                              ...prev,
                              documents: { ...prev.documents, accessories: !!checked },
                            }))
                          }
                        />
                        <Label htmlFor="accessories" className="text-sm">
                          List of Accessories Submitted
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="subcontract"
                          checked={formData.documents.subcontract}
                          onCheckedChange={(checked) =>
                            setFormData((prev) => ({
                              ...prev,
                              documents: { ...prev.documents, subcontract: !!checked },
                            }))
                          }
                        />
                        <Label htmlFor="subcontract" className="text-sm">
                          Partial/Full Subcontract of Job
                        </Label>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="previousReport">Copy/Ref. No. of Previous EQDC Report</Label>
                        <Input
                          id="previousReport"
                          value={formData.documents.previousReport}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              documents: { ...prev.documents, previousReport: e.target.value },
                            }))
                          }
                          placeholder="Enter previous report reference"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="others">Others</Label>
                        <Input
                          id="others"
                          value={formData.documents.others}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              documents: { ...prev.documents, others: e.target.value },
                            }))
                          }
                          placeholder="Specify other documents"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end space-x-4 pt-6 border-t">
                  <Button type="button" variant="outline">
                    Save Draft
                  </Button>
                  <Button type="submit" className="bg-red-600 hover:bg-red-700">
                    <FileText className="w-4 h-4 mr-2" />
                    Submit Job Card
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-4 text-center text-xs text-gray-500">
            <p>Form No.-B/2, Issue No: 04, Rev.05 Dated 01.01.2024</p>
            <p>CSC/CUSTOMER/LABORATORY COPY</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
