import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
    <div className="row justify-content-md-center">
      <div className="col-md-auto">
        <h1>New Avenger Item</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-floating">
            <input
            id="vigilante_title" 
            type="text" 
            value={avenger.vigilante_title}
            onChange={handleTextChange}
            className="form-control" 
            placeholder="Vigilante title"
            required
            />
            <label htmlFor="vigilante_title">Title:</label>
          </div>
            <br></br>
          <div className="form-floating">
            <input
            id="abilities" 
            type="text" 
            value={avenger.abilities}
            onChange={handleTextChange}
            className="form-control" 
            placeholder="Abilities"
            required
            />
            <label htmlFor="abilities">Abilities:</label>
          </div>
            <br></br>
          <div className="form-floating">
            <input
            id="birthplace" 
            type="text" 
            value={avenger.birthplace}
            onChange={handleTextChange}
            className="form-control" 
            placeholder="birthplace"
            required
            />
            <label htmlFor="birthplace">Birthplace:</label>
          </div>
            <br></br>
          <div className="form-check form-switch">
            <input 
            id="is_ally"
            type="checkbox" 
            value={avenger.is_ally}
            checked={avenger.is_ally}
            onChange={handleCheckboxChange}
            className="form-check-input" 
            />
            <label className="form-check-label" htmlFor="is_ally">Can We Trust Them?</label>
          </div>
            <br></br>
          <div className="form-floating">
            <input
            id="power_scale" 
            type="number" 
            value={avenger.power_scale}
            onChange={handleTextChange}
            className="form-control" 
            placeholder="Power Scale"
            required
            />
            <label htmlFor="power_scale">Power Scale:</label>
          </div>
            <br></br>
          <div className="form-floating">
            <input
            id="alter_ego" 
            type="text" 
            value={avenger.alter_ego}
            onChange={handleTextChange}
            className="form-control" 
            placeholder="Alter Ego"
            required
            />
            <label htmlFor="alter_ego">Alter Ego:</label>
          </div>
            <br></br>
          <div className="form-floating">
            <input
            id="issue_appearance" 
            type="number" 
            value={avenger.issue_appearance}
            onChange={handleTextChange}
            className="form-control" 
            placeholder="Issue Appearance"
            required
            />
            <label htmlFor="issue_appearance">Issue Appearance# :</label>
          </div>
            <br></br>
          <div className="form-floating">
            <input
            id="file_photo" 
            type="text" 
            value={avenger.file_photo}
            onChange={handleTextChange}
            className="form-control" 
            placeholder="File Photo"
            required
            />
            <label htmlFor="poster">poster:</label>
          </div>
            <br></br>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default AvengersNewForm;
  