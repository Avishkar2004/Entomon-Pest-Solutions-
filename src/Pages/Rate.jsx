import React from 'react';
import ratesData from './ratesData';

function Rate() {
    return (
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
            {Object.values(ratesData).map((category, index) => (
                <div key={index} className="mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-green-700">{category.title}</h2>
                    <div className="overflow-x-auto rounded-xl shadow-lg">
                        <table className="table-auto w-full border-collapse">
                            <thead>
                                <tr className="bg-green-600 text-white">
                                    <th className="px-4 py-4 sm:px-6 sm:py-5 text-left text-sm sm:text-base font-semibold">Building Type</th>
                                    <th className="px-4 py-4 sm:px-6 sm:py-5 text-left text-sm sm:text-base font-semibold">Building Area</th>
                                    <th className="px-4 py-4 sm:px-6 sm:py-5 text-left text-sm sm:text-base font-semibold">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {category.rates.map((rate, rateIndex) => (
                                    <tr
                                        key={rateIndex}
                                        className={`${rateIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                            } hover:bg-gray-100 transition-colors duration-200`}
                                    >
                                        <td className="border px-4 py-4 sm:px-6 sm:py-5 text-sm sm:text-base">{rate.type}</td>
                                        <td className="border px-4 py-4 sm:px-6 sm:py-5 text-sm sm:text-base">{rate.area}</td>
                                        <td className="border px-4 py-4 sm:px-6 sm:py-5 text-sm sm:text-base font-medium">{rate.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
            <div className="mt-12 sm:mt-16 bg-gray-50 p-6 sm:p-8 rounded-xl border border-gray-200">
                <h1 className="text-sm sm:text-base md:text-lg">
                    <span className="text-red-600 font-bold">
                        Please Note:
                    </span>
                    <span className="text-gray-700 ml-2">
                        The aforementioned prices are rough estimates. Our experts will give you the final price quote after the site inspection. Prices are subject to an additional 18% GST.
                    </span>
                </h1>
            </div>
        </div>
    );
}

export default Rate;
