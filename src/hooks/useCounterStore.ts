import { onDecrement, onIncrement, useAppDispatch, useAppSelector } from '../store';

export const useCounterStore = () => {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const incrementCounter = () => {
    dispatch(onIncrement());
  };

  const decrementCounter = () => {
    dispatch(onDecrement());
  };

  return {
    //* Properties
    value,
    //* Methods
    decrementCounter,
    incrementCounter,
  };
};
