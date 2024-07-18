import type { CaseStudyType } from "@/types/case-study"

const casper: CaseStudyType = {
    id: 2,
    title: 'Casper Blockchain',
    title_description: 'Empowering Blockchain Innovation',
    description: "Launch Casper blockchain, scale, orchestrate, establish compliant developer DAO.",
    full_description: [
        'Developed Casper blockchain, orchestrated node deployment, scaled hosting platform, established DEVxDAO, and led marketing campaigns.',
        'Casper Labs: $1.34B market cap, scalable blockchain with developer DAO, tripled developer participation in 6 months.'
    ],
    overview_image: '/assets/hanzo-site-animation/block2/30.png',
    individual_image: '/assets/innovation/conference.png',
    strategy: [
        'Designed and developed the Casper blockchain, focusing on scalability, security, and efficiency.',
        'Built orchestration software to streamline the deployment and management of blockchain nodes.',
        'Launched and scaled a robust platform for hosting and managing Casper nodes.',
        'Spearheaded the development of the DEVxDAO, ensuring compliance with Swiss association law.',
        'Executed targeted marketing and PR campaigns to build community and investor interest.',
    ],
    result: [
        'Casper Labs reached an all-time-high market cap of $1.34 billion.',
        'Deployed a scalable and secure blockchain platform, capable of handling high transaction volumes and complex smart contracts.',
        'Established a pioneering DAO for developers, providing a regulatory-compliant framework for decentralized governance and funding.',
        'Built a vibrant and engaged community of developers, validators, and users, driving widespread adoption of the Casper network.',
        'Achieved a 300% increase in developer participation within the first six months.',
    ],
    next: 3,
    reverse: false
}
export {
    casper as default,
}