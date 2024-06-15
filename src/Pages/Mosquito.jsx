import React, { useState } from "react";
import { Link } from "react-router-dom";
import MosquitoControl2 from "../assets/Mosquito/gpp.jpeg";
import MosquitoSafe from "../assets/Mosquito/mm.avif";
import Mosquitos1 from "../assets/Mosquito/mosquito1.webp";
import Mosquitos2 from "../assets/Mosquito/mosquito2.webp";
import MosquitoControl from "../assets/Mosquito/msd.jpg";

const locations = [
  'Aundh-pune',
  'hinjewadi-pune',
  'wakad-pune',
  'hadapsar-pune',
  'pimpri-chinchwad-pune',
  'bavdhan-pune',
  'chandan-nagar-pune',
  'boat-club-road-pune',
  'shivajinagar-pune',
  'sangvi-pune',
  'nigdi-pune',
  'koregaon-park-pune',
  'bibvewadi-pune',
  'bhugaon-pune',
  'ambegaon-budruk-pune',
  'bhukum-pune',
  'dhankawadi-pune',
  'kalewadi-pune',
  'kasarwadi-pune',
  'maan-pune',
  'moshi-pune',
  'phugewadi-pune',
  'magarpatta-pune',
  'kothrud-pune',
  'vishranthwadi-pune',
  'wagholi-pune',
  'baner-pune',
  'kondhwa-pune',
  'katraj-pune',
  'karve-nagar-pune',
  'kalyani-nagar-pune',
  'undri-pune',
  'keshav-nagar-pune',
  'mundhwa-pune',
  'dhanori-pune',
  'dhayari-pune',
  'fursungi-pune',
  'ghorpadi-pune',
  'khadki-pune',
  'pimple-nilakh-pune',
  'tathawade-pune',
  'thergaon-pune',
  'yerwada-pune',
  'kharadi-pune',
  'pimple-gurav-pune',
  'pimple-saudagar-pune',
  'viman-nagar-pune',
  'senapati-bapat-road-pune',
  'ravet-pune',
  'erandwane-pune',
  'phursungi-pune',
  'model-colony-pune',
  'talawade-pune',
  'wadgaon-sheri-pune',
  'vishal-nagar-pune',
  'lohagaon-pune',
  'manjri-pune',
  'pashan-pune',
  'sus-pune',
  'balewadi-pune',
  'warje-pune',
  'bhosari-pune',
  'chakan-pune',
  'dapodi-pune'
];


