import React from "react";

const HomePage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 5,
      behavior: "smooth",
    });
  };

  const options = [
    {
      title: "24/7 Availability",
      description:
        "Our pest control services are available around the clock to address your needs.",
    },
    {
      title: "Professional Team",
      description:
        "We have a team of experienced and certified pest control experts.",
    },
    {
      title: "Eco-Friendly Solutions",
      description:
        "Our pest control methods are safe for the environment and your family.",
    },
    {
      title: "Affordable Pricing",
      description:
        "We offer competitive pricing and special discounts on our services.",
    },
  ];

  return (
    <div className="bg-white min-h-screen xsm:mb-28 md:-mb-60 xl:mb-[-22rem] lg:mb-[-8rem] sm:mb-[-15rem]">
      <section className="py-1">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-4 xsm:text-lg">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {options.map((option, index) => (
              <div
                key={index}
                className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-0">{option.title}</h3>
                <p className="text-gray-700">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
