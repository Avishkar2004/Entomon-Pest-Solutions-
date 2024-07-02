import React from 'react';
import Photo from "../../assets/HowitsWork/pestphoto.jpg";
import { useParams } from 'react-router-dom';

function Note() {
    const { location } = useParams();
    const locationFormatted = location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
        <div className="bg-white p-4 rounded mx-auto max-w-screen-lg">
            <div className="mb-4">
                <h2 className="text-2xl font-bold mb-2">Note:</h2>
                <ul className="list-disc list-inside text-sm">
                    <li className="text-red-600">Termite control charges for 1 Bedroom, 1 Living Room, 1 Kitchen and 1 Washroom will be Rs 1200, Rs 2200, Rs 2200, and Rs 1200 respectively.</li>
                    <li className="text-red-600">Commercial pest control charges will be Rs. 1.75/sq. ft. (minimum serviceable area: 800 sq. ft)</li>
                    <li>Price of pest control services for any types of services may vary depending upon a lot of factors.</li>
                    <li>Final price quote will be given only after a home inspection.</li>
                    <li>Let professionals deal with pest control at Home inspection so that they can give you the exact pricing for their services.</li>
                </ul>
            </div>
            <div>
                <h1 className="text-xl font-bold mb-4 mt-4">Get the Best Pest Control in {locationFormatted} at Cheaper Rates</h1>
                <div className="flex flex-col md:flex-row">
                    <img src={Photo} alt="Pest control" className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0 md:mr-4" />
                    <div className="text-sm">
                        <p className="mb-2">
                            The service of pest control in {locationFormatted}, Pune is available to hire at cheaper rates. If you are
                            searching for pest control in {locationFormatted}, Pune then your search ends here at GPC. We are partnered
                            with top pest control companies in {locationFormatted}. Expert pest control technicians will inspect your
                            premise and help you in exterminating any types of pests and bugs from your home or office. You will get
                            the best quality pest control services at cheaper rates.
                        </p>
                        <p className="mb-2">
                            When it comes to hiring pest control services in {locationFormatted}, many people fail to hire the right
                            one. They don’t do research. They don’t verify the background, reputation, and experience of pest
                            control companies or technicians. They just rely on the first company or individual they find through
                            the search. As a result, they do not get the best quality pest control service provider in {locationFormatted} and
                            hire services at higher rates.
                        </p>
                        <p className="mb-2">
                            But you should not be the same. You must hire the best pest control service provider in {locationFormatted} so that you can get the quality pest and bugs removal services at cheaper rates. Keep in mind, only a legitimate service provider will give you safe and hassle-free execution of pest control at your home or office. So, research first then hire pest control service in {locationFormatted}, Maharashtra.
                        </p>
                    </div>
                </div>
                <p className="mb-2 text-sm">
                    You might face difficulties in hiring the required pest control services in {locationFormatted}, Maharashtra. But you don’t need to worry at all. Now you can hire the quality and reliable pest management services in {locationFormatted} at cheaper prices in a few minutes. Only you need to log on to the portal of Getpestcontrol.in aka GPC.
                </p>
                <p className="mb-2 text-sm">
                    We at GPC are partnered with the best companies of pest control service providers in {locationFormatted}, Maharashtra. Our partner companies include both residential pest control in {locationFormatted} and commercial pest control service in {locationFormatted}. They are providing both types of pest control treatment solutions – chemical based pest control and eco-friendly, organic & herbal pest control in {locationFormatted}.
                </p>
                <p className="mb-2 text-sm">
                    All our partner companies of pest control service providers in {locationFormatted} are licensed, registered, experienced, dependable, reputed and knowledgeable. We have thoroughly verified the background, market reputation, experience and other credentials of pest control companies of {locationFormatted} before making associations with them. So, you don’t need to worry at all if you hire one of our partner companies of pest control in {locationFormatted}, Maharashtra.
                </p>
                <p className="mb-2 text-sm">
                    Whether you need to hire the residential pest control services or commercial pest control services in {locationFormatted}, we will never disappoint you. We will provide you the best guidance and total support in hiring the best and dependable pest control professional in {locationFormatted}, Maharashtra. In addition, we can also provide you odor-free pest control solution, eco-friendly pest treatment, and 100% organic & herbal pest control solutions in Pune.
                </p>
                <p className="mb-2 text-sm">
                    Apart from pest control services, we are also providing some value added services. You can hire home cleaning service, office cleaning service, kitchen cleaning service, office disinfecting service, home sanitization service, etc.
                </p>
                <p className="mb-2 text-sm">So, if you truly need to hire the best pest control in {locationFormatted} Pune then let us know. We will help you hire the best quality pest control and pest extermination services in {locationFormatted} at cheaper rates. We will provide quotes from multiple vendors so that you can compare the pest control charges and hire the desired services at cheaper rates.
                </p>
            </div>
        </div>
    );
}

export default Note;
