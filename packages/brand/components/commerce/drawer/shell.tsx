'use client'
import React, {type PropsWithChildren } from 'react'

import { 
  Drawer, 
  DrawerContent, 
  DrawerHandle,
  type DrawerProps,
} from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'

import '../../../style/drawer-handle-overrides.css'

const CommerceDrawer: React.FC<PropsWithChildren & 
  Omit<DrawerProps, 'onOpenChange'> & 
  {
    setOpen: (b: boolean) => void
    handleHandleClicked: () => void
    drawerClx?: string
    mobile?: boolean
    micro?: boolean
  }
> = ({
  children,
  open,
  setOpen,
  modal,
  snapPoints,
  setActiveSnapPoint,
  activeSnapPoint,
  handleHandleClicked,
  drawerClx='',
  mobile=false,
  micro=false,
  ...rest
}) => (
    // @ts-ignore
  <Drawer 
    open={open} 
    onOpenChange={setOpen} 
    modal={modal} 
    snapPoints={snapPoints}
    setActiveSnapPoint={setActiveSnapPoint}
    activeSnapPoint={activeSnapPoint}
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
        //(micro ? (mobile ? 'mt-4 pt-1.5' : 'mt-5 pt-4') : 'mt-5 pt-5'),
        mobile ? 'pt-5' : 'pt-6',
        'w-full h-full',
      )}
       // https://github.com/radix-ui/primitives/discussions/935
      onOpenAutoFocus={(e) => {e.preventDefault()}}
    >
      <DrawerHandle 
        className={cn(
          'absolute top-0 left-0 right-0 mx-auto z-10',
          'flex justify-center items-start',
          'border-t rounded-t-lg border-muted-2',
          mobile ? 'h-5 touch-pan-y' : 'h-6',
        )} 
      >
        <div className={cn(
            // pseudo-handle
          'rounded-[3px] bg-level-3',
          mobile ? 'w-[155px] mt-[5px] h-1.5' : 'w-[180px] mt-[3px] h-2.5 hover:bg-level-4',
          !mobile ? 'cursor-grab active:cursor-grabbing' : '',
        )} />
      </DrawerHandle>
      {children}
    </DrawerContent>
  </Drawer>
)

export default CommerceDrawer
