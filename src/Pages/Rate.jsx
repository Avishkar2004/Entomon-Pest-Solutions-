import React from 'react';
import ratesData from './ratesData';

function Rate() {
    return (
        <div className="container mx-auto p-6 xsm:p-4 xsm:-mt-40 ssm:p-6 sm:p-8 md:p-10 lg:p-12">
            {Object.values(ratesData).map((category, index) => (
                <div key={index} className="mb-8">
                    <h2 className="text-xl xsm:text-xl ssm:text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-green-700">{category.title}</h2>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse shadow-lg">
                            <thead>
                                <tr className="bg-green-600 text-white">
                                    <th className="px-2 py-4 xsm:px-2 ssm:px-4 sm:px-6">Building Type</th>
                                    <th className="px-2 py-4 xsm:px-2 ssm:px-4 sm:px-6">Building Area</th>
                                    <th className="px-2 py-4 xsm:px-2 ssm:px-4 sm:px-6">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {category.rates.map((rate, rateIndex) => (
                                    <tr key={rateIndex} className={rateIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                        <td className="border px-2 py-4 xsm:px-2 ssm:px-4 sm:px-6">{rate.type}</td>
                                        <td className="border px-2 py-4 xsm:px-2 ssm:px-4 sm:px-6">{rate.area}</td>
                                        <td className="border px-2 py-4 xsm:px-2 ssm:px-4 sm:px-6">{rate.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
            <div className="mt-8">
                <h1 className="text-xs xsm:text-sm ssm:text-base sm:text-lg">
                    <span className="text-red-600 font-bold">
                        Please Note:
                    </span>  <span className="text-black">The aforementioned prices are rough estimates. Our experts will give you the final price quote after the site inspection. Prices are subject to an additional 18% GST.</span>
                </h1>
            </div>
        </div>
    );
}

export default Rate;
