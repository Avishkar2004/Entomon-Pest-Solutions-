import {
  IconButton,
  MobileNav,
  Navbar,
  Typography
} from "@material-tailwind/react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Logo from "../assets/Navbar/Logo.png";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-16 xxl:gap-24">
      {/* Phone */}
      <li>
        <a
          href="tel:+918010281236"
          className="flex items-center text-green-600 font-semibold text-base hover:text-green-800 transition-all"
        >
          <CallIcon className="mr-2" />
          +91 80102 81236
        </a>
      </li>

      {/* Email */}
      <li>
        <a
          href="mailto:entomon.pestsolution@gmail.com"
          className="flex items-center text-black font-semibold text-base hover:text-blue-800 transition-all"
        >
          <EmailIcon className="mr-2" />
          entomon.pestsolution@gmail.com
        </a>
      </li>

      {/* WhatsApp */}
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=918010281236"
          className="flex items-center text-green-600 font-semibold text-base hover:text-green-800 transition-all"
        >
          <WhatsAppIcon className="mr-2" />
          WhatsApp
        </a>
      </li>
    </ul>
  );

  return (
    <Navbar
      className="sticky top-0 z-50 mx-auto  py-3 px-4 lg:px-8 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-md"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Typography as="a" href="/" className="flex items-center">
          <img
            src={Logo}
            alt="Pest Control In Pune"
            className="h-14 w-auto lg:h-16 transition-all duration-300"
          />
        </Typography>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navList}
        </div>

        {/* Desktop Contact Button */}
        <Link
          to="/contact"
          className="hidden lg:inline-block px-6 py-2.5 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Contact Us
        </Link>

        {/* Mobile Nav Toggle */}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6 text-gray-700"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>

      {/* Mobile Nav */}
      <MobileNav open={openNav}>
        <div className="px-4 py-6 flex flex-col space-y-6 bg-gray-50 rounded-lg mt-2">
          {navList}
          <Link
            to="/contact"
            className="w-full text-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default Header;
