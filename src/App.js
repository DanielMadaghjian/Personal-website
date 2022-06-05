import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Routes, Route } from "react-router-dom";
import {Main, Footer, Home, About, MyWork, Contact, Header} from './pages'

function App() {
  return (
   <div>
     <Routes>
       <Route path="/" element={<Main></Main>}>
          <Route path="/" element={<Header></Header>}></Route>
          <Route path="/" element={<Footer></Footer>}></Route>
          <Route path="/Home" element={<Home></Home>}></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/MyWork" element={<MyWork></MyWork>}></Route>
          <Route path="/Contact" element={<Contact></Contact>}></Route>
       </Route>
     </Routes>
   </div>
  );
}

export default App;
