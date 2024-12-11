import files from "../api/Series2.json";
import { Card } from "./Card";

export const SeriesList = () => {
  return files.map((data) => {
    return <Card currentdata={data} />;
  });
};
