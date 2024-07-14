import Butler from './icons/butler'
import ChaufferServices from './icons/chauffer-services'
import Promoters from './icons/chauffer-services copy 2'
import FoodAndDining from './icons/food-and-dining'
import LuxQuests from './icons/lux-quests'
import Mindfulness from './icons/mindfulness'
import PrivateChef from './icons/private-chef'
import PrivateJets from './icons/private-jets'
import SecurityDetail from './icons/security-detail'
import VIPExperiences from './icons/vip-experiences'
import Wellness from './icons/wellness'
import YachtCharter from './icons/yacht-charter'

const benefits = [
  {
    id: 'food-and-dining',
    img: {
      src: '/assets/content/card-benefits/food-dining-560x299.png',
      dim: {w: 560, h: 299},
      alt: 'Food and Dining'
    },
    icon: <FoodAndDining width={24} height={24}/>,
    title: 'Food and Dining',
    description: 'Wine and Dine in style. Get 4x points when you use your Lux Gold Card to pay for meals, restaurants, delivery apps, and any other edible drinkable delicacies unlimitedly! You can even earn off our exclusive venues and 5 star restaurants.'
  },
  {
    id: 'private-jets',
    img: {
      src: '/assets/content/card-benefits/private-jets-560x295.png',
      dim: {w: 560, h: 295},
      alt: 'Private Jets'
    },
    icon: <PrivateJets width={24} height={24}/>,
    title: 'Private Jets',
    description: 'The Lux Elite Card gives you access to the most stylish and comfortable ways to travel. Our network has access to the best private jets available to charter you around the world with the most competitive pricing. Available individually or for 5-20 persons.'
  },
  {
    id: 'chauffer-services',
    img: {
      src: '/assets/content/card-benefits/chauffer-services-509x272.png',
      dim: {w: 509, h: 272},
      alt: 'Chauffer Services'
    },
    icon: <ChaufferServices width={24} height={24}/>,
    title: 'Chauffer Services',
    description: 'Travel around every city in unmatched comfort and convenience with Lux Chauffeur Services. Relax in luxurious cars featuring state-of-the-art sound systems, and high speed internet while our drivers ensure a smooth and enjoyable journey.'
  },
  {
    id: 'yacht-charter',
    img: {
      src: '/assets/content/card-benefits/yacht-charter-540x289.png',
      dim: {w: 540, h: 289},
      alt: 'Yacht Charter'
    },
    icon: <YachtCharter width={24} height={24}/>,
    title: 'Yacht Charter',
    description: 'Sail in luxury. Create memorable moments with friends and family with Lux yacht charters, and boat rentals. Experience exquisite cuisine, professional staff and earn rewards. Experience sea excursions and marine wild life like never before.'
  },
  {
    id: 'vip-experiences-and-events',
    img: {
      src: '/assets/content/card-benefits/vip-experiences-560x300.png',
      dim: {w: 560, h: 300},
      alt: 'VIP Experiences & Events'
    },
    icon: <VIPExperiences width={24} height={24}/>,
    title: 'VIP Experiences & Events',
    description: 'Meticulously tailored experiences from blockchain & finance summits to private cultural soirees, each event is a door to new worlds. Join an elite circle with access to sold-out events, exclusive gatherings, and transformative experiences.'
  },
  {
    id: 'security-detail',
    img: {
      src: '/assets/content/card-benefits/security-detail-560x300.png',
      dim: {w: 560, h: 300},
      alt: 'Security Detail'
    },
    icon: <SecurityDetail width={24} height={24}/>,
    title: 'Security Detail',
    description: 'Lux transforms security into luxury. With experts from U.S. special ops and elite law enforcement, cardholders access a fortress of safety for personal, corporate, or private interests. Security detail tailored for peace of mind in every corner of the globe.'
  },
  {
    id: 'butler-and-24-7-concierge',
    img: {
      src: '/assets/content/card-benefits/butler-300x161.png',
      dim: {w: 300, h: 161},
      alt: 'Butler & 24/7 Concierge'
    },
    icon: <Butler width={24} height={24}/>,
    title: 'Butler & 24/7 Concierge',
    description: 'The Lux Elite Card gives you access to the most stylish and comfortable ways to travel. Our network has access to the best private jets available to charter you around the world with the most competitive pricing. Available individually or for 5 - 20 persons.'
  },
  {
    id: 'private-chefs-and-sommeliers',
    img: {
      src: '/assets/content/card-benefits/private-chefs-560x300.png',
      dim: {w: 560, h: 300},
      alt: 'Private Chefs and Sommeliers'
    },
    icon: <PrivateChef width={24} height={24}/>,
    title: 'Private Chefs and Sommeliers',
    description: 'Wine and Dine in style. Get 4x points when you use your Lux Gold Card to pay for meals, restaurants, delivery apps, and any other edible drinkable delicacies unlimitedly! You can even earn off our exclusive sommeliers and private chefs.'
  },
  {
    id: 'wellness',
    img: {
      src: '/assets/content/card-benefits/wellness-465x249.png',
      dim: {w: 465, h: 249},
      alt: 'Wellness'
    },
    icon: <Wellness width={24} height={24}/>,
    title: 'Wellness',
    description: 'A holistic approach to wellbeing with personalized, exclusive care and top-of-the-line treatments. Blends mental, physical, and emotional health through private retreats, tailored fitness programs, nutrition counseling, and spa treatments.'
  },
  {
    id: 'lux-quests-and-retreats',
    img: {
      src: '/assets/content/card-benefits/lux-quests-560x300.png',
      dim: {w: 560, h: 300},
      alt: 'Lux Quests and Retreats'
    },
    icon: <LuxQuests width={24} height={24}/>,
    title: 'Lux Quests and Retreats',
    description: 'Your gateway to connection. Every month you can embark on a journey, be it solo, or in a group. From educational summits to private cultural soirees, & couples experiences. Lux promises meticulous curation to open doors to new frontiers.'
  },
  {
    id: 'mindfulness',
    img: {
      src: '/assets/content/card-benefits/mindfulness-560x300.png',
      dim: {w: 560, h: 300},
      alt: 'Mindfulness'
    },
    icon: <Mindfulness width={24} height={24}/>,
    title: 'Mindfulness',
    description: 'Experience mindfulness elevation through silent retreats, private sessions with spiritual healers, sound baths, workshops, mediation and VR. Access to journeys for self improvement by balancing mind & body merging ancient practices in lavish locales.'
  },
  {
    id: 'promoters-and-organizers',
    img: {
      src: '/assets/content/card-benefits/promoters-560x300.png',
      dim: {w: 560, h: 300},
      alt: 'Promoters & Organizers'
    },
    icon: <Promoters width={24} height={24}/>,
    title: 'Promoters & Organizers',
    description: 'Partnering with top promoters and organizers globally, Lux can craft exclusive gatherings featuring world class entertainment, stunning venues, and a vibrant beautiful people as per your requirements and budget constraints.'
  }
]

export {
  benefits as default
}