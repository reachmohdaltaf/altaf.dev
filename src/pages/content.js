// data/blogs.js
export const blogs = [
  {
    id: 1,
    title: "Building Adowise: From Idea to Execution",
    slug: "building-adowise",
    date: "June 2025",
    content: `Adowise started as a simple idea to bridge students with the right mentors in tech. In this blog, I walk through how I validated the idea, started building it with React and Node.js, and the challenges I’m facing as a solo founder.`
  },
  {
    id: 2,
    title: "Behind the Scenes of Adowise Tech Stack",
    slug: "adowise-tech-stack",
    date: "June 2025",
    content: `What powers Adowise under the hood? I break down the tools and frameworks I'm using—MongoDB, Express, React, Node.js, Tailwind—and share why I chose them. I also talk about future plans like scaling, auth, and calendar integration.`
  },
  {
    id: 3,
    title: "Lessons I'm Learning While Building My First Real Startup",
    slug: "adowise-lessons",
    date: "June 2025",
    content: `Adowise is my first serious startup attempt. I'm learning how to manage time, handle feedback, write clean code, and build something people want. This blog is a raw and honest reflection of what I'm figuring out every day.`
  }
];


// data/techBlogs.js
export const techBlogs = [
  {
    id: 1,
    title: "Understanding React Hooks in Simple Terms",
    slug: "react-hooks-simple",
    date: "March 2025",
    image: "https://via.placeholder.com/800x400",
    content: `React Hooks like useState and useEffect can be confusing at first. In this post, I break them down with real examples and explain how they make your components cleaner.

The useState hook lets you add state to functional components without converting them into classes. You just call useState with an initial value, and it returns an array with the current state and a function to update it.

useEffect, on the other hand, is for handling side effects. Think of things like fetching data, setting up event listeners, or manually updating the DOM.

Example:
useEffect(() => {
  console.log("Component mounted");
  return () => console.log("Component unmounted");
}, []);

This runs only once, like componentDidMount in class components.

I’ve used these hooks in multiple projects, and once you understand them, your code becomes way more readable and manageable.`
  },
  {
    id: 2,
    title: "My VS Code Setup for Web Development",
    slug: "vs-code-setup",
    date: "Jan 2025",
    image: "https://via.placeholder.com/800x400",
    content: `VS Code is my go-to editor for all things web dev. In this post, I share my go-to extensions and themes that improve productivity.

Extensions I recommend:
- Prettier: For auto-formatting
- ESLint: For linting JS
- GitLens: For better Git history
- Live Server: For live preview

Theme: I use "One Dark Pro" because it's clean and easy on the eyes.

Settings:
I always enable auto save, format on save, and set up custom keybindings for common actions. VS Code can be a productivity machine once it's customized to your workflow.

Don’t forget to sync your settings so you can keep your setup across machines!`
  },
  {
    id: 3,
    title: "From Vanilla JS to React: My Learning Path",
    slug: "vanilla-js-to-react",
    date: "Feb 2025",
    image: "https://via.placeholder.com/800x400",
    content: `When I started with HTML, CSS, and JS, I had no idea what React was. But over time, I realized I needed a better way to build UIs, especially when apps got complex.

My transition looked like this:
1. Mastering the DOM with JS
2. Learning about components and reusability
3. Understanding the need for state management
4. Diving into JSX, props, and hooks

I used YouTube channels like Net Ninja and freeCodeCamp. Building small projects like a Todo app or a calculator helped me practice what I learned.

Now, I build everything in React — from simple UIs to full-fledged apps. If you're still stuck in vanilla JS, React might feel hard at first, but it's totally worth it.`
  },
  {
    id: 4,
    title: "Getting Started with Node.js and Express",
    slug: "nodejs-express-intro",
    date: "April 2025",
    image: "https://via.placeholder.com/800x400",
    content: `Backend development used to scare me. But once I understood how Node.js and Express work together, it started making sense.

In this post, I guide you through:
- Installing Node.js
- Creating your first Express server
- Setting up routes
- Sending JSON data
- Using middleware

Example code:
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello from backend!');
});
app.listen(3000);

With this setup, you can build APIs, connect to databases, and handle requests from your frontend. Express makes backend development beginner-friendly.`
  },
  {
    id: 5,
    title: "Top 5 Git Commands Every Dev Should Know",
    slug: "essential-git-commands",
    date: "May 2025",
    image: "https://via.placeholder.com/800x400",
    content: `Git used to confuse me. All the branching, merging, and pushing was overwhelming. But once I learned these 5 commands, everything changed:

1. git init - Start a repo
2. git add . - Stage changes
3. git commit -m "message" - Commit changes
4. git push - Push to remote
5. git pull - Pull from remote

Bonus: git status and git log help a lot in tracking changes.

Once you get used to these, working with Git becomes second nature. Version control is a must-have skill for every dev, and learning it early will save you a lot of headaches.`
  }
];

