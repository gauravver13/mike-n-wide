export default function Footer() {
    return (
      <footer className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
            <div className="max-w-md">
              <h3 className="font-semibold text-lg mb-2">JOIN #MIKEANDWIDE</h3>
              <p className="text-sm text-gray-600 mb-4">
                Sign up and be the first to know about new arrivals, exclusive promotions and the latest news from the World of Mike & Wide. Plus, enjoy 10% off your next order.
              </p>
              <div className="flex border border-gray-300 w-full max-w-md">
                <input
                  type="email"
                  placeholder="Enter your mail id"
                  className="flex-1 px-4 py-2 outline-none"
                />
                <button className="px-4 text-lg">→</button>
              </div>
            </div>
            <div className="w-40 h-32 relative">
              <div className="absolute top-4 left-4 w-full h-full bg-black" />
              <div className="absolute top-0 left-0 w-full h-full bg-gray-300" />
            </div>
          </div>
  
          {/* Bottom Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div>
              <p className="font-semibold mb-2">SHIPPING TO</p>
              <p>India</p>
            </div>
            <div>
              <p className="font-semibold mb-2">FOLLOW US</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Info</p>
              <ul className="space-y-1">
                <li>Follow your order</li>
                <li>Shipping</li>
                <li>Returns</li>
                <li>Contact Us</li>
                <li>Product Information</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">COMPANY</p>
              <ul className="space-y-1">
                <li>History</li>
                <li>World of M & W</li>
                <li>Careers</li>
                <li>Legal Area</li>
                <li>Privacy Policy</li>
                <li>Site map</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  