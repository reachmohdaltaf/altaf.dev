import React, { useState } from 'react';
import { projects } from "./content.js";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from 'lucide-react';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedProject, setExpandedProject] = useState(null);

  // Extract all unique tags from projects
  const allTags = ['all', ...new Set(projects.flatMap(project => project.tags || []))];

  // Filter projects based on search and active filter
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || 
                        (project.tags && project.tags.includes(activeFilter));
    return matchesSearch && matchesFilter;
  });

  const toggleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-accent mb-2">My Projects</h1>
        <p className="text-lg text-muted-foreground">
          A collection of my work and experiments
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <Input
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {allTags.map(tag => (
            <Button
              key={tag}
              variant={activeFilter === tag ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(tag)}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags?.map(tag => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className={`text-muted-foreground ${
                    expandedProject === project.id ? '' : 'line-clamp-3'
                  }`}>
                    {project.description}
                  </p>

                  {project.features && expandedProject === project.id && (
                    <div className="space-y-2">
                      <h4 className="font-medium">Key Features:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.technologies && expandedProject === project.id && (
                    <div className="space-y-2">
                      <h4 className="font-medium">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3 pt-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => toggleExpand(project.id)}
                    >
                      {expandedProject === project.id ? 'Show Less' : 'Read More'}
                    </Button>
                    {project.demoLink && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubLink && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          View Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-xl font-medium mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              {searchTerm ? 'Try a different search term' : 'No projects in this category'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;