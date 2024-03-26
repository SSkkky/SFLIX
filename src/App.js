import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import Home from './comp/Home'
import Header from './comp/Header';
import Detail from './comp/Detail';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:cate/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;