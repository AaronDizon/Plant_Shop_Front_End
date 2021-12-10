import { Link,  } from "react-router-dom"




const NavigationBar = ()=>{
return(
    <div className="NavBar">
        <div className="restBar">
            <Link className="NavLink" to="/login" >Login</Link>
            <Link className="NavLink" to="/signup">Signup</Link>
            <Link className="NavLink" to="/">Home</Link>
        </div>
        <div className="userCorner">
            <p>Logout</p>
            <h4>User</h4>
            <Link className="NavLink" to="/cart">Cart</Link>
            <Link  className="NavLink"to="/orders">Previous Orders</Link>
        </div>
    </div>
)

}

export default NavigationBar