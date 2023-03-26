import React from 'react'
import { Helmet } from 'react-helmet-async'
import Topbar from './component/Topbar'
import styles from '../../style'
import LogTable from './component/LogTable'


const Log = () => {
    return (
        <>
            <Helmet>
                <title>Log | NEXTLAUNDRY</title>
            </Helmet>
            <Topbar title="DASHBOARD > LOG" />
            <div className='py-2 md:py-4 px-4 md:px-10'>
                <h3 className={`${styles.adminHeading}`}>
                    LOG HISTORY - READ DATA
                </h3>
                {/* Add Button For Any Log Actions Here */}
                <br />
                <LogTable />
            </div>
        </>
    )
}

export default Log