import { HeroList } from "../components";

export const DcPage = () => {
  const publisher = "DC Comics";
  return (
    <>
      <h1 className="title">DC Comics</h1>
      <hr />

      <ul className="p-0">
        <HeroList publisher={publisher} />
      </ul>
    </>
  );
};
