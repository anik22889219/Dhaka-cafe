import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import OrdersReview from './Components/OrdersReview/OrdersReview';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init.';
import { useState } from 'react';
import Login from './Components/Login/Login';
import RequireAuth from './Components/RequerAuth/RequerAuth';
import Signin from './Components/Sign-in/Signin';




function App() {
  

  return (
    <div className="mx-auto bg-green-100">
      
      <Main>
      <Header></Header>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products></Products>} />
          <Route path="/orders" element={
            <RequireAuth>
              <OrdersReview></OrdersReview>
            </RequireAuth>
          } />
          <Route path="/aboutUs" element={<AboutUs></AboutUs>} />
          <Route path="/contactUs" element={<ContactUs></ContactUs>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/singin" element={<Signin></Signin>}></Route>
          <Route path="*" element={'404'} />

         </Routes>
        
      </Main>
    </div>
  );
}

export default App;
