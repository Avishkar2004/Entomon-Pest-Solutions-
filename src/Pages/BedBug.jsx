import React, { useState } from "react";
import { Link } from "react-router-dom";
import BedBugs1 from "../assets/BedBug/BedBug1.webp";
import BedBugs2 from "../assets/BedBug/BedBug2.webp";
import BedBugSafe from "../assets/BedBug/BedBug3.webp";
// import BedBugControl from "../assets/BedBug/BedBug4.webp";
import BedBugControl2 from "../assets/BedBug/BedBug5.webp";

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


const BedBug = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const scrollToTop = () => {
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
            Experties In Bedbug Treatement
          </p>
        </div>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img
            src={BedBugs1}
            alt="bed bug treatment"
            className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
            loading="lazy"
          />
          <img
            src={BedBugs2}
            alt="bed bug pest control"
            className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
            loading="lazy"
          />
          <img
            src={BedBugSafe}
            alt="bed bug pest control"
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
              4.51 <span className="text-slate-400 font-normal">(356)</span>
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
          We specialize in effectively treating and eliminating BedBugs from
          your home or business, using proven methods. Our goal is to ensure
          complete eradication and provide a long-term solution to protect your
          property from further BedBug infestations.
        </p>
      </div>


      <div className="container mx-auto mt-10 rounded-lg shadow-lg hover:shadow-2xl overflow-hidden bg-white">
        <div className="lg:flex items-center">
          {/* Image */}
          <div className="lg:w-1/2 relative">
            <img
              src={BedBugs2}
              alt="bed bug pest control"
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
            How to Get Rid of Bed Bugs
          </h1>
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Step 1: Identify all infested areas
            </h2>
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
              style={{ fontFamily: "sans-serif" }}
            >
              If you’ve got bedbugs, you want to find them early before they
              start to reproduce. It’s much easier and cheaper to treat a small
              infestation than a big one. But smaller infestations can be harder
              to detect.
            </p>
            {isExpanded && (
              <>

                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Search for bedbugs yourself or hire a professional to do an
                  inspection. Some inspectors use specially trained dogs to hunt
                  down bedbugs by scent.
                </p>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Bedbugs’ small and narrow bodies enable them to squeeze into tiny
                  spots, like the seams of a mattress or couch and the folds of
                  curtains.
                </p>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Also, look for them:
                </p>
                <ul className="list-disc ">
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      near the tags of the mattress and box spring
                    </p>
                  </li>
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      in cracks in the bed frame and headboard
                    </p>
                  </li>
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      in baseboards
                    </p>
                  </li>

                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      between couch cushions
                    </p>
                  </li>
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      in furniture joints
                    </p>
                  </li>
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      inside electrical outlets
                    </p>
                  </li>
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      under loose wallpaper
                    </p>
                  </li>
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      underneath paintings and posters on the walls
                    </p>
                  </li>
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      in the seam where the wallpaper and ceiling meet
                    </p>
                  </li>
                </ul>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Use a flashlight and magnifying glass to go over all of these
                  areas.
                </p>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Step 2: Contain the infestation
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Once you know you have bedbugs, you need to keep them contained so
                  you can get rid of them. A quick and easy way to trap bedbugs is
                  with your vacuum. Run the vacuum over any possible hiding places.
                </p>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  This includes your:
                </p>
                <ul className="list-disc ">
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      bed{" "}
                    </p>
                  </li>
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      dresser{" "}
                    </p>
                  </li>
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      carpets{" "}
                    </p>
                  </li>
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      electronics, like TVs
                    </p>
                  </li>
                </ul>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Seal up the vacuumed contents into a plastic bag and throw it
                  away. Then thoroughly clean out the vacuum.
                </p>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Seal up all your linens and affected clothes in plastic bags until
                  you can wash them. Then put them on the highest possible
                  temperature setting in a washer and dryer. If an item cannot be
                  washed, put it in the dryer for 30 minutes at the highest heat
                  setting.
                </p>

                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Step 3: Prep for bedbug treatment
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Before you start treating your home, do a little prep work to
                  maximize your odds of success. Make sure all your linens, carpets,
                  drapes, clothing, and other hiding places have been cleaned or
                  thrown out (see step 2).
                </p>

                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Next, get rid of bedbug hiding places:
                </p>

                <ul className="list-disc ">
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      Pick up books, magazines, clothes, and anything else that’s
                      lying on your floor and under your bed.
                    </p>
                  </li>
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      Throw out whatever you can.
                    </p>
                  </li>
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      Do not move items from an infested room to a clean one — you
                      could spread the bugs.
                    </p>
                  </li>
                </ul>

                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  {" "}
                  Seal up any open areas:{" "}
                </p>

                <ul className="list-disc ">
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      Glue down loose wallpaper.
                    </p>
                  </li>
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      Caulk cracks in furniture and around baseboards.
                    </p>
                  </li>
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      Tape up open electrical outlets.
                    </p>
                  </li>
                </ul>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Finally, move your bed at least 6 inches away from the wall so
                  bedbugs cannot climb on.
                </p>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Step 4: Kill the bedbugs
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  How to get rid of bedbugs at home
                </p>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  You can first try to remove bedbugs without chemicals. These bugs
                  are pretty easy to kill with high heat at 115°F (46.11°C) or
                  intense cold at 32°F (0°C).
                </p>

                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  {" "}
                  Here are a few ways to treat bedbugs using these methods:
                </p>
                <ul className="list-disc ">
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      Wash bedding and clothes in hot water for 30 minutes. Then put
                      them in a dryer on the highest heat setting for 30 minutes.
                    </p>
                  </li>
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      Use a steamer on mattresses, couches, and other places where
                      bedbugs hide.
                    </p>
                  </li>
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      Pack up infested items in black bags and leave them outside on
                      a hot day that reaches 95°F (35°C) or in a closed car. In
                      cooler temperatures, it can take 2 to 5 months to kill
                      sealed-up bugs.
                    </p>
                  </li>

                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      Put bags containing bedbugs in the freezer at 0°F (-17.78°C).
                      Use a thermometer to check the temperature. Leave them in
                      there for at least 4 days.
                    </p>
                  </li>
                </ul>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Once you’ve cleaned all visible bedbugs, make the area
                  inhospitable for the rest of them. Place bedbug-proof covers over
                  your mattress and box spring. Zip these covers up all the way.
                  Bugs that are trapped inside will die, and new bugs will not be
                  able to get in.
                </p>

                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Step 5: Evaluate and prevent future bedbugs
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Bedbugs can take some time to wipe out. Before you can ensure that
                  your treatment has worked, you need proof that the bugs have moved
                  on. Check the infested areas about once every 7 days for signs of
                  activity.
                </p>

                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  To make surviving bedbugs easier to spot, place bedbug
                  interceptors under each leg of the bed. These devices will trap
                  bedbugs before they can climb up into your bed. You may need to
                  keep checking the interceptors for a full year.
                </p>

                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Bedbugs are hardy creatures. Just when you think you’ve wiped them
                  out, you might spot them again. You may have to try a few
                  different treatment methods to control the infestation. And if
                  they still do not go away, you’ll want to call in a professional
                  exterminator.
                </p>

                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Step 6: Keep the bedbugs out
                </h2>
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Once the bedbugs are gone, you’ll want to make sure they stay gone
                  for good:
                </p>

                <ul className="list-disc ">
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      Clear up any clutter. Do not leave papers, magazines, clothes,
                      or other items on the floor.
                    </p>
                  </li>
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      Cover your mattress and box spring with a bedbug cover and zip
                      it up all the way.
                    </p>
                  </li>
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      Vacuum and wash bedding, furniture, curtains, and carpets
                      often.
                    </p>
                  </li>
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      Seal cracks around light sockets, baseboards, and electrical
                      outlets so bedbugs cannot sneak in.
                    </p>
                  </li>
                  <li className="text-red-500">
                    <p
                      className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      Check for bedbugs in hotel rooms when you travel to avoid
                      bringing them home with you.
                    </p>
                  </li>
                </ul>
              </>
            )}
            <button
              onClick={toggleReadMore}
              className="mt-4 text-indigo-600 hover:text-indigo-800 focus:outline-none">
              {isExpanded ? "Read Less" : "Read More"}
            </button>
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
        <div class="flex flex-col sm:flex-row md:gap-8 items-center sm:ml-0 md:ml-[-1rem] mr-0 md:mr-[-6rem] xxl:ml-22 lg:mr-5 lg:ml-48">
          <div class="max-w-2xl">
            <div class="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={BedBugs1}
                alt="Termite Control"
                class="w-full h-auto sm:h-[21rem] md:h-[21rem] lg:h-[21rem] xl:h-[21rem] xxl:h-[21rem] object-cover rounded-lg"
              />
            </div>
          </div>
          <div class="max-w-2xl mt-4 sm:mt-0 px-4 sm:px-8 w-auto">
            <div class="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={BedBugControl2}
                alt="Termite Control"
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
                src={BedBugs1}
                alt="Bed Bug Control"
                className="w-full h-64 sm:w-72 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  HOW TO GET RID OF BED BUGS IN YOUR HOME?
                </h2>
                <p className="mt-3 text-gray-600">
                  Bed bugs might be tiny, but they can cause big problems when they invade your living space. From causing itchy bites to disrupting your sleep, these pests can be a nuisance. If you've recently taken the step to reclaim your home from these unwelcome guests…
                </p>
                <Link to="/bedbugblog1" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          {/* Second Blog */}
          <div className="rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105">
            <div className="flex flex-col sm:flex-row">
              <img
                src={BedBugSafe}
                alt="Bed Bug Control"
                className="w-full h-64 sm:w-72 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  WHEN SHOULD I TREAT MY HOUSE FOR BED BUGS?
                </h2>
                <p className="mt-3 text-gray-600">
                  Bed bugs are often called "silent invaders" because of their ability to infest your home without immediate detection. Dealing with bed bugs can be frustrating, especially when they keep coming back after treatment. To effectively control bed bugs…
                </p>
                <Link to="/bedbugblog2" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-black mb-6">Important Bed Bug Control FAQs</h1>

        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. What are charges for bed bug control services in Pune?</h3>
          <p className="text-gray-700 mt-3">Estimated charges for bed bug control services in Pune can vary depending upon factors such as the size of the property and the severity of the infestation. It may range from Rs 1500 to Rs 10,000.</p>
        </div>
        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. Why hiring bed bug control services in Pune is imperative?</h3>
          <p className="text-gray-700 mt-3">Bed bugs can quickly become a nuisance in your home, causing discomfort and sleepless nights. Hiring professional bed bug control services ensures effective eradication of these pests and helps prevent future infestations.</p>
        </div>
        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. What are estimated charges for bed bug inspection in Pune?</h3>
          <p className="text-gray-700 mt-3">The estimated charges for bed bug inspection services in Pune can range from Rs 800 to Rs 3000, depending on the size of the property and the complexity of the inspection.</p>
        </div>
        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. How long does bed bug treatment last?</h3>
          <p className="text-gray-700 mt-3">The effectiveness of bed bug treatment can vary depending on factors such as the type of treatment used, the extent of the infestation, and environmental conditions. Typically, bed bug treatments can last from several weeks to several months.</p>
        </div>
        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. Is bed bug treatment safe for pets and children?</h3>
          <p className="text-gray-700 mt-3">Professional bed bug treatments are generally safe for pets and children when applied according to the manufacturer's instructions. However, it's essential to follow any precautions advised by the pest control provider to ensure safety.</p>
        </div>
        <div className="faq mb-4">
          <h3 className="text-xl font-semibold text-green-700">Q. How can I prevent bed bug infestation in my home?</h3>
          <p className="text-gray-700 mt-3">To prevent bed bug infestation, regularly inspect and clean your home, especially beds and furniture, avoid bringing second-hand furniture without proper inspection, and maintain cleanliness. Regular inspections and maintenance can also help detect and prevent bed bug problems.</p>
        </div>
        <section>
          <h3 className='text-3xl font-bold text-black mb-6'>Local Bed Bug Control in Pune Near Me :</h3>
          <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4'>
            {locations.map((location) => (
              <ul key={location}>
                <Link className="text-blue-700 text-sm" to={`/bedbugp/${location}`}>
                  Bed Bug Control in {location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(", ")}
                </Link>
              </ul>
            ))}
          </div>
        </section>
      </div>


    </main>
  );
};

export default BedBug;
