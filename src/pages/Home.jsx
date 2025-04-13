import { Button } from "@/components/ui/button";
import React from "react";
import { blogs } from "./content.js";
import { Link } from "react-router-dom";

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
          {blogs.slice(0, 3).map((blog, index) => (
            <Link key={blog.id} to={`/blog/${blog.slug}`}>
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
    </div>
  );
};

export default Home;
