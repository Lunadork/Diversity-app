import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { AuthProvider } from '../src/context/AuthProvider';
import AppWrapper from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    
        <AppWrapper />
  
    </AuthProvider>
  </React.StrictMode>
);
