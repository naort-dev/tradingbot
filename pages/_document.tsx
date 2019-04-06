import * as React from 'react';
import Document, { Head, Main, NextScript, NextDocumentContext } from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';
import { fontFace } from '../util/fontface';
import { theme } from '../theme/theme';

const GlobalStyle = createGlobalStyle`

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

@keyframes "blink" {
    from, to {
      color: transparent;
    }
    50% {
      color: black;
    }
  }

`;

interface DocProps {
    styleTags: any;
}

export default class Doc extends Document<DocProps> {
    /*static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }*/

    static async getInitialProps(ctx: NextDocumentContext) {
        const sheet = new ServerStyleSheet();
        const page = ctx.renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
        const initialProps = await Document.getInitialProps(ctx);
        const styleTags = sheet.getStyleElement();
        //return { ...initialProps };
        return { ...page, ...initialProps, styleTags };
    }

    render() {
        return (
            <html lang="en">
                <Head>{this.props.styleTags}</Head>
                <body>
                    <Main />
                    <NextScript />
                    <GlobalStyle />
                </body>
            </html>
        );
    }
}
