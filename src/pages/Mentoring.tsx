import React from 'react';
import { Link } from 'react-router-dom';

const Mentoring: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Individual Therapy Sessions",
      subtitle: "One-on-one online therapy",
      description: "I offer personalized therapy sessions online via video call. My approach is warm, compassionate, and evidence-based, tailored to your unique needs and goals.",
      duration: "60 minutes",
      price: "₹3,000",
      format: "Online (Zoom/Google Meet)",
      image: "💭",
      features: [
        "Initial consultation to understand your needs",
        "Personalized treatment approach",
        "Evidence-based therapeutic techniques",
        "Safe, confidential space for healing",
        "Flexible scheduling options"
      ]
    },
    {
      id: 2,
      title: "Couples Counseling",
      subtitle: "Relationship therapy for couples",
      description: "Work through relationship challenges together with professional guidance. Focus on communication, understanding, and building stronger connections.",
      duration: "75 minutes",
      price: "₹4,500",
      format: "Online (Zoom/Google Meet)",
      image: "💕",
      features: [
        "Joint sessions for both partners",
        "Communication skill building",
        "Conflict resolution techniques",
        "Relationship strengthening strategies",
        "Homework and practice exercises"
      ]
    },
    {
      id: 3,
      title: "Teen & Young Adult Support",
      subtitle: "Specialized support for ages 16-25",
      description: "Understand the unique challenges of adolescence and young adulthood. Support with identity, relationships, academic stress, and life transitions.",
      duration: "50 minutes",
      price: "₹2,500",
      format: "Online (Zoom/Google Meet)",
      image: "🌱",
      features: [
        "Age-appropriate therapeutic approaches",
        "Identity and self-esteem support",
        "Academic and social stress management",
        "Life skills and coping strategies",
        "Family involvement when appropriate"
      ]
    }
  ];

  const specialties = [
    {
      name: "Anxiety Disorders",
      description: "Generalized anxiety, panic attacks, phobias, and worry management",
      icon: "🌊"
    },
    {
      name: "Depression",
      description: "Major depression, seasonal depression, and mood regulation",
      icon: "☁️"
    },
    {
      name: "Trauma & PTSD",
      description: "Childhood trauma, PTSD, and post-traumatic growth",
      icon: "🛡️"
    },
    {
      name: "Relationship Issues",
      description: "Communication problems, intimacy issues, and relationship patterns",
      icon: "💔"
    },
    {
      name: "Self-Esteem & Identity",
      description: "Building confidence, identity exploration, and self-acceptance",
      icon: "🪞"
    },
    {
      name: "Life Transitions",
      description: "Career changes, moving, loss, and major life adjustments",
      icon: "🔄"
    }
  ];

  const therapeuticApproaches = [
    {
      name: "Cognitive Behavioral Therapy (CBT)",
      description: "Evidence-based approach focusing on thoughts, feelings, and behaviors"
    },
    {
      name: "Mindfulness-Based Therapy",
      description: "Integration of mindfulness practices for present-moment awareness"
    },
    {
      name: "Humanistic Approach",
      description: "Person-centered therapy emphasizing your inherent capacity for growth"
    },
    {
      name: "Integrative Therapy",
      description: "Combining multiple approaches tailored to your specific needs"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Free 15-minute call to discuss your needs and see if we're a good fit",
      icon: "📞"
    },
    {
      step: 2,
      title: "First Session",
      description: "Comprehensive assessment and goal setting for your therapy journey",
      icon: "📋"
    },
    {
      step: 3,
      title: "Ongoing Sessions",
      description: "Regular therapy sessions working towards your personal goals",
      icon: "🎯"
    },
    {
      step: 4,
      title: "Progress Review",
      description: "Regular check-ins to assess progress and adjust treatment as needed",
      icon: "📈"
    }
  ];

  const testimonials = [
    {
      text: "Shubham created such a safe space for me to explore my anxiety. His approach is both gentle and effective. I've learned tools I use every day.",
      name: "Sarah M.",
      role: "Software Engineer",
      rating: 5
    },
    {
      text: "The couples sessions with Shubham transformed our relationship. We now communicate so much better and feel more connected than ever.",
      name: "Raj & Priya K.",
      role: "Married Couple",
      rating: 5
    },
    {
      text: "As a young adult struggling with identity and career decisions, Shubham helped me find clarity and confidence in who I am.",
      name: "Alex R.",
      role: "University Student",
      rating: 5
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="gradient-primary section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h1 className="heading-primary mb-6">1-on-1 Mental Health Support</h1>
              <div className="decorative-line mb-6"></div>
              <p className="text-body mb-6">
                I provide personalized, compassionate therapy sessions designed to help you 
                navigate life's challenges and build lasting emotional wellbeing.
              </p>
              <p className="text-body mb-8">
                My approach is warm, evidence-based, and tailored to your unique needs. 
                Together, we'll create a safe space for healing and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Book Free Consultation
                </Link>
                <button className="btn-secondary">
                  Learn About My Approach
                </button>
              </div>
            </div>
            
            <div className="animate-slideInRight">
              <div className="card p-8 text-center">
                <div className="w-24 h-24 bg-[#8B7355]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">👨‍⚕️</span>
                </div>
                <h3 className="heading-tertiary mb-4">Shubham Bhatt</h3>
                <p className="text-muted mb-6">
                  Licensed Mental Health Professional with expertise in anxiety, trauma, 
                  and relationship counseling.
                </p>
                <div className="flex justify-center space-x-4 text-sm text-[#8B7355]">
                  <span>• MA Psychology</span>
                  <span>• 5+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Therapy Services</h2>
            <div className="decorative-line mx-auto"></div>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="card p-8">
                    <div className="text-6xl mb-6 text-center">{service.image}</div>
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-[#8B7355] mb-2">{service.price}</div>
                      <p className="text-muted text-sm">per {service.duration} session</p>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-center">
                        <span className="px-3 py-1 bg-[#8B7355]/10 text-[#8B7355] rounded-full text-sm">
                          {service.duration}
                        </span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="px-3 py-1 bg-[#C9A86C]/10 text-[#C9A86C] rounded-full text-sm">
                          {service.format}
                        </span>
                      </div>
                    </div>
                    <Link to="/contact" className="btn-primary w-full">
                      Book Session
                    </Link>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-0' : ''}>
                  <h3 className="heading-secondary mb-4">{service.title}</h3>
                  <p className="text-[#8B7355] text-xl font-medium mb-6">{service.subtitle}</p>
                  <p className="text-body mb-8">{service.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold mb-4 text-[#3D3D3D]">What's included:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#C9A86C] rounded-full mt-2"></div>
                          <span className="text-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="section-padding gradient-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Areas of Expertise</h2>
            <div className="decorative-line mx-auto"></div>
            <p className="text-muted max-w-2xl mx-auto mt-6">
              I specialize in helping people with a wide range of mental health challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">{specialty.icon}</div>
                <h3 className="heading-tertiary mb-4">{specialty.name}</h3>
                <p className="text-muted">{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Approaches */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">My Therapeutic Approach</h2>
            <div className="decorative-line mx-auto"></div>
            <p className="text-muted max-w-3xl mx-auto mt-6">
              I integrate evidence-based approaches to create a personalized treatment plan that works for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {therapeuticApproaches.map((approach, index) => (
              <div key={index} className="card p-6">
                <h3 className="heading-tertiary mb-4">{approach.name}</h3>
                <p className="text-muted">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding gradient-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">How It Works</h2>
            <div className="decorative-line mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="w-8 h-8 bg-[#8B7355] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-sm">{step.step}</span>
                </div>
                <h3 className="heading-tertiary mb-4">{step.title}</h3>
                <p className="text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Client Experiences</h2>
            <div className="decorative-line mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <div className="quote text-lg mb-6">
                  {testimonial.text}
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#D4C4B5] rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">👤</span>
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding gradient-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Frequently Asked Questions</h2>
            <div className="decorative-line mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How do I know if therapy is right for me?",
                answer: "Therapy can benefit anyone looking to improve their mental health, work through challenges, or achieve personal growth. If you're experiencing persistent stress, anxiety, depression, or relationship issues, therapy can provide valuable support and tools."
              },
              {
                question: "What should I expect in the first session?",
                answer: "The first session focuses on getting to know you, understanding your concerns, and discussing your goals. We'll also cover confidentiality, my approach to therapy, and answer any questions you might have."
              },
              {
                question: "How long does therapy typically take?",
                answer: "The length of therapy varies depending on individual needs and goals. Some people benefit from short-term therapy (6-12 sessions), while others prefer longer-term support. We'll regularly review your progress and adjust as needed."
              },
              {
                question: "Is online therapy as effective as in-person?",
                answer: "Research shows that online therapy can be just as effective as in-person therapy for many mental health conditions. It offers the added benefits of convenience and accessibility while maintaining the same quality of care."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="heading-tertiary mb-4">{faq.question}</h3>
                <p className="text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-secondary mb-6">Ready to Start Your Healing Journey?</h2>
          <div className="decorative-line mx-auto mb-8"></div>
          <p className="text-body mb-8">
            Taking the first step toward therapy is a brave and important decision. 
            I'm here to support you every step of the way in a safe, non-judgmental environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/contact" className="btn-primary">
              Schedule Free Consultation
            </Link>
            <button className="btn-secondary">
              Learn More About Me
            </button>
          </div>
          <p className="text-muted text-sm">
            Free 15-minute consultation • No commitment required • Completely confidential
          </p>
        </div>
      </section>
    </div>
  );
};

export default Mentoring;