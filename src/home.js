import React from "react";
import "./home.css";
import logo from "./img/tm.png";

function Home() {
  // fixed header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
   

  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
         <div className="navigation">
            <ul className="navbar d__flex ">
              <li><img src={logo} alt="loading..."  className="rasm"/></li>
                <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Service">
                <li className="nav__items mx__15">Skills</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15">Portfolio</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
           <div className="sidenavbar">
            <ul className="sidebar d__flex">
              <li className="sideNavbar">
                <a href="#Home">Home</a>
              </li>
              <li className="sideNavbar">
                <a href="#About">About</a>
              </li>
              <li className="sideNavbar">
                <a href="#Service">Service</a>
              </li>
              <li className="sideNavbar">
                <a href="#Portfolio">Portfolio</a>
              </li>
              <li className="sideNavbar">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
      
        </div>
        {/* {Home content} */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10">Hi, I'm Fazliddin </h2>
              <h3 className="home__text sweet pz__10">Frontend Developer</h3>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
