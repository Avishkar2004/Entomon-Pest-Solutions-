import React from 'react';
import MouseControl from "../../../assets/Mouse/mouse4.webp";
import { FaMouse, FaShieldAlt, FaTools, FaBroom } from 'react-icons/fa';

const MoBlog2 = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-3xl mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-extrabold text-blue-800 mb-4">WHEN SHOULD I TREAT MY HOUSE FOR MICE?</h1>
                    <div className="flex justify-center">
                        <img
                            src={MouseControl}
                            alt="Mouse"
                            className="w-full max-w-lg h-auto rounded-lg mb-6 object-cover shadow-lg"
                        />
                    </div>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">Understanding Mouse Behavior</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Knowing when to treat your house for mice depends on several factors. Mice are active year-round, but they seek shelter indoors more often during colder months. Signs of mouse activity such as droppings, gnaw marks, and sightings indicate the need for treatment.
                    </p>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">Timing for Effective Treatment</h2>
                    <ol className="list-decimal list-inside text-gray-700 ml-4 space-y-3">
                        <li><FaTools className="inline mr-2 text-blue-600" /><span className="font-bold">Early Detection:</span> Act promptly upon discovering signs of mice to prevent an infestation.</li>
                        <li><FaMouse className="inline mr-2 text-blue-600" /><span className="font-bold">Seasonal Considerations:</span> Treat your house for mice before colder seasons when they are more likely to seek indoor shelter.</li>
                        <li><FaShieldAlt className="inline mr-2 text-blue-600" /><span className="font-bold">Regular Monitoring:</span> Schedule regular inspections to detect and treat mice early, minimizing potential damage and health risks.</li>
                        <li><FaBroom className="inline mr-2 text-blue-600" /><span className="font-bold">Integrated Approach:</span> Combine treatment methods such as sealing entry points, using traps, and employing rodenticides for comprehensive control.</li>
                    </ol>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">Preventive Measures</h2>
                    <ol className="list-decimal list-inside text-gray-700 ml-4 space-y-3">
                        <li><FaBroom className="inline mr-2 text-blue-600" /><span className="font-bold">Home Maintenance:</span> Seal gaps and cracks, and keep your home clean to deter mice from entering.</li>
                        <li><FaShieldAlt className="inline mr-2 text-blue-600" /><span className="font-bold">Food Storage:</span> Store food in sealed containers and clean up spills promptly to remove attractions for mice.</li>
                        <li><FaMouse className="inline mr-2 text-blue-600" /><span className="font-bold">Professional Help:</span> Consult pest control professionals for tailored advice and effective treatment options.</li>
                        <li><FaTools className="inline mr-2 text-blue-600" /><span className="font-bold">Outdoor Management:</span> Trim vegetation and remove debris to minimize outdoor habitats for mice.</li>
                    </ol>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">Conclusion</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Determining the right time to treat your house for mice involves understanding their behavior and acting promptly upon detection. By implementing preventive measures and using effective treatment strategies, you can maintain a mouse-free environment and protect your home and family.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MoBlog2;
