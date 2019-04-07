import { ServerStyleSheet, createGlobalStyle } from 'styled-components';
import { fontFace } from '../util/fontface';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`

${fontFace('basier', 'basiersquare-regular-webfont', 'regular', 'regular')}
${fontFace('basier', 'basiersquare-bold-webfont', 'bold', 'bold')}

html,
body {
    margin: 0;
    font-family: basier;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    color: ${theme.color};
}

* {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}  

::selection {
    color: white;
    background: ${theme.main}; 
}
::-moz-selection {
    color: white;
    background: ${theme.main}; 
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

input:focus {
    outline: none;
}

ul {
    list-style: none;
}
  
ul li::before {
    content: "\2022";
    color: #00b3d8;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
}

ul li {
    color: #646482;
}

@keyframes "blink" {
    from, to {
      color: transparent;
    }
    50% {
      color: black;
    }
  }

`;
