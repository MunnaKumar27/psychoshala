import React from 'react';
import { Link } from 'react-router-dom';

const Blogs: React.FC = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "Understanding Anxiety: What Your Mind is Really Telling You",
      excerpt: "Anxiety isn't your enemy – it's your mind's way of trying to protect you. Learn how to listen to what it's really saying and transform your relationship with anxious thoughts.",
      category: "Mental Health",
      readTime: "8 min read",
      date: "December 28, 2025",
      image: "🧠",
      featured: true
    },
    {
      id: 2,
      title: "The Science of Self-Compassion: Why Being Kind to Yourself Matters",
      excerpt: "Research shows that self-compassion is more effective than self-criticism for motivation and wellbeing. Discover practical ways to be your own best friend.",
      category: "Self-Care",
      readTime: "6 min read",
      date: "December 25, 2025",
      image: "💖",
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 3,
      title: "5 Mindfulness Practices You Can Do in Under 5 Minutes",
      excerpt: "Busy schedule? No problem. These quick mindfulness exercises fit into any day and provide immediate stress relief.",
      category: "Mindfulness",
      readTime: "4 min read",
      date: "December 22, 2025",
      image: "🧘‍♀️"
    },
    {
      id: 4,
      title: "Breaking the People-Pleasing Cycle",
      excerpt: "Learn to set healthy boundaries and prioritize your own needs without feeling guilty.",
      category: "Boundaries",
      readTime: "7 min read",
      date: "December 20, 2025",
      image: "🛡️"
    },
    {
      id: 5,
      title: "The Link Between Sleep and Mental Health",
      excerpt: "Discover how your sleep patterns affect your emotional wellbeing and practical tips for better rest.",
      category: "Wellness",
      readTime: "9 min read",
      date: "December 18, 2025",
      image: "🌙"
    },
    {
      id: 6,
      title: "Navigating Difficult Conversations with Confidence",
      excerpt: "Tools and strategies for having challenging discussions while maintaining relationships.",
      category: "Communication",
      readTime: "6 min read",
      date: "December 15, 2025",
      image: "💬"
    },
    {
      id: 7,
      title: "Building Emotional Resilience in Uncertain Times",
      excerpt: "How to develop the inner strength to bounce back from life's challenges.",
      category: "Resilience",
      readTime: "8 min read",
      date: "December 12, 2025",
      image: "💪"
    },
    {
      id: 8,
      title: "The Power of Gratitude: More Than Just Positive Thinking",
      excerpt: "Scientific evidence for gratitude practices and how to make them genuinely transformative.",
      category: "Positive Psychology",
      readTime: "5 min read",
      date: "December 10, 2025",
      image: "🙏"
    }
  ];

  const categories = [
    { name: "Mental Health", count: 24, color: "bg-blue-100 text-blue-700" },
    { name: "Mindfulness", count: 18, color: "bg-green-100 text-green-700" },
    { name: "Self-Care", count: 15, color: "bg-pink-100 text-pink-700" },
    { name: "Relationships", count: 12, color: "bg-purple-100 text-purple-700" },
    { name: "Wellness", count: 10, color: "bg-yellow-100 text-yellow-700" },
    { name: "Boundaries", count: 8, color: "bg-red-100 text-red-700" }
  ];

  const popularPosts = [
    "Understanding Anxiety: What Your Mind is Really Telling You",
    "The Science of Self-Compassion",
    "5 Signs You Might Be Experiencing Burnout",
    "How to Support a Friend Through Mental Health Struggles",
    "Building Daily Habits for Better Mental Health"
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="gradient-primary section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="heading-primary mb-6">Mental Wellness Blog</h1>
          <div className="decorative-line mx-auto mb-8"></div>
          <p className="text-body max-w-3xl mx-auto">
            Insights, tips, and evidence-based advice for mental health and personal growth. 
            Written by Shubham Bhatt to help you on your wellness journey.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            <section className="mb-16">
              <h2 className="heading-secondary mb-8">Featured Articles</h2>
              <div className="space-y-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="card overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="md:col-span-1 bg-gradient-to-br from-[#D4C4B5] to-[#C9A86C] p-8 flex items-center justify-center">
                        <span className="text-6xl">{post.image}</span>
                      </div>
                      <div className="md:col-span-2 p-8">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className={`px-3 py-1 rounded-full text-sm bg-[#8B7355]/10 text-[#8B7355]`}>
                            {post.category}
                          </span>
                          <span className="text-sm text-gray-500">{post.readTime}</span>
                          <span className="text-sm text-gray-500">{post.date}</span>
                        </div>
                        <h3 className="heading-tertiary mb-4 hover:text-[#8B7355] transition-colors">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="text-muted mb-6 leading-relaxed">{post.excerpt}</p>
                        <Link to={`/blog/${post.id}`} className="link-underline text-[#8B7355] font-medium">
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Recent Posts */}
            <section>
              <h2 className="heading-secondary mb-8">Recent Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recentPosts.map((post) => (
                  <article key={post.id} className="card p-6">
                    <div className="text-4xl mb-4">{post.image}</div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 rounded-full text-sm bg-[#C9A86C]/10 text-[#C9A86C]">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 hover:text-[#8B7355] transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-muted mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <Link to={`/blog/${post.id}`} className="link-underline text-[#8B7355] font-medium text-sm">
                        Read More →
                      </Link>
                      <span className="text-sm text-gray-400">{post.date}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="btn-secondary">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* About */}
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#3D3D3D]">About This Blog</h3>
                <p className="text-muted mb-4">
                  Hi, I'm Shubham Bhatt. I write about mental health, psychology, and personal growth 
                  to make these topics accessible and practical for everyone.
                </p>
                <Link to="/contact" className="btn-accent text-sm">
                  Get in Touch
                </Link>
              </div>

              {/* Categories */}
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#3D3D3D]">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-sm ${category.color}`}>
                        {category.name}
                      </span>
                      <span className="text-sm text-gray-500">{category.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Posts */}
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#3D3D3D]">Popular Posts</h3>
                <ul className="space-y-3">
                  {popularPosts.map((post, index) => (
                    <li key={index}>
                      <Link to="#" className="text-sm text-muted hover:text-[#8B7355] transition-colors leading-relaxed">
                        {index + 1}. {post}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className="card p-6 gradient-secondary">
                <h3 className="text-xl font-semibold mb-4 text-[#3D3D3D]">Stay Updated</h3>
                <p className="text-muted mb-6 text-sm">
                  Get new articles delivered to your inbox along with exclusive content and resources.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/20"
                  />
                  <button type="submit" className="btn-primary w-full">
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Tags */}
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#3D3D3D]">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "anxiety", "mindfulness", "self-care", "mental-health", 
                    "therapy", "wellness", "stress", "meditation", "boundaries", 
                    "resilience", "gratitude", "sleep", "relationships"
                  ].map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm hover:bg-[#8B7355] hover:text-white transition-colors cursor-pointer">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="section-padding gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-secondary mb-6">Ready to Take the Next Step?</h2>
          <div className="decorative-line mx-auto mb-8"></div>
          <p className="text-body mb-8">
            If you've found these articles helpful, consider working with me one-on-one 
            or joining one of my comprehensive courses for deeper transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/mentoring" className="btn-primary">
              1-on-1 Sessions
            </Link>
            <Link to="/courses" className="btn-secondary">
              View Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;