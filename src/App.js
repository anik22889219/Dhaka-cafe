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



// const auth = getAuth(app);
const auth = getAuth(app)
function App() {
  const [user,SetUser] = useState({});
  console.log(user)

  
  const hendelSingin =()=>{
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth,googleProvider)
    .then(result=>{
      const user = result.user;
      SetUser(user);
      console.log(user)
    })
    .catch(error=>{
      console.error('error')
    })
// console.log('clicked')
  }
  const hendelSingout= ()=>{
    signOut(auth)
    .then(result=>{
      SetUser({});
    })
    .catch(error=>{
      SetUser({})
    })
  }

  return (
    <div className="mx-auto bg-green-100">
      
      <Main>
      <Header hendelSingin={hendelSingin} key={user.uid} user={user} hendelSingout={hendelSingout}></Header>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products></Products>} />
          <Route path="/orders" element={<OrdersReview></OrdersReview>} />
          <Route path="/aboutUs" element={<AboutUs></AboutUs>} />
          <Route path="/contactUs" element={<ContactUs></ContactUs>} />
          <Route path="*" element={'404'} />

         </Routes>
        
      </Main>
    </div>
  );
}

export default App;
