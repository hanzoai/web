import React from 'react'
import { type LucideProps } from 'lucide-react'

const Arrow: React.FC<LucideProps> = (props: LucideProps) => (
  <svg viewBox="0 0 103 9" fill="currentColor" {...props}>
    <path d="M101.884 4.7432C102.08 4.54794 102.08 4.23136 101.884 4.0361L98.7025 0.854115C98.5072 0.658852 98.1907 0.658852 97.9954 0.854115C97.8001 1.04938 97.8001 1.36596 97.9954 1.56122L100.824 4.38965L97.9954 7.21808C97.8001 7.41334 97.8001 7.72992 97.9954 7.92518C98.1907 8.12044 98.5072 8.12044 98.7025 7.92518L101.884 4.7432ZM0.55249 4.88965H101.531V3.88965H0.55249V4.88965Z" fill="white"/>
  </svg>  
)

export default Arrow
