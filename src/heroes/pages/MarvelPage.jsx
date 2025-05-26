import { HeroList } from "../components";

export const MarvelPage = () => {
  const publisher = "Marvel Comics";
  return (
    <>
      <h1 className="title"> Marvel </h1>

      <hr />

      <ul>
        <HeroList publisher={publisher}></HeroList>
      </ul>
    </>
  );
};
