import React from 'react'
import { Helmet } from 'react-helmet-async';
import ExportAddBtn from './component/ExportAddBtn';
import Topbar from './component/Topbar'
import styles from '../../style'
import UsersTable from './component/UsersTable';

const Users = () => {
  return (
    <>
      <Helmet>
        <title>Users | NEXTLAUNDRY</title>
      </Helmet>

      <Topbar title="DASHBOARD  >  USERS" />
      <div className='py-2 md:py-4 px-4 md:px-10'>
        <h3 className={`${styles.adminHeading}`}>
          USERS - READ DATA
        </h3>
        <ExportAddBtn stmt="User"/>
        <br />
        <UsersTable />
      </div>
    </>
  )
}

export default Users