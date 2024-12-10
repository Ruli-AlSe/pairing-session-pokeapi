import { useCounterStore } from '../../hooks';

export const FirstPage = () => {
  const { decrementCounter, incrementCounter, value } = useCounterStore();

  return (
    <div>
      <h1>FirstPage</h1>
      <hr />
      <a href="/second-page">Go to second page</a>

      <div>
        <button onClick={decrementCounter}>Decrement</button>
        <p>{value}</p>
        <button onClick={incrementCounter}>Increment</button>
      </div>
    </div>
  );
};
