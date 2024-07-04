import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        movieName: null,
        searchedMovies: null
    },
    reducers: {
        setSearchMoviesDetails: (state,action) => {
            const {searchMovie, movies} = action.payload;
            state.movieName = searchMovie;
            state.searchedMovies = movies;
        }
    }
})

export const {setSearchMoviesDetails} = searchSlice.actions;
export default searchSlice.reducer;