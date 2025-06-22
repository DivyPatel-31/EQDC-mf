import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Upload, FileText, ArrowLeft } from "lucide-react"
import Link from "next/link"

const formDetails = {
  pgvcl: {
    title: "PGVCL Form",
    fullName: "Paschim Gujarat Vij Company Ltd.",
    description: "Testing and certification form for electrical equipment and cables",
    address: "Corporate Office 'Paschim Gujarat vijsevaSadan', Off. Nana Mava Main Road, Laxminagar, Rajkot-360 004",
    serviceCode: "T-CAB",
    items: [
      "55 Sqmm AAA Conductor",
      "3.5C x 70 Lt PVC Cable",
      "4C x 4 mm2 Lt PVC Cable",
      "3C x 35 mm2 + 16mm2+ 25mm2 Lt AB Cable",
      "3C x 50 mm2 + 1c x 25 mm2+ 35 mm2 Lt AB Cable",
    ],
  },
  dgvcl: {
    title: "DGVCL Form",
    fullName: "Dakshin Gujarat Vij Co. Ltd.",
    description: "Testing and certification form for electrical equipment and cables",
    address: "Corporate Office 'UrjaSanan', Kapodara Char Rasta, Nana Varacha Road, Surat-395006",
    serviceCode: "T-CAB",
    items: [
      "55 Sqmm AAA Conductor",
      "3.5C x 70 Lt PVC Cable",
      "4C x 4 mm2 Lt PVC Cable",
      "3C x 35 mm2 + 16mm2+ 25mm2 Lt AB Cable",
      "3C x 50 mm2 + 1c x 25 mm2+ 35 mm2 Lt AB Cable",
    ],
  },
  bis: {
    title: "BIS Form",
    fullName: "Bureau of Indian Standards (भारतीय मानक ब्यूरो)",
    description: "Testing and certification form for submersible pump sets and motors",
    address: "3rd floor, Navajivan Amrut Jayanti Bhavan, Off. Ashram Road, Ahmedabad-380014",
    serviceCode: "T-CAB",
    items: [
      "0.37 kw SubMersibal pump set",
      "3.7 kw SubMersibal pump set",
      "3.7 kw Open well SubMersibal pump set",
      "11 kw Moter for SubMersibal pump set",
    ],
  },
  annexure4: {
    title: "Annexure 4 Bill",
    fullName: "Declaration to Raise Invoice",
    description: "Information required from CSC to raise the invoice for services rendered",
    address: "EQDC Gandhinagar & Vadodara",
    serviceCode: "Various",
    items: [
      "Service charges calculation",
      "GST @ 18% computation",
      "Advance payment details",
      "Work order information",
    ],
  },
  jobcard: {
    title: "Job Card",
    fullName: "EQDC Job Card",
    description: "Detailed form for job execution, sample submission and testing requirements",
    address: "EQDC Gandhinagar & Vadodara",
    serviceCode: "All Service Codes",
    items: ["Sample/Project details", "Testing specifications", "Document requirements", "Customer requirements"],
  },
  srf: {
    title: "SRF Form",
    fullName: "Service Request Form",
    description: "Primary form for requesting calibration, testing, TPI, development assistance and training services",
    address: "EQDC Gandhinagar & Vadodara",
    serviceCode: "All Service Codes",
    items: [
      "Customer organization details",
      "Service type selection",
      "Payment information",
      "Terms & conditions acceptance",
    ],
  },
}

export default function FormPage({ params }: { params: { formId: string } }) {
  const form = formDetails[params.formId as keyof typeof formDetails]

  if (!form) {
    return <div>Form not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Forms
          </Link>

          {/* Form Header */}
          <Card className="mb-8">
            <CardHeader className="eqdc-primary text-white">
              <CardTitle className="text-2xl flex items-center">
                <FileText className="w-6 h-6 mr-3" />
                {form.title}
              </CardTitle>
              <CardDescription className="text-blue-100">{form.fullName}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-600 mb-4">{form.description}</p>

                  <h3 className="font-semibold text-gray-900 mb-2">Service Code</h3>
                  <p className="text-gray-600">{form.serviceCode}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Organization Address</h3>
                  <p className="text-gray-600 text-sm">{form.address}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Form Actions */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Download className="w-5 h-5 mr-2 text-blue-600" />
                  Download Form
                </CardTitle>
                <CardDescription>Download the official form template</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full eqdc-primary hover:bg-blue-800">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF Form
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Upload className="w-5 h-5 mr-2 text-green-600" />
                  Submit Form
                </CardTitle>
                <CardDescription>Upload completed form for processing</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Completed Form
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Form Details */}
          <Card>
            <CardHeader>
              <CardTitle>Typical Items/Services Covered</CardTitle>
              <CardDescription>Common items and services processed through this form</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-2">
                {form.items.map((item, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Important Notice */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
            <h3 className="font-semibold text-yellow-800 mb-2">Important Instructions</h3>
            <ul className="text-yellow-700 text-sm space-y-1">
              <li>• Fill all forms in CAPITAL LETTERS</li>
              <li>• 100% advance payment required before processing</li>
              <li>• Quote SRF number in all communications</li>
              <li>• Subject to Gandhinagar jurisdiction</li>
              <li>• All forms are confidential and for official use only</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
