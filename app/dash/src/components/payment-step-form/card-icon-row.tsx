import { LockKeyhole } from 'lucide-react'
import Amex from './card-icons/amex'
import Discover from './card-icons/discover'
import Mastercard from './card-icons/mastercard'
import Visa from './card-icons/visa'
import DinersClub from './card-icons/diners-club'
import Jcb from './card-icons/jcb'

//       <span className='hidden sm:flex text-sm'>Secure payments with</span>

const PaymentMethods: React.FC = () => {
  return (
    <div className='flex gap-1 items-center text-muted-1 pb-3'>
      <LockKeyhole className='w-4 h-4'/>
      <span className='hidden sm:flex text-sm'>Secure payments with</span>
      <Amex className='w-9 h-5'/>
      <Discover className='w-9 h-5'/>
      <Mastercard className='w-9 h-5'/>
      <Visa className='w-9 h-5'/>
      <DinersClub className='w-9 h-5'/>
      <Jcb className='w-9 h-5'/>
    </div>
  )
}

export default PaymentMethods
