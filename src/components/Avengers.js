
import { useState, useEffect } from "react";
import axios from "axios";
import Avenger from "./Avenger";

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
    <div className="container align-items-center">
    <div className="row justify-content-center">
        {avengers.map(avenger => {
          return <Avenger key={avengers.id} avenger={avenger} />;
        })}
    </div>
  </div>
  );
}

export default Avengers;
