import axios from "axios";
import { Now_Playing_API, options } from "../utils/contant";
import { getNowPlayingMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = async () => {
    const dispatch = useDispatch();
    try {
      const res = await axios.get(Now_Playing_API, options)
      // console.log(res.data.results);
      dispatch(getNowPlayingMovies(res.data.results))
      
    } catch (error) {
      console.log(error);
    }
  }

  export default useNowPlayingMovies