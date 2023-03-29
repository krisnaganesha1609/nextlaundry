import { Container, Grid } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import DataCard from './component/DataCard'
import LineChart from './component/LineChart'
import { getRequest } from "../../helper/axios-client";
import Topbar from './component/Topbar'
import { useRecoilValue } from "recoil";
import { authAtom } from "../../logic/atoms/auth";
import { usersAtom } from "../../logic/atoms/users";

const Dashboard = () => {
  const user = useRecoilValue(usersAtom)
  const token = useRecoilValue(authAtom)
  const [mem, setMem] = useState(0)
  const [tr, setTr] = useState(0)
  const [to, setTo] = useState(0)

  const memberModelFetcher = async () => {

    if (user.role.toLowerCase() === "admin") {
      await getRequest("api/nextlaundry/admin/members", `Bearer ${token}`).then((res) => {
        const rsp = res.data.members
        setMem(rsp.length)
      }).catch((error) => {
        console.log(error.response)
      })
    }
  } 

  const transModelFetcher = async () => {

    if (user.role.toLowerCase() === "admin") {
      await getRequest("api/nextlaundry/admin/transactions", `Bearer ${token}`).then((res) => {
        const rsp = res.data.all_transactiondata
        setTr(rsp.length)
      }).catch((error) => {
        console.log(error.response)
      })
    }

  } 

  const outletModelFetcher = async () => {

    if (user.role.toLowerCase() === "admin") {
      await getRequest("api/nextlaundry/admin/outlets", `Bearer ${token}`).then((res) => {
        const rsp = res.data.outlet
        setTo(rsp.length)
      }).catch((error) => {
        console.log(error.response)
      })
    }

  } 

  useEffect(() => {
    memberModelFetcher()
    transModelFetcher()
    outletModelFetcher()
  }, []);
  return (
    <>
      <Helmet>
        <title>Dashboard | NEXTLAUNDRY</title>
      </Helmet>
      <Topbar title="DASHBOARD" />
      <div className='py-2 md:py-4 px-4 md:px-10'>
        {/* <Alert /> */}
        <Grid.Container gap={2} justify="center" alignItems='center'>
            <DataCard
              header="Total Transaksi"
              total={tr} />
          <DataCard
            header="Total Member"
            total={mem} />
          <DataCard
            header="Total Outlet"
            total={to}/>
        </Grid.Container>
        <Container fluid alignItems='center' lg>
          <LineChart analytics="Transaction" />

        </Container>
      </div>
    </>
  )
}

export default Dashboard