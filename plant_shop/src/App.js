import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom';
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
  const [allPlants, setAllPants] = useState([])
  
  
  
  
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
        
        setUser(response.data.user)
      })
    }
  }
  
  useEffect(fetchUser, [])

  const fetchPlants=async()=>{

    const plants = await axios.get(`${env.BACKEND_URL}/plant`)
    setAllPants(plants.data.plants)
    

  }
  useEffect(fetchPlants,[])

  return (
    <div className="App">
    <NavigationBar setUser={setUser} user={user}/>
    <Routes>
        <Route path="/home" element={<Home allPlants={allPlants}/>}/>
        <Route path="/login" 
        element={
          user.id ?
          <Navigate to="/home"/>
          :
          <Login setUser={setUser} user={user}/>}
          />
          
        <Route path="/signup" element={
          user.id ?
          <Navigate to="/home"/>
          :
          <Signup setUser={setUser} user={user}/>}/>

        <Route path="/cart" element={<Cart/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/home" element={<Home/>}/>

    </Routes>
    </div>
  );
}

export default App;
