import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import Agriculture from "./Pages/Agriculture";
// import Ant from "./Pages/Ant";
// import Banner from "./Pages/Banner";
// import HowItsWork from "./Pages/HowItsWork";
// import BedBug from "./Pages/BedBug";
// import AntBlog1 from "./Pages/Blogs/Ant/AntBlog1";
// import AntBlog2 from "./Pages/Blogs/Ant/AntBlog2";
// import BedBugBlog1 from "./Pages/Blogs/Bed Bug/Bedbugblog1";
// import BedBugBlog2 from "./Pages/Blogs/Bed Bug/Bedbugblog2";
// import Blog1 from "./Pages/Blogs/Cockroach/Blog1";
// import Blog2 from "./Pages/Blogs/Cockroach/Blog2";
// import FlyBlog1 from "./Pages/Blogs/Fly/FlyBlog1";
// import FlyBlog2 from "./Pages/Blogs/Fly/FlyBlog2";
// import MBlog1 from "./Pages/Blogs/Mosquito/MBlog1";
// import MBlog2 from "./Pages/Blogs/Mosquito/MBlog2";
// import MoBlog1 from "./Pages/Blogs/Mouse/MoBlog1";
// import MoBlog2 from "./Pages/Blogs/Mouse/MoBlog2";
// import TermiteBlog1 from "./Pages/Blogs/Termite/TermiteBlog1";
// import TermiteBlog2 from "./Pages/Blogs/Termite/TermiteBlog2";
// import WoodBorerBlog1 from "./Pages/Blogs/WoodBorer/WoodBorerBlog1";
// import WoodBorerBlog2 from "./Pages/Blogs/WoodBorer/WoodBorerBlog2";
// import Client from "./Pages/Client";
// import Cockroach from "./Pages/Cockroach";
// import Contact from "./Pages/Contact";
// import FAQSAntSpecifiLocation from "./Pages/FAQSAntSpecifiLocation";
// import FAQSBedBugSpecifiLocation from "./Pages/FAQSBedBugSpecifiLocation";
// import FAQSCockSpecifiLocation from "./Pages/FAQSCockSpecifiLocation";
// import FAQSFlySpecifiLocation from "./Pages/FAQSFlySpecifiLocation";
// import FAQSMosSpecifiLocation from "./Pages/FAQSMosSpecifiLocation";
// import FAQSMouseSpecifiLocation from "./Pages/FAQSMouseSpecifiLocation";
// import FAQSTermiteSpecificLocation from "./Pages/FAQSTermiteSpecificLocation";
// import FAQSWoodBSpecifiLocation from "./Pages/FAQSWoodBSpecifiLocation";
// import Fly from "./Pages/Fly";
// import General from "./Pages/General";
// import HomePage from "./Pages/HomePage";
// import Mosquito from "./Pages/Mosquito";
// import Mouse from "./Pages/Mouse";
// import FAQSpecificLocationMumbai from "./Pages/Mumbai/FAQSpecificLocationMumbai";
// import FAQsMumbai from "./Pages/Mumbai/FAQsMumbai";
// import PestOptionsPage from "./Pages/PestOptionsPage";
// import FAQSpecificLocationPune from "./Pages/Pune/FAQSpecificLocationPune"; // Import the dynamic FAQ page
// import FAQsPune from "./Pages/Pune/FAQsPune";
// import BookService from "./Pages/ServiceBook";
// import Type from "./Pages/ServiceType";
// import Termite from "./Pages/Termite";
// import Testimonial from "./Pages/Testimonial";
// import ThankYou from "./Pages/ThankYou";
// import WaterProofing from "./Pages/WaterProofing";
// import WoodBorer from "./Pages/WoodBorer";
// import Rate from "./Pages/Rate";
// import FAQsNagar from "./Pages/FAQsNagar";
// import FAQSpecificLocationNagar from "./Pages/FAQSpecificLocationNagar";

// import CheckService from "./Pages/CheckService";

