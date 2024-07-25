declare global {
  interface Window {
    fbq: Function;
    gtag: Function;
  }
}

// https://developers.facebook.com/docs/meta-pixel/reference
const sendFBEvent = (name: string, options = {}) => {
  window.fbq('track', name, options)
}

// https://developers.google.com/analytics/devguides/collection/ga4/ecommerce?client_type=gtag
const sendGAEvent = (name: string, options = {}) => {
  window.gtag('event', name, options)
}

export {
  sendFBEvent,
  sendGAEvent,
}