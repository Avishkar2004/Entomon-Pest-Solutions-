import React from 'react';
import { Helmet } from 'react-helmet';
import getQuoto from "../assets/HowitsWork/1.png"
import Schedule from "../assets/HowitsWork/2.png"
import HaveFun from "../assets/HowitsWork/3.avif"

function HowItsWork() {
  return (
    <div>
      <Helmet>
        <title>How Our Services Work - Pest Control, Cleaning, and Sanitization</title>
        <meta name="description" content="Learn how our efficient pest control, cleaning, and sanitization services work. Contact us for a free quote and schedule your home inspection today." />
      </Helmet>
      <div className="container mx-auto p-6 text-center mt-4">
        <h1 className="text-4xl font-bold mb-8">How It Works?</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img src={getQuoto} alt="Contact Us" className="w-24 h-24 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-green-600">Contact Us for Free Quotes</h2>
            <p>Contact us and tell us about your actual requirements. You need pest control, cleaning, or sanitization service? Fill the enquiry form or make a phone call to us at 8010281236 / 8308342159.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Schedule} alt="Schedule Home Inspection" className="w-24 h-24 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-green-600">Schedule Home Inspection & Service</h2>
            <p>Choose the right date for a free home inspection. Experts will assess your home or office and develop a service plan accordingly. Get high-quality pest control, cleaning, and sanitization services done at your premise.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={HaveFun} alt="Relax and Enjoy" className="w-24 h-24 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-green-600">Rest Assured. Have Fun!</h2>
            <p>Relax and have fun. You get the best pest control, cleaning, and sanitization services at cheaper rates. Rest assured, our trusted professionals will do the job right.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItsWork;
