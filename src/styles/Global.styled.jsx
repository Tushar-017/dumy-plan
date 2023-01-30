import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.colors.body2};
    color: hsl(192, 100%, 9%);
    font-family: 'Roboto Flex', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }
  p {
    /* opacity: 0.6; */
    line-height: 1.5;
  }
  img {
    max-width: 100%;
}
ul,
li,
p,
h1,
h2,
h3,
h4, 
h5 
{
  margin: 0;
  padding: 0;
}
ul {
  list-style-type: none;
}
a {
  color: #333;
  text-decoration: none;

}
`

export default GlobalStyles
