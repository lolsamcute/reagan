import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/homepage';
import { BrowserRouter as Router , Route , Routes  } from 'react-router-dom';
import Payment from './pages/payment';
import Bitcoin from './pages/card';
import Details from './pages/details';
import Success from './pages/success';
import Paywithpaypal from './pages/paywithpaypal';

function App() {
  

  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/payment' element={<Payment/>} />
            <Route path='/cards' element={<Bitcoin/>} />
            <Route path='/details' element={<Details/>} />
            <Route path='/success' element={<Success/>} />
            <Route path='/paywithpaypal' element={<Paywithpaypal/>} />
          </Routes>
        </Router>
    </div>
  )
}

export default App
