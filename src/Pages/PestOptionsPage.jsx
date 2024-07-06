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

  return (
    <div className="min-h-screen mb-[12rem] sm:mt-[4rem] lg:mt-[3rem] xl:mt-15 ssm:mt-[4rem] md:mt-[1rem] flex items-center justify-center">
      <Helmet>
        <title>Professional Pest Control Services Near You | Extermination and Treatment</title>
        <meta name="description" content="Get effective pest control services near you. We offer bed bug treatment, termite treatment, rodent control, mosquito control, and more. Contact us for affordable and efficient pest solutions." />
        <meta name="keywords" content="home pest control, bed bug treatment near me, termite treatment cost, roach killer, ant exterminator near me, pest control companies, bed bug removal, mosquito treatment, mosquito dunks, fumigation services, mice control, ant control, mouse control, fumigation services near me, best bed bug treatment, spider pest control, termite killer, bed bug control near me, bed bugs removal, cockroach infestation, flea control, cockroach exterminator cost, get rid of ants, get rid of mosquitoes, spider exterminator, mosquito killer outdoor, pigeon control, termite treatment near me, bed bug fumigation, white ant treatment, drain fly killer, mosquito prevention, termiticide, best way to kill mosquitoes, united pest control, bed bug prevention, get rid of flies in house, sugar ants, royal pest control, ant baits, bed bug interceptor, natural insecticide, fleas in bed, exterminator near me, aptive pest control, bed bug exterminator, wasp nest removal, bed bug exterminator near me, mice exterminator near me, rodent control near me, bee exterminator near me, rat exterminator, bee removal, mouse exterminator near me, rodent exterminator near me, mouse exterminator, mice exterminator, bug exterminator near me, bee exterminator, flea treatment, rodent removal near me, wasp removal near me, flea exterminator, termite companies near me, bug exterminator, rat control near me, bug control near me, wasp removal, wasp exterminator near me, pest control companies near me, roach exterminator, mosquito control near me, pest removal near me, local exterminators, best way to get rid of mice, mice control near me, exterminators in my area, bed bug heat treatment, wasp nest removal near me, termite exterminator, flea exterminator near me, local pest control near me, local pest control, fleas in house, bee control near me, best mosquito control, bird removal near me, mosquito spraying near me, bed bug treatment cost, wasp exterminator, emergency pest control, rodent removal, get rid of mice, bat exterminator near me, hornet nest removal, mouse control near me, american pest control, pest services near me, rat removal, wasp control near me, 24 hour pest control, bug control, pest control in my area, pest control for mice, bat control near me, best way to get rid of roaches, bifen xts, best way to get rid of bed bugs, american pest, ant infestation, flea pest control, spider exterminator near me, rat infestation, bee nest removal, pest removal, evergreen pest control, pest exterminator, affordable pest control, termite company, flea infestation, subterranean termites, mouse pest control, flea treatment for house, bird nest removal, bat exterminator, bee control, termite pest control near me, natural pest control, lawn pest control, eco pest control, scorpion pest control, environmental pest control, bird removal, green pest control, best ant killer, flea killer, bird nest removal near me, commercial pest control, wasp control, pest companies near me, insect control, get rid of rats, termite control near me, rat problem, termite protection, best way to get rid of rats, fly exterminator, ant killer indoor, yellow jacket removal, most effective bed bug treatment, outdoor pest control, rats in attic, lawn pest control near me, pigeon removal, kill bed bugs, fumigation cost, wasp pest control, mice infestation, carpenter ants in house, roach control, triguard pest control, drywood termites, flea treatment for home, best termite treatment, bed bug heat treatment cost, grub killer, national pest control companies, moth killer, grubs in lawn, get rid of bed bugs fast, professional pest control, get rid of roaches, carpenter ant killer, spider control, best flea treatment for home, roof rats, termite barrier, bug killer, best pest control company, fire ant killer, yellow jacket nest removal, residential pest control, outdoor mosquito control, flea killer for house, bird pest control, best way to get rid of mosquitoes, phoenix pest control, ant problem in house, carpenter bee treatment, pigeon pest control, natural ant killer, termite prevention treatment, ant removal, flea infestation in house, ant problem, fly killer indoor, advanced pest control, flea removal, yellow jacket nest, ant infestation in house, mouse infestation in house, aptive pest, ant control near me, best way to get rid of ants, termite fumigation, all american pest control, pest services, complete pest control, indoor mosquito killer, best way to kill bed bugs, professional roach killer, wasp deterrent, german roaches, best indoor mosquito killer, get rid of fleas in house, fruit fly infestation, indoor pest control, aphid control, fruit flies in house, best roach killer for home, grub killer for lawns, house fumigation, earwigs in house, bug killer indoor, rid a pest, wasp nest killer, rentokil prices, budget pest control, mosquitoes in house, ant killer outdoor, grub control for lawn, natural flea killer, best ant killer indoor, pest management services, get rid of flies, carpenter ant treatment, roach killer indoor, best way to get rid of flies, best fly killer, eco pest, get rid of termites, all pest control, flea killer for home, best flea killer for home, demand cs insecticide, ant treatment, rodent killer, flying ants in house, best way to get rid of fleas in house, universal pest control, all pest, best way to kill rats, best pest, pest pro, bioadvanced complete insect killer, termite control services, rats in walls, mosquito barrier, fly killer outdoor, termite baits, ipm pest control, vermin control, best outdoor ant killer, best outdoor mosquito killer, best way to get rid of rats fast, best termite killer, rodent infestation, tap insulation, rats in garden, natural bed bug killer, pro pest control, cyzmic cs, best treatment for grubs in lawn, get rid of wasps, silverfish control, get rid of carpenter bees, earwig killer, silverfish in house, get rid of wasp nest, german cockroach infestation, bird proofing, american pest management, pest control treatment, earwig infestation, aphids treatment, silverfish infestation, garden pest control, get rid of spiders, fly problem in house, flying termites in house, silverfish killer, large black ants, best fire ant killer, natural roach killer, terminator pest control, house fly infestation, get rid of moths, mosquito beater, spider infestation, yellow jacket nest in wall, get rid of carpenter ants, slug killer, termite stakes, cockroach fumigation, ants in my house, bug buster, pest control near me, pest exterminator near me, insect control near me, cockroaches, bed bugs, bed bugs in bed, termites, mosquitoes, centipedes, pest control, bed bug infestation, cockroach killer, silverfish, rodent, mosquito killers, silverfish insect, mosquito repellents, pest control services, pest control services near me, cockroach exterminator, cockroach pest control, pest, roach pest control, herbal pest control near me, kill rats, bed bug treatment, plant that repels mosquitoes, aptive company, bed bug pest control, anti termite treatment, termite treatment, cockroach killer at home, wasp insect, best pest control near me, best exterminator near me, german cockroach, fire ants, earwigs, herbal pest control, earwig insect, best roach killer, carpenter bee, best cockroach killer, rat deterrent, mosquito spraying, white ants, house centipede, green mosquito, home centipede, carpenter ants, wasp nest, pest control prices, pest control cost, exterminator prices, exterminator cost, insect killer, black ants in house, pest control india, mosquito larvae, mortein rat killer, termites in house, fly killer, pest control near me prices, black ants, urban clap pest control, exterminating, mealybugs treatment, acetamiprid insecticide, thrips control insecticide, american cockroaches, pest control for rats, cockroach exterminator near me, cockroach pest control near me, urban company pest control, rodent control, termite control, ant exterminator, ant killer, bed bug killer, rodent exterminator, bedbugs treatment, ant pest control, rodent pest control, best mosquito killer, temprid, anti termite, wood termites, best insecticide for mealybugs, cockroach killer paste, small cockroach, flying cockroaches, australian cockroach, exterminator, mosquito pest control, flying termites, cockroaches in house, eco friendly pest control, get rid of cockroaches, beneficial insects, weed management, thrips control, pharaoh ants, biological pest control, rats and mice, red ants in house, termite insect, flea insect, mite insect, centipede insect, fruit borer, granary weevil, green cockroach, rat exterminator near me, rat removal near me, termite pest control, ants in house, mosquito patches, rat pest control near me, termite and pest control, pest management, bed bug treatment at home, best rat killer, termite treatment at home, bifen insecticide, mealy bug control, baygon cockroach killer, leaf miner control, mosquito killer bat, green insect, ant insect, largest cockroach, millipedes and centipedes, bee removal near me, mosquito control, best pest control, bed bug exterminator cost, organic pest control, strongest bed bug killer, bed bug control, cockroach control, pantry moths, mice repellents, mosquito insecticide, kill flies in house, white fly control, small ants in house, bedbugs control, mosquito killer for home, small black ants in house, little black ants in house, grain moth, get rid of bed bugs, fruit fly killer, best bed bug killer, get rid of fruit flies, cockroach treatment, fly control, termite infestation, german cockroach killer, best way to kill roaches, best way to get rid of cockroaches, mosquito protection, german roach killer, best way to kill cockroaches, best insecticide, flying insect killer, organic insecticides, millipedes in house, wood borer treatment, yellow jacket wasp, house moths, small ants, tiny black ants, small black ants, bees and wasps, little black ants, ant home, tiny bed bugs, wasp bee, moth flies, wasp hornet, small mosquito, black termites, norway rat, white termites, pantry pests, black bed bugs, yellow jacket insect, white bed bugs, indian moth, surinam cockroach, red and black ants, yellow jacket bug, pest control, pest control near me, exterminator near me, exterminator, termite treatment, bed bugs, termites, aptive pest control, bed bug treatment, bee removal near me, bed bug exterminator, rodent control, bed bug exterminator near me, best pest control near me, rat exterminator near me, mice exterminator near me, mosquito control, rodent control near me, pest control services, termite control, bee exterminator near me, rat exterminator, bee removal, termite treatment cost, mouse exterminator near me, rodent exterminator near me, pest control services near me, affordable pest control near me, roach killer, mouse exterminator, mice exterminator, bug exterminator near me, ant exterminator near me, pest control companies, bee exterminator, roach exterminator near me, flea treatment, carpenter ants, ant exterminator, rodent removal near me, termite companies near me, bug exterminator, rat control near me, bug control near me, wasp removal, wasp exterminator near me, pest control companies near me, roach exterminator, mosquito control near me, rat control, pest removal near me, local exterminators, best way to get rid of mice, bed bug removal, wasp nest, mice control near me, exterminators in my area, bed bug heat treatment, wasp nest removal near me, termite exterminator, flea exterminator near me, local pest control near me, local pest control, home pest control, fleas in house, rat removal near me, bee control near me, best mosquito control, bird removal near me, mosquito treatment, pest exterminator near me, bed bug treatment near me, mosquito spraying near me, bed bug treatment cost, bed bug pest control, mosquito dunks, wasp exterminator, emergency pest control, fumigation services, rodent removal, termite pest control, best pest control, ant killer, mice control, get rid of mice, ants in house, bat exterminator near me, hornet nest removal, pest control for rats, mouse control near me, american pest control, mosquito patches, get rid of bed bugs, ant control, bed bug killer, best exterminator near me" />
      </Helmet>
      <div className="flex justify-center items-center min-h-screen">
        <div className="p-8 items-center w-full max-w-[70rem] rounded-lg  bg-white
    xsm:w-[90%] ssm:w-[85%] sm:w-[70rem]
    xl:-mt-[20rem] sm:-mt-[8rem] ssm:-mt-[11rem] md:-mt-[12rem] lg:-mt-[12rem]"
        >
          <h1 className="
        text-xl
        ssm:text-xl
        sm:text-xl
        md:text-2xl
        lg:text-2xl
        xl:text-2xl
        xxl:text-3xl
        font-semibold mb-5 text-center whitespace-nowrap text-green-500
      "
          >
            Our Pest Control Services
          </h1>

          <div className="grid grid-cols-1 xsm:grid-cols-2 ssm:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center justify-center">
            {/* Termite Control */}
            <div
              className="text-center mt-4 hover:cursor-pointer"
              onClick={() => handleRedirect("/termite")}
            >
              <div className="flex justify-center">
                <img
                  className="h-11"
                  src={Termite}
                  alt="Termite Control"
                />
              </div>
              <Link
                to="/termite"
                className="flex items-center justify-center text-black py-3 px-6 rounded-lg focus:outline-none focus:ring-blue-400"
              >
                Termite
              </Link>
            </div>

            {/* Cockroach Control */}
            <div
              className="text-center mt-4 hover:cursor-pointer"
              onClick={() => handleRedirect("/cockroach")}
            >
              <div className="flex justify-center">
                <img
                  className="h-11"
                  src={Cockroach}
                  alt="Cockroach Control"
                />
              </div>
              <Link
                to="/cockroach"
                className="flex items-center justify-center text-black py-3 px-6 rounded-lg focus:outline-none focus:ring-blue-400"
              >
                Cockroach
              </Link>
            </div>

            {/* Mosquito Control */}
            <div
              className="text-center mt-4 hover:cursor-pointer"
              onClick={() => handleRedirect("/mosquito")}
            >
              <div className="flex justify-center">
                <img
                  className="h-11"
                  src={Mosquito}
                  alt="Mosquito Control"
                />
              </div>
              <Link
                to="/mosquito"
                className="flex items-center justify-center text-black py-3 px-6 rounded-lg focus:outline-none focus:ring-blue-400"
              >
                Mosquito
              </Link>
            </div>

            {/* Mouse Control */}
            <div
              className="text-center mt-4 hover:cursor-pointer"
              onClick={() => handleRedirect("/mouse")}
            >
              <div className="flex justify-center">
                <img
                  className="h-11"
                  src={Mouse}
                  alt="Mouse Control"
                />
              </div>
              <Link
                to="/mouse"
                className="flex items-center justify-center text-black py-3 px-6 rounded-lg focus:outline-none focus:ring-blue-400"
              >
                Mouse
              </Link>
            </div>

            {/* Ant Service */}
            <div
              className="text-center mt-4 hover:cursor-pointer"
              onClick={() => handleRedirect("/ant")}
            >
              <div className="flex justify-center">
                <img
                  className="h-11"
                  src={Ant}
                  alt="Ant Service"
                />
              </div>
              <Link
                to="/ant"
                className="flex items-center justify-center text-black py-3 px-6 rounded-lg focus:outline-none focus:ring-blue-400"
              >
                Ant
              </Link>
            </div>

            {/* Bed Bug Service */}
            <div
              className="text-center mt-4 hover:cursor-pointer"
              onClick={() => handleRedirect("/bedbug")}
            >
              <div className="flex justify-center">
                <img
                  className="h-11"
                  src={BedBug}
                  alt="Bed Bug Service"
                />
              </div>
              <Link
                to="/bedbug"
                className="flex items-center justify-center text-black py-3 px-6 rounded-lg focus:outline-none focus:ring-blue-400"
              >
                Bed Bug
              </Link>
            </div>

            {/* General Pest Control */}
            <div
              className="text-center mt-4 hover:cursor-pointer"
              onClick={() => handleRedirect("/sanitization")}
            >
              <div className="flex justify-center">
                <img
                  className="h-11"
                  src={General}
                  alt="General Pest Control"
                />
              </div>
              <Link
                to="/sanitization"
                className="flex items-center justify-center text-black py-3 px-6 rounded-lg focus:outline-none focus:ring-blue-400"
              >
                Sanitization
              </Link>
            </div>

            {/* FleaFly Services */}
            <div
              className="text-center mt-4 hover:cursor-pointer"
              onClick={() => handleRedirect("/fleafly")}
            >
              <div className="flex justify-center">
                <img
                  className="h-11"
                  src={FleaFly}
                  alt="FleaFly Services"
                />
              </div>
              <Link
                to="/fleafly"
                className="flex items-center justify-center text-black py-3 px-6 rounded-lg focus:outline-none focus:ring-blue-400"
              >
                Flea & Fly
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PestOptionsPage;
