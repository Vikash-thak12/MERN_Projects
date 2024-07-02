import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMovies = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null
    },
    reducers: {
        getNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        }
    }
})

export const {getNowPlayingMovies} = nowPlayingMovies.actions;
export default nowPlayingMovies.reducer;