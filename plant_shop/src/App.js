import './App.css';

import { Routes, Route } from 'react-router-dom';
import { useState , useEffect } from 'react';

import axios from 'axios'
import env from 'react-dotenv'

import NavigationBar from './components/NavigationBar';
import Login from './pages/Login'
import Home from './pages/Home';
import Signup from './pages/SignUp'
import Cart from './pages/Cart';
import Orders from './pages/Orders';

function App() {
  const [user, setUser] = useState({})

  const fetchUser = () => {
    const userId = localStorage.getItem('userId')
    if (userId) {
       console.log(localStorage.getItem('userId'))
      axios.get(`${env.BACKEND_URL}/user/verify`, {
        headers: {
          Authorization: userId
        }
      })
      .then((response) => {
        console.log(response.data.user.id)
        setUser(response.data.user)
      })
    }
  }
  console.log(user)
  useEffect(fetchUser, [])

  return (
    <div className="App">
    <NavigationBar/>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login setUser={setUser} user={user}/>}/>
        <Route path="/signup" element={<Signup setUser={setUser} user={user}/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/" element={<Home/>}/>

    </Routes>
    </div>
  );
}

export default App;
