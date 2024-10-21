

import React from 'react'
import { Route, Routes, useLocation} from 'react-router-dom'
import HomeComponent from './home'
import AboutComponent from './about'
import DoctorComponent from './doctor'
import NavbarComponent from './Navbar'
import StudentComponent from './Boburxon'
import NotFoundComponent from './404'
import AuthComponent from './auth'
import ProductsComponent from './Products'
import ServicesComponent from './Services'
import GaleryComponent from './Galery'


const RouterComponent = () => {

  let location = useLocation();

  const hiddenNavbar = location.pathname !== "/singin" && location.pathname !== "/student";
  
  return (
    <>
    {hiddenNavbar && <NavbarComponent/>}
    
    <Routes>
    <Route path='/home' element= {<HomeComponent/>}/>
    <Route path='/about' element={<AboutComponent/>}/>
    <Route path='/doctor' element={<DoctorComponent/>}/>
    <Route path='/student' element={<StudentComponent/>}/>
    <Route path="*" element={<NotFoundComponent/>} />
    <Route path="/singin" element={<AuthComponent/>}/> 
    <Route path= "/product" element={<ProductsComponent/>} />
    <Route path="/services" element={<ServicesComponent/>}/>
    <Route path="/galery" element={<GaleryComponent/>}/>
    </Routes>
    </>
  )
}

export default RouterComponent