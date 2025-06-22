"use client"

import { useState } from "react"
import { FileText, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Shield, Award } from "lucide-react"

export default function EQDCForm() {
  const [currentStep, setCurrentStep] = useState(1)
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

    // Job Details
    items: [{ nomenclature: "", qty: "", makeModel: "", serialNo: "", serviceCharge: "" }],

    // Documents
    documents: {
      operatingManual: false,
      specification: false,
      previousReport: false,
      others: false,
      accessories: false,
      subcontract: false,
    },

    // Terms Acceptance
    termsAccepted: false,
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

  const addItem = () => {
    setFormData((prev) => ({
      ...prev,
      items: [...prev.items, { nomenclature: "", qty: "", makeModel: "", serialNo: "", serviceCharge: "" }],
    }))
  }

  const removeItem = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }))
  }

  const updateItem = (index: number, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      items: prev.items.map((item, i) => (i === index ? { ...item, [field]: value } : item)),
    }))
  }

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

  const forms = [
    {
      id: "pgvcl",
      title: "PGVCL Form",
      description: "Paschim Gujarat Vij Company Ltd. testing and certification form",
      icon: FileText,
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
    },
    {
      id: "dgvcl",
      title: "DGVCL Form",
      description: "Dakshin Gujarat Vij Co. Ltd. testing and certification form",
      icon: FileText,
      color: "bg-green-50 border-green-200 hover:bg-green-100",
    },
    {
      id: "bis",
      title: "BIS Form",
      description: "Bureau of Indian Standards certification and testing form",
      icon: Shield,
      color: "bg-orange-50 border-orange-200 hover:bg-orange-100",
    },
    {
      id: "annexure4",
      title: "Annexure 4 Bill",
      description: "Invoice declaration form for service charges and billing",
      icon: FileText,
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
    },
    {
      id: "jobcard",
      title: "Job Card",
      description: "Detailed job execution and sample submission form",
      icon: Award,
      color: "bg-red-50 border-red-200 hover:bg-red-100",
    },
    {
      id: "srf",
      title: "SRF Form",
      description: "Service Request Form for calibration, testing and certification",
      icon: CheckCircle,
      color: "bg-indigo-50 border-indigo-200 hover:bg-indigo-100",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="eqdc-secondary py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Electronics & Quality Development Centre
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              Under STQC Programme, Ministry of Electronics & Information Technology, Government of India
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Established by Government of Gujarat | ISO/IEC 17025:2017 Accredited | NABL Recognized
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Accredited Testing</h3>
                <p className="text-gray-600 text-sm">ISO/IEC 17025:2017 accredited calibration and testing services</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">NABL Recognized</h3>
                <p className="text-gray-600 text-sm">
                  National Accreditation Board for Testing and Calibration Laboratories
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Government Approved</h3>
                <p className="text-gray-600 text-sm">Under Ministry of Electronics & IT, Government of India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Official Forms & Documents</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access and fill official EQDC forms for testing, calibration, and certification services. All forms are
              confidential and subject to terms and conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {forms.map((form) => {
              const IconComponent = form.icon
              return (
                <Link key={form.id} href={`/forms/${form.id}`}>
                  <div className={`form-card bg-white rounded-lg shadow-md p-6 h-full cursor-pointer ${form.color}`}>
                    <div className="text-center">
                      <IconComponent className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{form.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{form.description}</p>

                      <div className="flex justify-center space-x-4 mt-6">
                        <div className="flex items-center text-sm text-blue-600">
                          <FileText className="w-4 h-4 mr-1" />
                          Fill Online
                        </div>
                        <div className="flex items-center text-sm text-green-600">
                          <FileText className="w-4 h-4 mr-1" />
                          Submit
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice</h3>
            <p className="text-yellow-700 text-sm">
              This website is for official use by EQDC's customers. All information and forms are confidential and
              subject to terms and conditions. Unauthorized use is prohibited. For EQDC's scope of BIS recognition,
              please refer to www.bis.org.in & www.eqdc.in
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
