import { Button, Grid } from '@nextui-org/react'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import styles from '../../style'
import Topbar from './component/Topbar'
import { addicon, exporticon } from '../../assets'
import OutletTable from './component/OutletTable'

const Outlet = () => {
    const expicons = <img src={exporticon
    } />

    const addicons = <img src={addicon
    } />
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
                <Grid.Container justify='flex-end' gap={1}>
                    <Grid>
                        <Button icon={expicons} bordered color="gradient" auto className={`font-righteous z-0`}>
                            Export All Data
                        </Button>
                    </Grid>
                    <Grid>
                        <Button icon={addicons} bordered color="gradient" auto className={`font-righteous z-0`}>
                            Add Outlet
                        </Button>
                    </Grid>
                </Grid.Container>
                <br />
                <OutletTable />
            </div>
        </>
    )
}

export default Outlet