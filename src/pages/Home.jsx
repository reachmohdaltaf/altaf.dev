import { Button } from "@/components/ui/button";
import React from "react";
import { blogs } from "./content.js";
import { techBlogs, projects } from "./content.js";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card.jsx";


const deepDiveGroup1 = [
  {
    img: '/graphql.webp',
    title: 'Mastering JavaScript',
    slug: 'mastering-javascript-comprehensive-guide',
  },
  {
    img: '/react.webp',
    title: 'Building Scalable React Applications',
    slug: 'building-scalable-react-applications',
  },
  {
    img: '/js.webp',
    title: 'Getting Started with Node.js',
    slug: 'getting-started-with-nodejs',
  },
  {
    img: '/redux.webp',
    title: 'The Future of Web Development in 2025',
    slug: 'the-future-of-web-development-2025',
  },
  {
    img: '/redux.webp',
    title: 'HTML & CSS: Best Practices for Beginners',
    slug: 'html-css-best-practices-for-beginners',
  },
  {
    img: '/redux.webp',
    title: 'TypeScript for JavaScript Developers',
    slug: 'typescript-for-javascript-developers',
  },
  {
    img: '/redux.webp',
    title: 'TypeScript for JavaScript Developers',
    slug: 'typescript-for-javascript-developers',
  },
  {
    img: '/redux.webp',
    title: 'TypeScript for JavaScript Developers',
    slug: 'typescript-for-javascript-developers',
  },
  
];






const Home = () => {
  return (
    <div className="text-foreground flex flex-col justify-center px-1 md:px-32">
      {/* Hero Section */}
      <section className=" flex items-center">
        <div>
          <h1 className="text-[35px] text-accent font-bold">Hey, I'm Altaf!</h1>
          <p className="mt-4 text-[17px]">
            I'm a Web Developer, open-source creator, and former professional
            chef. I've been making websites since 2019 and{" "}
            <span className="text-primary-foreground hover:underline">
              writing on this blog
            </span>{" "}
            for the past decade. <br /> <br /> I enjoy weight-lifting, reading
            sci-fi and fantasy, playing retro video games, and spending time
            with my family and friends.
          </p>
          <div className="mt-8 gap-4 flex">
            <Button size={"xl"} variant={"secondary"}>
              About me
            </Button>
            <Button size={"xl"} variant={"secondary"}>
              Newsletter
            </Button>
          </div>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </section>

      {/* Notes Section */}
      <section className="mt-10">
        <div>
          <h2 className="text-[32px] text-accent font-semibold">Notes</h2>
          <p className="mt-2 text-[16px]">
            Personal notes about life, music, projects, and everything else.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          {blogs.slice(0, 3).map((blog, index) => (
            <Link key={blog.id} to={`/blog/${blog.slug}`}>
              <div className="hover:bg-[#252630] hover:text-accent px-3 flex flex-col justify-center shadow-sm rounded-3xl cursor-pointer">
                <p className="flex items-center mt-4 gap-2">
                  {index === 0 && (
                    <Button variant={"secondary"} className="h-4 text-xs">
                      ✨new
                    </Button>
                  )}
                  <span className="text-primary-foreground font-semibold text-[16px]">
                    {blog.title}
                  </span>
                </p>
                <p className="mb-4 ">{blog.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Tech Blogs Section */}
      <section className=" mt-10">
        <div>
          <h2 className="text-[32px] text-accent font-semibold">Tech Blogs</h2>
          <p className="mt-2 text-[16px]">Guides, references, and tutorials.</p>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          {techBlogs.slice(0, 3).map((blog, index) => (
            <Link key={blog.id} to={`/tech/${blog.slug}`}>
              <div className="hover:bg-[#252630] px-3 flex flex-col justify-center shadow-sm rounded-3xl cursor-pointer">
                <p className="flex items-center mt-4 gap-2">
                  {index === 0 && (
                    <Button variant={"secondary"} className="h-4 text-xs">
                      ✨new
                    </Button>
                  )}
                  <span className="text-primary-foreground font-semibold text-[16px]">
                    {blog.title}
                  </span>
                </p>
                <p className="mb-4">{blog.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Deep Dives Section */}
      <section className="mt-10">
        <h1 className="text-[32px] text-accent font-semibold">Deep Dives</h1>
        <p className="mt-2 text-[16px]">In-depth articles and explorations.</p>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {deepDiveGroup1.map((blog, index) => (
              <Link key={blog.id} to={`/deep-dive/${blog.slug}`}>
                <div className="hover:bg-[#252630] px-3 flex flex-col justify-center shadow-sm rounded-md bg-secondary border border-gray-700 cursor-pointer">
                  <p className="flex items-center mt-4 gap-2">
                    
                    <span className="text-acccent font-semibold flex gap-3 justify-center items-center text-[16px]">
                      <img src={blog.img} className="h-8" alt="" />{blog.title}
                    </span>
                  </p>
                  <p className="mb-4">{blog.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>



      <section className="projects md:px-4 py-6">
        <div>
          <h3 className="text-[32px] text-accent font-semibold mb-6">
            Projects
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardContent>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm">{project.year}</p>
                    <Link
                      to={project.articleLink}
                      className="text-primary-foreground font-semibold hover:underline"
                    >
                      {project.title}
                    </Link>
                    <p className="card description">{project.description}</p>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <Link to={project.articleLink}>
                      <Button size="sm" variant="secondary">
                        Article
                      </Button>
                    </Link>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="secondary">
                        Demo
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
