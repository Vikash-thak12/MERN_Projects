import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMovies = createSlice({
    name: "movie",
    initialState: {
        toggle: false,
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trailer: null,
        open: false,
        id: ""
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
        },
        setOpen: (state, action) => {
            state.open = action.payload
        },
        setId: (state, action) => {
            state.id = action.payload
        }
    }
})

export const {setToggle, getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies, getTrailer, setOpen, setId} = nowPlayingMovies.actions;
export default nowPlayingMovies.reducer;