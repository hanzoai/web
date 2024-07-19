import React from 'react'
import { type LucideProps } from 'lucide-react'

const CustomRocket: React.FC<LucideProps> = (props: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth={1.622}
      d="M5.444 12.351H3.362c-.82 0-1.342-.878-.95-1.598l1.757-3.22a2.162 2.162 0 0 1 1.898-1.128h4.1m-4.723 5.946 4.205 4.204m-4.205-4.204 4.723-5.946m-.518 10.15v2.083c0 .82.878 1.342 1.598.95l3.22-1.757a2.162 2.162 0 0 0 1.128-1.898v-4.1m-5.946 4.722 5.946-4.722m0 0c3.057-2.802 5.054-5.839 5.363-9.752a.962.962 0 0 0-1.039-1.039c-3.913.31-6.95 2.306-9.752 5.363M3.222 21h-1.14A1.081 1.081 0 0 1 1 19.919v-1.141A2.222 2.222 0 1 1 3.222 21Z"
    />
  </svg>
)

export default CustomRocket
