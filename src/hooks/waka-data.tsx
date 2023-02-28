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
  const [totalSeconds, setTotalSeconds] = useState<number>(0);
  const [wakatimeTotal, setWakatimeTotal] = useState<number>(0);
  const [wakatimeLanguages, setWakatimeLanguages] =
    useState<ChartData<'doughnut', number[], string>>(initialLang);

  useEffect(() => {
    const wakaBaseUrl =
      'https://cors.tylercampbell.space/https://wakatime.com/share/@738aac7f-8868-4bc3-a1df-4c36703ee4b6';
    const wakaChartUri = `${wakaBaseUrl}/ceee8d51-ec19-4686-9335-9b3da4600a50.json`;
    const wakaTimeUri = `${wakaBaseUrl}/e6af1af1-e9eb-4bf7-93ab-20e925e96b3a.json`;

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
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { totalSeconds, wakatimeTotal, wakatimeLanguages };
};

export default useWakaData;
