import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram } from 'lucide-react';
import { supabase } from '../lib/supabase';
import contactusImage from '../assets/images/contactus.jpeg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          status: 'new'
        }]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-royal-900/80 to-royal-800/60 z-10" />
        <img
          src={contactusImage}
          alt="Contact Us at Fountain Gate Academy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Get in touch with us for inquiries, visits, or any questions you may have about our programs from Creche to JHS (ages 1 year and above)
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="animate-slide-up">
                <h2 className="text-3xl font-bold text-royal-800 mb-8">Get In Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 bg-gradient-to-br from-royal-50 to-blue-50 p-6 rounded-2xl border-2 border-royal-200 hover:shadow-lg transition-all duration-300">
                    <div className="bg-royal-600 p-3 rounded-xl flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-royal-800 mb-2">Address</h3>
                      <p className="text-gray-700">
                      Antiaku-Laststop, Accra, Ghana
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-gradient-to-br from-tomato-50 to-amber-50 p-6 rounded-2xl border-2 border-tomato-200 hover:shadow-lg transition-all duration-300">
                    <div className="bg-tomato-600 p-3 rounded-xl flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-tomato-800 mb-2">Phone</h3>
                      <p className="text-gray-700">0244588375</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-gradient-to-br from-royal-50 to-blue-50 p-6 rounded-2xl border-2 border-royal-200 hover:shadow-lg transition-all duration-300">
                    <div className="bg-royal-600 p-3 rounded-xl flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-royal-800 mb-2">Email</h3>
                      <p className="text-gray-700">info@fountaingate.edu.gh</p>
                      <p className="text-gray-700">admissions@fountaingate.edu.gh</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-gradient-to-br from-tomato-50 to-amber-50 p-6 rounded-2xl border-2 border-tomato-200 hover:shadow-lg transition-all duration-300">
                    <div className="bg-tomato-600 p-3 rounded-xl flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-tomato-800 mb-2">School Hours</h3>
                      <p className="text-gray-700">Monday - Friday</p>
                      <p className="text-gray-700">7:00 AM - 3:15 PM</p>
                      <p className="text-gray-700 text-sm mt-2">Office Hours: 7:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-bold text-royal-800 mb-4 text-xl">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://web.facebook.com/THEGREATFOGA#"
                      className="bg-royal-600 hover:bg-royal-700 p-4 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                      <Facebook className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@fountain_foga?_r=1&_t=ZM-91HqHjBQVse"
                      className="bg-royal-600 hover:bg-royal-700 p-4 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/fountain_foga?igsh=MXd3OHNxM285bDNpeA%3D%3D&utm_source=qr"
                      className="bg-royal-600 hover:bg-royal-700 p-4 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                      <Instagram className="w-6 h-6 text-white" />
                    </a>

                  </div>
                </div>
              </div>
            </div>

            <div id="contact-form" className="lg:col-span-3 animate-fade-in">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg border-2 border-gray-200">
                <h2 className="text-3xl font-bold text-royal-800 mb-6">Send Us a Message</h2>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border-2 border-green-500 text-green-700 p-4 rounded-xl mb-6 flex items-center">
                    <Send className="w-6 h-6 mr-3 flex-shrink-0" />
                    <p>Thank you! Your message has been sent successfully. We will get back to you soon.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border-2 border-red-500 text-red-700 p-4 rounded-xl mb-6">
                    <p>Sorry, there was an error sending your message. Please try again.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-royal-500 focus:outline-none transition-colors"
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-royal-500 focus:outline-none transition-colors resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-700 hover:to-royal-800 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-royal-200 animate-fade-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8157890123456!2d-0.1769876!3d5.6037168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnMTMuNCJOIDDCsDEwJzM3LjIiVw!5e0!3m2!1sen!2sgh!4v1234567890123"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fountain Gate Academy Location"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-royal-700 to-royal-800 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Visit Our Campus</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Schedule a tour to experience our facilities firsthand and meet our dedicated staff and students
          </p>
          <button
            onClick={() => {
              const formSection = document.getElementById('contact-form');
              formSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-white px-12 py-6 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ backgroundColor: '#f1592a' }}>
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
