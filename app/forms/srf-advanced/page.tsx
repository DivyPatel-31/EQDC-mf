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
import { ArrowLeft, FileText, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function SRFAdvancedForm() {
  const [formData, setFormData] = useState({
    // Customer Details
    organizationName: "",
    billingAddress: "",
    headOfOrganization: "",
    designation: "",
    telephone: "",
    mobile: "",
    email: "",
    contactPerson: "",
    contactDept: "",
    contactDesignation: "",
    reportAddress: "",

    // Service Details
    workOrderNo: "",
    workOrderDate: "",
    gstNo: "",
    tanNo: "",
    advancePayment: "",
    serviceType: "",
    piNo: "",
    chequeDetails: "",
    tdsDeducted: "",
    tdsAmount: "",

    // Items
    items: [],

    // Terms Acceptance
    termsAccepted: false,

    calculatedGST: "",
    calculatedTotal: "",
  })

  const serviceTypes = [
    { code: "C-ET", name: "Calibration - Electro-technical" },
    { code: "C-ETPE", name: "Calibration - Power/Energy" },
    { code: "C-ETIT", name: "Calibration - CT/PT" },
    { code: "C-TH", name: "Calibration - Thermal & R.H." },
    { code: "C-MD", name: "Calibration - Mech.- Dimension" },
    { code: "C-MP", name: "Calibration - Mech. -Pressure" },
    { code: "C-MM", name: "Calibration - Mech. - Mass" },
    { code: "C-FF", name: "Calibration - Fluid Flow" },
    { code: "C-MED", name: "Calibration - Medical Devices" },
    { code: "T-EMC", name: "EMI/EMC Testing" },
    { code: "T-EM", name: "Energy Meter Testing" },
    { code: "T-ENV", name: "Environmental Testing" },
    { code: "T-SPM", name: "Pumpset & Motor Testing" },
    { code: "T-CAB", name: "Cable Testing" },
    { code: "DA-EMC", name: "Development Assistance - EMI/EMC" },
    { code: "DA-ENV", name: "Development Assistance - Environmental" },
    { code: "DA-ELEC", name: "Development Assistance - Electrical" },
    { code: "TPI", name: "Third Party Inspection" },
    { code: "TRG", name: "Training" },
    { code: "CONSULT", name: "Consultancy" },
  ]

  const getAvailableItems = () => {
    const serviceCode = formData.serviceType

    if (serviceCode?.includes("C-ET")) {
      return [
        "Digital Multimeter",
        "Function Generator",
        "Oscilloscope",
        "Power Supply",
        "LCR Meter",
        "Insulation Tester",
        "Earth Tester",
        "Clamp Meter",
        "Frequency Counter",
        "Signal Generator",
      ]
    } else if (serviceCode?.includes("C-ETPE")) {
      return [
        "Energy Meter Single Phase",
        "Energy Meter Three Phase",
        "Power Analyzer",
        "Watt Meter",
        "VAR Meter",
        "Power Factor Meter",
        "Frequency Meter",
        "Voltage Transformer",
        "Current Transformer",
        "Phantom Load",
      ]
    } else if (serviceCode?.includes("T-EMC")) {
      return [
        "EMI Test Receiver",
        "Spectrum Analyzer",
        "Signal Generator",
        "Antenna",
        "LISN",
        "ESD Simulator",
        "Surge Generator",
        "Conducted Immunity Test Set",
        "Radiated Immunity Test Set",
        "Harmonic Analyzer",
      ]
    } else if (serviceCode?.includes("T-ENV")) {
      return [
        "Temperature Chamber",
        "Humidity Chamber",
        "Vibration Test System",
        "Salt Spray Chamber",
        "Dust Test Chamber",
        "Rain Test Chamber",
        "Thermal Shock Chamber",
        "UV Test Chamber",
        "Ozone Test Chamber",
        "Altitude Test Chamber",
      ]
    } else if (serviceCode?.includes("C-TH")) {
      return [
        "Digital Thermometer",
        "RTD Sensor",
        "Thermocouple",
        "Temperature Calibrator",
        "Humidity Meter",
        "Data Logger",
        "Infrared Thermometer",
        "Temperature Controller",
        "Humidity Generator",
        "Dry Block Calibrator",
      ]
    } else {
      return [
        "General Equipment Item 1",
        "General Equipment Item 2",
        "General Equipment Item 3",
        "General Equipment Item 4",
        "General Equipment Item 5",
        "Custom Equipment",
        "Specialized Instrument",
        "Testing Device",
        "Measurement Tool",
        "Calibration Standard",
      ]
    }
  }

  const calculateAdvancePayment = (amount: string) => {
    const serviceAmount = Number.parseFloat(amount) || 0
    const gstAmount = serviceAmount * 0.18
    const totalAmount = serviceAmount + gstAmount

    setFormData((prev) => ({
      ...prev,
      advancePayment: amount,
      calculatedGST: gstAmount.toFixed(2),
      calculatedTotal: totalAmount.toFixed(2),
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
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions to proceed.")
      return
    }
    console.log("SRF Advanced Form Data:", formData)
    alert("SRF Form submitted successfully!")
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
            <CardHeader className="bg-indigo-600 text-white">
              <CardTitle className="text-2xl flex items-center">
                <CheckCircle className="w-6 h-6 mr-3" />
                Service Request Form (SRF) - Advanced
              </CardTitle>
              <p className="text-indigo-100 text-sm">ELECTRONICS AND QUALITY DEVELOPMENT CENTRE</p>
              <p className="text-indigo-100 text-sm">
                (Under STQC Programme, Ministry of Electronics & Information Technology, Govt.of India)
              </p>
            </CardHeader>

            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Customer Organization Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                    Customer Organization Details (Fill in CAPITAL LETTERS)
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="organizationName">Name & Billing Address of Organization *</Label>
                      <Textarea
                        id="organizationName"
                        value={formData.organizationName}
                        onChange={(e) => setFormData((prev) => ({ ...prev, organizationName: e.target.value }))}
                        placeholder="Enter organization name and complete billing address in CAPITAL LETTERS"
                        required
                        className="uppercase"
                      />
                    </div>

                    <div>
                      <Label htmlFor="headOfOrganization">Head of Organization *</Label>
                      <Input
                        id="headOfOrganization"
                        value={formData.headOfOrganization}
                        onChange={(e) => setFormData((prev) => ({ ...prev, headOfOrganization: e.target.value }))}
                        placeholder="MR./MS. NAME"
                        required
                        className="uppercase"
                      />
                    </div>

                    <div>
                      <Label htmlFor="designation">Designation *</Label>
                      <Input
                        id="designation"
                        value={formData.designation}
                        onChange={(e) => setFormData((prev) => ({ ...prev, designation: e.target.value }))}
                        placeholder="DESIGNATION"
                        required
                        className="uppercase"
                      />
                    </div>

                    <div>
                      <Label htmlFor="telephone">Telephone</Label>
                      <Input
                        id="telephone"
                        value={formData.telephone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, telephone: e.target.value }))}
                        placeholder="Enter telephone number"
                      />
                    </div>

                    <div>
                      <Label htmlFor="mobile">Mobile *</Label>
                      <Input
                        id="mobile"
                        value={formData.mobile}
                        onChange={(e) => setFormData((prev) => ({ ...prev, mobile: e.target.value }))}
                        placeholder="Enter mobile number"
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Contact Person Details</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="contactPerson">Contact Person</Label>
                        <Input
                          id="contactPerson"
                          value={formData.contactPerson}
                          onChange={(e) => setFormData((prev) => ({ ...prev, contactPerson: e.target.value }))}
                          placeholder="MR./MRS. NAME"
                          className="uppercase"
                        />
                      </div>

                      <div>
                        <Label htmlFor="contactDept">Department</Label>
                        <Input
                          id="contactDept"
                          value={formData.contactDept}
                          onChange={(e) => setFormData((prev) => ({ ...prev, contactDept: e.target.value }))}
                          placeholder="DEPARTMENT"
                          className="uppercase"
                        />
                      </div>

                      <div>
                        <Label htmlFor="contactDesignation">Designation</Label>
                        <Input
                          id="contactDesignation"
                          value={formData.contactDesignation}
                          onChange={(e) => setFormData((prev) => ({ ...prev, contactDesignation: e.target.value }))}
                          placeholder="DESIGNATION"
                          className="uppercase"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <Label htmlFor="reportAddress">Report Delivery Address (if different from billing address)</Label>
                      <Textarea
                        id="reportAddress"
                        value={formData.reportAddress}
                        onChange={(e) => setFormData((prev) => ({ ...prev, reportAddress: e.target.value }))}
                        placeholder="Complete address with Pin Code"
                        className="uppercase"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Request Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Service Request Details</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="workOrderNo">Work Order/Reference No.</Label>
                      <Input
                        id="workOrderNo"
                        value={formData.workOrderNo}
                        onChange={(e) => setFormData((prev) => ({ ...prev, workOrderNo: e.target.value }))}
                        placeholder="Enter W.O./Ref. No."
                      />
                    </div>

                    <div>
                      <Label htmlFor="workOrderDate">Work Order Date</Label>
                      <Input
                        id="workOrderDate"
                        type="date"
                        value={formData.workOrderDate}
                        onChange={(e) => setFormData((prev) => ({ ...prev, workOrderDate: e.target.value }))}
                      />
                    </div>

                    <div>
                      <Label htmlFor="serviceType">Service Type *</Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, serviceType: value, items: [] }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((service) => (
                            <SelectItem key={service.code} value={service.code}>
                              {service.code} - {service.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="advancePayment">Advance Payment (Rs.)</Label>
                      <Input
                        id="advancePayment"
                        value={formData.advancePayment}
                        onChange={(e) => calculateAdvancePayment(e.target.value)}
                        placeholder="Enter advance payment amount"
                        type="number"
                        step="0.01"
                      />
                      {formData.advancePayment && (
                        <div className="mt-2 text-sm text-gray-600 bg-indigo-50 p-2 rounded">
                          <p>Service Amount: ₹{formData.advancePayment}</p>
                          <p>GST @ 18%: ₹{formData.calculatedGST}</p>
                          <p className="font-semibold text-indigo-700">Total Amount: ₹{formData.calculatedTotal}</p>
                        </div>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="gstNo">Your GST No.</Label>
                      <Input
                        id="gstNo"
                        value={formData.gstNo}
                        onChange={(e) => setFormData((prev) => ({ ...prev, gstNo: e.target.value }))}
                        placeholder="Enter GST number"
                      />
                    </div>

                    <div>
                      <Label htmlFor="tanNo">TAN No.</Label>
                      <Input
                        id="tanNo"
                        value={formData.tanNo}
                        onChange={(e) => setFormData((prev) => ({ ...prev, tanNo: e.target.value }))}
                        placeholder="Enter TAN number"
                      />
                    </div>
                  </div>
                </div>

                {/* Items Selection with Drag & Drop */}
                {formData.serviceType && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Equipment/Items Selection</h3>

                    {/* Available Items */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-700 mb-3">
                        Available Items for {formData.serviceType} (Drag to select)
                      </h4>
                      <div className="grid md:grid-cols-3 gap-2">
                        {getAvailableItems().map((item, index) => (
                          <div
                            key={index}
                            draggable
                            onDragStart={(e) => e.dataTransfer.setData("text/plain", item)}
                            className="bg-white p-2 rounded border cursor-move hover:bg-indigo-50 hover:border-indigo-300 transition-colors text-sm"
                          >
                            🔧 {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Drop Zone */}
                    <div
                      className="border-2 border-dashed border-gray-300 rounded-lg p-6 min-h-[200px] bg-indigo-50"
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
                                nomenclature: item,
                                qty: "1",
                                makeModel: "",
                                serialNo: "",
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
                        <p className="text-sm">Drag items from above to add them to your service request</p>
                      </div>

                      {/* Selected Items */}
                      {formData.items.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-700">Selected Equipment:</h4>
                          {formData.items.map((item, index) => (
                            <div key={index} className="bg-white p-3 rounded border">
                              <div className="grid grid-cols-1 md:grid-cols-5 gap-2 items-center">
                                <div className="font-medium text-sm">{item.nomenclature}</div>
                                <Input
                                  value={item.qty}
                                  onChange={(e) => updateItem(index, "qty", e.target.value)}
                                  placeholder="Qty"
                                  className="text-sm"
                                />
                                <Input
                                  value={item.makeModel}
                                  onChange={(e) => updateItem(index, "makeModel", e.target.value)}
                                  placeholder="Make/Model"
                                  className="text-sm"
                                />
                                <Input
                                  value={item.serialNo}
                                  onChange={(e) => updateItem(index, "serialNo", e.target.value)}
                                  placeholder="Serial No."
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
                )}

                {/* Terms & Conditions */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Terms & Conditions</h3>

                  <div className="bg-gray-50 p-4 rounded-lg max-h-64 overflow-y-auto text-sm">
                    <div className="space-y-2">
                      <p>
                        <strong>1.</strong> 100% advance payment against Performa Invoice/work order, shall be made in
                        favor of "Director, EQDC" through Cheque/Demand Draft OR RTGS/NEFT payable at Gandhinagar
                        (Gujarat). Cash payment will not be accepted.
                      </p>

                      <p>
                        <strong>2.</strong> If TDS is deducted at source for calibration/testing charges, please forward
                        TDS certificate along with the payment.
                      </p>

                      <p>
                        <strong>3.</strong> 10% delay charges shall be collected (if payment is made within one year and
                        after 30 days) & 18% payment delay charges shall be collected (if payment is made after one
                        year).
                      </p>

                      <p>
                        <strong>4.</strong> The Sample submitted for testing shall be clearly identified by its
                        nomenclature, Make, Model No., Serial No. and Technical Specifications.
                      </p>

                      <p>
                        <strong>5.</strong> After completion of test/calibration and issue of certificate/report, the
                        customer shall collect back the calibrated/tested samples within 3 months.
                      </p>

                      <p>
                        <strong>6.</strong> The Test/calibration Certificate/Report shall not be used for any legal
                        purpose & shall not be produced in court of law.
                      </p>

                      <p>
                        <strong>7.</strong> NABL symbol in the calibration/test certificate/report will be provided as
                        per our NABL accredited scope and validity only.
                      </p>

                      <p>
                        <strong>8.</strong> Subject to Gandhinagar Jurisdiction only. In case of any dispute, the
                        decision of the Director, EQDC shall be final.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="termsAccepted"
                      checked={formData.termsAccepted}
                      onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, termsAccepted: !!checked }))}
                    />
                    <Label htmlFor="termsAccepted" className="text-sm">
                      We accept the Terms & Conditions given above *
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end space-x-4 pt-6 border-t">
                  <Button type="button" variant="outline">
                    Save Draft
                  </Button>
                  <Button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700"
                    disabled={!formData.termsAccepted}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Submit SRF Form
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-4 text-center text-xs text-gray-500">
            <p>Form No.-B/1, Issue No: 04, Rev.04 Dated 10.09.2020</p>
            <p>Website: www.eqdc.in | For NABL Accreditation Status: www.nabl-india.org</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
