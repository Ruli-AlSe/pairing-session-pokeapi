import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 10,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    onIncrement: (state) => {
      state.value += 1;
    },
    onDecrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { onIncrement, onDecrement } = counterSlice.actions;
