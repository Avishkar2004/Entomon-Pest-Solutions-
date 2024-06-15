import React from 'react';
import { FaBug, FaShieldAlt, FaSprayCan, FaTools } from 'react-icons/fa';
import Ants1 from "../../../assets/Ant/Ant1.webp";

const AntBlog1 = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-3xl mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-extrabold text-blue-800 mb-4">HOW TO GET RID OF ANTS IN YOUR HOME?</h1>
                    <div className="flex justify-center">
                        <img
                            src={Ants1}
                            alt="Ants"
                            className="w-full max-w-lg h-auto rounded-lg mb-6 object-cover shadow-lg"
                        />
                    </div>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">Understanding Ant Behavior</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        To effectively get rid of ants in your home, it's important to understand their behavior. Ants typically enter homes in search of food and water, following trails they establish between their colony and food sources.
                    </p>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">Effective Strategies</h2>
                    <ol className="list-decimal list-inside text-gray-700 ml-4 space-y-3">
                        <li><FaTools className="inline mr-2 text-blue-600" /><span className="font-bold">Identify Entry Points:</span> Seal cracks and gaps where ants enter your home, disrupting their access.</li>
                        <li><FaSprayCan className="inline mr-2 text-blue-600" /><span className="font-bold">Use Ant Baits:</span> Place ant baits near trails and where ants are active to attract and eliminate them.</li>
                        <li><FaShieldAlt className="inline mr-2 text-blue-600" /><span className="font-bold">Keep Surfaces Clean:</span> Clean countertops, floors, and surfaces regularly to remove crumbs and spills that attract ants.</li>
                        <li><FaBug className="inline mr-2 text-blue-600" /><span className="font-bold">Natural Remedies:</span> Use natural deterrents like vinegar, lemon juice, or essential oils to repel ants.</li>
                        <li><FaTools className="inline mr-2 text-blue-600" /><span className="font-bold">Maintain Yard:</span> Trim vegetation and remove debris to reduce outdoor ant habitats near your home.</li>
                    </ol>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">Preventive Measures</h2>
                    <ol className="list-decimal list-inside text-gray-700 ml-4 space-y-3">
                        <li><FaShieldAlt className="inline mr-2 text-blue-600" /><span className="font-bold">Store Food Properly:</span> Keep food in tightly sealed containers to prevent attracting ants.</li>
                        <li><FaTools className="inline mr-2 text-blue-600" /><span className="font-bold">Fix Moisture Issues:</span> Repair leaks and reduce moisture in your home to eliminate water sources for ants.</li>
                        <li><FaBug className="inline mr-2 text-blue-600" /><span className="font-bold">Professional Assistance:</span> Consult pest control professionals for severe ant infestations or recurring problems.</li>
                        <li><FaSprayCan className="inline mr-2 text-blue-600" /><span className="font-bold">Regular Inspections:</span> Conduct regular inspections to detect and address ant problems early.</li>
                    </ol>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">Conclusion</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Getting rid of ants requires a combination of understanding their behavior, using effective strategies like baits and natural repellents, and implementing preventive measures. By taking proactive steps, you can maintain an ant-free environment and protect your home from these pests.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AntBlog1;
