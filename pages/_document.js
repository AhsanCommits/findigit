import Document, { Html, Head, Main, NextScript } from 'next/document';
import i18nextConfig from '@/next-i18next.config';
import { dir } from 'i18next';

class MyDocument extends Document {
  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;
    return (
      <Html lang={currentLocale} dir={dir(currentLocale)}>
        <Head>
          <link data-react-helmet="true" rel="icon" href="/logo.webp" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
