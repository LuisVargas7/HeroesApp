import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  let heroImageUrl = "";

  process.env.NODE_ENV === "development"
    ? (heroImageUrl = `/heroes/${id}.jpg`)
    : (heroImageUrl = `/HeroesApp/heroes/${id}.jpg`);

  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-5 ">
            <img src={heroImageUrl} className="card-img" alt={superhero} />
          </div>

          <div className="col-7 animate__animated animate__backInLeft">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>

              <p className="card-text">{alter_ego}</p>
              <p>{characters === alter_ego ? "" : characters}</p>

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>More...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
