import React, { useState } from "react";
import { Link } from "react-router-dom";
import TermitePhoto from "../assets/Termite/TermitePhoto.webp";
import TermitePhoto2 from "../assets/Termite/TermitePhoto2.webp";
import BeachHouse from "../assets/Termite/beach-house.jpg";
import TermiteGlow from "../assets/Termite/glow.jpg";
import TermiteNormal from "../assets/Termite/normal.jpg";
import Solution from "../assets/Termite/solutions.png";

const Termite = () => {
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
            Experties In Termite Treatement
          </p>
        </div>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img
            src={TermiteNormal}
            alt="Termite Control"
            className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
            loading="lazy"
          />
          <img
            src={BeachHouse}
            alt="Termite Control"
            className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
            loading="lazy"
          />
          <img
            src={TermiteGlow}
            alt="Termite Control"
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

      {/* Responsive section */}
      <div className="container mx-auto mt-10 rounded-lg shadow-lg hover:shadow-2xl overflow-hidden bg-white">
        <div className="lg:flex items-center">
          {/* Image */}
          <div className="lg:w-1/2 relative">
            <img
              src={BeachHouse}
              alt="Termite Control"
              className="w-full h-auto lg:h-full object-cover"
            />
            <div className="absolute inset-0 bg-indigo-900 opacity-40"></div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 p-8 lg:p-12 text-center lg:text-center">
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

      <div className="py-10 mt-5 bg-slate-100 rounded-2xl shadow-xl hover:shadow-orange-100 hover:shadow-2xl px-4 sm:px-6 lg:px-8">
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
            {isExpanded && (

              <>
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
                <hr />
                <div>
                  <div className="ml-2">
                    <h1 className="text-lg font-semibold text-gray-800 mb-2">Termite Control Services</h1>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}>Preventing termite infestation with the help of termite control services in Kolkata and other places should be given top priority by the homeowners. When left untreated for a long period of time, termite infestation could cause substantial harm to the home. These tiny insects are considered to be the biggest contributors in the destruction of your home and property.
                    </p>
                    <h1 className="text-lg font-semibold text-gray-800 mb-2" >Areas where termites can be found
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2"
                      style={{ fontFamily: "sans-serif" }}>Wooden furniture and exterior foundations are considered to be the common locations where termites build their colonies. Apart from there, these tiny silent destroyers can be found in the following areas:</p>

                    <ul className="list-disc ml-5 text-base sm:text-lg lg:text-xl text-gray-700 mb-2">
                      <li>Staircases</li>
                      <li>Solid wood kitchen cabinets</li>
                      <li>Attics</li>
                      <li>Crawlspaces</li>
                      <li>Sheds</li>
                      <li>Subflooring</li>
                      <li>Flooring</li>
                      <li>Hardwood</li>
                      <li>Workshops</li>
                      <li>Garages</li>
                    </ul>
                    <span className="text-lg font-semibold text-gray-800 mb-2">TERMITES</span>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2">It is true that most of us insure our houses to help recover loss arising from fires, storms and earthquakes, but is it possible to carry insurance against termite infestation? Termites pose a major threat to our furniture. They feed voraciously on wood and are akin to destroy paper products such as book, cardboard, boxes and a whole array of other items. Termites are serious threat to our buildings as they can cause extensive damages. Often the termites attack the building foundations and beams which are made of wood thereby endangering lives of people living therein. If you think that your building is immune to termite infiltration because they are made with steel framing, then think again. Termites in such cases can even target the wooden door and window frames, cabinets and shelving within the buildings. A termite colony is large and well organized. They comprise a queen, king and winged reproductive swarmer, soldiers and workers. Worker termites are the one who are small, creamy and white insects. The comprise most in number and are the major causer behind the termite damage.
                    </p>
                    <p className="text-lg font-semibold text-gray-800 mb-2">WHAT ARE TERMITES?</p>
                    <span className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2">Termites are colony pests who feed on cellulose. They can take up residence in numerous areas within your home. There are five species of termites that are found in India:
                    </span>
                    <ol className="list-decimal ml-5 text-base sm:text-lg lg:text-xl text-gray-700 mb-2">
                      <li>Subterranean Termites</li>
                      <li>Dampwood Termites</li>
                      <li>Conehead Termites</li>
                      <li>Formosan Termites</li>
                      <li>Drywood Termites</li>
                    </ol>

                    <p className="text-lg font-semibold text-gray-800 mb-2">ARE TERMITES DANGEROUS?</p>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2">It is indeed true termites are not the carriers of diseases that have been normally transmitted to humans yet the danger from them is unlikely to be ignored. They have incredibly strong mouth parts and are adept to chewing through timber and wood which can cause a large amount of damage and potentially affect the structural integrity of buildings. The damage caused can be so acute that it might become the point of collapse.
                    </p>

                    <p className="text-lg font-semibold text-gray-800 mb-2">How to Control them ?</p>
                    <ol className="list-decimal ml-5 text-base sm:text-lg lg:text-xl text-gray-700 mb-2">
                      <li>It is very important to keep all the wooden items at least 20 cm above the ground to ensure safety from termite.
                      </li>
                      <li>Get rid of decaying trees or debris nearby, if there are any.
                      </li>
                      <li>Plant your trees away from house.
                      </li>
                      <li>Replace with concrete all wood that’s in contact with soil.
                      </li>
                      <li>Take advice and help from a professional to recognize termite infestation if there are any and get rid of the problem.
                      </li>
                      <li>Termiticides are very important to treat termite infestation. We make sure that terimiticide is handled by a licensed pest control operator.
                      </li>
                      <p className="mt-1 text-black">EXPERT CONTROL</p>
                      <p className="text-lg font-semibold text-gray-800 mb-2 mt-2">Choosing a professional termite pest control company-</p>
                      <p>Since most homeowners insurance won’t cover the cost of damage caused by termites, taking swift actions against these harmful insects can prevent you from massive financial loss. Only the professionals of <span className="text-gray-950 font-bold">termite control services in pune</span> can provide safe and effective termite control solutions. Let’s check out the multiple benefits of selecting termite control company in oune:
                      </p>
                      <ol className="list-disc ml-5 text-base sm:text-lg lg:text-xl text-gray-700 mb-2">
                        <li>Experienced termite exterminators will conduct the entire operation.
                        </li>
                        <li>No property damage
                        </li>
                        <li>Total elimination of the entire termite colony
                        </li>
                        <li>Long term assurance of no future invasion
                        </li>
                        <li>100% secure and environmental pest management procedure without any use of deadly toxic pesticides
                        </li>
                        <li>Dedicated service at an affordable price
                        </li>
                      </ol>
                      <p>When appointing a termite treatment company, price should not be the only criteria, look for the quality of service and professionalism of the company.</p>
                    </ol>
                    <p className="mt-2 ext-base sm:text-lg lg:text-xl text-gray-700 font-bold mb-2 ml-2">Anti Termite Services (Terminator)</p>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2 ml-2">Termites belong to the group of insects called Isoptera. This term is Latin and refers to the fact that termites have 2 sets of wings that look very much alike. The word ‘termites’ comes from the Latin word ‘tarmes’.The Latin word was given to a small worm that makes holes in wood. There are more than 2,600 different species of termites. Termites are often called as white ants. They feed on anything that contains cellulose(wooden doors, furniture, cloths paper, and furniture & currency notes).</p>
                    <p className="mt-2 ext-base sm:text-lg lg:text-xl text-gray-700 font-bold mb-2">Our Services :-</p>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2 ">This service is targeted against Sub- Terranean Termite (Ground Nesting) termites. The treatments are of Two Types –
                    </p>
                    <span className="text-gray-700 font-bold mt-3">Pre- Construction Anti Termite Treatment -</span> <span className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2">This service is mainly carried out at initial stage of construction of a building. The buildingis treated by anti termite treatment during its various stages of Construction. This treatment is suitable for both residential & commercial type of premises. We provide a warranty of ten years against any type of Termite Infestation.</span>


                    <span className="text-gray-700 font-bold mt-3">Post Construction Anti Termite Treatment -</span> <span className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2">This treatment is mainly recommended /designed for protection against Subterranean Termites for existing Premises/ Building. We use to drill at a distance of 1 Ft and injecting sufficient amount of recommended chemicals and then fill it with white cement, resulting a continuous chemical barrier through which termite cannot invade through. Wooden furniture, doors and window frames are also drilled/ Spray with chemicals. We provide 1 year and 5 years of warranty.</span>

                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2 mt-2">Termite Treatment Services Policy
                      </p>
                      <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2 font-medium">1-YEAR MAINTENANCE CONTRACT</p>
                      <span className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2">To stop and prevent the movement of termites from the ground, holes are drilled from inside your premises at the junction of the wall and the floor or just above the skirting (depending on the flooring) at an angle of 45 degrees. The holes are drilled along the side of the entire outer wall at approximately 30cm (12″) intervals. The insecticide is then poured into these holes to soak the masonry. If your premises are on the ground floor, the partition walls are also treated. The drilling operation is not carried out on the partition walls above the ground floor because the RCC slabs act as a mechanical barrier and the termites cannot penetrate them. It takes about 2-3 hours to treat a flat of about 750 Sq. Ft.</span>
                    </div>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2 font-medium mt-2">AMC CHECK UP VISITS</p>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2">After the initial major treatment, our operator will visit your premises for a check up every quarter. Necessary treatment will be carried out in case of any re-infestation. You can call us whenever there is a reappearance of termites during the contract period.</p>

                    <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2 font-medium mt-2">5-YEAR MAINTENANCE CONTRACT</p>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2">Enter into a 5-year’s comprehensive anti-termite contract with Pecopp for your entire building and avail of a five year warranty against termites.</p>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2 font-bold">When you enter into a five year contract for your entire building our method of treatment which is based on the ISI specifications, consists of chemical treatment of the following areas:
                    </p>
                    <ol className="list-decimal text-base sm:text-lg lg:text-xl text-gray-700 mb-2 ml-5">
                      <li>The soil around the foundation of your building (External Treatment).
                      </li>
                      <li>The base of the masonry walls (Internal Treatment).
                      </li>
                      <li>All vulnerable wooden portions of the building.
                      </li>
                      <li>Soil (External Treatment)
                        A chemical barrier is created between the termites in the soil and the building that has to be protected. This is achieved in the following manner: If there exists a concrete cover or masonry apron around the walls of your building, holes are drilled as close as possible to the plinth wall about 30 cm (12″) apart from each other. Insecticide is then poured, so that it reaches the soil and creates a chemical barrier to eliminate the termites present there and to stop them from re-infesting. If your building is on pillars, the holes are drilled around the pillars and insecticide poured into the soil.
                      </li>
                      <li>The Base of The Masonry Walls (Internal Treatment)
                        The internal treatment of base of masonry walls and treatment of woodwork is carried out as per the one-year maintenance contract. Termites, which originate from the soil are controlled effectively when your building is treated at the ground level as per the above mentioned method.</li>
                      <li>Vulnerable Wooden Portions of the Building
                        Further, on all floors, wood work like doors and windows, which are highly susceptible to termite attack are also protected by treating them with the drilling operation. Spot treatment of spraying on infested areas in the walls and ceiling is also carried out.</li>
                    </ol>
                    <p className="text-base mt-2 sm:text-lg lg:text-xl text-gray-700 mb-2 font-bold">warranty: 5 Years</p>
                    <p className="text-base mt-2 sm:text-lg lg:text-xl text-gray-700 mb-2 font-bold">Warranty
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2">In case of comprehensive anti-termite treatment of the entire building, we give a warranty of five years. Any re-infestation of termites during the warranty period is treated without any extra charge.
                    </p>
                    <p className="text-base mt-2 sm:text-lg lg:text-xl text-gray-700 mb-2 font-bold">Frequency of Check Ups :-</p>
                    <ol className="list-decimal text-base mt-2 sm:text-lg lg:text-xl text-gray-700 mb-2 ml-5">
                      <li>After the initial treatment, a check up of the entire building is carried out every quarter for the first year.
                      </li>
                      <li>A check up is carried out once every six months for the 2nd year.
                      </li>
                      <li>After two years there will be an annual visit till the end of the contract period.
                      </li>
                      <p>The check up visit is to find out whether there has been any re-infestation of termites. Necessary treatment will be carried out in case of re-infestation. You can call us as and when there is re-infestation during the entire contract period of five years.
                      </p>
                    </ol>
                    <p className="text-base mt-2 sm:text-lg lg:text-xl text-gray-700 mb-2 font-bold">PRECONSTRUCTION ANTI TERMITE TREATMENT</p>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2">We can protect your building or house from termites before construction by doing anti termite treatment at construction stage. This is the stage when the treatment is most effective. After the building is complete and the tiles fitted, it is difficult to carry out the treatment and it is not as effective. We give 10 years guarantee. We recommend Anti Termite Pre Construction treatment as perBIS standard 6313 Part II – Revised in December 2013.The treatment starts from half meter below the ground level. No treatment is required below this level. The cost is insignificant compared to the total cost of land and building. But it will be a significant additional selling point, for selling the space in your building. Your pest control done by Pecopp means you care for your customers even after giving possession.</p>
                    <div className="text-base sm:text-lg lg:text-xl text-gray-700 mb-2">
                      <p className="text-base mt-2 sm:text-lg lg:text-xl text-gray-700 mb-2 font-bold">METHOD</p>
                      <p className="text-base mt-2 sm:text-lg lg:text-xl text-gray-700 mb-2 font-bold">Stage 1: Treatment of top surface on plinth filling (Under Slab)</p>
                      <p>Before laying the slab on the floor the top of the consolidated earth should be treated with termiticide @5L/sq.m. The treated soil must not be disturbed between the time of application and laying of slab on the floor. If the filled earth has been well rammed and the surface does not allow the termiticide solution to seep through, holes upto 5-7.5 cm deep & 12 mm diameter at 15cm intervals to be made for facilitating saturation of the soil with the chemical.</p>
                      <p className="text-base mt-2 sm:text-lg lg:text-xl text-gray-700 mb-2 font-bold">Stage 2: External Perimeter
                      </p>
                      <p>The soil in contact with the internal wall of the building should be treated with termiticide ready solution @ 7.5 L/sq.m of the vertical surface of the sub structure to the depth of 30cm. a shallow channel can be excavated along and close to the wall and rodding with 12mm diameter mild steel rods at 15 cm interval to a depth of 30 cm can be done for uniform dispersal of the chemical.
                      </p>
                      <p className="text-base mt-2 sm:text-lg lg:text-xl text-gray-700 mb-2 font-bold">Stage 3: Treatment of top surface on plinth filling (Under Slab)</p>
                      <p>If the refill earth was not treated, the earth along the external perimeter of the building after completion should be rodded at 15cm interval to a depth of 30 cm to expose the foundation wall surface. Termiticide ready solution should be poured along the wall @ 7.5 L/sq.m of the vertical surface and the earth tamped back into place.
                      </p>
                      <div className="items-center justify-center">
                        <img src={Solution} alt="Termite Solutions" className="mt-5" />
                      </div>
                      <ol className="list-decimal">
                        <li>Backfill with immediate contact with RCC foundation
                        </li>
                        <li>Juction of wall n floor
                        </li>
                        <li>Top serface of plinth feeling
                        </li>
                        <li>External perimeter of building
                        </li>
                      </ol>
                      <p className="text-base mt-2 sm:text-lg lg:text-xl text-gray-700 mb-2 font-bold">Make a Pestless Residance
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
            <button
              onClick={toggleReadMore}
              className="mt-4 text-indigo-600 hover:text-indigo-800 focus:outline-none"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
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

      <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row md:gap-8 items-center sm:ml-0 md:ml-[-1rem] mr-0 md:mr-[-6rem] xxl:ml-22 lg:mr-5 lg:ml-36">
          <div className="max-w-2xl">
            <div className="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={TermitePhoto}
                alt="Termite Control"
                className="w-full h-auto sm:h-[21rem] md:h-[21rem] lg:h-[21rem] xl:h-[21rem] xxl:h-[21rem] object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="max-w-2xl mt-4 sm:mt-0 px-4 sm:px-8 w-auto">
            <div className="rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={TermitePhoto2}
                alt="Termite Control"
                className="w-full h-auto sm:h-[21rem] md:h-[21rem] lg:h-[21rem] xl:h-[21rem] xxl:h-[21rem] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mt-10 mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
          Silent Destroyers
        </h1>

        <div className="p-4 sm:p-8 lg:p-12 bg-gray-100 rounded-lg shadow-md sm:ml-0 md:ml-[-1rem] md:mr-[-1rem] lg:ml-[-6rem] lg:mr-[-5rem] xl:ml-[-13rem] xl:mr-[-13rem] text-left">
          <p className="mb-4 sm:text-base">
            <span className="font-semibold" style={{ fontFamily: "sans-serif" }}>
              Termites are wood-eating insects that are often confused with
              ants. They are more closely related to cockroaches. Termites are
              also called wood bugs because they have destroyed structures and
              households
            </span>
          </p>
          <p className="mb-4 sm:text-base" style={{ fontFamily: "sans-serif" }}>
            <span className="font-semibold">
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
