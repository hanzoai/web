'use client'

import { cn } from '@hanzo/ui/util'

// :aa TODO: move to hanzo/ui/primitives
const SplinePlayer: React.FC<{
  src: string,
  className?: string
}> = ({
  src,
  className
}) => {
  return (
    <video src={src} className={cn('!w-full !h-auto pointer-events-none', className)} autoPlay loop muted />
  )
}

export default SplinePlayer