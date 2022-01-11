import MENU from "./components/menu";
import SLIDER from "./components/slider";
import ABOUTUS from "./components/aboutus";
import SKILLS from "./components/skills";
import PORTFOLIO from "./components/portfolio";
import CONTACT from "./components/contact";
import styled from "styled-components";
import {  } from "react-icons/fa";
const Wrapper = styled.div`
  top:0;
  left:0;
  overflow:hidden;
`;
function App() {
  return (
    <div class="container y mandatory-scroll-snapping">
    
    
    <SLIDER><MENU></MENU></SLIDER>
    <ABOUTUS />
    <SKILLS />
    <PORTFOLIO />
    <CONTACT /> 

    
    </div>
  );
}

export default App;
