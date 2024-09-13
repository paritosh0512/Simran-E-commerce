import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Slider from './Component/Slider.jsx'
import SignInSignUpModal from './Component/SignInSignUpModal.jsx'
import AboutUs from './Component/AboutUs.jsx'
import ContactUs from './Component/ContactUs.jsx'
import PrivacyPolicy from './Component/PrivacyPolicy.jsx'
import ProductPage from './Component/ProductPage.jsx'







let router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      

        <Route path='' element={<Slider/>}/>
        <Route path='/signinsignup' element={<SignInSignUpModal/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
        <Route path='/productpage' element={<ProductPage/>}/>



    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
