// import axios from 'axios'
// import { options } from '../utils/contant'
// import { useDispatch } from 'react-redux'
// import { getTrailer } from '../redux/movieSlice';


// const useMovieById = async (movieId) => {
//     const dispatch = useDispatch();
//     try {
//         const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options)
//         console.log(res.data.results);
//         const trailer = res?.data?.results?.filter((item) => {
//             return item.type === "Trailer";
//         })
//         dispatch(getTrailer(trailer.length > 0 ? trailer[0] : res.data.results[0]))
//     } catch (error) {
//         console.log(error);
//     }
// }

// export default useMovieById

import axios from 'axios';
import { options } from "../utils/contant";
import { getTrailer } from "../redux/movieSlice";
import { useDispatch } from 'react-redux';


const useMovieById = (movieId) => {
    const dispatch = useDispatch();
    
    const fetchMovieById = async () => {
        try {
            // console.log(`Fetching data for movie ID: ${movieId}`); // Log the movie ID
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
            // console.log('API Response:', res.data.results); // Log the API response
            const trailer = res?.data?.results?.filter((item) => item.type === "Trailer");
            // console.log('Filtered Trailer:', trailer); // Log the filtered trailer
            dispatch(getTrailer(trailer.length > 0 ? trailer[0] : res.data.results[0]));
        } catch (error) {
            console.log('Error:', error); // Log any error
        }
    };

    return { fetchMovieById };
};

export default useMovieById;

