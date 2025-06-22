import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Shield, CreditCard, FileText } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
            <p className="text-lg text-gray-600">Official terms and conditions for EQDC services</p>
          </div>

          {/* Important Notice */}
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
            <div className="flex items-center">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
              <h3 className="font-semibold text-red-800">Important Notice</h3>
            </div>
            <p className="text-red-700 text-sm mt-2">
              EQDC GST No.: 24AAATE0718R1ZL | PAN No.: AAATE0718R | Service Tax Registration No.: AAATE0718RST001
            </p>
          </div>

          {/* Payment Terms */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
                Payment Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold text-gray-900">Advance Payment</h4>
                <p className="text-gray-700 text-sm">
                  100% advance payment against Performa Invoice/work order, shall be made in favor of "Director, EQDC"
                  through Cheque/Demand Draft OR RTGS/NEFT payable at Gandhinagar (Gujarat). Cash payment will not be
                  accepted.
                </p>
              </div>

              <div className="border-l-4 border-orange-400 pl-4">
                <h4 className="font-semibold text-gray-900">TDS Deduction</h4>
                <p className="text-gray-700 text-sm">
                  If TDS is deducted at source for calibration/testing charges, please forward TDS certificate along
                  with the payment and submit filled form "PAYMENT CUM TAX DEDUCTED AT SOURCE (TDS) DETAILS".
                </p>
              </div>

              <div className="border-l-4 border-red-400 pl-4">
                <h4 className="font-semibold text-gray-900">Delay Charges</h4>
                <p className="text-gray-700 text-sm">
                  10% delay charges shall be collected (if payment is made within one year and after 30 days) & 18%
                  payment delay charges shall be collected (if payment is made after one year).
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Service Terms */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-600" />
                Service Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Sample Submission</h4>
                    <p className="text-gray-600 text-xs">
                      Samples must be clearly identified by nomenclature, Make, Model No., Serial No. and Technical
                      Specifications.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Sample Collection</h4>
                    <p className="text-gray-600 text-xs">
                      Customers must collect calibrated/tested samples within 3 months, failing which samples will be
                      disposed off.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Cancellation</h4>
                    <p className="text-gray-600 text-xs">
                      Cancellation charges as per EQDC guidelines shall be borne by the customer.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Charge Applicability</h4>
                    <p className="text-gray-600 text-xs">
                      If device found out of tolerance or faulty during testing, charges remain applicable for services
                      rendered.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Delivery Location</h4>
                    <p className="text-gray-600 text-xs">
                      Items are accepted and returned only at EQDC. Check items before taking delivery.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Subcontracting</h4>
                    <p className="text-gray-600 text-xs">
                      Jobs can be subcontracted in case of facility limitations or temporary incapability.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certificate Terms */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-purple-600" />
                Certificate & Report Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">NABL Accreditation</h4>
                <p className="text-yellow-700 text-sm">
                  NABL symbol in calibration/test certificate/report will be provided as per our NABL accredited scope
                  and validity only. Please refer www.eqdc.in for NABL Accreditation certificates and www.nabl-india.org
                  for accredited scope.
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Legal Use Restriction</h4>
                <p className="text-red-700 text-sm">
                  Test/calibration Certificate/Report shall not be used for any legal purpose & shall not be produced in
                  court of law. The certificate/report shall not be misused knowingly or unknowingly.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Liability & Jurisdiction */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Liability & Jurisdiction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Liability Limitation</h4>
                  <p className="text-gray-600">
                    EQDC shall have no liability for any damages to the client or consequential damages (including loss
                    profits) of the client or any third party.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Force Majeure</h4>
                  <p className="text-gray-600">
                    EQDC will not hold any responsibility for any delay due to force majeure.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">IPR Confirmation</h4>
                  <p className="text-gray-600">
                    Customer confirms that there is no violation of IPR in the items submitted for testing/calibration.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Jurisdiction</h4>
                  <p className="text-gray-600">
                    Subject to Gandhinagar Jurisdiction only. In case of any dispute, the decision of the Director, EQDC
                    shall be final.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact for Complaints */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <h3 className="font-semibold text-blue-800 mb-2">Complaints & Queries</h3>
            <p className="text-blue-700 text-sm">
              For complaints of any nature, mark "Complaint confidential" and mail to Quality Manager:
              <a href="mailto:qm@eqdc.in" className="font-semibold underline ml-1">
                qm@eqdc.in
              </a>
            </p>
            <p className="text-blue-700 text-sm mt-2">
              For E-payment, intimate EQDC with complete payment details to:
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
        </div>
      </div>

      <Footer />
    </div>
  )
}
