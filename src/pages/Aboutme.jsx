import React from 'react';
import { Github, Linkedin, Globe } from 'lucide-react';

const Aboutme = () => {
  return (
    <div className="mx-auto px-4 py-10 max-w-5xl">
      <div className="md:flex md:items-start md:gap-8 mb-8">
        {/* Profile Image Section */}
        <div className="flex-shrink-0 mb-6 md:mb-0 flex flex-col items-start">
          <img
            src="https://avatars.githubusercontent.com/u/178491093?s=400&u=30d95bf24f96f67de28b565772c894790c4398f2&v=4"
            className="w-64 h-64 object-cover rounded-lg shadow-md border-2 border-primary-foreground"
            alt="Mohd Altaf"
          />

          {/* Social Links */}
          <div className="mt-4 hidden md:block space-y-2 text-center">
            <a
              href="https://www.linkedin.com/in/reachmohdaltaf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground hover:underline"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="https://github.com/reachmohdaltaf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground hover:underline"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://adowise.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground hover:underline"
            >
              <Globe size={18} /> Adowise.com
            </a>
          </div>
        </div>

        {/* Content beside and below image */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-primary-foreground mb-2">Mohd Altaf</h1>
          <p className="text-lg text-muted-foreground mb-4">
            MERN Stack Developer & Founder of{" "}
            <span className="text-primary-foreground font-semibold">Adowise.com</span>
          </p>

          <p className="text-lg mb-4">
            I'm a passionate full-stack web developer with deep expertise in MongoDB, Express.js, React, and Node.js.
            I focus on building scalable, user-friendly applications and am always exploring modern technologies to
            improve my work.
          </p>

          <p className="text-lg mb-4">
            As the founder of{" "}
            <span className="text-primary-foreground font-semibold">Adowise.com</span>, I’m on a mission to bridge the
            gap between learners and mentors through a robust platform that enables 1:1 consultations, real-time
            bookings, resume reviews, mock interviews, and more.
          </p>

          <p className="text-lg mb-4">
            I started my journey with a curiosity about how websites work, and that curiosity soon grew into a strong
            passion for development. Today, I’m committed to building tools that solve real-world problems and empower
            others.
          </p>

          <p className="text-lg mb-4">
            I enjoy creating side projects, experimenting with AI assistants, and improving app architecture. I also
            take pride in clean code, modern UI/UX, and creating intuitive user experiences.
          </p>

          <p className="text-lg mb-4">
            Outside of coding, I like researching new trends, working on animated content like my character "Pappe,"
            and spending time with family in Himachal Pradesh. I’m also active in tech communities and love connecting
            with other developers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
