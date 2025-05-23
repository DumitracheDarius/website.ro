import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { ro } from 'date-fns/locale';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { blogPosts } from '../data/blogPosts';

const BlogPage: React.FC = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedPosts, setExpandedPosts] = useState<string[]>([]);

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const togglePostExpansion = (postId: string) => {
    setExpandedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const getRelatedPosts = (postId: string) => {
    const post = blogPosts.find(p => p.id === postId);
    return post ? post.relatedPosts.map(id => blogPosts.find(p => p.id === id)).filter(Boolean) : [];
  };

  return (
    <div className="min-h-screen bg-primary text-textPrimary flex flex-col">
      <Helmet>
        <title>Blog - WeSite | Web Design și Dezvoltare</title>
        <meta name="description" content="Articole și resurse despre web design, dezvoltare, SEO și tendințe digitale. Află cele mai noi strategii pentru succesul online." />
        <meta property="og:title" content="Blog - WeSite | Web Design și Dezvoltare" />
        <meta property="og:description" content="Articole și resurse despre web design, dezvoltare, SEO și tendințe digitale. Află cele mai noi strategii pentru succesul online." />
        <meta property="og:type" content="blog" />
        <link rel="canonical" href="https://wesite.com/blog" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog WeSite",
            "description": "Articole și resurse despre web design, dezvoltare, SEO și tendințe digitale",
            "publisher": {
              "@type": "Organization",
              "name": "WeSite",
              "logo": {
                "@type": "ImageObject",
                "url": "https://wesite.com/logo.webp"
              }
            }
          })}
        </script>
      </Helmet>
      
      <Navbar activeSection="" scrollToSection={() => {}} />
      
      <main className="flex-grow container mx-auto px-4 py-8 mt-24">
        <div className="mb-8">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" />
            <input
              type="text"
              placeholder="Caută articole sau tag-uri..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-secondary border border-accent/20 rounded-lg focus:outline-none focus:border-accent text-textPrimary placeholder-textSecondary"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-secondary rounded-lg overflow-hidden border border-accent/20 hover:border-accent/40 transition-all duration-300"
              itemScope 
              itemType="https://schema.org/BlogPosting"
            >
              <meta itemProp="datePublished" content={post.date.toISOString()} />
              <meta itemProp="author" content="WeSite Team" />
              
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    itemProp="image"
                  />
                </div>
              </Link>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link to={`/blog/${post.slug}`}>
                  <h2 
                    className="text-xl font-bold mb-2 line-clamp-2 hover:text-accent transition-colors"
                    itemProp="headline"
                  >
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-textSecondary mb-4 line-clamp-3" itemProp="description">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-textSecondary mb-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <time itemProp="datePublished" dateTime={post.date.toISOString()}>
                      {format(post.date, 'd MMM yyyy', { locale: language === 'ro' ? ro : undefined })}
                    </time>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {post.readTime} min read
                  </div>
                </div>
                
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-accent hover:text-accent/80 transition-colors text-sm font-medium flex items-center"
                >
                  Read More
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;