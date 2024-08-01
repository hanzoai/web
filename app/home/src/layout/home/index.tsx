'use client'

import CustomCard from '@/assets/icons/CustomCard';
import CustomChatgpt from '@/assets/icons/CustomChatgpt';
import CustomControl from '@/assets/icons/CustomControl';
import CustomLighting from '@/assets/icons/CustomLighting';
import CustomPen from '@/assets/icons/CustomPen';
import CustomRocket from '@/assets/icons/CustomRocket';
import ScrollNumBlockComponent from '@/blocks/components/scroll-num';
import type ScrollNumBlock from '@/blocks/def/scroll-num';
import type { Block } from '@hanzo/ui/blocks';
import { Button, Carousel, CarouselContent, CarouselItem, Progress } from '@hanzo/ui/primitives';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import Arca from '../components/companies/arca';
import Cove from '../components/companies/cove';
import Cover from '../components/companies/cover';
import Lux from '../components/companies/lux';
import Nasa from '../components/companies/nasa';
import Zoo from '../components/companies/zoo';
import AAAA from '../components/companies/AAAA';
import Beallabeat from '../components/companies/beallabeat';
import Casperlabs from '../components/companies/casperlabs';
import Devxdao from '../components/companies/devxdao';
import Cycliq from '../components/companies/cycliq';
import Daemon from '../components/companies/damon';
import Forstman from '../components/companies/forstman';
import Karma from '../components/companies/karma';
import Keek from '../components/companies/keek';
import Myle from '../components/companies/myle';
import Snapchat from '../components/companies/snapchat';
import Skully from '../components/companies/skully';
import Triller from '../components/companies/triller';
import Unikain from '../components/companies/unikain';
import '../../app/global.css';
import { EmblaAutoplay } from '@hanzo/brand';
import { useEffect, useRef, useState } from 'react';
import ImagePreloader from '../components/scrollingImage/ImagePreloader';
<<<<<<< HEAD
import type { ReviewCardProps } from '../components/reviewcard';
import ReviewCard from '../components/reviewcard';
=======
>>>>>>> 691d47c6 (update scroll)

const scrollNumBlocks = {
  blockType: 'scroll-num',
  aniNum: ["11", "100", "1B", "120"],
  modifier: ["years", "+", "+", "+"],
  detail: ["Growing Companies", "Companies Scaled", "Client Revenue Generated", "Countries Worldwide"]
} satisfies ScrollNumBlock as Block;

<<<<<<< HEAD
const reviews: ReviewCardProps[] = [
  {
    reviewerName: "Jennifer Patel",
    reviewerRole: "Founder & CEO",
    reviewerAvatar: "assets/content/review/01.png",
    reviewDetail: "Hanzo has helped us to streamline our complex challenges and processes. Their suite of tools has made it easier for us to launch, scale, and innovate our business."
  },
  {
    reviewerName: "Beck Smirth",
    reviewerRole: "Product Manager",
    reviewerAvatar: "assets/content/review/02.png",
    reviewDetail: "Hanzo's digital solutions have empowered us to redefine success. They have provided us with the tools we need to accelerate our growth and expand our reach."
  },
  {
    reviewerName: "Chris Jonathon",
    reviewerRole: "Investor",
    reviewerAvatar: "assets/content/review/03.png",
    reviewDetail: "We are impressed with Hanzo's pioneering approach to digital solutions. Their platform has helped us to transcend traditional boundaries and achieve new levels of success."
  },
  {
    reviewerName: "Jennifer Patel",
    reviewerRole: "Founder & CEO",
    reviewerAvatar: "assets/content/review/04.png",
    reviewDetail: "Hanzo has a clear vision for the future of business. Their platform is helping us to launch, scale, and innovate in a way that was not possible before."
  },
  {
    reviewerName: "Jennifer Patel",
    reviewerRole: "Founder & CEO",
    reviewerAvatar: "assets/content/review/01.png",
    reviewDetail: "Hanzo has helped us to streamline our complex challenges and processes. Their suite of tools has made it easier for us to launch, scale, and innovate our business."
  },
  {
    reviewerName: "Beck Smirth",
    reviewerRole: "Product Manager",
    reviewerAvatar: "assets/content/review/02.png",
    reviewDetail: "Hanzo's digital solutions have empowered us to redefine success. They have provided us with the tools we need to accelerate our growth and expand our reach."
  },
  {
    reviewerName: "Chris Jonathon",
    reviewerRole: "Investor",
    reviewerAvatar: "assets/content/review/03.png",
    reviewDetail: "We are impressed with Hanzo's pioneering approach to digital solutions. Their platform has helped us to transcend traditional boundaries and achieve new levels of success."
  },
  {
    reviewerName: "Jennifer Patel",
    reviewerRole: "Founder & CEO",
    reviewerAvatar: "assets/content/review/04.png",
    reviewDetail: "Hanzo has a clear vision for the future of business. Their platform is helping us to launch, scale, and innovate in a way that was not possible before."
  },
]
=======
const reviews = [
  {
    avatar: 'assets/content/review/01.png',
    title: "Triller",
    text: "“ Jennifer has spearheaded the green technology industry for over a decade, turning her startup into a leading provider of eco-friendly products. We were grateful for the opportunity to work with Hanzo and take the company public. ”",
    name: "Jennifer Patel",
    position: "Founder & CEO"
  },
  {
    avatar: 'assets/content/review/01.png',
    title: "Triller",
    text: "“ Jennifer has spearheaded the green technology industry for over a decade, turning her startup into a leading provider of eco-friendly products. We were grateful for the opportunity to work with Hanzo and take the company public. ”",
    name: "Jennifer Patel",
    position: "Founder & CEO"
  },
  {
    avatar: 'assets/content/review/01.png',
    title: "Triller",
    text: "“ Jennifer has spearheaded the green technology industry for over a decade, turning her startup into a leading provider of eco-friendly products. We were grateful for the opportunity to work with Hanzo and take the company public. ”",
    name: "Jennifer Patel",
    position: "Founder & CEO"
  }
];
>>>>>>> 691d47c6 (update scroll)

const innovations = [
  { src: 'assets/content/innovations/01.png' },
  { src: 'assets/content/innovations/02.png' },
  { src: 'assets/content/innovations/03.png' },
];

const imageBlocks01: string[] = new Array(35)
  .fill('')
  .map((_, index) => `assets/hanzo-site-animation/block0/${index + 1}.png`);
const imageBlocks02: string[] = new Array(30)
  .fill('')
  .map((_, index) => `assets/hanzo-site-animation/block1/${index + 1}.png`);
const imageBlocks03: string[] = new Array(60)
  .fill('')
  .map((_, index) => `assets/hanzo-site-animation/block2/${index + 1}.png`);

const images = [...imageBlocks01, ...imageBlocks02, ...imageBlocks03];
const imageLength = images.length;

const HomeLayout = () => {
  const rootContainerRef = useRef<HTMLDivElement | null>(null);
  const companyContainerRef = useRef<HTMLDivElement | null>(null);
  const imageBlockContainerRef = useRef<HTMLDivElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentIndexRef = useRef<number>(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);
  const [blockPercents, setBlockPercents] = useState<number[]>([0, 0, 0]);

<<<<<<< HEAD
  const reviewContainerRef = useRef<HTMLDivElement | null>(null);

=======
>>>>>>> 691d47c6 (update scroll)
  const onImagesLoaded = () => {
    setImagesLoaded(true);
  };

  useEffect(() => {
    if (!rootContainerRef.current) {
      return;
    }

    const handleWheelEventHandler = (event: WheelEvent) => {
      if (!rootContainerRef.current || !companyContainerRef.current || !imageBlockContainerRef.current) {
        return;
      }

      const screenHeight = window.innerHeight;
      const { deltaY: scrollMovement } = event;
      const { top: imageBlockPosition, height: imageBlockHeight } = imageBlockContainerRef.current.getBoundingClientRect();

      const imageBlockRemainSpace = (screenHeight - imageBlockHeight) / 2;
      const imageBlockOffset = imageBlockPosition - imageBlockRemainSpace - scrollMovement;
      if (scrollMovement > 0 && imageBlockOffset < 0 && currentIndexRef.current < imageLength - 1) {
        event.preventDefault();
        imageBlockContainerRef.current.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' });
        setCurrentIndex((prevIndex) => {
          let newIndex = Math.min(prevIndex + 1, imageLength - 1);
          currentIndexRef.current = newIndex;
          return newIndex;
        });
      }
      if (scrollMovement < 0 && imageBlockOffset > 0 && currentIndexRef.current > 0) {
        event.preventDefault();
        imageBlockContainerRef.current.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' });
        setCurrentIndex((prevIndex) => {
          let newIndex = Math.max(prevIndex - 1, 0);
          currentIndexRef.current = newIndex;
          return newIndex;
        });
      }

      const { scrollLeft, scrollWidth, clientWidth } = companyContainerRef.current;
      const { top: companyContainerPosition, height: companyContainerHeight } = companyContainerRef.current.getBoundingClientRect();

      const companyContainerRemainSpace = (screenHeight - companyContainerHeight) / 2;
      const companyContainerOffset = companyContainerPosition - companyContainerRemainSpace;

      const atStart = scrollLeft + clientWidth < scrollWidth;
      const atEnd = scrollLeft > 0;

      if (scrollMovement > 0 && companyContainerOffset < 0 && atStart) {
<<<<<<< HEAD
        event.preventDefault();
<<<<<<< HEAD
<<<<<<< HEAD
=======
        // companyContainerRef.current.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' });
>>>>>>> 691d47c6 (update scroll)
=======
>>>>>>> 61da09ee (update responsive & scroll function)
        companyContainerRef.current.scrollLeft += scrollMovement;
      }
      if (scrollMovement < 0 && companyContainerOffset > 0 && atEnd) {
        event.preventDefault();
<<<<<<< HEAD
<<<<<<< HEAD
=======
        // companyContainerRef.current.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' });
>>>>>>> 691d47c6 (update scroll)
=======
>>>>>>> 61da09ee (update responsive & scroll function)
=======
        // companyContainerRef.current.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' });
        companyContainerRef.current.scrollLeft += scrollMovement;
      }
      if (scrollMovement < 0 && companyContainerOffset > 0 && atEnd) {
        // companyContainerRef.current.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' });
>>>>>>> 48f48f01 (update scroll)
        companyContainerRef.current.scrollLeft += scrollMovement;
      }
    }

<<<<<<< HEAD
<<<<<<< HEAD
    rootContainerRef.current.addEventListener('wheel', handleWheelEventHandler, { passive: false });
=======
    rootContainerRef.current.addEventListener('wheel', handleWheelEventHandler);
>>>>>>> 691d47c6 (update scroll)
=======
    rootContainerRef.current.addEventListener('wheel', handleWheelEventHandler, { passive: false });
>>>>>>> 61da09ee (update responsive & scroll function)

    return () => {
      if (rootContainerRef.current) {
        rootContainerRef.current.removeEventListener('wheel', handleWheelEventHandler);
      }
    }
  }, []);

  useEffect(() => {
    const block1Counts = imageBlocks01.length;
    const block2Counts = imageBlocks02.length;
    const block3Counts = imageBlocks03.length;

    if (currentIndex < block1Counts) {
      setBlockPercents([currentIndex / block1Counts * 100, 0, 0]);
    } else if (currentIndex >= block1Counts && currentIndex < (block2Counts + block1Counts)) {
      setBlockPercents([100, (currentIndex - block1Counts) / block2Counts * 100, 0]);
    } else if (currentIndex >= (block2Counts + block1Counts) && currentIndex < (block3Counts + block2Counts + block1Counts)) {
      setBlockPercents([100, 100, (currentIndex - block1Counts - block2Counts) / block3Counts * 100]);
    }
  }, [currentIndex]);

<<<<<<< HEAD
  const reviewScrollLeft = () => {
    if (reviewContainerRef.current) {
      reviewContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const reviewScrollRight = () => {
    if (reviewContainerRef.current) {
      reviewContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

<<<<<<< HEAD
  return (
    <div ref={rootContainerRef} className="flex mt-[80px] px-10 xl:px-[168px] pt-[35px] pb-[57px] scroll-smooth">
=======
  return (
<<<<<<< HEAD
    <div ref={rootContainerRef} className="flex mt-[80px] px-[168px] pt-[35px] pb-[57px]">
>>>>>>> 691d47c6 (update scroll)
=======
    <div ref={rootContainerRef} className="flex mt-[80px] px-10 xl:px-[168px] pt-[35px] pb-[57px] scroll-smooth">
>>>>>>> 61da09ee (update responsive & scroll function)
=======
    <div ref={rootContainerRef} className="flex mt-[80px] px-[168px] pt-[35px] pb-[57px]">
>>>>>>> 48f48f01 (update scroll)
      <div className="border-l border-r w-full pb-[55px] border-white-10">

        {/* First section */}
        <div className="flex justify-center items-center flex-col pb-[71px] pt-[140px] border-b relative border-white-10">
          <img src='assets/content/black-circle.png' alt='black-circle' className='absolute left-[50%] top-[40px] translate-x-[-50%] z-1' />
          <div className='h-[1px] w-[calc(100%+54px)] absolute top-[27px] left-[-27px] border-white-10 border-t'></div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61da09ee (update responsive & scroll function)
          <h1 className="text-3xl lg:text-5xl font-bold z-2 text-center">
            Cut through the complexities
          </h1>
          <p className="pt-[19px] text-white-65 text-[16px] md:text-[18px] z-2 text-center max-w-[600px]">
            We offer a powerful suite of tools that streamline complex challenges at every stage of your journey - launching, scaling, and innovating.
          </p>
<<<<<<< HEAD
          <div className="flex flex-col sm:flex-row gap-[12px] mt-[48px] z-2">
=======
          <h1 className="text-[48px] font-bold z-2">Cut through the complexities</h1>
          <p className="pt-[19px] text-white-65 text-[18px] z-2">We offer a powerful suite of tools that streamline complex challenges</p>
          <p className="text-white-65 text-[18px] z-2">at every stage of your journey - launching, scaling, and innovating.</p>
          <div className="flex flex-row gap-[12px] mt-[48px] z-2">
>>>>>>> 691d47c6 (update scroll)
=======
          <div className="flex flex-col md:flex-row gap-[12px] mt-[48px] z-2">
>>>>>>> 61da09ee (update responsive & scroll function)
            <Button variant="outline" className='text-muted px-[14px] py-[10px] text-[14px] h-[40px] z-2'>Browse Case Studies</Button>
            <Button className='flex gap-2 px-[14px] py-[10px] text-[14px] h-[40px] z-2'>
              <Phone />
              Schedule Call
            </Button>
          </div>
        </div>

        {/* Our vision section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='border-b border-white-10 pt-8 lg:pt-[58px] pr-5 lg:pr-[78px] pb-8 lg:pb-[91px] pl-[20px] lg:pl-[56px]'>
          <h3 className='text-base lg:text-[22px] text-left'>
            OUR VISION
          </h3>
          <p className='text-white-65 pt-[24px] text-base lg:text-[22px] text-left'>
            We empower businesses to transcend traditional boundaries and redefine success with pioneering digital solutions - enabling acceleration and growth that expand companies reach by providing a suite of digital tools that simplify complex challenges when launching, scaling, and innovating.
          </p>
=======
        <div className='border-b border-white-10 pt-[58px] pr-[78px] pb-[91px] pl-[56px]'>
          <h3 className='text-[22px]'>OUR VISION</h3>
          <p className='text-white-65 pt-[24px] text-[22px]'>We empower businesses to transcend traditional boundaries and redefine success with pioneering digital solutions - enabling acceleration and growth that expand companies reach by providing a suite of digital tools that simplify complex challenges when launching, scaling, and innovating.</p>
>>>>>>> 691d47c6 (update scroll)
=======
        <div className='border-b border-white-10 pt-8 lg:pt-[58px] pr-5 lg:pr-[78px] pb-8 lg:pb-[91px] pl-[20px] lg:pl-[56px]'>
          <h3 className='text-base lg:text-[22px] text-center lg:text-left'>
            OUR VISION
          </h3>
          <p className='text-white-65 pt-[24px] text-base lg:text-[22px] text-center lg:text-left'>
            We empower businesses to transcend traditional boundaries and redefine success with pioneering digital solutions - enabling acceleration and growth that expand companies reach by providing a suite of digital tools that simplify complex challenges when launching, scaling, and innovating.
          </p>
>>>>>>> 61da09ee (update responsive & scroll function)
        </div>

        {/* Scroll number section */}
        <div className='border-b border-white-10'>
          <ScrollNumBlockComponent block={scrollNumBlocks} />
        </div>

        {/* Video section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='border-b border-white-10 pt-10 lg:pt-[82px] pb-8 lg:pb-[55px] px-4 lg:px-10'>
          <div className="flex flex-col md:flex-row gap-4 sm:gap-[49px] justify-center items-center md:justify-start" ref={imageBlockContainerRef}>
            <div className="flex justify-center items-center overflow-hidden w-[200px] md:w-[240px] lg:w-[377px] h-[200px] md:h-[240px] lg:h-[377px] flex-none">
=======
        <div className='border-b border-white-10 pt-[82px] pb-[55px] px-10'>
          <div className="flex flex-row gap-[49px]" ref={imageBlockContainerRef}>
            <div className="flex justify-center items-center overflow-hidden w-[377px] h-[377px] flex-none">
>>>>>>> 691d47c6 (update scroll)
=======
        <div className='border-b border-white-10 pt-10 lg:pt-[82px] pb-8 lg:pb-[55px] px-4 lg:px-10'>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-[49px]" ref={imageBlockContainerRef}>
            <div className="flex justify-center items-center overflow-hidden w-[100px] md:w-[240px] lg:w-[377px] h-[100px] md:h-[240px] lg:h-[377px] flex-none">
>>>>>>> 61da09ee (update responsive & scroll function)
=======
        <div className='border-b border-white-10 pt-[82px] pb-[55px] px-10'>
          <div className="flex flex-row gap-[49px]" ref={imageBlockContainerRef}>
            <div className="flex justify-center items-center overflow-hidden w-[377px] h-[377px] flex-none">
>>>>>>> 48f48f01 (update scroll)
              {imagesLoaded ? (
                <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
              ) : (
                <div>Loading images...</div>
              )}
              <ImagePreloader images={images} onImagesLoaded={onImagesLoaded} />
            </div>
            <div>
<<<<<<< HEAD
<<<<<<< HEAD
              <p className="text-dark-grey1 text-sm lg:text-base text-left">
                HYPER SCALE YOUR BRAND WITH HANZO AI
                <span className="text-white-grey">{`  [PRODUCTS]`}</span>
              </p>
              <h1 className="text-white-grey mt-4 lg:mt-8 text-sm lg:text-[22px] text-left">
                Scale Intelligently, with Hanzo's all in one accelerator.
              </h1>
              <p className="text-white-grey-65 text-sm lg:text-xl mt-6 lg:mt-12 text-left">
                With over a decade of experience and backed by Techstars, Hanzo has a prove track record of transforming the complexities of modern business into stramlined success stories.
              </p>
              <p className="text-white-grey-65 text-sm lg:text-xl mt-6 lg:mt-12 text-left">
                Take care of all your marketing needs and scale your business with our cutting-edge technology.
              </p>
              <Button className="mt-4 md:mt-8 mx-auto md:mx-0">Resources</Button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-12 w-full justify-between">
            <div className="w-full md:w-[30%]">
              <Progress className="w-full h-[3px]" value={blockPercents[0]} />
              <div className="pt-[10px] pb-2">
                <h3 className="text-white text-sm lg:text-xl text-left">Problems</h3>
                <p className="text-dark-grey1 text-xxs lg:text-xl">Hyper Scale your brand with HANZO AI</p>
              </div>
            </div>
            <div className="w-full md:w-[30%]">
              <Progress className="w-full h-[3px]" value={blockPercents[1]} />
              <div className="pt-[10px] pb-2">
                <h3 className="text-white text-sm lg:text-xl text-left">Solutions</h3>
                <p className="text-dark-grey1 text-xxs lg:text-xl">Deploy sophisticated AI campaigns</p>
              </div>
            </div>
            <div className="w-full md:w-[30%]">
              <Progress className="w-full h-[3px]" value={blockPercents[2]} />
              <div className="pt-[10px] pb-2">
                <h3 className="text-white text-sm lg:text-xl text-left">Resources</h3>
                <p className="text-dark-grey1 text-xxs lg:text-xl">Impressive POI and productive market fit</p>
=======
              <p className="text-dark-grey1 text-base">
=======
              <p className="text-dark-grey1 text-xs lg:text-base text-left">
>>>>>>> 61da09ee (update responsive & scroll function)
                HYPER SCALE YOUR BRAND WITH HANZO AI
                <span className="text-white-grey">{`  [PRODUCTS]`}</span>
              </p>
              <h1 className="text-white-grey mt-4 lg:mt-8 text-sm lg:text-[22px] text-left">
                Scale Intelligently, with Hanzo's all in one accelerator.
              </h1>
              <p className="text-white-grey-65 text-xs lg:text-xl mt-6 lg:mt-12 text-left">
                With over a decade of experience and backed by Techstars, Hanzo has a prove track record of transforming the complexities of modern business into stramlined success stories.
              </p>
              <p className="text-white-grey-65 text-xs lg:text-xl mt-6 lg:mt-12 text-left">
                Take care of all your marketing needs and scale your business with our cutting-edge technology.
              </p>
              <Button className="mt-4 md:mt-8">Resources</Button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mt-12 w-full justify-between">
            <div className="w-full sm:w-[30%]">
              <Progress className="w-full h-[3px]" value={blockPercents[0]} />
              <div className="pt-[10px] pb-2">
                <h3 className="text-white text-sm lg:text-xl text-left">Problems</h3>
                <p className="text-dark-grey1 text-xxs lg:text-xl">Hyper Scale your brand with HANZO AI</p>
              </div>
            </div>
            <div className="w-full sm:w-[30%]">
              <Progress className="w-full h-[3px]" value={blockPercents[1]} />
              <div className="pt-[10px] pb-2">
                <h3 className="text-white text-sm lg:text-xl text-left">Solutions</h3>
                <p className="text-dark-grey1 text-xxs lg:text-xl">Deploy sophisticated AI campaigns</p>
              </div>
            </div>
            <div className="w-full sm:w-[30%]">
              <Progress className="w-full h-[3px]" value={blockPercents[2]} />
              <div className="pt-[10px] pb-2">
<<<<<<< HEAD
                <h3 className="text-white text-xl">Resources</h3>
                <p className="text-dark-grey1">Impressive POI and productive market fit</p>
>>>>>>> 691d47c6 (update scroll)
=======
                <h3 className="text-white text-sm lg:text-xl text-left">Resources</h3>
                <p className="text-dark-grey1 text-xxs lg:text-xl">Impressive POI and productive market fit</p>
>>>>>>> 61da09ee (update responsive & scroll function)
              </div>
            </div>
          </div>
        </div>

        {/* Hanzo power section */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61da09ee (update responsive & scroll function)
        <div className='flex border-b border-white-10 py-1 sm:py-3 lg:py-[34px] px-2 sm:px-5 lg:px-[150px]'>
          <p className='text-xs sm:text-[20px] lg:text-[32px] text-white-65 text-center leading-5 lg:leading-9'>
            <span className='text-white'>
              Hanzo has powered over 100 companies
            </span>
            &nbsp;from zero to millions of dollars in revenue per month.
          </p>
<<<<<<< HEAD
=======
        <div className='flex border-b border-white-10 py-[34px] px-[150px]'>
          <p className='text-[32px] text-white-65 text-center'><span className='text-white'>Hanzo has powered over 100 companies</span> from zero to millions of dollars in revenue per month.</p>
>>>>>>> 691d47c6 (update scroll)
=======
>>>>>>> 61da09ee (update responsive & scroll function)
        </div>

        {/* Companies section */}
        <div
          ref={companyContainerRef}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          className='grid grid-flow-col auto-cols-max border-b border-white-10 w-full overflow-x-auto gap-8 lg:gap-[64px] justify-start items-center no-scroll py-5 lg:py-[36px]'
=======
          className='grid grid-flow-col auto-cols-max border-b border-white-10 w-full overflow-x-auto gap-[64px] justify-start items-center no-scroll py-[36px]'
>>>>>>> 691d47c6 (update scroll)
=======
          className='grid grid-flow-col auto-cols-max border-b border-white-10 w-full overflow-x-auto gap-8 lg:gap-[64px] justify-start items-center no-scroll py-5 lg:py-[36px]'
>>>>>>> 61da09ee (update responsive & scroll function)
=======
          className='grid grid-flow-col auto-cols-max border-b border-white-10 w-full overflow-x-auto gap-[64px] justify-start items-center no-scroll py-[36px]'
>>>>>>> 48f48f01 (update scroll)
        >
          <Arca className='w-full ml-2' />
          <Cove className='w-full' />
          <Cover className='w-full' />
          <Lux className='w-full' />
          <Nasa className='w-full' />
          <Zoo className='w-full' />
          <AAAA className='w-full' />
          <Beallabeat className='w-full' />
          <Casperlabs className='w-full' />
          <Devxdao className='w-full' />
          <Cycliq className='w-full' />
          <Daemon className='w-full' />
          <Forstman className='w-full' />
          <Karma className='w-full' />
          <Keek className='w-full' />
          <Myle className='w-full' />
          <Snapchat className='w-full' />
          <Skully className='w-full' />
          <Triller className='w-full' />
          <Unikain className='w-full' />
        </div>

        {/* Our impact section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='relative border-b border-white-10 px-5 lg:px-[41px] py-6 lg:py-[55px]'>
          <h1 className='text-xl lg:text-[32px] mb-6 lg:mb-[42px]'>OUR IMPACT</h1>
          <p className='text-sm lg:text-[20px]'>You don’t have to take our word for it.</p>
          <p className='text-sm lg:text-[20px] text-white-65 mt-2'>Here’s what some of our clients have to say about us.</p>
          <div ref={reviewContainerRef} className='flex flex-row gap-8 mt-[39px] md:mt-[63px] pl-8 pb-[78px] md:pl-0 pt-8 overflow-y-auto no-scroll border border-white-10 md:border-none'>
            {
              reviews.map((review) => <ReviewCard {...review} />)
            }
          </div>
          <div className='absolute bottom-[53px] right-[52px] md:right-[130px] flex flex-row gap-2'>
            <Button className='w-8 h-7 p-0' onClick={reviewScrollLeft}>
              <ChevronLeft />
            </Button>
            <Button className='w-8 h-7 p-0' onClick={reviewScrollRight}>
              <ChevronRight />
            </Button>
          </div>
        </div>

        {/* Innovation section */}
        <div className='border-b border-white-10 pt-5 lg:pt-[55px] pb-10 lg:pb-38'>
          <h1 className='text-base lg:text-[32px] ml-5 lg:ml-10 md-6 lg:mb-12'>We believe in innovation</h1>
          <Carousel
            options={{ align: 'center', loop: true }}
            className='w-full mt-8 lg:mt-16 relative'
=======
        <div className='border-b border-white-10 px-[41px] py-[55px]'>
          <h1 className='text-[32px] mb-[42px]'>OUR IMPACT</h1>
          <p className='text-[20px]'>You don’t have to take our word for it.</p>
          <p className='text-[20px] text-white-65'>Here’s what some of our clients have to say about us.</p>
=======
        <div className='border-b border-white-10 px-5 lg:px-[41px] py-6 lg:py-[55px]'>
          <h1 className='text-xl lg:text-[32px] mb-6 lg:mb-[42px]'>OUR IMPACT</h1>
          <p className='text-sm lg:text-[20px]'>You don’t have to take our word for it.</p>
          <p className='text-sm lg:text-[20px] text-white-65'>Here’s what some of our clients have to say about us.</p>
>>>>>>> 61da09ee (update responsive & scroll function)
          <Carousel
            options={{ align: 'center', loop: true }}
            className='w-full mt-8 lg:mt-16 relative'
            plugins={[EmblaAutoplay({ delay: 5000, stopOnInteraction: true })]}
          >
            <CarouselContent>
              {
                reviews.map((review, index) => (
                  <CarouselItem key={index}>
                    <div className='bg-dark-grey p-4 lg:p-8 flex flex-row gap-5 lg:gap-11'>
                      <img src={review.avatar} alt="avatar" className='w-[150px] lg:w-auto' />
                      <div className='flex flex-col justify-between items-start'>
                        <p className='text-base lg:text-xl text-white-65'>{review.title}</p>
                        <p className='text-base lg:text-xl'>{review.text}</p>
                        <div>
                          <h3 className='text-base lg:text-xl'>{review.name}</h3>
                          <h3 className='text-xs lg:text-base text-white-65'>{review.position}</h3>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))
              }
            </CarouselContent>
            <div className='absolute bottom-10 right-12 flex flex-row gap-2'>
              <Button className='w-8 h-7 p-0'>
                <ChevronLeft />
              </Button>
              <Button className='w-8 h-7 p-0'>
                <ChevronRight />
              </Button>
            </div>
          </Carousel>
        </div>

        {/* Innovation section */}
        <div className='border-b border-white-10 pt-5 lg:pt-[55px] pb-10 lg:pb-38'>
          <h1 className='text-base lg:text-[32px] ml-5 lg:ml-10 md-6 lg:mb-12'>We believe in innovation</h1>
          <Carousel
            options={{ align: 'center', loop: true }}
<<<<<<< HEAD
            className='w-full mt-16 relative'
>>>>>>> 691d47c6 (update scroll)
=======
            className='w-full mt-8 lg:mt-16 relative'
>>>>>>> 61da09ee (update responsive & scroll function)
            plugins={[EmblaAutoplay({ delay: 5000, stopOnInteraction: true })]}
          >
            <CarouselContent className='flex gap-4 justify-center'>
              {
                innovations.map((innovation, index) => (
                  <CarouselItem key={index} className='w-auto flex justify-center basis-auto'>
                    <div className='w-fit flex justify-center'>
<<<<<<< HEAD
<<<<<<< HEAD
                      <img src={innovation.src} alt="innovation" className='h-[300px] lg:h-[497px]' />
=======
                      <img src={innovation.src} alt="innovation" className='h-[497px]' />
>>>>>>> 691d47c6 (update scroll)
=======
                      <img src={innovation.src} alt="innovation" className='h-[300px] lg:h-[497px]' />
>>>>>>> 61da09ee (update responsive & scroll function)
                    </div>
                  </CarouselItem>
                ))
              }
            </CarouselContent>
            <div className='absolute -bottom-10 right-12 flex flex-row gap-2'>
              <Button className='w-8 h-7 p-0'>
                <ChevronLeft />
              </Button>
              <Button className='w-8 h-7 p-0'>
                <ChevronRight />
              </Button>
            </div>
          </Carousel>
        </div>

        {/* Strategy section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='border-b border-white-10 py-6 lg:py-[55px] px-4 lg:px-[44px]'>
          <h1 className='text-base lg:text-[32px]'>The game-changer in your go-to-market strategy</h1>
          <div className='flex flex-row mt-6 lg:mt-[48px] gap-4 lg:gap-[24px]'>
            <div className='flex flex-col'>
              <div className='relative py-4 lg:py-[29px] pl-[54px] lg:pl-[76px] pr-4 lg:pr-[26px] bg-dark-grey h-fit'>
                <div className='absolute left-4 lg:left-[34px] top-5 lg:top-[33px]'>
                  <CustomRocket />
                </div>
                <h2 className='text-[18px] lg:text-[24px] leading-normal'>
                  Business Launch and Efficiency
                </h2>
                <p className='text-base lg:text-[18px] text-white-85 mt-3 lg:mt-[25px] leading-normal'>
                  Hanzo streamlines the launch and scale-up phases of business growth, utilizing advanced technology to minimize time and costs.
                </p>
                <p className='text-base lg:text-[18px] text-white-85 mt-3 lg:mt-[18px] leading-normal'>
                  It offers a suite of tools that optimize resource management, operations, to ensure seamless transitions through different growth phases.
                </p>
              </div>
              <div className='flex flex-row items-center justify-start gap-3 lg:gap-[25px] pl-3 lg:pl-[30px] mt-4 lg:mt-[38px] md:hidden'>
                <CustomLighting />
                <span className='text-[18px] lg:text-[24px] text-white-65'>Lighting Node Bridges</span>
              </div>
              <div className='flex flex-row items-center justify-start gap-3 lg:gap-[25px] pl-3 lg:pl-[30px] mt-4 lg:mt-[38px]'>
                <CustomCard />
                <span className='text-[18px] lg:text-[24px] text-white-65'>Multi-Currency Payment Solutions</span>
              </div>
              <div className='flex flex-row items-center justify-start gap-3 lg:gap-[25px] pl-3 lg:pl-[30px] mt-4 lg:mt-[38px]'>
                <CustomControl />
                <span className='text-[18px] lg:text-[24px] text-white-65'>Compilance and Digital Trading</span>
              </div>
              <div className='flex flex-row items-center justify-start gap-3 lg:gap-[25px] pl-3 lg:pl-[30px] mt-4 lg:mt-[38px]'>
                <CustomPen />
                <span className='text-[18px] lg:text-[24px] text-white-65'>Advanced AI and User Intersection</span>
              </div>
              <div className='flex flex-row items-center justify-start gap-3 lg:gap-[25px] pl-3 lg:pl-[30px] mt-4 lg:mt-[38px] md:hidden'>
                <CustomChatgpt />
                <span className='text-[18px] lg:text-[24px] text-white-65'>Rapid Deployment and Automation</span>
              </div>
            </div>
            <div className='hidden md:block'>
              <div className='flex flex-col'>
                <div className='flex flex-row items-center justify-start gap-3 lg:gap-[25px] pl-3 lg:pl-[34px] mb-4 lg:mb-[40px]'>
                  <CustomLighting />
                  <span className='text-base lg:text-[24px] text-white-65'>Light Node Bridges</span>
                </div>
                <div className='relative py-4 lg:py-[29px] pl-8 lg:pl-[76px] pr-4 lg:pr-[26px] bg-dark-grey h-fit'>
                  <div className='absolute left-4 lg:left-[34px] top-4 lg:top-[33px] hidden lg:block'>
                    <CustomChatgpt />
                  </div>
                  <h2 className='text-xs lg:text-[24px] leading-normal'>Rapid Deployment and Automation</h2>
                  <p className='text-xxs lg:text-[18px] text-white-85 mt-3 lg:mt-[25px] leading-normal'>Hanzo's payment platforms are engineered to support an array of currencies, facilitating smooth and secure transactions globally.</p>
                  <p className='text-xs lg:text-[18px] text-white-85 mt-3 lg:mt-[18px] leading-normal'>This flexibility enables businesses to expand their customer base internationally without currency barriers.</p>
=======
        <div className='border-b border-white-10 py-[55px] px-[44px]'>
          <h1 className='text-[32px]'>The game-changer in your go-to-market strategy</h1>
          <div className='flex flex-row mt-[48px] gap-[24px]'>
=======
        <div className='border-b border-white-10 py-6 lg:py-[55px] px-4 lg:px-[44px]'>
          <h1 className='text-base lg:text-[32px]'>The game-changer in your go-to-market strategy</h1>
          <div className='flex flex-row mt-6 lg:mt-[48px] gap-4 lg:gap-[24px]'>
>>>>>>> 61da09ee (update responsive & scroll function)
            <div className='flex flex-col'>
              <div className='relative py-4 lg:py-[29px] pl-8 lg:pl-[76px] pr-4 lg:pr-[26px] bg-dark-grey h-fit'>
                <div className='absolute left-4 lg:left-[34px] top-4 lg:top-[33px] hidden lg:block'>
                  <CustomRocket />
                </div>
                <h2 className='text-xs lg:text-[24px] leading-normal'>
                  Business Launch and Efficiency
                </h2>
                <p className='text-xxs lg:text-[18px] text-white-85 mt-3 lg:mt-[25px] leading-normal'>
                  Hanzo streamlines the launch and scale-up phases of business growth, utilizing advanced technology to minimize time and costs.
                </p>
                <p className='text-xs lg:text-[18px] text-white-85 mt-3 lg:mt-[18px] leading-normal'>
                  It offers a suite of tools that optimize resource management, operations, to ensure seamless transitions through different growth phases.
                </p>
              </div>
              <div className='flex flex-row items-center justify-start gap-3 lg:gap-[25px] pl-3 lg:pl-[30px] mt-4 lg:mt-[38px]'>
                <CustomCard />
                <span className='text-sm lg:text-[24px] text-white-65'>Multi-Currency Payment Solutions</span>
              </div>
              <div className='flex flex-row items-center justify-start gap-3 lg:gap-[25px] pl-3 lg:pl-[30px] mt-4 lg:mt-[38px]'>
                <CustomControl />
                <span className='text-sm lg:text-[24px] text-white-65'>Compilance and Digital Trading</span>
              </div>
              <div className='flex flex-row items-center justify-start gap-3 lg:gap-[25px] pl-3 lg:pl-[30px] mt-4 lg:mt-[38px]'>
                <CustomPen />
                <span className='text-sm lg:text-[24px] text-white-65'>Advanced AI and User Intersection</span>
              </div>
            </div>
            <div>
              <div className='flex flex-col'>
                <div className='flex flex-row items-center justify-start gap-3 lg:gap-[25px] pl-3 lg:pl-[34px] mb-4 lg:mb-[40px]'>
                  <CustomLighting />
                  <span className='text-base lg:text-[24px] text-white-65'>Light Node Bridges</span>
                </div>
                <div className='relative py-4 lg:py-[29px] pl-8 lg:pl-[76px] pr-4 lg:pr-[26px] bg-dark-grey h-fit'>
                  <div className='absolute left-4 lg:left-[34px] top-4 lg:top-[33px] hidden lg:block'>
                    <CustomChatgpt />
                  </div>
<<<<<<< HEAD
                  <h2 className='text-[24px]'>Rapid Deployment and Automation</h2>
                  <p className='text-[18px] text-white-85 mt-[25px]'>Hanzo's payment platforms are engineered to support an array of currencies, facilitating smooth and secure transactions globally.</p>
                  <p className='text-[18px] text-white-85 mt-[18px]'>This flexibility enables businesses to expand their customer base internationally without currency barriers.</p>
>>>>>>> 691d47c6 (update scroll)
=======
                  <h2 className='text-xs lg:text-[24px] leading-normal'>Rapid Deployment and Automation</h2>
                  <p className='text-xxs lg:text-[18px] text-white-85 mt-3 lg:mt-[25px] leading-normal'>Hanzo's payment platforms are engineered to support an array of currencies, facilitating smooth and secure transactions globally.</p>
                  <p className='text-xs lg:text-[18px] text-white-85 mt-3 lg:mt-[18px] leading-normal'>This flexibility enables businesses to expand their customer base internationally without currency barriers.</p>
>>>>>>> 61da09ee (update responsive & scroll function)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Work with us section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='flex flex-col justify-center items-center border-b border-white-10 py-8 lg:py-[55px] px-6 lg:px-[52px]'>
          <p className='text-[22px] lg:text-[30px] text-white-65 text-center'>
=======
        <div className='flex flex-col justify-center items-center border-b border-white-10 py-[55px] px-[52px]'>
          <p className='text-[30px] text-white-65 text-center'>
>>>>>>> 691d47c6 (update scroll)
=======
        <div className='flex flex-col justify-center items-center border-b border-white-10 py-8 lg:py-[55px] px-6 lg:px-[52px]'>
          <p className='text-base lg:text-[30px] text-white-65 text-center'>
>>>>>>> 61da09ee (update responsive & scroll function)
            <span className='text-white'>
              Work with us.
            </span>
            &nbsp;We are excited to understand your organization's unique needs and help you develop a
            <span className='text-[#52A8FF]'>
              &nbsp; distinctive
            </span>
            <span className='text-[#BF7AF0]'>
              &nbsp; effective digital strategy
            </span>
            &nbsp;and campaign that
            <span className='text-[#E12CA3]'>
              &nbsp;stands out.
            </span>
          </p>
<<<<<<< HEAD
<<<<<<< HEAD
          <Button className='flex gap-2 px-[14px] py-[10px] text-[14px] [40px] mt-[52px]'>
            <Phone className='w-full' />
=======
          <Button className='flex gap-2 px-[14px] py-[10px] text-[14px] h-[40px] mt-[52px]'>
            <Phone />
>>>>>>> 691d47c6 (update scroll)
=======
          <Button className='flex gap-1 lg:gap-2 px-2 lg:px-[14px] py-1 lg:py-[10px] text-xs lg:text-[14px] h-6 lg:h-[40px] mt-8 lg:mt-[52px]'>
            <Phone className='w-4 lg:w-full' />
>>>>>>> 61da09ee (update responsive & scroll function)
            Schedule Call
          </Button>
        </div>
      </div>
    </div>
  )
};

export default HomeLayout;
