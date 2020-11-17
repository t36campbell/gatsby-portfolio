import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import axios from "axios"
import { Doughnut } from 'react-chartjs-2';
import { Link } from "gatsby"
import Main_Layout from "../components/main_layout/index"
import SEO from "../components/seo/index"
import Signature from "../components/signature/index"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Card} from 'antd';

const IndexPage = ({ data }) => {
  const post = data.markdownRemark
  const Signature_Container = styled.div`
    display: grid;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fill, 94%);
    @media (max-width: 992px) {
      grid-template-columns: repeat(auto-fill, 90%);
    }
  `
  const Info_Container = styled.div`
    display: grid;
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fill, 45%);
    @media (max-width: 992px) {
      grid-template-columns: repeat(auto-fill, 90%);
    }
  `
  const Styled_Card = styled(Card)`
    font-size: 1rem;
    transition: all 1000ms;
    overflow: hidden;
    border-color: #212121;
    @media (max-width: 992px) {
      font-size: .81rem;
    }
  `
  const full_width = css({
    display: "flex",
    width: "100%",
    textAlign: "center",
    justifyContent: "space-around"
  })
  const flex_col = css({
    width: "32%",
  })
  const intro = css({
    textAlign: "justified"
  })
  const underline = css({
    textDecoration: "underline",
    color: "#ccc",
    background: "#242424",
  })
  const cta = css({
    textDecoration: "underline",
    background: "#8a4baf", 
  })
  const button_styles = css({
    ":hover": underline,
    textDecoration: "none",
    width: "100%",
    backgroundColor: "#191919",
    color: "#ccc",
    transition: "all 1000ms",
  })
  const post_styles = css({
    ":hover": underline,
    textDecoration: "none",
    width: "100%",
    backgroundColor: "#191919",
    color: "#ccc",
    transition: "all 1000ms",
  })
  const project_styles = css({
    ":hover": cta,
    textDecoration: "none",
    width: "100%",
    background: "#663399",
    boxShadow:  "0 18px 36px rgba(0, 0, 0, 075)",
    color: "#191919",
    transition: "all 1000ms",
  })
  const resume_styles = css({
    ":hover": underline,
    textDecoration: "none",
    color: "#ccc",
    transition: "all 1000ms",
  })
  const chart_styles = css({
    maxWidth: "900px",
    margin: "16px",
    marginTop: "0"
  })
  const Title = styled.h1`
    text-align: center;
    font-size: 1.2rem;
    @media (max-width: 992px) {
      font-size: 1rem;
    }
  `
  const Wakatime = styled.p`
    text-align: center;
    font-size: 1rem;
  `
  const [wakatime_total, setWakatime_total] = useState()
  const [total_seconds, setTotal_seconds] = useState()
  const [wakatime_languages, setWakatime_languages] = useState()
  
  useEffect(() => {
    axios.get(`https://wakatime.com/share/@738aac7f-8868-4bc3-a1df-4c36703ee4b6/ceee8d51-ec19-4686-9335-9b3da4600a50.json`)
      .then(response => {
        let waka = response.data.data
        const waka_chart = {
          labels: [
            waka.[0].name,
            waka.[1].name,
            waka.[2].name,
            waka.[3].name,
            waka.[4].name,
            waka.[6].name,
            waka.[7].name,
            waka.[8].name,
            waka.[9].name,
          ],
          datasets: [{
            data: [
              waka.[0].percent,
              waka.[1].percent,
              waka.[2].percent,
              waka.[3].percent,
              waka.[4].percent,
              waka.[6].percent,
              waka.[7].percent,
              waka.[8].percent,
              waka.[9].percent,
            ],
            backgroundColor: [
              waka.[0].color,
              waka.[1].color,
              waka.[2].color,
              waka.[3].color,
              waka.[4].color,
              waka.[6].color,
              waka.[7].color,
              waka.[8].color,
              waka.[9].color,
            ],
            hoverBackgroundColor: [
              waka.[0].color,
              waka.[1].color,
              waka.[2].color,
              waka.[3].color,
              waka.[4].color,
              waka.[6].color,
              waka.[7].color,
              waka.[8].color,
              waka.[9].color,
            ],
            borderColor: [
              waka.[0].color,
              waka.[1].color,
              waka.[2].color,
              waka.[3].color,
              waka.[4].color,
              waka.[6].color,
              waka.[7].color,
              waka.[8].color,
              waka.[9].color,
            ]
          }]
        };
        setWakatime_languages(waka_chart)
      })
    axios.get(`https://wakatime.com/share/@738aac7f-8868-4bc3-a1df-4c36703ee4b6/e6af1af1-e9eb-4bf7-93ab-20e925e96b3a.json`)
    .then(response => {
      let waka = response.data.data
      setWakatime_total(waka.grand_total.human_readable_total)
      setTotal_seconds(waka.grand_total.total_seconds)
    }) 
  }, [])
  
  const chart_options = {
    responsive: true,
    legend: {
      position: 'right',
      labels: {
        fontColor: '#ccc'
      }
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          let dataset = data.datasets[tooltipItem.datasetIndex];
          let currentValue = dataset.data[tooltipItem.index];
          let hrs = parseFloat((currentValue / 100 * total_seconds / 3600).toFixed(2));
          return ' ' + currentValue + '%' + ' ( ' + hrs + ' hrs )'
        },
        title: function(tooltipItem, data) {
          return data.labels[tooltipItem[0].index];
        },
        labelTextColor: function(tooltipItem, chart) {
            return '#ccc';
        }
      }
    }
  }
  return (
    <Main_Layout>
      <SEO title="Home" />
        <Signature_Container>
          <Styled_Card
            hoverable
            theme="dark"
          >
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
                <a css={resume_styles} href={'/Tyler Campbell Resume (2020).pdf'} target="_blank">
                  <button css={button_styles}>Resume</button>
                </a>
              </div>  
            </div>
          </Styled_Card>
        </Signature_Container>
        <br></br>
        <Info_Container>
          <Styled_Card
            hoverable
            theme="dark"
          >
            <Title>{post.frontmatter.title}</Title>
            <div className={intro} dangerouslySetInnerHTML={{ __html: post.html }}/>
          </Styled_Card>
          <Styled_Card
            hoverable
            theme="dark"
            key="wakatimecard"
          >
            <Title>What I've Been Working on:</Title>
            <Wakatime>
              {wakatime_total} tracked by <a href={"https://wakatime.com"} css={resume_styles}>Wakatime</a>
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
  )
}
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
`
export default IndexPage
