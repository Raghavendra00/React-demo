import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

import './Home.css'

const Home = ({name,age}) => {
    return (
        <div>
            {/* <Navbar /> */}
            <h1 className="heading">Hello my name is {name}</h1>
            <h2 id="age">My age is : {age}</h2>
            {/* <Footer /> */}
        </div>
    )
}

export default Home
