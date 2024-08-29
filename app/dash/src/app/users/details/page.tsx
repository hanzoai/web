"use client"

import { observer } from "mobx-react";
import { useSearchParams } from "next/navigation";
import UserForm from '@/components/form/user-form'
import { useStore } from "@/stores";

const UserPage = observer(() => {
  const { usersStore } = useStore()

  const searchParams = useSearchParams()
  const userId = searchParams.get('id')

  if (userId) {
    usersStore.getUser(userId).catch((e: any) => {
      console.log('user page error', e)
    })
  } else {
    console.log('parameter error')
    return
  }

  return (
    <UserForm userId={userId} create={false}/>
  )
})

export default UserPage;