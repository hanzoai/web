declare global {
  interface Window {
    gtag: Function;
  }
}

// https://developers.google.com/analytics/devguides/collection/ga4/ecommerce?client_type=gtag
const sendGAEvent = (name: string, options = {}) => {
  window.gtag('event', name, options)
}

export {
  sendGAEvent as default
}