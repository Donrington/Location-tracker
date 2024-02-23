import slide1 from "../assets/img/r2.jpg";
import slide2 from "../assets/img/b.jpg";

const Hero = () => {
  return (
    <header>
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-background">
              <img src={slide1} alt="Slide 1" />
            </div>
            <div className="carousel-container">
              <div className="carousel-content text-center">
                <h1 className="text-white display-1 animate__animated animate__fadeInDown">
                  GPS TRACKING SERVICES
                </h1>
                <a
                  href="#"
                  className="btn btn-primary btn-lg get-started-btn animate__animated animate__fadeInUp"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-background">
              <img src={slide2} alt="Slide 2" />
            </div>
            <div className="carousel-container">
              <div className="carousel-content text-center">
                <h1 className="text-white display-1 animate__animated animate__fadeInDown">
                  RELIABLE & ACCURATE
                </h1>
                <a
                  href=""
                  className="btn btn-primary btn-lg get-started-btn animate__animated animate__fadeInUp"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </header>
  );
};

export default Hero;
