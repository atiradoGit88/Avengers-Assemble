import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './AvengerNewForm.css'
const API = process.env.REACT_APP_API_URL;

function AvengersNewForm() {
    const navigate = useNavigate();
    const [avenger, setAvenger] = useState({
      vigilante_title: "",
      abilities: "",
      birthplace: "",
      is_ally: false,
      power_scale: 0,
      alter_ego: "",
      issue_appearance: 0,
      file_photo: "",
    });

  const addAvenger = (newavenger) => {
    axios
      .post(`${API}/avengers`, newavenger)
      .then(
      (res) => {
      navigate(`/avengers`);
      })
      .catch((c) => {
        console.error("catch", c)
      });
  };

  const handleTextChange = (event) => {
    setAvenger({ ...avenger, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setAvenger({ ...avenger, is_ally: !avenger.is_ally });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(avenger.power_scale < 0 || avenger.power_scale > 21){
      window.confirm("Power scales must range from 1 to 20")
    } else {
      addAvenger(avenger)
    }
  };

  return (
    <div className="rookie__new-container">
      <h1 className="rookie__header">New Avenger Item</h1>
      <div className="rookie__form">
        <form onSubmit={handleSubmit}>
          
            <input className="rookie__options"
            id="vigilante_title" 
            type="text" 
            value={avenger.vigilante_title}
            onChange={handleTextChange}
            required
            />
            <label htmlFor="vigilante_title">Title:</label>
         
            <br></br>
          
            <input className="rookie__options"
            id="abilities" 
            type="text" 
            value={avenger.abilities}
            onChange={handleTextChange}
            required
            />
            <label htmlFor="abilities">Abilities:</label>
         
            <br></br>
      
            <input className="rookie__options"
            id="birthplace" 
            type="text" 
            value={avenger.birthplace}
            onChange={handleTextChange}
            required
            />
            <label htmlFor="birthplace">Birthplace:</label>
       
            <br></br>
         
            <input className="rookie__options"
            id="is_ally"
            type="checkbox" 
            value={avenger.is_ally}
            checked={avenger.is_ally}
            onChange={handleCheckboxChange}
            />
            <label className="rookie__label" htmlFor="is_ally">Can We Trust Them?</label>
        
            <br></br>
     
            <input className="rookie__options"
            id="power_scale" 
            type="number" 
            value={avenger.power_scale}
            onChange={handleTextChange}
            required
            />
            <label htmlFor="power_scale">Power Scale:</label>
        
            <br></br>
      
            <input className="rookie__options"
            id="alter_ego" 
            type="text" 
            value={avenger.alter_ego}
            onChange={handleTextChange}
            required
            />
            <label htmlFor="alter_ego">Alter Ego:</label>
        
            <br></br>
            <input  className="rookie__options"
            id="issue_appearance" 
            type="number" 
            value={avenger.issue_appearance}
            onChange={handleTextChange}
            required
            />
            <label htmlFor="issue_appearance">Issue Appearance Number</label>

            <br></br>
            <input className="rookie__options"
            id="file_photo" 
            type="text" 
            value={avenger.file_photo}
            onChange={handleTextChange}
            required
            />
            <label htmlFor="poster">poster:</label>

            <br></br>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default AvengersNewForm;
  