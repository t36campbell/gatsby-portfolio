import React, { FC } from 'react';
import 'chart.js/auto';
import moment from 'moment';
import { TooltipItem, ChartOptions } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import useWakaData from '@src/hooks/waka-data';

interface WakaProps {
  wakatimeStart?: string;
}

const Waka: FC<WakaProps> = ({ wakatimeStart = '2022-03-28' }) => {
  const { totalSeconds, wakatimeTotal, wakatimeLanguages } = useWakaData();
  const start = moment(wakatimeStart);
  const today = moment();
  const days = today.diff(start, 'days');
  const totalHours = totalSeconds / 3600;
  const formattedStart = start.fromNow(true);
  const average = (totalHours / days).toFixed(1);
  const [hours, remainder] = average.split('.');
  const formattedAvg = `${hours} hrs ${(+remainder / 10) * 60} mins`;

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
        {`${wakatimeTotal} ( ${formattedAvg} / day ) `}
        <span>
          tracked by <a href='https://wakatime.com'> Wakatime</a>{' '}
          {` for ${formattedStart}`}
        </span>
      </div>
      <Chart type='doughnut' {...charProps} />
    </>
  );
};

export default Waka;