import Header from "./Pages/Header";
import GlowingIcons from "./Pages/GlowingIcons";
import Footer from "./Pages/Footer";
// Lazy load components
const ContactLazy = lazy(() => import("./Pages/Contact"));
const ThankYouLazy = lazy(() => import("./Pages/ThankYou"));
const PestOptionsPageLazy = lazy(() => import("./Pages/PestOptionsPage"));
const TermiteLazy = lazy(() => import("./Pages/Termite"));
const CockroachLazy = lazy(() => import("./Pages/Cockroach"));
const MosquitoLazy = lazy(() => import("./Pages/Mosquito"));
const MouseLazy = lazy(() => import("./Pages/Mouse"));
const AntLazy = lazy(() => import("./Pages/Ant"));
const WoodBorerLazy = lazy(() => import("./Pages/WoodBorer"));
const BedBugLazy = lazy(() => import("./Pages/BedBug"));
const GeneralLazy = lazy(() => import("./Pages/General"));
const FlyLazy = lazy(() => import("./Pages/Fly"));
const WaterProofingLazy = lazy(() => import("./Pages/WaterProofing"));
const BookServiceLazy = lazy(() => import("./Pages/ServiceBook"));
const HowItsWorkLazy = lazy(() => import("./Pages/HowItsWork"));
const HomePageLazy = lazy(() => import("./Pages/HomePage"));
const RateLazy = lazy(() => import("./Pages/Rate"));
const FAQsPuneLazy = lazy(() => import("./Pages/Pune/FAQsPune"));
const TestimonialLazy = lazy(() => import("./Pages/Testimonial"));
const ClientLazy = lazy(() => import("./Pages/Client"));

// Lazy load FAQ components
const FAQSTermiteSpecificLocationLazy = lazy(() => import("./Pages/FAQSTermiteSpecificLocation"));
const FAQSCockSpecifiLocationLazy = lazy(() => import("./Pages/FAQSCockSpecifiLocation"));
const FAQSMosSpecifiLocationLazy = lazy(() => import("./Pages/FAQSMosSpecifiLocation"));
const FAQSMouseSpecifiLocationLazy = lazy(() => import("./Pages/FAQSMouseSpecifiLocation"));
const FAQSAntSpecifiLocationLazy = lazy(() => import("./Pages/FAQSAntSpecifiLocation"));
const FAQSFlySpecifiLocationLazy = lazy(() => import("./Pages/FAQSFlySpecifiLocation"));
const FAQSBedBugSpecifiLocationLazy = lazy(() => import("./Pages/FAQSBedBugSpecifiLocation"));
const FAQSWoodBSpecifiLocationLazy = lazy(() => import("./Pages/FAQSWoodBSpecifiLocation"));
const FAQSpecificLocationPuneLazy = lazy(() => import("./Pages/Pune/FAQSpecificLocationPune"));
const FAQSpecificLocationMumbaiLazy = lazy(() => import("./Pages/Mumbai/FAQSpecificLocationMumbai"));

