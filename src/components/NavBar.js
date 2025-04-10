import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map((link,idx)=>{
        return(
          <a href={`#${link}`} key={idx}>{link}</a>
        )
      })}
    </nav>
  );
}

export default NavBar;