// data/projects.js
export const projects = [
  {
    id: 'Adowise',
    year: '2025',
    title: 'Adowise - Mentorship Platform',
    description: 'Connect with mentors and mentees easily.',
    articleLink: '/projects/adowise',
    demoLink: 'https://adowise.com',
    article: {
      overview:
        'Adowise is a platform that connects mentors with mentees, facilitating knowledge sharing and professional growth.',
      features: [
        'User profiles for mentors and mentees',
        'Messaging system for easy communication',
        'Resource sharing and collaboration tools',
        'Feedback and rating system',
      ],
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      challenges:
        'Ensuring real-time communication and data synchronization between users.',
      learnings:
        'Learned about dynamic DOM manipulation, handling form data, and improving UX for generating PDF/print-friendly layouts.',
    },
  },
   {
    id: 'Remote Jobs Platform',
    year: '2025',
    title: 'Remote Jobs Platform',
    description: 'Find and post remote job opportunities.',
    articleLink: '/projects/remote-jobs-platform',
    demoLink: 'https://remote-jobs-platform.vercel.app/',
    article: {
      overview:
        'A platform for users to find and post remote job listings. It includes features for filtering jobs by categories, applying online, and managing job posts.',
      features: [
        'Post and view jobs',
        'Filter by category and location',
        'Job details and apply option',
      ],
      techStack: ['Next.js', 'Tailwind CSS', 'MongoDB'],
      challenges:
        'Creating a scalable job filtering system and managing user submissions securely.',
      learnings:
        'Enhanced understanding of Next.js routing, MongoDB schema design, and building full-stack applications.',
    },
  },
  {
    id: 'Wrytit',
    year: '2025',
    title: 'Blog Platform - Wrytit',
    description: 'A platform for sharing and discovering blog posts.',
    articleLink: '/projects/wrytit',
    demoLink: 'https://wrytit.vercel.app/',
    article: {
      overview:
        'Wrytit is a platform for sharing and discovering blog posts.',
      features: [
        'User profiles for authors and readers',
        'Commenting system for discussions',
        'Tagging and categorization of posts',
        'Bookmarking and saving favorite articles',
      ],
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      challenges:
        'Ensuring smooth user experience with real-time updates and efficient data fetching.',
      learnings:
        'Gained experience in building RESTful APIs, managing user authentication, and optimizing performance for a content-heavy application.',
    },
  },
  {
    id: 'Invozo',
    year: '2025',
    title: 'Invozo - Bill Maker',
    description: 'Generate and manage bills effortlessly.',
    articleLink: '/projects/invozo',
    demoLink: 'https://invozo-pges.vercel.app/',
    article: {
      overview:
        'Invozo is a simple yet powerful bill-making web app that allows users to generate professional invoices quickly and easily. Designed with small businesses and freelancers in mind, it focuses on speed, clarity, and ease of use.',
      features: [
        'Add customer and item details',
        'Auto-calculate totals and taxes',
        'Download or print invoices',
        'Responsive and clean UI',
      ],
      techStack: ['HTML', 'CSS', 'JavaScript'],
      challenges:
        'Formatting invoice layouts properly across devices and ensuring printable view looked professional.',
      learnings:
        'Learned about dynamic DOM manipulation, handling form data, and improving UX for generating PDF/print-friendly layouts.',
    },
  },

  {
    id: 'Connectify',
    year: '2025',
    title: 'Connectify - Social App',
    description: 'A simple social media platform.',
    articleLink: '/projects/connectify',
    demoLink: 'https://connectify-h8zy.onrender.com/',
    article: {
      overview:
        'Connectify is a basic social media platform that allows users to post updates, like posts, and interact with others. It aims to provide a clean and minimal social experience.',
      features: [
        'Post and delete updates',
        'Like and comment features',
        'User profile section',
      ],
      techStack: ['React', 'Tailwind CSS', 'Firebase'],
      challenges:
        'Managing real-time updates and user authentication.',
      learnings:
        'Got hands-on experience with Firebase authentication, Firestore, and React component architecture.',
    },
  },
  {
    id: 'Chatify',
    year: '2025',
    title: 'Chatify - Realtime Chat App',
    description: 'Chat with friends in real-time.',
    articleLink: '/projects/chatify',
    demoLink: 'https://realtime-chat-application-6w8u.onrender.com/',
    article: {
      overview:
        'Chatify is a real-time chat application where users can join chat rooms and message instantly. It’s built to demonstrate real-time communication using web sockets.',
      features: [
        'Join public or private chat rooms',
        'Real-time message updates',
        'User join/leave notifications',
      ],
      techStack: ['React', 'Socket.io', 'Node.js', 'Express'],
      challenges:
        'Handling socket events efficiently and ensuring messages stay in sync across all clients.',
      learnings:
        'Deepened understanding of WebSocket connections, Express routes, and frontend-backend communication.',
    },
  },
    {
    id: 'expense-tracker',
    year: '2025',
    title: 'Expense Tracker',
    description: 'Track your budget and expenses easily.',
    articleLink: '/projects/expense-tracker',
    demoLink: 'https://expenzy-kpsb.vercel.app/',
    article: {
      overview:
        'The Expense Tracker is a budget management tool that helps users monitor income and spending habits. It’s designed for personal finance tracking with real-time balance updates.',
      features: [
        'Add and delete income/expenses',
        'Real-time balance calculation',
        'Stores data using localStorage',
      ],
      techStack: ['React', 'Tailwind CSS'],
      challenges:
        'Handling dynamic state updates and syncing data between components and localStorage.',
      learnings:
        'Improved skills in React state management, hooks, and localStorage integration.',
    },
  },
 
];


