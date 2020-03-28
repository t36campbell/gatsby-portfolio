import styled from "@emotion/styled"

export const Wrapper = styled.div`
  width: 100%;
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;

  ${({ sidebar }) =>
    sidebar &&
    `
			display: block;
			z-index: 4;	
	`}
`;
