import { Link } from "react-router-dom"
const Item=(props)=>{
    return(
        
           
            <div key={i} className="plantItem">
                        
                    <Link to='/home/itemName'>{props.item.name}</Link>

                        
                        <img src={props.item.image}
                        /></div>
    
    )
}

export default Item