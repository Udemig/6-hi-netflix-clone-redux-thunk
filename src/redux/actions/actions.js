import axios from "axios";
import { actionTypes } from "../actionTypes";
import { options } from "../../contants";

// Senkron Action
export const setLoading = (payload) => ({
  type: actionTypes.SET_LOADING,
  payload: payload,
});

//Hem verileri çeksin hemde reduceri

//Asenkron Kısım 
export const getMovies=()=>{

  return async function(dispatch){

    const res=await axios.get("https://api.themoviedb.org/3/movie/popular",options)
    dispatch({
      type:actionTypes.SET_MOVIES,
      payload:res.data
    })


  }
}