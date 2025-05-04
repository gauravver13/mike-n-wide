export default function Footer() {
    return (
      <footer className="bg-white container text-black py-16">
        <div className="mx-auto">

          {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
                <div className="max-w-md">
                <h3 className="font-semibold text-2xl mb-8">JOIN #MIKEANDWIDE</h3>
                <p className="text-sm leading-5 opacity-60 font-semibold text-black mb-16">
                    Sign up and be the first to know about new arrivals, exclusive promotions and the latest news from the World of Mike & Wide. Plus, enjoy 10% off your next order.
                </p>
                
                <div className="font-medium text-sm text-black leading-3.5">Email Address</div>
                <div className="flex border border-black w-full max-w-md">
                    <input
                    type="email"
                    placeholder="Enter your mail id"
                    className="flex-1 pl-2.5 font-light text-sm py-5 outline-none"
                    />
                    <button className="px-4 text-lg border">→</button> 
                </div>
                
                </div>

                <div className="relative">
                <div className="relative top-32 left-0 h-[320px] w-[242px] bg-black" />
                <div className="relative -top-20 right-36 w-[292px] h-[188px] bg-[#D9D9D9]" />
                </div>
            </div>
  
          {/* Bottom Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm font-medium leading-5">

                <div>
                <p className="font-[14px] mb-2">SHIPPING TO</p>
                <p className="opacity-50">India</p>
                </div>

                <div>
                <p className="font-medium mb-2">FOLLOW US</p>
                </div>

                <div>
                <p className="font-semibold mb-2">Info</p>
                <ul className="space-y-1 opacity-80 hover:opacity-100">
                    <li>Follow your order</li>
                    <li>Shipping</li>
                    <li>Returns</li>
                    <li>Contact Us</li>
                </ul>
                </div>

                <div>
                <p className="font-semibold mb-2">COMPANY</p>
                <ul className="space-y-1 opacity-70 hover:opacity-90">
                    <li>History</li>
                    <li>World of M&W</li>
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
  