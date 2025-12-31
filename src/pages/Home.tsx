import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="gradient-primary min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <div className="decorative-line mb-6"></div>
              <h1 className="heading-primary mb-6">
                Welcome.
              </h1>
              <p className="text-body mb-6">
                I'm Shubham Bhatt - a warm & compassionate mental health professional.
              </p>
              <p className="text-body mb-8">
                Are you feeling overwhelmed with anxiety & stress? 
              </p>
              <p className="text-body mb-8">
                I can help: I offer online therapy, various workshops & courses. I create 
                content with psychological insights through my social media platform.
              </p>
              <p className="text-body mb-8">
                I am a writer and educator, passionate about mental wellness and personal growth.
              </p>
              <p className="text-body mb-8">
                I also mentor therapists & coaches to build their practice and develop 
                confidence in their work.
              </p>
              <Link to="/contact" className="btn-primary">
                Get Started
              </Link>
            </div>
            
            <div className="animate-slideInRight">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-[#D4C4B5] to-[#C9A86C] rounded-3xl shadow-2xl flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-4xl">🌱</span>
                    </div>
                    <p className="font-['Playfair_Display'] text-2xl italic">Mental Wellness</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">How I Can Help You</h2>
            <div className="decorative-line mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Online Therapy */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-[#8B7355]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="heading-tertiary mb-4">Online Therapy</h3>
              <p className="text-muted mb-6">
                Read more about therapy with me and whether working 1-1 could be the right next step for you.
              </p>
              <Link to="/mentoring" className="btn-secondary">
                More Info
              </Link>
            </div>

            {/* Courses */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-[#8B7355]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="heading-tertiary mb-4">Courses</h3>
              <p className="text-muted mb-6">
                My comprehensive courses help you develop emotional resilience and move out of survival mode.
              </p>
              <Link to="/courses" className="btn-secondary">
                More Info
              </Link>
            </div>

            {/* Workshops */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-[#8B7355]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="heading-tertiary mb-4">Workshops</h3>
              <p className="text-muted mb-6">
                Interactive workshops focusing on specific mental health topics and practical tools for wellbeing.
              </p>
              <Link to="/workshops" className="btn-secondary">
                More Info
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Shubham */}
      <section className="section-padding gradient-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-full h-96 bg-gradient-to-br from-[#8B7355] to-[#6B5A45] rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-4xl">👨‍⚕️</span>
                  </div>
                  <p className="font-['Playfair_Display'] text-xl">Shubham Bhatt</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="heading-secondary mb-6">Meet Shubham Bhatt</h2>
              <div className="decorative-line mb-6"></div>
              <p className="text-body mb-6">
                An experienced and qualified mental health professional, specializing in anxiety, 
                trauma, and personal growth. Thank you for joining me here, in this little pocket 
                of the internet.
              </p>
              <p className="text-body mb-6">
                My therapeutic style is rooted in kindness, warmth & evidence-based practices. 
                I integrate various approaches including cognitive therapies, mindfulness-based 
                interventions, and holistic wellness practices.
              </p>
              <p className="text-body mb-8">
                I create content and resources to make mental health knowledge accessible, 
                helping people understand their minds and develop practical coping strategies.
              </p>
              <Link to="/contact" className="btn-primary">
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="heading-secondary mb-6">
            Find me on Instagram: 
            <a href="https://instagram.com/psychoshala" target="_blank" rel="noopener noreferrer" className="text-[#8B7355] link-underline ml-2">
              @psychoshala
            </a>
          </h2>
          <div className="decorative-line mx-auto mb-12"></div>
          
          {/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-[#D4C4B5] to-[#C9A86C] rounded-lg shadow-md flex items-center justify-center">
                <span className="text-white text-2xl">📷</span>
              </div>
            ))}
          </div>
          
          <a 
            href="https://instagram.com/psychoshala" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-accent"
          >
            Follow @psychoshala
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-secondary mb-6">Ready to Start Your Wellness Journey?</h2>
          <div className="decorative-line mx-auto mb-8"></div>
          <p className="text-body mb-8">
            Whether you're looking for individual therapy, want to join a course, or attend a workshop, 
            I'm here to support you on your path to mental wellness and personal growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
            <Link to="/courses" className="btn-secondary">
              Explore Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;