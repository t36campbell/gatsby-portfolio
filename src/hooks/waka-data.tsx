import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  WakaChart,
  WakaData,
  WakaLanguageData,
  WakaTotalData,
} from '@src/components/waka/waka.model';
import {
  draculaColors,
  initialLang,
} from '@src/components/waka/waka.constants';
import useHomeVisited from './home-visited';

const useWakaData = (): WakaData => {
  const getItem = (key: string): string | null => {
    return sessionStorage.getItem(key);
  };
  const setItem = <T,>(
    key: string,
    state: T,
    callback: React.Dispatch<React.SetStateAction<T>>,
  ) => {
    callback(state);
    sessionStorage.setItem(key, JSON.stringify(state));
  };

  const visited = useHomeVisited();
  const [days, setDays] = useState<number>(0);
  const [dailyAverage, setDailyAverage] = useState<string>('');
  const [languages, setLanguages] = useState<WakaChart>(initialLang);
  const [start, setStart] = useState<string>('');
  const [total, setTotal] = useState<string>('');
  const [totalSeconds, setTotalSeconds] = useState<number>(0);

  useEffect(() => {
    const wakaBase =
      'https://cors.tylercampbell.space/https://wakatime.com/share/@738aac7f-8868-4bc3-a1df-4c36703ee4b6';
    const wakaChartUri = `${wakaBase}/ceee8d51-ec19-4686-9335-9b3da4600a50.json`;
    const wakaTimeUri = `${wakaBase}/e6af1af1-e9eb-4bf7-93ab-20e925e96b3a.json`;

    const defaultDays = getItem('wakaDays') ?? 0;
    setDays(+defaultDays);
    const defaultDailyAverage = getItem('wakaDailyAverage') ?? '';
    setDailyAverage(defaultDailyAverage.replace(/['"]+/g, ''));
    const defaultLanguages =
      getItem('wakaLanguages') ?? JSON.stringify(initialLang);
    setLanguages(JSON.parse(defaultLanguages));
    const defaultStart = getItem('wakaStart') ?? '';
    setStart(defaultStart);
    const defaultTotal = getItem('wakaTotal') ?? '';
    setTotal(defaultTotal.replace(/['"]+/g, ''));
    const defaultTotalSeconds = getItem('wakaTotalSeconds') ?? 0;
    setTotalSeconds(+defaultTotalSeconds);

    const shouldGetData = () => {
      return !(
        visited &&
        defaultDays &&
        defaultDailyAverage &&
        defaultLanguages &&
        defaultStart &&
        defaultTotal &&
        defaultTotalSeconds
      );
    };

    if (shouldGetData()) {
      axios
        .get(wakaChartUri)
        .then((response: { data: { data: WakaLanguageData[] } }) => {
          const data: WakaLanguageData[] = response?.data?.data.slice(0, 13);
          const vueData = data.find((w) => w.name.includes('Vue'));
          const jsData = data.find((w) => w.name.includes('JavaScript'));
          const nameFilter = ['JavaScript', 'Vue.js'];
          const waka: WakaLanguageData[] = data.filter(
            (w) => !nameFilter.includes(w.name),
          );

          if (vueData && jsData) {
            jsData.percent += vueData.percent;
            waka.push(jsData);
          }
          waka.sort((a, b) => b.percent - a.percent);

          setItem(
            'wakaLanguages',
            {
              labels: waka?.map((w) => w.name),
              datasets: [
                {
                  data: waka?.map((w) => w.percent),
                  backgroundColor: draculaColors,
                  hoverBackgroundColor: draculaColors,
                  borderColor: draculaColors,
                },
              ],
            },
            setLanguages,
          );
        })
        .catch((err: any) => {
          console.log(err);
        });

      axios
        .get(wakaTimeUri)
        .then((response: { data: { data: WakaTotalData } }) => {
          const waka: WakaTotalData = response.data.data;
          setItem('wakaDays', waka.range.days_minus_holidays, setDays);
          setItem(
            'wakaDailyAverage',
            waka.grand_total
              .human_readable_daily_average_including_other_language,
            setDailyAverage,
          );
          setItem('wakaStart', waka.range.start, setStart);
          setItem(
            'wakaTotal',
            waka.grand_total.human_readable_total_including_other_language,
            setTotal,
          );
          setItem(
            'wakaTotalSeconds',
            waka.grand_total.total_seconds_including_other_language,
            setTotalSeconds,
          );
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  }, [visited]);

  console.log({ dailyAverage, days, languages, start, total, totalSeconds });

  return { dailyAverage, days, languages, start, total, totalSeconds };
};

export default useWakaData;
