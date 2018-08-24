import { css } from 'emotion'
export const buttonStyles = css`
  background: linear-gradient(
    0deg,
    #2ab7f8 27.3%,
    rgba(127, 229, 255, 0) 173.47%
  );
  border-color: transparent;
  border-width: 0;
  border-radius: 32px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  margin: 30px 0;
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  height: 49px;
  width: 167px;
  &:hover, &:active {
    background: linear-gradient(
      0deg,
      rgba(42, 183, 248, 0.85) 27.3%,
      rgba(127, 229, 255, 0) 173.47%
    );
    cursor: pointer;
    transform: translate(0, 1px) scale(1.1, 1.1);
  }
`
