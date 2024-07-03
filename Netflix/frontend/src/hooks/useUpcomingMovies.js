import axios from 'axios'
import { options, Upcoming_API } from '../utils/contant'
import { useDispatch } from 'react-redux'
import { getUpcomingMovies } from '../redux/movieSlice'

const useUpcomingMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Upcoming_API, options);
        dispatch(getUpcomingMovies(res.data.results))
    } catch (error) {
        console.log(error);
    }
}

export default useUpcomingMovies
