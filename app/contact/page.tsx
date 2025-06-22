import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Building2, Globe } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600">
              Get in touch with EQDC for testing, calibration, and certification services
            </p>
          </div>

          {/* Office Locations */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Gandhinagar Office */}
            <Card>
              <CardHeader className="eqdc-primary text-white">
                <CardTitle className="flex items-center">
                  <Building2 className="w-5 h-5 mr-2" />
                  EQDC Gandhinagar (Head Office)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600 text-sm">
                        B-177/178 & B/23/2, GIDC Electronics Estate
                        <br />
                        Sector-25, Gandhinagar - 382024
                        <br />
                        Gujarat, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone Numbers</p>
                      <p className="text-gray-600 text-sm">9909039131 / 9909039132 / 9909039138</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Email Addresses</p>
                      <div className="text-gray-600 text-sm space-y-1">
                        <p>customer@eqdc.in (Customer Service)</p>
                        <p>qm@eqdc.in (Quality Manager)</p>
                        <p>md@eqdc.in (Managing Director)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vadodara Office */}
            <Card>
              <CardHeader className="bg-green-600 text-white">
                <CardTitle className="flex items-center">
                  <Building2 className="w-5 h-5 mr-2" />
                  EQDC Vadodara
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600 text-sm">
                        C1-641/648, GIDC Industrial Estate
                        <br />
                        Makarpura, Vadodara - 390010
                        <br />
                        Gujarat, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone Numbers</p>
                      <p className="text-gray-600 text-sm">0265-2634367 / 0265-2652696</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Email Addresses</p>
                      <div className="text-gray-600 text-sm space-y-1">
                        <p>adv@eqdc.in (Advance Services)</p>
                        <p>eqdcv@eqdc.in (Vadodara Office)</p>
                        <p>customer@eqdc.in (Customer Service)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Banking Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building2 className="w-5 h-5 mr-2 text-blue-600" />
                Banking Details for Payments
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold">Account Title:</span> Electronics And Quality Development Centre
                  </p>
                  <p>
                    <span className="font-semibold">Account Type:</span> Savings
                  </p>
                  <p>
                    <span className="font-semibold">Account No:</span> 50100199317288
                  </p>
                  <p>
                    <span className="font-semibold">Customer ID:</span> 73978918
                  </p>
                </div>
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold">Bank:</span> HDFC Bank Limited
                  </p>
                  <p>
                    <span className="font-semibold">Branch:</span> Plot No.: 448, Sector 16, Next to Pragna Petrol Pump,
                    Gandhinagar – 382016
                  </p>
                  <p>
                    <span className="font-semibold">IFSC Code:</span> HDFC0000190
                  </p>
                  <p>
                    <span className="font-semibold">MICR Code:</span> 380240006
                  </p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Payment Intimation:</strong> For E-payment, intimate EQDC with complete payment details to
                  <a href="mailto:accounts@eqdc.in" className="font-semibold underline ml-1">
                    accounts@eqdc.in
                  </a>{" "}
                  and
                  <a href="mailto:customer@eqdc.in" className="font-semibold underline ml-1">
                    customer@eqdc.in
                  </a>{" "}
                  within one day.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Office Hours & Important Links */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-green-600" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold">Monday - Friday:</span> 9:30 AM - 6:00 PM
                  </p>
                  <p>
                    <span className="font-semibold">Saturday:</span> 9:30 AM - 1:00 PM
                  </p>
                  <p>
                    <span className="font-semibold">Sunday:</span> Closed
                  </p>
                  <p className="text-gray-600 mt-4">
                    <strong>Note:</strong> Sample submission and collection during office hours only.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-purple-600" />
                  Important Links
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3 text-sm">
                  <a
                    href="https://www.eqdc.in"
                    target="_blank"
                    className="block text-blue-600 hover:text-blue-800 underline"
                    rel="noreferrer"
                  >
                    EQDC Official Website
                  </a>
                  <a
                    href="https://www.bis.org.in"
                    target="_blank"
                    className="block text-blue-600 hover:text-blue-800 underline"
                    rel="noreferrer"
                  >
                    Bureau of Indian Standards (BIS)
                  </a>
                  <a
                    href="https://www.nabl-india.org"
                    target="_blank"
                    className="block text-blue-600 hover:text-blue-800 underline"
                    rel="noreferrer"
                  >
                    National Accreditation Board (NABL)
                  </a>
                  <p className="text-gray-600 mt-4">
                    For EQDC's scope of BIS recognition and NABL accreditation status, please refer to the above
                    websites.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* GST & Registration Details */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Registration Details</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-900">GST Number</p>
                  <p className="text-gray-600">24AAATE0718R1ZL</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">PAN Number</p>
                  <p className="text-gray-600">AAATE0718R</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Service Tax Registration</p>
                  <p className="text-gray-600">AAATE0718RST001</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
