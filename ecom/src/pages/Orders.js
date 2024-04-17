import React from 'react'
import PageHeader from '../comp/all/PageHeader'
import Navbar from '../comp/all/Navbar'
import OrderList from '../comp/compage/OrderList'

export default function Orders() {
  return (
    <div>
         <div class="page-wrapper">
        <PageHeader />
        <div class="page-body-wrapper">
            <Navbar />
            <OrderList/>
        </div>
    </div>
    </div>
  )
}
