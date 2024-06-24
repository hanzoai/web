'use client'
import React from 'react'

import { Button, Card } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import AILogo from './icons/AI'
import type { ChatbotSuggestedQuestion } from '../types'
import AskAI from './icons/AskAI'
import { Plus } from 'lucide-react'

const ChatWidget: React.FC<{
  title: string
  chatbotUrl: string
  subtitle?: string
  question?: string
  buttonClx?: string
  /* 
    ChatBotSuggestQuestion.icon
    Currently supports these icons from remix icons (https://remixicon.com/):
      GlobalLineIcon,
      ShieldFlashLineIcon,
      BankCardLineIcon,
      GroupLineIcon,
      QuestionnaireLineIcon
  */
  suggestedQuestions?: ChatbotSuggestedQuestion[]
}> = ({
  title,
  chatbotUrl,
  subtitle,
  question,
  suggestedQuestions,
  buttonClx = ''
}) => {

    const [showChatbot, setShowChatbot] = React.useState<boolean>(false)

    const onClick = () => { setShowChatbot(!showChatbot) }

    const searchParams = new URLSearchParams()
    if (question) {
      searchParams.append('question', question)
    }
    if (suggestedQuestions) {
      searchParams.append('sQuestions', suggestedQuestions.map(({ message }) => message).join(','))
      searchParams.append('sHeadings', suggestedQuestions.map(({ heading }) => heading).join(','))
      searchParams.append('sIcons', suggestedQuestions.map(({ icon }) => icon).join(','))
    }

    const iframeSrc = `${chatbotUrl}?${searchParams.toString()}`

    return (<>
      <div className={
        'fixed bottom-0 sm:bottom-16 right-0 w-full h-full ' +
        'sm:max-w-[400px] sm:max-h-[550px] sm:px-4 z-floating ' +
        (showChatbot ? 'flex' : 'hidden')
      }>
        <Card className='flex flex-col h-full w-full'>
          <div className='flex px-4 py-2 h-12 bg-level-0 items-center justify-between'>
            <h3 className='font-semibold font-heading'>{title} <span className='opacity-60'>{subtitle}</span></h3>
            <Button onClick={onClick} variant='link' size='icon' className='w-fit sm:hidden'>
              <Plus width={28} height={28} className=' rotate-45'/>
            </Button>
          </div>
          <iframe src={iframeSrc} className='h-full' />
        </Card>
      </div>

      <AskAI
        width={41}
        onClick={onClick}
        className={cn(
          // z-index should be below anything in commerce-iu (buy drawer and checkout widget)
          'fixed bottom-[350px] right-5 z-floating cursor-pointer',
          'hover:drop-shadow-[0_2px_6px_rgba(255,255,255,1)]',
          'transition-transform -mr-4 z-[16]',
          showChatbot ? 'hidden' : '',
          buttonClx
        )}
        strokeWidth={1}
      />
    </>)
  }

export default ChatWidget
