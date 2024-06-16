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
  subtitle: ["Scale Intelligently, with Hanzo's all in once accelerator.", "Accelerate your growth with industry leading performance & AI.", "Out-perform with Data-Driven Campaigns."],
  explain1: [
    "With over a decade of expereience and backend by techstars, Hazno has a proven track record of transforming the complexcities of mordern business in to streamlined success stories.",
    "Our team of experts develop innovative strategies, helping clients maximize their online presence and achieve remarkable conversions.",
    "By working with companies in nearly every industry, Hanzo has accumulated data on over 1 billion customers worldwide."],
  explain2: [
    "Take care of all your marketing needs and scale your business with our cuting-edge technology",
    "We'll transform your companies sales and outreach ot sophisticated campaigns, modern soical media strategies and simplified blockchain-based payments solutions.",
    "Be ready to deliver, when Hanzo generates a surge in orders, some of our clients must sales from order overflow!"],
  buttonName: ["RESCOURCES", "OUR SERVICE", "DATA DRIVEN SOLUTIONS"],
  buttonLink: ["#"],
  image: [<Product />, <Solutions />, <Resources/>]
} satisfies DetailsBlock as Block