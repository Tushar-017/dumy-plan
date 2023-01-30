import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"

import GlobalStyles from "./styles/Global.styled"
import HomeLayout from "./pages/HomeLayout/HomeLayout"

const theme = {
  colors: {
    light: "#ebfbff",
    highlightColor: "#008000",
    // -----HEADING COLORS----->
    headingColor: "#1e1d1d",
    headingColor2: "#950505",
    // -----BODY COLORS----->
    bgColor: "#f4f4f4",
    body: "#f1f1f1",
    body2: "#c6cfd0",
    body3: "#6e8387ff",
    // -----TEXT COLORS----->
    textColor: "#818181",
    textColor2: "#5b5b5b",
    textColor3: "#464646",
    // -----INPUT COLORS----->
    inputBg: "#efefef",
    primaryColor: "#1f91b1",
    // -----FOOTER COLORS----->
    footer: "#00333",
  },
  colors1: {
    body: "#c6cfd0",
    inputBg: "#efefef",
    body2: "#dadcdc",
    footer: "#6e8387ff",
    headingColor: "#000",
    textColor: "#6e8387ff",
    textColor2: "#6f6f6f",
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <HomeLayout />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
