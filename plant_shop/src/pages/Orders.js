import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SingleOrder from "../components/SingleOrder"

const Orders =(props)=>{

    const [userOrders, setUserOrders] = useState([])

    const getOrders = async (req, res) => {
        try{
            let orders = await axios.get(`http://localhost:3001/order/${props.user.id}`)
            console.log(orders.data.orders)

            setUserOrders(orders.data.orders)
        }catch (err) {
            console.log(err)
        }
    }

   useEffect(getOrders, [])

    return (
        <div className="PrevOrders"> 
        <h2>Whatever you already spent!</h2>
        
        {userOrders.map((item, i) => {
            return (
                <div key = {i} className="singleOrder">
                        <p>Order number: {item.id} </p>
                        <p>Order price: {item.total_price}</p>
                        <Link className="orderlink" to={`/orders/${item.id}`}> {item.date} </Link>
                </div>
            )
        })
        }



        </div>
    )
}
export default Orders