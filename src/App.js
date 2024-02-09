import { ThemeProvider } from "styled-components";
import './App.css';
import {BrowserRouter as Router } from "react-router-dom";
import { darkTheme, lightTheme } from "./utils/themes";
import Navbar from "./components/Navbar";
import Skills  from "./components/Skills";
// import Experiences from "./components/Experience";
import styled from "styled-components";
import { useState } from "react";
import HeroSection from "./components/HeroSection";


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`


const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`



function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
          <Navbar />
          <Body>
            <HeroSection />
            <Wrapper>
              <Skills />
            </Wrapper>
          </Body>
      </Router>

    </ThemeProvider>
  );
}

export default App;
