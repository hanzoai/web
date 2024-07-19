import React from 'react'
import { type LucideProps } from 'lucide-react'

const CustomCard: React.FC<LucideProps> = (props: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.65}
      strokeWidth={1.8}
      d="M1.268 6.556v7.777c0 1.228.995 2.223 2.222 2.223h15.555a2.222 2.222 0 0 0 2.223-2.223V6.556m-20 0V3.222C1.268 1.995 2.263 1 3.49 1h15.555c1.228 0 2.223.995 2.223 2.222v3.334m-20 0h20M5.712 11h3.333"
    />
  </svg>
)

export default CustomCard
