import React from 'react'
import { type LucideProps } from 'lucide-react'

const CustomControl: React.FC<LucideProps> = (props: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={26}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.65}
      strokeWidth={1.818}
      d="M5.207 1.778v9.697m0 0H3.692a2.424 2.424 0 0 0-2.424 2.424v4.243a2.424 2.424 0 0 0 2.424 2.424h1.515m0-9.091h1.515a2.424 2.424 0 0 1 2.424 2.424v4.243a2.424 2.424 0 0 1-2.424 2.424H5.207m0 0v3.636M17.328 1.778v3.636m0 0h-1.515a2.424 2.424 0 0 0-2.424 2.424v10.303a2.424 2.424 0 0 0 2.424 2.425h1.515m0-15.152h1.515a2.424 2.424 0 0 1 2.425 2.424v10.303a2.424 2.424 0 0 1-2.425 2.425h-1.515m0 0v3.636"
    />
  </svg>
)

export default CustomControl
