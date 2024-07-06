import emailjs from "emailjs-com";
import React, { useState } from "react";
import PhoneCall from "../assets/Global/telephone.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    postcode: "",
    pests: "Select any one...",
    establishmentType: "Residential",
  });
  const [sending, setSending] = useState(false);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const emailServiceID = "service_ycteqon";
  const emailTemplateID = "template_hvcfvys";
  const emailUserID = "8j3Jz543CBJTdv4vp";

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true) //Set sending to true to show loader
    const emailParams = {
      user_name: formData.name,
      // user_email: formData.email,
      user_tal: formData.telephone,
      user_selectService: formData.pests,
      user_texr: formData.postcode,
      user_establishmentType: formData.establishmentType,
    };

    // Create the email message with user's information
    const emailMessage = `You have received a new service booking from ${formData.name}  (${formData.telephone}). Service type ${formData.telephone} user postcode: ${formData.postcode} user establishmentType: ${formData.establishmentType} The details are as follows:
  
  Name: ${formData.name}
  Phone Number: ${formData.telephone}
  Address: ${formData.postcode}
  Selected Service: ${formData.pests}
  Establishment Type: ${formData.establishmentType}
  
  Thank You.`;

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
      }).finally(() => {
        setSending(false) //set sending to false after sending
      })
  };

  // Loader
  const Loader = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold text-center items-center mt-8 text-red-600">
        Contact Us
      </h1>
      <div className="max-w-none mx-auto md:ml-16 md:flex md:items-center xsm:ml-12 xsm:mr-[1rem]">
        <div className="p-4 md:p-12 justify-center items-center">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">
            <div className="flex-shrink-0">
              <img
                src={PhoneCall}
                alt="Phone Icon"
                className="h-[13rem] w-[13rem] md:h-[13rem] md:w-[13rem] text-blue-600"
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-12">
              <h2 className="text-2xl font-semibold text-gray-800">Call Us</h2>
              <p className="text-gray-600 text-lg">For bookings & inquiries</p>
              <p className="text-[#0071b1] text-center p-3 border-2 border-[#0071b1] font-bold text-xl mt-2 rounded-md">
                <a href="tel:+918010281236" className="hover:underline">8010281236</a>
              </p>
              <button
                onClick={() => {
                  const phoneNumber = "918010281236";
                  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
                  window.open(url, "_blank");
                }}
                className="bg-green-500 border-2 border-green-500 text-white font-bold text-xl mt-4 px-14 py-3 rounded-md transition duration-300 hover:bg-green-600 hover:border-green-600"
              >
                Whatsapp
              </button>
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto p-6 mt-4 rounded-md w-full">
        <form onSubmit={sendEmail} className="flex flex-col space-y-4">
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <label className="block text-black font-medium">
                Kindly take a moment to fill in the form so that we can provide
                you with the best possible solution.
              </label>
            </div>
            <div className="flex items-center mb-2">
              <label className="block"></label>
              <p className="text-red-600 text-base font-bold">
                Note: All fields are mandatory. We respect the confidentiality
                of your personal details and adhere to strict data protection
                practices.
              </p>
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-bold">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-4 font-semibold text-black border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          {/* <div className="mb-4">
            <label className="block font-bold">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-4 font-semibold border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your Email"
            />
          </div> */}
          <div className="mb-4">
            <label className="block font-bold">Phone *</label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full px-4 py-4 font-semibold border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your Phone Number"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold">Address Details *</label>
            <input
              type="text"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
              className="w-full px-4 py-4 font-semibold border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Your Address"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold">Pests *</label>
            <select
              name="pests"
              value={formData.pests}
              onChange={handleChange}
              className="w-full px-4 py-4 font-semibold border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option disabled>Select any one...</option>
              <option value="Ant & Crawling Insects">
                Ant & Crawling Insects
              </option>
              <option value="Bandicoot Rat">Bandicoot Rat</option>
              <option value="Bed Bug">Bed Bug</option>
              <option value="Bird">Bird</option>
              <option value="Cockroach">Cockroach</option>
              <option value="Disinfection Service">Disinfection Service</option>
              <option value="Mouse">Mouse</option>
              <option value="Mosquito">Mosquito</option>
              <option value="Rat">Rat</option>
              <option value="Termite">Termite</option>
              <option value="Wood Borer">Wood Borer</option>
              <option value="Flea & Fly">Flea & Fly</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium">
              Type of establishment *
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                name="establishmentType"
                value="Residential"
                checked={formData.establishmentType === "Residential"}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="mr-4">Residential</label>
              <input
                type="radio"
                name="establishmentType"
                value="Commercial"
                checked={formData.establishmentType === "Commercial"}
                onChange={handleChange}
                className="mr-2"
              />
              <label>Commercial</label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-4  rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Send Message
          </button>
          {sending && <Loader />}
        </form>
      </div>
    </div>
  );
};

export default Contact;
