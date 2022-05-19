const Home = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <img src="https://ghibliapi.herokuapp.com/images/logo.svg" />
        <div className="col-12 col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <div className="card-title text-center">
                <h4>Studio Ghibli API Lab w/ Routing</h4>
              </div>
              <div className="card-text text-start">
                <p>
                  This was made using Create-React-App in conjunction with the
                  concepts of Routing and styled with Bootstrap 5!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
