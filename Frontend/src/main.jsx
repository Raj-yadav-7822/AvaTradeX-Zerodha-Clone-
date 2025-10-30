import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from './landingPage/home/HomePage.jsx'
import Signup from './landingPage/signup/Signup.jsx'
import Login from './landingPage/Login/Login.jsx'
import AboutPage from './landingPage/about/AboutPage.jsx';
import ProductPage from './landingPage/products/ProductPage.jsx';
import PricingPage from './landingPage/pricing/PricingPage.jsx';
import SupportPage from './landingPage/support/SupportPage.jsx'
import Navbar from './landingPage/Navbar.jsx'
import Footer from './landingPage/Footer.jsx'
import NotFound from './landingPage/NotFound.jsx'
createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/about' element={<AboutPage/>}/>
  <Route path='/product' element={<ProductPage/>}/>
  <Route path='/pricing' element={<PricingPage/>}/>
  <Route path='/support' element={<SupportPage/>}/>
  <Route path='*' element={<NotFound/>}/>
</Routes>

<Footer/>
</BrowserRouter>
)
