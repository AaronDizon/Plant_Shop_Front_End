import { Link } from "react-router-dom"



const Item=(props)=>{
    
   
    
    return(
        
           
            <div  className="plantItem">
                        <h1>{props.item.name}</h1>
                        
                        
                    <Link to={`/${props.item.id}`}>
                    <img src={props.item.image}/>
                    </Link>

                        </div>
    
    )
}

export default Item