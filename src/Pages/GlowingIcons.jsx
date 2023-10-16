import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./GlowingIcons.css"; // Import a CSS file for styling

const GlowingIcons = () => {
  return (
    <div className="fixed bottom-4 xsm:bottom-96 right-4 md:bottom-72 md:right-8 space-y-8 flex flex-col">
      <a
        href="tel:+918010281236"
        className="glow-icon glow-icon-phone text-blue-600 hover:text-blue-700"
      >
        <FontAwesomeIcon
          icon={faPhone}
          className="w-8 h-8 md:w-12 md:h-12 sm:w-12 sm:h-12 xsm:h-10 xsm:w-10"
        />
      </a>



      <a
        href="https://api.whatsapp.com/send?phone=918010281236"
        className="glow-icon glow-icon-whatsapp text-green-500 hover:text-green-700"
      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="w-8 h-8 md:w-12 md:h-12 sm:w-12 sm:h-12 xsm:h-10 xsm:w-10"
        />
      </a>
      <a
  href="mailto:pestokiller.co@gmail.com"
  className="glow-icon glow-icon-email text-red-600 hover:text-red-700"
>
  <FontAwesomeIcon
    icon={faEnvelope}
    className="w-8 h-8 md:w-12 md:h-12 sm:w-12 sm:h-12 xsm:h-10 xsm:w-10"
  />
</a>

    </div>
  );
};

export default GlowingIcons;
