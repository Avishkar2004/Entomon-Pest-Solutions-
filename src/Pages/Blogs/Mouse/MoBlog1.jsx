import React from 'react';
import MouseImage from "../../../assets/Mouse/mouse5.webp";
import { FaMouse, FaShieldAlt, FaTools, FaBroom } from 'react-icons/fa';

const MoBlog1 = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-4">HOW TO GET RID OF MICE?</h1>
          <div className="flex justify-center">
            <img
              src={MouseImage}
              alt="Mouse"
              className="w-full max-w-lg h-auto rounded-lg mb-6 object-cover shadow-lg"
            />
          </div>
        </div>
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Understanding Mouse Behavior</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            To effectively get rid of mice, it's important to understand their behavior. Mice are nocturnal and are most active at night. They seek food and shelter in your home, often gaining entry through small cracks and holes.
          </p>
        </div>
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Steps to Eliminate Mice</h2>
          <ol className="list-decimal list-inside text-gray-700 ml-4 space-y-3">
            <li><FaTools className="inline mr-2 text-blue-600" /><span className="font-bold">Seal Entry Points:</span> Close off any gaps, cracks, or holes in walls, floors, and foundations to prevent mice from entering your home.</li>
            <li><FaMouse className="inline mr-2 text-blue-600" /><span className="font-bold">Use Mouse Traps:</span> Set traps in areas where mice are active. Various types of traps, such as snap traps, glue traps, and live traps, can be effective.</li>
            <li><FaShieldAlt className="inline mr-2 text-blue-600" /><span className="font-bold">Apply Rodenticides:</span> Use rodenticides cautiously, preferably in tamper-resistant bait stations, to reduce mouse populations.</li>
            <li><FaBroom className="inline mr-2 text-blue-600" /><span className="font-bold">Maintain Cleanliness:</span> Keep your home clean and free of food scraps. Store food in airtight containers to minimize attractions for mice.</li>
            <li><FaTools className="inline mr-2 text-blue-600" /><span className="font-bold">Remove Nesting Materials:</span> Eliminate potential nesting sites by removing clutter, especially in attics, basements, and garages.</li>
          </ol>
        </div>
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Preventive Measures</h2>
          <ol className="list-decimal list-inside text-gray-700 ml-4 space-y-3">
            <li><FaBroom className="inline mr-2 text-blue-600" /><span className="font-bold">Regular Cleaning:</span> Regularly clean your home to prevent crumbs and other food sources that attract mice.</li>
            <li><FaShieldAlt className="inline mr-2 text-blue-600" /><span className="font-bold">Yard Maintenance:</span> Keep your yard clean and free of debris. Trim vegetation and remove wood piles that can serve as hiding places for mice.</li>
            <li><FaMouse className="inline mr-2 text-blue-600" /><span className="font-bold">Professional Inspections:</span> Schedule regular pest inspections to detect and address mouse issues early.</li>
            <li><FaTools className="inline mr-2 text-blue-600" /><span className="font-bold">Proper Storage:</span> Store pet food and bird seed in sealed containers and clean up spills promptly.</li>
          </ol>
        </div>
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Getting rid of mice requires a combination of sealing entry points, using traps and rodenticides, and maintaining a clean environment. By understanding their behavior and taking proactive measures, you can effectively reduce mouse populations and protect your home from these pests.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoBlog1;
