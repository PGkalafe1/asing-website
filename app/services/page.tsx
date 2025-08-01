'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "General Dentistry",
      description: "Comprehensive oral health care including cleanings, fillings, and preventive treatments.",
      icon: "ri-tooth-line",
      price: "From $120",
      features: ["Regular Cleanings", "Cavity Fillings", "Oral Examinations", "Fluoride Treatments"],
      image: "modern dental examination room with comfortable patient chair advanced dental equipment natural lighting professional medical environment clean sterile atmosphere"
    },
    {
      id: 2,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with veneers, whitening, and aesthetic dental procedures.",
      icon: "ri-magic-line",
      price: "From $300",
      features: ["Teeth Whitening", "Porcelain Veneers", "Smile Makeovers", "Bonding Procedures"],
      image: "beautiful cosmetic dentistry results before and after smile transformation professional dental office bright white teeth aesthetic dental work"
    },
    {
      id: 3,
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions that look and feel like natural teeth.",
      icon: "ri-creative-commons-nd-line",
      price: "From $2,500",
      features: ["Single Implants", "Multiple Implants", "All-on-4 Solutions", "Implant Crowns"],
      image: "dental implant procedure advanced surgical equipment 3D dental imaging technology precise implant placement professional dental surgery environment"
    },
    {
      id: 4,
      title: "Orthodontics",
      description: "Straighten teeth and correct bite issues with braces and clear aligners.",
      icon: "ri-scissors-line",
      price: "From $4,000",
      features: ["Traditional Braces", "Clear Aligners", "Retainers", "Bite Correction"],
      image: "orthodontic treatment clear aligners and traditional braces options dental alignment before after results professional orthodontic office"
    },
    {
      id: 5,
      title: "Oral Surgery",
      description: "Surgical dental procedures including extractions and wisdom tooth removal.",
      icon: "ri-surgical-mask-line",
      price: "From $200",
      features: ["Tooth Extractions", "Wisdom Teeth", "Bone Grafting", "Sinus Lifts"],
      image: "oral surgery suite sterile surgical environment advanced surgical instruments professional dental surgeon medical equipment safety protocols"
    },
    {
      id: 6,
      title: "Pediatric Dentistry",
      description: "Specialized dental care for children in a fun, comfortable environment.",
      icon: "ri-heart-line",
      price: "From $80",
      features: ["Child Cleanings", "Fluoride Treatments", "Sealants", "Early Orthodontics"],
      image: "pediatric dental office colorful child-friendly environment fun dental chair kids dental examination happy children comfortable atmosphere"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.9), rgba(20, 184, 166, 0.9)), url('https://readdy.ai/api/search-image?query=comprehensive%20dental%20services%20showcase%20multiple%20dental%20procedures%20advanced%20equipment%20modern%20dental%20clinic%20professional%20medical%20environment&width=1920&height=600&seq=services-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Dental Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive dental care using the latest technology and techniques for optimal oral health.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 bg-cover bg-center"
                     style={{
                       backgroundImage: `url('https://readdy.ai/api/search-image?query=$%7Bservice.image%7D&width=600&height=300&seq=service-${service.id}&orientation=landscape')`
                     }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                      <i className={`${service.icon} text-white text-xl`}></i>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-teal-500 text-white px-4 py-2 rounded-full font-semibold">
                    {service.price}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-blue-900 mb-3">What's Included:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-4 h-4 flex items-center justify-center mr-2">
                            <i className="ri-check-line text-teal-500"></i>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-teal-600 transition-all whitespace-nowrap cursor-pointer">
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Advanced Dental Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge technology to provide precise, comfortable, and efficient dental care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-camera-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">3D Imaging</h3>
              <p className="text-gray-600">Advanced 3D cone beam CT scanning for precise diagnosis and treatment planning.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-flashlight-line text-teal-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Laser Dentistry</h3>
              <p className="text-gray-600">Minimally invasive laser treatments for gum disease and soft tissue procedures.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-computer-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Digital Impressions</h3>
              <p className="text-gray-600">Comfortable digital scanning eliminates messy traditional impressions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your consultation and learn more about our services.
          </p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
            Book Your Appointment
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}