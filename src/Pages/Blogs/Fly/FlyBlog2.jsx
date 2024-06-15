import React from "react";
import Flys2 from "../../../assets/Fly/Fly2.avif";

import { FaBug, FaShieldAlt, FaSprayCan, FaTools } from 'react-icons/fa';

const FlyBlog2 = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-3xl mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-extrabold text-blue-800 mb-4">WHEN SHOULD I TREAT MY HOUSE FOR FLIES?</h1>
                    <div className="flex justify-center">
                        <img
                            src={Flys2}
                            alt="Flies"
                            className="w-full max-w-lg h-auto rounded-lg mb-6 object-cover shadow-lg"
                        />
                    </div>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">Understanding Fly Behavior</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Knowing when to treat your house for flies is crucial for effective control. Flies are attracted to food sources and organic waste, making kitchens and dining areas common areas for infestations. Regular sanitation and preventive measures are key to keeping fly populations under control.
                    </p>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">Signs of Fly Infestation</h2>
                    <ol className="list-decimal list-inside text-gray-700 ml-4 space-y-3">
                        <li><FaTools className="inline mr-2 text-blue-600" /><span className="font-bold">Visible Flies:</span> Spotting flies buzzing around food or garbage areas in your home.</li>
                        <li><FaSprayCan className="inline mr-2 text-blue-600" /><span className="font-bold">Eggs or Larvae:</span> Finding fly eggs or larvae in organic waste or decaying matter.</li>
                        <li><FaShieldAlt className="inline mr-2 text-blue-600" /><span className="font-bold">Unpleasant Odors:</span> Detecting a foul smell from decomposing organic matter attracting flies.</li>
                        <li><FaBug className="inline mr-2 text-blue-600" /><span className="font-bold">Cluster of Flies:</span> Noticing a sudden increase in fly activity indoors.</li>
                    </ol>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">Timing for Treatment</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Treat your house for flies as soon as you notice signs of infestation. Early intervention can prevent fly populations from growing and causing more significant issues. Implement sanitation practices and use fly traps or repellents to manage fly activity effectively.
                    </p>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">Preventive Measures</h2>
                    <ol className="list-decimal list-inside text-gray-700 ml-4 space-y-3">
                        <li><FaShieldAlt className="inline mr-2 text-blue-600" /><span className="font-bold">Sanitation:</span> Keep kitchen and dining areas clean, and dispose of garbage regularly.</li>
                        <li><FaTools className="inline mr-2 text-blue-600" /><span className="font-bold">Food Storage:</span> Store food in sealed containers to prevent attracting flies.</li>
                        <li><FaBug className="inline mr-2 text-blue-600" /><span className="font-bold">Outdoor Maintenance:</span> Keep outdoor areas clean and minimize organic waste that could attract flies.</li>
                        <li><FaSprayCan className="inline mr-2 text-blue-600" /><span className="font-bold">Professional Help:</span> Consult with pest control professionals for persistent fly problems or large infestations.</li>
                    </ol>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">Conclusion</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Knowing when to treat your house for flies and taking proactive measures can help maintain a fly-free environment. By addressing potential breeding sites, implementing sanitation practices, and using effective treatment methods, you can effectively manage fly infestations in your home.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FlyBlog2;