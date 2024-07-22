import '@/blocks/registerComponents'

import DesktopAllCards from './_page/desktop'
import MobileAllCards from './_page/mobile'

const Page = () => {
  return (<>
    <DesktopAllCards clx='hidden md:flex pt-[80px]'/>
    <MobileAllCards clx='md:hidden pt-[44px]'/>
  </>)
}

export default Page
