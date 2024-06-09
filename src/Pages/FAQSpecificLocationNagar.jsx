import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Collapse } from '@mui/material';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';



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

const faqData = {
    'Aundh-pune': {
        title: 'FAQ – Pest Control in Aundh, Pune',
        faqs: [
            {
                question: 'Q. Why I need to hire pest control for my residential and commercial area in Pune?',
                answer: 'Professional exterminators have the right products along with required skills and experience to kill and eliminate bugs from your place. Also, they ensure that the bugs will not be able to come back to your house. If you don’t want to see pests around you then you should hire pest control company in Pune.'
            },
            {
                question: 'Q. Do the exterminators in Pune use pet and kid friendly pest solution?',
                answer: 'An experienced and professional pest control service provider in Pune use only tested and govt. approved pesticides and chemicals...'
            },
            {
                question: "Q. How long does it take pest control to work?",
                answer: "The exact timeframe of pest control working depends on the type of the pests the exterminators are dealing with and also the method they are using. But, you can see some noticeable reduction in pest’s activities in one to two days."
            },
            {
                question: "Q. How much does pest control charges in Pune?",
                answer: "Pest control service charges in Pune vary from case to case. How severe the problem is, what type of pests the exterminators have to deal with, and the size of the area needs to be treated are the common things considered by the pest control companies in Pune to determine the pest control charges. Usually, it cost from Rs 800 – Rs 2000, but the charges are different for termite control and bedbug control as they need more than 2 treatment sessions."
            },
            {
                question: "Q. What type of pest control services are offered by the pest control company in Pune?",
                answer: "Termite control, mosquito control, ants control, rodent control, cockroach control, carpet beetle control, bedbug control, flies control, wasps control, etc. are the common type of pest control services offered by pest control companies in Pune. And for this they use different types of pest control methods such as integrated pest control service, chemical pest control service, herbal pest control, etc."
            },
            {
                question: "Q. Should I leave my house before or after the pest control procedure?",
                answer: "The professional exterminators advise to leave your house at both the times before and after the pest control procedure. Thought they use tested and govt. approved pesticides proven for household use, but it cannot be denied that these are manufactured to kill pests and are toxic. So, you will have to take major precautions while the exterminators are using it."
            },
            {
                question: "Q. What are the benefits of hiring pest control professionals in Pune?",
                answer: "The main advantage of availing pest control service in Pune is the reduced chance of getting health related issues. You will get a healthier and pest-free environment, which will eventually provide you better sleep."
            }
        ]
    },
    'hinjewadi-pune': {
        title: 'FAQ – Pest Control in Hinjewadi, Pune',
        faqs: [
            {
                question: "Q. Why I need to hire pest control for my residential and commercial area in Pune?",
                answer: "Professional exterminators have the right products along with required skills and experience to kill and eliminate bugs from your place. Also they ensure that the bugs will not be able to retune back to your house. If you don’t want to see pests around you then you should hire pest control company in Pune."
            },
            {
                question: "Q. Do the exterminators in Pune use pet and kid friendly pest solution?",
                answer: "An experienced and professional pest control service provider in Pune use only tested and govt. approved pesticides and chemicals. The products they use are proven for household use and can also be used in sensitive areas like schools and hospitals. Also they take necessary precautions during the pest control procedure so that it won’t harm your kids and pets."
            },
            {
                question: "Q. How long does it take pest control to work?",
                answer: "The exact timeframe of pest control working depends on the type of the pests the exterminators are dealing with and also the method they are using. But, you can see some noticeable reduction in pest’s activities in one to two days."
            },
            {
                question: "Q. How much does pest control charges in Pune?",
                answer: "Pest control service charges in Pune vary from case to case. How severe the problem is, what type of pests the exterminators have to deal with, and the size of the area needs to be treated are the common things considered by the pest control companies in Pune to determine the pest control charges. Usually, it cost from Rs 800 – Rs 2000, but the charges are different for termite control and bedbug control as they need more than 2 treatment sessions."
            },
            {
                question: "Q. What type of pest control services are offered by the pest control company in Pune?",
                answer: "Termite control, mosquito control, ants control, rodent control, cockroach control, carpet beetle control, bedbug control, flies control, wasps control, etc. are the common type of pest control services offered by pest control companies in Pune. And for this they use different types of pest control methods such as integrated pest control service, chemical pest control service, herbal pest control, etc."
            },
            {
                question: "Q. Should I leave my house before or after the pest control procedure?",
                answer: "The professional exterminators advise to leave your house at both the times before and after the pest control procedure. Thought they use tested and govt. approved pesticides proven for household use, but it cannot be denied that these are manufactured to kill pests and are toxic. So, you will have to take major precautions while the exterminators are using it."
            },
            {
                question: "Q. What are the benefits of hiring pest control professionals in Pune?",
                answer: "The main advantage of availing pest control service in Pune is the reduced chance of getting health related issues. You will get a healthier and pest-free environment which will eventually provide you better sleep."
            }
        ]
    },
    'wakad-pune': {
        title: 'FAQ – Pest Control in Wakad, Pune',
        faqs: [
            {
                question: "Q. Why I need to hire pest control for my residential and commercial area in Pune?",
                answer: "Professional exterminators have the right products along with required skills and experience to kill and eliminate bugs from your place. Also they ensure that the bugs will not be able to retune back to your house. If you don’t want to see pests around you then you should hire pest control company in Pune."
            },
            {
                question: "Q. Do the exterminators in Pune use pet and kid friendly pest solution?",
                answer: "An experienced and professional pest control service provider in Pune use only tested and govt. approved pesticides and chemicals. The products they use are proven for household use and can also be used in sensitive areas like schools and hospitals. Also they take necessary precautions during the pest control procedure so that it won’t harm your kids and pets."
            },
            {
                question: "Q. How long does it take pest control to work?",
                answer: "The exact timeframe of pest control working depends on the type of the pests the exterminators are dealing with and also the method they are using. But, you can see some noticeable reduction in pest’s activities in one to two days."
            },
            {
                question: "Q. How much does pest control charges in Pune?",
                answer: "Pest control service charges in Pune vary from case to case. How severe the problem is, what type of pests the exterminators have to deal with, and the size of the area needs to be treated are the common things considered by the pest control companies in Pune to determine the pest control charges. Usually, it cost from Rs 800 – Rs 2000, but the charges are different for termite control and bedbug control as they need more than 2 treatment sessions."
            },
            {
                question: "Q. What type of pest control services are offered by the pest control company in Pune?",
                answer: "Termite control, mosquito control, ants control, rodent control, cockroach control, carpet beetle control, bedbug control, flies control, wasps control, etc. are the common type of pest control services offered by pest control companies in Pune. And for this they use different types of pest control methods such as integrated pest control service, chemical pest control service, herbal pest control, etc."
            },
            {
                question: "Q. Should I leave my house before or after the pest control procedure?",
                answer: "The professional exterminators advise to leave your house at both the times before and after the pest control procedure. Thought they use tested and govt. approved pesticides proven for household use, but it cannot be denied that these are manufactured to kill pests and are toxic. So, you will have to take major precautions while the exterminators are using it."
            },
            {
                question: "Q. What are the benefits of hiring pest control professionals in Pune?",
                answer: "The main advantage of availing pest control service in Pune is the reduced chance of getting health related issues. You will get a healthier and pest-free environment which will eventually provide you better sleep."
            }
        ]
    },
    'hadapsar-pune': {
        title: 'FAQ – Pest Control in Hadapsar, Pune',
        faqs: [
            {
                question: "Q. Why I need to hire pest control for my residential and commercial area in Pune?",
                answer: "Professional exterminators have the right products along with required skills and experience to kill and eliminate bugs from your place. Also they ensure that the bugs will not be able to retune back to your house. If you don’t want to see pests around you then you should hire pest control company in Pune."
            },
            {
                question: "Q. Do the exterminators in Pune use pet and kid friendly pest solution?",
                answer: "An experienced and professional pest control service provider in Pune use only tested and govt. approved pesticides and chemicals. The products they use are proven for household use and can also be used in sensitive areas like schools and hospitals. Also they take necessary precautions during the pest control procedure so that it won’t harm your kids and pets."
            },
            {
                question: "Q. How long does it take pest control to work?",
                answer: "The exact timeframe of pest control working depends on the type of the pests the exterminators are dealing with and also the method they are using. But, you can see some noticeable reduction in pest’s activities in one to two days."
            },
            {
                question: "Q. How much does pest control charges in Pune?",
                answer: "Pest control service charges in Pune vary from case to case. How severe the problem is, what type of pests the exterminators have to deal with, and the size of the area needs to be treated are the common things considered by the pest control companies in Pune to determine the pest control charges. Usually, it cost from Rs 800 – Rs 2000, but the charges are different for termite control and bedbug control as they need more than 2 treatment sessions."
            },
            {
                question: "Q. What type of pest control services are offered by the pest control company in Pune?",
                answer: "Termite control, mosquito control, ants control, rodent control, cockroach control, carpet beetle control, bedbug control, flies control, wasps control, etc. are the common type of pest control services offered by pest control companies in Pune. And for this they use different types of pest control methods such as integrated pest control service, chemical pest control service, herbal pest control, etc."
            },
            {
                question: "Q. Should I leave my house before or after the pest control procedure?",
                answer: "The professional exterminators advise to leave your house at both the times before and after the pest control procedure. Thought they use tested and govt. approved pesticides proven for household use, but it cannot be denied that these are manufactured to kill pests and are toxic. So, you will have to take major precautions while the exterminators are using it."
            },
            {
                question: "Q. What are the benefits of hiring pest control professionals in Pune?",
                answer: "The main advantage of availing pest control service in Pune is the reduced chance of getting health related issues. You will get a healthier and pest-free environment which will eventually provide you better sleep."
            }
        ]
    },
    'pimpri-chinchwad-pune': {
        title: 'FAQ – Pest Control in Pimpri-Chinchwad, Pune',
        faqs: [
            {
                question: "Q. Why I need to hire pest control for my residential and commercial area in Pune?",
                answer: "Professional exterminators have the right products along with required skills and experience to kill and eliminate bugs from your place. Also they ensure that the bugs will not be able to retune back to your house. If you don’t want to see pests around you then you should hire pest control company in Pune."
            },
            {
                question: "Q. Do the exterminators in Pune use pet and kid friendly pest solution?",
                answer: "An experienced and professional pest control service provider in Pune use only tested and govt. approved pesticides and chemicals. The products they use are proven for household use and can also be used in sensitive areas like schools and hospitals. Also they take necessary precautions during the pest control procedure so that it won’t harm your kids and pets."
            },
            {
                question: "Q. How long does it take pest control to work?",
                answer: "The exact timeframe of pest control working depends on the type of the pests the exterminators are dealing with and also the method they are using. But, you can see some noticeable reduction in pest’s activities in one to two days."
            },
            {
                question: "Q. How much does pest control charges in Pune?",
                answer: "Pest control service charges in Pune vary from case to case. How severe the problem is, what type of pests the exterminators have to deal with, and the size of the area needs to be treated are the common things considered by the pest control companies in Pune to determine the pest control charges. Usually, it cost from Rs 800 – Rs 2000, but the charges are different for termite control and bedbug control as they need more than 2 treatment sessions."
            },
            {
                question: "Q. What type of pest control services are offered by the pest control company in Pune?",
                answer: "Termite control, mosquito control, ants control, rodent control, cockroach control, carpet beetle control, bedbug control, flies control, wasps control, etc. are the common type of pest control services offered by pest control companies in Pune. And for this they use different types of pest control methods such as integrated pest control service, chemical pest control service, herbal pest control, etc."
            },
            {
                question: "Q. Should I leave my house before or after the pest control procedure?",
                answer: "The professional exterminators advise to leave your house at both the times before and after the pest control procedure. Thought they use tested and govt. approved pesticides proven for household use, but it cannot be denied that these are manufactured to kill pests and are toxic. So, you will have to take major precautions while the exterminators are using it."
            },
            {
                question: "Q. What are the benefits of hiring pest control professionals in Pune?",
                answer: "The main advantage of availing pest control service in Pune is the reduced chance of getting health related issues. You will get a healthier and pest-free environment which will eventually provide you better sleep."
            }
        ]
    },
    'bavdhan-pune': {
        title: 'FAQ – Pest Control in Bavdhan, Pune',
        faqs: [
            {
                question: "Q. Why I need to hire pest control for my residential and commercial area in Pune?",
                answer: "Professional exterminators have the right products along with required skills and experience to kill and eliminate bugs from your place. Also they ensure that the bugs will not be able to retune back to your house. If you don’t want to see pests around you then you should hire pest control company in Pune."
            },
            {
                question: "Q. Do the exterminators in Pune use pet and kid friendly pest solution?",
                answer: "An experienced and professional pest control service provider in Pune use only tested and govt. approved pesticides and chemicals. The products they use are proven for household use and can also be used in sensitive areas like schools and hospitals. Also they take necessary precautions during the pest control procedure so that it won’t harm your kids and pets."
            },
            {
                question: "Q. How long does it take pest control to work?",
                answer: "The exact timeframe of pest control working depends on the type of the pests the exterminators are dealing with and also the method they are using. But, you can see some noticeable reduction in pest’s activities in one to two days."
            },
            {
                question: "Q. How much does pest control charges in Pune?",
                answer: "Pest control service charges in Pune vary from case to case. How severe the problem is, what type of pests the exterminators have to deal with, and the size of the area needs to be treated are the common things considered by the pest control companies in Pune to determine the pest control charges. Usually, it cost from Rs 800 – Rs 2000, but the charges are different for termite control and bedbug control as they need more than 2 treatment sessions."
            },
            {
                question: "Q. What type of pest control services are offered by the pest control company in Pune?",
                answer: "Termite control, mosquito control, ants control, rodent control, cockroach control, carpet beetle control, bedbug control, flies control, wasps control, etc. are the common type of pest control services offered by pest control companies in Pune. And for this they use different types of pest control methods such as integrated pest control service, chemical pest control service, herbal pest control, etc."
            },
            {
                question: "Q. Should I leave my house before or after the pest control procedure?",
                answer: "The professional exterminators advise to leave your house at both the times before and after the pest control procedure. Thought they use tested and govt. approved pesticides proven for household use, but it cannot be denied that these are manufactured to kill pests and are toxic. So, you will have to take major precautions while the exterminators are using it."
            },
            {
                question: "Q. What are the benefits of hiring pest control professionals in Pune?",
                answer: "The main advantage of availing pest control service in Pune is the reduced chance of getting health related issues. You will get a healthier and pest-free environment which will eventually provide you better sleep."
            }
        ]
    },
    'chandan-nagar-pune': {
        title: 'FAQ – Pest Control in Chandan Nagar, Pune',
        faqs: [
            {
                question: "Q. Why I need to hire pest control for my residential and commercial area in Pune?",
                answer: "Professional exterminators have the right products along with required skills and experience to kill and eliminate bugs from your place. Also they ensure that the bugs will not be able to retune back to your house. If you don’t want to see pests around you then you should hire pest control company in Pune."
            },
            {
                question: "Q. Do the exterminators in Pune use pet and kid friendly pest solution?",
                answer: "An experienced and professional pest control service provider in Pune use only tested and govt. approved pesticides and chemicals. The products they use are proven for household use and can also be used in sensitive areas like schools and hospitals. Also they take necessary precautions during the pest control procedure so that it won’t harm your kids and pets."
            },
            {
                question: "Q. How long does it take pest control to work?",
                answer: "The exact timeframe of pest control working depends on the type of the pests the exterminators are dealing with and also the method they are using. But, you can see some noticeable reduction in pest’s activities in one to two days."
            },
            {
                question: "Q. How much does pest control charges in Pune?",
                answer: "Pest control service charges in Pune vary from case to case. How severe the problem is, what type of pests the exterminators have to deal with, and the size of the area needs to be treated are the common things considered by the pest control companies in Pune to determine the pest control charges. Usually, it cost from Rs 800 – Rs 2000, but the charges are different for termite control and bedbug control as they need more than 2 treatment sessions."
            },
            {
                question: "Q. What type of pest control services are offered by the pest control company in Pune?",
                answer: "Termite control, mosquito control, ants control, rodent control, cockroach control, carpet beetle control, bedbug control, flies control, wasps control, etc. are the common type of pest control services offered by pest control companies in Pune. And for this they use different types of pest control methods such as integrated pest control service, chemical pest control service, herbal pest control, etc."
            },
            {
                question: "Q. Should I leave my house before or after the pest control procedure?",
                answer: "The professional exterminators advise to leave your house at both the times before and after the pest control procedure. Thought they use tested and govt. approved pesticides proven for household use, but it cannot be denied that these are manufactured to kill pests and are toxic. So, you will have to take major precautions while the exterminators are using it."
            },
            {
                question: "Q. What are the benefits of hiring pest control professionals in Pune?",
                answer: "The main advantage of availing pest control service in Pune is the reduced chance of getting health related issues. You will get a healthier and pest-free environment which will eventually provide you better sleep."
            }
        ]
    },
    'boat-club-road-pune': {
        title: 'FAQ – Pest Control in Boat, Club, Pune',
        faqs: [
            {
                question: "Q. Why I need to hire pest control for my residential and commercial area in Pune?",
                answer: "Professional exterminators have the right products along with required skills and experience to kill and eliminate bugs from your place. Also they ensure that the bugs will not be able to retune back to your house. If you don’t want to see pests around you then you should hire pest control company in Pune."
            },
            {
                question: "Q. Do the exterminators in Pune use pet and kid friendly pest solution?",
                answer: "An experienced and professional pest control service provider in Pune use only tested and govt. approved pesticides and chemicals. The products they use are proven for household use and can also be used in sensitive areas like schools and hospitals. Also they take necessary precautions during the pest control procedure so that it won’t harm your kids and pets."
            },
            {
                question: "Q. How long does it take pest control to work?",
                answer: "The exact timeframe of pest control working depends on the type of the pests the exterminators are dealing with and also the method they are using. But, you can see some noticeable reduction in pest’s activities in one to two days."
            },
            {
                question: "Q. How much does pest control charges in Pune?",
                answer: "Pest control service charges in Pune vary from case to case. How severe the problem is, what type of pests the exterminators have to deal with, and the size of the area needs to be treated are the common things considered by the pest control companies in Pune to determine the pest control charges. Usually, it cost from Rs 800 – Rs 2000, but the charges are different for termite control and bedbug control as they need more than 2 treatment sessions."
            },
            {
                question: "Q. What type of pest control services are offered by the pest control company in Pune?",
                answer: "Termite control, mosquito control, ants control, rodent control, cockroach control, carpet beetle control, bedbug control, flies control, wasps control, etc. are the common type of pest control services offered by pest control companies in Pune. And for this they use different types of pest control methods such as integrated pest control service, chemical pest control service, herbal pest control, etc."
            },
            {
                question: "Q. Should I leave my house before or after the pest control procedure?",
                answer: "The professional exterminators advise to leave your house at both the times before and after the pest control procedure. Thought they use tested and govt. approved pesticides proven for household use, but it cannot be denied that these are manufactured to kill pests and are toxic. So, you will have to take major precautions while the exterminators are using it."
            },
            {
                question: "Q. What are the benefits of hiring pest control professionals in Pune?",
                answer: "The main advantage of availing pest control service in Pune is the reduced chance of getting health related issues. You will get a healthier and pest-free environment which will eventually provide you better sleep."
            }
        ]
    },
    'shivajinagar-pune': {
        title: 'FAQ – Pest Control in shivajinagar, Pune',
        faqs: [
            {
                question: "Q. Why I need to hire pest control for my residential and commercial area in Pune?",
                answer: "Professional exterminators have the right products along with required skills and experience to kill and eliminate bugs from your place. Also they ensure that the bugs will not be able to retune back to your house. If you don’t want to see pests around you then you should hire pest control company in Pune."
            },
            {
                question: "Q. Do the exterminators in Pune use pet and kid friendly pest solution?",
                answer: "An experienced and professional pest control service provider in Pune use only tested and govt. approved pesticides and chemicals. The products they use are proven for household use and can also be used in sensitive areas like schools and hospitals. Also they take necessary precautions during the pest control procedure so that it won’t harm your kids and pets."
            },
            {
                question: "Q. How long does it take pest control to work?",
                answer: "The exact timeframe of pest control working depends on the type of the pests the exterminators are dealing with and also the method they are using. But, you can see some noticeable reduction in pest’s activities in one to two days."
            },
            {
                question: "Q. How much does pest control charges in Pune?",
                answer: "Pest control service charges in Pune vary from case to case. How severe the problem is, what type of pests the exterminators have to deal with, and the size of the area needs to be treated are the common things considered by the pest control companies in Pune to determine the pest control charges. Usually, it cost from Rs 800 – Rs 2000, but the charges are different for termite control and bedbug control as they need more than 2 treatment sessions."
            },
            {
                question: "Q. What type of pest control services are offered by the pest control company in Pune?",
                answer: "Termite control, mosquito control, ants control, rodent control, cockroach control, carpet beetle control, bedbug control, flies control, wasps control, etc. are the common type of pest control services offered by pest control companies in Pune. And for this they use different types of pest control methods such as integrated pest control service, chemical pest control service, herbal pest control, etc."
            },
            {
                question: "Q. Should I leave my house before or after the pest control procedure?",
                answer: "The professional exterminators advise to leave your house at both the times before and after the pest control procedure. Thought they use tested and govt. approved pesticides proven for household use, but it cannot be denied that these are manufactured to kill pests and are toxic. So, you will have to take major precautions while the exterminators are using it."
            },
            {
                question: "Q. What are the benefits of hiring pest control professionals in Pune?",
                answer: "The main advantage of availing pest control service in Pune is the reduced chance of getting health related issues. You will get a healthier and pest-free environment which will eventually provide you better sleep."
            }
        ]
    },
    'sangvi-pune': {
        title: 'FAQ – Pest Control in Sangvi, Pune',
        faqs: [
            {
                question: "Q. Why I need to hire pest control for my residential and commercial area in Pune?",
                answer: "Professional exterminators have the right products along with required skills and experience to kill and eliminate bugs from your place. Also they ensure that the bugs will not be able to retune back to your house. If you don’t want to see pests around you then you should hire pest control company in Pune."
            },
            {
                question: "Q. Do the exterminators in Pune use pet and kid friendly pest solution?",
                answer: "An experienced and professional pest control service provider in Pune use only tested and govt. approved pesticides and chemicals. The products they use are proven for household use and can also be used in sensitive areas like schools and hospitals. Also they take necessary precautions during the pest control procedure so that it won’t harm your kids and pets."
            },
            {
                question: "Q. How long does it take pest control to work?",
                answer: "The exact timeframe of pest control working depends on the type of the pests the exterminators are dealing with and also the method they are using. But, you can see some noticeable reduction in pest’s activities in one to two days."
            },
            {
                question: "Q. How much does pest control charges in Pune?",
                answer: "Pest control service charges in Pune vary from case to case. How severe the problem is, what type of pests the exterminators have to deal with, and the size of the area needs to be treated are the common things considered by the pest control companies in Pune to determine the pest control charges. Usually, it cost from Rs 800 – Rs 2000, but the charges are different for termite control and bedbug control as they need more than 2 treatment sessions."
            },
            {
                question: "Q. What type of pest control services are offered by the pest control company in Pune?",
                answer: "Termite control, mosquito control, ants control, rodent control, cockroach control, carpet beetle control, bedbug control, flies control, wasps control, etc. are the common type of pest control services offered by pest control companies in Pune. And for this they use different types of pest control methods such as integrated pest control service, chemical pest control service, herbal pest control, etc."
            },
            {
                question: "Q. Should I leave my house before or after the pest control procedure?",
                answer: "The professional exterminators advise to leave your house at both the times before and after the pest control procedure. Thought they use tested and govt. approved pesticides proven for household use, but it cannot be denied that these are manufactured to kill pests and are toxic. So, you will have to take major precautions while the exterminators are using it."
            },
            {
                question: "Q. What are the benefits of hiring pest control professionals in Pune?",
                answer: "The main advantage of availing pest control service in Pune is the reduced chance of getting health related issues. You will get a healthier and pest-free environment which will eventually provide you better sleep."
            }
        ]
    },
    'nigdi-pune': {
        title: 'FAQ – Pest Control in Nigdi, Pune',
        faqs: [
            {
                question: "Q. Why I need to hire pest control for my residential and commercial area in Pune?",
                answer: "Professional exterminators have the right products along with required skills and experience to kill and eliminate bugs from your place. Also they ensure that the bugs will not be able to retune back to your house. If you don’t want to see pests around you then you should hire pest control company in Pune."
            },
            {
                question: "Q. Do the exterminators in Pune use pet and kid friendly pest solution?",
                answer: "An experienced and professional pest control service provider in Pune use only tested and govt. approved pesticides and chemicals. The products they use are proven for household use and can also be used in sensitive areas like schools and hospitals. Also they take necessary precautions during the pest control procedure so that it won’t harm your kids and pets."
            },
            {
                question: "Q. How long does it take pest control to work?",
                answer: "The exact timeframe of pest control working depends on the type of the pests the exterminators are dealing with and also the method they are using. But, you can see some noticeable reduction in pest’s activities in one to two days."
            },
            {
                question: "Q. How much does pest control charges in Pune?",
                answer: "Pest control service charges in Pune vary from case to case. How severe the problem is, what type of pests the exterminators have to deal with, and the size of the area needs to be treated are the common things considered by the pest control companies in Pune to determine the pest control charges. Usually, it cost from Rs 800 – Rs 2000, but the charges are different for termite control and bedbug control as they need more than 2 treatment sessions."
            },
            {
                question: "Q. What type of pest control services are offered by the pest control company in Pune?",
                answer: "Termite control, mosquito control, ants control, rodent control, cockroach control, carpet beetle control, bedbug control, flies control, wasps control, etc. are the common type of pest control services offered by pest control companies in Pune. And for this they use different types of pest control methods such as integrated pest control service, chemical pest control service, herbal pest control, etc."
            },
            {
                question: "Q. Should I leave my house before or after the pest control procedure?",
                answer: "The professional exterminators advise to leave your house at both the times before and after the pest control procedure. Thought they use tested and govt. approved pesticides proven for household use, but it cannot be denied that these are manufactured to kill pests and are toxic. So, you will have to take major precautions while the exterminators are using it."
            },
            {
                question: "Q. What are the benefits of hiring pest control professionals in Pune?",
                answer: "The main advantage of availing pest control service in Pune is the reduced chance of getting health related issues. You will get a healthier and pest-free environment which will eventually provide you better sleep."
            }
        ]
    },
    'koregaon-park-pune': {
        title: 'FAQ – Pest Control in Koregaon Park, Pune',
        faqs: [
            {
                question: "Q. Why I need to hire pest control for my residential and commercial area in Pune?",
                answer: "Professional exterminators have the right products along with required skills and experience to kill and eliminate bugs from your place. Also they ensure that the bugs will not be able to retune back to your house. If you don’t want to see pests around you then you should hire pest control company in Pune."
            },
            {
                question: "Q. Do the exterminators in Pune use pet and kid friendly pest solution?",
                answer: "An experienced and professional pest control service provider in Pune use only tested and govt. approved pesticides and chemicals. The products they use are proven for household use and can also be used in sensitive areas like schools and hospitals. Also they take necessary precautions during the pest control procedure so that it won’t harm your kids and pets."
            },
            {
                question: "Q. How long does it take pest control to work?",
                answer: "The exact timeframe of pest control working depends on the type of the pests the exterminators are dealing with and also the method they are using. But, you can see some noticeable reduction in pest’s activities in one to two days."
            },
            {
                question: "Q. How much does pest control charges in Pune?",
                answer: "Pest control service charges in Pune vary from case to case. How severe the problem is, what type of pests the exterminators have to deal with, and the size of the area needs to be treated are the common things considered by the pest control companies in Pune to determine the pest control charges. Usually, it cost from Rs 800 – Rs 2000, but the charges are different for termite control and bedbug control as they need more than 2 treatment sessions."
            },
            {
                question: "Q. What type of pest control services are offered by the pest control company in Pune?",
                answer: "Termite control, mosquito control, ants control, rodent control, cockroach control, carpet beetle control, bedbug control, flies control, wasps control, etc. are the common type of pest control services offered by pest control companies in Pune. And for this they use different types of pest control methods such as integrated pest control service, chemical pest control service, herbal pest control, etc."
            },
            {
                question: "Q. Should I leave my house before or after the pest control procedure?",
                answer: "The professional exterminators advise to leave your house at both the times before and after the pest control procedure. Thought they use tested and govt. approved pesticides proven for household use, but it cannot be denied that these are manufactured to kill pests and are toxic. So, you will have to take major precautions while the exterminators are using it."
            },
            {
                question: "Q. What are the benefits of hiring pest control professionals in Pune?",
                answer: "The main advantage of availing pest control service in Pune is the reduced chance of getting health related issues. You will get a healthier and pest-free environment which will eventually provide you better sleep."
            }
        ]
    },
}

