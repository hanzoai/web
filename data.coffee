module.exports =
  data: {
    '@context': 'hanzo.ai/schema'
    '@type': 'Website'
    header: {
      '@type': 'WebsiteHeader'
      type: 'complex'
      logos: [
        {
          '@type': 'WebsiteLogo'
          image: '/img/logo.svg'
          alt: 'Hanzo'
          name: ''
          url: '/'
        }
      ]
      menuCollections: [
        {
          '@type': 'WebsiteMenuCollection'
          menus: [
            {
              '@type': 'WebsiteMenu'
              name: 'Developers'
              links: [
                {
                  '@type': 'WebsiteMenuLink'
                  name: 'Introduction to Hanzo'
                  description: 'What is Hanzo?'
                  # image: '/img/test-rocket.svg'
                  url: 'https://docs.hanzo.ai/docs/introduction-10'
                }
                {
                  '@type': 'WebsiteMenuLink'
                  name: 'API Reference'
                  description: 'Request and Response Examples'
                  # image: '/img/test-rocket.svg'
                  url: 'https://docs.hanzo.ai/reference'
                }
              ]
            }
            {
              '@type': 'WebsiteMenu'
              name: 'Open Source'
              links: [
                {
                  '@type': 'WebsiteMenuLink'
                  name: 'Javascript SDK'
                  description: 'Start building your store with our Javascript & Node SDK.'
                  # image: '/img/test-rocket.svg'
                  url: 'https://github.com/hanzoai/hanzo.js'
                }
                {
                  '@type': 'WebsiteMenuLink'
                  name: 'Shop.js'
                  description: 'Checkout open source custom payment flow UI library.'
                  # image: '/img/test-rocket.svg'
                  url: 'https://getshopjs.com'
                }
                {
                  '@type': 'WebsiteMenuLink'
                  name: 'Other Projects'
                  description: "Look at other software we've worked on."
                  # image: '/img/test-rocket.svg'
                  url: 'https://github.com/hanzoai'
                }
              ]
            }
            # {
            #   '@type': 'WebsiteMenu'
            #   name: 'Solutions'
            #   links: [
            #     {
            #       '@type': 'WebsiteMenuLink'
            #       name: 'Analytics'
            #       description: 'Real time actionable insights. Fully integrated from day one.'
            #       # image: '/img/test-rocket.svg'
            #       url: 'analytics'
            #     }
            #     {
            #       '@type': 'WebsiteMenuLink'
            #       name: 'Commerce'
            #       description: 'Checkout optimized for convertions. Proven mobile checkout experience.'
            #       # image: '/img/test-rocket.svg'
            #       url: 'commerce'
            #     }
            #     {
            #       '@type': 'WebsiteMenuLink'
            #       name: 'Marketing'
            #       description: 'AI optimized marketing. Meet your automated sales engine.'
            #       # image: '/img/test-rocket.svg'
            #       url: 'marketing'
            #     }
            #   ]
            # }
            # {
            #   '@type': 'WebsiteMenu'
            #   name: 'Developers'
            #   links: [
            #     {
            #       '@type': 'WebsiteMenuLink'
            #       name: 'API'
            #       # image: '/img/test-rocket.svg'
            #       url: 'https://docs.hanzo.io/reference'
            #     }
            #     {
            #       '@type': 'WebsiteMenuLink'
            #       name: 'Javascript SDK'
            #       # image: '/img/test-rocket.svg'
            #       url: 'https://github.com/hanzo-io/hanzo.js'
            #     }
            #     {
            #       '@type': 'WebsiteMenuLink'
            #       name: 'Open Source'
            #       # image: '/img/test-rocket.svg'
            #       url: 'https://github.com/hanzo-io/'
            #     }
            #   ]
            # }
            # {
            #   '@type': 'WebsiteMenu'
            #   name: 'Company'
            #   links: [
            #     {
            #       '@type': 'WebsiteMenuLink'
            #       name: 'Team'
            #       # image: '/img/test-rocket.svg'
            #       url: '#'
            #     }
            #     {
            #       '@type': 'WebsiteMenuLink'
            #       name: 'Press'
            #       # image: '/img/test-rocket.svg'
            #       url: '#'
            #     }
            #     {
            #       '@type': 'WebsiteMenuLink'
            #       name: 'Partners'
            #       # image: '/img/test-rocket.svg'
            #       url: '#'
            #     }
            #     {
            #       '@type': 'WebsiteMenuLink'
            #       name: 'Careers'
            #       # image: '/img/test-rocket.svg'
            #       url: '#'
            #     }
            #     {
            #       '@type': 'WebsiteMenuLink'
            #       name: 'Contact'
            #       url: '#'
            #     }
            #   ]
            # }
            # {
            #   '@type': 'WebsiteMenu'
            #   name: 'Pricing'
            #   url: '#'
            # }
          ]
        }
        {
          '@type': 'WebsiteMenuCollection'
          menus: [
            # {
            #   '@type': 'WebsiteMenu'
            #   name: 'Support'
            #   url: 'https://docs.hanzo.io/discuss'
            # }
            {
              '@type': 'WebsiteMenu'
              name: 'Sign In'
              url: 'https://dash.hanzo.io'
            }
          ]
        }
      ]
    }
    # main: [
    #   {
    #     '@type': 'WebsiteSection'
    #     content: [
    #       {
    #         '@type': 'WebsiteText'
    #         text: 'Put your business on autopilot'
    #         level: 'h1'
    #       }
    #       {
    #         '@type': 'WebsiteLink'
    #         class: 'button'
    #         text: 'JOIN THE BETA +'
    #         url: '#'
    #       }
    #       {
    #         '@type': 'WebsiteLink'
    #         class: 'button important'
    #         text: 'CHECK OUR DOCS >'
    #         url: '#'
    #       }
    #       {
    #         '@type': 'WebsiteImage'
    #         class: 'bg-stars'
    #         src: '/img/stars.svg'
    #       }
    #     ]
    #   }
    #   {
    #     '@type': 'WebsiteSection'
    #     class: 'scale-your-business'
    #     content: [
    #       {
    #         '@type': 'WebsiteImage'
    #         class: 'phone-bb'
    #         src: '/img/3diphone_bb_final.png'
    #         alt: 'Bellabeat'
    #       }
    #       {
    #         '@type': 'WebsiteImage'
    #         class: 'phone-kanoa'
    #         src: '/img/3diphone_kanoa_final.png'
    #         alt: 'KANOA'
    #       }
    #       {
    #         '@type': 'WebsiteImage'
    #         class: 'phone-kanoa'
    #         src: '/img/3diphone_stoned_final.png'
    #         alt: 'Stoned Audio'
    #       }
    #     ]
    #   }
    # ]
    footer: {
      '@type': 'WebsiteFooter'
      logos: [
        {
          '@type': 'WebsiteLogo'
          image: '/img/logo-dark.svg'
          alt: 'Hanzo'
          name: 'Hanzo'
          url: '/'
        }
        {
          '@type': 'WebsiteLogo'
          image: '/img/atechstars-dark.png'
          alt: 'A Techstars Company'
          url: 'http://www.techstars.com'
        }
      ]
      menuCollections: [
        # {
        #   '@type': 'WebsiteMenuCollection'
        #   menus: [
        #     {
        #       '@type': 'WebsiteMenu'
        #       name: 'Solutions'
        #       links: [
        #         {
        #           '@type': 'WebsiteMenuLink'
        #           name: 'Analytics'
        #           url: 'analytics'
        #         }
        #         {
        #           '@type': 'WebsiteMenuLink'
        #           name: 'Commerce'
        #           url: 'commerce'
        #         }
        #         {
        #           '@type': 'WebsiteMenuLink'
        #           name: 'Marketing'
        #           url: 'marketing'
        #         }
        #       ]
        #     }
        #   ]
        # }
        # {
        #   '@type': 'WebsiteMenuCollection'
        #   menus: [
        #     {
        #       '@type': 'WebsiteMenu'
        #       name: 'Developers'
        #       links: [
        #         {
        #           '@type': 'WebsiteMenuLink'
        #           name: 'Introduction to Hanzo'
        #           # description: 'Lorem Descriptio'
        #           # image: '/img/test-rocket.svg'
        #           url: 'https://docs.hanzo.ai/docs/introduction-10'
        #         }
        #         {
        #           '@type': 'WebsiteMenuLink'
        #           name: 'API Reference'
        #           # description: 'Lorem Descriptio'
        #           # image: '/img/test-rocket.svg'
        #           url: 'https://docs.hanzo.ai/reference'
        #         }
        #       ]
        #     }
        #   ]
        # }
        # {
        #   '@type': 'WebsiteMenuCollection'
        #   menus: [
        #     {
        #       '@type': 'WebsiteMenu'
        #       name: 'Open Source'
        #       links: [
        #         {
        #           '@type': 'WebsiteMenuLink'
        #           name: 'Javascript SDK'
        #           # description: 'Lorem Descriptio'
        #           # image: '/img/test-rocket.svg'
        #           url: 'https://github.com/hanzoai/hanzo.js'
        #         }
        #         {
        #           '@type': 'WebsiteMenuLink'
        #           name: 'Shop.js'
        #           # description: 'Lorem Descriptio'
        #           # image: '/img/test-rocket.svg'
        #           url: 'https://getshopjs.com'
        #         }
        #         {
        #           '@type': 'WebsiteMenuLink'
        #           name: 'Other Projects'
        #           # description: 'Lorem Descriptio'
        #           # image: '/img/test-rocket.svg'
        #           url: 'https://github.com/hanzoai'
        #         }
        #       ]
        #     }
        #   ]
        # }

        # {
        #   '@type': 'WebsiteMenuCollection'
        #   menus: [
        #     {
        #       '@type': 'WebsiteMenu'
        #       name: 'Company'
        #       links: [
        #         {
        #           '@type': 'WebsiteMenuLink'
        #           name: 'Team'
        #           # image: '/img/test-rocket.svg'
        #           url: '#'
        #         }
        #         {
        #           '@type': 'WebsiteMenuLink'
        #           name: 'Press'
        #           # image: '/img/test-rocket.svg'
        #           url: '#'
        #         }
        #         {
        #           '@type': 'WebsiteMenuLink'
        #           name: 'Partners'
        #           # image: '/img/test-rocket.svg'
        #           url: '#'
        #         }
        #         {
        #           '@type': 'WebsiteMenuLink'
        #           name: 'Careers'
        #           # image: '/img/test-rocket.svg'
        #           url: '#'
        #         }
        #         {
        #           '@type': 'WebsiteMenuLink'
        #           name: 'Contact'
        #           url: '#'
        #         }
        #       ]
        #     }
        #   ]
        # }
        # {
        #   '@type': 'WebsiteMenuCollection'
        #   menus: [
        #     {
        #       '@type': 'WebsiteMenu'
        #       name: 'Pricing'
        #       url: '#'
        #     }
        #   ]
        # }
        # {
        #   '@type': 'WebsiteMenuCollection'
        #   menus: [
        #     {
        #       '@type': 'WebsiteMenu'
        #       name: 'Support'
        #       url: 'https://docs.hanzo.io/discuss'
        #     }
        #   ]
        # }
        # {
        #   '@type': 'WebsiteMenuCollection'
        #   menus: [
        #     {
        #       '@type': 'WebsiteMenu'
        #       name: 'Sign In'
        #       url: 'https://dash.hanzo.io'
        #     }
        #   ]
        # }
      ]
    }
  }
