import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
// import { Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Notfound from './components/Notfound';
import Form from './components/Form';
function App() {
  return (
    <>
       <BrowserRouter>
       <Header/>
       <Routes>
        <Route path ="/" element ={<Home/>}/>
        <Route path ="*" element={<Notfound/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/new_product" element={<Form/>}/>
       </Routes>
       </BrowserRouter>
  
    </>
  );
  }
      
export default App;
      
       
    
