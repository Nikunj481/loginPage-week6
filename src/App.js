import React from 'react'
import Main from './Main.js';
import ViewRow from "./components/ViewRow.js";
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import data from "./mock-data.json";
import { useState } from 'react';
import Login from './pawjoshi/Login.js';
import SignUp from './pawjoshi/SignUp.js';
function App() {
  const [contacts, setContacts] = useState(data);
  const [userId, setUserId] = useState(null);
  return (
 <BrowserRouter>
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />    
      <Route path="/home" element={<Main contacts ={contacts} setContacts={setContacts} setUserId={setUserId} />}/>
      <Route path="/view" element={<ViewRow contacts ={contacts} userId={userId}/>}/>
    </Routes>
  </BrowserRouter>
   
  )
}

export default App;