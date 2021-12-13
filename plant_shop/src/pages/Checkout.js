import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import axios from "axios"


const Checkout = (props)=>{


    // let orderDate = new Date(year, monthIndex, day)
    
    const [date, setDate] = useState(new Date())
    const [shipping_address, setShippingAdd] = useState('')
    const [credit_card_number, setCardNumber] = useState(0)
    const [total, setTot] = useState(props.total_price)
    const [plantOrder, setPlantOrder] = useState([])
    
    
   
    
    const createOrder=async (e)=>{
       
        e.preventDefault()
        
        props.cartList.map((item)=>{
          
        plantOrder.push(item.id)
            
        })
        setPlantOrder([...plantOrder])
      
        await axios.post(`http://localhost:3001/order/${props.user.id}`, {date, shipping_address,credit_card_number,total, plantOrder}  )
        
        props.setCartList([])
        setDate('')
        setShippingAdd('')
        setCardNumber(0)
        props.setTotal(0)
        
    }

    



    return(
        <div className="Checkout"> 
        <h1>Checkout Page</h1>
        <form className="CheckoutForm" onSubmit={createOrder}>
            <div>
              <label>Date</label>
            <input
             value={date}
             onChange={(e)=>{setShippingAdd(e.target.value)}
            }
             />
           </div>
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
             <div className="itemCheckout">
                 {
                     props.cartList.map((item,i)=>{
                         
                         return(
                             <div  key={i}>
                         <p>{item.name}</p>
                         <p>{item.price}</p>
                        
                         </div>
                         )
                        })
                    }
             </div>
            <label>Total Price</label>
            <input
                value={props.total_price}
                onChange={(e)=>{props.setTot(e.target.value)
                setTot(props.total_price)
            
            }
            }
                />
                <input type='submit' onClick={()=> {}}value='checkout'/>
            <Link to="/orders"><p>checkout</p></Link>
            
        </form>
        </div>
    )
}
export default Checkout