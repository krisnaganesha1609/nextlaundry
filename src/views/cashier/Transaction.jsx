import React from 'react'
import { Helmet } from 'react-helmet-async'
import Topbar from './component/Topbar'
import styles from '../../style'
import TransactionTable from './component/TransactionTable'
import ExportAddBtn from './component/ExportAddBtn'

const CashierTransaction = () => {
  return (
      <>
          <Helmet>
              <title>Transaction | NEXTLAUNDRY</title>
          </Helmet>
          <Topbar title="DASHBOARD > TRANSACTION" />
          <div className='py-2 md:py-4 px-4 md:px-10'>
              <h3 className={`${styles.adminHeading}`}>
                  TRANSACTION - READ DATA
              </h3>
              <ExportAddBtn stmt="Transaction" />
              <br />
              <TransactionTable />
          </div>
      </>
  )
}

export default CashierTransaction