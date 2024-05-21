import React, { useState } from "react";
import { Link } from "react-router-dom";
import Ants1 from "../assets/Ant/Ant1.webp";
import Ants2 from "../assets/Ant/Ant2.webp";
import AntSafe from "../assets/Ant/Ant3.webp";
import AntControl from "../assets/Ant/Ant4.webp";
import AntControl2 from "../assets/Ant/Ant5.webp";

const Ant = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded)
  }

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
            Experties In Ant Treatement
          </p>
        </div>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img
            src={Ants1}
            alt="fly killer"
            className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
            loading="lazy"
          />
          <img
            src={Ants2}
            alt="flea beetle"
            className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
            loading="lazy"
          />
          <img
            src={AntSafe}
            alt="fruit fly killer"
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
              4.90 <span className="text-slate-400 font-normal">(45)</span>
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
        <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4"></div>
        <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-base">
          We specialize in effectively treating and eliminating Ants from your
          home or business, using proven methods. Our goal is to ensure complete
          eradication and provide a long-term solution to protect your property
          from further Ant infestations.
        </p>
      </div>

      <div className="container mx-auto mt-10 rounded-lg shadow-lg hover:shadow-2xl overflow-hidden bg-white">
        <div className="lg:flex items-center">
          {/* Image */}
          <div className="lg:w-1/2 relative">
            <img
              src={Ants2}
              alt="Luxury Apartment"
              className="w-full h-auto lg:h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:w-1/2 p-8 lg:p-12 text-center lg:text-center">
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
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4"
            style={{
              color: "green",
              fontSize: "16",
              fontFamily: "Times New Roman Georgia Garamond",
            }}
          >
            Ant Control and Treatment
          </h1>
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              1. Chalk{" "}
            </h2>
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
              style={{ fontFamily: "sans-serif" }}
            >
              One of the home remedies to get rid of ants is to use chalk. Chalk
              contains calcium carbonate, which helps in keeping ants away.
              Spray some powdered chalk in the areas that are the entry points
              of ants or draw a line of chalk at the entrance. To keep ants out
              of your house, draw chalk lines so that these bugs don't enter.
              While it is not clear why this line stops the ants from coming
              inside, it is surely effective. Make sure you make the line in a
              way that is out of reach of any child in the house.{" "}
            </p>

            {isExpanded && (
              <>

                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  2. Lemons{" "}
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Squeeze a lemon or place lemon peels in places from where the ants
                  enter. You can also wash your floors with water that has a little
                  lemon juice added to it. Ants don't like the smell of lemon juice
                  so they will keep away. Anything sour and bitter may keep the ants
                  away, but any sugar is the ants' best friend. So ensure you do not
                  keep anything sweet that may attract the ants in some way or the
                  other. Keep your kitchen slab clean and place the peels right
                  there.
                </p>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  3. Oranges{" "}
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Oranges are the same as lemons; they keep the ants away from
                  visiting your house. Make a paste of one cup of warm water and a
                  few orange peels, which will help in getting rid of ants. Spread
                  this paste around the entry points of ants and wipe it afterwards.
                  You can also place orange peels on the kitchen slab or wherever
                  you think these ants may enter. It acts as a natural deterrent for
                  ants that may not only keep them but also keep them away. So,
                  bring the orange rinds to some use and ensure no ants visit your
                  house anymore.
                </p>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  4. Pepper{" "}
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Ants are pretty fond of sugar but they hate pepper. Sprinkle
                  pepper at the areas from where ants enter your house. This will
                  help to get rid of ants. Cayenne pepper or black pepper are hated
                  by ants. You can also make a solution of pepper and water and
                  spray it near the entrant areas. The pepper wouldn't kill the ants
                  but deter them from returning to your house. Make sure you clean
                  the area where you want to spray the pepper solution.{" "}
                </p>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  5. Salt
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Spreading salt near nooks and corners where ants enter the house
                  will help keep ants away. Table salt is one of the best and
                  cheapest ways to get rid of ants naturally. Use ordinary table
                  salt, not health-boosting rock salt. All you need to do is to boil
                  water and add a large amount of salt to it, stirring it until
                  dissolves. Pour into a spray bottle and spray where you think ants
                  tend to enter from.
                </p>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Step 6 - Ant Sprays and Dusts :-
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Apply ant sprays or dusts containing insecticides to eliminate
                  ants on contact. Follow product instructions carefully and use
                  with caution, especially in areas accessible to pets and children.
                </p>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Step 7 - Professional Pest Control :-
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  If the ant infestation is severe or persistent, consider seeking
                  professional pest control services. They can assess the situation
                  and use more advanced methods to eliminate the colony.
                </p>
              </>
            )}
            <button className="mt-4 text-indigo-600 hover:text-indigo-800 focus:outline-none"
              onClick={toggleReadMore}>{isExpanded ? "Read Less" : "Read More"}</button>
            <p
              className="text-base sm:text-lg lg:text-xl text-red-500 mb-2"
              style={{ fontFamily: "sans-serif" }}
            >
              For further details or to schedule an inspection, please contact
              us today. We are here to help.{" "}
              <a href="/" className="text-blue-300 underline">
                call us
              </a>
            </p>
          </div>
        </div>
      </div>

      <div class="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row md:gap-8 items-center sm:ml-0 md:ml-[-1rem] mr-0 md:mr-[-6rem] xxl:ml-22 lg:mr-5 lg:ml-20">
          <div class="max-w-2xl">
            <div class="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={AntControl}
                alt="Ant Control"
                class="w-full h-auto sm:h-[21rem] md:h-[21rem] lg:h-[21rem] xl:h-[21rem] xxl:h-[21rem] object-cover rounded-lg"
              />
            </div>
          </div>
          <div class="max-w-2xl mt-4 sm:mt-0 px-4 sm:px-8 w-auto">
            <div class="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={AntControl2}
                alt="Ant Control"
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
            <span class="font-semibold"> Sightings and fecal droppings:</span>
            Antes are nocturnal creatures and tend to hide during the day. If
            you notice live Antes scurrying around at night or find small dark
            droppings resembling coffee grounds, it could indicate an
            infestation.
          </p>
          <p class="mb-4 sm:text-base">
            <span class="font-semibold">Unpleasant odor:</span>
            Antes emit a distinctive musty odor that can become noticeable in
            areas with a large population. If you detect an unpleasant smell,
            particularly in kitchen or bathroom areas, it could be a sign of a
            Ant infestation.
          </p>
          <p class="mb-4 sm:text-base">
            Dealing with a Ant infestation requires professional expertise. A
            licensed pest control company can assess the severity of the
            infestation and implement appropriate Ant control measures. This may
            include insecticide treatments, baits, and sealing entry points to
            prevent further infestations.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-start text-start container font-bold">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Antes are active mostly during nighttime or in dark, concealed
              areas.
            </li>
            <li>
              They prefer to avoid exposure to light and maintain a hidden
              presence within the colonies they infest.
            </li>
            <li>
              These resilient insects can establish their hiding spots in
              various locations, including cracks, crevices, and voids in walls,
              floors, and furniture.
            </li>
            <li>
              Ants can travel and infest new areas by navigating through gaps
              and openings, and they are also known to be carried in infested
              items such as bags, boxes, and furniture.
            </li>
            <li className="text-red-500">
              Remember, if you suspect a Ant infestation in your property, it is
              essential to contact a professional pest control service to assess
              the situation and provide effective treatment options.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Ant;
