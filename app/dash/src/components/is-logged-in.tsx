import Router from 'next/router'
import {
  useEffect,
} from 'react'

import { useStore } from '@/stores'

export default (PageComponent: any) => (props: any) => {
  const store = useStore()
  const { credentialStore } = store
  useEffect(() => {
    if (!credentialStore.isLoggedIn) {
      Router.push('/')
      return
    }

    if (!credentialStore.org) {
      credentialStore.getOrg()
        .then(() => {
          // console.log('still logged in')
        }).catch((e: any) => {
          // console.log('not logged in, logging out')

          credentialStore.logout()
          Router.push('/')
        })
    }
  }, [])

  return (
    <PageComponent {...props} />
  )
}
