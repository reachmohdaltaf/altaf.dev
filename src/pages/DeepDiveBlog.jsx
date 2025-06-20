import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { deepDiveGroup1 } from './content';
import { Button } from '@/components/ui/button';

const DeepDiveDetail = () => {
  const { slug } = useParams();
  const blog = deepDiveGroup1.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!blog) return <div className="p-4 text-red-500">Blog not found</div>;

  return (
    <div className="px-4 py-8 max-w-4xl mx-auto">
      {/* Back button */}
      <div className="mb-6">
        <Link to="/">
          <Button variant="ghost" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to articles
          </Button>
        </Link>
      </div>

      {/* Article content */}
      <article className="prose prose-invert max-w-none">
        <h1 className="text-3xl md:text-4xl font-bold text-accent mb-2">
          {blog.title}
        </h1>
        
        <div className="my-6 border-b border-gray-700"></div>
        
        {/* Image container with max width and centered */}
        <div className="my-8 flex justify-center">
          <img
            src={blog.img}
            alt={blog.title}
            className="rounded-lg shadow-lg max-h-96 w-auto object-contain"
          />
        </div>

        {/* Content with better typography */}
        <div className="text-gray-300 text-lg leading-relaxed space-y-4">
          {blog.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Back to top button */}
        <div className="mt-12 flex justify-center">
          <Button
            variant="secondary"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to top
          </Button>
        </div>
      </article>
    </div>
  );
};

export default DeepDiveDetail;