export const deepDiveGroup1 = [
  {
    img: '/graphql.webp',
    title: 'Mastering JavaScript',
    slug: 'mastering-javascript-comprehensive-guide',
    content: `JavaScript is a powerful scripting language. In this guide, we'll cover its core concepts such as variables, functions, closures, and more. This comprehensive deep dive will help you master JavaScript from scratch.`
  },
  {
    img: '/react.webp',
    title: 'Building Scalable React Applications',
    slug: 'building-scalable-react-applications',
    content: `React is a popular library for building user interfaces. Learn how to scale your React apps with patterns like component splitting, lazy loading, and React Query.`
  },
  {
    img: 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-3030179.png?f=webp&w=256',
    title: 'Getting Started with Node.js',
    slug: 'getting-started-with-nodejs',
    content: `Node.js allows you to run JavaScript on the server. This article walks you through setting up your first Node.js server using Express and connecting it to a database.`
  },
  {
    img: 'https://www.taniarascia.com/static/fc5baca5976a4d970ad8480236797271/964d6/terminal.webp',
    title: 'TypeScript for Beginners',
    slug: 'typescript-for-beginners',
    content: `TypeScript brings static typing to JavaScript. This beginner-friendly guide introduces interfaces, types, and how to integrate TypeScript into your existing JS projects.`
  },
  {
    img: 'https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png',
    title: 'Exploring Next.js Fundamentals',
    slug: 'exploring-nextjs-fundamentals',
    content: `Next.js is a React framework for building full-stack apps. Discover how to set up pages, API routes, and optimize performance using SSR and static site generation.`
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITHn_TgjDyhdWvePNw0mveDrTUr00GLfv_Q&s',
    title: 'Introduction to MongoDB',
    slug: 'introduction-to-mongodb',
    content: `MongoDB is a NoSQL database perfect for modern web apps. Learn how to structure documents, perform CRUD operations, and connect MongoDB with Node.js.`
  },
  {
    img: 'https://tania.dev/static/07f5a193c5a1357203c0389b1002fb71/964d6/floppylogo.webp',
    title: 'Authentication in Modern Web Apps',
    slug: 'authentication-in-modern-web-apps',
    content: `Authentication is crucial for any web app. This guide explores common methods like JWT, OAuth, and session-based auth, with examples in Express and React.`
  },
  {
    img: 'https://tania.dev/static/07f5a193c5a1357203c0389b1002fb71/964d6/floppylogo.webp',
    title: 'Docker Essentials for Developers',
    slug: 'docker-essentials-for-developers',
    content: `Docker simplifies app deployment by containerizing environments. Learn the basics of Docker, creating Dockerfiles, and using Docker Compose for multi-container apps.`
  },
];

