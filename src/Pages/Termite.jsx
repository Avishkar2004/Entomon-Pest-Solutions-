import React, { useState } from "react";
import { Link } from "react-router-dom";
import TermiteGlow from "../assets/Termite/glow.jpg";
import TermiteNormal from "../assets/Termite/normal.jpg";
import BeachHouse from "../assets/Termite/beach-house.jpg";
import TermitePhoto from "../assets/Termite/TermitePhoto.webp";
import TermitePhoto2 from "../assets/Termite/TermitePhoto2.webp";

const Termite = () => {
  const [selectOption, setSelectOption] = useState("1 bhk");
  const [price, setPrice] = useState(1599);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectOption(selectedValue);

    // Update price based on the selected option
    if (selectedValue === "1 BHK") {
      setPrice(1599);
    } else if (selectedValue === "2 BHK") {
      setPrice(1900);
    } else if (selectedValue === "3 BHK") {
      setPrice(2100);
    } else if (selectedValue === "Other") {
      setPrice(0);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };

  const scrollToTopBook = () => {
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
            Experties In Termite Treatement
          </p>
        </div>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img
            src={TermiteNormal}
            alt=""
            className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
            loading="lazy"
          />
          <img
            src={BeachHouse}
            alt=""
            className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
            loading="lazy"
          />
          <img
            src={TermiteGlow}
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
              4.89 <span className="text-slate-400 font-normal">(128)</span>
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
          We specialize in effectively treating and eliminating termites from
          your home or business, using proven methods. Our goal is to ensure
          complete eradication and provide a long-term solution to protect your
          property from further termite infestations.
        </p>
      </div>
      <div className="text-center mt-10">
        <h1
          className="text-3xl font-semibold mb-5 text-center"
          style={{
            color: "green",
            fontSize: "16",
            fontFamily: "Times New Roman Georgia Garamond",
          }}
        >
          Approximate Price
        </h1>
      </div>

      {/* from here i made responsive */}
      <div className="container mx-auto mt-10 rounded-lg shadow-lg hover:shadow-2xl overflow-hidden bg-white">
        <div className="lg:flex items-center">
          {/* Image */}
          <div className="lg:w-1/2 relative">
            <img
              src={BeachHouse}
              alt="Luxury Apartment"
              className="w-full h-auto lg:h-full object-cover"
            />
            <div className="absolute inset-0 bg-indigo-900 opacity-40"></div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 p-8 lg:p-12 text-center lg:text-center">
            {/* <select
              value={selectOption}
              onChange={handleOptionChange}
              className="w-full py-3 px-4 border rounded-lg mb-12 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
            >
              <option>1 BHK</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
              <option>Other</option>
            </select> */}

            {/* <div className="text-xl lg:text-2xl text-indigo-600 mb-6">
              Price: ₹{price}
            </div> */}
            <Link
              to="/contact"
              onClick={scrollToTopBook}
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-3 px-10 rounded-xl focus:outline-none focus:ring focus:ring-indigo-300 transition duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      <div className="py-10 mt-5 bg-slate-100  rounded-2xl shadow-xl hover:shadow-orange-100 hover:shadow-2xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4"
            style={{
              color: "green",
              fontSize: "16",
              fontFamily: "Times New Roman Georgia Garamond",
            }}
          >
            Termite Control & Treatement.
          </h1>

          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Step 1 – The inspection :-
            </h2>
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
              style={{ fontFamily: "sans-serif" }}
            >
              The first step is finding termite mud tubes. As a homeowner, it's
              a good idea to walk around your house regularly. Termites make
              these tubes from dirt and poop to travel from the ground, where
              they live, to your home's wooden parts they eat.
            </p>

            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Step 2 – Scraping and removing the tubes :-
            </h2>
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
              style={{ fontFamily: "sans-serif" }}
            >
              Being thorough is key! Make sure to completely scrape and remove
              all the tubes. This helps prevent any chance of re-infestation.
            </p>

            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Step 3 – Digging a trench :-
            </h2>
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
              style={{ fontFamily: "sans-serif" }}
            >
              Digging a trench along the foundation footing is necessary to
              treat the colony underground and set up a barrier to prevent
              future infiltration.
            </p>

            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Step 4 – 1st Treatment :-
            </h2>
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
              style={{ fontFamily: "sans-serif" }}
            >
              The first treatment is applied in the trench using top quality EPA
              regulated termiticide materials.
            </p>

            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Step 5 – Backfilling :-
            </h2>
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
              style={{ fontFamily: "sans-serif" }}
            >
              Proper backfilling of the trench to ensure proper containment of
              the termiticide as well as protection from odors and exposure.
            </p>

            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Step 6 – Treating the rim joist :-
            </h2>
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
              style={{ fontFamily: "sans-serif" }}
            >
              The final step is treating the rim joist with a borate. Borate has
              a very low toxicity level and is highly effective in the
              preservation of your home’s important wooden substructure. This is
              an additional step to ensure the protection of your home.
            </p>

            <h2 className="text-lg font-semibold text-gray-800 mb-2"></h2>
            <p
              className="text-base sm:text-lg lg:text-xl text-red-500 mb-2"
              style={{ fontFamily: "sans-serif" }}
            >
              For further details or to schedule an inspection, please contact
              us today. We are here to help.
              <a href="/" className="text-blue-300 underline">
                call us
              </a>
            </p>
          </div>
        </div>
      </div>

      <div class="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row md:gap-8 items-center sm:ml-0 md:ml-[-1rem] mr-0 md:mr-[-6rem] xxl:ml-22 lg:mr-5 lg:ml-36">
          <div class="max-w-2xl">
            <div class="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={TermitePhoto}
                alt="Termite Control"
                class="w-full h-auto sm:h-[21rem] md:h-[21rem] lg:h-[21rem] xl:h-[21rem] xxl:h-[21rem] object-cover rounded-lg"
              />
            </div>
          </div>
          <div class="max-w-2xl mt-4 sm:mt-0 px-4 sm:px-8 w-auto">
            <div class="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={TermitePhoto2}
                alt="Termite Control"
                class="w-full h-auto sm:h-[21rem] md:h-[21rem] lg:h-[21rem] xl:h-[21rem] xxl:h-[21rem] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-4xl mt-10 mx-auto text-center">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
          Silent Destroyers
        </h1>

        <div class="p-4 sm:p-8 lg:p-12 bg-gray-100 rounded-lg shadow-md sm:ml-0 md:ml-[-1rem] md:mr-[-1rem] lg:ml-[-6rem] lg:mr-[-5rem] xl:ml-[-13rem] xl:mr-[-13rem] text-left">
          <p class="mb-4 sm:text-base">
            <span class="font-semibold" style={{ fontFamily: "sans-serif" }}>
              Termites are wood-eating insects that are often confused with
              ants. They are more closely related to cockroaches. Termites are
              also called wood bugs because they have destroyed structures and
              households
            </span>
          </p>
          <p class="mb-4 sm:text-base" style={{ fontFamily: "sans-serif" }}>
            <span class="font-semibold">
              Here are some facts about termites:
            </span>
            <br></br>
            They survive mostly in warm and humid temperatures. They can break
            down wood into smaller substances, making it easier for them to chew
            and digest. They can get into your home through a crack no bigger
            than the width of a penny. They eat 24 hours a day. They can coexist
            with other colonies, but if one goes into the other's premises, it
            will be immediately killed and removed. The only kind of termite
            that has wings is the reproductive swarmer.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Termite;
