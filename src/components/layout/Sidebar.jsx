import React from 'react';
import { Button } from '../ui/button';
import { Mail, Rss, Instagram, Facebook, Linkedin, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom'; // Use 'next/link' if using Next.js

const Sidebar = () => {
  const stayConnectedButtons = [
    { label: 'Newsletter', icon: '/logo.png', link: '/newsletter' },
    { label: 'Bluesky', icon: '/bsky.png', link: '/bluesky' },
    { label: 'Spotify', icon: '/spotify.png', link: 'https://open.spotify.com/album/0mZIUXje90JtHxPNzWsJNR?si=H3XehYjaRuW_uUzabXXxXw' },
  ];

  const socialMediaButtons = [
    { label: 'Instagram', icon: <Instagram className="h-4 w-4 text-pink-600" />, link: 'https://instagram.com/reachmohdaltaf' },
    { label: 'Facebook', icon: <Facebook className="h-4 w-4 text-blue-600" />, link: 'https://facebook.com/reachmohdaltaf' },
    { label: 'LinkedIn', icon: <Linkedin className="h-4 w-4 text-blue-500" />, link: 'https://linkedin.com/in/reachmohdaltaf' },
  ];

  return (
    <div className="sidebar fixed top-0 left-0 w-60 h-full bg-secondary text-accent p-4">
      <div className="mt-18 borderb text-[16px] aboutme">
        <h3 className="font-semibold text-accent">About me</h3>
        <p className="text-sm mt-3 mb-8 text-foreground">
          I'm <span className="text-primary-foreground">Altaf</span> — a web developer and open-source creator. This is my digital garden. 🌱
        </p>
      </div>

      <div className="mt-6 borderb text-[16px] aboutme">
        <h3 className="font-semibold text-accent">Stay Connected</h3>
        <div className="flex flex-col gap-2 mt-2 mb-6">
          {stayConnectedButtons.map((btn, index) => (
            <Link key={index} to={btn.link}>
              <Button variant="ghost" className="px-0 py-0 justify-start h-6">
                <div className="flex items-center space-x-2">
                  <img src={btn.icon} className="h-4" alt="" />
                  <span className="text-sm">{btn.label}</span>
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="mt-6 borderb text-[16px] aboutme">
        <h3 className="font-semibold text-accent">Find Me On</h3>
        <div className="flex flex-col gap-2 mt-2 mb-6">
          {socialMediaButtons.map((btn, index) => (
            <Link key={index} to={btn.link} target="_blank">
              <Button variant="ghost" className="px-0 py-0 justify-start h-8 hover:bg-transparent">
                <div className="flex items-center space-x-2">
                  {btn.icon}
                  <span className="text-sm">{btn.label}</span>
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
