import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Start from './components/Start'
import Signup from './pages/Sign-up'
import Subscriptions from './pages/Subscriptions';
import Home from './pages/Home';
import UserContext from './UserContext';
import PagPlano from './pages/PagPlano';


function App() {
  axios.defaults.headers.common['Authorization'] = 'YtNnFhNmq3OEh0fMKbiiPrYD'  

  const [token, setToken] = useState(localStorage.getItem('token'));
  const [membership, setMembership] = useState(null);
  
  function setAndPersistMembership(member) {
		setMembership(member);
		localStorage.setItem('membership', member);
    console.log(member);
	}
  
  function setAndPersistToken(token) {
		setToken(token);
		localStorage.setItem('token', token);
	}


  return (
    
    <Body>
      <UserContext.Provider value={{token, setToken,setAndPersistToken,membership, setMembership,setAndPersistMembership}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route path="/sign-up" element={<Signup />}></Route>
          <Route path="/subscriptions" element={<Subscriptions />}></Route>
          <Route path="/subscriptions/:idPlano" element={<PagPlano />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
    </Body>

  )
}

export default App;

const Body = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  
`