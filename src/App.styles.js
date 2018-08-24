import { css } from 'emotion'

export const appStyles = css`
  width: 350px;
  min-height: 350px;
  background-color: #fff;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  text-align: center;
`
export const headerStyles = css`
  p {
    margin-top: 37px;
    margin-bottom: 0;
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
    margin-top: 6px;
    margin-bottom: 20px;
  }
`

export const formStyles = css`
    display: flex;
    justify-content: center;

    div.rdtPicker {
        left: -50%;
    }
`
