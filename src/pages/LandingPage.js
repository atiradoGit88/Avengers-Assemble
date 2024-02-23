
import './LandingPage.css';
import avengers from '../img/home.jpg'
import image from '../img/marvel-app-gif.gif'


function LandingPage() {

  return (
    <div className="avengers__main-wrapper">
      <div className="avengers__card" key='landing-image'>
        <img className="avengers__name" src={avengers} alt=""></img>
        <img className="avengers__image" src={image} alt='The-Avengers'/>
      </div>
    </div>
  );
}

export default LandingPage;
