import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';


function App() {
  return (
    <div className="App">
      
      <Main>
      <Header></Header>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products></Products>} />
          <Route path="/aboutUs" element={<AboutUs></AboutUs>} />
          <Route path="/contactUs" element={<ContactUs></ContactUs>} />
          <Route path="*" element={'404'} />

         </Routes>
        
      </Main>
    </div>
  );
}

export default App;
