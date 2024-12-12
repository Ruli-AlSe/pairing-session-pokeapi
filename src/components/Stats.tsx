import clsx from 'clsx';
import { Stat } from '../interfaces';

export const Stats = ({ stats }: { stats: Stat[] }) => {
  return (
    <div className="w-full grid grid-cols-1">
      <p className="font-bold mb-5">Stats</p>

      {stats.map((s) => (
        <div key={s.stat.name} className="w-full grid grid-cols-2">
          <p className="font-bold capitalize">{s.stat.name}</p>
          <div className="font-bold flex">
            <span>{s.base_stat}</span>
            &nbsp;
            <ProgressBar percentage={s.base_stat} />
          </div>
        </div>
      ))}
    </div>
  );
};

const ProgressBar = ({ percentage }: { percentage: number }) => {
  const validPercentage = percentage > 100 ? 100 : percentage < 0 ? 0 : percentage;

  return (
    <div className="h-5 w-full bg-gray-200 rounded-2xl">
      <div
        className={clsx('h-5 bg-red-500 z-10', {
          'rounded-s-2xl': validPercentage < 100,
          'rounded-2xl': validPercentage === 100,
        })}
        style={{ width: `${validPercentage}%` }}
      />
    </div>
  );
};
