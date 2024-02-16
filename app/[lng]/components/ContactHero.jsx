'use client';
import { useEffect, useRef } from 'react';
import { useTranslation } from '../../i18n/client';

const ContactHero = ({ lng }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Auto-play was prevented:', error);
      });
    }
  }, []);
  const { t } = useTranslation(lng, 'contactHero');
  return (
    <section
      className="relative w-full h-screen overflow-hidden z-[-1] "
      id="home"
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source
          src="https://github.com/AhsanCommits/findigit/raw/main/public/video.mp4"
          type="video/mp4"
        />
        {/* Add more source elements for different video formats if needed */}
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 items-center  flex justify-evenly flex-wrap mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="w-full sm:max-w-xl mx-auto text-center">
          <h1 className="text-3xl font-medium sm:text-5xl text-white mb-6 drop-shadow-xl shadow-black">
            <span className="text-white text-4xl lg:text-6xl lg:bg-clip-text lg:text-transparent lg:bg-gradient-to-r lg:from-yellow-400 lg:to-orange-400 leading-loose font-bold drop-shadow-xl shadow-black">
              {t('contactHero.sectionTitle1')}
              <br />
            </span>
            <span>{t('contactHero.sectionTitle2')}</span>
          </h1>
        </div>

        <div className="w-full sm:max-w-xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white rounded-lg">
          <div className="mx-auto max-w-lg ">
            <h1
              className="text-2xl font-semibold
         sm:text-3xl"
            >
              {t('contactHero.formSubtitle')}
            </h1>
          </div>

          <form action="" className="mx-auto mb-0 mt-8 space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm border border-[#00103A]"
                  placeholder={t('contactHero.placeholders.name')}
                />
              </div>
            </div>
            <div>
              <label htmlFor="number" className="sr-only">
                Number
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm border border-[#00103A]"
                  placeholder={t('contactHero.placeholders.number')}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border border-[#00103A] p-4 pe-12 text-sm shadow-sm"
                  placeholder={t('contactHero.placeholders.email')}
                />
              </div>
            </div>

            <div>
              <label htmlFor="industry" className="sr-only">
                {t('contactHero.industryLabel')}
              </label>

              <select
                name="industry"
                id="industry"
                className="mt-1.5 text-gray-700 sm:text-sm w-full rounded-lg border border-[#00103A] p-4 pe-12 text-sm shadow-sm bg-white"
              >
                <option value="">
                  {t('contactHero.industryOptions.default')}
                </option>
                <option value="web">
                  {t('contactHero.industryOptions.web')}
                </option>
                <option value="app">
                  {t('contactHero.industryOptions.app')}
                </option>
                <option value="ai">
                  {t('contactHero.industryOptions.ai')}
                </option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-10 py-2.5 text-sm font-medium text-white shadow"
              >
                {t('contactHero.submitButton')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
