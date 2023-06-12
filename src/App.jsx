import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";
import Start from './components/Start'
import Signup from './pages/Sign-up'
import Subscriptions from "./pages/Subscriptions";

function App() {
  axios.defaults.headers.common['Authorization'] = '5MH3GBE7JWFZU8b8ft1wY2FM'
  return (
    
    <Body>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route path="/sign-up" element={<Signup />}></Route>
          <Route path="/subscriptions" element={<Subscriptions />}></Route>
        </Routes>
      </BrowserRouter>
    </Body>

  )
}

export default App

const Body = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  
`