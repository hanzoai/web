import type { CaseStudyType } from "@/types/case-study"

const damon: CaseStudyType = {
    id: 3,
    title: 'DAMON MOTORS',
    title_description: 'A Revolutionary Launch',
    description: "Launch Damon Motors and achieve significant sales growth.",
    full_description: [
        "Executed marketing strategy for Damon motorcycles: optimized pages, targeted email, dynamic ads, AI personalization, CES launches, impactful videos.",
        "Damon Motors: $8.4M sales, 541:1 ROAS, CES wins '20/'22, $100M+ total, 200% traffic increase, e-motorcycle leader.",
    ],
    overview_image: '/assets/hanzo-site-animation/block2/30.png',
    individual_image: '/assets/innovation/conference.png',
    strategy: [
        "Designed and optimized landing pages for maximum conversion.",
        "Executed targeted email marketing and dynamic advertising campaigns.",
        "Leveraged Hanzo's AI engine for personalized and event-driven ads.",
        "Organized launch events at CES 2020 and 2022 to build hype and engagement.",
        "Developed high-impact video content showcasing the unique features of Damon motorcycles.",
    ],
    result: [
        "Generated $8.4M in sales within the first month.",
        "Achieved a return on ad spend (ROAS) of 541:1.",
        "Won CES 2020 and 2022, contributing to over $100M in sales.",
        "Increased website traffic by 200% during the launch period.",
        "Established Damon Motors as a leader in the electric motorcycle industry.",
    ],
    next: 4,
    reverse: true
}
export {
    damon as default,
}