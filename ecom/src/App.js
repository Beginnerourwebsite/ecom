import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Addprodect from './pages/Addprodect'
import Context from './comp/Context'
import ProductCategory from './pages/ProductCategory'
import ProductList from './pages/ProductList'
import NotFoundPage from './comp/all/NotFoundPage'
import Testout from './test'
import Orders from './pages/Orders'
import Orderdetails from './pages/Orderdetails'
import Register from './pages/Register'
import Profile from './pages/Profile'

export default function App() {
  let [showorhidenav, setshoworhidenav] = useState("block")
  return (
    <div>

      <BrowserRouter>
        <Context.Provider value={{ insert: setshoworhidenav, show: showorhidenav }}>
          <Routes>
            <Route path='/Product' element={<Addprodect />} />
            <Route path='/ProductCategory' element={<ProductCategory />} />
            <Route path='/Productlist' element={<ProductList />} />
            <Route path='/Testout' element={<Testout />} />
            <Route path='/order' element={<Orders />} />
            <Route path='/' element={<Register />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='*' element={<NotFoundPage />} />
            <Route path='/ordertrack/:ids' element={<Orderdetails />} />
          </Routes>
        </Context.Provider>
        <Routes>
          {/* <Route path='/' element={<Addprodect />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}
