import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMovies = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
    },
    reducers: {
        getNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        getPopularMovies: (state, action) => {
            state.popularMovie = action.payload
        }
    }
})

export const {getNowPlayingMovies, getPopularMovies} = nowPlayingMovies.actions;
export default nowPlayingMovies.reducer;