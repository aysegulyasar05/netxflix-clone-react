import { useSelector } from "react-redux";
import Loading from "./Loading";
import { baseImgUrl } from "../utils/constants";

const Hero = () => {
  // store'daki movieReducer'a abone olma
  const state = useSelector((store) => store.movieReducer);

  //   dizi uzunlupuna göre rastgele sayı bulma
  const i = Math.floor(Math.random() * state.popularMovies.length);

  // rastgele bir filmme erişme
  const movie = state.popularMovies[i];
  console.log(i, movie);
  return (
    <div>
      <div className="row p-4">
        {/* api'dan cevap bekleniyorsa */}
        {state.isLoading && <Loading />}

        {/* verii geldiyse arayüzü bas */}
        {!state.isLoading && (
          <>
            <div className="col-md-6 d-flex flex-column  align-items-center align-items-md-start  justify-content-center mb-3 gap-3">
              <h1> {movie.title} </h1>
              <p className="lead">{movie.overview}</p>
              <p className="text-warning fw-bold text-center text-md-start">
                IMDB: {movie.vote_average}
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-danger">Filmi İzle</button>
                <button className="btn btn-info">Film Detay</button>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img
                className="img-fluid rounded shadow"
                src={baseImgUrl.concat(movie.backdrop_path)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;
