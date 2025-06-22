"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Shield,
  Award,
  Building2,
  Calculator,
  CheckCircle,
  Search,
  Filter,
  Download,
  Upload,
} from "lucide-react"
import Link from "next/link"

export default function FormsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const forms = [
    {
      id: "srf",
      title: "Service Request Form (SRF)",
      description:
        "Primary form for requesting calibration, testing, TPI, development assistance and training services",
      category: "primary",
      icon: CheckCircle,
      color: "bg-indigo-50 border-indigo-200 hover:bg-indigo-100",
      headerColor: "bg-indigo-600",
      organization: "EQDC Gandhinagar & Vadodara",
      serviceCode: "All Service Codes",
      features: ["Auto GST Calculation", "Drag & Drop Items", "Terms & Conditions"],
      status: "active",
      priority: "high",
    },
    {
      id: "srf-advanced",
      title: "SRF Form - Advanced",
      description: "Advanced Service Request Form with dynamic item selection based on service type",
      category: "primary",
      icon: CheckCircle,
      color: "bg-indigo-50 border-indigo-200 hover:bg-indigo-100",
      headerColor: "bg-indigo-600",
      organization: "EQDC Gandhinagar & Vadodara",
      serviceCode: "All Service Codes",
      features: ["Service-based Items", "Auto GST Calculation", "Advanced Selection"],
      status: "active",
      priority: "high",
    },
    {
      id: "jobcard",
      title: "Job Card",
      description: "Detailed form for job execution, sample submission and testing requirements",
      category: "primary",
      icon: Award,
      color: "bg-red-50 border-red-200 hover:bg-red-100",
      headerColor: "bg-red-600",
      organization: "EQDC Gandhinagar & Vadodara",
      serviceCode: "All Service Codes",
      features: ["Equipment Selection", "Document Tracking", "Job Management"],
      status: "active",
      priority: "high",
    },
    {
      id: "annexure4",
      title: "Annexure 4 Bill",
      description: "Declaration to raise invoice for services rendered with automatic billing calculation",
      category: "billing",
      icon: Calculator,
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
      headerColor: "bg-purple-600",
      organization: "EQDC Gandhinagar & Vadodara",
      serviceCode: "Various",
      features: ["Auto GST Calculation", "Invoice Generation", "Billing Details"],
      status: "active",
      priority: "medium",
    },
    {
      id: "pgvcl",
      title: "PGVCL Form",
      description: "Paschim Gujarat Vij Company Ltd. testing and certification form for electrical equipment",
      category: "testing",
      icon: Building2,
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      headerColor: "bg-blue-600",
      organization: "Paschim Gujarat Vij Company Ltd.",
      serviceCode: "T-CAB",
      features: ["Cable Testing", "Auto GST Calculation", "Drag & Drop Items"],
      status: "active",
      priority: "medium",
    },
    {
      id: "dgvcl",
      title: "DGVCL Form",
      description: "Dakshin Gujarat Vij Co. Ltd. testing and certification form for electrical equipment",
      category: "testing",
      icon: Building2,
      color: "bg-green-50 border-green-200 hover:bg-green-100",
      headerColor: "bg-green-600",
      organization: "Dakshin Gujarat Vij Co. Ltd.",
      serviceCode: "T-CAB",
      features: ["Cable Testing", "Auto GST Calculation", "Drag & Drop Items"],
      status: "active",
      priority: "medium",
    },
    {
      id: "bis",
      title: "BIS Form",
      description: "Bureau of Indian Standards certification and testing form for submersible pump sets",
      category: "certification",
      icon: Shield,
      color: "bg-orange-50 border-orange-200 hover:bg-orange-100",
      headerColor: "bg-orange-600",
      organization: "Bureau of Indian Standards",
      serviceCode: "T-CAB",
      features: ["Pump Testing", "Auto GST Calculation", "Standards Compliance"],
      status: "active",
      priority: "medium",
    },
  ]

  const categories = [
    { id: "all", name: "All Forms", count: forms.length },
    { id: "primary", name: "Primary Forms", count: forms.filter((f) => f.category === "primary").length },
    { id: "testing", name: "Testing Forms", count: forms.filter((f) => f.category === "testing").length },
    { id: "certification", name: "Certification", count: forms.filter((f) => f.category === "certification").length },
    { id: "billing", name: "Billing Forms", count: forms.filter((f) => f.category === "billing").length },
  ]

  const filteredForms = forms.filter((form) => {
    const matchesSearch =
      form.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      form.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      form.organization.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || form.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-100 text-red-800 border-red-200">High Priority</Badge>
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Medium Priority</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800 border-gray-200">Standard</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="eqdc-secondary py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Official Forms & Documents</h1>
            <p className="text-xl text-gray-700 mb-4">
              Access and fill official EQDC forms for testing, calibration, and certification services
            </p>
            <p className="text-lg text-gray-600 mb-8">
              All forms feature automatic GST calculation, drag & drop functionality, and real-time validation
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Auto GST Calculation</h3>
                <p className="text-gray-600 text-sm">
                  Automatic 18% GST calculation with real-time total amount updates
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Drag & Drop Interface</h3>
                <p className="text-gray-600 text-sm">Easy item selection with intuitive drag and drop functionality</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Secure & Compliant</h3>
                <p className="text-gray-600 text-sm">
                  All forms are secure, confidential, and comply with government standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search forms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">Filter by category:</span>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="text-sm"
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-600 mb-4">
              Showing {filteredForms.length} of {forms.length} forms
            </div>
          </div>
        </div>
      </section>

      {/* Forms Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredForms.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No forms found</h3>
                <p className="text-gray-500">Try adjusting your search terms or filters</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredForms.map((form) => {
                  const IconComponent = form.icon
                  return (
                    <Card
                      key={form.id}
                      className={`h-full cursor-pointer transition-all duration-200 ${form.color} hover:shadow-lg`}
                    >
                      <CardHeader className={`${form.headerColor} text-white`}>
                        <div className="flex items-center justify-between">
                          <IconComponent className="w-8 h-8" />
                          {getPriorityBadge(form.priority)}
                        </div>
                        <CardTitle className="text-xl">{form.title}</CardTitle>
                        <CardDescription className="text-gray-100 text-sm">{form.organization}</CardDescription>
                      </CardHeader>

                      <CardContent className="p-6 flex-1 flex flex-col">
                        <p className="text-gray-600 text-sm mb-4 flex-1">{form.description}</p>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Service Code:</span>
                            <Badge variant="outline" className="text-xs">
                              {form.serviceCode}
                            </Badge>
                          </div>

                          <div className="space-y-2">
                            <span className="text-gray-500 text-sm">Features:</span>
                            <div className="flex flex-wrap gap-1">
                              {form.features.map((feature, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Link href={`/forms/${form.id}`} className="block">
                            <Button className="w-full" size="sm">
                              <FileText className="w-4 h-4 mr-2" />
                              Fill Form Online
                            </Button>
                          </Link>

                          <div className="grid grid-cols-2 gap-2">
                            <Button variant="outline" size="sm" className="text-xs">
                              <Download className="w-3 h-3 mr-1" />
                              Download PDF
                            </Button>
                            <Button variant="outline" size="sm" className="text-xs">
                              <Upload className="w-3 h-3 mr-1" />
                              Upload Form
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Start with SRF</h3>
                <p className="text-gray-600 text-sm mb-4">Begin with our primary Service Request Form</p>
                <Link href="/forms/srf">
                  <Button className="w-full">Start SRF Form</Button>
                </Link>
              </Card>

              <Card className="p-6">
                <Calculator className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Generate Invoice</h3>
                <p className="text-gray-600 text-sm mb-4">Create billing documents with Annexure 4</p>
                <Link href="/forms/annexure4">
                  <Button className="w-full">Create Invoice</Button>
                </Link>
              </Card>

              <Card className="p-6">
                <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Job Management</h3>
                <p className="text-gray-600 text-sm mb-4">Manage job execution with Job Card</p>
                <Link href="/forms/jobcard">
                  <Button className="w-full">Create Job Card</Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Instructions</h3>
            <div className="grid md:grid-cols-2 gap-4 text-yellow-700 text-sm">
              <ul className="space-y-1">
                <li>• Fill all forms in CAPITAL LETTERS</li>
                <li>• 100% advance payment required before processing</li>
                <li>• Quote SRF number in all communications</li>
                <li>• Subject to Gandhinagar jurisdiction</li>
              </ul>
              <ul className="space-y-1">
                <li>• All forms are confidential and for official use only</li>
                <li>• GST @ 18% is automatically calculated</li>
                <li>• Save drafts before final submission</li>
                <li>• Contact support for technical assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
