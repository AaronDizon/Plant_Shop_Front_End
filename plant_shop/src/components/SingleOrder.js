import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from "axios"


const SingleOrder=()=>{

    
    const [info, setInfo] = useState([])
    
    const {orderId} = useParams()
    console.log(orderId)

    useEffect(()=> {
        const getOrder = async () => {
            try{ 
                let response = await axios.get(`http://localhost:3001/order/orderinfo/${orderId}`)
                console.log(response.data)
                setInfo(response.data)
            }catch (err) {
                console.log(err)
            }
        }
        getOrder()
    }, [orderId])


    return(
      


        
        <div className ="SingleOrder">
            {info.order ?
            <>
            <h3>Single Order</h3>
            <h2>Order Number{info.order.id}</h2>
            <h4>{info.order.date}</h4>
            <h4> Total Price: ${info.order.total_price}</h4>
            <h2>Items:</h2>
            <h4>
                {info.plants.map((item, i)=> {
                    return(
                        <div key={i}>
                            {item.name}
                            <p> ${item.price}</p>
                        </div>
                    )
                })}
            </h4>
            </>
            :
            <h4>Loading...</h4>
            }
            
        </div>
    )


}

export default SingleOrder