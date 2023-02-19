/* eslint-disable no-use-before-define */
'use client';
import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import Chart, {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CoreChartOptions,
  DatasetChartOptions,
  ElementChartOptions,
  PluginChartOptions,
  ScaleChartOptions,
  DoughnutControllerChartOptions,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';

const Waka: FC<WakaProps> = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const wakaBaseUrl =
    'https://cors.tylercampbell.space/https://wakatime.com/share/@738aac7f-8868-4bc3-a1df-4c36703ee4b6';
  const wakaChartUri = `${wakaBaseUrl}/ceee8d51-ec19-4686-9335-9b3da4600a50.json`;
  const wakaTimeUri = `${wakaBaseUrl}/e6af1af1-e9eb-4bf7-93ab-20e925e96b3a.json`;

  const [totalSeconds, setTotalSeconds] = useState<number>(0);
  const [wakatimeTotal, setWakatimeTotal] = useState<number>(0);
  const [wakatimeStart, setWakatimeStart] = useState<string>('');
  const [wakatimeLanguages, setWakatimeLanguages] = useState<
    Chart.ChartData<'doughnut', number[], string>
  >({
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  });

  useEffect(() => {
    const draculaColors = [
      '#0dbfe5',
      '#6916e0',
      '#0ccd3d',
      '#f38107',
      '#d90880',
      '#0ca0bf',
      '#5914bb',
      '#b3086b',
      '#b1b5d0',
      '#0ba833',
      '#cd6d08',
      '#485273',
    ];

    axios
      .get(wakaChartUri)
      .then((response) => {
        const wakaData: WakaLanguageData[] = response?.data?.data.slice(0, 12);
        setWakatimeLanguages({
          labels: wakaData?.map((waka) => waka.name),
          datasets: [
            {
              data: wakaData?.map((waka) => waka.percent),
              backgroundColor: draculaColors,
              hoverBackgroundColor: draculaColors,
              borderColor: draculaColors,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(wakaTimeUri)
      .then((response) => {
        const waka: WakaTotalData = response.data.data;
        setTotalSeconds(waka.grand_total.total_seconds);
        setWakatimeTotal(waka.grand_total.human_readable_total);
        const start = new Date(waka.range.start);
        setWakatimeStart(start.toDateString().replace(/^\S+\s/, ''));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [wakaChartUri, wakaTimeUri]);

  const chartOptions = {
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
          label: (context: { raw: number }) =>
            ` ${+context.raw}% ( ${parseFloat(
              (((+context.raw / 100) * totalSeconds) / 3600).toFixed(2),
            )} hrs )`,
          labelTextColor: () => '#ccc',
        },
      },
    },
  } as DoughnutChartOptions;
  return (
    <>
      <span className='text-center'>
        {wakatimeTotal} tracked by <a href='https://wakatime.com'>Wakatime</a>{' '}
        since {wakatimeStart}
      </span>
      <br />
      <Doughnut
        data={wakatimeLanguages}
        options={chartOptions}
        width={100}
        height={75}
      />
    </>
  );
};

interface WakaProps {}

interface WakaLanguageData {
  color: string;
  name: string;
  percent: number;
}

interface WakaTotalData {
  grand_total: {
    total_seconds: number;
    human_readable_total: number;
  };
  range: {
    start: string;
  };
}

type DoughnutChartOptions = _DeepPartialObject<
  CoreChartOptions<'doughnut'> &
    ElementChartOptions<'doughnut'> &
    PluginChartOptions<'doughnut'> &
    DatasetChartOptions<'doughnut'> &
    ScaleChartOptions<'doughnut'> &
    DoughnutControllerChartOptions
>;

export default Waka;
