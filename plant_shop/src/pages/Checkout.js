import { useState } from "react"
import { Link } from "react-router-dom"


const Checkout = (props)=>{

    const [shipping_address, setShippingAdd] = useState('')
    const [credit_card_number, setCardNumber] = useState(0)
 

    return(
        <div className="Checkout"> 
        <h1>Checkout Page</h1>
        <form className="CheckoutForm">
            <div >
                <label>Shipping Address</label>
            <input
             value={shipping_address}
             onChange={(e)=>{setShippingAdd(e.target.value)}
            }
             />
             </div>
             <div>
            <label>credit card number</label>
            <input
             value={credit_card_number}
             onChange={(e)=>{setCardNumber(e.target.value)}
            }
              />
              </div>
              <div>
            <label>Total Price</label>
            <input
             value={props.total_price}
             onChange={(e)=>{props.setTotal(e.target.value)}
            }
             />
             </div>
            <Link to="/orders"> <input type='submit' value='checkout'/></Link>
        </form>
        </div>
    )
}
export default Checkout