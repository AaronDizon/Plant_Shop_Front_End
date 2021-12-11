import axios from "axios"
import env from "react-dotenv"
import Item from "../components/Item"


const Home =(props)=>{
    return (
        <div className="HomePage">
            <h2>This is the Home Page</h2>
            {props.allPlants.map((item, i) => {
                
                return(
                    <Item key={i}  item={item}/>
                    
                )
            } )}
        </div>
    )
}
export default Home