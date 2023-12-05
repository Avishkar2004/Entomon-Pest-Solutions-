import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import BookService from "./Pages/ServiceBook";
// import CheckService from './Pages/CheckService'
import Type from "./Pages/ServiceType";
import Banner from "./Pages/Banner";
import Testimonial from "./Pages/Testimonial";
import PestOptionsPage from "./Pages/PestOptionsPage";
import Termite from "./Pages/Termite";
import Cockroach from "./Pages/Cockroach";
import Mosquito from "./Pages/Mosquito";
import Mouse from "./Pages/Mouse";
import Ant from "./Pages/Ant";
import WoodBorer from "./Pages/WoodBorer";
import BedBug from "./Pages/BedBug";
import General from "./Pages/General";
import Fly from "./Pages/Fly";
import Agriculture from "./Pages/Agriculture";
import HomePage from "./Pages/HomePage";
import Contact from "./Pages/Contact";
import ThankYou from "./Pages/ThankYou";
import AOS from "aos";
import "aos/dist/aos.css";
import Client from "./Pages/Client";
import GlowingIcons from "./Pages/GlowingIcons";

// import CheckService from "./Pages/CheckService";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      delay: 400,
    });
  }, []);

  
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/thankYou" component={ThankYou} />
        <Route path="/" exact component={PestOptionsPage} />
        <Route path="/termite" component={Termite} />
        <Route path="/cockroach" component={Cockroach} />
        <Route path="/mosquito" component={Mosquito} />
        <Route path="/mouse" component={Mouse} />
        <Route path="/ant" component={Ant} />
        <Route path="/woodborer" component={WoodBorer} />
        <Route path="/bedbug" component={BedBug} />
        <Route path="/sanitization" component={General} />
        <Route path="/fleafly" component={Fly} />
        <Route path="/agriculture" component={Agriculture} />
      </Switch>
      <GlowingIcons />

      <Route
        render={({ location }) => {
          if (location.pathname === "/") {
            // Render the common components only on the home page
            return (
              <>
                <BookService />
                {/* <CheckService /> */}
                <Type />
                <Banner />
                <HomePage />
                <Testimonial />
                <Client />
                <GlowingIcons />
              </>
            );
          }
        }}
      />
      <Footer />
    </Router>
  );
}

export default App;