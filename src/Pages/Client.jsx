import React, { Suspense, lazy } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

// Lazy load images
const c1 = new URL("../assets/ServiceType/c1.jpeg", import.meta.url).href;
const c2 = new URL("../assets/ServiceType/c2.jpeg", import.meta.url).href;
const c4 = new URL("../assets/ServiceType/c4.jpeg", import.meta.url).href;
const c5 = new URL("../assets/ServiceType/c5.avif", import.meta.url).href;
const c6 = new URL("../assets/ServiceType/c6.png", import.meta.url).href;

// Client card component
const ClientCard = React.memo(({ image, title, description }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
    <div className="relative w-full h-48 mb-4">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />
    </div>
    <p className="text-lg font-semibold">{title}</p>
    <p className="text-gray-600">{description}</p>
  </div>
));

// Client data
const clientData = [
  {
    image: c1,
    title: "Goderaj Infinity",
    description: "Annual maintenance for general pest control for Goderaj Infinity premises"
  },
  {
    image: c4,
    title: "Goderaj Rejue",
    description: "Annual maintenance for general pest control for goderaj premises"
  },
  {
    image: c2,
    title: "Water purification factory",
    description: "Annual maintenance for general pest control for Factory premises"
  },
  {
    image: c6,
    title: "Bank Of Maharashtra",
    description: "Good customer with Yearly contract with Entomon Pest Solutions"
  },
  {
    image: c5,
    title: "State bank of India",
    description: "Provided good quality service to SBI"
  }
];

function Client() {
  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Our Valued Clients
        </h1>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Suspense fallback={<div>Loading...</div>}>
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              stopOnHover={true}
              swipeable={true}
              emulateTouch={true}
              preventMovementUntilSwipeScrollTolerance={true}
              swipeScrollTolerance={50}
            >
              {clientData.map((client, index) => (
                <ClientCard key={index} {...client} />
              ))}
            </Carousel>
          </Suspense>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {clientData.map((client, index) => (
              <ClientCard key={index} {...client} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Client);