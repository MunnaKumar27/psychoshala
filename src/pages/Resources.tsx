import React from 'react';

const Resources: React.FC = () => {
  const freeResources = [
    {
      id: 1,
      title: "From Overwhelm to Calm",
      subtitle: "FREE 45-minute Training",
      description: "In this pre-recorded training you'll discover practical techniques to shift from overwhelm to a state of calm and clarity.",
      type: "Video Training",
      duration: "45 minutes",
      image: "🎥",
      features: [
        "Why traditional 'calm down' advice doesn't work",
        "The hidden reason your mind stays stuck in overwhelm",
        "How to recognize your unique stress patterns",
        "A powerful technique to shift from chaos to clarity",
        "5 keys for lasting mental calm"
      ]
    },
    {
      id: 2,
      title: "Understanding Your Inner Strengths",
      subtitle: "FREE E-book & Worksheet",
      description: "A comprehensive guide designed to help you discover and nurture your inner resilience and personal strengths.",
      type: "E-book",
      duration: "30 pages",
      image: "📖",
      features: [
        "Explore the concepts of inner strengths and resilience",
        "Identify what sparks motivation in you",
        "How to go strength-spotting in daily life",
        "Reflective worksheets for personal growth",
        "Creative exercises for self-expression"
      ]
    }
  ];

  const guides = [
    {
      title: "Daily Mindfulness Practices",
      description: "Simple mindfulness exercises you can do anywhere, anytime",
      category: "Mindfulness",
      readTime: "5 min read",
      image: "🧘"
    },
    {
      title: "Anxiety Management Toolkit",
      description: "Evidence-based techniques for managing anxiety in the moment",
      category: "Anxiety",
      readTime: "8 min read",
      image: "🌊"
    },
    {
      title: "Building Emotional Resilience",
      description: "Strategies to bounce back from life's challenges with strength",
      category: "Resilience",
      readTime: "10 min read",
      image: "💪"
    },
    {
      title: "Sleep & Mental Health",
      description: "Understanding the crucial connection between sleep and wellbeing",
      category: "Sleep",
      readTime: "7 min read",
      image: "🌙"
    },
    {
      title: "Communication in Relationships",
      description: "Healthy communication patterns for stronger relationships",
      category: "Relationships",
      readTime: "12 min read",
      image: "💬"
    },
    {
      title: "Workplace Stress Management",
      description: "Practical strategies for managing stress in professional environments",
      category: "Work-Life",
      readTime: "9 min read",
      image: "💼"
    }
  ];

  const tools = [
    {
      title: "Mood Tracking Journal",
      description: "Track your daily mood patterns and identify triggers",
      type: "PDF Download",
      image: "📊"
    },
    {
      title: "Gratitude Practice Guide",
      description: "30-day gratitude practice with prompts and exercises",
      type: "PDF Download",
      image: "🙏"
    },
    {
      title: "Breathing Exercise Collection",
      description: "10 different breathing techniques for various situations",
      type: "PDF Download",
      image: "🌬️"
    },
    {
      title: "Self-Care Planning Worksheet",
      description: "Create a personalized self-care routine that works for you",
      type: "PDF Download",
      image: "🌸"
    }
  ];

  const audioResources = [
    {
      title: "Body Scan Meditation",
      description: "20-minute guided body scan for deep relaxation",
      duration: "20 min",
      image: "🎧"
    },
    {
      title: "Anxiety Relief Meditation",
      description: "Calming meditation specifically designed for anxiety",
      duration: "15 min",
      image: "🎧"
    },
    {
      title: "Sleep Stories for Adults",
      description: "Gentle stories to help you drift off to peaceful sleep",
      duration: "25 min",
      image: "🎧"
    },
    {
      title: "Morning Mindfulness",
      description: "Start your day with intention and clarity",
      duration: "10 min",
      image: "🎧"
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="gradient-primary section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="heading-primary mb-6">Free Resources</h1>
          <div className="decorative-line mx-auto mb-8"></div>
          <p className="text-body max-w-3xl mx-auto">
            Access a comprehensive collection of free mental health resources, tools, and guides 
            to support your wellness journey. All created with care by Shubham Bhatt.
          </p>
        </div>
      </section>

      {/* Featured Free Resources */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Featured Free Resources</h2>
            <div className="decorative-line mx-auto"></div>
          </div>

          <div className="space-y-12">
            {freeResources.map((resource, index) => (
              <div key={resource.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="card p-8 text-center">
                    <div className="text-6xl mb-6">{resource.image}</div>
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                      <span className="px-3 py-1 bg-[#8B7355]/10 text-[#8B7355] rounded-full text-sm">
                        {resource.type}
                      </span>
                      <span className="px-3 py-1 bg-[#C9A86C]/10 text-[#C9A86C] rounded-full text-sm">
                        {resource.duration}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                        FREE
                      </span>
                    </div>
                    <button className="btn-primary w-full">
                      Download Now
                    </button>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-0' : ''}>
                  <h3 className="heading-secondary mb-4">{resource.title}</h3>
                  <p className="text-[#8B7355] text-xl font-medium mb-6">{resource.subtitle}</p>
                  <p className="text-body mb-8">{resource.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold mb-4 text-[#3D3D3D]">What's included:</h4>
                    <ul className="space-y-3">
                      {resource.features.map((feature, idx) => (
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

      {/* Practical Guides */}
      <section className="section-padding gradient-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Practical Guides</h2>
            <div className="decorative-line mx-auto"></div>
            <p className="text-muted max-w-2xl mx-auto mt-6">
              Quick reads with actionable advice for common mental health challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <div key={index} className="card p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{guide.image}</div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-[#8B7355]/10 text-[#8B7355] rounded-full text-sm">
                    {guide.category}
                  </span>
                  <span className="text-sm text-gray-500">{guide.readTime}</span>
                </div>
                <h3 className="heading-tertiary mb-4">{guide.title}</h3>
                <p className="text-muted mb-6">{guide.description}</p>
                <button className="btn-secondary w-full">
                  Read Guide
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Tools */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Downloadable Tools</h2>
            <div className="decorative-line mx-auto"></div>
            <p className="text-muted max-w-2xl mx-auto mt-6">
              Practical worksheets and tools you can use in your daily life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-4xl mb-4">{tool.image}</div>
                <div className="mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {tool.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-[#3D3D3D]">{tool.title}</h3>
                <p className="text-muted text-sm mb-6">{tool.description}</p>
                <button className="btn-accent w-full text-sm">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audio Resources */}
      <section className="section-padding gradient-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Guided Audio Resources</h2>
            <div className="decorative-line mx-auto"></div>
            <p className="text-muted max-w-2xl mx-auto mt-6">
              Meditation, relaxation, and mindfulness audio guides
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audioResources.map((audio, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-4xl mb-4">{audio.image}</div>
                <div className="mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                    {audio.duration}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-[#3D3D3D]">{audio.title}</h3>
                <p className="text-muted text-sm mb-6">{audio.description}</p>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-[#8B7355] text-white px-3 py-2 rounded-lg text-sm">
                    ▶️ Play
                  </button>
                  <button className="flex-1 border border-[#8B7355] text-[#8B7355] px-3 py-2 rounded-lg text-sm">
                    ⬇️ Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Browse by Category</h2>
            <div className="decorative-line mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Anxiety", icon: "🌊", count: 12 },
              { name: "Depression", icon: "☁️", count: 8 },
              { name: "Mindfulness", icon: "🧘", count: 15 },
              { name: "Sleep", icon: "🌙", count: 6 },
              { name: "Relationships", icon: "💕", count: 10 },
              { name: "Work-Life", icon: "⚖️", count: 9 }
            ].map((category, index) => (
              <div key={index} className="text-center p-4 rounded-xl border border-gray-200 hover:border-[#8B7355] hover:shadow-md transition-all cursor-pointer">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-medium text-[#3D3D3D] mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} resources</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding gradient-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-secondary mb-6">Get New Resources First</h2>
          <div className="decorative-line mx-auto mb-8"></div>
          <p className="text-body mb-8">
            Subscribe to receive new free resources, tools, and guides directly in your inbox. 
            Plus, get exclusive access to bonus materials not available anywhere else.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Get Resources
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resources;