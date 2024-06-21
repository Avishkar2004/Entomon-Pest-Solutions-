import React from "react";
import { Link, useHistory } from "react-router-dom";
import Ant from "../assets/Option/ant.png";
import BedBug from "../assets/Option/bedbug.png";
import Cockroach from "../assets/Option/cockroach.png";
import FleaFly from "../assets/Option/flea.png";
import General from "../assets/Option/general.png";
import Mosquito from "../assets/Option/mosquito.png";
import Mouse from "../assets/Option/mouse.png";
import Termite from "../assets/Option/termite.png";
import WaterPurify from "../assets/Option/waterPurify.png";
import WoodBorer from "../assets/Option/wood.png";

const PestOptionsPage = () => {
  let history = useHistory();

  const handleRedirect = () => {
    history.push("/termite");

  };
  const handleRedirect2 = () => {
    history.push("/cockroach")
  };
  const handleRedirect3 = () => {
    history.push("/mosquito")
  };
  const handleRedirect4 = () => {
    history.push("/mouse")
  };
  const handleRedirect5 = () => {
    history.push("/ant")
  };
  const handleRedirect6 = () => {
    history.push("/woodborer")
  };
  const handleRedirect7 = () => {
    history.push("/bedbug")
  };
  const handleRedirect8 = () => {
    history.push("/sanitization")
  };
  const handleRedirect9 = () => {
    history.push("/fleafly")
  };
  const handleRedirect10 = (event) => {
    history.push("/waterProffing")
  };

  return (
    <div className="min-h-screen mb-[12rem] sm:mt-[4rem] lg:mt-[3rem] xl:mt-15 ssm:mt-[2rem] md:mt-[2rem] flex items-center justify-center">
      <div className="p-8 ml-[-12px] w-[70rem] rounded-lg shadow-xl xl:-mt-[20rem] sm:-mt-[8rem] ssm:-mt-[11rem] md:-mt-[12rem] lg:-mt-[12rem] bg-white">
        <h1
          className="text-3xl font-semibold mb-5 text-center items-center"
          style={{
            color: "green",
            fontSize: "16",
            fontFamily: "Times New Roman Georgia Garamond",
          }}
        >
          Our Pest Control Services
        </h1>

        <div className="flex flex-wrap gap-8 ml-12 item-center">
          {/* Termite Control */}
          <div
            className="text-center mt-4 sm:w-1/4 ssm:w-1/4 md:w-1/6 lg:w-1/6 hover:cursor-pointer"
            onClick={handleRedirect}
          >
            <img
              className="h-11 ml-7 md:ml-16 lg:ml-16"
              src={Termite}
              alt="Termite Control"
            />
            <Link
              to="/termite"
              className="flex items-center justify-center text-black py-3 px-6 rounded-lg focus:outline-none focus:ring-blue-400"
            >
              Termite
            </Link>
          </div>

          {/* Cockroach Control */}
          <div
            className="text-center mt-4 sm:w-1/4 ssm:w-1/4 md:w-1/6 lg:w-1/6 hover:cursor-pointer"
            onClick={handleRedirect2}
          >
            <img
              className="h-11 ml-7 md:ml-16 lg:ml-16"
              src={Cockroach}
              alt="Cockroach Control"
            />
            <Link
              to="/cockroach"
              className="flex items-center justify-center text-black py-3 px-6 rounded-lg focus:outline-none focus:ring-blue-400"
            >
              Cockroach
            </Link>
          </div>

          {/* Mosquito Control */}
          <div
            className="text-center mt-4 sm:w-1/4 ssm:w-1/4 md:w-1/6 lg:w-1/6 hover:cursor-pointer"
            onClick={handleRedirect3}
          >
            <img
              className="h-11 ml-7 md:ml-16 lg:ml-16"
              src={Mosquito}
              alt="Mosquito Control"
            />
            <Link
              to="/mosquito"
              className="flex items-center justify-center text-black py-3 px-6 rounded-lg focus:outline-none focus:ring-blue-400"
            >
              Mosquito
            </Link>
          </div>

          {/* Mouse Control */}
          <div
            className="text-center mt-4 sm:w-1/4 ssm:w-1/4 md:w-1/6 lg:w-1/6 hover:cursor-pointer"
            onClick={handleRedirect4}
          >
            <img
              className="h-11 ml-7 md:ml-16 lg:ml-16"
              src={Mouse}
              alt="Mouse Control"
            />
            <Link
              to="/mouse"
              className="flex items-center justify-center text-black py-3 px-6 rounded-lg focus:outline-none focus:ring-blue-400"
            >
              Mouse
            </Link>
          </div>

          {/* Ant Service */}
          <div
            className="text-center mt-4 sm:w-1/4 ssm:w-1/4 md:w-1/6 lg:w-1/6 hover:cursor-pointer"
            onClick={handleRedirect5}
          >
            <img
              className="h-11 ml-7 mr-6 md:ml-16 lg:ml-16"
              src={Ant}
              alt="Ant Service"
            />
            <Link
              to="/ant"
              className="flex items-center justify-center text-black py-3 px-6 rounded-lg focus:outline-none focus:ring-blue-400"
            >
              Ant
            </Link>
          </div>

          {/* Wood Borer Service */}
          <div
            className="text-center mt-4 sm:w-1/4 ssm:w-1/4 md:w-1/6 lg:w-1/6 hover:cursor-pointer"
            onClick={handleRedirect6}
          >
            <img
              className="h-11 ml-10 md:ml-16 lg:ml-16"
              src={WoodBorer}
              alt="Wood Borer Service"
            />
            <Link
              to="/woodborer"
              className="flex items-center justify-center text-black py-3 px-6 rounded-lg focus:outline-none focus:ring-blue-400"
            >
              Wood Borer
            </Link>
          </div>

          {/* Bed Bug Service */}
          <div
            className="text-center mt-4 sm:w-1/4 ssm:w-1/4 md:w-1/6 lg:w-1/6 hover:cursor-pointer"
            onClick={handleRedirect7}
          >
            <img
              className="h-11 ml-7 md:ml-16 lg:ml-16"
              src={BedBug}
              alt="Bed Bug Service"
            />
            <Link
              to="/bedbug"
              className="flex items-center justify-center text-black py-3 px-6 rounded-lg focus:outline-none focus:ring-blue-400"
            >
              Bed Bug
            </Link>
          </div>

          {/* General Pest Control */}
          <div
            className="text-center mt-4 sm:w-1/4 ssm:w-1/4 md:w-1/6 lg:w-1/6 hover:cursor-pointer"
            onClick={handleRedirect8}
          >
            <img
              className="h-11 ml-7 md:ml-16 lg:ml-16"
              src={General}
              alt="General Pest Control"
            />
            <Link
              to="/sanitization"
              className="flex items-center justify-center text-black py-3 px-6 rounded-lg  focus:outline-none focus:ring-blue-400"
            >
              Sanitization
            </Link>
          </div>

          {/* FleaFly Services */}
          <div
            className="text-center mt-4 sm:w-1/4 ssm:w-1/4 md:w-1/6 lg:w-1/6 hover:cursor-pointer"
            onClick={handleRedirect9}
          >
            <img
              className="h-11 ml-7 md:ml-16 lg:ml-16"
              src={FleaFly}
              alt="FleaFly Services"
            />
            <Link
              to="/fleafly"
              className="flex items-center justify-center text-black py-3 px-6 rounded-lg focus:outline-none focus:ring-blue-400"
            >
              Flea & Fly
            </Link>
          </div>

          {/* Agriculture Service */}
          <div
            className="text-center mt-4 sm:w-1/4 ssm:w-1/4 md:w-1/6 lg:w-1/6 hover:cursor-pointer"
            onClick={handleRedirect10}
          >
            <img
              className="h-11 ml-1 md:ml-16 lg:ml-16"
              src={WaterPurify}
              alt="WaterPurify Service"
            />
            <Link
              to="/waterProffing"
              className="flex items-center justify-center text-black py-3 gap-12 rounded-lg focus:outline-none focus:ring-blue-400"
            >
              Water Proofing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PestOptionsPage;
