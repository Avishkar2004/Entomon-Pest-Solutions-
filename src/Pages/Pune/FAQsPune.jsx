import React from 'react';
import { Link } from "react-router-dom";

const locations = [
    'Aundh-pune',
    'hinjewadi-pune',
    'wakad-pune',
    'hadapsar-pune',
    'pimpri-chinchwad-pune',
    'bavdhan-pune',
    'chandan-nagar-pune',
    'boat-club-road-pune',
    'shivajinagar-pune',
    'sangvi-pune',
    'nigdi-pune',
    'koregaon-park-pune',
    'bibvewadi-pune',
    'bhugaon-pune',
    'ambegaon-budruk-pune',
    'bhukum-pune',
    'dhankawadi-pune',
    'kalewadi-pune',
    'kasarwadi-pune',
    'maan-pune',
    'moshi-pune',
    'phugewadi-pune',
    'magarpatta-pune',
    'kothrud-pune',
    'vishranthwadi-pune',
    'wagholi-pune',
    'baner-pune',
    'kondhwa-pune',
    'katraj-pune',
    'karve-nagar-pune',
    'kalyani-nagar-pune',
    'undri-pune',
    'keshav-nagar-pune',
    'mundhwa-pune',
    'dhanori-pune',
    'dhayari-pune',
    'fursungi-pune',
    'ghorpadi-pune',
    'khadki-pune',
    'pimple-nilakh-pune',
    'tathawade-pune',
    'thergaon-pune',
    'yerwada-pune',
    'kharadi-pune',
    'pimple-gurav-pune',
    'pimple-saudagar-pune',
    'viman-nagar-pune',
    'senapati-bapat-road-pune',
    'ravet-pune',
    'erandwane-pune',
    'phursungi-pune',
    'model-colony-pune',
    'talawade-pune',
    'wadgaon-sheri-pune',
    'vishal-nagar-pune',
    'lohagaon-pune',
    'manjri-pune',
    'pashan-pune',
    'sus-pune',
    'balewadi-pune',
    'warje-pune',
    'bhosari-pune',
    'chakan-pune',
    'dapodi-pune'
];



function FAQsPune() {
    return (
        <div className="max-w-5xl mx-auto p-6 border-t border-b border-gray-300">
            <h1 className="text-3xl font-bold text-black mb-6">Important Pest Control FAQs</h1>
            <div className="faq mb-4">
                <h3 className="text-xl font-semibold text-green-700">Q: What types of pests are common in Pune?</h3>
                <p className="text-gray-700 mt-3">Common pests in Pune include termites, mosquitoes, cockroaches, rats, ants, bedbugs, and spiders. The humid climate and urban setting contribute to these pest infestations.</p>
            </div>
            <div className="faq mb-4">
                <h3 className="text-xl font-semibold text-green-700">Q: How often should pest control be done in Pune?</h3>
                <p className="text-gray-700 mt-3">It's recommended to have pest control treatments every 3-6 months. However, the frequency may vary depending on the severity of the infestation and the type of pest.
                </p>
            </div>
            <div className="faq mb-4">
                <h3 className="text-xl font-semibold text-green-700">Q. Are pest control treatments safe for children and pets?</h3>
                <p className="text-gray-700 mt-3">Professional pest control services use chemicals that are safe for children and pets when used as directed. It’s important to follow the instructions provided by the pest control company, such as vacating the premises for a few hours if necessary.</p>
            </div>
            <div className="faq mb-4">
                <h3 className="text-xl font-semibold text-green-700">Q: What should I do to prepare my home for pest control treatment?</h3>
                <p className="text-gray-700 mt-3">Preparations may include cleaning the house, storing food properly, covering or removing pets, and vacating the premises if advised. Specific instructions will be provided by the pest control service.
                </p>
            </div>
            <div className="faq mb-4">
                <h3 className="text-xl font-semibold text-green-700">Q. What are the approximate charges for rodents or rates control services in Pune near me?</h3>
                <p className="text-gray-700 mt-3">Approximate charges for rodent or rat control services in Pune can be in the range of Rs 749 to Rs 1399 depending on the size of the treatment area and the level of infestation.</p>
            </div>
            <div className="faq mb-4">
                <h3 className="text-xl font-semibold text-green-700">Q: How can I prevent pests from entering my home in Pune?</h3>
                <p className="text-gray-700 mt-3">Regularly clean your home, seal cracks and openings, store food in airtight containers, dispose of garbage properly, and eliminate standing water to prevent pests from breeding.
                </p>
            </div>
            <div className="faq mb-4">
                <h3 className="text-xl font-semibold text-green-700">Q: What should I do if I see pests after a pest control treatment?</h3>
                <p className="text-gray-700 mt-3">It's normal to see an increase in pest activity immediately after treatment as pests are driven out of hiding. If pests are still present after a week or two, contact your pest control provider for a follow-up treatment.
                </p>
            </div>
            <div className="faq mb-4">
                <h3 className="text-xl font-semibold text-green-700">Q: Are there eco-friendly pest control options available in Pune?</h3>
                <p className="text-gray-700 mt-3">A: Yes, many pest control companies in Pune offer eco-friendly or organic pest control solutions that use natural ingredients to eliminate pests without harming the environment.</p>
            </div>
            <div className="faq mb-4">
                <h3 className="text-xl font-semibold text-green-700">Q: How much does pest control service cost in Pune?</h3>
                <p className="text-gray-700 mt-3">The cost varies depending on the size of the property, type of pest, severity of the infestation, and the treatment method used. On average, it can range from INR 1,000 to INR 5,000 for standard services.</p>
            </div>
            <div className="faq mb-4 ">
                <h3 className="text-xl font-semibold text-green-700">Q: Can I do pest control myself, or should I hire a professional?</h3>
                <p className="text-gray-700 mt-3 ">While DIY pest control methods can be effective for minor infestations, professional pest control services are recommended for severe or persistent infestations. Professionals have the expertise, equipment, and chemicals to handle pests effectively and safely.
                </p>
            </div>
            <hr className='border-t border-b border-gray-300' />
            <section>
                <h3 className='text-3xl font-bold text-black mb-3 mt-3'>Local Pest Control in Pune Near Me</h3>
                <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-2 '>
                    {locations.map((location) => (
                        <ul key={location}>
                            <Link className="text-blue-700 text-sm" to={`/pune/${location}`}>
                                Pest Control in {location.split('-').map(word => word.charAt(0, 2).toUpperCase() + word.slice(1)).join(", ")}
                            </Link>
                        </ul>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default FAQsPune;