import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="row rows-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-3">
      {heroes.map((heroe) => {
        return <HeroCard key={heroe.id} {...heroe} />;
      })}
    </div>
  );
};