// Lazy load blog components
const TermiteBlog1Lazy = lazy(() => import("./Pages/Blogs/Termite/TermiteBlog1"));
const TermiteBlog2Lazy = lazy(() => import("./Pages/Blogs/Termite/TermiteBlog2"));
const Blog1Lazy = lazy(() => import("./Pages/Blogs/Cockroach/Blog1"));
const Blog2Lazy = lazy(() => import("./Pages/Blogs/Cockroach/Blog2"));
const MBlog1Lazy = lazy(() => import("./Pages/Blogs/Mosquito/MBlog1"));
const MBlog2Lazy = lazy(() => import("./Pages/Blogs/Mosquito/MBlog2"));
const MoBlog1Lazy = lazy(() => import("./Pages/Blogs/Mouse/MoBlog1"));
const MoBlog2Lazy = lazy(() => import("./Pages/Blogs/Mouse/MoBlog2"));
const AntBlog1Lazy = lazy(() => import("./Pages/Blogs/Ant/AntBlog1"));
const AntBlog2Lazy = lazy(() => import("./Pages/Blogs/Ant/AntBlog2"));
const WoodBorerBlog1Lazy = lazy(() => import("./Pages/Blogs/WoodBorer/WoodBorerBlog1"));
const WoodBorerBlog2Lazy = lazy(() => import("./Pages/Blogs/WoodBorer/WoodBorerBlog2"));
const BedBugBlog1Lazy = lazy(() => import("./Pages/Blogs/Bed Bug/Bedbugblog1"));
const BedBugBlog2Lazy = lazy(() => import("./Pages/Blogs/Bed Bug/Bedbugblog2"));
const FlyBlog1Lazy = lazy(() => import("./Pages/Blogs/Fly/FlyBlog1"));
const FlyBlog2Lazy = lazy(() => import("./Pages/Blogs/Fly/FlyBlog2"));

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
  </div>
);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      delay: 400,
      once: true, // Only animate once
      disable: 'mobile' // Disable on mobile devices
    });
  }, []);

  return (
    <Router>
      <Header />
      <Suspense fallback={<LoadingFallback />}>
        <Switch>
          <Route path="/contact" component={ContactLazy} />
          <Route path="/thankYou" component={ThankYouLazy} />
          <Route path="/" exact component={PestOptionsPageLazy} />
          <Route path="/termite" component={TermiteLazy} />
          <Route path="/cockroach" component={CockroachLazy} />
          <Route path="/mosquito" component={MosquitoLazy} />
          <Route path="/mouse" component={MouseLazy} />
          <Route path="/ant" component={AntLazy} />
          <Route path="/woodborer" component={WoodBorerLazy} />
          <Route path="/bedbug" component={BedBugLazy} />
          <Route path="/sanitization" component={GeneralLazy} />
          <Route path="/fleafly" component={FlyLazy} />
          {/* <Route path="/agriculture" component={Agriculture} /> */}
          <Route path="/waterProffing" component={WaterProofingLazy} />
          <Route path="/pune/:location" component={FAQSpecificLocationPuneLazy} />
          {/* <Route path="/nagar/:location" component={FAQSpecificLocationNagar} /> */}
          <Route path="/mumbai/:location" component={FAQSpecificLocationMumbaiLazy} />

          <Route path="/ter/:location" component={FAQSTermiteSpecificLocationLazy} />
          <Route path="/cock/:location" component={FAQSCockSpecifiLocationLazy} />
          <Route path="/mos/:location" component={FAQSMosSpecifiLocationLazy} />
          <Route path="/mousep/:location" component={FAQSMouseSpecifiLocationLazy} />
          <Route path="/antp/:location" component={FAQSAntSpecifiLocationLazy} />
          <Route path="/fly/:location" component={FAQSFlySpecifiLocationLazy} />
          <Route path="/termiteblog1" component={TermiteBlog1Lazy} />
          <Route path="/blog1" component={Blog1Lazy} />
          <Route path="/blog2" component={Blog2Lazy} />
          <Route path="/Mosquitoblog1" component={MBlog1Lazy} />
          <Route path="/Mosquitoblog2" component={MBlog2Lazy} />
          <Route path="/Mouseblog1" component={MoBlog1Lazy} />
          <Route path="/Mouseblog2" component={MoBlog2Lazy} />
          <Route path="/antblog1" component={AntBlog1Lazy} />
          <Route path="/antblog2" component={AntBlog2Lazy} />
          <Route path="/woodborerblog1" component={WoodBorerBlog1Lazy} />
          <Route path="/woodborerblog2" component={WoodBorerBlog2Lazy} />
          <Route path="/bedbugblog1" component={BedBugBlog1Lazy} />
          <Route path="/bedbugblog2" component={BedBugBlog2Lazy} />
          <Route path="/flyblog1" component={FlyBlog1Lazy} />
          <Route path="/flyblog2" component={FlyBlog2Lazy} />

          <Route
            path="/bedbugp/:location"
            component={FAQSBedBugSpecifiLocationLazy}
          />
          <Route
            path="/woodborerp/:location"
            component={FAQSWoodBSpecifiLocationLazy}
          />
          <Route path="/termiteblog2" component={TermiteBlog2Lazy} />
        </Switch>

        <Route
          render={({ location }) => {
            if (location.pathname === "/") {
              return (
                <Suspense fallback={<LoadingFallback />}>
                  <BookServiceLazy />
                  {/* <CheckService /> */}
                  {/* <Type /> */}
                  {/* <Banner /> */}
                  <HowItsWorkLazy />
                  <HomePageLazy />
                  <RateLazy />
                  <FAQsPuneLazy />
                  {/* <FAQsNagar /> */}
                  {/* <FAQsMumbai /> */}
                  <TestimonialLazy />
                  <ClientLazy />
                  <GlowingIcons />
                </Suspense>
              );
            }
          }}
        />
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
