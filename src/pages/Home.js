function Home() {

    return (
      <div className="avengers__main-wrapper">
        <div className="avengers__card" key='home-image'>
          <img className="avengers__name" src={avengers} alt=""></img>
          <img className="avengers__image" src={image} alt='The-Avengers'/>
        </div>
      </div>
    );
  }
  
  export default Home;
  