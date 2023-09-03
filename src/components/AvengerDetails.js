import { useState, useEffect } from "react";
import { useParams,Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './AvengersDetails.css';


function AvengersDetails() {
  const API = process.env.REACT_APP_API_URL;
  const [avenger, setAvengers] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/avengers/${index}`)
      .then((response) => {
        setAvengers(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate, API]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to DELETE this avenger?")) {
      axios
      .delete(`${API}/avengers/${index}`)
      .then(() => {
        navigate(`/avengers`);
      })
      .catch((e) => {
        console.error(e)
      });
    } else {
      console.log("DELETE aborted")
    }

  };

  return (
    <div className="container">
      <div className="box">
        <h1>Avengers Details</h1>
        <ul className="details">
          <li className="dets"><span className="fw-bold"></span><img src={avenger.file_photo} alt={avenger.vigilante_title}></img></li>
          <li className="dets"><span className="fw-bold"></span>{avenger.vigilante_title}</li>
          <li className="dets"><span className="fw-bold"></span>{avenger.abilities}</li>
          <li className="dets"><span className="fw-bold"></span>{avenger.birthplace}</li>
          <li className="dets"><span className="fw-bold"></span>{avenger.is_ally}</li>
          <li className="dets"><span className="fw-bold"></span>{avenger.power_scale}</li>
          <li className="dets"><span className="fw-bold"></span>{avenger.alter_ego}</li>
          <li className="dets"><span className="fw-bold"></span>{avenger.issue_appearance}</li>
        </ul>
        <div className="button-1">
          {" "}
          <Link to={`/avengers`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/avengers/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
  
export default AvengersDetails;
  