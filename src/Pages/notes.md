Silent destryoer make Aligenment text left or suitable made it more beutiful = ALL Tags need to edit

 <Link
            to="/"
            type="button"
            className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
          >
            Check Service
          </Link>

<div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
            House
          </h1>
          <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">
            Entire house
          </p>
        </div>

import React, { useState, useRef } from "react";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import emailjs from "@emailjs/browser";

const ServiceBook = () => {
const [name, setName] = useState("");
const [number, setNumber] = useState("");
const [selectedService, setSelectedService] = useState("");
const [address, setAddress] = useState("");
const form = useRef();

const emailServiceID = "service_q4i5zci";
const emailTemplateID = "template_pb2lzco";
const emailUserID = "8j3Jz543CBJTdv4vp";

const sendEmail = (e) => {
e.preventDefault();
const emailParams = {
user_name: name,
user_tal: number,
user_selectService: selectedService,
user_texr: address,
};
console.log(emailParams);
// Create the email message with user's name and phone number
const emailMessage = `You received a new message from ${name} (${number}) with the subject: ${selectedService} address: ${address} You have received a inquiry. Best wishes, Thank You.`;

    // Send the email using EmailJS
    emailjs
      .send(
        emailServiceID,
        emailTemplateID,
        emailParams,
        emailUserID,
        emailMessage
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        window.location.href = "/thankYou";
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });

};

const services = [
"Bed Bug",
"Cockroach",
"Termite",
"Mosquito",
"Ant",
"Wood Borer",
"General",
"Flea & Fly",
];

return (
<div className="flex xsm:mt-[-10rem] xsm:ml-2 xsm:mr-2 xl:mt-[-30rem] md:mt-[-15rem] flex-col lg:mt-[-19rem] sm:mt-[-7rem]  ssm:ml-4 ssm:mr-4 ssm:mt-[-10rem] sm:flex-row items-center justify-center">
<div className="p-4 gap-10 sm:p-9 rounded-md sm:rounded-md bg-gradient-to-br border border-black w-full sm:w-96 mb-4 sm:mb-0">
<h1 className="text-2xl font-semibold p-2">Book a Service</h1>
<form ref={form} onSubmit={sendEmail}>
<label className="block mb-2 font-semibold">Name:</label>
<input
name="user_name"
required
type="text"
className="w-full p-2 border border-black rounded-md"
value={name}
onChange={(e) => setName(e.target.value)}
placeholder="Enter Your Name"
/>

          <label className="block mt-1 mb-2 font-semibold">Phone Number:</label>
          <input
            name="user_tal"
            required
            type="tel"
            className="w-full p-2 border border-black rounded-md"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter Your Number"
          />

          <label className="block mt-1 mb-2 font-semibold">
            Select a Service:
          </label>
          <select
            name="user_selectService"
            required
            className="w-full p-2 border border-black rounded-md"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            <option value="">Select a Service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>

          <label className="block mt-1 mb-2 font-semibold">Address</label>
          <input
            name="user_texr"
            required
            type="text"
            className="w-full p-2 border border-black rounded-md"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter Your Address"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white mt-4 py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Book Service
          </button>
        </form>
      </div>
      {/* Contact Us */}
      <div className="flex flex-col items-center sm:flex-row justify-center w-full sm:w-auto">
        <div className="p-4 sm:p-9 sm:pt-[0] pt-[-5rem] rounded-lg md:pt-32 lg:pt-[-120rem] border border-black ssm:ml-4 ssm:mr-4 bg-white">
          <h1 className="text-center text-2xl font-semibold mb-4 ">
            Contact Us
          </h1>
          <div className="text-center">
            {/* Contact Us content */}
            <p className="mb-4 p-4 py-6 font-bold rounded-lg">
              We're open for any suggestions or just to have a chat
            </p>

            <div className="flex items-center mb-4 ml-[-12px] space-x-4">
              <span>
                <HomeIcon />
              </span>
              <span className="font-bold ">Address:</span>
              <span className="pl-2 xl:pl-[1px] text-left ">
                Office No-4, Shukdhashree{" "}
                <p>Apartment, Sr No.422, Narayan Peth,</p>
                Pune, Pune City, Maharashtra, India, 411030.
              </span>
            </div>

            <div className="flex items-center mb-4 ml-[-12px] space-x-4">
              <span>
                <EmailIcon />
              </span>
              <span className="font-bold">Email:</span>
              <span className="pl-2">entomon.pestsolutions@gmail.com</span>
            </div>

            <div className="flex items-center mb-4 ml-[-12px] space-x-4">
              <span>
                <CallIcon />
              </span>
              <span className="font-bold">Mobile Number:</span>
              <span className="pl-2">+918010281236</span>
            </div>

            <div className="space-y-4 ml-[-12px]">
              <button
                onClick={() => {
                  window.location.href = "tel:+918010281236";
                }}
                className="bg-blue-500 text-white px-4 py-2 mr-8 rounded-md"
              >
                Call Us
              </button>

              <button
                onClick={() => {
                  const phoneNumber = "918010281236"; // Phone number without the plus sign and country code
                  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
                  window.open(url, "_blank");
                }}
                className="bg-green-500 ml-[-12px] text-white px-4 py-2 mr-8 rounded-md"
              >
                Whatsapp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

);
};

