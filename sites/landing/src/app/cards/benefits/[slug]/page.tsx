'use client'

import { notFound, useRouter } from "next/navigation"
import { ChevronLeft } from 'lucide-react'

import { Button } from "@hanzo/ui/primitives"
import { ImageBlockComponent } from "@hanzo/ui/blocks"

import benefits from "@/content/cards/benefits"

type Props = {
  params: { slug: string }
}

const Page = ({ params }: Props) => {
  const router = useRouter()
  
  const benefit = benefits.find(benefit => benefit.id === params.slug)

  if (!benefit) {
    notFound()
  }

  return (
    <div className={'flex flex-col gap-4 pt-11'}>
      <div className='flex gap-4 items-center self-start cursor-pointer px-4'>
        <Button size='icon' variant='ghost' onClick={() => router.back()}>
          <ChevronLeft/>
        </Button>
        <div className="flex gap-3 items-center">
          <div>{benefit.title}</div>
          {benefit.icon}
        </div>
      </div>
      <p className="text-xs px-4">{benefit.description}</p>
      <ImageBlockComponent
        block={{blockType: 'image', ...benefit.img}}
        className='w-full h-auto max-w-full'
      />
      <div className="flex gap-4 px-4">
        <Button variant='outline' onClick={() => router.push('/cards')} className="w-full">
          View All Cards
        </Button>
        <Button variant='primary' onClick={() => router.push('/compare')} className="w-full">
          Compare Cards
        </Button>
      </div>
    </div>
  )
}

export default Page
