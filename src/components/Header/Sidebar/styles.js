import styled from "@emotion/styled"

export const Wrapper = styled.div`
  position: fixed;
  z-index: 4;
  overflow: auto;
  top: 0px;
  left: -275px;
  width: 0;
  opacity: 0;
  height: 100%;
  background: linear-gradient(
    145deg,
    rgb(1, 1, 1, .9),
    rgb(1, 1, 1, 0.81)
  );
  transition: all 350ms cubic-bezier(0.6, 0.05, 0.28, 0.91);

  ${({ active }) =>
    active &&
    `
			width: 20%;
			left: 0px;
			opacity: 1;

			@media (max-width: 960px) {
				width: 40%;
			}

			@media (max-width: 600px) {
				width: 75%;
			}
	`}
`;
