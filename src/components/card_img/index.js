import styled from "@emotion/styled"

const CardImg = styled.div`
  margin: -1rem;
  padding: 1rem;
  font-size: 1rem;
  color: #191919;
  width: 100%;
  background: pink;
  overflow: hidden;
  @keyframes animate {
    0% {
      height:0%
    }
    100% {
      height: 100%
    }
  }
  ${({ showDetails }) =>
    showDetails 
    ? `
    animation: animate 500ms ease-in forwards normal;
  `
    : `
    animation: animate 500ms ease-out forwards reverse;
	`}
`
export default CardImg
