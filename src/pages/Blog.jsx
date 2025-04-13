import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {blogs} from "./content.js";

const Blog = () => {
    const { slug } = useParams();
    const blog = blogs.find((b) => b.slug === slug);
  
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
      <div className="text-accent px-6 md:px-32 py-16">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-sm text-gray-400 mb-8">{blog.date}</p>
        <p className="text-lg leading-7 whitespace-pre-line">
          {blog.content}
        </p>
      </div>
    );
  };

export default Blog