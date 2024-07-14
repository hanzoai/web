'use client'

import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@hanzo/ui/primitives'

const ThemeToggle: React.FC = () => {

  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => {setTheme(theme === 'light' ? 'dark' : 'light')}}
    >
      <Sun className='h-[1.5rem] w-[1.3rem] dark:hidden' />
      <Moon className='hidden h-5 w-5 dark:block' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}

export default ThemeToggle
