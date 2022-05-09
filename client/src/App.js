import React from 'react'
import { Routes, Route } from  'react-router-dom';
import * as Pages from './pages';
import './App.css';

function App() {
  return (

    <Routes>
       <Route path='/' element={<Pages.Home />} />
       <Route path='/signup' element={<Pages.Signup />} />
    </Routes>



  );
}
export default App;
