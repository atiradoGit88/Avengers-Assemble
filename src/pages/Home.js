import { useState, useEffect } from "react";
import axios from "axios";


const API = process.env.REACT_APP_API_URL;
function Home() {
  const [avengers, setAvengers] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/avengers`)
      .then((response) => {
        setAvengers(response.data);
      })
      .catch((e) => {
        console.error("catch", e);
      });
  }, []);

  return (
    <div className="main-wrapper">
      <h2 className="app-header-title"> Avengers <span> Assemble </span></h2>
     
      
      1
      

    {avengers.map((avenger, index) => (
      <div className="carousel-item" key={index}>
        <img className="d-block w-100" src={avenger.file_photo} alt={`Slide ${index}`} />
      </div>
    ))}
    </div>
  );
}

export default Home;
