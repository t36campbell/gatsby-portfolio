import styled from "@emotion/styled"

const CardImg = styled.div`
  margin: -1rem;
  padding: 1rem;
  width: 100%;
  background: purple;
  overflow: hidden;
  @keyframes animateImg {
    0% {
      height:100%
    }
    100% {
      height: 0%
    }
  }
  ${({ hover }) =>
    hover 
    ? `
    animation: animateImg 500ms ease-in forwards normal;
  `
    : `
    animation: animateImg 500ms ease-out forwards reverse;
	`}
`
export default CardImg
