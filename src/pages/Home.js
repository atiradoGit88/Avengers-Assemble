// import { useState, useEffect } from "react";
// import axios from "axios";
import './Home.css';
import image from '../img/marvel-app-gif.gif'


// const API = process.env.REACT_APP_API_URL;
function Home() {
//   const [avengers, setAvengers] = useState([]);
//   useEffect(() => {
//     axios
//       .get(`${API}/avengers`)
//       .then((response) => {
//         setAvengers(response.data);
//       })
//       .catch((e) => {
//         console.error("catch", e);
//       });
//   }, []);

  return (
    <div className="main-wrapper">
      <h2 className="avengers"> 
      <span>A</span>
      <span>V</span>
      <span>E</span>
      <span>N</span>
      <span>G</span>
      <span>E</span>
      <span>R</span>
      <span>S</span>
      <span>&nbsp;</span>
      <span>A</span>
      <span>S</span>
      <span>S</span>
      <span>E</span>
      <span>M</span>
      <span>B</span>
      <span>L</span>
      <span>E</span>
      </h2>
      <div className="card" key='home-image'>
        <img className="image-container" src={image} alt='The-Avengers'/>
      </div>
    </div>
  );
}

export default Home;
