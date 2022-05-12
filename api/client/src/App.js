// import React from 'react'
// import { Routes, Route } from  'react-router-dom';
// import * as Pages from './pages';
// import './App.css';

// function App() {
//   return (
//     <main className='App'>
//       <Routes>
//         <Route path='/' element={<Pages.Home />} />
//         <Route path='/signup' element={<Pages.Signup />} />
//         <Route path='/login' element={<Pages.LoginForm />} />
//         <Route path='/general-advice' element={<Pages.GeneralAdvice />} />
//         <Route path='/dashboard' element={<Pages.Dashboard/>} />
//         <Route path='/chatroom-board' element ={<Pages.ChatRoomBoard/>} />
//       </Routes>
//     </main>
//   );
// }
// export default App;

import React from 'react'
import {BrowserRouter as Router,Routes,Route,useRoutes,} from "react-router-dom";
import * as Pages from './pages';
import './App.css';


const App = () => {



  const routes = useRoutes ([
    {path:'/', element : <Pages.Home /> },
    {path:'/signup', element:<Pages.Signup /> },
    { path:'/login', element: <Pages.LoginForm />},
    { path:'/dashboard', element:<Pages.Dashboard/>},
    {path:'/general-advice', element:<Pages.GeneralAdvice />},
    { path:'/chatroom-board',  element: <Pages.ChatRoomBoard/>},
    { path:'/groups', element: <Pages.Meetups/>},
    { path:'/helped', element: <Pages.Helped/>},
  ])
    return routes;
};

const AppWrapper = () => {
  return (

    <Router>
      <App />
    </Router>

  );
};
export default AppWrapper;
