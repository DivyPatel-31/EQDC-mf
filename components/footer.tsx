export default function Footer() {
  return (
    <footer className="eqdc-primary text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">EQDC Gandhinagar</h3>
            <p className="text-sm opacity-90">
              B-177/178 & B/23/2, GIDC Electronics Estate
              <br />
              Sector-25, Gandhinagar - 382024, Gujarat
            </p>
            <p className="text-sm opacity-90 mt-2">
              Phone: 9909039131/32/38
              <br />
              Email: customer@eqdc.in
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">EQDC Vadodara</h3>
            <p className="text-sm opacity-90">
              C1-641/648, GIDC Industrial Estate
              <br />
              Makarpura, Vadodara - 390010, Gujarat
            </p>
            <p className="text-sm opacity-90 mt-2">
              Phone: 0265-2634367, 2652696
              <br />
              Email: adv@eqdc.in
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Important Links</h3>
            <ul className="text-sm opacity-90 space-y-1">
              <li>
                <a href="https://www.bis.org.in" target="_blank" className="hover:text-blue-200" rel="noreferrer">
                  BIS Website
                </a>
              </li>
              <li>
                <a href="https://www.nabl-india.org" target="_blank" className="hover:text-blue-200" rel="noreferrer">
                  NABL Website
                </a>
              </li>
              <li>
                <a href="https://www.eqdc.in" target="_blank" className="hover:text-blue-200" rel="noreferrer">
                  EQDC Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-400 mt-8 pt-4 text-center text-sm opacity-75">
          <p>&copy; 2024 Electronics & Quality Development Centre. All rights reserved.</p>
          <p className="mt-1">Subject to Gandhinagar Jurisdiction | Confidential & Official Use Only</p>
        </div>
      </div>
    </footer>
  )
}
