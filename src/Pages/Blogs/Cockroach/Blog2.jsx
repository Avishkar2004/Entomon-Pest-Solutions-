import React from 'react';
import { FaBug, FaShieldAlt, FaTint, FaTools } from 'react-icons/fa';
import CockroachImage from "../../../assets/Cockroach/cockroach2.webp";

const Blog2 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-4">WHEN SHOULD I TREAT MY HOUSE FOR COCKROACHES?</h1>
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
            Cockroaches are resilient pests that can quickly multiply if not addressed promptly. Knowing when to treat your home for cockroaches involves recognizing signs of infestation and understanding their behavior.
          </p>
        </div>
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Signs It's Time to Treat for Cockroaches</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">Consider treating your house for cockroaches if you notice:</p>
          <ul className="list-disc list-inside text-gray-700 ml-4 space-y-3">
            <li><span className="font-bold">Visible Roaches:</span> If you frequently spot cockroaches during daylight hours, especially in kitchen and bathroom areas.</li>
            <li><span className="font-bold">Increased Activity:</span> An uptick in cockroach sightings or signs such as droppings and discarded exoskeletons.</li>
            <li><span className="font-bold">Nesting Sites:</span> Discovering cockroach egg cases or nests in dark, secluded areas of your home.</li>
          </ul>
        </div>
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">When to Schedule Treatment</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            It's advisable to schedule cockroach treatment as soon as you confirm an infestation or observe significant signs of their presence. Delaying treatment can allow the infestation to spread, making eradication more challenging.
          </p>
        </div>
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Steps to Eliminate Cockroaches</h2>
          <ol className="list-decimal list-inside text-gray-700 ml-4 space-y-3">
            <li><FaTools className="inline mr-2 text-blue-600" /><span className="font-bold">Identify Entry Points:</span> Seal cracks, gaps, and other openings where cockroaches can enter your home.</li>
            <li><FaShieldAlt className="inline mr-2 text-blue-600" /><span className="font-bold">Remove Food Sources:</span> Store food in sealed containers, clean up spills promptly, and avoid leaving pet food out overnight.</li>
            <li><FaTools className="inline mr-2 text-blue-600" /><span className="font-bold">Use Cockroach Baits:</span> Place bait stations in areas where cockroaches are active to eliminate the entire colony.</li>
            <li><FaShieldAlt className="inline mr-2 text-blue-600" /><span className="font-bold">Apply Insecticide:</span> Use insecticide sprays in cracks, crevices, and hiding spots, following safety guidelines carefully.</li>
            <li><FaTint className="inline mr-2 text-blue-600" /><span className="font-bold">Reduce Moisture:</span> Address sources of water and humidity to make your home less attractive to cockroaches.</li>
          </ol>
        </div>
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Preventive Measures</h2>
          <ol className="list-decimal list-inside text-gray-700 ml-4 space-y-3">
            <li><FaTools className="inline mr-2 text-blue-600" /><span className="font-bold">Maintain Cleanliness:</span> Regularly clean and sanitize your home to remove potential food sources and hiding places.</li>
            <li><FaShieldAlt className="inline mr-2 text-blue-600" /><span className="font-bold">Seal Entry Points:</span> Repair screens, seal cracks, and install door sweeps to prevent cockroaches from entering.</li>
            <li><FaBug className="inline mr-2 text-blue-600" /><span className="font-bold">Professional Inspections:</span> Schedule regular pest inspections and treatments to detect and address cockroach issues early.</li>
            <li><FaTint className="inline mr-2 text-blue-600" /><span className="font-bold">Outdoor Maintenance:</span> Keep outdoor areas clean and minimize debris to reduce cockroach attraction.</li>
          </ol>
        </div>
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Acting promptly to treat your house for cockroaches can prevent a minor infestation from becoming a major problem. By understanding their behavior, recognizing signs of infestation, and implementing effective treatments and preventive measures, you can effectively control and eliminate cockroaches from your home.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog2;
