import {
  faFacebook, faInstagram, faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Payment from "../assets/Footer/payment.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  };

  return (
    <footer className="p-1 mb-12 px-7 xsm:mt-[-5rem]">
      
      <p className="bg-[#d3b76f] mt-28 mb-5 pb-3 p-[1rem] h-3 "></p>
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:w-1/4">
          <h1 className="text-2xl font-bold">Entomon Pest Solution Pvt Ltd.</h1>
          <p className="mt-2">
            Welcome to our pest control website! We offer top-quality pest
            control services to keep your home or business pest-free. Our expert
            technicians are experienced in dealing with a wide range of pests
            using advanced techniques.
          </p>
        </div>
        <div className="mb-6 md:w-1/4 md:ml-28">
          <h2 className="text-xl font-bold">PRODUCTS</h2>
          <ul className="mt-2 space-y-4">
            <li onClick={scrollToTop}>
              <Link to="/ant" className="hover:text-blue-500">
                Ant Treatment
              </Link>
            </li>
            <li onClick={scrollToTop}>
              <Link to="/bedbug" className="hover:text-blue-500">
                BedBug Treatment
              </Link>
            </li>
            <li onClick={scrollToTop}>
              <Link to="/cockroach" className="hover:text-blue-500">
                Cockroach Treatment
              </Link>
            </li>
            <li onClick={scrollToTop}>
              <Link to="/mosquito" className="hover:text-blue-500">
                Mosquito Treatment
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-6 md:w-1/4">
          <h2 className="text-xl font-bold">USEFUL LINKS</h2>
          <ul className="mt-2">
            <li onClick={scrollToTop}>
              <button className="hover:text-blue-500">Help</button>
            </li>
          </ul>
        </div>
        <div className="md:w-1/4">
          <h2 className="text-xl font-bold">CONTACT</h2>
          <address className="mt-2">
            <HomeIcon />
            Naryan Peth, Bhatacha bol, Pune, 411030
            <br />
            <a href="mailto:entomon.pestsolution@gmail.com" className="hover:text-blue-500">
              <EmailIcon />
              entomon.pestsolution@gmail.com
            </a>
            <br />
            <a href="tel:+918010281236" className="hover:text-blue-500">
              <CallIcon />
              +918010281236
            </a>
          </address>
        </div>
      </div>
      {/* Social Media Icons */}
      <div className="flex justify-center items-center space-x-4 mt-4">
        <p>Follow Us On:- </p>
        <a href="https://www.facebook.com/profile.php?id=61559519045004" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.youtube.com/@EntomonPestSolutions/featured" rel="noreferrer" target="_blank" className="text-blue-500 hover:text-blue-700">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a href="https://www.instagram.com/entomon_pest_solutions" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      <img
        src={Payment}
        alt="Payment Methods"
        className="mx-auto my-4"
        style={{ maxWidth: "150px" }}
      />
      <div className="text-center mt-4 text-gray-600">
        © 2023 Copyright: Shubham Yeljale
      </div>
    </footer>
  );
};

export default Footer;
