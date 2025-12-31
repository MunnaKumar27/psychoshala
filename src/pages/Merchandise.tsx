import React from 'react';

const Merchandise: React.FC = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Mental Wellness Journal",
      description: "A beautifully designed 90-day guided journal for mindfulness, gratitude, and self-reflection.",
      price: "₹899",
      originalPrice: "₹1,299",
      image: "📓",
      category: "Journals",
      bestseller: true,
      features: [
        "90 days of guided prompts",
        "Mood tracking pages",
        "Gratitude exercises",
        "Goal setting sections",
        "Premium quality paper"
      ]
    },
    {
      id: 2,
      name: "Mindfulness Art Prints Set",
      description: "Collection of 5 inspiring art prints with psychological insights and calming messages.",
      price: "₹1,499",
      originalPrice: "₹2,199",
      image: "🎨",
      category: "Art Prints",
      bestseller: false,
      features: [
        "Set of 5 prints (A4 size)",
        "High-quality matte finish",
        "Inspirational mental health quotes",
        "Ready to frame",
        "Designed by mental health professionals"
      ]
    },
    {
      id: 3,
      name: "Self-Care Toolkit Bundle",
      description: "Complete bundle including workbooks, meditation cards, and wellness tracker.",
      price: "₹2,299",
      originalPrice: "₹3,499",
      image: "🎁",
      category: "Bundles",
      bestseller: true,
      features: [
        "Self-care workbook (50 pages)",
        "Meditation cards deck",
        "Wellness tracking sheets",
        "Affirmation cards",
        "Digital bonus resources"
      ]
    }
  ];

  const products = [
    {
      id: 4,
      name: "Anxiety Relief Workbook",
      description: "Comprehensive workbook with CBT exercises and coping strategies.",
      price: "₹649",
      image: "📚",
      category: "Workbooks",
      rating: 4.8
    },
    {
      id: 5,
      name: "Mindful Living Planner",
      description: "Monthly planner incorporating mindfulness practices.",
      price: "₹1,199",
      image: "📅",
      category: "Planners",
      rating: 4.9
    },
    {
      id: 6,
      name: "Emotional Awareness Cards",
      description: "Deck of cards to help identify and process emotions.",
      price: "₹799",
      image: "🃏",
      category: "Cards",
      rating: 4.7
    },
    {
      id: 7,
      name: "Stress-Relief Tea Blend",
      description: "Organic herbal tea blend for relaxation and calm.",
      price: "₹549",
      image: "🍵",
      category: "Wellness",
      rating: 4.6
    },
    {
      id: 8,
      name: "Meditation Cushion",
      description: "Comfortable cushion for meditation and mindfulness practice.",
      price: "₹1,899",
      image: "🪑",
      category: "Accessories",
      rating: 4.8
    },
    {
      id: 9,
      name: "Therapy Session Notes",
      description: "Structured notepad for therapy sessions and reflections.",
      price: "₹449",
      image: "📝",
      category: "Journals",
      rating: 4.5
    }
  ];

  const categories = [
    { name: "All Products", count: 15, active: true },
    { name: "Journals", count: 4, active: false },
    { name: "Workbooks", count: 3, active: false },
    { name: "Art Prints", count: 2, active: false },
    { name: "Cards", count: 2, active: false },
    { name: "Bundles", count: 2, active: false },
    { name: "Accessories", count: 2, active: false }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="gradient-primary section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="heading-primary mb-6">Mental Wellness Merchandise</h1>
          <div className="decorative-line mx-auto mb-8"></div>
          <p className="text-body max-w-3xl mx-auto">
            Thoughtfully designed products to support your mental wellness journey. 
            Each item is created with psychological insights and therapeutic value in mind.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Featured Products</h2>
            <div className="decorative-line mx-auto"></div>
          </div>

          <div className="space-y-16">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="card p-8 text-center relative">
                    {product.bestseller && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Bestseller
                        </span>
                      </div>
                    )}
                    <div className="text-8xl mb-6">{product.image}</div>
                    <div className="mb-6">
                      <span className="px-3 py-1 bg-[#8B7355]/10 text-[#8B7355] rounded-full text-sm">
                        {product.category}
                      </span>
                    </div>
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-[#8B7355] mb-2">{product.price}</div>
                      <div className="text-lg text-gray-400 line-through">{product.originalPrice}</div>
                    </div>
                    <button className="btn-primary w-full mb-4">
                      Add to Cart
                    </button>
                    <button className="btn-secondary w-full">
                      View Details
                    </button>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-0' : ''}>
                  <h3 className="heading-secondary mb-4">{product.name}</h3>
                  <p className="text-body mb-8">{product.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold mb-4 text-[#3D3D3D]">Features:</h4>
                    <ul className="space-y-3">
                      {product.features.map((feature, idx) => (
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

      {/* Product Categories */}
      <section className="section-padding gradient-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-6">Shop by Category</h2>
            <div className="decorative-line mx-auto"></div>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.active 
                    ? 'bg-[#8B7355] text-white' 
                    : 'bg-white text-[#8B7355] hover:bg-[#8B7355]/10'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="card p-6 text-center">
                <div className="text-5xl mb-4">{product.image}</div>
                <div className="mb-4">
                  <span className="px-3 py-1 bg-[#C9A86C]/10 text-[#C9A86C] rounded-full text-sm">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-[#3D3D3D]">{product.name}</h3>
                <p className="text-muted text-sm mb-4">{product.description}</p>
                
                {/* Rating */}
                <div className="flex items-center justify-center mb-4">
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{i < Math.floor(product.rating) ? '⭐' : '☆'}</span>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">({product.rating})</span>
                </div>
                
                <div className="text-2xl font-bold text-[#8B7355] mb-6">{product.price}</div>
                
                <div className="space-y-3">
                  <button className="btn-primary w-full">
                    Add to Cart
                  </button>
                  <button className="btn-secondary w-full text-sm">
                    Quick View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Why Choose Psychoshala Products?</h2>
            <div className="decorative-line mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B7355]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="heading-tertiary mb-4">Therapeutic Value</h3>
              <p className="text-muted">
                Every product is designed with psychological insights and therapeutic benefits
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B7355]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="heading-tertiary mb-4">Premium Quality</h3>
              <p className="text-muted">
                High-quality materials and thoughtful design in every product
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B7355]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="heading-tertiary mb-4">Expert Designed</h3>
              <p className="text-muted">
                Created by mental health professionals with practical application in mind
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B7355]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="heading-tertiary mb-4">Fast Shipping</h3>
              <p className="text-muted">
                Quick and secure delivery across India with tracking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section-padding gradient-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Customer Reviews</h2>
            <div className="decorative-line mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex mb-4 text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
              <div className="quote text-lg mb-4">
                The Mental Wellness Journal has become my daily companion. The guided prompts really help me process my thoughts and emotions.
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#D4C4B5] rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👩</span>
                </div>
                <div>
                  <div className="font-medium">Meera P.</div>
                  <div className="text-sm text-gray-500">Teacher</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex mb-4 text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
              <div className="quote text-lg mb-4">
                The art prints are beautiful and the messages are so uplifting. They brighten my workspace every day!
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#D4C4B5] rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👨</span>
                </div>
                <div>
                  <div className="font-medium">Arjun S.</div>
                  <div className="text-sm text-gray-500">Graphic Designer</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex mb-4 text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
              <div className="quote text-lg mb-4">
                The Self-Care Toolkit Bundle is amazing value. So many useful resources in one package. Highly recommend!
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#D4C4B5] rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">👩</span>
                </div>
                <div>
                  <div className="font-medium">Kavya R.</div>
                  <div className="text-sm text-gray-500">Student</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping & Returns */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6">Shipping & Returns</h2>
            <div className="decorative-line mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="heading-tertiary mb-4">Free Shipping</h3>
              <p className="text-muted">
                Free shipping on orders above ₹999. Standard shipping rates apply for smaller orders.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="heading-tertiary mb-4">Easy Returns</h3>
              <p className="text-muted">
                30-day return policy for all products. Return in original condition for full refund.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="heading-tertiary mb-4">Secure Payment</h3>
              <p className="text-muted">
                All payments are processed securely. We accept cards, UPI, and net banking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding gradient-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-secondary mb-6">Get Exclusive Offers</h2>
          <div className="decorative-line mx-auto mb-8"></div>
          <p className="text-body mb-8">
            Subscribe to get early access to new products, exclusive discounts, 
            and special bundle offers delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Get Offers
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            Get 10% off your first order when you subscribe!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Merchandise;