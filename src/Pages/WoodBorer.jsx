import React, { useState } from "react";
import { Link } from "react-router-dom";
import WoodBorers1 from "../assets/WoodBorer/WoodBorer1.webp";
import WoodBorers2 from "../assets/WoodBorer/WoodBorer2.webp";
import WoodBorerSafe from "../assets/WoodBorer/WoodBorer3.webp";
import WoodBorerControl from "../assets/WoodBorer/WoodBorer4.webp";
import WoodBorerControl2 from "../assets/WoodBorer/WoodBorer5.webp";


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


const WoodBorer = () => {
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

  const scrollToBook = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
        <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
            House
          </h1>
          <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">
            Experties In Wood Borer Treatement
          </p>
        </div>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img
            src={WoodBorers1}
            alt="wood borer pest control"
            className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
            loading="lazy"
          />
          <img
            src={WoodBorers2}
            alt="wood borer pest control"
            className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
            loading="lazy"
          />
          <img
            src={WoodBorerSafe}
            alt="wood borer pest control"
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
              4.32 <span className="text-slate-400 font-normal">(245)</span>
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
          We specialize in effectively treating and eliminating WoodBorers from
          your home or business, using proven methods. Our goal is to ensure
          complete eradication and provide a long-term solution to protect your
          property from further WoodBorer infestations.
        </p>
      </div>

      <div className="container mx-auto mt-10 rounded-lg shadow-lg hover:shadow-2xl overflow-hidden bg-white">
        <div className="lg:flex items-center">
          {/* Image */}
          <div className="lg:w-1/2 relative">
            <img
              src={WoodBorers2}
              alt="wood borer pest control"
              className="w-full h-auto lg:h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:w-1/2 p-8 lg:p-12 text-center lg:text-center">
            <Link
              to="/contact"
              onClick={scrollToBook}
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
            Wood borer Control and Treatment
          </h1>
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Step 1: Insecticide Treatment
            </h2>
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
              style={{ fontFamily: "sans-serif" }}
            >
              Insecticide is a synthetic pyrethroid insecticide that contains
              the active ingredient Cypermethrin and serves as a good contact
              insecticide that can prevent infestation of tree borers to
              infested trees and shrubs. Timing is crucial as it is best to
              treat trees early on in an infestation to attack the newly-hatched
              tree borer larvae before they begin tunneling into the bark.
            </p>
            {isExpanded && (
              <>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Measure the square footage of the treatment area to help you
                  determine how much Insecticide you need to mix. In a sprayer,
                  dilute 0.33 to 0.65 fl. oz. per 1,000 sq.ft. in a volume of water
                  sufficient for uniform coverage such as 3 to 20 gallons. Once you
                  have calculated and mixed the appropriate amount of Insecticide in
                  a sprayer, shake the sprayer well and you're ready to treat.
                </p>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Apply over the tree trunks, trigs, and branches on a fan spray
                  setting but not to the point of runoff. If you see any holes or
                  cavities in the wood, spray them directly via pin stream setting.
                  You want to saturate the openings and contact as many insects as
                  possible.
                </p>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Step 2: Soil Treatment with Dominion 2L
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Once the tree has been treated, we recommend a soil treatment with
                  Dominion 2L. Dominion 2L is a systemic insecticide meaning that it
                  when applied to the soil, it will be taken up into the tree roots
                  and help to control any tree borer pest that tries to burrow or
                  feast on the tree. Measure the diameter of your tree before
                  treating.
                </p>

                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Dilute Dominion 2L at a rate of 0.1 to 0.4 fl. oz. per inch of
                  trunk diameter. So for example, if your trunk's diameter is 15
                  inches you will need to mix 1.5 to 6 fl. oz. of Dominion 2L per 5
                  gallons of water. Mix it in a sprayer and apply uniformly as a
                  drench around the base of the tree directing the application to
                  the root area.
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
              us today. We are here to help.
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
                src={WoodBorerControl}
                alt="wood borer pest control"
                class="w-full h-auto sm:h-[21rem] md:h-[21rem] lg:h-[21rem] xl:h-[21rem] xxl:h-[21rem] object-cover rounded-lg"
              />
            </div>
          </div>
          <div class="max-w-2xl mt-4 sm:mt-0 px-4 sm:px-8 w-auto">
            <div class="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={WoodBorerControl2}
                alt="wood borer pest control"
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
                src={WoodBorers1}
                alt="Wood Borer Control"
                className="w-full h-64 sm:w-72 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  HOW TO GET RID OF WOOD BORERS IN YOUR HOME?
                </h2>
                <p className="mt-3 text-gray-600">
                  Wood borers might be tiny, but they can cause big problems when they invade your living space. From damaging wooden structures to creating unsightly holes, these pests can be a nuisance. If you've recently taken the step to reclaim your home from these unwelcome guests…
                </p>
                <Link to="/woodborerblog1" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Second Blog */}
          <div className="rounded-lg shadow-lg overflow-hidden bg-white">
            <div className="flex flex-col sm:flex-row">
              <img
                src={WoodBorerSafe}
                alt="Wood Borer Control"
                className="w-full h-64 sm:w-72 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  WHEN SHOULD I TREAT MY HOUSE FOR WOOD BORERS?
                </h2>
                <p className="mt-3 text-gray-600">
                  Wood borers are often called "silent destroyers" because of their ability to cause significant damage to wooden structures. Dealing with wood borers can be frustrating, especially when they keep coming back after treatment. To effectively control wood borers…
                </p>
                <Link to="/woodborerblog2" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className=" mt-8 border-t border-b border-gray-300" />

      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-black mb-6">Important Wood Borer Control FAQs</h1>

        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. What are charges for wood borer control services in Pune?</h3>
          <p className="text-gray-700 mt-3">Estimated charges for wood borer control services in Pune can vary depending upon factors such as the size of the property and the severity of the infestation. It may range from Rs 1500 to Rs 10,000.</p>
        </div>
        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. Why hiring wood borer control services in Pune is imperative?</h3>
          <p className="text-gray-700 mt-3">Wood borers can quickly become a nuisance in your home, damaging wooden structures and furniture. Hiring professional wood borer control services ensures effective eradication of these pests and helps prevent future infestations.</p>
        </div>
        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. What are estimated charges for wood borer inspection in Pune?</h3>
          <p className="text-gray-700 mt-3">The estimated charges for wood borer inspection services in Pune can range from Rs 800 to Rs 3000, depending on the size of the property and the complexity of the inspection.</p>
        </div>
        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. How long does wood borer treatment last?</h3>
          <p className="text-gray-700 mt-3">The effectiveness of wood borer treatment can vary depending on factors such as the type of treatment used, the species of borers, and environmental conditions. Typically, wood borer treatments can last from several weeks to several months.</p>
        </div>
        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. Is wood borer treatment safe for pets and children?</h3>
          <p className="text-gray-700 mt-3">Professional wood borer treatments are generally safe for pets and children when applied according to the manufacturer's instructions. However, it's essential to follow any precautions advised by the pest control provider to ensure safety.</p>
        </div>
        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. How can I prevent wood borer infestation in my home?</h3>
          <p className="text-gray-700 mt-3">To prevent wood borer infestation, seal entry points, treat and finish wooden surfaces, keep your home dry, and address any moisture issues. Regular inspections and maintenance can also help detect and prevent wood borer problems.</p>
          <hr className=" mt-8 border-t border-b border-gray-300" />

        </div>
        <section>
          <h3 className='text-3xl font-bold text-black mb-6'>Local Wood Borer Control in Pune Near Me :</h3>
          <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4'>
            {locations.map((location) => (
              <ul key={location}>
                <Link className="text-blue-700 text-sm" to={`/woodborerp/${location}`}>
                  Wood Borer Control in {location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(", ")}
                </Link>
              </ul>
            ))}
          </div>
        </section>
      </div>


    </main>
  );
};

export default WoodBorer;
