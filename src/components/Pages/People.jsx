import { useState, useEffect } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import Person from "./Person";

export default function People(props) {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://ghibliapi.herokuapp.com/people");
      const allPeople = await res.json();
      setPeople(allPeople);
    })();
  }, []);

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card shadow">
            <div className="card-body text-center">
              <h4 className="card-title">People</h4>
            </div>
          </div>
        </div>
      </div>

      <main className="row">
        {people.map((person) => (
          <div className="col-12 col-md-6" key={`user-card-${person.id}`}>
            <div className="card shadow my-3">
              <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <p className="card-subtitle text-muted">Age: {person.age}</p>
                <p className="card-subtitle text-muted">
                  Gender: {person.gender}
                </p>
                <p className="card-subtitle text-muted">
                  Hair Color: {person.hair_color}
                </p>
                <p className="card-text mb-4">{person.description}</p>
              </div>
              <div className="row mb-2 justify-content-between">
                <div className="col-4">
                  <a href={person.url} target="blank" className="p-3">
                    API Resource Link
                  </a>
                </div>
                <div className="col-4">
                  <Link
                    to={`/people/${person.id}`}
                    className="btn btn-outline-primary"
                  >
                    People Data
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
