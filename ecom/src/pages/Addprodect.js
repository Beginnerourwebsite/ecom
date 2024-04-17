import React from 'react'
import PageHeader from '../comp/all/PageHeader'
import Navbar from '../comp/all/Navbar'

import InsertAddproduct from '../comp/compage/InsertAddproduct'

export default function Addprodect() {
  return (
    <div class="page-wrapper">
      <PageHeader/>
      <div class="page-body-wrapper">
        <Navbar/>
        <InsertAddproduct/>
      </div>
    </div>
  )
}
