import axios from 'axios';
import { useDispatch } from 'react-redux'
import { options, Popular_API } from '../utils/contant';
import { getPopularMovies } from '../redux/movieSlice';

const usePopularMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Popular_API, options)
        dispatch(getPopularMovies(res.data.results))
    } catch (error) {
        console.log(error);
    }
}

export default usePopularMovies