function FAQSpecificLocationNagar() {
    const { location } = useParams();
    const faq = faqData[location];
    const [openFaqIndex, setOpenFaqIndex] = useState(null)


    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index)
    }

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center text-black mb-6 border-b-2 border-gray-300 pb-4">{faq.title}</h1>
            <div />
            {faq.faqs.map((faqItem, index) => (
                <div className="faq mb-4 border rounded-md" key={index}>
                    <div
                        className="flex justify-between items-center cursor-pointer p-4"
                        onClick={() => toggleFaq(index)}
                        style={{ borderBottom: openFaqIndex === index ? '1px solid border-gray-300' : '1px solid lightgray' }}
                    >
                        <h3 className="text-md font-bold text-[#51585f]">{faqItem.question}</h3>
                        {openFaqIndex === index ? <RemoveIcon /> : <AddIcon />}
                    </div>
                    <Collapse in={openFaqIndex === index}>
                        <div className="p-4">
                            <p className="text-[#51585f]">{faqItem.answer}</p>
                        </div>
                    </Collapse>
                </div>
            ))}
            <section>
                <h3 className='text-3xl font-bold text-black mb-6'>Local Pest Control in Pune Near Me</h3>
                <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4'>
                    {locations.map((location) => (
                        <li key={location}>
                            <Link className="text-blue-700" to={`/faq/${location}`}>
                                Pest Control in {location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                            </Link>
                        </li>
                    ))}
                </div>
            </section>
        </div>)
}

export default FAQSpecificLocationNagar