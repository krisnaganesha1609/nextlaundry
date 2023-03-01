import { Button, Grid } from '@nextui-org/react'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import styles from '../../style'
import { addicon, exporticon } from '../../assets'

import Topbar from './component/Topbar'
import MemberTable from './component/MemberTable'

const Member = () => {
  const expicons = <img src={exporticon
  } />

  const addicons = <img src={addicon
  } />
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
        <Grid.Container justify='flex-end' gap={1}>
          <Grid>
            <Button icon={expicons} bordered color="gradient" auto className={`font-righteous z-0`}>
              Export All Data
            </Button>
          </Grid>
          <Grid>
            <Button icon={addicons} bordered color="gradient" auto className={`font-righteous z-0`}>
              Add Member
            </Button>
          </Grid>
        </Grid.Container>
        <br />
        <MemberTable />
      </div>
    </>
  )
}

export default Member