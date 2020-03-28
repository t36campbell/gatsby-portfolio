import styled from "@emotion/styled"

export const Wrapper = styled.div`
  padding: 5rem 1.25rem;
  height: 100%;
  width: 15%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: linear-gradient(
    145deg,
    rgb(1, 1, 1, .9),
    rgb(1, 1, 1, 0.81)
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 980px) {
    display: none;	
  }
`;
