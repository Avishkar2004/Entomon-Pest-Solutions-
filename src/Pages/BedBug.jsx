import React, { useState } from "react";
import { Link } from "react-router-dom";
import BedBugs1 from "../assets/BedBug/BedBug1.webp";
import BedBugs2 from "../assets/BedBug/BedBug2.webp";
import BedBugSafe from "../assets/BedBug/BedBug3.webp";
// import BedBugControl from "../assets/BedBug/BedBug4.webp";
import BedBugControl2 from "../assets/BedBug/BedBug5.webp";

const BedBug = () => {
  const [selectOption, setSelectOption] = useState("1 bhk");
  const [price, setPrice] = useState(999);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectOption(selectedValue);

    // Update price based on the selected option
    if (selectedValue === "1 BHK") {
      setPrice(999);
    } else if (selectedValue === "2 BHK") {
      setPrice(1800);
    } else if (selectedValue === "3 BHK") {
      setPrice(2200);
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

      <div className="max-w-4xl pt-10 mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
          Silent Destroyers
        </h1>

        <div class="p-4 sm:p-8 lg:p-12 bg-gray-100 rounded-lg shadow-md sm:ml-0 md:ml-[-1rem] md:mr-[-1rem] lg:ml-[-6rem] lg:mr-[-5rem] xl:ml-[-13rem] xl:mr-[-13rem] text-left">
          <p class="mb-4 sm:text-base">
            <span class="font-semibold">Sightings and fecal droppings:</span>
            BedBuges are nocturnal creatures and tend to hide during the day. If
            you notice live BedBuges scurrying around at night or find small
            dark droppings resembling coffee grounds, it could indicate an
            infestation.
          </p>
          <p class="mb-4 sm:text-base">
            <span class="font-semibold">UnpleasBedBug odor:</span>
            BedBuges emit a distinctive musty odor that can become noticeable in
            areas with a large population. If you detect an unpleasBedBug smell,
            particularly in kitchen or bathroom areas, it could be a sign of a
            BedBug infestation.
          </p>
          <p class="mb-4 sm:text-base">
            Dealing with a BedBug infestation requires professional expertise. A
            licensed pest control company can assess the severity of the
            infestation and implement appropriate BedBug control measures. This
            may include insecticide treatments, baits, and sealing entry points
            to prevent further infestations.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-start text-start container font-bold">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              BedBuges are active mostly during nighttime or in dark, concealed
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
              BedBugs can travel and infest new areas by navigating through gaps
              and openings, and they are also known to be carried in infested
              items such as bags, boxes, and furniture.
            </li>
            <li className="text-red-500">
              Remember, if you suspect a BedBug infestation in your property, it
              is essential to contact a professional pest control service to
              assess the situation and provide effective treatment options.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default BedBug;
