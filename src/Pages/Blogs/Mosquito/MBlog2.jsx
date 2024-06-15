import React from 'react';
import { FaBug, FaShieldAlt, FaTint, FaTools } from 'react-icons/fa';
import MosquitoImage from "../../../assets/Mosquito/mosquito2.webp";

const MBlog2 = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-3xl mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-extrabold text-blue-800 mb-4">WHEN SHOULD I TREAT MY HOUSE FOR MOSQUITOES?</h1>
                    <div className="flex justify-center">
                        <img
                            src={MosquitoImage}
                            alt="Mosquito"
                            className="w-full max-w-lg h-auto rounded-lg mb-6 object-cover shadow-lg"
                        />
                    </div>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">Understanding Mosquito Behavior</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Mosquitoes are more than just annoying; they can carry diseases that affect both humans and animals. Understanding when to treat your home for mosquitoes involves recognizing their peak activity periods and breeding habits.
                    </p>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">Signs It's Time to Treat for Mosquitoes</h2>
                    <p className="text-gray-700 leading-relaxed text-lg mb-4">Consider treating your house for mosquitoes if you notice:</p>
                    <ul className="list-disc list-inside text-gray-700 ml-4 space-y-3">
                        <li><span className="font-bold">Increased Bites:</span> Frequent mosquito bites, especially during dawn and dusk when they are most active.</li>
                        <li><span className="font-bold">Standing Water:</span> Presence of standing water in your yard, which can serve as breeding sites for mosquitoes.</li>
                        <li><span className="font-bold">Mosquito Swarms:</span> Seeing groups of mosquitoes in shaded areas or near water sources around your home.</li>
                    </ul>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">When to Schedule Treatment</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        It's advisable to schedule mosquito treatment as soon as you notice increased activity or breeding sites. Prompt treatment can help control the population and reduce the risk of mosquito-borne diseases.
                    </p>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">Steps to Eliminate Mosquitoes</h2>
                    <ol className="list-decimal list-inside text-gray-700 ml-4 space-y-3">
                        <li><FaTools className="inline mr-2 text-blue-600" /><span className="font-bold">Remove Standing Water:</span> Eliminate sources of standing water such as buckets, flower pots, and bird baths where mosquitoes can breed.</li>
                        <li><FaShieldAlt className="inline mr-2 text-blue-600" /><span className="font-bold">Use Mosquito Traps:</span> Place traps in areas with high mosquito activity to reduce their numbers.</li>
                        <li><FaTools className="inline mr-2 text-blue-600" /><span className="font-bold">Apply Larvicides:</span> Use larvicides in water sources that cannot be removed to kill mosquito larvae before they become adults.</li>
                        <li><FaShieldAlt className="inline mr-2 text-blue-600" /><span className="font-bold">Install Screens:</span> Ensure windows and doors have screens to prevent mosquitoes from entering your home.</li>
                        <li><FaTint className="inline mr-2 text-blue-600" /><span className="font-bold">Use Insect Repellents:</span> Apply insect repellents on exposed skin and clothing to deter mosquito bites.</li>
                    </ol>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">Preventive Measures</h2>
                    <ol className="list-decimal list-inside text-gray-700 ml-4 space-y-3">
                        <li><FaTools className="inline mr-2 text-blue-600" /><span className="font-bold">Maintain Cleanliness:</span> Keep your surroundings clean and free of debris to minimize mosquito breeding sites.</li>
                        <li><FaShieldAlt className="inline mr-2 text-blue-600" /><span className="font-bold">Trim Vegetation:</span> Keep grass and shrubs trimmed to reduce hiding places for mosquitoes.</li>
                        <li><FaBug className="inline mr-2 text-blue-600" /><span className="font-bold">Professional Inspections:</span> Schedule regular pest inspections and treatments to detect and address mosquito issues early.</li>
                        <li><FaTint className="inline mr-2 text-blue-600" /><span className="font-bold">Outdoor Maintenance:</span> Ensure proper drainage in your yard to prevent water accumulation.</li>
                    </ol>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">Conclusion</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Taking timely action to treat your house for mosquitoes can prevent discomfort and health risks. By understanding their behavior, recognizing signs of their presence, and implementing effective treatments and preventive measures, you can keep your home mosquito-free.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MBlog2;