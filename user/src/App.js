import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Signup from './page/Signup'
import Forgetpassword from './page/Forgetpassword'
import Items from './page/Items'
import Test from './Test'
import Context from './comp/all/Context'
import Cart from './page/Cart'
import Checkout from './page/Checkout'
import Confim from './page/Confim'
import Order from './comp/all/Order'

export default function App() {
  let [universalstate, setuniversalstate] = useState({
    api: [],
    id: '0',
    add: 0
  })
  return (
    <Context.Provider value={[universalstate, setuniversalstate]}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signUp' element={<Signup />} />
          <Route path='/forgot' element={<Forgetpassword />} />
          <Route path='/item' element={<Items />} />
          <Route path='/Test' element={<Test />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='/Order' element={<Order />} />
          <Route path='/confirm/:id/:color/:data' element={<Confim />} />
        </Routes>


      </BrowserRouter>
    </Context.Provider>

  )
}

