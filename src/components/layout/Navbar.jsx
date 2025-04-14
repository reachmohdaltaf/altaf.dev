import React, { useState } from "react";
import { Button } from "../ui/button";
import { AlignJustify, Github, Moon, Sun, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState("light");
  const navButtons = [
    { icon: "/notes.png", label: "Notes", link:"/notes" },
    { icon: "/blog.png", label: "Blog", link:"/blog" },
    { icon: "/projects.png", label: "Projects", link:"/projects" },
    { icon: "/logo.png", label: "About", link:"/me" },
  ];

    const handleclick = () => {
    setIsOpen(!isOpen);
    }

    const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
}
    

  return (
<nav className="md:px-4 flex items-center justify-between bg-background lg:bg-transparent rounded-md bg-clip-padding backdrop-filter lg:backdrop-blur-xl lg:bg-opacity-30  fixed w-full md:h-16 h-16">
<div className="borderb w-full md:h-16 h-16 md:p-0 px-2  flex items-center justify-between bg-transparent relative">
     <div className="logo  flex items-center gap-2 text-accent">
        <img src="/logo.png" className="h-6 w-6" alt="Logo" />
        <Link to={'/'} className="font-semibold text-[17px] lg:text-[16px] hover:underline underline-offset-4 cursor-pointer ">altaf.dev</Link>
      </div>
      <div className="buttons  flex gap-3">
        {navButtons.map((btn, index) => (
         <Link to={btn.link} key={index}> <Button
            key={index}
            className="md:flex text-accent hidden bg-transparent items-center justify-center gap-1"
          >
            <img src={btn.icon} className="h-4" alt={btn.label} />
            <span className="text-[16px]">{btn.label}</span>
          </Button></Link>
        ))}
        <div className="items-center justify-center flex gap-1">
        <Button onClick={handleclick} className="text-xl px-0 flex md:hidden hover:text-accent">
           {isOpen? <X size={24} className="text-foreground !size-auto" /> : <AlignJustify size={24} className="text-foreground !size-auto" />}
          </Button>
          <Button onClick={handleTheme} className="text-xl px-0">
            {theme === "light" ? (
                <Sun size={24} className="text-foreground !size-auto" />
            ) : (
                <Moon size={24} className="text-foreground !size-auto" />
            )}
          </Button>
          <Button className="text-xl px-0 hover:text-foreground">
            <img src="/github.svg" className="h-12 invert-75 hover:invert-90" alt="" />
          </Button>
          <Button className="text-xl px-0 hover:text-foreground">
          <img src="/bsky.svg" className="h-12 invert-75 hover:invert-90" alt="" />
          </Button>
        </div>
     </div>
      </div>
      {isOpen && (
  <div className="absolute top-16  items-center w-full bg-secondary h-screen p-4 rounded-md shadow-lg flex flex-col gap-4">
    {navButtons.map((btn, index) => (
      <Button
      size={"xl"}
        key={index}
        className="flex  text-accent bg-transparent w-44 mt-8 items-center gap-2 justify-start"
      >
        <img src={btn.icon} className="h-10" alt={btn.label} />
        <span className="text-[18px]">{btn.label}</span>
      </Button>
    ))}
  </div>
)}


       
    </nav>
  );
};

export default Navbar;
