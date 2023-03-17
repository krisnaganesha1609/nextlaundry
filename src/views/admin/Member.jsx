import React from 'react'
import { Helmet } from 'react-helmet-async'
import styles from '../../style'
import Topbar from './component/Topbar'
import MemberTable from './component/MemberTable'
import ExportAddBtn from './component/ExportAddBtn'

const Member = () => {
  return (
    <>
      <Helmet>
        <title>Member | NEXTLAUNDRY</title>
      </Helmet>

      <Topbar title="DASHBOARD  >  MEMBER" />
      <div className='py-2 md:py-4 px-4 md:px-10'>
        <h3 className={`${styles.adminHeading}`}>
          MEMBER - READ DATA
        </h3>
        <ExportAddBtn stmt="Member"/>
        <br />
        <MemberTable />
      </div>
    </>
  )
}

export default Member