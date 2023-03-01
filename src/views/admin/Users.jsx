import React from 'react'
import { Helmet } from 'react-helmet-async';
import Topbar from './component/Topbar'

const Users = () => {
  return (
    <>
      <Helmet>
        <title>Users | NEXTLAUNDRY</title>
      </Helmet>

      <Topbar title="DASHBOARD  >  USERS"/>
    </>
  )
}

export default Users