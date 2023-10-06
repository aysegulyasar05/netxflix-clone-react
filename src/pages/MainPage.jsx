import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, getGenres } from "./../redux/actions/movieAction";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";

const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.movieReducer);

  useEffect(() => {
    dispatch(getMovies());

    dispatch(getGenres());
  }, []);

  return (
    <div>
      <Hero />
      {/* herbir kategori icin kategoriye ait filmeleri once api den alip sonra ekrana bas*/}
      {state.genres.map((genre) => (
        <MovieList key={genre.id} genre={genre} />
      ))}
    </div>
  );
};

export default MainPage;
