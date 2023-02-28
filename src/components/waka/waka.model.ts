import Chart from 'chart.js';

export interface WakaLanguageData {
  color: string;
  name: string;
  percent: number;
}

export interface WakaTotalData {
  grand_total: {
    total_seconds: number;
    human_readable_total: number;
  };
  range: {
    start: string;
  };
}

export interface WakaData {
  totalSeconds: number;
  wakatimeTotal: number;
  wakatimeLanguages: Chart.ChartData<'doughnut', number[], string>;
}
