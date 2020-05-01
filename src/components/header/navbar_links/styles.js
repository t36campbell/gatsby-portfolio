import styled from "@emotion/styled"

export const Wrapper = styled.div`
  padding: 5rem 1.25rem;
  height: 100%;
  width: 15%;
  position: fixed;
  z-index: 1;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 980px) {
    display: none;	
  }
`
