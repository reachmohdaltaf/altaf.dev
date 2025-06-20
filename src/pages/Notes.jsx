import React, { useState } from 'react';
import { blogs } from "./content.js";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Notes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Extract unique categories from blogs
  const categories = ['all', ...new Set(blogs.flatMap(blog => blog.categories || []))];

  // Filter notes based on search and category
  const filteredNotes = blogs.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         note.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || 
                          (note.categories && note.categories.includes(activeCategory));
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-accent mb-2">Notes</h1>
        <p className="text-lg text-muted-foreground">
          Random thoughts, ideas, and things I want to remember
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <Input
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
        </div>

        {/* Category Chips */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      {/* Notes Grid */}
      <div className="grid gap-4">
        {filteredNotes.length > 0 ? (
          filteredNotes.map(note => (
            <Card key={note.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold mb-1">{note.title}</h2>
                    <p className="text-sm text-muted-foreground mb-2">{note.date}</p>
                  </div>
                  {note.isNew && (
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                      New
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {note.categories?.map(category => (
                    <span 
                      key={category} 
                      className="text-xs px-2 py-1 bg-secondary rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                
                <p className="text-muted-foreground whitespace-pre-line line-clamp-3">
                  {note.content}
                </p>
                
                <div className="mt-4 flex justify-end">
                  <Button variant="ghost" size="sm" asChild>
                    <a href={`/blog/${note.slug}`}>Read more →</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No notes found</h3>
            <p className="text-muted-foreground">
              {searchTerm ? 'Try a different search term' : 'No notes in this category'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;