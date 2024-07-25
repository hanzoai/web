'use client'
import React, {type PropsWithChildren } from 'react'
import { observer } from 'mobx-react-lite'

import { 
  Drawer, 
  DrawerContent, 
  DrawerHandle,
  type DrawerProps,
} from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import '../../../style/drawer-handle-overrides.css'
import { useCommerceDrawer } from '../../../commerce/ui/context'

const CommerceDrawer: React.FC<PropsWithChildren & 
  Omit<DrawerProps, 
    'onOpenChange' | 
    'open' | 
    'snapPoints' | 
    'modal' |
    'setActiveSnapPoint' | 
    'activeSnapPoint' 
  > & 
  {
    handleHandleClicked: () => void
    drawerClx?: string
  }
> = observer(({
  children,
  handleHandleClicked,
  drawerClx='',
  ...rest
}) => {
  
  const drawer = useCommerceDrawer()

  return (
    <Drawer 
      open={drawer.open} 
      onOpenChange={() => {}} 
      modal={drawer.modal} 
      snapPoints={drawer.points}
      activeSnapPoint={drawer.activePoint}
      setActiveSnapPoint={drawer.onActivePointChanged.bind(drawer)}
      fastDragSkipsToEnd={false}
      dragHandleOnly={true}
      handleHandleClicked={handleHandleClicked}
      extendHandleDragRegion={false}
  //    debugOutput
      {...rest}
    >
      <DrawerContent 
        defaultHandle={false} 
        className={cn(
          'border-0',
          drawer.isMobile ? 'pt-5' : 'pt-6',
          'w-full h-full',
        )}
        // https://github.com/radix-ui/primitives/discussions/935
        onOpenAutoFocus={(e) => {e.preventDefault()}}
      >
        <DrawerHandle 
          className={cn(
            'absolute top-0 left-0 right-0 mx-auto z-10',
            'flex justify-center items-start',
            'border-t rounded-t-lg border-muted-3',
            drawer.isMobile ? 'h-5 touch-pan-y' : 'h-6',
          )} 
        >
          <div className={cn(
              // pseudo-handle
            'rounded-[3px] bg-level-3',
            drawer.isMobile ? 'w-[155px] mt-[5px] h-1.5' : 'w-[180px] mt-[3px] h-2.5 hover:bg-level-4',
            !drawer.isMobile ? 'cursor-grab active:cursor-grabbing' : '',
          )} />
        </DrawerHandle>
        {children}
      </DrawerContent>
    </Drawer>
  )
})


export default CommerceDrawer
