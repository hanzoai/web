import type DetailsBlock from '@/blocks/def/details'
import type { Block, ScreenfulBlock } from '@hanzo/ui/blocks'
import HanzoLogo from 'node_modules/@hanzo/brand/components/icons/hanzo-logo'
import Product from './svg/product'
import Resources from './svg/resources'
import Solutions from './svg/solutions'

export default {
  blockType: 'details',
  pretitle: ["HYPER SCALE YOUR BRAND WITH HANZO AI", "DEPLOY SOPHISTICATED AI CAMPAIGNS", "IMPRESSIVE ROI AND PRODUCT MARKET FIT"],
  title: ["Product", "Solutions", "Resources"],
  subtitle: ["Scale Intelligently with Hanzo's all-in-one accelerator.", "Accelerate your growth with industry-leading performance & AI.", "Outperform with Data-Driven Campaigns."],
  explain1: [
    "With over a decade of experience and backed by Techstars, Hanzo has a proven track record of transforming modern business complexities into streamlined success stories.",
    "Our team of experts develops innovative strategies, helping clients maximize their online presence and achieve remarkable conversions.",
    "With over a decade of priceless e-commerce conversion data across every industry, Hanzo gives companies lazer focus and drives industry leading return on ad spend.",
  ],
  explain2: [
    "Take care of all your marketing needs and scale your business with our cutting-edge technology.",
    "We'll transform your company's sales and outreach with sophisticated campaigns, modern social media strategies, and simplified blockchain-based payment solutions.",
    "Be ready to deliver when Hanzo generates a surge in orders. Some of our clients must scale their sales operations due to order overflow!"
  ],
  buttonName: ["RESCOURCES", "OUR SERVICE", "DATA DRIVEN SOLUTIONS"],
  buttonLink: ["https://docs.hanzo.ai"],
  image: [<Product />, <Solutions />, <Resources/>]
} satisfies DetailsBlock as Block
