import React, { useState } from "react";
import { Link } from "react-router-dom";
import Mouses1 from "../assets/Mouse/mouse1.webp";
import Mouses2 from "../assets/Mouse/mouse2.webp";
import MouseSafe from "../assets/Mouse/mouse3.webp";
import MouseControl1 from "../assets/Mouse/mouse4.webp";
import MouseControl2 from "../assets/Mouse/mouse5.webp";
import { Helmet } from "react-helmet";

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


const Mouse = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded)
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 550,
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
      <Helmet>
        <title>Professional Mosquito Control and Extermination Services</title>
        <meta name="description" content="Effective mosquito control and extermination services near you. Get rid of mosquitoes with our affordable and efficient solutions. Contact us for a free quote and schedule your home inspection today." />
        <meta name="keywords" content="mosquito control, mosquito extermination, mosquito treatment, mosquito prevention, mosquito removal, mosquito infestation, mosquito exterminator near me, mosquito control near me, mosquito treatment near me, professional mosquito services, local mosquito control, residential mosquito treatment, commercial mosquito treatment, affordable mosquito control, pest control, pest control near me, exterminator near me, exterminator, mosquitoes, mosquito pest control, mosquito spraying, mosquito dunks, mosquito treatment cost, pest control services, mosquito prevention tips, mosquito control services, mosquito barriers, mosquito extermination near me" />
      </Helmet>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
        <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">
            Experties In Mouse Treatement
          </p>
        </div>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img
            src={Mouses1}
            alt="Mouse Pest Control"
            className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
            loading="lazy"
          />
          <img
            src={Mouses2}
            alt="Mouse Pest Control"
            className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
            loading="lazy"
          />
          <img
            src={MouseSafe}
            alt="Mouse Pest Control"
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
              4.23 <span className="text-slate-400 font-normal">(78)</span>
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
          We specialize in effectively treating and eliminating Mouses from your
          home or business, using proven methods. Our goal is to ensure complete
          eradication and provide a long-term solution to protect your property
          from further Mouse infestations.
        </p>
      </div>
      <div className="container mx-auto mt-10 rounded-lg shadow-lg hover:shadow-2xl overflow-hidden bg-white">
        <div className="lg:flex items-center">
          {/* Image */}
          <div className="lg:w-1/2 relative">
            <img
              src={Mouses2}
              alt="Mouse Pest Control"
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
            Mouse Control and Treatment
          </h1>

          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Step 1 – Identification :-
            </h2>
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
              style={{ fontFamily: "sans-serif" }}
            >
              Confirm the presence of mice by looking for droppings, gnaw marks,
              or other signs.
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
                  Keep the living space clean, secure food in airtight containers,
                  and eliminate potential nesting sites.
                </p>

                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Step 3 – Sealing Entry Points :-
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Close off access points by sealing gaps, cracks, and holes in
                  walls using materials like steel wool or caulk.
                </p>

                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Step 4 – Traps :-
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Set snap traps baited with peanut butter or other high-protein
                  foods in areas with mouse activity.
                </p>

                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Step 5 – Rodenticides (Caution Required) :-
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  If using rodenticides, follow instructions carefully to avoid harm
                  to pets or unintended targets. It's generally recommended to use
                  these with caution and consider other methods first.
                </p>

                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Step 6 - Monitoring and Prevention :-
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Regularly check traps, reposition them based on mouse activity,
                  and take steps to prevent future infestations by maintaining a
                  clean environment.
                </p>
              </>
            )}
            <button
              onClick={toggleReadMore}
              className="mt-4 text-indigo-600 hover:text-indigo-800 focus:outline-none"
            >{isExpanded ? "Read Less" : "Read More"}</button>
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
        <div class="flex flex-col sm:flex-row md:gap-8 items-center sm:ml-0 md:ml-[-1rem] mr-0 md:mr-[-6rem] xxl:ml-22 lg:mr-5 lg:ml-36">
          <div class="max-w-2xl">
            <div class="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={MouseControl1}
                alt="Mouse Pest Control"
                class="w-full h-auto sm:h-[21rem] md:h-[21rem] lg:h-[21rem] xl:h-[21rem] xxl:h-[21rem] object-cover rounded-lg"
              />
            </div>
          </div>
          <div class="max-w-2xl mt-4 sm:mt-0 px-4 sm:px-8 w-auto">
            <div class="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={MouseControl2}
                alt="Mouse Pest Control"
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
          <div className="rounded-lg shadow-lg overflow-hidden bg-white">
            <div className="flex flex-col sm:flex-row">
              <img
                src={MouseControl2}
                alt="Mouse Control"
                className="w-full h-64 sm:w-72 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  HOW TO GET RID OF MICE?
                </h2>
                <p className="mt-3 text-gray-600">
                  Mice are more than just a nuisance. These resilient pests can carry diseases, cause property damage, and generally compromise the comfort of your living space. If you’ve recently taken the step to reclaim your home from these unwelcome guests…
                </p>
                <Link to="/mouseblog1" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          {/* Second Blog */}
          <div className="rounded-lg shadow-lg overflow-hidden bg-white">
            <div className="flex flex-col sm:flex-row">
              <img
                src={MouseControl1}
                alt="Mouse Control"
                className="w-full h-64 sm:w-72 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  WHEN SHOULD I TREAT MY HOUSE FOR MICE?
                </h2>
                <p className="mt-3 text-gray-600">
                  Mice are often called the “silent invaders” because of their ability to enter your home undetected and spread diseases such as hantavirus, salmonella, and leptospirosis. Each year, mice cause numerous health issues and discomfort…
                </p>
                <Link to="/mouseblog2" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      <hr className=" mt-8 border-t border-b border-gray-300" />

      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-black mb-6">Important Mouse Control FAQs</h1>

        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. What are charges for mouse control services in Pune?</h3>
          <p className="text-gray-700 mt-3">Estimated charges for mouse control services in Pune can be in the range of Rs 1200 to Rs 8200 depending upon the size of the property and level of infestation.</p>
        </div>
        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. Why hiring mouse control services in Pune is imperative?</h3>
          <p className="text-gray-700 mt-3">We at Get Mouse Control are in the niche for several years. Hence, we completely understand the needs of professional mouse control services. We understand well that mice are a nuisance. They are a great threat to health and are noted for spreading diseases. So, it is imperative to hire professional mouse control services in Pune to get rid of life-threatening mice.</p>
        </div>
        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. What are estimated charges for mouse inspection in Pune?</h3>
          <p className="text-gray-700 mt-3">The estimated charges for mouse inspection services in Pune will vary based on the size of the property and the extent of the inspection required. It can range from Rs 500 to Rs 2000.</p>
        </div>
        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. How long does mouse treatment last?</h3>
          <p className="text-gray-700 mt-3">The duration of mouse treatment effectiveness can vary depending on factors such as the type of treatment used, the severity of the infestation, and environmental conditions. Generally, mouse treatments can last anywhere from a few weeks to a few months.</p>
        </div>
        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. Is mouse treatment safe for pets and children?</h3>
          <p className="text-gray-700 mt-3">Most mouse treatments are formulated to be safe for pets and children when applied by trained professionals following recommended guidelines. However, it's essential to discuss any concerns with your mouse control provider and take necessary precautions during and after the treatment.</p>
        </div>
        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. How can I prevent mouse infestation in my home?</h3>
          <p className="text-gray-700 mt-3">To prevent mouse infestation, you can take measures such as sealing entry points, keeping food stored in airtight containers, maintaining cleanliness, and scheduling regular mouse inspections.</p>
          <hr className=" mt-8 border-t border-b border-gray-300" />

        </div>
        <section>
          <h3 className='text-3xl font-bold text-black mb-6'>Local Mouse Control in Pune Near Me :</h3>
          <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-2'>
            {locations.map((location) => (
              <ul key={location}>
                <Link onClick={scrollToTopBook} className="text-blue-700 text-sm" to={`/mousep/${location}`}>
                  Mouse Control in {location.split('-').map(word => word.charAt(0, 2).toUpperCase() + word.slice(1)).join(", ")}
                </Link>
              </ul>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Mouse;
