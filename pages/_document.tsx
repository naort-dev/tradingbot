import * as React from 'react';
import Document, { Head, Main, NextScript, NextDocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

interface DocProps {
    styleTags: any;
}

export default class Doc extends Document<DocProps> {
    /*static async getInitialProps(ctx: NextDocumentContext) {
        const sheet = new ServerStyleSheet();
        const page = ctx.renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
        const initialProps = await Document.getInitialProps(ctx);
        const styleTags = sheet.getStyleElement();
        //return { ...initialProps };
        return { ...page, ...initialProps, styleTags };
    }*/

    static async getInitialProps(ctx: NextDocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    /*
    render() {
        return (
            <html lang="en">
                <Head>{this.props.styleTags}</Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }*/
}
