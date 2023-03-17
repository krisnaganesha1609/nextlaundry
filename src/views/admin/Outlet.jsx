import React from 'react'
import { Helmet } from 'react-helmet-async'
import styles from '../../style'
import Topbar from './component/Topbar'
import OutletTable from './component/OutletTable'
import ExportAddBtn from './component/ExportAddBtn'

const Outlet = () => {
    return (
        <>
            <Helmet>
                <title>Outlet | NEXTLAUNDRY</title>
            </Helmet>

            <Topbar title="DASHBOARD  >  OUTLET" />
            <div className='py-2 md:py-4 px-4 md:px-10'>
                <h3 className={`${styles.adminHeading}`}>
                    OUTLET - READ DATA
                </h3>
                <ExportAddBtn stmt="Outlet"/>
                <br />
                <OutletTable />
            </div>
        </>
    )
}

export default Outlet