import React from 'react';
import { Link } from 'react-router-dom';

const Workshops: React.FC = () => {
  const workshops = [
    {
      id: 1,
      title: "Introduction to Mindfulness",
      subtitle: "A beginner's guide to mindful living",
      description: "Learn the fundamentals of mindfulness practice and how to integrate it into your daily routine for better mental clarity and emotional balance.",
      duration: "3 hours",
      format: "Online Live Session",
      price: "₹2,500",
      date: "February 15, 2026",
      time: "2:00 PM - 5:00 PM IST",
      spots: "15 spots left",
      image: "🧘‍♂️",
      topics: [
        "What is mindfulness and why it matters",
        "Basic breathing techniques",
        "Body scan meditation",
        "Mindful eating exercise",
        "Creating a daily practice"
      ]
    },
    {
      id: 2,
      title: "Anxiety Management Toolkit",
      subtitle: "Practical strategies for managing anxiety",
      description: "Learn evidence-based techniques to understand, manage, and reduce anxiety in your daily life through interactive exercises and guided practice.",
      duration: "4 hours",
      format: "Online Live Session",
      price: "₹3,500",
      date: "February 22, 2026",
      time: "1:00 PM - 5:00 PM IST",
      spots: "12 spots left",
      image: "🌊",
      topics: [
        "Understanding anxiety and its triggers",
        "Cognitive restructuring techniques",
        "Progressive muscle relaxation",
        "Grounding techniques for panic",
        "Building your personal toolkit"
      ]
    },
    {
      id: 3,
      title: "Emotional Regulation Workshop",
      subtitle: "Master your emotional responses",
      description: "Develop skills to better understand, process, and regulate your emotions for improved relationships and mental wellbeing.",
      duration: "5 hours",
      format: "Online Live Session",
      price: "₹4,000",
      date: "March 1, 2026",
      time: "11:00 AM - 4:00 PM IST",
      spots: "8 spots left",
      image: "❤️",
      topics: [
        "The science of emotions",
        "Identifying emotional patterns",
        "Regulation vs. suppression",
        "Communication during emotional moments",
        "Building emotional resilience"
      ]
    },
    {
      id: 4,
      title: "Stress & Burnout Prevention",
      subtitle: "Recognize, prevent, and recover from burnout",
      description: "Learn to identify early signs of burnout and develop sustainable strategies for managing stress in work and personal life.",
      duration: "6 hours",
      format: "Online Live Session",
      price: "₹4,500",
      date: "March 8, 2026",
      time: "10:00 AM - 4:00 PM IST",
      spots: "10 spots left",
      image: "🔥",
      topics: [
        "Understanding stress vs. burnout",
        "Early warning signs",
        "Workplace boundary setting",
        "Recovery and restoration techniques",
        "Creating sustainable routines"
      ]
    }
  ];

  const pastWorkshops = [
    {
      title: "Building Self-Compassion",
      description: "Learn to be kinder to yourself and develop a healthier inner dialogue",
      date: "January 2026",
      participants: 25
    },
    {
      title: "Communication Skills for Better Relationships",
      description: "Improve your communication skills for healthier personal and professional relationships",
      date: "December 2025",
      participants: 30
    },
    {
      title: "Sleep & Mental Health",
      description: "Understanding the connection between quality sleep and mental wellbeing",
      date: "November 2025",
      participants: 20
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="gradient-primary section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="heading-primary mb-6">Interactive Workshops</h1>
          <div className="decorative-line mx-auto mb-8"></div>
          <p className="text-body max-w-3xl mx-auto">
            Join our live, interactive workshops designed to give you practical tools and techniques 
            you can start using immediately to improve your mental wellbeing.
          </p>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Upcoming Workshops</h2>
            <div className="decorative-line mx-auto"></div>
          </div>

          <div className="space-y-12">
            {workshops.map((workshop, index) => (
              <div key={workshop.id} className="card overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Workshop Image/Icon */}
                  <div className="lg:col-span-1 bg-gradient-to-br from-[#D4C4B5] to-[#C9A86C] p-8 flex flex-col items-center justify-center text-center">
                    <div className="text-6xl mb-4">{workshop.image}</div>
                    <div className="text-white">
                      <div className="text-2xl font-bold mb-2">{workshop.price}</div>
                      <div className="text-sm opacity-90">{workshop.spots}</div>
                    </div>
                  </div>
                  
                  {/* Workshop Details */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-[#8B7355]/10 text-[#8B7355] rounded-full text-sm">
                        {workshop.date}
                      </span>
                      <span className="px-3 py-1 bg-[#C9A86C]/10 text-[#C9A86C] rounded-full text-sm">
                        {workshop.time}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        {workshop.duration}
                      </span>
                    </div>
                    
                    <h3 className="heading-secondary mb-2">{workshop.title}</h3>
                    <p className="text-[#8B7355] text-xl font-medium mb-6">{workshop.subtitle}</p>
                    <p className="text-body mb-6">{workshop.description}</p>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold mb-4 text-[#3D3D3D]">What we'll cover:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {workshop.topics.map((topic, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-[#C9A86C] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted text-sm">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/contact" className="btn-primary">
                        Register Now
                      </Link>
                      <button className="btn-secondary">
                        More Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Benefits */}
      <section className="section-padding gradient-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Why Attend Our Workshops?</h2>
            <div className="decorative-line mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="heading-tertiary mb-4">Interactive Learning</h3>
              <p className="text-muted">
                Engage in real-time discussions and hands-on exercises with other participants
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="heading-tertiary mb-4">Practical Tools</h3>
              <p className="text-muted">
                Walk away with actionable techniques you can use immediately
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="heading-tertiary mb-4">Expert Guidance</h3>
              <p className="text-muted">
                Learn directly from Shubham Bhatt with personalized attention
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="heading-tertiary mb-4">Resource Materials</h3>
              <p className="text-muted">
                Get workbooks, guided meditations, and follow-up resources
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Workshops */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Previous Workshops</h2>
            <div className="decorative-line mx-auto"></div>
            <p className="text-muted max-w-2xl mx-auto mt-6">
              See what other participants have experienced in our past workshops
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastWorkshops.map((workshop, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-12 h-12 bg-[#8B7355]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">✅</span>
                </div>
                <h3 className="heading-tertiary mb-4">{workshop.title}</h3>
                <p className="text-muted mb-4">{workshop.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{workshop.date}</span>
                  <span>{workshop.participants} participants</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding gradient-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">What Participants Say</h2>
            <div className="decorative-line mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="quote text-lg mb-4">
                The mindfulness workshop completely changed how I approach stress. Shubham's guidance was incredibly helpful.
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#D4C4B5] rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👩</span>
                </div>
                <div>
                  <div className="font-medium">Priya S.</div>
                  <div className="text-sm text-gray-500">Marketing Professional</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="quote text-lg mb-4">
                I learned practical tools for managing my anxiety that I use every day. Highly recommend!
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#D4C4B5] rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👨</span>
                </div>
                <div>
                  <div className="font-medium">Rahul M.</div>
                  <div className="text-sm text-gray-500">Software Developer</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="quote text-lg mb-4">
                The emotional regulation workshop helped me understand my feelings better and communicate more effectively.
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#D4C4B5] rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👩</span>
                </div>
                <div>
                  <div className="font-medium">Anita K.</div>
                  <div className="text-sm text-gray-500">Teacher</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-secondary mb-6">Ready to Transform Your Life?</h2>
          <div className="decorative-line mx-auto mb-8"></div>
          <p className="text-body mb-8">
            Join hundreds of others who have already taken the first step towards better mental health. 
            Our workshops provide a safe, supportive environment for growth and learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Register for a Workshop
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

export default Workshops;