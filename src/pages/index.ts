import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import { Link } from 'gatsby';
import Main_Layout from '../components/main_layout/index';
import SEO from '../components/seo/index';
import Signature from '../components/signature/index';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Card } from 'antd';

const IndexPage = ({ data }) => {
  const waka_chart_uri = `https://tsc-cors.herokuapp.com/https://wakatime.com/share/@738aac7f-8868-4bc3-a1df-4c36703ee4b6/ceee8d51-ec19-4686-9335-9b3da4600a50.json`;
  const waka_time_uri = `https://tsc-cors.herokuapp.com/https://wakatime.com/share/@738aac7f-8868-4bc3-a1df-4c36703ee4b6/e6af1af1-e9eb-4bf7-93ab-20e925e96b3a.json`;
  const post = data.markdownRemark;
  const waka_chart = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [],
      hoverBackgroundColor: [],
      borderColor: [],
      }]
  };
  const Signature_Container = styled.div`
    display: grid;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fill, 94%);
    @media (max-width: 992px) {
      grid-template-columns: repeat(auto-fill, 90%);
    }
  `;
  const Info_Container = styled.div`
    display: grid;
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fill, 45%);
    @media (max-width: 992px) {
      grid-template-columns: repeat(auto-fill, 90%);
    }
  `;
  const Styled_Card = styled(Card)`
    font-size: 1rem;
    transition: all 1000ms;
    overflow: hidden;
    border-color: #212121;
    @media (max-width: 992px) {
      font-size: 0.81rem;
    }
  `;
  const full_width = css({
    display: 'flex',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'space-around',
  });
  const flex_col = css({
    width: '32%',
  });
  const intro = css({
    textAlign: 'justified',
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
  const button_styles = css({
    ':hover': underline,
    textDecoration: 'none',
    width: '100%',
    backgroundColor: '#191919',
    color: '#ccc',
    transition: 'all 1000ms',
  });
  const post_styles = css({
    ':hover': underline,
    textDecoration: 'none',
    width: '100%',
    backgroundColor: '#191919',
    color: '#ccc',
    transition: 'all 1000ms',
  });
  const project_styles = css({
    ':hover': cta,
    textDecoration: 'none',
    width: '100%',
    background: '#663399',
    boxShadow: '0 18px 36px rgba(0, 0, 0, 075)',
    color: '#191919',
    transition: 'all 1000ms',
  });
  const resume_styles = css({
    ':hover': underline,
    textDecoration: 'none',
    color: '#ccc !important',
    transition: 'all 1000ms',
  });
  const chart_styles = css({
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
  const [total_seconds, setTotal_seconds] = useState();
  const [wakatime_total, setWakatime_total] = useState();
  const [wakatime_start, setWakatime_start] = useState();
  const [wakatime_languages, setWakatime_languages] = useState();

  useEffect(() => {
    axios
      .get(waka_chart_uri)
      .then((response) => {
        response?.data?.data?.forEach(waka => {
          waka_chart.labels.push(waka.name)
          waka_chart.datasets[0].data.push(waka.percent)
          waka_chart.datasets[0].backgroundColor.push(waka.color)
          waka_chart.datasets[0].hoverBackgroundColor.push(waka.color)
          waka_chart.datasets[0].borderColor.push(waka.color)
        })  

        waka_chart.labels.splice(12)
        waka_chart.datasets[0].data.splice(12)
        waka_chart.datasets[0].backgroundColor.splice(12)
        waka_chart.datasets[0].hoverBackgroundColor.splice(12)
        waka_chart.datasets[0].borderColor.splice(12)
        
        setWakatime_languages(waka_chart);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(waka_time_uri)
      .then((response) => {
        let waka = response.data.data;
        setTotal_seconds(waka.grand_total.total_seconds);
        setWakatime_total(waka.grand_total.human_readable_total);
        let start = new Date(waka.range.start);
        setWakatime_start(start.toDateString().replace(/^\S+\s/, ''));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const chart_options = {
    responsive: true,
    legend: {
      position: 'right',
      labels: {
        fontColor: '#ccc',
      },
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          let dataset = data.datasets[tooltipItem.datasetIndex];
          let currentValue = dataset.data[tooltipItem.index];
          let hrs = parseFloat(
            (((currentValue / 100) * total_seconds) / 3600).toFixed(2),
          );
          return ' ' + currentValue + '%' + ' ( ' + hrs + ' hrs )';
        },
        title: function (tooltipItem, data) {
          return data.labels[tooltipItem[0].index];
        },
        labelTextColor: function (tooltipItem, chart) {
          return '#ccc';
        },
      },
    },
  };
  return (
    <Main_Layout>
      <SEO title="Home" />
      <Signature_Container>
        <Styled_Card hoverable theme="dark">
          <Signature></Signature>
          <div css={full_width}>
            <div css={flex_col}>
              <Link to="/blog">
                <button css={post_styles}>Posts</button>
              </Link>
            </div>
            <div css={flex_col}>
              <Link to="/projects">
                <button css={project_styles}>Projects</button>
              </Link>
            </div>
            <div css={flex_col}>
              <a
                css={resume_styles}
                href={'/Tyler Campbell Resume (2020).pdf'}
                target="_blank"
              >
                <button css={button_styles}>Resume</button>
              </a>
            </div>
          </div>
        </Styled_Card>
      </Signature_Container>
      <br></br>
      <Info_Container>
        <Styled_Card hoverable theme="dark">
          <Title>{post.frontmatter.title}</Title>
          <div
            className={intro}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Styled_Card>
        <Styled_Card hoverable theme="dark" key="wakatimecard">
          <Title>What I've Been Working on:</Title>
          <Wakatime>
            {wakatime_total} tracked by{' '}
            <a href={'https://wakatime.com'} css={resume_styles}>
              Wakatime
            </a>{' '}
            since {wakatime_start}
          </Wakatime>
          <br></br>
          <Doughnut
            data={wakatime_languages}
            options={chart_options}
            width={100}
            height={75}
            css={chart_styles}
          />
        </Styled_Card>
      </Info_Container>
    </Main_Layout>
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
