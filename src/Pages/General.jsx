import React, { useState } from "react";
import { Link } from "react-router-dom";
import Generals1 from "../assets/General/General1.jpg";
import Generals2 from "../assets/General/General2.jpg";
import GeneralSafe from "../assets/General/General3.jpg";
import GeneralControl from "../assets/General/General4.jpg";
import GeneralControl2 from "../assets/General/General5.jpg";

const General = () => {
  const [selectOption, setSelectOption] = useState("1 bhk");
  const [price, setPrice] = useState(1299);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectOption(selectedValue);

    // Update price based on the selected option
    if (selectedValue === "1 BHK") {
      setPrice(599);
    } else if (selectedValue === "2 BHK") {
      setPrice(1999);
    } else if (selectedValue === "3 BHK") {
      setPrice(2399);
    } else if (selectedValue === "Other") {
      setPrice(0);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
        <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">
            Entire house/Colony
          </p>
        </div>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img
            src={Generals1}
            alt=""
            className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
            loading="lazy"
          />
          <img
            src={Generals2}
            alt=""
            className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
            loading="lazy"
          />
          <img
            src={GeneralSafe}
            alt=""
            className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32"
            loading="lazy"
          />
        </div>
        <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
          <dt className="sr-only">Reviews</dt>
          <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
            <svg
              width="24"
              height="24"
              fill="none"
              aria-hidden="true"
              className="mr-1 stroke-current dark:stroke-indigo-500"
            >
              <path
                d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>
              4 <span className="text-slate-400 font-normal">(498)</span>
            </span>
          </dd>
          <dt className="sr-only">Location</dt>
          <dd className="flex items-center">
            <svg
              width="2"
              height="2"
              aria-hidden="true"
              fill="currentColor"
              className="mx-3 text-slate-300"
            >
              <circle cx="1" cy="1" r="1" />
            </svg>
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1 text-slate-400 dark:text-slate-500"
              aria-hidden="true"
            >
              <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
              <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
            </svg>
            India, Pune
          </dd>
        </dl>
        <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-base">
          We specialize in effectively treating and eliminating Generals from
          your home or business, using proven methods. Our goal is to ensure
          complete eradication and provide a long-term solution to protect your
          property from further General infestations.
        </p>
      </div>
     

      <div className="container mx-auto mt-10 rounded-lg shadow-lg hover:shadow-2xl overflow-hidden bg-white">
        <div className="lg:flex items-center">
          {/* Image */}
          <div className="lg:w-1/2 relative">
            <img
              src={GeneralSafe}
              alt="Luxury Apartment"
              className="w-full h-auto lg:h-full object-cover"
            />
            <div className="absolute inset-0 bg-indigo-900 opacity-40"></div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 p-8 lg:p-12 text-center lg:text-center">
            {/* <h2 className="text-4xl text-indigo-600 font-semibold mb-4">
              Luxury Apartments
            </h2>
            <select
              value={selectOption}
              onChange={handleOptionChange}
              className="w-full py-3 px-4 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
            >
              <option>1 BHK</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
              <option>Other</option>
            </select>
            <div className="text-xl lg:text-2xl text-indigo-600 mb-6">
              Price: ₹{price}
            </div>
            <p className="text-gray-700 mb-6">
              Discover the ultimate in luxury living with our spacious
              apartments. Additional charges may apply. Contact us for details.
            </p> */}
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-3 px-8 rounded-xl focus:outline-none focus:ring focus:ring-indigo-300 transition duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      <div className="py-10 mt-9 bg-slate-100  rounded-2xl shadow-xl hover:shadow-orange-100 hover:shadow-2xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
            Sanitization{" "}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6">
            We specialize in effectively treating and eliminating General from
            your home or business, using proven methods. Our goal is to ensure
            complete eradication and provide a long-term solution to protect
            your property from further General infestations.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6">
            Just like with termites, a comprehensive inspection is necessary to
            accurately assess the extent of the General Issue and determine the
            most appropriate treatment and control measures.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6">
            For further details or to schedule an inspection, please contact us
            today. We are here to help.
          </p>
          <p
            className="text-base sm:text-lg lg:text-xl text-red-500 mb-2"
            style={{ fontFamily: "sans-serif" }}
          >
            For further details or to schedule an inspection, please contact us
            today. We are here to help.
            <a href="/" className="text-blue-300 underline">
              call us
            </a>
          </p>
        </div>
      </div>

      <div class="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row md:gap-8 items-center sm:ml-0 md:ml-[-1rem] mr-0 md:mr-[-6rem] xxl:ml-22 lg:mr-5 lg:ml-36">
          <div class="max-w-2xl">
            <div class="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={GeneralControl}
                alt="Termite Control"
                class="w-full h-auto sm:h-[21rem] md:h-[21rem] lg:h-[21rem] xl:h-[21rem] xxl:h-[21rem] object-cover rounded-lg"
              />
            </div>
          </div>
          <div class="max-w-2xl mt-4 sm:mt-0 px-4 sm:px-8 w-auto">
            <div class="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={GeneralControl2}
                alt="Termite Control"
                class="w-full h-auto sm:h-[21rem] md:h-[21rem] lg:h-[21rem] xl:h-[21rem] xxl:h-[21rem] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl pt-10 mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
          Silent Destroyers
        </h1>

        <div class="p-4 sm:p-8 lg:p-12 bg-gray-100 rounded-lg shadow-md sm:ml-0 md:ml-[-1rem] md:mr-[-1rem] lg:ml-[-6rem] lg:mr-[-5rem] xl:ml-[-13rem] xl:mr-[-13rem] text-left">
          <p class="mb-4 sm:text-base">
            <span class="font-semibold"> Visible Dirt and Grime:</span>
            If you observe visible dirt, grime, or stains on surfaces, it may
            indicate a lack of proper cleaning and sanitization. Regular
            cleaning routines are essential to prevent the buildup of
            contaminants.
          </p>
          <p class="mb-4 sm:text-base">
            <span class="font-semibold">Foul Odors:</span>
            Unpleasant smells, such as musty or moldy odors, can suggest the
            presence of bacteria or fungi. Proper cleaning and disinfection can
            help eliminate these odors and improve the overall air quality.
          </p>
          <p class="mb-4 sm:text-base">
            {" "}
            <span className="font-semibold">Presence of Mold and Mildew:</span>
            Mold and mildew thrive in damp and humid environments. If you notice
            black or greenish patches on walls, ceilings, or other surfaces, it
            could be a sign of inadequate sanitization. Addressing moisture
            issues and using appropriate cleaning agents can help prevent mold
            growth.
          </p>
          <p class="mb-4 sm:text-base">
            {" "}
            <span className="font-semibold">Illness Outbreaks:</span>
            An increase in illness outbreaks or the spread of infectious
            diseases among individuals in a specific location may indicate a
            lack of proper sanitization. Regular disinfection of high-touch
            surfaces and common areas is crucial to reduce the risk of
            infections.
          </p>
          <p class="mb-4 sm:text-base">
            {" "}
            <span className="font-semibold">Insect or Pest Infestations:</span>
            Similar to General infestations, the presence of pests or insects
            can be a sign of poor sanitization. Food residues and uncleaned
            areas can attract pests. Implementing proper sanitation practices,
            including cleaning up food spills promptly, can help prevent pest
            infestations.
          </p>
          <p class="mb-4 sm:text-base">
            {" "}
            <span className="font-semibold">Surface Contamination:</span>
            If surfaces, especially in high-traffic areas, feel sticky or have
            visible residues, it may indicate inadequate cleaning. Regular
            cleaning with appropriate sanitizing agents is necessary to maintain
            a hygienic environment.
          </p>
          <p class="mb-4 sm:text-base">
            <span className="font-semibold">
              Professional Sanitization Services:
            </span>
            For comprehensive sanitization, especially in large or commercial
            spaces, it's advisable to hire professional sanitization services.
            These services often use specialized equipment and disinfectants to
            ensure thorough cleaning and sanitation.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-start text-start container font-bold">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Nighttime or Concealed Activity: Similar to Generals preferring
              darkness, areas that are not easily visible or concealed spots may
              harbor germs and contaminants. Pay special attention to cleaning
              and sanitizing hidden corners, gaps, and voids in walls, floors,
              and furniture.
            </li>
            <li>
              Avoidance of Light: Germs and bacteria can thrive in areas with
              minimal exposure to light. Proper sanitization should include
              spaces where light may not reach easily, ensuring a comprehensive
              cleaning process in both visible and concealed areas.
            </li>
            <li>
              Establishment of Hiding Spots: Just as Generals establish hiding
              spots, bacteria and viruses can find refuge in various locations.
              Regular sanitization routines should target potential hiding
              spots, including cracks, crevices, and hard-to-reach areas where
              contaminants may accumulate.
            </li>
            <li>
              Travel and Infestation Routes: Germs can spread through contact
              and airborne transmission. Consider how people and items move
              within a space, and focus on sanitizing commonly touched surfaces,
              pathways, and frequently used items to prevent the spread of
              contaminants.
            </li>
            <li>
              Carried in Infested Items: Similar to Generals being carried in
              bags and furniture, germs can be transported through personal
              belongings. Implement proper sanitization practices for items like
              bags, packages, and commonly touched objects to reduce the risk of
              introducing contaminants into different areas.
            </li>
            <li className="text-red-500">
              Professional Sanitization Services: Just as professional pest
              control services are recommended for Generals, hiring specialized
              sanitization services is crucial for ensuring a thorough and
              effective cleaning process. These services often use advanced
              equipment and disinfectants to target hard-to-reach areas and
              achieve a high level of cleanliness.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default General;
