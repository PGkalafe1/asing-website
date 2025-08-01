
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VRViewer from '@/components/VRViewer';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';

export default function Home() {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Dr. Asing and the team made my dental experience comfortable and stress-free. The results exceeded my expectations!",
      rating: 5,
      treatment: "Dental Implants"
    },
    {
      name: "Michael Chen",
      text: "Professional, caring, and thorough. I finally found a dental clinic I can trust with my family's oral health.",
      rating: 5,
      treatment: "Family Dentistry"
    },
    {
      name: "Emily Rodriguez",
      text: "The cosmetic dental work was amazing. My smile has never looked better, and the process was painless.",
      rating: 5,
      treatment: "Cosmetic Dentistry"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className={`min-h-screen transition-colors ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Header />

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.8), rgba(20, 184, 166, 0.8)), url('https://readdy.ai/api/search-image?query=modern%20dental%20clinic%20interior%20with%20comfortable%20patient%20chair%20and%20advanced%20equipment%20natural%20lighting%20creating%20welcoming%20atmosphere%20professional%20medical%20environment%20clean%20white%20and%20blue%20color%20scheme%20technology%20integration%20peaceful%20ambiance&width=1920&height=1080&seq=hero-dental&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-6 text-center text-white">
          <div className="w-full max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your Smile is Our <span className="text-teal-300">Priority</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              Experience exceptional dental care with state-of-the-art AR/VR technology and a gentle, personalized approach that puts your comfort first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-600 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
                Book Appointment
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all whitespace-nowrap cursor-pointer">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VR Experience Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-blue-900'}`}>
              Virtual Clinic Tour
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Experience our state-of-the-art facility through immersive VR technology. Take a virtual tour before your visit.
            </p>
          </div>

          <VRViewer
            title="Main Treatment Room"
            description="Explore our modern treatment room with advanced dental equipment and comfortable patient amenities."
            imageUrl="https://readdy.ai/api/search-image?query=modern%20dental%20treatment%20room%20360%20degree%20panoramic%20view%20advanced%20dental%20chair%20equipment%20comfortable%20patient%20environment%20professional%20medical%20facility&width=800&height=400&seq=vr-room&orientation=landscape"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-blue-900 mb-6 ${theme === 'dark' ? 'text-white' : ''}`}>
              Why Choose Asing Dental?
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : ''}`}>
              We combine advanced technology with compassionate care to deliver exceptional dental experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Trusted Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Over 15 years of experience providing reliable, high-quality dental care with a proven track record of patient satisfaction.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-microscope-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Advanced Technology
              </h3>
              <p className="text-gray-600 leading-relaxed">
                State-of-the-art equipment including digital X-rays, 3D imaging, and laser dentistry for precise, comfortable treatments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-heart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Gentle Care
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Patient comfort is our priority. We use gentle techniques and offer sedation options for anxiety-free dental visits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-blue-900 mb-6 ${theme === 'dark' ? 'text-white' : ''}`}>
              Comprehensive Dental Services
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : ''}`}>
              From routine cleanings to complex procedures, we offer complete dental care for the whole family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-2xl border hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <i className="ri-tooth-line text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                General Dentistry
              </h3>
              <p className="text-gray-600 text-sm">
                Preventive care, cleanings, and routine dental health maintenance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-2xl border hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-4">
                <i className="ri-magic-line text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Cosmetic Dentistry
              </h3>
              <p className="text-gray-600 text-sm">
                Veneers, whitening, and smile makeovers for a perfect smile.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-2xl border hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <i className="ri-scissors-line text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Oral Surgery
              </h3>
              <p className="text-gray-600 text-sm">
                Extractions, wisdom teeth removal, and surgical procedures.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-2xl border hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-4">
                <i className="ri-creative-commons-nd-line text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Orthodontics
              </h3>
              <p className="text-gray-600 text-sm">
                Braces and aligners to straighten teeth and improve bite.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-blue-900 mb-6 ${theme === 'dark' ? 'text-white' : ''}`}>
              What Our Patients Say
            </h2>
            <p className={`text-xl text-gray-600 ${theme === 'dark' ? 'text-gray-300' : ''}`}>
              Real experiences from real patients who trust us with their smiles.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-2xl"></i>
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 italic leading-relaxed">
                "{testimonials[currentSlide].text}"
              </blockquote>
              <div className="text-center">
                <h4 className="text-lg font-bold text-blue-900">
                  {testimonials[currentSlide].name}
                </h4>
                <p className="text-teal-600">
                  {testimonials[currentSlide].treatment}
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule your consultation today and take the first step towards optimal oral health and a confident smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              Book Consultation
            </Link>
            <Link href="tel:+15551234567" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Call Now: (555) 123-4567
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
