import styled from "@emotion/styled"

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    font-size: 1rem;
    color: #191919;
    height: 45vh;
    width:  90%;
    border-radius: 36px;
    background: linear-gradient(145deg, rgb(184,184,184,.81), rgb(218,218,218,.81));
    box-shadow:  6px 6px 12px #838383, 
             -6px -6px 12px #ffffff;
    transition: all 500ms;
    overflow: hidden;
  `
export default Card