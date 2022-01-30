import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  return <nav>
            {<a href="#home" key={links.home}>Home</a>}
            {<a href="#about" key={links.about}>About</a>}
            {<a href="#projects" key={links.projects}>Projects</a>}
        </nav>;
}

export default NavBar;
