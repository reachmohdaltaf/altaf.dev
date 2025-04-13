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
  {
    id: 'keyboard-accordion',
    year: '2025',
    title: 'Keyboard Accordion',
    description: 'Play the accordion online!',
    articleLink: '/projects/keyboard-accordion',
    demoLink: 'https://example.com/demo-accordion',
    article: {
      overview:
        'The Keyboard Accordion project is an interactive web application that simulates a musical accordion using keyboard keys. It’s built to provide a fun and educational experience for music enthusiasts.',
      features: [
        'Play accordion sounds using your keyboard',
        'Responsive layout',
        'Simple and clean UI',
        'Sound effects mapped to specific keys',
      ],
      techStack: ['HTML', 'CSS', 'JavaScript'],
      challenges:
        'One of the main challenges was mapping multiple key codes to specific audio files and managing event listeners efficiently.',
      learnings:
        'Learned about the Web Audio API and improved understanding of DOM event handling and key events.',
    },
  },
  {
    id: 'expense-tracker',
    year: '2025',
    title: 'Expense Tracker',
    description: 'Track your expenses easily.',
    articleLink: '/projects/expense-tracker',
    demoLink: 'https://example.com/demo-expense',
    article: {
      overview:
        'The Expense Tracker helps users keep track of their daily income and expenses with a clean and simple UI.',
      features: [
        'Add and delete transactions',
        'Calculate balance in real-time',
        'Persistent storage using localStorage',
      ],
      techStack: ['React', 'Tailwind CSS'],
      challenges:
        'Managing state updates dynamically and syncing localStorage with changes.',
      learnings:
        'Practiced React hooks and got better at conditional rendering and managing localStorage.',
    },
  },
  {
    id: 'expense-tracker',
    year: '2025',
    title: 'Expense Tracker',
    description: 'Track your expenses easily.',
    articleLink: '/projects/expense-tracker',
    demoLink: 'https://example.com/demo-expense',
    article: {
      overview:
        'The Expense Tracker helps users keep track of their daily income and expenses with a clean and simple UI.',
      features: [
        'Add and delete transactions',
        'Calculate balance in real-time',
        'Persistent storage using localStorage',
      ],
      techStack: ['React', 'Tailwind CSS'],
      challenges:
        'Managing state updates dynamically and syncing localStorage with changes.',
      learnings:
        'Practiced React hooks and got better at conditional rendering and managing localStorage.',
    },
  },
  {
    id: 'expense-tracker',
    year: '2025',
    title: 'Expense Tracker',
    description: 'Track your expenses easily.',
    articleLink: '/projects/expense-tracker',
    demoLink: 'https://example.com/demo-expense',
    article: {
      overview:
        'The Expense Tracker helps users keep track of their daily income and expenses with a clean and simple UI.',
      features: [
        'Add and delete transactions',
        'Calculate balance in real-time',
        'Persistent storage using localStorage',
      ],
      techStack: ['React', 'Tailwind CSS'],
      challenges:
        'Managing state updates dynamically and syncing localStorage with changes.',
      learnings:
        'Practiced React hooks and got better at conditional rendering and managing localStorage.',
    },
  },
];



