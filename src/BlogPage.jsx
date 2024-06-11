// BlogPage.js

import React from "react";
import { useParams } from "react-router-dom";
import TermitePhoto from "../src/assets/Termite/TermitePhoto.webp";
import TermitePhoto2 from "../src/assets/Termite/TermitePhoto2.webp";

const BlogPage = () => {
    // Access the dynamic route parameter (blog ID)
    const { id } = useParams();

    // Simulated blog data (replace with actual data fetched from a data source)
    const blogs = [
        {
            id: 1,
            title: "HOW TO GET RID OF FORMOSAN TERMITES ?",
            content: "Formosan termites, infamous for their destructive capabilities, pose a serious threat to properties, particularly in the warm and humid climates of Columbia and Charleston, South Carolina, and surrounding areas. These voracious insects can quickly devastate wooden structures, leading to costly repairs if left unchecked. However, with the expertise of Ledford’s Termite & Pest Control, residents can effectively combat these pests and protect their homes",
            image: TermitePhoto,
        },
        {
            id: 2,
            title: "WHEN SHOULD I TREAT MY HOUSE FOR TERMITES ?",
            content: "Termites are often called the “silent destroyers” because of their ability to chew through wood, flooring, and even wallpaper undetected. Each year, termites cause more than $5 billion in property damage in the United States alone – damage not covered by most homeowners’ insurance plans. This alarming statistic underlines the importance of being proactive in termite treatment and control. Homeowners commonly ask, “When should I treat my house for termites”, and how can a professional service like Ledford’s Pest Control make a difference?",
            image: TermitePhoto2,
        }
    ];

    // Find the blog post with the matching ID
    const blog = blogs.find(blog => blog.id === parseInt(id));

    // If the blog post is not found, display a message
    if (!blog) {
        return <div className="text-center">Blog post not found.</div>;
    }

    return (
        <div className="flex justify-center items-center h-full">
            <div className="container mx-auto">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold mb-4 text-center mt-4">{blog.title}</h1>
                    <img src={blog.image} alt="Termite Blog" className="mx-auto mb-4 rounded-lg" />
                    <p className="text-gray-800 text-base font-medium">{blog.content}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
