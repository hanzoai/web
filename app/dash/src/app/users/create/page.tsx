"use client"

import { observer } from "mobx-react";
import UserForm from '@/components/form/user-form'

const UserPage = observer(() => {
  
  return (
    <UserForm create={true}/>
  )
})

export default UserPage;