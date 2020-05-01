import styled from "@emotion/styled"

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: -1rem;
  padding: 1rem;
  font-size: 1rem;
  width: 100%;
  background: transparent;
  z-index: 100;
  overflow: hidden;
  @keyframes animateBody {
    0% {
      height:50%
    }
    100% {
      height: 100%
    }
  }
  ${({ hover }) =>
    hover 
    ? `
    animation: animateBody 500ms ease-in forwards normal;
  `
    : `
    animation: animateBody 500ms ease-out forwards reverse;
	`}
`
export default CardBody
