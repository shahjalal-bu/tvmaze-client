import Error from "../../Shared/Error/Error";
import Loading from "../../Shared/Loading/Loading";
import Thumbnail from "../Thumbnail/Thumbnail";
import { useQuery } from "@tanstack/react-query";
const Home = () => {
  const {
    isLoading,
    isError,
    error,
    data: tvDatum,
  } = useQuery(["tvData"], () =>
    fetch("https://api.tvmaze.com/search/shows?q=all").then((res) => res.json())
  );
  if (isLoading) return <Loading />;
  if (isError) return <Error message={error} />;
  if (tvDatum.length <= 0) return <>No data found..</>;
  return (
    <div className="container p-5">
      <div className="row g-5">
        {tvDatum?.map((tvData) => (
          <Thumbnail key={tvData.show.id} tvData={tvData} />
        ))}
      </div>
    </div>
  );
};

export default Home;
