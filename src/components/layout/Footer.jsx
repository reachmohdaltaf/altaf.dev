import React from "react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="bg-primary px-6 md:px-10 py-6 text-white border-t-2">
      <ul className="flex flex-col sm:flex-row text-sm gap-2 sm:gap-4 text-foreground">
        <li className="text-foreground hover:text-primary-foreground hover:underline cursor-pointer">
          Email Signup
        </li>
        <li className="text-foreground hover:text-primary-foreground hover:underline cursor-pointer">
          RSS feed
        </li>
        <li className="text-foreground hover:text-primary-foreground hover:underline cursor-pointer">
          Bluesky
        </li>
        <li className="text-foreground hover:text-primary-foreground hover:underline cursor-pointer">
          Buy me a coffee
        </li>
      </ul>

      <div className="mt-4 flex flex-col sm:flex-row gap-3">
        <Button variant={"secondary"}> <img src="/projects.png" className="h-4" alt="" />  Github</Button>
        <Button variant={"secondary"}>Netlify</Button>
      </div>

      <p className="mt-6 text-xs text-foreground text-center sm:text-left">
        Made with ❤️ by Mohd Altaf
      </p>
    </div>
  );
};

export default Footer;