export default ServiceBook;











<!-- This is for header photo -->

<div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <img
            className="mx-auto flex h-min w-[7rem] xsm:-ml-8 -ml-4 max-w-screen-xl"
            src={Logo}
            alt="Logo"
          />
        </Typography>




For Area

  const [selectOption, setSelectOption] = useState("1 bhk");
  const [price, setPrice] = useState(599);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectOption(selectedValue);

    // Update price based on the selected option
    if (selectedValue === "1 BHK") {
      setPrice(599);
    } else if (selectedValue === "2 BHK") {
      setPrice(699);
    } else if (selectedValue === "3 BHK") {
      setPrice(799);
    } else if (selectedValue === "Other") {
      setPrice(0);
    }
  };



   {/* Content */}
          <div className="lg:w-1/2 p-8 lg:p-12 text-center lg:text-center">
            {/* <h2 className="text-4xl text-indigo-600 font-semibold mb-4">
              Home
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











Termite :-

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


Cockroach :-

  <div class="max-w-4xl mt-10 mx-auto text-center">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
          Silent Destroyers
        </h1>

        <div class="p-4 sm:p-8 lg:p-12 bg-gray-100 rounded-lg shadow-md sm:ml-0 md:ml-[-1rem] md:mr-[-1rem] lg:ml-[-6rem] lg:mr-[-5rem] xl:ml-[-13rem] xl:mr-[-13rem] text-left">
          <p class="mb-4 sm:text-base">
            <span class="font-semibold">Sightings and fecal droppings: </span>
            Cockroaches are nocturnal creatures and tend to hide during the day.
            If you notice live cockroaches scurrying around at night or find
            small dark droppings resembling coffee grounds, it could indicate an
            infestation.
          </p>
          <p class="mb-4 sm:text-base">
            <span class="font-semibold">Unpleasant odor: </span>
            Cockroaches emit a distinctive musty odor that can become noticeable
            in areas with a large population. If you detect an unpleasant smell,
            particularly in kitchen or bathroom areas, it could be a sign of a
            cockroach infestation.
          </p>
          <p class="mb-4 sm:text-base">
            Dealing with a cockroach infestation requires professional
            expertise. A licensed pest control company can assess the severity
            of the infestation and implement appropriate cockroach control
            measures. This may include insecticide treatments, baits, and
            sealing entry points to prevent further infestations.
          </p>
        </div>

        <div class="mt-10 flex flex-col items-start text-start container font-bold">
          <ul class="list-disc pl-6 space-y-2">
            <li>
              Cockroaches are active mostly during nighttime or in dark,
              concealed areas.
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
              Cockroaches can travel and infest new areas by navigating through
              gaps and openings, and they are also known to be carried in
              infested items such as bags, boxes, and furniture.
            </li>
            <li>
              Travel and Infestation: cockroachs have the ability to infest new
              areas through soil traversal, utilizing mud tubes, or by being
              transported within infested wood, furniture, or other
              cellulose-based materials.
            </li>
            <li class="text-red-500">
              Remember, if you suspect a cockroach infestation in your property,
              it is essential to contact a professional pest control service to
              assess the situation and provide effective treatment options.
            </li>
          </ul>
        </div>
      </div>

Mosquito :-

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


===
Mouse :--


  <div className="max-w-4xl pt-10 mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
          Silent Destroyers
        </h1>

        <div class="p-4 sm:p-8 lg:p-12 bg-gray-100 rounded-lg shadow-md sm:ml-0 md:ml-[-1rem] md:mr-[-1rem] lg:ml-[-6rem] lg:mr-[-5rem] xl:ml-[-13rem] xl:mr-[-13rem] text-left">
          <p class="mb-4 sm:text-base">
            <span class="font-semibold">Sightings and fecal droppings:</span>
            Mousees are nocturnal creatures and tend to hide during the day. If
            you notice live Mousees scurrying around at night or find small dark
            droppings resembling coffee grounds, it could indicate an
            infestation.
          </p>
          <p class="mb-4 sm:text-base">
            <span class="font-semibold">Unpleasant odor:</span>
            Mousees emit a distinctive musty odor that can become noticeable in
            areas with a large population. If you detect an unpleasant smell,
            particularly in kitchen or bathroom areas, it could be a sign of a
            Mouse infestation.
          </p>
          <p class="mb-4 sm:text-base">
            Dealing with a Mouse infestation requires professional expertise. A
            licensed pest control company can assess the severity of the
            infestation and implement appropriate Mouse control measures. This
            may include insecticide treatments, baits, and sealing entry points
            to prevent further infestations.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-start text-start container font-bold">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Mousees are active mostly during nighttime or in dark, concealed
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
              Mousees can travel and infest new areas by navigating through gaps
              and openings, and they are also known to be carried in infested
              items such as bags, boxes, and furniture.
            </li>
            <li className="text-red-500">
              Remember, if you suspect a Mouse infestation in your property, it
              is essential to contact a professional pest control service to
              assess the situation and provide effective treatment options.
            </li>
          </ul>
        </div>
      </div>


====
ant :-
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



=============
WoodBorer :-


  <div className="max-w-4xl pt-10 mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
          Silent Destroyers
        </h1>
        <div class="p-4 sm:p-8 lg:p-12 bg-gray-100 rounded-lg shadow-md sm:ml-0 md:ml-[-1rem] md:mr-[-1rem] lg:ml-[-6rem] lg:mr-[-5rem] xl:ml-[-13rem] xl:mr-[-13rem] text-left">
          <p class="mb-4 sm:text-base">
            <span class="font-semibold"> Sightings and fecal droppings:</span>
            WoodBoreres are nocturnal creatures and tend to hide during the day.
            If you notice live WoodBoreres scurrying around at night or find
            small dark droppings resembling coffee grounds, it could indicate an
            infestation.
          </p>
          <p class="mb-4 sm:text-base">
            <span class="font-semibold">UnpleasWoodBorer odor:</span>
            WoodBoreres emit a distinctive musty odor that can become noticeable
            in areas with a large population. If you detect an unpleasWoodBorer
            smell, particularly in kitchen or bathroom areas, it could be a sign
            of a WoodBorer infestation.
          </p>
          <p class="mb-4 sm:text-base">
            Dealing with a WoodBorer infestation requires professional
            expertise. A licensed pest control company can assess the severity
            of the infestation and implement appropriate WoodBorer control
            measures. This may include insecticide treatments, baits, and
            sealing entry points to prevent further infestations.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-start text-start container font-bold">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              WoodBoreres are active mostly during nighttime or in dark,
              concealed areas.
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
              WoodBorers can travel and infest new areas by navigating through
              gaps and openings, and they are also known to be carried in
              infested items such as bags, boxes, and furniture.
            </li>
            <li className="text-red-500">
              Remember, if you suspect a WoodBorer infestation in your property,
              it is essential to contact a professional pest control service to
              assess the situation and provide effective treatment options.
            </li>
          </ul>
        </div>
      </div>





==============
BedBug :-

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

====================
Fly

      <div className="max-w-4xl pt-10 mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
          Silent Destroyers
        </h1>

        <div class="p-4 sm:p-8 lg:p-12 bg-gray-100 rounded-lg shadow-md sm:ml-0 md:ml-[-1rem] md:mr-[-1rem] lg:ml-[-6rem] lg:mr-[-5rem] xl:ml-[-13rem] xl:mr-[-13rem] text-left">
          <p class="mb-4 sm:text-base">
            <span class="font-semibold"> Sightings and fecal droppings:</span>
            Flyes are nocturnal creatures and tend to hide during the day. If
            you notice live Flyes scurrying around at night or find small dark
            droppings resembling coffee grounds, it could indicate an
            infestation.
          </p>
          <p class="mb-4 sm:text-base">
            <span class="font-semibold">UnpleasFly odor:</span>
            Flyes emit a distinctive musty odor that can become noticeable in
            areas with a large population. If you detect an unpleasFly smell,
            particularly in kitchen or bathroom areas, it could be a sign of a
            Fly infestation.
          </p>
          <p class="mb-4 sm:text-base">
            Dealing with a Fly infestation requires professional expertise. A
            licensed pest control company can assess the severity of the
            infestation and implement appropriate Fly control measures. This may
            include insecticide treatments, baits, and sealing entry points to
            prevent further infestations.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-start text-start container font-bold">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Flyes are active mostly during nighttime or in dark, concealed
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
              Flys can travel and infest new areas by navigating through gaps
              and openings, and they are also known to be carried in infested
              items such as bags, boxes, and furniture.
            </li>
            <li className="text-red-500">
              Remember, if you suspect a Fly infestation in your property, it is
              essential to contact a professional pest control service to assess
              the situation and provide effective treatment options.
            </li>
          </ul>
        </div>
      </div>

=====================================
HEADER WITH Cities :-

import {
  IconButton,
  MobileNav,
  Navbar,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem
} from "@material-tailwind/react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationCityIcon from "@mui/icons-material/LocationCity"; // Import City icon
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Logo from "../assets/Navbar/Logo.png";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <li className="mb-4 mt-2 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-12">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="tel:+918010281236"
          className="flex items-center text-lg text-green-500 font-bold"
        >
          <CallIcon style={{ marginRight: "8px" }} />
          +918010281236
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="mailto:entomon.pestsolution@gmail.com"
          className="flex items-center text-lg text-black font-bold"
        >
          <EmailIcon style={{ marginRight: "8px" }} />
          entomon.pestsolution@gmail.com
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=918010281236"
          rel="noreferrer"
          className="flex items-center text-lg text-green-500 font-bold"
        >
          <WhatsAppIcon style={{ marginRight: "8px" }} />
          WhatsApp
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Menu>
          <MenuHandler>
            <span className="flex items-center text-lg text-blue-500 font-bold cursor-pointer">
              <LocationCityIcon style={{ marginRight: "4px" }} /> Cities 
              <ArrowDropDownIcon />
            </span>
          </MenuHandler>
          <MenuList>
            <MenuItem>
              <Link to="/city/mumbai">Mumbai</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/city/delhi">Delhi</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/city/bangalore">Bangalore</Link>
            </MenuItem>
            {/* Add more cities as needed */}
          </MenuList>
        </Menu>
      </Typography>
    </li>
  );

  return (
    <Navbar
      className="mx-auto max-w-screen-xxl py-2 px-4 lg:px-8 lg:py-4"
      style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <img
            className="h-[5rem] w-auto"
            src={Logo}
            alt="Pest Control In Pune"
          />
        </Typography>

        <div className="hidden lg:flex">{navList}</div>
        <Link
          to="/contact"
          variant="gradient"
          size="sm"
          className="hidden lg:inline-block text-base text-black font-bold ml-12 lg:mr-16 bg-gray-200 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300"
        >
          <span>Contact Us</span>
        </Link>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6 text-black font-bold"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto text-black m-5 gap-y-7">
          {navList}
          <Link
            to="/contact"
            variant="gradient"
            size="sm"
            className="mb-2 ml-2 text-black bg-gray-200 py-2 px-4 rounded-md font-bold hover:bg-gray-300 transition duration-300"
          >
            <span>Contact Us</span>
          </Link>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default Header;




 <Helmet>
        <title>Professional Pest Control Services Near You | Extermination and Treatment</title>
        <meta name="description" content="Get effective pest control services near you. We offer bed bug treatment, termite treatment, rodent control, mosquito control, and more. Contact us for affordable and efficient pest solutions." />
        <meta name="keywords" content="home pest control, bed bug treatment near me, termite treatment cost, roach killer, ant exterminator near me, pest control companies, bed bug removal, mosquito treatment, mosquito dunks, fumigation services, mice control, ant control, mouse control, fumigation services near me, best bed bug treatment, spider pest control, termite killer, bed bug control near me, bed bugs removal, cockroach infestation, flea control, cockroach exterminator cost, get rid of ants, get rid of mosquitoes, spider exterminator, mosquito killer outdoor, pigeon control, termite treatment near me, bed bug fumigation, white ant treatment, drain fly killer, mosquito prevention, termiticide, best way to kill mosquitoes, united pest control, bed bug prevention, get rid of flies in house, sugar ants, royal pest control, ant baits, bed bug interceptor, natural insecticide, fleas in bed, exterminator near me, aptive pest control, bed bug exterminator, wasp nest removal, bed bug exterminator near me, mice exterminator near me, rodent control near me, bee exterminator near me, rat exterminator, bee removal, mouse exterminator near me, rodent exterminator near me, mouse exterminator, mice exterminator, bug exterminator near me, bee exterminator, flea treatment, rodent removal near me, wasp removal near me, flea exterminator, termite companies near me, bug exterminator, rat control near me, bug control near me, wasp removal, wasp exterminator near me, pest control companies near me, roach exterminator, mosquito control near me, pest removal near me, local exterminators, best way to get rid of mice, mice control near me, exterminators in my area, bed bug heat treatment, wasp nest removal near me, termite exterminator, flea exterminator near me, local pest control near me, local pest control, fleas in house, bee control near me, best mosquito control, bird removal near me, mosquito spraying near me, bed bug treatment cost, wasp exterminator, emergency pest control, rodent removal, get rid of mice, bat exterminator near me, hornet nest removal, mouse control near me, american pest control, pest services near me, rat removal, wasp control near me, 24 hour pest control, bug control, pest control in my area, pest control for mice, bat control near me, best way to get rid of roaches, bifen xts, best way to get rid of bed bugs, american pest, ant infestation, flea pest control, spider exterminator near me, rat infestation, bee nest removal, pest removal, evergreen pest control, pest exterminator, affordable pest control, termite company, flea infestation, subterranean termites, mouse pest control, flea treatment for house, bird nest removal, bat exterminator, bee control, termite pest control near me, natural pest control, lawn pest control, eco pest control, scorpion pest control, environmental pest control, bird removal, green pest control, best ant killer, flea killer, bird nest removal near me, commercial pest control, wasp control, pest companies near me, insect control, get rid of rats, termite control near me, rat problem, termite protection, best way to get rid of rats, fly exterminator, ant killer indoor, yellow jacket removal, most effective bed bug treatment, outdoor pest control, rats in attic, lawn pest control near me, pigeon removal, kill bed bugs, fumigation cost, wasp pest control, mice infestation, carpenter ants in house, roach control, triguard pest control, drywood termites, flea treatment for home, best termite treatment, bed bug heat treatment cost, grub killer, national pest control companies, moth killer, grubs in lawn, get rid of bed bugs fast, professional pest control, get rid of roaches, carpenter ant killer, spider control, best flea treatment for home, roof rats, termite barrier, bug killer, best pest control company, fire ant killer, yellow jacket nest removal, residential pest control, outdoor mosquito control, flea killer for house, bird pest control, best way to get rid of mosquitoes, phoenix pest control, ant problem in house, carpenter bee treatment, pigeon pest control, natural ant killer, termite prevention treatment, ant removal, flea infestation in house, ant problem, fly killer indoor, advanced pest control, flea removal, yellow jacket nest, ant infestation in house, mouse infestation in house, aptive pest, ant control near me, best way to get rid of ants, termite fumigation, all american pest control, pest services, complete pest control, indoor mosquito killer, best way to kill bed bugs, professional roach killer, wasp deterrent, german roaches, best indoor mosquito killer, get rid of fleas in house, fruit fly infestation, indoor pest control, aphid control, fruit flies in house, best roach killer for home, grub killer for lawns, house fumigation, earwigs in house, bug killer indoor, rid a pest, wasp nest killer, rentokil prices, budget pest control, mosquitoes in house, ant killer outdoor, grub control for lawn, natural flea killer, best ant killer indoor, pest management services, get rid of flies, carpenter ant treatment, roach killer indoor, best way to get rid of flies, best fly killer, eco pest, get rid of termites, all pest control, flea killer for home, best flea killer for home, demand cs insecticide, ant treatment, rodent killer, flying ants in house, best way to get rid of fleas in house, universal pest control, all pest, best way to kill rats, best pest, pest pro, bioadvanced complete insect killer, termite control services, rats in walls, mosquito barrier, fly killer outdoor, termite baits, ipm pest control, vermin control, best outdoor ant killer, best outdoor mosquito killer, best way to get rid of rats fast, best termite killer, rodent infestation, tap insulation, rats in garden, natural bed bug killer, pro pest control, cyzmic cs, best treatment for grubs in lawn, get rid of wasps, silverfish control, get rid of carpenter bees, earwig killer, silverfish in house, get rid of wasp nest, german cockroach infestation, bird proofing, american pest management, pest control treatment, earwig infestation, aphids treatment, silverfish infestation, garden pest control, get rid of spiders, fly problem in house, flying termites in house, silverfish killer, large black ants, best fire ant killer, natural roach killer, terminator pest control, house fly infestation, get rid of moths, mosquito beater, spider infestation, yellow jacket nest in wall, get rid of carpenter ants, slug killer, termite stakes, cockroach fumigation, ants in my house, bug buster, pest control near me, pest exterminator near me, insect control near me, cockroaches, bed bugs, bed bugs in bed, termites, mosquitoes, centipedes, pest control, bed bug infestation, cockroach killer, silverfish, rodent, mosquito killers, silverfish insect, mosquito repellents, pest control services, pest control services near me, cockroach exterminator, cockroach pest control, pest, roach pest control, herbal pest control near me, kill rats, bed bug treatment, plant that repels mosquitoes, aptive company, bed bug pest control, anti termite treatment, termite treatment, cockroach killer at home, wasp insect, best pest control near me, best exterminator near me, german cockroach, fire ants, earwigs, herbal pest control, earwig insect, best roach killer, carpenter bee, best cockroach killer, rat deterrent, mosquito spraying, white ants, house centipede, green mosquito, home centipede, carpenter ants, wasp nest, pest control prices, pest control cost, exterminator prices, exterminator cost, insect killer, black ants in house, pest control india, mosquito larvae, mortein rat killer, termites in house, fly killer, pest control near me prices, black ants, urban clap pest control, exterminating, mealybugs treatment, acetamiprid insecticide, thrips control insecticide, american cockroaches, pest control for rats, cockroach exterminator near me, cockroach pest control near me, urban company pest control, rodent control, termite control, ant exterminator, ant killer, bed bug killer, rodent exterminator, bedbugs treatment, ant pest control, rodent pest control, best mosquito killer, temprid, anti termite, wood termites, best insecticide for mealybugs, cockroach killer paste, small cockroach, flying cockroaches, australian cockroach, exterminator, mosquito pest control, flying termites, cockroaches in house, eco friendly pest control, get rid of cockroaches, beneficial insects, weed management, thrips control, pharaoh ants, biological pest control, rats and mice, red ants in house, termite insect, flea insect, mite insect, centipede insect, fruit borer, granary weevil, green cockroach, rat exterminator near me, rat removal near me, termite pest control, ants in house, mosquito patches, rat pest control near me, termite and pest control, pest management, bed bug treatment at home, best rat killer, termite treatment at home, bifen insecticide, mealy bug control, baygon cockroach killer, leaf miner control, mosquito killer bat, green insect, ant insect, largest cockroach, millipedes and centipedes, bee removal near me, mosquito control, best pest control, bed bug exterminator cost, organic pest control, strongest bed bug killer, bed bug control, cockroach control, pantry moths, mice repellents, mosquito insecticide, kill flies in house, white fly control, small ants in house, bedbugs control, mosquito killer for home, small black ants in house, little black ants in house, grain moth, get rid of bed bugs, fruit fly killer, best bed bug killer, get rid of fruit flies, cockroach treatment, fly control, termite infestation, german cockroach killer, best way to kill roaches, best way to get rid of cockroaches, mosquito protection, german roach killer, best way to kill cockroaches, best insecticide, flying insect killer, organic insecticides, millipedes in house, wood borer treatment, yellow jacket wasp, house moths, small ants, tiny black ants, small black ants, bees and wasps, little black ants, ant home, tiny bed bugs, wasp bee, moth flies, wasp hornet, small mosquito, black termites, norway rat, white termites, pantry pests, black bed bugs, yellow jacket insect, white bed bugs, indian moth, surinam cockroach, red and black ants, yellow jacket bug, pest control, pest control near me, exterminator near me, exterminator, termite treatment, bed bugs, termites, aptive pest control, bed bug treatment, bee removal near me, bed bug exterminator, rodent control, bed bug exterminator near me, best pest control near me, rat exterminator near me, mice exterminator near me, mosquito control, rodent control near me, pest control services, termite control, bee exterminator near me, rat exterminator, bee removal, termite treatment cost, mouse exterminator near me, rodent exterminator near me, pest control services near me, affordable pest control near me, roach killer, mouse exterminator, mice exterminator, bug exterminator near me, ant exterminator near me, pest control companies, bee exterminator, roach exterminator near me, flea treatment, carpenter ants, ant exterminator, rodent removal near me, termite companies near me, bug exterminator, rat control near me, bug control near me, wasp removal, wasp exterminator near me, pest control companies near me, roach exterminator, mosquito control near me, rat control, pest removal near me, local exterminators, best way to get rid of mice, bed bug removal, wasp nest, mice control near me, exterminators in my area, bed bug heat treatment, wasp nest removal near me, termite exterminator, flea exterminator near me, local pest control near me, local pest control, home pest control, fleas in house, rat removal near me, bee control near me, best mosquito control, bird removal near me, mosquito treatment, pest exterminator near me, bed bug treatment near me, mosquito spraying near me, bed bug treatment cost, bed bug pest control, mosquito dunks, wasp exterminator, emergency pest control, fumigation services, rodent removal, termite pest control, best pest control, ant killer, mice control, get rid of mice, ants in house, bat exterminator near me, hornet nest removal, pest control for rats, mouse control near me, american pest control, mosquito patches, get rid of bed bugs, ant control, bed bug killer, best exterminator near me" />
      </Helmet>