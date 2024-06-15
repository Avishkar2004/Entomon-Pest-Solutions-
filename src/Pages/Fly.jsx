import React, { useState } from "react";
import { Link } from "react-router-dom";
import Flys1 from "../assets/Fly/Fly1.webp";
import Flys2 from "../assets/Fly/Fly2.avif";
import FlySafe from "../assets/Fly/Fly3.avif";
import FlyControl from "../assets/Fly/Fly4.webp";
import FlyControl2 from "../assets/Fly/Fly5.webp";


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


const Fly = () => {
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
            Experties In Fly Treatement
          </p>
        </div>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img
            src={Flys1}
            alt="Fly Treatment in pune"
            className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
            loading="lazy"
          />
          <img
            src={Flys2}
            alt="Fly Treatment in pune"
            className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
            loading="lazy"
          />
          <img
            src={FlySafe}
            alt="Fly Treatment in pune"
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
              4.35 <span className="text-slate-400 font-normal">(51)</span>
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
          We specialize in effectively treating and eliminating Flys from your
          home or business, using proven methods. Our goal is to ensure complete
          eradication and provide a long-term solution to protect your property
          from further Fly infestations.
        </p>
      </div>


      <div className="container mx-auto mt-10 rounded-lg shadow-lg hover:shadow-2xl overflow-hidden bg-white">
        <div className="lg:flex items-center">
          {/* Image */}
          <div className="lg:w-1/2 relative">
            <img
              src={FlySafe}
              alt="Fly Treatment in pune"
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
            Fly Control and Treatment
          </h1>
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              1. Exclusion
            </h2>
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
              style={{ fontFamily: "sans-serif" }}
            >
              A fly infestation is far less likely when there are no easy access
              points for them to enter. Ensure that all doors and windows close
              properly and tightly. Weather stripping is recommended for any
              exterior openings. Repair all holes and tears in window screens.
              Locate any unsealed crevices or cracks that lead outside of your
              building and seal them with a silicone-based caulk. Create a
              positive airflow draft that directs air outside of your building.
              This way, smaller airborne flies will have difficulty entering
              your business. Make sure that your employees remember to close all
              doors and windows, especially those adjacent to lights.
            </p>
            {isExpanded && (
              <>

                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  2. Inspection
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Inspect the perimeter of your building and search for any feeding
                  or breeding locations. A common female house fly can lay
                  approximately 500 eggs in three to four weeks, so identifying
                  possible breeding areas is critical to the prevention process.
                  Thoroughly investigate any wet or moist areas, since flies need
                  water to survive and reproduce. Check for larvae or maggots on any
                  materials received from vendor shipments. Eliminate any other
                  possible attractants from the premises.
                </p>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  3. Sanitation
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Regular trash removal and sanitation will also help minimize the
                  risk of unwanted flies. Clean any garbage collection sites that
                  may have accumulated debris or waste. Cycle produce stock often to
                  dispose of moist or rotting material. Place any exterior trash
                  receptacles as far away from the building as possible. Repair
                  leaking drainage lines, which can also attract fruit flies and
                  phorid flies. Since flies are usually attracted to odors, it is
                  important to sanitize areas that contain pungent-smelling
                  bacteria. Note that many flies are attracted to nitrogen and
                  ammonia, since rotting organic materials will often contain these
                  substances. Therefore, is it imperative that you choose your
                  cleaning materials wisely, and eliminate odors; don’t simply mask
                  them.
                </p>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  4. Control
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Wall-mounted insect light traps (also known as ILTs) are highly
                  recommended by pest professionals to keep fly populations in
                  check. Flies and other insects are attracted to specific
                  wavelengths of light, which are emitted by ILTs to lure unwanted
                  pests and eliminate them swiftly. When used efficiently, ILTs are
                  placed in strategic locations to ensure that the light trap will
                  be the first light source that intruding insects will see. Your
                  pest professional will work with you to determine the best
                  locations to place ILTs, keeping in mind customer traffic and low
                  visibility areas. Fly traps are sometimes used as a supplement to
                  your IPM solution in locations where electricity is unavailable or
                  where ILTs would otherwise be impossible or inappropriate.
                </p>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  It’s crucial to understand which control methods are suitable for
                  your business type. For example, insecticide or chemical
                  treatments can be dangerous, and not appropriate to use around
                  food or other customer-handled goods. Chemical treatments should
                  be applied only by licensed pest management professionals, and
                  should be considered only if all other pest management methods
                  have been unsuccessful.
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
                src={FlyControl}
                alt="Fly Treatment in pune"
                class="w-full h-auto sm:h-[21rem] md:h-[21rem] lg:h-[21rem] xl:h-[21rem] xxl:h-[21rem] object-cover rounded-lg"
              />
            </div>
          </div>
          <div class="max-w-2xl mt-4 sm:mt-0 px-4 sm:px-8 w-auto">
            <div class="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={FlyControl2}
                alt="Fly Treatment in pune"
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
                src={FlySafe}
                alt="Fly Control"
                className="w-full h-64 sm:w-72 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  HOW TO GET RID OF FLIES IN YOUR HOME?
                </h2>
                <p className="mt-3 text-gray-600">
                  Flies might be tiny, but they can cause big problems when they invade your living space. From contaminating food to spreading diseases, these pests can be a nuisance. If you've recently taken the step to reclaim your home from these unwelcome guests…
                </p>
                <Link to="/flyblog1" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Second Blog */}
          <div className="rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105">
            <div className="flex flex-col sm:flex-row">
              <img
                src={Flys2}
                alt="Fly Control"
                className="w-full h-64 sm:w-72 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  WHEN SHOULD I TREAT MY HOUSE FOR FLIES?
                </h2>
                <p className="mt-3 text-gray-600">
                  Flies are often called "persistent invaders" because of their ability to find their way into your home and create breeding grounds. Dealing with flies can be frustrating, especially when they keep coming back after treatment. To effectively control flies…
                </p>
                <Link to="/flyblog2" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className=" mt-8 border-t border-b border-gray-300" />

      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-black mb-6">Important Fly Control FAQs</h1>

        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. What are charges for fly control services in Pune?</h3>
          <p className="text-gray-700 mt-3">Estimated charges for fly control services in Pune can vary depending upon factors such as the size of the property and the severity of the infestation. It may range from Rs 1500 to Rs 10,000.</p>
        </div>
        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. Why hiring fly control services in Pune is imperative?</h3>
          <p className="text-gray-700 mt-3">Flies can quickly become a nuisance in your home, contaminating food and surfaces, and potentially spreading diseases. Hiring professional fly control services ensures effective eradication of flies and helps prevent future infestations.</p>
        </div>
        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. What are estimated charges for fly inspection in Pune?</h3>
          <p className="text-gray-700 mt-3">The estimated charges for fly inspection services in Pune can range from Rs 800 to Rs 3000, depending on the size of the property and the complexity of the inspection.</p>
        </div>
        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. How long does fly treatment last?</h3>
          <p className="text-gray-700 mt-3">The effectiveness of fly treatment can vary depending on factors such as the type of treatment used, the species of flies, and environmental conditions. Typically, fly treatments can last from several weeks to several months.</p>
        </div>
        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. Is fly treatment safe for pets and children?</h3>
          <p className="text-gray-700 mt-3">Professional fly treatments are generally safe for pets and children when applied according to the manufacturer's instructions. However, it's essential to follow any precautions advised by the pest control provider to ensure safety.</p>
        </div>
        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. How can I prevent fly infestation in my home?</h3>
          <p className="text-gray-700 mt-3">To prevent fly infestation, seal entry points, eliminate food sources, keep your home clean and dry, and address any moisture issues. Regular inspections and maintenance can also help detect and prevent fly problems.</p>
          <hr className=" mt-8 border-t border-b border-gray-300" />

        </div>
        <section>
          <h3 className='text-3xl font-bold text-black mb-6'>Local Fly Control in Pune Near Me :</h3>
          <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4'>
            {locations.map((location) => (
              <ul key={location}>
                <Link className="text-blue-700 text-sm" to={`/fly/${location}`}>
                  Fly Control in {location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(", ")}
                </Link>
              </ul>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Fly;
