import React, { useState } from 'react';
import { blogs, techBlogs, deepDiveGroup1 } from "./content.js";
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const MyBlog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'notes', 'tech', 'deepdives'

  // Combine all blog types
  const allBlogs = [
    ...blogs.map(blog => ({ ...blog, type: 'note' })),
    ...techBlogs.map(blog => ({ ...blog, type: 'tech' })),
    ...deepDiveGroup1.map(blog => ({ ...blog, type: 'deepdive' }))
  ];

  // Filter blogs based on search term and active tab
  const filteredBlogs = allBlogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         blog.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === 'all' || blog.type === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-accent mb-2">My Blog</h1>
        <p className="text-lg text-muted-foreground">
          All my thoughts, tutorials, and deep dives in one place.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <Input
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
          <Button variant="secondary">Search</Button>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Button
            variant={activeTab === 'all' ? 'default' : 'outline'}
            onClick={() => setActiveTab('all')}
          >
            All ({allBlogs.length})
          </Button>
          <Button
            variant={activeTab === 'note' ? 'default' : 'outline'}
            onClick={() => setActiveTab('note')}
          >
            Notes ({blogs.length})
          </Button>
          <Button
            variant={activeTab === 'tech' ? 'default' : 'outline'}
            onClick={() => setActiveTab('tech')}
          >
            Tech ({techBlogs.length})
          </Button>
          <Button
            variant={activeTab === 'deepdive' ? 'default' : 'outline'}
            onClick={() => setActiveTab('deepdive')}
          >
            Deep Dives ({deepDiveGroup1.length})
          </Button>
        </div>
      </div>

      {/* Blog List */}
      <div className="grid gap-6">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <Card key={`${blog.type}-${blog.id}`} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {blog.img && (
                    <div className="md:w-1/4">
                      <img
                        src={blog.img}
                        alt={blog.title}
                        className="rounded-lg object-cover w-full h-full max-h-40"
                      />
                    </div>
                  )}
                  <div className={blog.img ? 'md:w-3/4' : 'w-full'}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 bg-secondary rounded-full">
                        {blog.type === 'note' ? 'Note' : 
                         blog.type === 'tech' ? 'Tech' : 'Deep Dive'}
                      </span>
                      {blog.date && (
                        <span className="text-sm text-muted-foreground">
                          {blog.date}
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {blog.content.substring(0, 200)}...
                    </p>
                    <Link 
                      to={blog.type === 'note' ? `/blog/${blog.slug}` : 
                          blog.type === 'tech' ? `/tech/${blog.slug}` : 
                          `/deep-dive/${blog.slug}`}
                    >
                      <Button variant="outline">Read More</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium">No blogs found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBlog;