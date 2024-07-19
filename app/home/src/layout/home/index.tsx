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
import { Button, Carousel, CarouselContent, CarouselItem } from '@hanzo/ui/primitives';
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
import { useEffect, useRef } from 'react';

const scrollNumBlocks = {
  blockType: 'scroll-num',
  aniNum: ["11", "100", "1B", "120"],
  modifier: [" years", "+", "+", "+"],
  detail: ["Growing Companies", "Companies Scaled", "Client Revenue Generated", "Countries Worldwide"]
} satisfies ScrollNumBlock as Block;

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

const innovations = [
  { src: 'assets/content/innovations/01.png' },
  { src: 'assets/content/innovations/02.png' },
  { src: 'assets/content/innovations/03.png' },
];

const HomeLayout = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleWheel = (event: WheelEvent) => {
      if (scrollContainer) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
        const atStart = scrollLeft === 0;
        const atEnd = scrollLeft + clientWidth >= scrollWidth;

        if (atStart && event.deltaY < 0) {
          // If at the start and scrolling up, allow vertical scroll
          return;
        }

        if (atEnd && event.deltaY > 0) {
          // If at the end and scrolling down, allow vertical scroll
          return;
        }

        event.preventDefault(); // Prevent default vertical scroll
        scrollContainer.scrollLeft += event.deltaY; // Adjust horizontal scroll position
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className="flex mt-[80px] px-[168px] pt-[35px] pb-[57px]">
      <div className="border-l border-r w-full pb-[55px] border-white-10">

        {/* First section */}
        <div className="flex justify-center items-center flex-col pb-[71px] pt-[140px] border-b relative border-white-10">
          <img src='assets/content/black-circle.png' alt='black-circle' className='absolute left-[50%] top-[40px] translate-x-[-50%] z-1' />
          <div className='h-[1px] w-[calc(100%+54px)] absolute top-[27px] left-[-27px] border-white-10 border-t'></div>
          <h1 className="text-[48px] font-bold z-2">Cut through the complexities</h1>
          <p className="pt-[19px] text-white-65 text-[18px] z-2">We offer a powerful suite of tools that streamline complex challenges</p>
          <p className="text-white-65 text-[18px] z-2">at every stage of your journey - launching, scaling, and innovating.</p>
          <div className="flex flex-row gap-[12px] mt-[48px] z-2">
            <Button variant="outline" className='text-muted px-[14px] py-[10px] text-[14px] h-[40px] z-2'>Browse Case Studies</Button>
            <Button className='flex gap-2 px-[14px] py-[10px] text-[14px] h-[40px] z-2'>
              <Phone />
              Schedule Call
            </Button>
          </div>
        </div>

        {/* Our vision section */}
        <div className='border-b border-white-10 pt-[58px] pr-[78px] pb-[91px] pl-[56px]'>
          <h3 className='text-[22px]'>OUR VISION</h3>
          <p className='text-white-65 pt-[24px] text-[22px]'>We empower businesses to transcend traditional boundaries and redefine success with pioneering digital solutions - enabling acceleration and growth that expand companies reach by providing a suite of digital tools that simplify complex challenges when launching, scaling, and innovating.</p>
        </div>

        {/* Scroll number section */}
        <div className='border-b border-white-10'>
          <ScrollNumBlockComponent block={scrollNumBlocks} />
        </div>

        {/* Hanzo power section */}
        <div className='flex border-b border-white-10 py-[34px] px-[150px]'>
          <p className='text-[32px] text-white-65 text-center'><span className='text-white'>Hanzo has powered over 100 companies</span> from zero to millions of dollars in revenue per month.</p>
        </div>

        {/* Companies section */}
        <div
          ref={scrollContainerRef}
          className='grid grid-flow-col auto-cols-max border-b border-white-10 w-full overflow-x-auto gap-[64px] justify-start items-center no-scroll py-[36px]'
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
        <div className='border-b border-white-10 px-[41px] py-[55px]'>
          <h1 className='text-[32px] mb-[42px]'>OUR IMPACT</h1>
          <p className='text-[20px]'>You don’t have to take our word for it.</p>
          <p className='text-[20px] text-white-65'>Here’s what some of our clients have to say about us.</p>
          <Carousel
            options={{ align: 'center', loop: true }}
            className='w-full mt-16 relative'
            plugins={[EmblaAutoplay({ delay: 5000, stopOnInteraction: true })]}
          >
            <CarouselContent>
              {
                reviews.map((review, index) => (
                  <CarouselItem key={index}>
                    <div className='bg-dark-grey p-8 flex flex-row gap-11'>
                      <img src={review.avatar} alt="avatar" />
                      <div className='flex flex-col justify-between items-start'>
                        <p className='text-xl text-white-65'>{review.title}</p>
                        <p className='text-xl'>{review.text}</p>
                        <div>
                          <h3 className='text-xl'>{review.name}</h3>
                          <h3 className='text-base text-white-65'>{review.position}</h3>
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
        <div className='border-b border-white-10 pt-[55px] pb-38'>
          <h1 className='text-[32px] ml-10 mb-12'>We believe in innovation</h1>
          <Carousel
            options={{ align: 'center', loop: true }}
            className='w-full mt-16 relative'
            plugins={[EmblaAutoplay({ delay: 5000, stopOnInteraction: true })]}
          >
            <CarouselContent className='flex gap-4 justify-center'>
              {
                innovations.map((innovation, index) => (
                  <CarouselItem key={index} className='w-auto flex justify-center basis-auto'>
                    <div className='w-fit flex justify-center'>
                      <img src={innovation.src} alt="innovation" className='h-[497px]' />
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
        <div className='border-b border-white-10 py-[55px] px-[44px]'>
          <h1 className='text-[32px]'>The game-changer in your go-to-market strategy</h1>
          <div className='flex flex-row mt-[48px] gap-[24px]'>
            <div className='flex flex-col'>
              <div className='relative py-[29px] pl-[76px] pr-[26px] bg-dark-grey h-fit'>
                <div className='absolute left-[34px] top-[33px]'>
                  <CustomRocket />
                </div>
                <h2 className='text-[24px]'>Business Launch and Efficiency</h2>
                <p className='text-[18px] text-white-85 mt-[25px]'>Hanzo streamlines the launch and scale-up phases of business growth, utilizing advanced technology to minimize time and costs.</p>
                <p className='text-[18px] text-white-85 mt-[18px]'>It offers a suite of tools that optimize resource management, operations, to ensure seamless transitions through different growth phases.</p>
              </div>
              <div className='flex flex-row items-center justify-start gap-[25px] pl-[30px] mt-[38px]'>
                <CustomCard />
                <span className='text-[24px] text-white-65'>Multi-Currency Payment Solutions</span>
              </div>
              <div className='flex flex-row items-center justify-start gap-[25px] pl-[30px] mt-[38px]'>
                <CustomControl />
                <span className='text-[24px] text-white-65'>Compilance and Digital Trading</span>
              </div>
              <div className='flex flex-row items-center justify-start gap-[25px] pl-[30px] mt-[38px]'>
                <CustomPen />
                <span className='text-[24px] text-white-65'>Advanced AI and User Intersection</span>
              </div>
            </div>
            <div>
              <div className='flex flex-col'>
                <div className='flex flex-row items-center justify-start gap-[25px] pl-[34px] mb-[40px]'>
                  <CustomLighting />
                  <span className='text-[24px] text-white-65'>Light Node Bridges</span>
                </div>
                <div className='relative py-[29px] pl-[76px] pr-[26px] bg-dark-grey h-fit'>
                  <div className='absolute left-[34px] top-[33px]'>
                    <CustomChatgpt />
                  </div>
                  <h2 className='text-[24px]'>Rapid Deployment and Automation</h2>
                  <p className='text-[18px] text-white-85 mt-[25px]'>Hanzo's payment platforms are engineered to support an array of currencies, facilitating smooth and secure transactions globally.</p>
                  <p className='text-[18px] text-white-85 mt-[18px]'>This flexibility enables businesses to expand their customer base internationally without currency barriers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Work with us section */}
        <div className='flex flex-col justify-center items-center border-b border-white-10 py-[55px] px-[52px]'>
          <p className='text-[30px] text-white-65 text-center'>
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
          <Button className='flex gap-2 px-[14px] py-[10px] text-[14px] h-[40px] mt-[52px]'>
            <Phone />
            Schedule Call
          </Button>
        </div>
      </div>
    </div>
  )
};

export default HomeLayout;