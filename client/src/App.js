import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch, Link, useHistory } from "react-router-dom";

//styles
import "./App.css";
import './styles/tailwind.css'
import './styles/styles.css'

//components
import Nav from "./components/Navbars/AuthNavbar.js";
import Footer from "./components/Footers/Footer.js";

//pages
import Home from "./pages/home";
import Contact from "./pages/contact";
import Portfolio from "./pages/Portfolio";


function App() {

  return (
    <Router>
      <div className="page-container">
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