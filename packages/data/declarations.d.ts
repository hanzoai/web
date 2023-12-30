  // Conforms to how we have set up svgr to work in next.
  // https://github.com/gregberge/svgr/issues/546
declare module "*.svg" {
  import React from 'react'
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>
  export default SVG
}