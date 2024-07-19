import CustomCard from '@/assets/icons/CustomCard';
import CustomChatgpt from '@/assets/icons/CustomChatgpt';
import CustomControl from '@/assets/icons/CustomControl';
import CustomLighting from '@/assets/icons/CustomLighting';
import CustomPen from '@/assets/icons/CustomPen';
import CustomRocket from '@/assets/icons/CustomRocket';
import ScrollNumBlockComponent from '@/blocks/components/scroll-num';
import type ScrollNumBlock from '@/blocks/def/scroll-num';
import type { Block } from '@hanzo/ui/blocks';
import { Button } from '@hanzo/ui/primitives';
import { Phone } from 'lucide-react';
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

const scrollNumBlocks = {
  blockType: 'scroll-num',
  aniNum: ["11", "100", "1B", "120"],
  modifier: [" years", "+", "+", "+"],
  detail: ["Growing Companies", "Companies Scaled", "Client Revenue Generated", "Countries Worldwide"]
} satisfies ScrollNumBlock as Block;

const HomeLayout = () => {
  return (
    <div className="flex mt-[80px] px-[168px] pt-[35px] pb-[57px]">
      <div className="border-l border-r w-full pb-[55px] border-white-10">

        {/* First section */}
        <div className="flex justify-center items-center flex-col pb-[71px] pt-[140px] border-b relative border-white-10">
          <div className='h-[1px] w-[calc(100%+54px)] absolute top-[27px] left-[-27px] border-white-10 border-t'></div>
          <h1 className="text-[48px] font-bold">Cut through the complexities</h1>
          <p className="pt-[19px] text-white-65 text-[18px]">We offer a powerful suite of tools that streamline complex challenges</p>
          <p className="text-white-65 text-[18px]">at every stage of your journey - launching, scaling, and innovating.</p>
          <div className="flex flex-row gap-[12px] mt-[48px]">
            <Button variant="outline" className='text-muted px-[14px] py-[10px] text-[14px] h-[40px]'>Browse Case Studies</Button>
            <Button className='flex gap-2 px-[14px] py-[10px] text-[14px] h-[40px]'>
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
        <div className='grid grid-flow-col auto-cols-max border-b border-white-10 w-full overflow-x-auto gap-[64px] justify-start items-center no-scroll py-[36px]'>
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

        {/* Strategy section */}
        <div className='border-b border-white-10 py-[55px] px-[44px]'>
          <h1 className='text-[32px]'>The game-changer in your go-to-market strategy</h1>
          <div className='flex flex-row mt-[48px] gap-[24px]'>
            <div className='flex flex-col'>
              <div className='relative py-[29px] pl-[76px] pr-[26px] bg-[#1E1E1E] h-fit'>
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
                <div className='relative py-[29px] pl-[76px] pr-[26px] bg-[#1E1E1E] h-fit'>
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