
import { Link } from "react-router-dom"
import { useState , useEffect } from 'react';


const Cart=(props)=>{
    
    

    // function 
    let array = props.cartList;
    console.log(array) 

    /* const removeItem = (item) => {

    }

    */





    return(
        <div className="Cart">
            <h1>Whatever you wanna buy ;)</h1>
            {props.cartList.map((item, i) => {
                
                return(
                    <div key={i} className="cartItem">
                        <h4>{item.name}</h4> 
                        <p>- ${item.price}</p>
                        <button onClick={()=>{array.splice(i); props.setCartList(array)}}>Remove Item</button>
                    </div>

                )
            } )}
            <p> {props.total_price}</p>
                <Link to='/cart/checkout'>Proceed to Checkout</Link>

        </div>
    )
}
export default Cart