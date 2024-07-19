import type { CaseStudyType } from "@/types/case-study"

const triller: CaseStudyType = {
    id: 7,
    title: 'Triller',
    title_description: 'Expanding Digital Entertainment',
    description: "Grow Triller's user base and enhance brand visibility.",
    full_description: [
        "Launched TrillerFest, utilized AI-driven ads, innovative marketing, influencer partnerships, and high-impact videos to boost engagement and user acquisition, enhancing credibility and reach through social media campaigns.",
        "Reached 169M via TrillerFest, boosting MAU from 50M to 82M and YouTube subscribers to 100K in 5 days, with 150% social media engagement growth, positioning Triller as a leading entertainment platform.",
    ],
    overview_image: '/assets/hanzo-site-animation/block2/30.png',
    individual_image: '/assets/innovation/conference.png',
    strategy: [
        "Launched TrillerFest, a digital music festival.",
        "Deployed AI-driven advertising to reach a wide audience.",
        "Focused on engagement and user acquisition through innovative marketing techniques.",
        "Leveraged influencer partnerships and social media campaigns to drive credibility and reach.",
        "Developed high-impact video content to increase engagement and user acquisition.",
    ],
    result: [
        "Reached 169M people through TrillerFest.",
        "Increased monthly active users (MAU) from 50M to over 82M.",
        "Grew YouTube subscribers from 0 to over 100,000 in 5 days.",
        "Achieved a 150% increase in social media engagement during TrillerFest.",
        "Positioned Triller as a leading digital entertainment platform.",
    ],
    next: 8,
    reverse: true
}
export {
    triller as default,
}