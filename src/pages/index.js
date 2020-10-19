import React, { useState, useEffect } from "react"
import axios from "axios"
import { Doughnut } from 'react-chartjs-2';
import { Link } from "gatsby"
import Main_Layout from "../components/main_layout/index"
import SEO from "../components/seo/index"
import Signature from "../components/signature/index"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Card} from 'antd';

const IndexPage = () => {
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
    width: "100%",
    textAlign: "center",
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
    width: "30%",
    backgroundColor: "#191919",
    color: "#ccc",
    transition: "all 1000ms",
  })
  const post_styles = css({
    ":hover": underline,
    textDecoration: "none",
    width: "30%",
    backgroundColor: "#191919",
    color: "#ccc",
    transition: "all 1000ms",
  })
  const project_styles = css({
    ":hover": cta,
    textDecoration: "none",
    width: "30%",
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
    axios.get(`https://cors-anywhere.herokuapp.com/https://wakatime.com/share/@738aac7f-8868-4bc3-a1df-4c36703ee4b6/e6af1af1-e9eb-4bf7-93ab-20e925e96b3a.json`)
      .then(response => {
        setWakatime_total(response.data.data.grand_total.human_readable_total)
        setTotal_seconds(response.data.data.grand_total.total_seconds)
      }) 
    axios.get(`https://cors-anywhere.herokuapp.com/https://wakatime.com/share/@738aac7f-8868-4bc3-a1df-4c36703ee4b6/ceee8d51-ec19-4686-9335-9b3da4600a50.json`)
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
  }, [])
  
  const chart_options = {
    legend: {
      position: 'right',
      labels: {
        fontColor: '#ccc'
      }
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var currentValue = dataset.data[tooltipItem.index];
          var hrs = parseFloat((currentValue / 100 * total_seconds / 3600).toFixed(1));
          return currentValue + '%' + ' (' + hrs + ' hrs)'
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
              <Link to="/blog">
                <button css={post_styles}>Posts</button>
              </Link>
              <Link to="/projects">
                <button css={project_styles}>Projects</button>
              </Link>
              <a css={resume_styles} href={'/Tyler Campbell Resume (2020).pdf'} target="_blank">
                <button css={button_styles}>Resume</button>
              </a>
            </div>
          </Styled_Card>
        </Signature_Container>
        <br></br>
        <Info_Container>
          <Styled_Card
            hoverable
            theme="dark"
          >
            <Title>A Little About Me:</Title>
            <p css={intro}>
              I'm an aspiring web developer with a background in IT and Avionics. I served 4 years in the U.S. 
              Air Force, after which I enrolled full-time as a student at Capella University, where I am currently 
              pursing a Bachelor of Science degree in Information Technology with a specialization in Web 
              Application Development. I have been programming as a hobby for roughly 6 years and have a passion for 
              all things IT, especially building & fixing computers, not to mention programming.
            </p>   
          </Styled_Card>
          <Styled_Card
            hoverable
            theme="dark"
          >
            <Title>What I've Been Working on:</Title>
            <Wakatime>{wakatime_total} tracked by <a href="www.waketime.com" css={resume_styles}>Wakatime</a></Wakatime>
            <br></br>
            <Doughnut 
              data={wakatime_languages} 
              options={chart_options}
              width={100}
              height={50}
              css={chart_styles}
            />
          </Styled_Card>
        </Info_Container>
    </Main_Layout>
  )
}
export default IndexPage
