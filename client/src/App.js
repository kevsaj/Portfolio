import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch, Link, useHistory } from "react-router-dom";

//styles
import "./App.css";
import './styles/tailwind.css'
import './styles/styles.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

//pages
import Home from "./pages/home";
import Contact from "./pages/contact";
import Portfolio from "./pages/Portfolio";

import Navbar from "./components/Navbars/AuthNavbar.js";

function App() {

  return (
    <Router>
      <div className="page-container">
        <Navbar transparent />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;