import React from 'react'
import { Routes, Route } from  'react-router-dom';
import * as Pages from './pages';
import './App.css';

function App() {
  return (
    <main className='App'>
    <Routes>
       <Route path='/' element={<Pages.Home />} />
       <Route path='/signup' element={<Pages.Signup />} />
       <Route path='/login' element={<Pages.LoginForm />} />
    </Routes>
    </main>
  );
}
export default App;
