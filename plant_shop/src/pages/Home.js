import axios from "axios"
import env from "react-dotenv"


const Home =(props)=>{
    return (
        <div className="HomePage">
            <h2>This is the Home Page</h2>
           {console.log(props.allPlants)}
        </div>
    )
}
export default Home