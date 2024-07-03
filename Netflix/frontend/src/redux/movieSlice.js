import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMovies = createSlice({
    name: "movie",
    initialState: {
        toggle: false,
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trailer: null
    },
    reducers: {
        setToggle: (state) => {
            state.toggle = !state.toggle;
        },
        getNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        getPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        getTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        getUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        },
        getTrailer: (state,action) => {
            state.trailer = action.payload
        }
    }
})

export const {setToggle, getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies, getTrailer} = nowPlayingMovies.actions;
export default nowPlayingMovies.reducer;