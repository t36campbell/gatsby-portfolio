import styled from "@emotion/styled"

export const Wrapper = styled.div`
  padding: 5rem 2rem;
  position: fixed;
  z-index: 4;
  overflow: hidden;
  top: 0px;
  left: -275px;
  width: 0;
  opacity: 1;
  height: 100%;
  background: linear-gradient(145deg, rgb(1, 1, 1, 0.96), rgb(1, 1, 1, 0.9));
  visibility: hidden;
  opacity: 0;
  transition: all 350ms cubic-bezier(0.6, 0.05, 0.28, 0.91);

  ${({ active }) =>
    active &&
    `
      left: 0;
      visibility: visible;
      opacity: 1;

			@media (max-width: 980px) {
				width: 36%;
			}

			@media (max-width: 600px) {
				width: 100%;
			}
  `}
`
