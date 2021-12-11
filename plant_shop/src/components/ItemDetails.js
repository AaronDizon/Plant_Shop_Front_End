import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import env from "react-dotenv"
import axios from "axios"

const ItemDetails =(props)=>{

    const [plant, setPlantInfo] = useState({})
    const {id} = useParams()
    const plantUrl = `${env.BACKEND_URL}/plant/${id}`
    
    
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
    <button>Add to Cart</button>
    :
    null
}
    </div>
)
}
export default ItemDetails