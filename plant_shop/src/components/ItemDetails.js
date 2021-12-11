import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import env from "react-dotenv"
import axios from "axios"
import Cart from "../pages/Cart"

const ItemDetails =(props)=>{

   

    const [plant, setPlantInfo] = useState({})
    const {id} = useParams()
    const plantUrl = `http://localhost:3001/plant/${id}`
   
    useEffect(()=>{
    const getOnePlant = async() => {       
        try{

        const response = await axios.get(plantUrl)
        
        setPlantInfo(response.data.plant)
        console.log(plant)
   
        } catch (err) {
            console.log(err)
        }
     }
     getOnePlant()
    },[])


    
return(
    <div className="singlePlant">
    <h1>{plant.name}</h1>
    <img className="indPlant" src={`${plant.image}`} alt={`${plant.name}`}/>
    <p>{plant.description}</p>
    <h4>${plant.price}</h4>
    {props.user.id ?
    <button onClick={() => {

        props.setCartList([...props.cartList, plant])
        props.setTotal(Number(props.total_price) + Number(plant.price))
    }}>Add to Cart</button>
    :
    null
}
    </div>
)
}
export default ItemDetails