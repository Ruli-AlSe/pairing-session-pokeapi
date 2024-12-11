export const PokemonsPageSkeleton = () => {
  const arr = [...Array(21).keys()].slice(1);

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 my-5 sm:gap-1">
      <div className="h-auto col-span-1 flex items-center flex-col px-10 bg-white sm:rounded-s-3xl">
        <div className="h-40 w-40 mt-16 bg-gray-200 animate-pulse" />

        <div className="h-full w-full flex items-center justify-center">
          <div className="h-16 w-full bg-gray-200 animate-pulse" />
        </div>
      </div>
      <div className="col-span-2 flex flex-col bg-white px-2 sm:px-10 mt-2 sm:m-0 sm:rounded-e-3xl sm:max-h-fit max-h-[50vh] overflow-y-scroll">
        {arr.map((idx) => (
          <div key={idx} className="h-6 shadow-e-md my-1 rounded-md animate-pulse"></div>
        ))}
      </div>
    </div>
  );
};
