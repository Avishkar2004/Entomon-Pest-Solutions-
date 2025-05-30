import emailjs from "@emailjs/browser";
import { Call as CallIcon, Email as EmailIcon, Home as HomeIcon } from "@mui/icons-material";
import React, { useRef, useState } from "react";

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
    const emailMessage = `You received a new message from ${name} (${number}) with the subject: ${selectedService} address: ${address}. You have received an inquiry. Best wishes, Thank You.`;

    emailjs
      .send(
        emailServiceID,
        emailTemplateID,
        emailParams,
        emailUserID
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
    <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch justify-center">
        {/* Quote Form */}
        <div className="w-full lg:w-[500px] bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 border border-gray-200 flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-green-600">Get FREE Quotes</h1>
          <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-6 flex-grow">
            <div>
              <label className="block mb-2 font-medium text-gray-700">Name:</label>
              <input
                name="user_name"
                required
                type="text"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Phone Number:</label>
              <input
                name="user_tal"
                required
                type="tel"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Enter Your Number"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Select a Service:</label>
              <select
                name="user_selectService"
                required
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Address</label>
              <input
                name="user_texr"
                required
                type="text"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter Your Address"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 sm:py-4 px-6 rounded-lg transition-colors duration-200 mt-auto"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="w-full lg:w-[500px] bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 border border-gray-200 flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-green-600">
            Contact Us
          </h1>

          <p className="text-gray-600 mb-8 sm:mb-10">
            We're open for any suggestions or just to have a chat
          </p>

          <div className="space-y-6 sm:space-y-8 flex-grow">
            <div className="flex items-start space-x-4">
              <HomeIcon className="text-green-600 mt-1 w-6 h-6" />
              <div>
                <p className="font-semibold text-gray-700 mb-1">Address:</p>
                <p className="text-gray-600">
                  Office No-4, Shukdhashree Apartment,<br />
                  Sr No.422, Narayan Peth,<br />
                  Pune, Maharashtra, India, 411030.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <EmailIcon className="text-green-600 w-6 h-6" />
              <div>
                <p className="font-semibold text-gray-700 mb-1">Email:</p>
                <p className="text-gray-600">entomon.pestsolution@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <CallIcon className="text-green-600 w-6 h-6" />
              <div>
                <p className="font-semibold text-gray-700 mb-1">Mobile Number:</p>
                <p className="text-gray-600">+918010281236</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-6 sm:pt-8">
              <button
                onClick={() => {
                  window.location.href = "tel:+918010281236";
                }}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 sm:py-4 px-6 rounded-lg transition-colors duration-200"
              >
                Call Us
              </button>

              <button
                onClick={() => {
                  const phoneNumber = "918010281236";
                  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
                  window.open(url, "_blank");
                }}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 sm:py-4 px-6 rounded-lg transition-colors duration-200"
              >
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBook;
