import { useCounterStore } from '../../hooks';

export const FirstPage = () => {
  const { decrementCounter, incrementCounter, value } = useCounterStore();

  return (
    <div>
      <h1>FirstPage</h1>
      <hr />
      <a href="/second-page">Go to second page</a>

      <div className="flex mt-10 gap-5 items-center">
        <button
          className="bg-blue-500 px-3 py-1 text-white font-bold rounded-full"
          onClick={decrementCounter}
        >
          Decrement
        </button>
        <p className="text-2xl text-gray-800 font-bold">{value}</p>
        <button
          className="bg-blue-500 px-3 py-1 text-white font-bold rounded-full"
          onClick={incrementCounter}
        >
          Increment
        </button>
      </div>
    </div>
  );
};
