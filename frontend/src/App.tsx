import React, { ReactElement } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import './App.css';
import { AppProvider } from './context/AppProvider'
import {Main} from './pages/Main'
import {ProductDetail} from './pages/ProductDetail'
import {OrderConfirmed} from './pages/OrderConfirmed';

export function App(): ReactElement {

  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/*       <Route path="/checkout" component={Checkout} /> */}
          <Route path="/ordercompleted" element={<OrderConfirmed />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}