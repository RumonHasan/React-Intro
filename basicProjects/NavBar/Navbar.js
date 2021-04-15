import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './Navdata.js'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  // useref links for links and the links container section 
  const linksRef = useRef(null);
  const linksContainerRef = useRef(null);

  React.useEffect(()=>{
    const linksHeight = linksRef.current.getBoundingClientRect().height; // useRef allows us to use the function which automatically allows us to use the DOM function along with its sub parameters 
    //getBoundingClientRect is a function that provides all the dimension sizes in pixels of the DOM rect element
    console.log(linksHeight);
    if(showLinks){
      linksContainerRef.current.style.height = `${linksHeight}px`; // adds the linkref links height to the links container
    }else{
      linksContainerRef.current.style.height = '0px';
    }
  })

  return <React.Fragment>
    <nav>
      <div className="nav-center"> {/* main container of the navigation bar */}
        <div className="nav-header">
          {/* main menu content header*/}
          <img src={logo} alt='logo'></img>
          <button className="nav-toggle" onClick = {()=>setShowLinks(!showLinks)}>
            <FaBars/>
          </button>
        </div>

      
          <div className= 'links-container' ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link)=>{
              const {id, url, text} = link;
              return  (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        
        <ul className="social-icons">
          {social.map((icons)=>{
            const {id, url, icon} = icons;// destructuring the attributes of the social links
            return(
                <React.Fragment>
                  <li key={id}>
                    <a href={url} key={id}>{icon}</a>
                  </li>  
                </React.Fragment>
            );
          })}
        </ul>
      </div>
    </nav>
  </React.Fragment>
}

export default Navbar;