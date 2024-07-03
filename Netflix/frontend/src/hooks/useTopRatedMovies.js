import axios from 'axios'
import { options, Top_Rated_API } from '../utils/contant'
import { useDispatch } from 'react-redux'
import { getTopRatedMovies } from '../redux/movieSlice'

const useTopRatedMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Top_Rated_API, options)
        dispatch(getTopRatedMovies(res.data.results))
    } catch (error) {
        console.log(error);
    }
}

export default useTopRatedMovies
