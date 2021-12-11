
import { Link } from "react-router-dom"



const Cart=()=>{

    //

    return(
        <div className="Cart">
            <h1>Whatever you wanna buy ;)</h1>
            
                <Link to='/cart/checkout'>Proceed to Checkout</Link>
        </div>
    )
}
export default Cart