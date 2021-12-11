
import { Link } from "react-router-dom"
import { useState , useEffect } from 'react';


const Cart=(props)=>{
    
    

    // function 

    
    /* const removeItem = (item) => {

    }

    */






    return(
        <div className="Cart">
        <h1>Whatever you wanna buy ;)</h1>
            {

                props.cartList.map((item, i) => {
                
                return(
                    <div key={i} className="cartItem">
                        <h4>{item.name}</h4> 
                        <p>- ${item.price}</p>
                        <button onClick={()=>{
                            props.deleteItem(i)
                            
                            }}>Remove Item</button>
                    </div>

                )
            } )
            }
            <p> {props.total_price}</p>
                <Link to='/cart/checkout'>Proceed to Checkout</Link>

        </div>
    )
}
export default Cart