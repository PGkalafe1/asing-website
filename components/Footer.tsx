
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center">
                <i className="ri-hospital-line text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold">Asing Dental</h3>
                <p className="text-sm text-blue-200">Excellence in Dental Care</p>
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed">
              Providing comprehensive dental care with the latest technology and a gentle touch for over 15 years.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white transition-colors cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-200 hover:text-white transition-colors cursor-pointer">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-200 hover:text-white transition-colors cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-white transition-colors cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li className="text-blue-200">General Dentistry</li>
              <li className="text-blue-200">Cosmetic Dentistry</li>
              <li className="text-blue-200">Orthodontics</li>
              <li className="text-blue-200">Oral Surgery</li>
              <li className="text-blue-200">Dental Implants</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-map-pin-line text-teal-400"></i>
                </div>
                <span className="text-blue-200">123 Dental Street, Medical District, City 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-phone-line text-teal-400"></i>
                </div>
                <span className="text-blue-200">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-mail-line text-teal-400"></i>
                </div>
                <span className="text-blue-200">info@asingdental.com</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-white"></i>
              </div>
              <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-white"></i>
              </div>
              <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-white"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">&copy; 2024 Asing Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
