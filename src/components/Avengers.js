
import { useState, useEffect } from "react";
import axios from "axios";
import Avenger from "./Avenger";
import './Avengers.css';

const API = process.env.REACT_APP_API_URL;
function Avengers() {
  const [avengers, setAvengers] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/avengers`)
      .then((response) => {
          setAvengers(response.data)})
      .catch((e) => {
        console.error("catch", e)
      });
  }, []);
  
  return (
    <div className="content">
    <div className="row">
        {avengers.map(avenger => {
          return <Avenger key={avenger.id} avenger={avenger} />;
        })}
    </div>
  </div>
  );
}

export default Avengers;
