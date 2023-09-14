const About = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide container">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      {/*  */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1500&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaG5vbG9neXx8fHx8fDE2NzkxMzEwNTE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1500"
            className="d-block w-100"
            alt="..."
            height={600}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 style={{ color: "black" }}>Do What is best</h5>
            <p style={{ color: "black" }}>
              Providing opportunities at every level.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1522211988038-6fcbb8c12c7e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1500&ixid=MnwxfDB8MXxyYW5kb218MHx8a25vd2xlZGdlfHx8fHx8MTY3OTEzMjQ4NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1500"
            className="d-block w-100"
            alt="..."
            height={600}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>ideas to evolve</h5>
            <p>leading to attain knowledge.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1500&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kaW5nfHx8fHx8MTY3OTEzMjE0OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1500"
            className="d-block w-100"
            alt="..."
            height={600}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 style={{ color: "white" }}>
              Teaching to provide with the best ideas
            </h5>
            <p style={{ color: "white" }}>Providing channels to learn.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default About;
