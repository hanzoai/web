import Link from 'next/link'

import { Separator } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

const LinksRow: React.FC<{
  className?: string
}> = ({
  className=''
}) => (
  <div className={cn('flex flex-col', className)}>
    <Separator/>
    <div className='flex gap-4 text-sm py-2'>
      {/* TODO: add Refund policy and Privacy policy links */}
      <Link href=''>Refund policy</Link>
      <Link href=''>Privacy policy</Link>
    </div>
  </div>   
)

export default LinksRow