const Mosquito = () => {

  const [isExpanded, setIsExpanded] = useState(false)

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
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
            Experties In Mosquito Treatement
          </p>
        </div>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img
            src={Mosquitos1}
            alt="Mosquitos Pest Control"
            className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
            loading="lazy"
          />
          <img
            src={Mosquitos2}
            alt="Mosquitos Pest Control"
            className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
            loading="lazy"
          />
          <img
            src={MosquitoSafe}
            alt="Mosquitos Pest Control"
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

      <div className="container mx-auto mt-10 rounded-lg shadow-lg hover:shadow-2xl overflow-hidden bg-white">
        <div className="lg:flex items-center">
          {/* Image */}
          <div className="lg:w-1/2 relative">
            <img
              src={MosquitoSafe}
              alt="Mosquitos Pest Control"
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
            {isExpanded && (
              <>
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
              </>
            )}
            <button onClick={toggleReadMore}
              className="mt-4 text-indigo-600 hover:text-indigo-800 focus:outline-none"
            >{isExpanded ? "Read Less" : "Read More"}</button>
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
                alt="Mosquitos Pest Control"
                class="w-full h-auto sm:h-[21rem] md:h-[21rem] lg:h-[21rem] xl:h-[21rem] xxl:h-[21rem] object-cover rounded-lg"
              />
            </div>
          </div>
          <div class="max-w-2xl mt-4 sm:mt-0 px-4 sm:px-8 w-auto">
            <div class="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={MosquitoControl2}
                alt="Mosquitos Pest Control"
                class="w-full h-auto sm:h-[21rem] md:h-[21rem] lg:h-[21rem] xl:h-[21rem] xxl:h-[21rem] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>


      {/* Blog section */}
      <div className="container mx-auto mt-10 px-4 sm:px-0">
        <h1 className="text-center text-4xl font-bold mt-3 text-gray-800">Blogs</h1>

        <div className="grid gap-10 mt-10">
          {/* First Blog */}
          <div className="rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105">
            <div className="flex flex-col sm:flex-row">
              <img
                src={Mosquitos1}
                alt="Mosquito Control"
                className="w-full h-64 sm:w-72 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  HOW TO GET RID OF MOSQUITOES?
                </h2>
                <p className="mt-3 text-gray-600">
                  Mosquitoes are more than just a nuisance. These resilient pests can carry diseases, cause itchy bites, and generally compromise the comfort of your living space. If you’ve recently taken the step to reclaim your home from these unwelcome guests…
                </p>
                <Link to="/Mosquitoblog1" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Second Blog */}
          <div className="rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105">
            <div className="flex flex-col sm:flex-row">
              <img
                src={Mosquitos2}
                alt="Mosquito Control"
                className="w-full h-64 sm:w-72 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  WHEN SHOULD I TREAT MY HOUSE FOR MOSQUITOES?
                </h2>
                <p className="mt-3 text-gray-600">
                  Mosquitoes are often called the “silent invaders” because of their ability to enter your home undetected and spread diseases such as malaria, dengue, and Zika virus. Each year, mosquitoes cause numerous health issues and discomfort…
                </p>
                <Link to="/Mosquitoblog2" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>


      </div>



      <hr className=" mt-8 border-t border-b border-gray-300" />

      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-black mb-6">Important Mosquito Control FAQs</h1>

        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. What are charges for mosquito control services in Pune?</h3>
          <p className="text-gray-700 mt-3">Estimated charges for mosquito control services in Pune can be in the range of Rs 1200 to Rs 8200 depending upon the size of the property and level of infestation.</p>
        </div>
        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. Why hiring mosquito control services in Pune is imperative?</h3>
          <p className="text-gray-700 mt-3">We at Get Mosquito Control are in the niche for several years. Hence, we completely understand the needs of professional mosquito control services. We understand well that mosquitoes are a nuisance. They are a great threat to health and are noted for spreading diseases. So, it is imperative to hire professional mosquito control services in Pune to get rid of life-threatening mosquitoes.</p>
        </div>
        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. What are estimated charges for mosquito inspection in Pune?</h3>
          <p className="text-gray-700 mt-3">The estimated charges for mosquito inspection services in Pune will vary based on the size of the property and the extent of the inspection required. It can range from Rs 500 to Rs 2000.</p>
        </div>
        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. How long does mosquito treatment last?</h3>
          <p className="text-gray-700 mt-3">The duration of mosquito treatment effectiveness can vary depending on factors such as the type of treatment used, the severity of the infestation, and environmental conditions. Generally, mosquito treatments can last anywhere from a few weeks to a few months.</p>
        </div>
        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. Is mosquito treatment safe for pets and children?</h3>
          <p className="text-gray-700 mt-3">Most mosquito treatments are formulated to be safe for pets and children when applied by trained professionals following recommended guidelines. However, it's essential to discuss any concerns with your mosquito control provider and take necessary precautions during and after the treatment.</p>
        </div>
        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. How can I prevent mosquito infestation in my home?</h3>
          <p className="text-gray-700 mt-3">To prevent mosquito infestation, you can take measures such as eliminating standing water sources, sealing cracks and crevices, using mosquito repellents, and scheduling regular mosquito inspections.</p>
          <hr className=" mt-8 border-t border-b border-gray-300" />
        </div>
        <section>
          <h3 className='text-3xl font-bold text-black mb-6'>Local Mosquito Control in Pune Near Me :</h3>
          <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4'>
            {locations.map((location) => (
              <ul key={location}>
                <Link className="text-blue-700 text-sm" to={`/mos/${location}`}>
                  Mosquito Control in {location.split('-').map(word => word.charAt(0, 2).toUpperCase() + word.slice(1)).join(", ")}
                </Link>
              </ul>
            ))}
          </div>
        </section>
      </div>


    </main>
  );
};

export default Mosquito;
