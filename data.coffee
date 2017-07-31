module.exports =
  data: [
    {
      '@context': 'hanzo.ai/schema'
      '@type': 'WebsiteHeader'
      type: 'simple'
      logos: [
        {
          '@type': 'WebsiteLogo'
          image: '/img/logo.png'
          alt: 'Hanzo'
          name: 'Hanzo'
          url: '/'
        }
        {
          '@type': 'WebsiteLogo'
          image: '/img/atechstars.png'
          alt: 'A Techstars Company'
          url: 'http://www.techstars.com'
        }
      ]
      menuCollections: [
        {
          '@type': 'WebsiteMenuCollection'
          menus: [
            {
              '@type': 'WebsiteMenu'
              name: 'Solutions'
              links: [
                {
                  name: 'Analytics'
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
                  image: '/img/test-rocket.svg'
                  url: '#'
                }
                {
                  name: 'Commerce'
                  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                  image: '/img/test-rocket.svg'
                  url: '#'
                }
                {
                  name: 'Intelligence'
                  description: 'Lorem ipsum dolor sit amet.'
                  image: '/img/test-rocket.svg'
                  url: '#'
                }
              ]
            }
            {
              '@type': 'WebsiteMenu'
              name: 'Developers'
              links: [
                {
                  name: 'API'
                  description: 'Lorem Descriptio'
                  image: '/img/test-rocket.svg'
                  url: '#'
                }
                {
                  name: 'SDK'
                  description: 'Lorem Descriptio'
                  image: '/img/test-rocket.svg'
                  url: '#'
                }
                {
                  name: 'Open Source'
                  description: 'Lorem Descriptio'
                  image: '/img/test-rocket.svg'
                  url: '#'
                }
              ]
            }
            {
              '@type': 'WebsiteMenu'
              name: 'Pricing'
              url: '#'
            }
            {
              '@type': 'WebsiteMenu'
              name: 'Company'
              links: [
                {
                  name: 'Team'
                  image: '/img/test-rocket.svg'
                  url: '#'
                }
                {
                  name: 'Press'
                  image: '/img/test-rocket.svg'
                  url: '#'
                }
                {
                  name: 'Partners'
                  image: '/img/test-rocket.svg'
                  url: '#'
                }
                {
                  name: 'Careers'
                  image: '/img/test-rocket.svg'
                  url: '#'
                }
                {
                  name: 'Contact'
                  url: '#'
                }
              ]
            }
          ]
        }
        {
          '@type': 'WebsiteMenuCollection'
          menus: [
            {
              '@type': 'WebsiteMenu'
              name: 'Support'
              url: '#'
            }
            {
              '@type': 'WebsiteMenu'
              name: 'Sign In'
              url: '#'
            }
          ]
        }
      ]
    }
  ]
