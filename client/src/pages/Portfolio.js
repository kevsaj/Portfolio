import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import Navbar from "../components/Navbars/AuthNavbar.js";
import Footer from "../components/Footers/Footer.js";


export default function Index() {
  return (
    <>
      
    <header class='masthead'>
      <p class='masthead-intro'>Hi I'm</p>
      <h1 class='masthead-heading'>Kevin Sajan</h1>
    </header>

    <nav class="navbar  fixed-top navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"> </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="portfolio.html">Portfolio</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="contact.html" id="navbarDropdownMenuLink" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Contact
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="contact.html">Email</a>
              <a class="dropdown-item" href="contact.html">Github</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="contact.html">Linkedin</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>


    <div class="headings headingsabout" id="projects">
        <h2>Portfolio</h2>
    </div>
    <section class="projects-container">
      
      <div class="card" href="https://github.com/kevsaj/Spacebook" target="_blank" rel="noopener" >
        <div class="card-image" src="./img/SpaceBook.png" alt="website"></div>
        <div class="card-text">
          <span class="date">SASS, Tailwind CSS, REST API, MySQL</span>
          <h2>SpaceBook</h2>
          <p>Our own Social media platform - for Project 2</p>
        </div>
        <div class="card-stats">
          <div class="stat">
            <div class="value"><a href="https://github.com/kevsaj/Spacebook" target="_blank" rel="noopener" aria-label="Github"><span class="iconify" data-icon="jam:github"
              data-inline="false"></span>
            <div class="type">Github Repo</div></a></div>
          </div>
          <div class="stat">
            <div class="value"><a href="https://spacebookx.herokuapp.com/" target="_blank" rel="noopener" aria-label="Live Page" target="_blank" rel="noopener">
              <span class="iconify" data-icon="tabler:live-photo" data-inline="false"></span>
            <div class="type">Live Page</div></a></div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-image card2"></div>
        <div class="card-text card2">
          <span class="date">HTML, CSS, JavaScript</span>
          <h2>PerfectPairings</h2>
          <p>PerfectPairings will provide you with delicious food options and pair your selection with the perfect drink</p>
        </div>
        <div class="card-stats card2">
          <div class="stat">
            <div class="value"><a href="https://github.com/nagck/perfectpairings" target="_blank" rel="noopener" aria-label="Github"><span class="iconify" data-icon="jam:github"
              data-inline="false"></span>
            <div class="type">Github Repo</div></a></div>
          </div>
          <div class="stat">
            <div class="value"><a href="https://nagck.github.io/perfectpairings/" target="_blank" rel="noopener"aria-label="Live Page" target="_blank" rel="noopener">
              <span class="iconify" data-icon="tabler:live-photo" data-inline="false"></span>
            <div class="type">Live Page</div></a></div>
          </div>
        </div>
      </div>
      <div class="card">
          <div class="card-image card3"></div>
          <div class="card-text card3">
            <span class="date">JavaScript</span>
            <h2>Weather-Dashboard</h2>
            <p>Interactive Weather Dashboard</p>
          </div>
          <div class="card-stats card3">
            <div class="stat">
            <div class="value"><a href="https://github.com/kevsaj/Weather-Dashboard" target="_blank" rel="noopener" aria-label="Github"><span class="iconify" data-icon="jam:github"
              data-inline="false"></span>
            <div class="type">Github Repo</div></a></div>
          </div>
          <div class="stat">
            <div class="value"><a href="https://spacebookx.herokuapp.com/" target="_blank" rel="noopener"aria-label="Live Page" target="_blank" rel="noopener">
              <span class="iconify" data-icon="tabler:live-photo" data-inline="false"></span>
            <div class="type">Live Page</div></a></div>
          </div>
          </div>
      </div>
    </section>

      <footer>
        <div class="media spancss">
          <a href="https://github.com/kevsaj" aria-label="Github"><span class="iconify" data-icon="jam:github"
              data-inline="false"></span></a>
          <a href=" " aria-label="Linkedin" target="_blank" rel="noopener"><span class="iconify"
              data-icon="brandico:linkedin-rect" data-inline="false"></span></a>
          <a href="mailto: " aria-label="gmail"><span class="iconify" data-icon="dashicons:email-alt"
              data-inline="false"></span></a>
        </div>
        <p id="smalltext">
          <span id="myName">Kevin Sajan</span><span id="year"> &copy;2020</span>
        </p>
      </footer>
    </>
  );
}
