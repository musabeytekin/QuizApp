import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
    name: "score",
    initialState: {
        score: 0,
    },
    reducers: {
        increaseScore: (state) => {
            state.score = state.score + 10;
        },
        clearScore: (state) => {
            state.score = 0;
        }

    }
});

export const { increaseScore, clearScore } = scoreSlice.actions;

export default scoreSlice.reducer;