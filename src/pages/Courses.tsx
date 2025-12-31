import React from 'react';
import { Link } from 'react-router-dom';

const Courses: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: "Nurturing Your Mind & Soul",
      subtitle: "A 12-week comprehensive wellness journey",
      description: "Underneath so many mental health struggles lies a deeper truth: your nervous system is stuck in survival mode. But you're not broken - you're dysregulated.",
      features: [
        "Finally feel safe in your own mind",
        "Understand your unique thought patterns",
        "Move from survival mode to genuine safety",
        "Create a wellness toolkit that actually works"
      ],
      duration: "12 weeks",
      format: "Online",
      price: "₹25,000",
      image: "🧠"
    },
    {
      id: 2,
      title: "Anxiety to Calm",
      subtitle: "Master your anxiety with evidence-based techniques",
      description: "Learn practical, science-backed strategies to understand and manage anxiety effectively in your daily life.",
      features: [
        "Understand the science of anxiety",
        "Learn cognitive restructuring techniques",
        "Practice mindfulness and grounding exercises",
        "Build long-term coping strategies"
      ],
      duration: "8 weeks",
      format: "Online",
      price: "₹18,000",
      image: "🌊"
    },
    {
      id: 3,
      title: "Emotional Intelligence Mastery",
      subtitle: "Develop deeper emotional awareness and regulation",
      description: "Enhance your ability to understand, manage, and effectively use emotions in personal and professional relationships.",
      features: [
        "Emotional awareness and recognition",
        "Regulation techniques for intense emotions",
        "Empathy and social skills development",
        "Communication and relationship building"
      ],
      duration: "10 weeks",
      format: "Online + Live Sessions",
      price: "₹22,000",
      image: "❤️"
    }
  ];

  const upcomingCourses = [
    {
      title: "Trauma-Informed Healing",
      description: "A gentle approach to understanding and healing from trauma",
      startDate: "March 2026",
      status: "Coming Soon"
    },
    {
      title: "Mindful Parenting",
      description: "Bringing mindfulness and emotional intelligence to parenting",
      startDate: "April 2026",
      status: "Coming Soon"
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="gradient-primary section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="heading-primary mb-6">Transform Your Mind</h1>
          <div className="decorative-line mx-auto mb-8"></div>
          <p className="text-body max-w-3xl mx-auto">
            Comprehensive online courses designed to help you understand your mind, 
            develop emotional resilience, and create lasting positive changes in your life.
          </p>
        </div>
      </section>

      {/* Current Courses */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Available Courses</h2>
            <div className="decorative-line mx-auto"></div>
          </div>

          <div className="space-y-12">
            {courses.map((course, index) => (
              <div key={course.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="card p-8">
                    <div className="text-6xl mb-6 text-center">{course.image}</div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-[#8B7355]/10 text-[#8B7355] rounded-full text-sm">
                        {course.duration}
                      </span>
                      <span className="px-3 py-1 bg-[#C9A86C]/10 text-[#C9A86C] rounded-full text-sm">
                        {course.format}
                      </span>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#8B7355] mb-2">{course.price}</div>
                      <p className="text-muted">One-time payment</p>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-0' : ''}>
                  <h3 className="heading-secondary mb-4">{course.title}</h3>
                  <p className="text-[#8B7355] text-xl font-medium mb-6">{course.subtitle}</p>
                  <p className="text-body mb-8">{course.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold mb-4 text-[#3D3D3D]">What you'll learn:</h4>
                    <ul className="space-y-3">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#C9A86C] rounded-full mt-2"></div>
                          <span className="text-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact" className="btn-primary">
                      Enroll Now
                    </Link>
                    <button className="btn-secondary">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="section-padding gradient-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Why Choose Our Courses?</h2>
            <div className="decorative-line mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="heading-tertiary mb-4">Expert-Led</h3>
              <p className="text-muted">
                All courses are personally designed and led by Shubham Bhatt
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="heading-tertiary mb-4">Evidence-Based</h3>
              <p className="text-muted">
                Grounded in the latest research in psychology and neuroscience
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="heading-tertiary mb-4">Flexible Learning</h3>
              <p className="text-muted">
                Learn at your own pace with lifetime access to course materials
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="heading-tertiary mb-4">Community Support</h3>
              <p className="text-muted">
                Join a supportive community of learners on similar journeys
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Courses */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Coming Soon</h2>
            <div className="decorative-line mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingCourses.map((course, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="w-12 h-12 bg-[#8B7355]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl">⏰</span>
                </div>
                <h3 className="heading-tertiary mb-4">{course.title}</h3>
                <p className="text-muted mb-6">{course.description}</p>
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <span className="px-3 py-1 bg-[#C9A86C]/10 text-[#C9A86C] rounded-full text-sm">
                    {course.startDate}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {course.status}
                  </span>
                </div>
                <button className="btn-secondary opacity-50 cursor-not-allowed">
                  Notify Me
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-secondary mb-6">Stay Updated</h2>
          <div className="decorative-line mx-auto mb-8"></div>
          <p className="text-body mb-8">
            Be the first to know when new courses are available and get exclusive 
            early-bird pricing and bonuses.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Notify Me
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Courses;