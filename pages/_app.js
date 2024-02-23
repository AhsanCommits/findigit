import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '@/next-i18next.config';
import '@/styles/globals.css';
import 'animate.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleLocaleChange = () => {
      window.location.reload();
    };

    router.events.on('routeChangeComplete', handleLocaleChange);

    return () => {
      router.events.off('routeChangeComplete', handleLocaleChange);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default appWithTranslation(MyApp, nextI18NextConfig);
