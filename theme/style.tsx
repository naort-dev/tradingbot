import { createGlobalStyle } from 'styled-components';
import { fontFace } from '../util/fontface';
import { ThemeType } from './theme';
import { Margins } from './layout';

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
    @media (max-width: 768px) {
        font-size: 14px;
    }
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
    margin: ${Margins.VeryLarge} 0px;
    @media (max-width: 768px) {
        font-size: 45px;
        text-align: center;
    }
}

h2 {
    font-size: 42px;
    font-weight: normal;
    color: ${(props) => props.theme.fontHeader};
    line-height: 1.15;
    margin: ${Margins.VeryLarge} 0px;
    @media (max-width: 768px) {
        font-size: 30px;
        text-align: center;
    }
}

h3 {
    font-size: 20px;
    font-weight: normal;
    color: ${(props) => props.theme.fontHeader};
    line-height: 1.15;
    margin: ${Margins.Large} 0px;
    @media (max-width: 768px) {
        font-size: 18px;
        text-align: center;
    }
}

h4 {
    color: ${(props) => props.theme.fontHeader};
    font-size: 20px;
    font-weight: normal;
    min-height: 55px;
    margin: ${Margins.Large} 0px;
    @media (max-width: 768px) {
        font-size: 18px;
        text-align: center;
    }
}

h5 {
    font-size: 16px;
    color: rgb(100, 100, 130);
    font-weight: normal;
    margin: ${Margins.Small} 0px;
    @media (max-width: 768px) {
        font-size: 14px;
    }
}

ul {
    padding-left: 0px;
    margin: ${Margins.Middle} 0px;
}

ul li {
    margin-bottom: ${Margins.Small};
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
    margin: ${Margins.Middle} 0px;
}

a {
    transition: 0.3s all;
    color: ${(props) => props.theme.font};
    &:visited {
        color: ${(props) => props.theme.font};
    }
    &:hover {
        opacity: 0.8;
        color: ${(props) => props.theme.bluePrimary};
    }
}


svg.illCreate {
    * {
        transition: 0.3s all;
    }
    .a {
        transform: scaleX(0.8);
        transform: translateX(-3px);
        opacity: 0;

        > rect:not(.r) {
            transform: scaleX(0);
        }
    }
    &:hover {
        .a {
            transform: scaleX(1);
            transform:  translateX(0px);
            opacity: 1;
            > rect {
                transform: scaleX(1);
            }
        }
    }
}



`;
