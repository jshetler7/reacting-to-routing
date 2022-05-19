import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FilmSpec = () => {
  const params = useParams();
  const [film, setFilm] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://ghibliapi.herokuapp.com/films/" + params.filmspec
      );
      const singleFilm = await res.json();
      setFilm(singleFilm);
    })();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 mb-5">
              <div className="card shadow">
                <div className="card-body text-center">
                  <h2 className="card-title">Films</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="card shadow my-3 col-12 col-md-6">
            <div className="card-body d-flex flex-column">
              <ul className="list-group list-group-flush">
                <img className="card-image-top" src={film.movie_banner}></img>
                <h5 className="card-title list-group-item">{film.title}</h5>
                <p className="card-subtitle text-muted list-group-item">
                  Released: {film.release_date}
                </p>
                <p className="card-subtitle text-muted list-group-item">
                  Directed by: {film.director}
                </p>
                <p className="card-subtitle text-muted list-group-item">
                  Rotten Tomato Score: {film.rt_score}
                </p>
                <p className="card-text mb-4 list-group-item">
                  {film.description}
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilmSpec;
