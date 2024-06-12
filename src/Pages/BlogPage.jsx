// BlogPage.js

import React from "react";
import { useParams } from "react-router-dom";
import TermitePhoto from "../assets/Termite/TermitePhoto.webp";
import TermitePhoto2 from "../assets/Termite/TermitePhoto2.webp";

const BlogPage = () => {
    // Access the dynamic route parameter (blog ID)
    const { id } = useParams();

    // Simulated blog data (replace with actual data fetched from a data source)
    const blogs = [
        {
            id: 1,
            title: "HOW TO GET RID OF FORMOSAN TERMITES ?",
            content: `
Formosan termites, infamous for their destructive capabilities, pose a serious threat to properties, particularly in the warm and humid climates of Columbia and Charleston, South Carolina, and surrounding areas. These voracious insects can quickly devastate wooden structures, leading to costly repairs if left unchecked. However, with the expertise of Ledford’s Termite & Pest Control, residents can effectively combat these pests and protect their homes.

### Understanding Formosan Termites
Formosan termites (Coptotermes formosanus) are a type of subterranean termite known for their large colonies and aggressive behavior. A single colony can contain millions of termites and extend up to 300 feet in the ground. These termites build extensive underground tunnels, making them challenging to detect and eliminate.

### Signs of Infestation
Before you start treatment, confirm the presence of Formosan termites by looking for these signs:
- **Mud Tubes:** Pencil-sized tubes made of soil and saliva, used for travel between the nest and food sources.
- **Swarmers:** Winged termites that emerge in large numbers, especially in the spring.
- **Damaged Wood:** Wood that sounds hollow when tapped and exhibits a honeycomb pattern inside.
- **Frass:** Tiny, pellet-shaped droppings found near infested wood.

### Steps to Eliminate Formosan Termites
1. **Professional Inspection:** Engage a licensed pest control professional to conduct a thorough inspection of your property. They can accurately identify the extent of the infestation and recommend the best treatment options.

2. **Soil Treatments:** Apply liquid termiticides to the soil around your home. This creates a chemical barrier that kills termites upon contact. Popular termiticides include fipronil and imidacloprid.

3. **Bait Stations:** Install bait stations around your property. These contain a slow-acting poison that worker termites carry back to the colony, eventually killing the queen and the entire colony.

4. **Wood Treatments:** Treat infested wood with borate solutions. Borates are toxic to termites and can help eliminate existing colonies while preventing future infestations.

5. **Fumigation:** For severe infestations, consider fumigation. This involves sealing the structure and filling it with a gas that kills termites. Fumigation is highly effective but requires you to vacate the premises for a few days.

6. **Moisture Control:** Formosan termites thrive in moist environments. Fix any leaks in your home, ensure proper drainage, and use dehumidifiers in damp areas to make your home less attractive to termites.

### Preventive Measures
1. **Regular Inspections:** Schedule annual inspections with a pest control professional to catch any signs of termite activity early.

2. **Reduce Wood Contact:** Keep firewood, lumber, and other wooden materials away from your home’s foundation. Use concrete or metal barriers where wood meets the soil.

3. **Seal Cracks:** Seal cracks and crevices in your home’s foundation and walls to prevent termites from entering.

4. **Landscape Management:** Maintain a gap between soil and wooden structures. Avoid planting trees and shrubs too close to your home, as their roots can create pathways for termites.

### Conclusion
Dealing with Formosan termites requires a multi-faceted approach that includes professional intervention, chemical treatments, and ongoing prevention measures. By understanding their behavior and implementing these strategies, you can protect your property from the destructive impact of these persistent pests. Regular maintenance and vigilance are key to keeping your home termite-free.
            `,
            image: TermitePhoto,
        },
        {
            id: 2,
            title: "WHEN SHOULD I TREAT MY HOUSE FOR TERMITES ?",
            content: `
Termites are often called the “silent destroyers” because of their ability to chew through wood, flooring, and even wallpaper undetected. Each year, termites cause more than $5 billion in property damage in the United States alone – damage not covered by most homeowners’ insurance plans. This alarming statistic underlines the importance of being proactive in termite treatment and control. Homeowners commonly ask, “When should I treat my house for termites?” Here are some key insights and advice to help you decide.

### Understanding Termite Behavior
Termites live in large colonies and can remain hidden for years while causing significant damage. They feed on cellulose, the main component of wood, making your home an ideal target. Understanding their behavior is crucial in determining when and how to treat your home.

### Ideal Times for Termite Treatment
1. **During Construction:** The best time to prevent a termite infestation is during the construction phase. Pre-treating the soil and wood used in the construction can create a protective barrier against termites.

2. **Spring and Summer:** Termites are most active during the warmer months. Spring and summer are prime times for termite swarming, which is when reproductive termites leave the nest to start new colonies. Treating your home during these seasons can be particularly effective.

3. **Signs of Infestation:** If you notice any signs of termite activity, such as mud tubes, damaged wood, or frass, it’s crucial to treat your home immediately, regardless of the time of year.

### Professional Termite Treatment Methods
1. **Soil Treatment:** Applying termiticides to the soil around your home creates a chemical barrier that prevents termites from entering.

2. **Bait Stations:** Bait stations are placed around your property to attract termites. These stations contain a slow-acting poison that the termites carry back to their colony, eventually eliminating it.

3. **Wood Treatment:** Applying borate solutions to wood can help protect against termite damage. Borates are toxic to termites and can be used on both new and existing structures.

4. **Fumigation:** For severe infestations, fumigation might be necessary. This involves sealing your home and filling it with a gas that kills termites. It’s a highly effective method but requires you to vacate your home for a few days.

### Preventive Measures
1. **Regular Inspections:** Schedule regular termite inspections, at least once a year, to catch infestations early.

2. **Reduce Moisture:** Termites thrive in moist environments. Ensure your home is well-ventilated, fix leaks promptly, and use dehumidifiers in damp areas.

3. **Proper Maintenance:** Keep wood and debris away from your home’s foundation. Ensure that wooden parts of your home are not in direct contact with soil.

4. **Seal Entry Points:** Seal cracks and crevices in your home’s foundation and walls to prevent termites from entering.

### Conclusion
Proactive termite treatment and regular maintenance are key to protecting your home from these destructive pests. By understanding when to treat your home and implementing preventive measures, you can safeguard your property and avoid costly repairs. Partnering with a professional pest control service ensures that your home remains termite-free and secure.
            `,
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
        <div className="flex justify-center items-center h-full py-8">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">{blog.title}</h1>
                    <img src={blog.image} alt="Termite Blog" className="mx-auto mb-6 rounded-lg w-full object-cover" />
                    <div className="text-gray-800 text-base leading-relaxed">
                        {blog.content.split('\n').map((paragraph, index) => (
                            <p key={index} className="mb-4">{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
