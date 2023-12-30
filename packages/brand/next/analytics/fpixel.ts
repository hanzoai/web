declare global {
  interface Window {
    fbq: Function;
  }
}

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

export const pageview = () => {
  window.fbq('track', 'PageView')
}

// https://developers.facebook.com/docs/meta-pixel/reference
export const sendFBEvent = (name: string, options = {}) => {
  window.fbq('track', name, options)
}