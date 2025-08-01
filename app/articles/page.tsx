'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Oral Health', 'Cosmetic', 'Prevention', 'Treatment'];
  
  const articles = [
    {
      id: 1,
      title: "10 Essential Tips for Daily Oral Hygiene",
      excerpt: "Master the fundamentals of oral care with these proven daily habits that will keep your teeth and gums healthy for life.",
      category: "Prevention",
      author: "Dr. Sarah Asing",
      readTime: "5 min read",
      date: "March 15, 2024",
      image: "dental hygiene routine toothbrush floss mouthwash daily oral care habits healthy teeth and gums prevention routine"
    },
    {
      id: 2,
      title: "The Complete Guide to Dental Implants",
      excerpt: "Everything you need to know about dental implants, from consultation to recovery, including benefits and what to expect.",
      category: "Treatment",
      author: "Dr. Emily Rodriguez",
      readTime: "8 min read",
      date: "March 12, 2024",
      image: "dental implant procedure surgical guide titanium implant crown restoration missing tooth replacement modern dental surgery"
    },
    {
      id: 3,
      title: "Teeth Whitening: Professional vs At-Home Options",
      excerpt: "Compare professional whitening treatments with at-home alternatives to find the best solution for your smile goals.",
      category: "Cosmetic",
      author: "Dr. Michael Chen",
      readTime: "6 min read",
      date: "March 10, 2024",
      image: "teeth whitening treatment before after results professional dental whitening bright white smile cosmetic dentistry procedures"
    },
    {
      id: 4,
      title: "Understanding Gum Disease: Signs and Prevention",
      excerpt: "Learn to recognize early signs of gum disease and discover effective prevention strategies to maintain healthy gums.",
      category: "Oral Health",
      author: "Dr. Sarah Asing",
      readTime: "7 min read",
      date: "March 8, 2024",
      image: "healthy gums vs gum disease comparison periodontal health inflammation gingivitis prevention oral health examination"
    },
    {
      id: 5,
      title: "Invisalign vs Traditional Braces: Which is Right for You?",
      excerpt: "Explore the differences between clear aligners and traditional braces to make an informed orthodontic treatment decision.",
      category: "Treatment",
      author: "Dr. Michael Chen",
      readTime: "9 min read",
      date: "March 5, 2024",
      image: "invisalign clear aligners vs traditional metal braces orthodontic treatment options teeth straightening comparison"
    },
    {
      id: 6,
      title: "Children's Dental Health: Starting Early",
      excerpt: "Essential guidelines for maintaining your child's oral health from infancy through adolescence for lifelong healthy smiles.",
      category: "Prevention",
      author: "Dr. Emily Rodriguez",
      readTime: "6 min read",
      date: "March 3, 2024",
      image: "pediatric dentistry child dental examination colorful kid-friendly dental office happy children oral health care"
    },
    {
      id: 7,
      title: "Nutrition and Your Teeth: Foods That Help and Harm",
      excerpt: "Discover which foods promote dental health and which ones to limit for stronger teeth and healthier gums.",
      category: "Prevention",
      author: "Dr. Sarah Asing",
      readTime: "5 min read",
      date: "February 28, 2024",
      image: "healthy foods for teeth calcium rich dairy products crunchy vegetables nuts fruits good nutrition oral health"
    },
    {
      id: 8,
      title: "Emergency Dental Care: When to Seek Immediate Help",
      excerpt: "Know when dental issues require emergency treatment and learn first aid steps for common dental emergencies.",
      category: "Oral Health",
      author: "Dr. Emily Rodriguez",
      readTime: "7 min read",
      date: "February 25, 2024",
      image: "dental emergency care urgent treatment toothache injury first aid dental trauma professional emergency dentistry"
    },
    {
      id: 9,
      title: "The Science Behind Cavity Formation",
      excerpt: "Understand how cavities develop and learn science-based strategies to prevent tooth decay and maintain strong enamel.",
      category: "Oral Health",
      author: "Dr. Michael Chen",
      readTime: "8 min read",
      date: "February 22, 2024",
      image: "tooth decay cavity formation bacteria plaque enamel destruction dental science microscopic view oral health education"
    }
  ];

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.9), rgba(20, 184, 166, 0.9)), url('https://readdy.ai/api/search-image?query=dental%20education%20resources%20medical%20journals%20dental%20knowledge%20learning%20oral%20health%20information%20professional%20dental%20research&width=1920&height=600&seq=articles-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Dental Health Articles</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Expert insights and practical tips from our dental professionals to help you maintain optimal oral health.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48 bg-cover bg-center overflow-hidden"
                     style={{
                       backgroundImage: `url('https://readdy.ai/api/search-image?query=$%7Barticle.image%7D&width=400&height=250&seq=article-${article.id}&orientation=landscape')`
                     }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{article.author}</span>
                    <span className="mx-2">•</span>
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <Link href={`/articles/${article.id}`} className="inline-flex items-center text-blue-600 hover:text-teal-600 font-medium transition-colors cursor-pointer">
                    Read More
                    <div className="w-4 h-4 flex items-center justify-center ml-2">
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-article-line text-gray-400 text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No articles found</h3>
              <p className="text-gray-600">Try selecting a different category to see more articles.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Informed</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest dental health tips and practice updates.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}