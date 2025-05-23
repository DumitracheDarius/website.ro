import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { ro } from 'date-fns/locale';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    navigate('/blog');
    return null;
  }

  const relatedPosts = post.relatedPosts
    .map(id => blogPosts.find(p => p.id === id))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-primary text-textPrimary flex flex-col">
      <Helmet>
        <title>{post.title} - WeSite Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} - WeSite Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.image} />
        <link rel="canonical" href={`https://wesite.com/blog/${post.slug}`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": post.image,
            "datePublished": post.date.toISOString(),
            "author": {
              "@type": "Organization",
              "name": "WeSite Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "WeSite",
              "logo": {
                "@type": "ImageObject",
                "url": "https://wesite.com/logo.webp"
              }
            },
            "description": post.excerpt
          })}
        </script>
      </Helmet>
      
      <Navbar activeSection="" scrollToSection={() => {}} />
      
      <main className="flex-grow container mx-auto px-4 py-8 mt-24">
        <Link
          to="/blog"
          className="inline-flex items-center text-accent hover:text-accent/80 transition-colors mb-8"
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to Blog
        </Link>

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
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

            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex items-center text-sm text-textSecondary">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <time dateTime={post.date.toISOString()}>
                  {format(post.date, 'd MMM yyyy', { locale: language === 'ro' ? ro : undefined })}
                </time>
              </div>
              <span className="mx-2">•</span>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                {post.readTime} min read
              </div>
            </div>
          </header>

          <div className="mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>

          <div 
            className="prose prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {relatedPosts.length > 0 && (
            <div className="border-t border-accent/20 pt-8">
              <h2 className="text-xl font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  relatedPost && (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="group block bg-secondary rounded-lg overflow-hidden border border-accent/20 hover:border-accent/40 transition-all duration-300"
                    >
                      <div className="relative h-48">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold mb-2 group-hover:text-accent transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-textSecondary line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </Link>
                  )
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;