import { useState, useEffect } from 'react'
import axios from 'axios'
import './About.css'

function About() {
    const[aboutData, setAboutData] = useState([]);

    useEffect(() =>{
        axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
            .then(response => setAboutData(response.data))
            .catch(error => console.error(error))
    }, []);

return (
    <div>
        <p>About Us</p>
        <br></br>
        <img src = {aboutData.image} alt ="Avatar"></img>
        <br></br>
        <br></br>
        <p>{aboutData.bio}</p>
        
        
    </div>
)

}

export default About