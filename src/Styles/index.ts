import { createGlobalStyle } from 'styled-components';
import Colors from '../Configs/Colors';
// import gitBackgroundLogo from '../assets/logogit.svg'; // '../../assets/logGit.svg';

// background: #f0f0f5 url(${gitBackgroundLogo}) no-repeat 70% top;
export default createGlobalStyle`

  *{
    margin: 0px;
    padding:0px;
    box-sizing: border-box;
    outline:0;
  }

  body{
    background: ${Colors.background};
    color: ${Colors.white};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }

 /* #root{
    max-width: 900px;
    margin: 0 auto;
    padding: 40px;
  } */
`;
