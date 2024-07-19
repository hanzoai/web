import type { CaseStudyType } from "@/types/case-study"

const arca: CaseStudyType = {
    id: 9,
    title: 'Arca',
    title_description: 'Innovating in Crypto Finance',
    description: "Launch and scale Arca's crypto hedge fund and yield-bearing stablecoin, while securing institutional investment.",
    full_description: [
        "Developed branding strategy, optimized landing pages, managed fundraising for institutional investors, built regulated tokenization platform, led as CMO/CTO for marketing, tech, operations.",
        "Arca manages significant AUM, raised funds from institutions, pioneered a regulated tokenization platform, boosted website traffic by 150%, and established leadership in crypto finance innovation.",
    ],
    overview_image: '/assets/hanzo-site-animation/block2/30.png',
    individual_image: '/assets/innovation/conference.png',
    strategy: [
        "Developed a comprehensive branding and marketing strategy.",
        "Designed and optimized landing pages to drive conversions.",
        "Created and managed a robust fundraising campaign targeting institutional investors.",
        "Built the first regulated securities tokenization platform.",
        "Acted as the original CMO and CTO, overseeing marketing, technology, and operational strategies.",
    ],
    result: [
        "Arca now manages hundreds of millions in assets under management (AUM).",
        "Successfully raised substantial funds from institutional investors.",
        "Established the first regulated securities tokenization platform, enabling the launch of a tokenized closed-end fund product.",
        "Increased website traffic by 150% during fundraising campaigns.",
        "Positioned Arca as a leading innovator in the crypto finance industry.",
    ],
    next: 10,
    reverse: true
}
export {
    arca as default,
}