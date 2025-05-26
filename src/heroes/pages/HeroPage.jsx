import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroesById } from "../helpers";

export const HeroPage = () => {
  const { heroId } = useParams();

  const navigate = useNavigate();

  const hero = getHeroesById(heroId);

  if (!hero) {
    return <Navigate to="/marvel" />;
  }
  let heroImageUrl = "";

  process.env.NODE_ENV === "development"
    ? (heroImageUrl = `/heroes/${hero.id}.jpg`)
    : (heroImageUrl = `/HeroesApp/heroes/${hero.id}.jpg`);

  const onBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="row mt-5 animate__animated animate__fadeInDown">
        <div className="col-4">
          <img
            src={heroImageUrl}
            className="img-thumbnail "
            alt={hero.superhero}
          />
        </div>

        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter ego: </b> {hero.alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher: </b> {hero.publisher}
            </li>
            <li className="list-group-item">
              <b>First appearence: </b> {hero.first_appearance}
            </li>
          </ul>

          <h5 className="mt-3">Characters</h5>
          <p>{hero.characters}</p>

          <button onClick={onBack} className="btn btn-info">
            Back
          </button>
        </div>
      </div>
    </>
  );
};
