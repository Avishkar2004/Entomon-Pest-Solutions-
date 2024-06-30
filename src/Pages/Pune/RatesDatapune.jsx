import React from 'react';
import { useParams } from 'react-router-dom';
import RatesInPune from './RatesinPune';

function RatesDatapune() {
    const { location } = useParams();
    return (
        <section>
            <h3 className="text-3xl font-bold text-black mb-6 mt-6 text-center">Pest Control Rates in {location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} :-</h3>
            <h1 className='text-black mb-6 mt-6'>Welcome to Entomon Pest Solutions, your reliable source for hiring top-notch pest control services. We provide cost-effective pest control solutions in {location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}, ensuring affordability and excellent value for money.</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                    <thead>
                        <tr className="bg-green-600 text-white">
                            <th className="py-3 px-4 border-b text-start">Treatment Type</th>
                            <th className="py-2 px-4 border-b">1 BHK</th>
                            <th className="py-2 px-4 border-b">2 BHK</th>
                            <th className="py-2 px-4 border-b">3 BHK</th>
                            <th className="py-2 px-4 border-b">4 BHK</th>
                            <th className="py-2 px-4 border-b">5 BHK</th>
                        </tr>
                    </thead>
                    <tbody>
                        {RatesInPune.map((rate, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                <td className="py-2 px-4 border-b pt-4">{rate.treatmentType}</td>
                                <td className="py-2 px-4 border-b text-center">{rate["1BHK"]}</td>
                                <td className="py-2 px-4 border-b text-center">{rate["2BHK"]}</td>
                                <td className="py-2 px-4 border-b text-center">{rate["3BHK"]}</td>
                                <td className="py-2 px-4 border-b text-center">{rate["4BHK"]}</td>
                                <td className="py-2 px-4 border-b text-center">{rate["5BHK"]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>    
    )
}

export default RatesDatapune