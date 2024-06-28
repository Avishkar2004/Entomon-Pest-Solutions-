import React from 'react';
import ratesData from './ratesData';

function Rate() {
    return (
        <div className="container mx-auto p-6">
            {Object.values(ratesData).map((category, index) => (
                <div key={index} className="mb-8">
                    <h2 className="text-3xl font-bold mb-6 text-green-700">{category.title}</h2>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse shadow-lg">
                            <thead>
                                <tr className="bg-green-600 text-white">
                                    <th className="px-6 py-4">Building Type</th>
                                    <th className="px-6 py-4">Building Area</th>
                                    <th className="px-6 py-4">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {category.rates.map((rate, rateIndex) => (
                                    <tr key={rateIndex} className={rateIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                        <td className="border px-6 py-4">{rate.type}</td>
                                        <td className="border px-6 py-4">{rate.area}</td>
                                        <td className="border px-6 py-4">{rate.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
            <div className="mt-8">
                <h1>
                    <span className="text-red-600 font-bold">
                        Please Note:
                    </span>  <span className="text-black">The aforementioned prices are rough estimates. Our experts will give you the final price quote after the site inspection. Prices are subject to an additional 18% GST.</span>
                </h1>
            </div>
        </div>
    );
}

export default Rate;
