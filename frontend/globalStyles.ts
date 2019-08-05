import reset from "styled-reset"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    --headerBackgroundColor: #feca57;
    --mainBackgroundColor: #c8d6e5;
    --footerBackgroundColor: white;
    --whiteBackgroundColor: white;
    --iconColor: #222f3e;
    --defaultTextColor: black;
    --sidebarBackgroundColor: #576574;
    @media (prefers-color-scheme: dark) {
      --headerBackgroundColor: #ff9f43;
      --mainBackgroundColor: #222f3e;
      --footerBackgroundColor: white;
      --whiteBackgroundColor: #576574;
      --iconColor: white;
      --defaultTextColor: white;
      --sidebarBackgroundColor: #576574;
    }  
  }
  * {
    box-sizing: border-box;
  }
  body {
    background-color: var(--mainBackgroundColor);
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
    color: var(--defaultTextColor);
    overflow-y: scroll;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input,
  button {
    border: none;
    &:focus,
    &:active { 
      outline: none
    }
  }
`

export default GlobalStyle
