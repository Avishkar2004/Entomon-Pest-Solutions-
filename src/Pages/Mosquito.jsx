import React, { useState } from "react";
import { Link } from "react-router-dom";
import Mosquitos1 from "../assets/Mosquito/mosquito1.webp";
import Mosquitos2 from "../assets/Mosquito/mosquito2.webp";
import MosquitoSafe from "../assets/Mosquito/mm.avif";
import MosquitoControl from "../assets/Mosquito/msd.jpg";
import MosquitoControl2 from "../assets/Mosquito/gpp.jpeg";

const Mosquito = () => {
  const [selectOption, setSelectOption] = useState("1 bhk");
  const [price, setPrice] = useState(599);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectOption(selectedValue);

    // Update price based on the selected option
    if (selectedValue === "1 BHK") {
      setPrice(599);
    } else if (selectedValue === "2 BHK") {
      setPrice(999);
    } else if (selectedValue === "3 BHK") {
      setPrice(1299);
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
            Experties In Mosquito Treatement
          </p>
        </div>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img
            src={Mosquitos1}
            alt=""
            className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
            loading="lazy"
          />
          <img
            src={Mosquitos2}
            alt=""
            className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
            loading="lazy"
          />
          <img
            src={MosquitoSafe}
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
              4.50 <span className="text-slate-400 font-normal">(159)</span>
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
          We specialize in effectively treating and eliminating Mosquitos from
          your home or business, using proven methods. Our goal is to ensure
          complete eradication and provide a long-term solution to protect your
          property from further Mosquito infestations.
        </p>
      </div>
      <div className="text-center mt-10">
        <h1 className="text-[30px] font-bold">PRICE CALCULATOR</h1>
      </div>

      <div className="container mx-auto mt-10 rounded-lg shadow-lg hover:shadow-2xl overflow-hidden bg-white">
        <div className="lg:flex items-center">
          {/* Image */}
          <div className="lg:w-1/2 relative">
            <img
              src={MosquitoSafe}
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

      <div className="py-10 mt-9 bg-slate-100 rounded-2xl shadow-xl hover:shadow-orange-100 hover:shadow-2xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4"
            style={{
              color: "green",
              fontSize: "16",
              fontFamily: "Times New Roman Georgia Garamond",
            }}
          >
            Get Rid of Mosquitoes
          </h1>

          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              1. Eliminate Mosquito Breeding Sites-Remove Standing Water
            </h2>
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
              style={{ fontFamily: "sans-serif" }}
            >
              Mosquitoes thrive in tropical weather but are found throughout the
              INDIA. Many species (not all) rest during the day in dense
              vegetation such as tall grass, weeds, and shrubs. Any successful
              mosquito control program should target these areas.
            </p>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              2. Spray Professional Residual Insecticides-To Get Rid Of Adult
              Mosquitoes
            </h2>
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
              style={{ fontFamily: "sans-serif" }}
            >
              Adult mosquitoes are commonly found in bushes and shrubs because
              they feed on plant nectar. Many types of adult mosquitoes are
              found resting in vegetation during the daytime.
            </p>
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
              style={{ fontFamily: "sans-serif" }}
            >
              <ul className="list-disc ">
                <li className="text-red-500">
                  <p className="text-gray-700">
                    Trim and get rid of the overgrowth of weeds.
                  </p>
                </li>
                <li className="text-red-500">
                  <p className="text-gray-700">
                    To get rid of adult mosquitoes, spray the foliage of bushes
                    and shrubs, lower limbs of shade trees, tall grass, and
                    shaded areas with a residual insecticide.
                  </p>
                </li>
              </ul>
            </p>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              3. Using Foggers and Misting System Compounds
            </h2>
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
              style={{ fontFamily: "sans-serif" }}
            >
              We have both high-end foggers and propane foggers to apply fogging
              compounds for mosquito control. Fogging enables you to coat the
              leaves and foliage more effectively.
            </p>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Prevent Mosquitoes
            </h2>
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
              style={{ fontFamily: "sans-serif" }}
            >
              Mosquitoes can lay eggs in sources of standing water such as:
            </p>

            <ul className="list-disc ">
              <li className="text-red-500">
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  puddles{" "}
                </p>
              </li>

              <li className="text-red-500">
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  ponds
                </p>
              </li>

              <li className="text-red-500">
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  lakes
                </p>
              </li>

              <li className="text-red-500">
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  children's toys
                </p>
              </li>
              <li className="text-red-500">
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  ditches
                </p>
              </li>

              <li className="text-red-500">
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  old tires
                </p>
              </li>
              <li className="text-red-500">
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  clogged gutters
                </p>
              </li>
              <li className="text-red-500">
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  buckets
                </p>
              </li>
              <li className="text-red-500">
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  flower pots
                </p>
              </li>
              <li className="text-red-500">
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  poorly maintained pools
                </p>
              </li>

              <li className="text-red-500">
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  bird baths
                </p>
              </li>
            </ul>
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
              style={{ fontFamily: "sans-serif" }}
            >
              Eliminate or treat these sources with a mosquito larvicide
              whenever possible.
            </p>
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
        <div class="flex flex-col sm:flex-row md:gap-8 items-center sm:ml-0 md:ml-[-1rem] mr-0 md:mr-[-6rem] xxl:ml-22 lg:mr-5 lg:ml-36">
          <div class="max-w-2xl">
            <div class="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={MosquitoControl}
                alt="Termite Control"
                class="w-full h-auto sm:h-[21rem] md:h-[21rem] lg:h-[21rem] xl:h-[21rem] xxl:h-[21rem] object-cover rounded-lg"
              />
            </div>
          </div>
          <div class="max-w-2xl mt-4 sm:mt-0 px-4 sm:px-8 w-auto">
            <div class="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={MosquitoControl2}
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
            <span class="font-semibold">Breeding grounds: </span>
            Mosquitoes lay their eggs in standing water, so eliminating
            potential breeding sites is essential. Regularly check and empty
            containers like flowerpots, bird baths, and clogged gutters where
            stagnant water can accumulate.
          </p>
          <p class="mb-4 sm:text-base">
            <span class="font-semibold">HBites and buzzing sounds: </span>
            Mosquitoes are known for their itchy bites. If you notice an
            increase in mosquito bites, especially during peak mosquito activity
            times (dawn and dusk), it may indicate a higher mosquito population.
            Additionally, the buzzing sound of female mosquitoes is a common
            sign of their presence.
          </p>
          <p class="mb-4 sm:text-base">
            <span class="font-semibold"> Preventive measures:</span>
            Use screens on windows and doors to keep mosquitoes out of your
            home. Consider using mosquito nets while sleeping, wearing long
            sleeves and pants, and using insect repellent to protect yourself
            from bites.
          </p>
          <p class="sm:text-base">
            <span class="font-semibold">Professional mosquito control:</span>
            If mosquito infestations are severe, professional pest control
            services can help. Mosquito control methods may include the use of
            insecticides, larvicides, and fogging to reduce adult mosquito
            populations.
          </p>
        </div>

        <div class="mt-10 flex flex-col items-start text-start container font-bold">
          <ul class="list-disc pl-6 space-y-2">
            <li>
              Disease Vectors: Mosquitoes can transmit diseases such as malaria,
              dengue, Zika, and West Nile virus.
            </li>
            <li>
              Breeding Sites: Mosquitoes breed in standing water, laying their
              eggs on the water's surface.
            </li>
            <li>
              Attracted to Odors: Mosquitoes are attracted to body heat, carbon
              dioxide, and body odors when seeking hosts.
            </li>
            <li>
              Prevention: Measures to prevent mosquito bites include using
              repellents, wearing protective clothing, and using bed nets.
            </li>
            <li>
              Day and Night Activity: Mosquitoes are most active during dawn and
              dusk, but some species are active during the day.
            </li>
            <li>
              Global Distribution: Mosquitoes are found worldwide, except in
              extreme cold or high-altitude environments.
            </li>
            <li className="text-red-500">
              Species Diversity: There are over 3,500 species of mosquitoes,
              each with its own characteristics and habitat preferences.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Mosquito;
