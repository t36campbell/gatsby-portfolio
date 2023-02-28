import React, { FC } from 'react';
import 'chart.js/auto';
import { TooltipItem, ChartOptions } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import useWakaData from '@src/hooks/waka-data';

interface WakaProps {
  wakatimeStart?: string;
}

const Waka: FC<WakaProps> = ({ wakatimeStart = 'Mar 28 2022' }) => {
  const { totalSeconds, wakatimeTotal, wakatimeLanguages } = useWakaData();

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

  const charProps = {
    data: wakatimeLanguages,
    options: chartOptions,
    width: 100,
    height: 75,
  };

  return (
    <>
      <div className='text-center mb-6'>
        {`${wakatimeTotal} tracked by `}
        <a href='https://wakatime.com'>Wakatime</a>
        {` since ${wakatimeStart}`}
      </div>
      <Chart type='doughnut' {...charProps} />
    </>
  );
};

export default Waka;
