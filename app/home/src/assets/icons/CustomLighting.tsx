import React from 'react'
import { type LucideProps } from 'lucide-react'

const CustomLighting: React.FC<LucideProps> = (props: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={26}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinejoin="round"
      strokeOpacity={0.65}
      strokeWidth={1.9}
      d="M19.9 9.47h-7.135a.588.588 0 0 1-.588-.588V1.707c0-.582-.755-.81-1.078-.326l-9.49 14.234c-.26.39.02.914.49.914h7.136c.325 0 .589.264.589.589v7.174c0 .582.754.811 1.077.327l9.49-14.234a.588.588 0 0 0-.49-.914Z"
    />
  </svg>
)

export default CustomLighting
