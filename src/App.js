import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import Agriculture from "./Pages/Agriculture";
import Ant from "./Pages/Ant";
import Banner from "./Pages/Banner";
import BedBug from "./Pages/BedBug";
import Client from "./Pages/Client";
import Cockroach from "./Pages/Cockroach";
import Contact from "./Pages/Contact";
import Fly from "./Pages/Fly";
import Footer from "./Pages/Footer";
import General from "./Pages/General";
import GlowingIcons from "./Pages/GlowingIcons";
import Header from "./Pages/Header";
import HomePage from "./Pages/HomePage";
import Mosquito from "./Pages/Mosquito";
import Mouse from "./Pages/Mouse";
import PestOptionsPage from "./Pages/PestOptionsPage";
import BookService from "./Pages/ServiceBook";
import Type from "./Pages/ServiceType";
import Termite from "./Pages/Termite";
import Testimonial from "./Pages/Testimonial";
import ThankYou from "./Pages/ThankYou";
import WoodBorer from "./Pages/WoodBorer";
import FAQSpecificLocationPune from "./Pages/FAQSpecificLocationPune"; // Import the dynamic FAQ page
import FAQsPune from "./Pages/FAQsPune";
import WaterPurify from "./Pages/WaterPurify";
import BlogPage from "./BlogPage";
import FAQSTermiteSpecificLocation from "./Pages/FAQSTermiteSpecificLocation";
import FAQSCockSpecifiLocation from "./Pages/FAQSCockSpecifiLocation";
import FAQSMosSpecifiLocation from "./Pages/FAQSMosSpecifiLocation";
import FAQSMouseSpecifiLocation from "./Pages/FAQSMouseSpecifiLocation";
import FAQSAntSpecifiLocation from "./Pages/FAQSAntSpecifiLocation";
import FAQSWoodBSpecifiLocation from "./Pages/FAQSWoodBSpecifiLocation";
import FAQSBedBugSpecifiLocation from "./Pages/FAQSBedBugSpecifiLocation";
import FAQSFlySpecifiLocation from "./Pages/FAQSFlySpecifiLocation";
// import FAQsNagar from "./Pages/FAQsNagar";
// import FAQSpecificLocationNagar from "./Pages/FAQSpecificLocationNagar";

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
        {/* <Route path="/agriculture" component={Agriculture} /> */}
        <Route path="/WaterPurify" component={WaterPurify} />
        <Route path="/faq/:location" component={FAQSpecificLocationPune} />
        {/* <Route path="/nagar/:location" component={FAQSpecificLocationNagar} /> */}
        <Route path="/ter/:location" component={FAQSTermiteSpecificLocation} />
        <Route path="/cock/:location" component={FAQSCockSpecifiLocation} />
        <Route path="/mos/:location" component={FAQSMosSpecifiLocation} />
        <Route path="/mousep/:location" component={FAQSMouseSpecifiLocation} />
        <Route path="/antp/:location" component={FAQSAntSpecifiLocation} />
        <Route path="/fly/:location" component={FAQSFlySpecifiLocation} />
        <Route
          path="/bedbugp/:location"
          component={FAQSBedBugSpecifiLocation}
        />
        <Route
          path="/woodborerp/:location"
          component={FAQSWoodBSpecifiLocation}
        />
        <Route exact path="/blog/:id" component={BlogPage} />
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
                <FAQsPune />
                {/* <FAQsNagar /> */}
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
