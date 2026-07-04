import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Image
                src="/images/Group.svg"
                alt="DentoCorrect Logo"
                width={180}
                height={50}
                priority
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</Link>
              <Link href="#process" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Process</Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</Link>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg">
              Book Consultation
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                <Image src="/images/Mask group.svg" alt="" width={16} height={16} />
                <span>Pakistan's Largest Dental Network</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Perfect Smile,
                <span className="text-blue-600"> Perfect Life</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                ISO-Certified dental care across 7 cities. 10+ years experience. 50,000+ transformed smiles. 
                Transparent pricing with no hidden costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-xl">
                  Get Free Consultation
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all">
                  View Treatments
                </button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50K+</div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">7</div>
                  <div className="text-sm text-gray-600">Cities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/Frame 1114 (1).svg"
                alt="Dentist consultation"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: "Mask group.svg", text: "ISO-Certified Safety" },
              { icon: "Mask group.svg", text: "Digital Smile Planning" },
              { icon: "Mask group.svg", text: "Transparent Pricing" },
              { icon: "Mask group.svg", text: "Experienced Dentists" },
              { icon: "Mask group.svg", text: "7 Clinic Locations" },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 justify-center">
                <Image src={`/images/${item.icon}`} alt="" width={24} height={24} />
                <span className="text-gray-700 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced dental treatments using cutting-edge technology for perfect results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Clear Aligners", icon: "crd1.svg", desc: "Invisible braces for a perfect smile" },
              { name: "Teeth Whitening", icon: "teeth.svg", desc: "Professional whitening for brighter teeth" },
              { name: "Dental Implants", icon: "Dental Implants.svg", desc: "Permanent solution for missing teeth" },
              { name: "Root Canal", icon: "01.svg", desc: "Pain-free root canal treatment" },
              { name: "Braces", icon: "02.png", desc: "Traditional and ceramic braces" },
              { name: "Veneers", icon: "03.png", desc: "Custom veneers for perfect aesthetics" },
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Image src={`/images/${service.icon}`} alt={service.name} width={40} height={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link href="#" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process to your perfect smile
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", icon: "01.svg", title: "Consultation", desc: "Free initial assessment" },
              { step: "02", icon: "02.png", title: "Treatment Plan", desc: "Customized plan for you" },
              { step: "03", icon: "03.png", title: "Treatment", desc: "Expert care & procedure" },
              { step: "04", icon: "04.png", title: "Aftercare", desc: "Follow-up & maintenance" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Book your free consultation today and take the first step towards your perfect smile
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
              Book Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all">
              Call Now: (021) 123-4567
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <Image src="/images/Group.svg" alt="DentoCorrect" width={150} height={40} className="mb-6" />
              <p className="text-gray-400">
                Pakistan's largest network of ISO-certified dental clinics.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Clear Aligners</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Teeth Whitening</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Dental Implants</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Root Canal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Locations</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Karachi</li>
                <li>Lahore</li>
                <li>Islamabad</li>
                <li>Rawalpindi</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(021) 123-4567</li>
                <li>info@dentocorrect.pk</li>
                <li>7 Clinic Locations</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DentoCorrect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
