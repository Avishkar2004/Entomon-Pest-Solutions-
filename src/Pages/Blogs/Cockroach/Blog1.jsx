import React from 'react';
import CockroachImage from "../../../assets/Cockroach/cockroach1.webp";
import { FaBug, FaShieldAlt, FaTools, FaTint } from 'react-icons/fa';

const CockroachBlog = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-4">HOW TO GET RID OF COCKROACHES?</h1>
          <div className="flex justify-center">
            <img
              src={CockroachImage}
              alt="Cockroach"
              className="w-full max-w-lg h-auto rounded-lg mb-6 object-cover shadow-lg"
            />
          </div>
        </div>
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Understanding Cockroach Behavior</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Cockroaches are resilient pests that thrive in warm environments and are often found in kitchens, bathrooms, and other areas with food and water sources. Understanding their behavior and habits is crucial in effectively eliminating them from your home.
          </p>
        </div>
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Signs of Infestation</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">Before starting treatment, identify signs of cockroach infestation:</p>
          <ul className="list-disc list-inside text-gray-700 ml-4 space-y-3">
            <li><span className="font-bold">Visible Roaches:</span> Seeing live roaches during the day, especially in kitchens and bathrooms.</li>
            <li><span className="font-bold">Egg Casings:</span> Small, dark capsules often found in hidden areas.</li>
            <li><span className="font-bold">Droppings:</span> Small, dark pellets resembling ground coffee or black pepper.</li>
            <li><span className="font-bold">Musty Odor:</span> A strong, oily odor that indicates a large infestation.</li>
          </ul>
        </div>
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Steps to Eliminate Cockroaches</h2>
          <ol className="list-decimal list-inside text-gray-700 ml-4 space-y-3">
            <li><FaTools className="inline mr-2 text-blue-600" /><span className="font-bold">Identify Entry Points:</span> Seal cracks, gaps, and openings where cockroaches can enter your home.</li>
            <li><FaShieldAlt className="inline mr-2 text-blue-600" /><span className="font-bold">Remove Food Sources:</span> Keep food in sealed containers, clean up spills promptly, and avoid leaving pet food out overnight.</li>
            <li><FaTools className="inline mr-2 text-blue-600" /><span className="font-bold">Use Cockroach Baits:</span> Place bait stations in areas where cockroaches are active. Baits contain a slow-acting poison that cockroaches carry back to their nest, eliminating the colony.</li>
            <li><FaShieldAlt className="inline mr-2 text-blue-600" /><span className="font-bold">Insecticide Sprays:</span> Use insecticide sprays in cracks and crevices, along baseboards, and other hiding spots. Follow safety guidelines when using chemicals indoors.</li>
            <li><FaTint className="inline mr-2 text-blue-600" /><span className="font-bold">Reduce Moisture:</span> Cockroaches need water to survive. Fix leaks, dry wet areas, and use dehumidifiers to reduce humidity levels.</li>
          </ol>
        </div>
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Preventive Measures</h2>
          <ol className="list-decimal list-inside text-gray-700 ml-4 space-y-3">
            <li><FaTools className="inline mr-2 text-blue-600" /><span className="font-bold">Clean Regularly:</span> Keep your home clean by vacuuming regularly, wiping down surfaces, and removing clutter.</li>
            <li><FaShieldAlt className="inline mr-2 text-blue-600" /><span className="font-bold">Seal Entry Points:</span> Repair screens, seal cracks, and install door sweeps to prevent cockroaches from entering your home.</li>
            <li><FaBug className="inline mr-2 text-blue-600" /><span className="font-bold">Use Pest Control:</span> Schedule regular pest control inspections and treatments to prevent cockroach infestations.</li>
            <li><FaTint className="inline mr-2 text-blue-600" /><span className="font-bold">Landscape Management:</span> Keep outdoor areas clean and free of debris that can attract cockroaches.</li>
          </ol>
        </div>
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Getting rid of cockroaches requires a combination of sanitation, pest control methods, and preventive measures. By understanding their behavior and implementing these strategies, you can effectively eliminate cockroaches from your home and prevent future infestations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CockroachBlog;
