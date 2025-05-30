import React from "react";
import { Helmet } from "react-helmet";
import { Link, useHistory } from "react-router-dom";
import Ant from "../assets/Option/ant.png";
import BedBug from "../assets/Option/bedbug.png";
import Cockroach from "../assets/Option/cockroach.png";
import FleaFly from "../assets/Option/flea.png";
import General from "../assets/Option/general.png";
import Mosquito from "../assets/Option/mosquito.png";
import Mouse from "../assets/Option/mouse.png";
import Termite from "../assets/Option/termite.png";

const PestOptionsPage = () => {
  let history = useHistory();

  const handleRedirect = (path) => {
    history.push(path);
  };

  const pestServices = [
    {
      name: "Termite",
      image: Termite,
      path: "/termite",
      description: "Professional termite control and prevention"
    },
    {
      name: "Cockroach",
      image: Cockroach,
      path: "/cockroach",
      description: "Effective cockroach elimination"
    },
    {
      name: "Mosquito",
      image: Mosquito,
      path: "/mosquito",
      description: "Mosquito control and prevention"
    },
    {
      name: "Mouse",
      image: Mouse,
      path: "/mouse",
      description: "Rodent control and removal"
    },
    {
      name: "Ant",
      image: Ant,
      path: "/ant",
      description: "Ant infestation treatment"
    },
    {
      name: "Bed Bug",
      image: BedBug,
      path: "/bedbug",
      description: "Bed bug treatment and removal"
    },
    {
      name: "Sanitization",
      image: General,
      path: "/sanitization",
      description: "Professional sanitization services"
    },
    {
      name: "Flea & Fly",
      image: FleaFly,
      path: "/fleafly",
      description: "Flea and fly control solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Professional Pest Control Services Near You | Extermination and Treatment</title>
        <meta name="description" content="Get effective pest control services near you. We offer bed bug treatment, termite treatment, rodent control, mosquito control, and more. Contact us for affordable and efficient pest solutions." />
        <meta name="keywords" content="pest control, pest control services, pest control near me, termite treatment, bed bug treatment, rodent control, mosquito control" />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-600 mb-4">
            Our Pest Control Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional pest control solutions for your home and business. We offer comprehensive treatment plans for all types of pests.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pestServices.map((service) => (
            <div
              key={service.name}
              onClick={() => handleRedirect(service.path)}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-green-50 rounded-full group-hover:bg-green-100 transition-colors duration-300">
                    <img
                      src={service.image}
                      alt={`${service.name} Control`}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 text-center mb-4">
                  {service.description}
                </p>
                <div className="flex justify-center">
                  <Link
                    to={service.path}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-green-600 hover:text-green-700 transition-colors duration-200"
                  >
                    Learn More
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PestOptionsPage;
