import axios from "axios";
import { useEffect } from "react";
import { baseImgUrl, options } from "../utils/constants";
import { useState } from "react";
import Loading from "./Loading";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios
      .get(
        `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id}`,
        options
      )
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div className="p-4">
      {!movies && <Loading />}
      {movies && (
        <>
          <h1 className="fs-1 mb-3">{genre.name}</h1>
          <Splide
            options={{
              gap: "10px",
              autoWidth: true,
              pagination: false,
            }}
          >
            {movies?.map((movie) => (
              // eslint-disable-next-line react/jsx-key
              <SplideSlide key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <img
                    className="movie"
                    src={baseImgUrl.concat(movie.poster_path)}
                  />
                </Link>
              </SplideSlide>
            ))}
          </Splide>
        </>
      )}
    </div>
  );
};

export default MovieList;
