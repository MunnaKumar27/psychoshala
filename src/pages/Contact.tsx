import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    interest: '',
    message: ''
  });

  const interests = [
    'Individual Therapy',
    'Couples Counseling',
    'Teen/Young Adult Support',
    'Courses',
    'Workshops',
    'Collaboration',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      title: "Email",
      value: "contact@psychoshala.com",
      icon: "📧",
      link: "mailto:contact@psychoshala.com"
    },
    {
      title: "Phone",
      value: "+91 98765 43210",
      icon: "📞",
      link: "tel:+919876543210"
    },
    {
      title: "Location",
      value: "India (Online Sessions)",
      icon: "📍",
      link: null
    },
    {
      title: "Response Time",
      value: "Within 24 hours",
      icon: "⏰",
      link: null
    }
  ];

  const faqs = [
    {
      question: "How do I schedule an appointment?",
      answer: "Fill out the contact form below, and I'll get back to you within 24 hours to schedule a free consultation call where we can discuss your needs and find a suitable time."
    },
    {
      question: "Do you offer emergency support?",
      answer: "I provide scheduled therapy sessions and do not offer emergency crisis intervention. If you're in immediate danger, please contact emergency services (100) or a crisis helpline."
    },
    {
      question: "What are your session timings?",
      answer: "I offer flexible scheduling including evenings and weekends to accommodate your schedule. Sessions are typically available from 9 AM to 8 PM IST."
    },
    {
      question: "Do you accept insurance?",
      answer: "I currently operate on a private pay basis. I can provide receipts for potential insurance reimbursement, though coverage varies by provider."
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="gradient-primary section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="heading-primary mb-6">Get in Touch</h1>
          <div className="decorative-line mx-auto mb-8"></div>
          <p className="text-body max-w-3xl mx-auto">
            Ready to take the first step toward better mental health? I'm here to support you on your journey. 
            Reach out for a free consultation or any questions you might have.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <div className="mb-8">
                <h2 className="heading-secondary mb-4">Send Me a Message</h2>
                <div className="decorative-line mb-6"></div>
                <p className="text-muted">
                  Fill out the form below and I'll get back to you within 24 hours. 
                  All inquiries are completely confidential.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#3D3D3D] mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 transition-all"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#3D3D3D] mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 transition-all"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#3D3D3D] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-[#3D3D3D] mb-2">
                    I'm interested in... *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 transition-all"
                  >
                    <option value="">Select an option</option>
                    {interests.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#3D3D3D] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20 transition-all resize-none"
                    placeholder="Tell me a bit about what you're looking for and how I can help you..."
                  ></textarea>
                </div>

                <div className="bg-[#F5F0E8] p-4 rounded-lg">
                  <p className="text-sm text-[#3D3D3D]">
                    <strong>Note:</strong> By submitting this form, you acknowledge that this is not a crisis intervention service. 
                    If you're experiencing a mental health emergency, please contact emergency services immediately.
                  </p>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="card p-6">
                <h3 className="heading-tertiary mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#8B7355]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">{info.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#3D3D3D] mb-1">{info.title}</h4>
                        {info.link ? (
                          <a href={info.link} className="text-muted hover:text-[#8B7355] transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="card p-6">
                <h3 className="heading-tertiary mb-6">Session Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-[#3D3D3D]">Monday - Friday</span>
                    <span className="text-muted">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-[#3D3D3D]">Saturday</span>
                    <span className="text-muted">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-[#3D3D3D]">Sunday</span>
                    <span className="text-muted">12:00 PM - 5:00 PM</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-muted">
                      All times are in Indian Standard Time (IST). 
                      Flexible scheduling available for different time zones.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="card p-6">
                <h3 className="heading-tertiary mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  <a 
                    href="https://instagram.com/psychoshala" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📷</span>
                    </div>
                    <div>
                      <div className="font-medium text-[#3D3D3D]">Instagram</div>
                      <div className="text-sm text-muted">@psychoshala</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/shubhambhatt" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">💼</span>
                    </div>
                    <div>
                      <div className="font-medium text-[#3D3D3D]">LinkedIn</div>
                      <div className="text-sm text-muted">Shubham Bhatt</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Emergency Resources */}
              <div className="card p-6 bg-red-50 border border-red-200">
                <h3 className="text-lg font-semibold mb-4 text-red-800">Emergency Resources</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium text-red-800">Emergency Services</div>
                    <div className="text-red-600">Call 100</div>
                  </div>
                  <div>
                    <div className="font-medium text-red-800">Suicide Prevention</div>
                    <div className="text-red-600">Call 9152987821</div>
                  </div>
                  <div>
                    <div className="font-medium text-red-800">Mental Health Helpline</div>
                    <div className="text-red-600">Call 1800-599-0019</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Frequently Asked Questions</h2>
            <div className="decorative-line mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-lg font-semibold mb-4 text-[#3D3D3D]">{faq.question}</h3>
                <p className="text-muted leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="section-padding gradient-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-6">Virtual Sessions Worldwide</h2>
            <div className="decorative-line mx-auto"></div>
            <p className="text-muted max-w-2xl mx-auto mt-6">
              I provide online therapy sessions to clients across India and internationally. 
              All sessions are conducted via secure video conferencing platforms.
            </p>
          </div>
          
          <div className="card p-12 text-center">
            <div className="text-6xl mb-6">🌍</div>
            <h3 className="heading-tertiary mb-4">Online Sessions Available</h3>
            <p className="text-muted mb-8">
              Connect with me from the comfort and privacy of your own space. 
              I work with clients across different time zones to find convenient session times.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-semibold text-[#8B7355]">🇮🇳 India</div>
                <div className="text-muted">Primary service area</div>
              </div>
              <div>
                <div className="font-semibold text-[#8B7355]">🌏 International</div>
                <div className="text-muted">Available in English</div>
              </div>
              <div>
                <div className="font-semibold text-[#8B7355]">🔒 Secure Platform</div>
                <div className="text-muted">HIPAA-compliant video calls</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-secondary mb-6">Take the First Step Today</h2>
          <div className="decorative-line mx-auto mb-8"></div>
          <p className="text-body mb-8">
            Reaching out for support takes courage, and I'm honored you're considering working with me. 
            Let's start with a brief, no-pressure conversation about how I can support your mental health journey.
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-semibold mb-2 text-[#3D3D3D]">Free 15-Minute Consultation</h3>
            <p className="text-muted mb-6">
              No commitment • Completely confidential • Learn if we're a good fit
            </p>
            <a href="mailto:contact@psychoshala.com?subject=Free%20Consultation%20Request" className="btn-primary">
              Request Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;