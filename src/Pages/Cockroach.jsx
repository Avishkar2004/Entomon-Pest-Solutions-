import React, { useState } from "react";
import { Link } from "react-router-dom";
import CockroachSafe from "../assets/Cockroach/cockroach.png";
import Cockroach1 from "../assets/Cockroach/cockroach1.webp";
import Cockroach2 from "../assets/Cockroach/cockroach2.webp";
import Cockroachs from "../assets/Cockroach/safe.png";
import BeachHouse from "../assets/Termite/beach-house.jpg";

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


const Cockroach = () => {
  const [isExpanded, setIsExpanded] = useState(false)

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

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
        <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">
            Experties In Cockroach Treatment
          </p>
        </div>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img
            src={Cockroachs}
            alt="Cockroach Treatment in pune"
            className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
            loading="lazy"
          />
          <img
            src={BeachHouse}
            alt="Cockroach Treatment in pune"
            className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
            loading="lazy"
          />
          <img
            src={CockroachSafe}
            alt="Cockroach Treatment in pune"
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
              4.59 <span className="text-slate-400 font-normal">(118)</span>
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
          We specialize in effectively treating and eliminating Cockroachs from
          your home or business, using proven methods. Our goal is to ensure
          complete eradication and provide a long-term solution to protect your
          property from further Cockroach infestations.
        </p>
      </div>


      <div className="container mx-auto mt-10 rounded-lg shadow-lg hover:shadow-2xl overflow-hidden bg-white">
        <div className="lg:flex items-center">
          {/* Image */}
          <div className="lg:w-1/2 relative">
            <img
              src={BeachHouse}
              alt="Cockroach Treatment in pune"
              className="w-full h-auto lg:h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:w-1/2 p-8 lg:p-12 text-center lg:text-center">
            <Link
              to="/contact"
              onClick={scrollToTopBook}
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
            Cockroach Control and Treatment
          </h1>

          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Step 1 – Identify the Problem :-
            </h2>
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
              style={{ fontFamily: "sans-serif" }}
            >
              Confirm that you are dealing with a cockroach infestation.
              Different species may require different treatment methods.
            </p>

            {isExpanded && (
              <>

                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Step 2 – Sanitation :-
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Maintain a clean and sanitary environment. Cockroaches are
                  attracted to food crumbs, spills, and garbage. Clean up spills
                  promptly, store food in airtight containers, and regularly dispose
                  of garbage.
                </p>

                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Step 3 – Eliminate Hiding Places :-
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Reduce clutter and eliminate hiding spots for cockroaches. Seal
                  cracks and crevices in walls, floors, and around pipes.
                </p>

                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Step 4 – Use Cockroach Baits :-
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Place cockroach baits in areas where cockroaches are likely to
                  travel. Baits contain a slow-acting poison that cockroaches carry
                  back to their nests, affecting the entire population.
                </p>

                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Step 5 – Cockroach Gel Bait :-
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Apply gel bait in cracks, crevices, and other hiding spots. This
                  attracts cockroaches and acts as a potent poison.
                </p>

                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Step 6 – Insect Growth Regulators (IGRs) :-
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  IGRs disrupt the cockroach life cycle by preventing nymphs from
                  reaching maturity. This can help control the population over time.
                </p>

                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Step 7 – Seal Entry Points :-
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Identify and seal any entry points, such as cracks in walls, gaps
                  around windows and doors, and openings around pipes. This helps
                  prevent new cockroaches from entering your home.
                </p>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Step 8 – : Regular Monitoring :-
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Continue monitoring for signs of cockroach activity even after
                  treatment. If needed, repeat the application of baits or other
                  control methods.
                </p>
              </>
            )}
            <button onClick={toggleReadMore}
              className="mt-4 text-indigo-600 hover:text-indigo-800 focus:outline-none"
            >{isExpanded ? "Read Less" : "Read More"}
            </button>
            <p
              className="text-base sm:text-lg lg:text-xl text-red-500 mb-2"
              style={{ fontFamily: "sans-serif" }}
            >
              For further details or to schedule an inspection, please contact
              us today. We are here to help.{" "}
              <Link onClick={scrollToTop} to="" className="text-blue-300 underline">
                call us
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div class="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:ml-36 sm:flex-row md:gap-8 items-center sm:ml-0 md:ml-[-1rem] mr-0 md:mr-[-6rem] xxl:ml-22 lg:mr-5">
          <div class="max-w-2xl">
            <div class="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={Cockroach1}
                alt="cockroach Control"
                class="w-full h-auto sm:h-[21rem] md:h-[21rem] lg:h-[21rem] xl:h-[21rem] xxl:h-[21rem] object-cover rounded-lg"
              />
            </div>
          </div>
          <div class="max-w-2xl mt-4 sm:mt-0 px-4 sm:px-8 w-auto">
            <div class="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={Cockroach2}
                alt=""
                class="w-full h-auto sm:h-[21rem] md:h-[21rem] lg:h-[21rem] xl:h-[21rem] xxl:h-[21rem] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>


      {/* Blog Section */}
      <div className="container mx-auto mt-10 px-4 sm:px-0">
        <h1 className="text-center text-4xl font-bold mt-3 text-gray-800">Blogs</h1>
        <div className="grid gap-10 mt-10">
          {/* First Blog */}
          <div className="rounded-lg shadow-lg overflow-hidden bg-white">
            <div className="flex flex-col sm:flex-row">
              <img
                src={Cockroach1}
                alt="Cockroach Control"
                className="w-full h-64 sm:w-72 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  HOW TO GET RID OF COCKROACHES?
                </h2>
                <p className="mt-3 text-gray-600">
                  Roaches are more than just a nuisance. These resilient pests can carry diseases, trigger allergies, and generally compromise the cleanliness and comfort of your living space. If you’ve recently taken the step to reclaim your home from these unwelcome guests…
                </p>
                <Link to="/blog1" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Second Blog */}
          <div className="rounded-lg shadow-lg overflow-hidden bg-white">
            <div className="flex flex-col sm:flex-row">
              <img
                src={Cockroach2}
                alt="Cockroach Control"
                className="w-full h-64 sm:w-72 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  WHEN SHOULD I TREAT MY HOUSE FOR COCKROACHES?
                </h2>
                <p className="mt-3 text-gray-600">
                  Cockroaches are persistent pests known for their ability to survive in diverse environments. They can contaminate food, spread bacteria, and exacerbate allergies. Knowing when to treat your house for cockroaches is crucial in preventing infestations…
                </p>
                <Link to="/blog2" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className=" mt-8 border-t border-b border-gray-300" />

      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-black mb-6">Important Cockroach Control FAQs</h1>

        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. What are charges for cockroach control services in Pune?</h3>
          <p className="text-gray-700 mt-3">Estimated charges for cockroach control services in Pune can be in the range of Rs 800 to Rs 6000 depending upon the size of the property and level of infestation.</p>
        </div>

        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. Why hiring cockroach control services in Pune is imperative?</h3>
          <p className="text-gray-700 mt-3">We at Get Cockroach Control have been in the niche for several years. Hence, we completely understand the needs of professional cockroach control services. We understand well that cockroaches are a nuisance. They are a great threat to health and are noted for spreading diseases. So, it is imperative to hire professional cockroach control services in Pune to get rid of life-threatening cockroaches.</p>
        </div>

        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. What are estimated charges for cockroach inspection in Pune?</h3>
          <p className="text-gray-700 mt-3">The estimated charges for cockroach inspection services in Pune will vary based on the size of the property and the extent of the inspection required. It can range from Rs 500 to Rs 1500.</p>
        </div>

        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. How long does cockroach treatment last?</h3>
          <p className="text-gray-700 mt-3">The duration of cockroach treatment effectiveness can vary depending on factors such as the type of treatment used, the severity of the infestation, and environmental conditions. Generally, cockroach treatments can last anywhere from a few months to a year.</p>
        </div>

        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. Is cockroach treatment safe for pets and children?</h3>
          <p className="text-gray-700 mt-3">Most cockroach treatments are formulated to be safe for pets and children when applied by trained professionals following recommended guidelines. However, it's essential to discuss any concerns with your cockroach control provider and take necessary precautions during and after the treatment.</p>
        </div>

        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. How can I prevent cockroach infestation in my home?</h3>
          <p className="text-gray-700 mt-3">To prevent cockroach infestation, you can take measures such as eliminating food and water sources, sealing cracks and crevices, keeping your home clean, and scheduling regular cockroach inspections.</p>
          <hr className=" mt-8 border-t border-b border-gray-300" />
        </div>

        <section>
          <h3 className="text-3xl font-bold text-black mb-6">Local Cockroach Control in Pune Near Me :</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {locations.map((location) => (
              <ul key={location}>
                <Link className="text-blue-700 text-sm" to={`/cock/${location}`}>
                  Cockroach Control in {location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </Link>
              </ul>
            ))}
          </div>
        </section>
      </div>



    </main>
  );
};

export default Cockroach;
