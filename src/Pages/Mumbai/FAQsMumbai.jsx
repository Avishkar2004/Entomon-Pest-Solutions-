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
];

function FAQsMumbai() {
    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-black mb-6">Important Pest Control FAQs</h1>
            <div className="faq mb-4">
                <h3 className="text-xl font-semibold text-green-700">Q. Why hiring pest control services in Mumbai is imperative?</h3>
                <p className="text-gray-700 mt-3">We at Get Pest Control are in the niche for several years. Hence, we completely understand the needs of professional pest control services. We understand well that pests and insects are nuisance. No one likes a place where mosquitoes are in search of human blood, cockroaches are frightening ladies, rats are making damages and termites are feeding on furniture. That’s not all. Pests and insects are also a great threat to health. They are noted for damaging properties and spreading some of fatal diseases. So, it is imperative to hire professional pest control services in Mumbai in order to get rid of life threatening pests and insects.</p>
            </div>
            <div className="faq mb-4">
                <h3 className="text-xl font-semibold text-green-700">Q. What are charges for termite control services in Pune?</h3>
                <p className="text-gray-700 mt-3">Estimated charges for termite control services in Mumbai can be in the range of Rs 1200 to Rs 8200 depending upon the size of property and level of infestations.</p>
            </div>
            <div className="faq mb-4">
                <h3 className="text-xl font-semibold text-green-700">Q. What are estimated bedbug control charges in Mumbai near me?</h3>
                <p className="text-gray-700 mt-3">The estimated charges for bedbug control services in Mumbai will be in the range of Rs 1500 to Rs 4000 depending on the size of the treatment area and the level of infestation.</p>
            </div>
            <div className="faq mb-4">
                <h3 className="text-xl font-semibold text-green-700">Q. What are estimated cockroach control charges in Mumbai near me?</h3>
                <p className="text-gray-700 mt-3">Estimated charges for cockroach control services in Mumbai can be the in the range of Rs 799 to Rs 1599 depending on the size of the treatment area and the level of infestation.</p>
            </div>
            <div className="faq mb-4">
                <h3 className="text-xl font-semibold text-green-700">Q. What are the approximate charges for rodents or rates control services in Mumbai near me?</h3>
                <p className="text-gray-700 mt-3">Approximate charges for rodent or rat control services in Mumbai can be in the range of Rs 749 to Rs 1399 depending on the size of the treatment area and the level of infestation.</p>
            </div>
            <div className="faq mb-4">
                <h3 className="text-xl font-semibold text-green-700">Q. What are estimated ant control charges in Mumbai near me?</h3>
                <p className="text-gray-700 mt-3">Approximate ant pest control charges in Mumbai can be in the range of Rs 749 to Rs 1399 depending on the size of the treatment area and the level of infestation.</p>
            </div>
            <div className="faq mb-4">
                <h3 className="text-xl font-semibold text-green-700">Q. What are estimated mosquito control charges in Mumbai near me?</h3>
                <p className="text-gray-700 mt-3">Approximate mosquito control charges in Mumbai will be in the range of Rs 1700 to Rs 2800 depending on the size of the treatment area and the level of infestation.</p>
            </div>
            <div className="faq mb-4">
                <h3 className="text-xl font-semibold text-green-700">Q. What are approximate bees control charges in Mumbai near me?</h3>
                <p className="text-gray-700 mt-3">Approximate bees control charges in Mumbai will be in the range of Rs 1000 to Rs 2000.</p>
            </div>
            <div className="faq mb-4">
                <h3 className="text-xl font-semibold text-green-700">Q. What are estimated lizard control charges in Mumbai near me?</h3>
                <p className="text-gray-700 mt-3">The estimated lizard control charges in Mumbai will be in the range of Rs 700 to Rs 2000.</p>
            </div>
            <div className="faq mb-4">
                <h3 className="text-xl font-semibold text-green-700">Q. What are estimated charges for bird netting services in Mumbai near me?</h3>
                <p className="text-gray-700 mt-3">Approximate charges for bird netting services in Mumbai near you can be in the range of Rs 1000 to Rs 5000 depending on the size of the service area.</p>
            </div>
            <section>
                <h3 className='text-3xl font-bold text-black mb-6'>Local Pest Control in Mumbai Near Me</h3>
                <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4'>
                    {locations.map((location) => (
                        <li key={location}>
                            <Link className="text-blue-700 text-sm" to={`/mumbai/${location}`}>
                                Pest Control in {location.split('-').map(word => word.charAt(0, 2).toUpperCase() + word.slice(1)).join(", ")}
                            </Link>
                        </li>
                    ))}
                </div>
            </section>
        </div>)
}

export default FAQsMumbai