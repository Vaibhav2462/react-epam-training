import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import {BrowserRouter,Routes,Route, Link,Switch} from 'react-router-dom';
import { BrowserRouter, Route, Router ,Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import MyOrder from './components/MyOrder';
import Cart from './components/Cart';
import {  Switch } from "react-router"
import BuyNow from './components/BuyNow';
function App() {
  return (<>
    <Navbar></Navbar>
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<HomePage></HomePage>}></Route>
        <Route exact path='/home' element={<HomePage></HomePage>}></Route>
        <Route exact path='/myorder' element={<MyOrder></MyOrder>}></Route>
        <Route exact path='/buyingOptions/cart' element={<Cart></Cart>}></Route>
        <Route exact path='/buyingOptions/buyNow' element={<BuyNow></BuyNow>}></Route>
        </Routes>
      </BrowserRouter>
    
  </>
    
  );
}

export default App;
