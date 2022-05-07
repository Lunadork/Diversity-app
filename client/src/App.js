import React from 'react'
import { Routes, Route } from  'react-router-dom';
import * as Pages from './pages';
import './App.css';

function App() {
  return (

    <Routes>
       <Route index element={<Pages.Home />} />

    </Routes>



  );
}
export default App;
