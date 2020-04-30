import styled from "@emotion/styled"

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -1rem;
  padding: 1rem;
  font-size: 1rem;
  width: 100%;
  background: transparent;
  z-index: 10;
  overflow: hidden;
  ${({ showDetails }) =>
    showDetails 
    ? `
    height: 50%;
  `
    : `
    height: 100%;
	`}
`
export default CardBody
