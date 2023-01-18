import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { DEFAULT_LOCALE } from 'utils/constants';
const withServerStyleSheet = async (
  ctx: DocumentContext
): Promise<DocumentInitialProps> => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;
  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
      });

    const { styles, ...initialProps } = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [styles, sheet.getStyleElement()]
    };
  } finally {
    sheet.seal();
  }
};
class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    return withServerStyleSheet(ctx);
  }
  render(): JSX.Element {
    return (
      <Html lang={DEFAULT_LOCALE}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
