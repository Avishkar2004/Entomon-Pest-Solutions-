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
import TermiteBlog2 from "./Pages/Blogs/Termite/TermiteBlog2";
import FAQSTermiteSpecificLocation from "./Pages/FAQSTermiteSpecificLocation";
import FAQSCockSpecifiLocation from "./Pages/FAQSCockSpecifiLocation";
import FAQSMosSpecifiLocation from "./Pages/FAQSMosSpecifiLocation";
import FAQSMouseSpecifiLocation from "./Pages/FAQSMouseSpecifiLocation";
import FAQSAntSpecifiLocation from "./Pages/FAQSAntSpecifiLocation";
import FAQSWoodBSpecifiLocation from "./Pages/FAQSWoodBSpecifiLocation";
import FAQSBedBugSpecifiLocation from "./Pages/FAQSBedBugSpecifiLocation";
import FAQSFlySpecifiLocation from "./Pages/FAQSFlySpecifiLocation";
import TermiteBlog1 from "./Pages/Blogs/Termite/TermiteBlog1";
import Blog1 from "./Pages/Blogs/Cockroach/Blog1";
import Blog2 from "./Pages/Blogs/Cockroach/Blog2";
import MBlog1 from "./Pages/Blogs/Mosquito/MBlog1";
import MBlog2 from "./Pages/Blogs/Mosquito/MBlog2";
import MoBlog1 from "./Pages/Blogs/Mouse/MoBlog1";
import MoBlog2 from "./Pages/Blogs/Mouse/MoBlog2";
import AntBlog1 from "./Pages/Blogs/Ant/AntBlog1";
import AntBlog2 from "./Pages/Blogs/Ant/AntBlog2";
import WoodBorerBlog1 from "./Pages/Blogs/WoodBorer/WoodBorerBlog1";
import WoodBorerBlog2 from "./Pages/Blogs/WoodBorer/WoodBorerBlog2";
import BedBugBlog1 from "./Pages/Blogs/Bed Bug/Bedbugblog1";
import BedBugBlog2 from "./Pages/Blogs/Bed Bug/Bedbugblog2";
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
        <Route path="/termiteblog1" component={TermiteBlog1} />
        <Route path="/blog1" component={Blog1} />
        <Route path="/blog2" component={Blog2} />
        <Route path="/Mosquitoblog1" component={MBlog1} />
        <Route path="/Mosquitoblog2" component={MBlog2} />
        <Route path="/Mouseblog1" component={MoBlog1} />
        <Route path="/Mouseblog2" component={MoBlog2} />
        <Route path="/antblog1" component={AntBlog1} />
        <Route path="/antblog2" component={AntBlog2} />
        <Route path="/woodborerblog1" component={WoodBorerBlog1} />
        <Route path="/woodborerblog2" component={WoodBorerBlog2} />
        <Route path="/bedbugblog1" component={BedBugBlog1} />
        <Route path="/bedbugblog2" component={BedBugBlog2} />


        <Route
          path="/bedbugp/:location"
          component={FAQSBedBugSpecifiLocation}
        />
        <Route
          path="/woodborerp/:location"
          component={FAQSWoodBSpecifiLocation}
        />
        <Route path="/termiteblog2" component={TermiteBlog2} />
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
