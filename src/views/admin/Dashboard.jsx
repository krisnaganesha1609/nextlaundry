import { Container, Grid } from '@nextui-org/react'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { dataCard } from '../../model/constants'
import Alert from './component/Alert'
import DataCard from './component/DataCard'
import LineChart from './component/LineChart'
import Topbar from './component/Topbar'

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | NEXTLAUNDRY</title>
      </Helmet>
      <Topbar title="DASHBOARD" />
      <div className='py-2 md:py-4 px-4 md:px-10'>
        <Alert />
        <Grid.Container gap={2} justify="center" alignItems='center'>
          {dataCard.map((item, i) => (
            <DataCard
              key={i}
              header={item.header}
              total={item.total}
              percent={item.percent}
              trending={item.trending}
              footer={item.footer} />
          ))}
        </Grid.Container>
        <Container fluid alignItems='center' lg>
          <LineChart analytics="Pickup" />

        </Container>
      </div>
    </>
  )
}

export default Dashboard