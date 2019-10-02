import { createGlobalStyle } from 'styled-components';
import { fontFace } from '../util/fontface';
import { ThemeType } from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`

${fontFace('basier', 'basiersquare-regular-webfont', 'regular', 'regular')}
${fontFace('basier', 'basiersquare-bold-webfont', 'bold', 'bold')}

html,
body {
    margin: 0;
    font-family: basier;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    color: ${(props) => props.theme.font};
    line-height: 1.56;
}

* {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}  

::selection {
    color: white;
    background: ${(props) => props.theme.main}; 
}
::-moz-selection {
    color: white;
    background: ${(props) => props.theme.main}; 
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

@keyframes "blink" {
    from, to {
      color: transparent;
    }
    50% {
      color: black;
    }
}

button {
    border: none;
}

h1 {
    font-size: 60px;
    font-weight: normal;
    color: ${(props) => props.theme.fontHeader};
    line-height: 1.15;
}

h2 {
    font-size: 42px;
    font-weight: normal;
    color: ${(props) => props.theme.fontHeader};
    line-height: 1.15;
}

h3 {
    font-size: 20px;
    font-weight: normal;
    color: ${(props) => props.theme.fontHeader};
    line-height: 1.15;
}

h4 {
    color: ${(props) => props.theme.fontHeader};
    font-size: 20px;
    margin-bottom: 15px;
    font-weight: normal;
    text-align: center;
    min-height: 55px;
    margin-top: 10px;
}

h5 {
  font-size: 16px;
  color: rgb(100, 100, 130);
  font-weight: normal;
}

ul {
    padding-left: 0px;
    margin: 20px 0px;
}

ul li {
    margin-bottom: 10px;
    list-style: none;

    &:before {
        color: ${(props) => props.theme.bluePrimary};
        content: "•";
        font-size: 1.2em;
        padding-right: 1.1225em;
        position: relative;
        top: 0em;
    }
}

p {
    margin: 10px 0px;
}

a {
    color: ${(props) => props.theme.bluePrimary};
    &:visited {
        color: ${(props) => props.theme.bluePrimary};
    }
    &:hover {
        opacity: 0.8;
        color: ${(props) => props.theme.bluePrimary};
    }
}

`;
