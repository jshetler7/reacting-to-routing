import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Person = () => {
  const params = useParams();
  const [person, setPerson] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://ghibliapi.herokuapp.com/people/" + params.person
      );
      const singlePerson = await res.json();
      setPerson(singlePerson);
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
                  <h2 className="card-title">Meet the Cast!</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="card shadow my-3 col-12 col-md-6">
            <div className="card-body d-flex flex-column">
              <ul className="list-group list-group-flush">
                <h5 className="card-title list-group-item">{person.name}</h5>
                <p className="card-subtitle text-muted list-group-item">
                  Age: {person.age}
                </p>
                <p className="card-subtitle text-muted list-group-item">
                  Gender : {person.gender}
                </p>
                <p className="card-subtitle text-muted list-group-item">
                  Hair Color: {person.hair_color}
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Person;
