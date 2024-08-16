//Import React Router 
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import './index.css'


import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';



function App() {

       //useState for users login credentials
  const [users,setUsers]=useState([
      {
          username: "John",
          password: "J123"
      },
  
    ])

  //render apperance
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login users={users} setUsers={setUsers}  />}></Route>
        <Route path='/Signup' element={<Signup users={users} setUsers={setUsers}  />}></Route>
        <Route path='/Landing' element={<Landing></Landing>}></Route>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
