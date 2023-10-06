
import axios from 'axios'
import { options } from '../../utils/constants';
import { actionTypes } from './actionTypes';

//temel api url
axios.defaults.baseURL = 'https://api.themoviedb.org/3';


//asenkron aksiyon: hem veri cek.hem stora aktar

export const getMovies = () => (dispatch) => {
    axios
        .get("/movie/popular", options)
        .then((res) => dispatch({
            type: actionTypes.SET_MOVIES,
            payload: res.data.results,
        })

        );


};

//kategori verilerini cek store aktar

export const getGenres = () => (dispatch) => {
    axios
        .get('/genre/movie/list?language=en', options)
        .then((res) =>
            //reducer a gonderme
            dispatch({
                type: actionTypes.SET_CATEGORIES,
                payload: res.data.genres,
            })
        )
}