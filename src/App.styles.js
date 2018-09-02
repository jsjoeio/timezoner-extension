import { css } from 'emotion'

export const appStyles = css`
  width: 350px;
  min-height:350px;
  background-color: #fff;
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

  input {
    border: 1px solid #aaaaaa;
    box-sizing: border-box;
    border-radius: 2px;
    font-size: 13px;
    padding: 8px 0px;
    width: 140px;
    text-align: center;

    &:focus {
      outline: none;
      border: 2px solid #00a6f3;
    }
  }

  div.rdtPicker {
    left: -25%;
  }
`

export const linkContainerStyles = css`
  margin: 0 25px;

  label {
    font-size: 12px;
    margin-bottom: 0;
  }

  h4 {
    margin-top: 5px;
  }
`
export const linkStyles = css`
  word-wrap: break-word;
  h4 {
    font-size: 18px;
  }
`