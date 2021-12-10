import { useState } from 'react'
import axios from 'axios'

import env from 'react-dotenv'
import { Link } from 'react-router-dom'

const Signup =(props)=>{
  console.log('hi')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signupForm = (e) => {

        e.preventDefault()
        axios.post(`${env.BACKEND_URL}/user/login`, { email, password })
        .then((response) => {
            console.log(response)

        // localStorage.setItem('userId', response.data.user.id)
        // props.setUser(response.data.user)
    })
}
    return(
        
        <div className="sgnLogForm">
           
        <h2>Submit</h2>
        <form onSubmit={console.log('check the function')}>
            <div>
                <label htmlFor="email">Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
        <div className="NavigateHome">
        <Link to='/login'>login</Link> 
        <Link to='/'>Home</Link>  
        </div>
        
        </div>
        
    )
}

export default Signup