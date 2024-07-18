import type { CaseStudyType } from "@/types/case-study"

const wolf: CaseStudyType = {
    id: 0,
    title: '100% Wolf',
    title_description: 'Maximizing TVOD Release ROI',
    description: 'Drive sales for the TVOD release of 100% Wolf',
    full_description: [
        'We used AI for precise audience targeting, reducing marketing costs, and developed tailored content and video for digital platforms. Targeted email campaigns engaged existing customers.',
        'We generated over $1M in sales from less than $30,000 ad spend, with 38% from non-traditional audiences. User engagement increased by 20%, positioning 100% Wolf as a top family entertainment choice.'
    ],
    overview_image: '/assets/hanzo-site-animation/block0/20.png',
    individual_image: '/assets/innovation/conference.png',
    strategy: [
        'Executed a cost-effective advertising campaign targeting unique audience subsets.',
        'Leveraged AI to build precise audience profiles and reduce marketing costs.',
        'Developed tailored creative content for various digital platforms.',
        'Ran targeted email marketing campaigns to engage existing customer bases.',
        'Created high-impact video content to increase engagement and reach.',
    ],
    result: [
        'Generated over $1M in sales on less than $30,000 ad spend.',
        'Identified non-traditional audience subsets that accounted for 38% of direct sales.',
        'Enhanced audience engagement and reduced overall marketing costs for future releases.',
        'Achieved a 20% increase in user engagement across digital platforms.',
        'Successfully positioned 100% Wolf as a leading family entertainment choice during the holiday season.'
    ],
    next: 1,
    reverse: false
}
export {
    wolf as default,
}