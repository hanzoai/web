import type { TwFontDesc } from '@hanzo/ui/tailwind' 

// from next repo
type NextFont = {
  className: string
  style: { fontFamily: string; fontWeight?: number; fontStyle?: string }
}

// from next repo
type NextFontWithVariable = NextFont & {
  variable: string
}


/*
  NextFontDesc and TwFontDesc have to be seperate because they are needed 
  at different times during the next compile / build.  Otherwise a nasty 
  race condition happens! That's why they are in different files.
*/

interface NextFontDesc extends TwFontDesc {
  nextFont: NextFontWithVariable 
}

export {
  type NextFontDesc as default,
  type NextFontWithVariable,
}