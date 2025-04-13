import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { techBlogs } from './content.js';

const TechBlogs = () => {
  const { slug } = useParams();
  const blog = techBlogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="text-accent flex items-center justify-center h-screen">
        <h2 className="text-2xl font-semibold">404 - Blog not found</h2>
      </div>
    );
  }
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  return (
    <div className="text-accent px-6 md:px-32 py-16 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-400 mb-6">{blog.date}</p>
      
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto rounded-xl mb-8 shadow-md"
        />
      )}

      <p className="text-lg leading-7 whitespace-pre-line">
        {blog.content}
      </p>
    </div>
  );
};

export default TechBlogs;
