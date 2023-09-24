import React from 'react'
import Header from './component/Header';
import './App.css';
import Home from './component/Home'
import Contact from './component/Contact'
import About from './component/About'
import Footer from './component/Footer';
import { BrowserRouter as Suraj,Route,Routes } from 'react-router-dom';

function App() {
  return (<Suraj>
    <Header/>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/About' element={<About />} />
    <Route path='/Contact' element={<Contact />} />
    </Routes>
    <Footer/>
    </Suraj>
  )
}

export default App