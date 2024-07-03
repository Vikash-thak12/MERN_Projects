import axios from 'axios'
import { options } from '../utils/contant'
import { useDispatch } from 'react-redux'
import { getTrailer } from '../redux/movieSlice';

const useMovieById = async (id) => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`, options)
        // console.log(res.data.results);
        const trailer = res?.data?.results?.filter((item) => {
            return item.type === "Trailer";
        })
        dispatch(getTrailer(trailer.length > 0 ? trailer[0] : res.data.results[0]))
    } catch (error) {
        console.log(error);
    }
}

export default useMovieById
