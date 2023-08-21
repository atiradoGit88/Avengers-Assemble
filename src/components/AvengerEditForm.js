import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function AvengersEditForm() {
  let { index } = useParams();
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

  useEffect(() => {
    axios
      .get(`${API}/avengers/${index}`)
      .then((response) => {
        setAvenger(response.data);
      })
      .catch((e) => {
        console.error(e)
      });
  }, [index]);

  const handleTextChange = (event) => {
    setAvenger({ ...avenger, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setAvenger({ ...avenger, is_ally: !avenger.is_ally });
  }

  const updateAvenger = () => {
    axios
      .put(`${API}/avengers/${index}`, avenger)
      .then((response) => {
        setAvenger(response.data);
        navigate(`/avengers/${index}`);
      })
      .catch((c) => {
        console.warn("catch", c)
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateAvenger();
  };

  return (
    <div className="row justify-content-md-center">
      <div className="col-md-auto">
        <h1>Edit Avenger Item</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-floating">
            <input
            id="vigilante_title" 
            type="text" 
            value={avenger.vigilante_title}
            onChange={handleTextChange}
            className="form-control" 
            placeholder="Title"
            required
            />
            <label htmlFor="title">Title:</label>
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
            placeholder="Birthplace"
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
            placeholder="Power scale"
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
            placeholder="Alter ego"
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
            <label htmlFor="runtime">Issue Appearance# :</label>
          </div>
            <br></br>
          <div className="form-floating">
            <input
            id="file_photo" 
            type="text" 
            value={avenger.file_photo}
            onChange={handleTextChange}
            className="form-control" 
            placeholder="File photo"
            required
            />
            <label htmlFor="file_photo">Last Known Image:</label>
          </div>
            <br></br>
          <input type="submit" />
        </form>
          <Link to={`/avengers/${index}`}>
            <button>Nevermind!</button>
          </Link>
      </div>
    </div>
  );
}

export default AvengersEditForm;
  