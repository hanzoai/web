import type { CaseStudyType } from "@/types/case-study"
import casper from './casper'

const bellabeat: CaseStudyType = {
    id: 1,
    title: 'Bellabeat Leaf',
    title_description: 'Transforming Health and Wellness',
    description: "Launch Bellabeat's LEAF product and acquire the first 250,000 users",
    full_description: [
        'Optimized landing pages, executed targeted email campaigns, leveraged AI for personalized ads, developed content strategies, and used influencers for credibility and reach.',
        'Bellabeat achieved 250,000 sign-ups and sold 60,000 LEAF devices, tripling traffic and achieving a 5% email campaign conversion rate, solidifying LEAF as a top health device.'
    ],
    overview_image: '/assets/hanzo-site-animation/block1/20.png',
    individual_image: '/assets/innovation/conference.png',
    strategy: [
        'Designed and optimized landing pages for maximum conversion.',
        'Executed targeted email marketing campaigns to health and wellness enthusiasts.',
        "Leveraged Hanzo's AI engine for personalized advertising across social media platforms.",
        'Developed content marketing strategies to build brand awareness and engagement.',
        'Utilized influencer partnerships to drive product credibility and reach.',
    ],
    result: [
        'Achieved 250,000 sign-ups within the first year.',
        'Sold 60,000 LEAF devices, driving significant revenue growth.',
        'Increased website traffic by 150% within six months of launch.',
        'Achieved a conversion rate of 5% from email marketing campaigns.',
        'Positioned Bellabeat LEAF as a leading health and wellness device in the market.',
    ],
    next: 2,
    reverse: true
}
export {
    bellabeat as default,
}