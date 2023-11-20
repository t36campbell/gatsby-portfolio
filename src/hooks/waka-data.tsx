import { useEffect, useState } from 'react';
import axios from 'axios';
import { ChartData } from 'chart.js';
import {
  WakaData,
  WakaLanguageData,
  WakaTotalData,
} from '@src/components/waka/waka.model';
import {
  draculaColors,
  initialLang,
} from '@src/components/waka/waka.constants';

const useWakaData = (): WakaData => {
  const [days, setDays] = useState<number>(0);
  const [dailyAverage, setDailyAverage] = useState<string>('');
  const [languages, setLanguages] =
    useState<ChartData<'doughnut', number[], string>>(initialLang);
  const [start, setStart] = useState<string>('');
  const [total, setTotal] = useState<number>(0);
  const [totalSeconds, setTotalSeconds] = useState<number>(0);

  useEffect(() => {
    const wakaBase =
      'https://cors.tylercampbell.space/https://wakatime.com/share/@738aac7f-8868-4bc3-a1df-4c36703ee4b6';
    const wakaChartUri = `${wakaBase}/ceee8d51-ec19-4686-9335-9b3da4600a50.json`;
    const wakaTimeUri = `${wakaBase}/e6af1af1-e9eb-4bf7-93ab-20e925e96b3a.json`;

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

        setLanguages({
          labels: waka?.map((w) => w.name),
          datasets: [
            {
              data: waka?.map((w) => w.percent),
              backgroundColor: draculaColors,
              hoverBackgroundColor: draculaColors,
              borderColor: draculaColors,
            },
          ],
        });
      })
      .catch((err: any) => {
        console.log(err);
      });

    axios
      .get(wakaTimeUri)
      .then((response: { data: { data: WakaTotalData } }) => {
        const waka: WakaTotalData = response.data.data;
        setDays(waka.range.days_minus_holidays);
        setDailyAverage(
          waka.grand_total
            .human_readable_daily_average_including_other_language,
        );
        setStart(waka.range.start);
        setTotal(
          waka.grand_total.human_readable_total_including_other_language,
        );
        setTotalSeconds(
          waka.grand_total.total_seconds_including_other_language,
        );
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  return { days, dailyAverage, languages, start, total, totalSeconds };
};

export default useWakaData;
