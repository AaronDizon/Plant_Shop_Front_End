import { Link,  } from "react-router-dom"




const NavigationBar = (props)=>{
return(
    <div className="NavBar">
        <Link className="NavLink" to="/">Home</Link>
        { props.user.id ?
        <>
        <div className="userCorner">
        <p onClick={()=>{
            localStorage.removeItem('userId')
            props.setUser({})
            props.setCartList([])
            props.setTotal(0)
        }}>Logout</p>
        <h4>{props.user.name}</h4>
        <Link className="NavLink" to="/cart">Cart</Link>
        <Link  className="NavLink"to="/orders">Previous Orders</Link>
        </div>
        </>
        :
        <>
        <Link className="NavLink" to="/login" >Login</Link>
        <Link className="NavLink" to="/signup">Signup</Link>
        
        
        </>
}
    </div>
)

}

export default NavigationBar