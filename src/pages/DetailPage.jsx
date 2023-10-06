import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseImgUrl, options } from "../utils/constants";
import { useState } from "react";
import Loading from "../components/Loading";
import Badges from "../components/Badges";
const DetailPage = () => {
  const [movie, setMovie] = useState(null);
  //url den Id ye erisme
  const { movieId } = useParams();

  useEffect(() => {
    axios.get(`/movie/${movieId}`, options).then((res) => setMovie(res.data));
  }, []);
  return (
    <div className="movie-detail row p-4">
      {!movie ? (
        <Loading />
      ) : (
        <>
          <div className="col-md-4 position-relative">
            <img
              className="rounded shadow img-fluid w-100"
              src={baseImgUrl.concat(movie.poster_path)}
            />
            <p
              style={{ right: "30px" }}
              className="position-absolute fs-5 bg-warning rounded p-1 bottom-0"
            >
              {movie.vote_average.toFixed(1)}
            </p>
          </div>
          <div className="col-md-8">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <div className="row">
              <div>
                <Badges
                  title="Categories"
                  list={movie.genres}
                  color="bg-primary"
                />
                <Badges
                  title="Languages"
                  list={movie.spoken_languages}
                  color="bg-success"
                />
                <Badges
                  title="Production Companies"
                  list={movie.production_companies}
                  color="bg-danger"
                />
              </div>
              <div>
                <p>Budget: {movie.budget}</p>
                <p>Revenue: {movie.revenue}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailPage;
