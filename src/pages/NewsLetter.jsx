import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace with your actual email
    const yourEmail = 'reachmohdaltaf@example.com';
    const subject = 'New Newsletter Subscription';
    const body = `Please subscribe this email to your newsletter: ${email}`;

    // Create mailto link
    window.location.href = `mailto:${yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Simulate success after a short delay
    setTimeout(() => {
      setIsSuccess(true);
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-bold text-primary-foreground mb-4">
        {isSuccess ? 'Thank You!' : 'Subscribe to our Newsletter'}
      </h1>
      
      {isSuccess ? (
        <p className="text-foreground mb-6">
          You've been successfully subscribed! Thank you for joining.
        </p>
      ) : (
        <>
          <p className="text-foreground mb-6">
            Stay updated with my latest projects and articles.
            Enter your email below to subscribe.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              variant={'secondary'} 
              className="w-full sm:w-auto"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
        </>
      )}
    </div>
  );
};

export default NewsLetter;