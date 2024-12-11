import { SeriesList } from "./Components/List";
import { Heading } from "./Components/Heading";
export const App = () => {
  return (
    <>
      <Heading />
      <div className="Cards">
        <SeriesList />
      </div>
    </>
  );
};
