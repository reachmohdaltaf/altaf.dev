import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const NewsLetter = () => {
  return (
    <div className="max-w-xl mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-bold text-primary-foreground mb-4">Subscribe to our Newsletter</h1>
      <p className="text-foreground mb-6">
        Stay updated with our latest news, articles, and exclusive offers. Enter your email below to subscribe.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Input
          type="email"
          placeholder="Enter your email"
          className="flex-1"
        />
        <Button variant={'secondary'} className="w-full sm:w-auto">Subscribe</Button>
      </div>
    </div>
  );
};

export default NewsLetter;
