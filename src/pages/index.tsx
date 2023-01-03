import React, { useState, useEffect } from 'react';
import { graphql, PageProps, Link } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import axios from 'axios';
import Chart, {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CoreChartOptions,
  ElementChartOptions,
  PluginChartOptions,
  DatasetChartOptions,
  ScaleChartOptions,
  DoughnutControllerChartOptions,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Card } from 'antd';
import MainLayout from '../components/main-layout/index';
import SEO from '../components/seo/index';
import Signature from '../components/signature/index';

const IndexPage = ({ data }: PageProps<QueryResult>): JSX.Element => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const wakaBaseUrl =
    'https://cors.tylercampbell.space/https://wakatime.com/share/@738aac7f-8868-4bc3-a1df-4c36703ee4b6';
  const wakaChartUri = `${wakaBaseUrl}/ceee8d51-ec19-4686-9335-9b3da4600a50.json`;
  const wakaTimeUri = `${wakaBaseUrl}/e6af1af1-e9eb-4bf7-93ab-20e925e96b3a.json`;

  const SignatureContainer = styled.div`
    display: grid;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fill, 94%);
    @media (max-width: 992px) {
      grid-template-columns: repeat(auto-fill, 90%);
    }
  `;
  const InfoContainer = styled.div`
    display: grid;
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fill, 45%);
    @media (max-width: 992px) {
      grid-template-columns: repeat(auto-fill, 90%);
    }
  `;
  const StyledCard = styled(Card)`
    font-size: 1rem;
    transition: all 1000ms;
    overflow: hidden;
    border-color: #212121;
    @media (max-width: 992px) {
      font-size: 0.81rem;
    }
  `;
  const fullWidth = css({
    display: 'flex',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'space-around',
  });
  const flexCol = css({
    width: '32%',
  });
  const intro = css({
    'text-align': 'justified',
  });
  const underline = css({
    textDecoration: 'underline',
    color: '#ccc',
    background: '#242424',
  });
  const cta = css({
    textDecoration: 'underline',
    background: '#8a4baf',
  });
  const buttonStyles = css({
    '&:hover': underline,
    textDecoration: 'none',
    width: '100%',
    backgroundColor: '#191919',
    color: '#ccc',
    transition: 'all 1000ms',
  });
  const postStyles = css({
    '&:hover': underline,
    textDecoration: 'none',
    width: '100%',
    backgroundColor: '#191919',
    color: '#ccc',
    transition: 'all 1000ms',
  });
  const projectStyles = css({
    '&:hover': cta,
    textDecoration: 'none',
    width: '100%',
    background: '#663399',
    boxShadow: '0 18px 36px rgba(0, 0, 0, 075)',
    color: '#191919',
    transition: 'all 1000ms',
  });
  const resumeStyles = css({
    '&:hover': underline,
    textDecoration: 'none',
    color: '#ccc !important',
    transition: 'all 1000ms',
  });
  const chartStyles = css({
    maxWidth: '900px',
    margin: '16px',
    marginTop: '0',
  });
  const Title = styled.h1`
    text-align: center;
    font-size: 1.2rem;
    @media (max-width: 992px) {
      font-size: 1rem;
    }
  `;
  const Wakatime = styled.p`
    text-align: center;
    font-size: 1rem;
  `;
  const post = data.markdownRemark;
  const [totalSeconds, setTotalSeconds] = useState<number>(null);
  const [wakatimeTotal, setWakatimeTotal] = useState<number>(null);
  const [wakatimeStart, setWakatimeStart] = useState<string>(null);
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
    axios
      .get(wakaChartUri)
      .then((response) => {
        const wakaData = response?.data?.data.slice(0, 12);
        const colors = wakaData.map((waka) => waka.color);
        setWakatimeLanguages({
          labels: wakaData.map((waka) => waka.name),
          datasets: [
            {
              data: wakaData.map((waka) => waka.percent),
              backgroundColor: colors,
              hoverBackgroundColor: colors,
              borderColor: colors,
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
        const waka = response.data.data;
        setTotalSeconds(waka.grand_total.total_seconds);
        setWakatimeTotal(waka.grand_total.human_readable_total);
        const start = new Date(waka.range.start);
        setWakatimeStart(start.toDateString().replace(/^\S+\s/, ''));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const chartOptions: DoughnutChartOptions = {
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
          label: (context) =>
            ` ${+context.raw}% ( ${parseFloat(
              (((+context.raw / 100) * totalSeconds) / 3600).toFixed(2),
            )} hrs )`,
          labelTextColor: () => '#ccc',
        },
      },
    },
  };

  return (
    <MainLayout>
      <SEO title="Home" />
      <SignatureContainer>
        <StyledCard hoverable theme="dark">
          <Signature />
          <div css={fullWidth}>
            <div css={flexCol}>
              <Link to="/blog">
                <button css={postStyles}>Posts</button>
              </Link>
            </div>
            <div css={flexCol}>
              <Link to="/projects">
                <button css={projectStyles}>Projects</button>
              </Link>
            </div>
            <div css={flexCol}>
              <a
                css={resumeStyles}
                href="/Tyler Campbell Resume (2022).pdf"
                target="_blank"
                rel="noreferrer"
              >
                <button css={buttonStyles}>Resume</button>
              </a>
            </div>
          </div>
        </StyledCard>
      </SignatureContainer>
      <br />
      <InfoContainer>
        <StyledCard hoverable theme="dark">
          <Title>{post.frontmatter.title}</Title>
          <div css={intro} dangerouslySetInnerHTML={{ __html: post.html }} />
        </StyledCard>
        <StyledCard hoverable theme="dark" key="wakatimecard">
          <Title>What I&apos;ve Been Working on&#58;</Title>
          <Wakatime>
            {wakatimeTotal} tracked by{' '}
            <a href="https://wakatime.com" css={resumeStyles}>
              Wakatime
            </a>{' '}
            since {wakatimeStart}
          </Wakatime>
          <br />
          <Doughnut
            data={wakatimeLanguages}
            plugins={[Legend, Tooltip]}
            options={chartOptions}
            width={100}
            height={75}
            css={chartStyles}
          />
        </StyledCard>
      </InfoContainer>
    </MainLayout>
  );
};

export const postQuery = graphql`
  query AboutPostByPath($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        published
        image
        link
      }
    }
  }
`;

export default IndexPage;

type DoughnutChartOptions = CoreChartOptions<'doughnut'> &
  ElementChartOptions<'doughnut'> &
  PluginChartOptions<'doughnut'> &
  DatasetChartOptions<'doughnut'> &
  ScaleChartOptions &
  DoughnutControllerChartOptions;
interface QueryResult {
  markdownRemark: {
    html: any;
    frontmatter: {
      path: string;
      title: string;
      author: string;
      published: string;
      image: string;
      link: string;
    };
  };
}
