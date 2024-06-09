import React from 'react';
import WaterPurifyImg from "../assets/WaterPurify/waterpuriy.png";
import cus1 from "../assets/WaterPurify/cus1.avif"
import cus2 from "../assets/WaterPurify/cus2.webp"


function WaterPurify() {
    return (
        <div className="p-6 text-gray-900">
            <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">Water Purification</h1>

            <section className="mb-12 text-center">
                <img src={WaterPurifyImg} alt="Water Purification" className="w-48 h-48 mx-auto mb-6 rounded-lg shadow-md" />
                <p className="text-lg leading-relaxed">
                    Clean and safe drinking water is essential for health and well-being. Water purification is the process of removing undesirable chemicals, biological contaminants, suspended solids, and gases from water.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-600 mb-6">Common Water Purification Methods</h2>
                <ul className="list-disc list-inside space-y-4">
                    <li>
                        <strong className="font-semibold">Boiling:</strong> Kills bacteria, viruses, and parasites by heating the water to its boiling point.
                    </li>
                    <li>
                        <strong className="font-semibold">Filtration:</strong> Removes impurities using a physical barrier, chemical, or biological process.
                    </li>
                    <li>
                        <strong className="font-semibold">Distillation:</strong> Involves boiling water and then condensing the steam to remove impurities.
                    </li>
                    <li>
                        <strong className="font-semibold">Chlorination:</strong> Uses chlorine to kill bacteria and other microorganisms.
                    </li>
                    <li>
                        <strong className="font-semibold">UV Radiation:</strong> Uses ultraviolet light to disinfect water by killing pathogens.
                    </li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-600 mb-6">Benefits of Water Purification</h2>
                <ul className="list-disc list-inside space-y-4">
                    <li>Removes harmful contaminants and pathogens.</li>
                    <li>Improves taste and odor of water.</li>
                    <li>Reduces the risk of waterborne diseases.</li>
                    <li>Provides safe drinking water for households.</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-600 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    <details className="bg-white p-6 rounded-lg shadow-md">
                        <summary className="font-semibold cursor-pointer">How often should I change my water filter?</summary>
                        <p className="mt-4">It depends on the type of filter you use and your water quality. Generally, it's recommended to change your filter every 3-6 months.</p>
                    </details>
                    <details className="bg-white p-6 rounded-lg shadow-md">
                        <summary className="font-semibold cursor-pointer">Can I use purified water for cooking?</summary>
                        <p className="mt-4">Yes, using purified water for cooking can enhance the taste and quality of your food.</p>
                    </details>
                    <details className="bg-white p-6 rounded-lg shadow-md">
                        <summary className="font-semibold cursor-pointer">Is purified water safe for pets?</summary>
                        <p className="mt-4">Absolutely, purified water is safe and beneficial for pets as it removes harmful contaminants.</p>
                    </details>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-600 mb-6">Introduction to Water Purification Technologies</h2>
                <p className="text-lg leading-relaxed">
                    Advances in water purification technologies have made it easier and more efficient to ensure safe drinking water. Some of the latest technologies include reverse osmosis, nanofiltration, and advanced oxidation processes.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-600 mb-6">Comparison Table</h2>
                <table className="min-w-full bg-white rounded-lg shadow-md">
                    <thead >
                        <tr>
                            <th className="px-4 py-2">Method</th>
                            <th className="px-4 py-2">Effectiveness</th>
                            <th className="px-4 py-2">Cost</th>
                            <th className="px-4 py-2">Ease of Use</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr className="border-t">
                            <td className="px-4 py-2">Boiling</td>
                            <td className="px-4 py-2">High</td>
                            <td className="px-4 py-2">Low</td>
                            <td className="px-4 py-2">Easy</td>
                        </tr>
                        <tr className="border-t">
                            <td className="px-4 py-2">Filtration</td>
                            <td className="px-4 py-2">Medium</td>
                            <td className="px-4 py-2">Medium</td>
                            <td className="px-4 py-2">Easy</td>
                        </tr>
                        <tr className="border-t">
                            <td className="px-4 py-2">Distillation</td>
                            <td className="px-4 py-2">High</td>
                            <td className="px-4 py-2">High</td>
                            <td className="px-4 py-2">Moderate</td>
                        </tr>
                        <tr className="border-t">
                            <td className="px-4 py-2">Chlorination</td>
                            <td className="px-4 py-2">High</td>
                            <td className="px-4 py-2">Low</td>
                            <td className="px-4 py-2">Easy</td>
                        </tr>
                        <tr className="border-t">
                            <td className="px-4 py-2">UV Radiation</td>
                            <td className="px-4 py-2">High</td>
                            <td className="px-4 py-2">Medium</td>
                            <td className="px-4 py-2">Easy</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-600 mb-6">Installation and Maintenance Guide</h2>
                <p className="text-lg leading-relaxed">
                    Proper installation and regular maintenance of water purification systems are crucial for their effectiveness. Follow the manufacturer's instructions and schedule regular checks to ensure your system is functioning optimally.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-600 mb-6">Customer Reviews and Ratings</h2>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <img src={cus1} alt="Customer 1" className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <p className="text-center font-semibold">Raju Shinde</p>
                        <p className="text-center italic">"Using this water purifier has significantly improved the quality of water in our home. Highly recommend!"</p>
                        <div className="text-yellow-500 mt-2">
                            ★★★★☆
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <img src={cus2} alt="Customer 2" className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <p className="text-center font-semibold">Raghav Patil</p>
                        <p className="text-center italic">"We feel much safer knowing our water is clean and free of contaminants. Great product!"</p>
                        <div className="text-yellow-500 mt-2">
                            ★★★★★
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-600 mb-6">Case Studies and Success Stories</h2>
                <p className="text-lg leading-relaxed">
                    Discover how water purification systems have made a difference in various communities and households around the world. Read about the challenges they faced and the solutions that brought them clean, safe water.
                </p>
            </section>

        </div>
    );
}

export default WaterPurify;
