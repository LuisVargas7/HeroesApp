import { HeroList } from "../components";

export const MarvelPage = () => {
  const publisher = "Marvel Comics";
  return (
    <>
      <h1 className="title"> Marvel </h1>

      <hr />

      <ul className="p-0">
        <HeroList publisher={publisher}></HeroList>
      </ul>
    </>
  );
};
