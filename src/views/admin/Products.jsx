import React from 'react'
import { Helmet } from 'react-helmet-async'
import Topbar from './component/Topbar'
import styles from '../../style'
import ExportAddBtn from './component/ExportAddBtn'
import ProductsTable from './component/ProductsTable'

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Products | NEXTLAUNDRY</title>
      </Helmet>
      <Topbar title="DASHBOARD  >  PRODUCTS" />
      <div className='py-2 md:py-4 px-4 md:px-10'>
        <h3 className={`${styles.adminHeading}`}>
          PRODUCTS - READ DATA
        </h3>
        <ExportAddBtn stmt="Package"/>
        <br />
        <ProductsTable />
      </div>
    </>
  )
}

export default Products