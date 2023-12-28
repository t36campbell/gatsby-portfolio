import { ChartData } from 'chart.js';

export type WakaChart = ChartData<'doughnut', number[], string>;

export interface WakaLanguageData {
  color: string;
  name: string;
  percent: number;
}

export interface WakaTotalData {
  grand_total: {
    total_seconds: number;
    total_seconds_including_other_language: number;
    human_readable_daily_average: string;
    human_readable_daily_average_including_other_language: string;
    human_readable_total: number;
    human_readable_total_including_other_language: string;
  };
  range: {
    days_including_holidays: number;
    days_minus_holidays: number;
    start: string;
    end: string;
  };
}

export interface WakaData {
  days: number;
  dailyAverage: string;
  languages: WakaChart;
  start: string;
  total: string;
  totalSeconds: number;
}
