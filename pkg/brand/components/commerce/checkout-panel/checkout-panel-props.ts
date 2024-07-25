interface CheckoutPanelProps {
  step: number
  stepNames: string[]
  onLeave:() => void
  clx?: string
}

export {
  type CheckoutPanelProps as default 
}