// data/blogs.js
export const blogs = [
  {
    id: 1,
    title: "Year in Review: 2024 into 2025",
    slug: "year-in-review-2024-into-2025",
    date: "March 2025",
    content: `This is a detailed write-up for Year in Review 2024 into 2025. I explored my personal and professional growth, key milestones, and lessons learned throughout the year.`
  },
  {
    id: 2,
    title: "How I transitioned from Chef to Coder",
    slug: "chef-to-coder",
    date: "Jan 2025",
    content: `Story about how I shifted from being a chef to full-time web developer. I talk about my learning journey, challenges, and the similarities between the two worlds.`
  },
  {
    id: 3,
    title: "5 Tools I Use Daily as a Developer",
    slug: "daily-dev-tools",
    date: "Feb 2025",
    content: `From VS Code extensions to GitHub integrations, these tools boost my productivity and make my workflow smooth and efficient. Here's a breakdown of my top picks.`
  },
  {
    id: 4,
    title: "Why I Love Building Side Projects",
    slug: "building-side-projects",
    date: "April 2025",
    content: `Side projects let me explore new tech and solve fun problems without pressure. I share the value they bring to my learning and creativity.`
  },
  {
    id: 5,
    title: "Lessons from Failing My First Startup",
    slug: "startup-lessons",
    date: "May 2025",
    content: `My first startup didn't take off, but the experience taught me more than any success could have. I talk about mistakes, growth, and what I'll do differently next time.`
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
  [
    {
      id: 'Invozo',
      year: '2025',
      title: 'Invozo - Bill Maker',
      description: 'Generate and manage bills effortlessly.',
      articleLink: '/projects/invozo',
      demoLink: 'https://example.com/demo-invozo',
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
      id: 'expense-tracker',
      year: '2025',
      title: 'Expense Tracker',
      description: 'Track your budget and expenses easily.',
      articleLink: '/projects/expense-tracker',
      demoLink: 'https://example.com/demo-expense',
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
    {
      id: 'Connectify',
      year: '2025',
      title: 'Connectify - Social App',
      description: 'A simple social media platform.',
      articleLink: '/projects/connectify',
      demoLink: 'https://example.com/demo-connectify',
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
      demoLink: 'https://example.com/demo-chatify',
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
      id: 'Remote Jobs Platform',
      year: '2025',
      title: 'Remote Jobs Platform',
      description: 'Find and post remote job opportunities.',
      articleLink: '/projects/remote-jobs-platform',
      demoLink: 'https://example.com/demo-remotejobs',
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
    }
  ];
  



