import React, { FC } from 'react';
import 'chart.js/auto';
import { TooltipItem, ChartOptions } from 'chart.js';
import { ChartProps, Doughnut } from 'react-chartjs-2';
import useWakaData from '@src/hooks/waka-data';

interface WakaProps {
  start?: string;
}

const Waka: FC<WakaProps> = () => {
  const { dailyAverage, languages, start, total, totalSeconds } = useWakaData();
  const formattedStart = new Date(start).toDateString().slice(4);

  const generateLabel = (context: TooltipItem<'doughnut'>) => {
    const percent = +context.formattedValue;
    const hours = (((percent / 100) * totalSeconds) / 3600).toFixed(2);
    return ` ${percent}% ( ${hours} hrs )`;
  };

  const chartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    layout: {
      padding: {
        left: 4,
      },
    },
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#ccc',
        },
      },
      tooltip: {
        callbacks: {
          title: (context) => context[0].label,
          label: generateLabel,
          labelTextColor: () => '#ccc',
        },
      },
    },
  };

  const chartProps: ChartProps<'doughnut'> = {
    type: 'doughnut',
    updateMode: 'active',
    options: chartOptions,
    data: languages,
    height: 100,
    width: 100,
  };

  return (
    <>
      <div className='text-center mb-6'>
        {`${total} ( ${dailyAverage} / day ) `}
        <br />
        <span>
          tracked by{' '}
          <a
            aria-label='wakatime.com'
            className='hover:underline'
            href='https://wakatime.com'
          >
            {' '}
            Wakatime
          </a>{' '}
          {` since ${formattedStart}`}
        </span>
      </div>
      <div className='-my-12'>
        <Doughnut {...chartProps} />
      </div>
    </>
  );
};

export default Waka;
