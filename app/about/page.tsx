'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  const team = [
    {
      name: "Dr. Sarah Asing",
      title: "Lead Dentist & Founder",
      experience: "15+ Years Experience",
      specialties: ["General Dentistry", "Cosmetic Procedures", "Implant Surgery"],
      education: "DDS, University of California San Francisco",
      image: "professional female dentist in white coat smiling confidently modern dental office background trustworthy medical professional portrait"
    },
    {
      name: "Dr. Michael Chen",
      title: "Orthodontist",
      experience: "12+ Years Experience", 
      specialties: ["Braces", "Clear Aligners", "Bite Correction"],
      education: "DMD, Harvard School of Dental Medicine",
      image: "professional male orthodontist in medical scrubs friendly smile dental clinic background experienced medical specialist portrait"
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Oral Surgeon",
      experience: "10+ Years Experience",
      specialties: ["Extractions", "Implants", "Jaw Surgery"],
      education: "DDS, UCLA School of Dentistry",
      image: "professional female oral surgeon in surgical attire confident expression advanced surgical equipment background medical expertise portrait"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.9), rgba(20, 184, 166, 0.9)), url('https://readdy.ai/api/search-image?query=dental%20clinic%20team%20professional%20healthcare%20providers%20modern%20medical%20facility%20group%20of%20doctors%20and%20staff%20welcoming%20atmosphere&width=1920&height=600&seq=about-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Asing Dental</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Dedicated to providing exceptional dental care with compassion, expertise, and the latest technology.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Asing Dental, we believe that everyone deserves access to high-quality dental care. Our mission is to provide comprehensive, compassionate dental services that improve not just your oral health, but your overall quality of life.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We combine state-of-the-art technology with a gentle, patient-centered approach to ensure every visit is comfortable and effective. Our team is committed to building long-term relationships with our patients based on trust, respect, and exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors text-center whitespace-nowrap cursor-pointer">
                  Schedule Consultation
                </Link>
                <Link href="/services" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center whitespace-nowrap cursor-pointer">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=modern%20dental%20clinic%20interior%20patient%20consultation%20room%20comfortable%20seating%20natural%20lighting%20professional%20medical%20environment%20trust%20and%20care%20atmosphere&width=600&height=500&seq=mission-image&orientation=portrait"
                alt="Dental Clinic Interior"
                className="rounded-2xl shadow-lg w-full h-auto object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape the exceptional care we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-heart-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Compassion</h3>
              <p className="text-gray-600">We treat every patient with kindness, empathy, and understanding.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-star-line text-teal-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Excellence</h3>
              <p className="text-gray-600">We strive for the highest standards in every aspect of dental care.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Integrity</h3>
              <p className="text-gray-600">We are honest, transparent, and ethical in all our interactions.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-lightbulb-line text-teal-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Innovation</h3>
              <p className="text-gray-600">We embrace new technologies and techniques to improve patient care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced dental professionals are committed to providing you with the highest quality care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-80 bg-cover bg-center"
                     style={{
                       backgroundImage: `url('https://readdy.ai/api/search-image?query=$%7Bmember.image%7D&width=400&height=400&seq=team-${index}&orientation=squarish')`
                     }}>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{member.name}</h3>
                  <p className="text-teal-600 font-medium mb-2">{member.title}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.experience}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.education}</p>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Story</h2>
              <p className="text-xl text-gray-600">
                Building trust and transforming smiles for over 15 years.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">2009</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">The Beginning</h3>
                  <p className="text-gray-600">Dr. Sarah Asing founded Asing Dental with a vision to provide compassionate, high-quality dental care to the community.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">2015</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Growth & Expansion</h3>
                  <p className="text-gray-600">We expanded our team and services, adding orthodontics and oral surgery specialists to provide comprehensive care.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">2020</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Technology Integration</h3>
                  <p className="text-gray-600">We invested in cutting-edge technology including 3D imaging, laser dentistry, and digital impression systems.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">2024</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Continued Excellence</h3>
                  <p className="text-gray-600">Today, we continue to serve our community with innovative treatments and personalized care, having helped over 5,000 patients achieve healthy, beautiful smiles.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}