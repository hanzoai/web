import React from 'react'
import Image from 'next/image'

  // these both have ok heights, so just render them
import SVG_cdax from './svg/logo-cdax.svg'
import SVG_gda_capital from './svg/logo-gda-capital.svg'

const MF = 0.6 // mobile fraction

const lgclx = 'hidden lg:block'
const smclx = 'lg:hidden'

  // re wrap position: https://stackoverflow.com/a/50381928/11645689
const TrustLogosGrid: React.FC = () => (
  <div 
    className={
      'not-typography flex flex-row flex-wrap lg:flex-nowrap justify-center sm:px-[8vw] md:justify-between items-center ' + 
      'lg:px-0 gap-4 text-foreground w-full lg:mx-auto max-w-screen-lg'
    }
  >
    <Image src='/assets/content/logos/logo_vera.png' width={138} height={37} alt='Vera logo' className={lgclx}/>
    <Image src='/assets/content/logos/logo_vera.png' width={138 * MF} height={37 * MF} alt='Vera logo' className={smclx}/>
    <SVG_cdax width={102} height={33} className={lgclx}/>
    <SVG_cdax width={102 * MF} height={33 * MF} className={smclx}/>
    <Image src='/assets/content/logos/logo_mc_consulting.png' alt='MC2 logo' width={178} height={28} className={lgclx}/>
    <Image 
      src='/assets/content/logos/logo_mc_consulting.png' 
      alt='MC2 logo' 
      width={178 * MF} 
      height={28 * MF} 
      className={smclx}
    />
    <hr className='md:hidden' style={{ flexBasis: '100%', height: 0, margin: 0, border: 0 }} />
    <SVG_gda_capital width={142} height={52} className={lgclx}/>
    <SVG_gda_capital width={142 * MF} height={52 * MF} className={smclx}/>
    <Image src='/assets/content/logos/logo_viscount.png' alt='Viscount logo' width={150} height={43} className={lgclx}/>
    <Image src='/assets/content/logos/logo_viscount.png' alt='Viscount logo' width={150 * MF} height={43 * MF} className={smclx}/>
  </div>
)


export default TrustLogosGrid
