import React from 'react'
import { type LucideProps } from 'lucide-react'

const RightArrow: React.FC<LucideProps> = (props: LucideProps) => (
    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8.33797 7.58293C8.72849 7.97346 8.72849 8.60662 8.33797 8.99715L1.97401 15.3611C1.58348 15.7516 0.950316 15.7516 0.559792 15.3611C0.169267 14.9706 0.169267 14.3374 0.559792 13.9469L6.21665 8.29004L0.559792 2.63318C0.169267 2.24266 0.169267 1.6095 0.559792 1.21897C0.950316 0.828447 1.58348 0.828447 1.97401 1.21897L8.33797 7.58293ZM7.63086 9.29004H6.91734V7.29004H7.63086V9.29004Z" fill="white"/>
    </svg>
)

export default RightArrow
