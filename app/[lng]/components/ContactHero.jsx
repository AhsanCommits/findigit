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
      className="relative w-full h-screen overflow-hidden z-[1] "
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
            <span className="text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 leading-loose font-bold drop-shadow-xl shadow-black">
              {t('contactHero.sectionTitle1')}
              <br />
            </span>
            <span>{t('contactHero.sectionTitle2')}</span>
          </h1>
        </div>

        <div className="w-full sm:max-w-xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white rounded-lg">
          <div className="mx-auto max-w-lg">
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
                name="services"
                id="services"
                className="mt-1.5 text-gray-700 sm:text-sm w-full rounded-lg border border-[#00103A] p-4 pe-12 text-sm shadow-sm bg-white"
              >
                <option value="">
                  {t('contactHero.servicesOptions.default')}
                </option>
                <option value="ai_ml">
                  {t('contactHero.servicesOptions.ai_ml')}
                </option>
                <option value="branding">
                  {t('contactHero.servicesOptions.branding')}
                </option>
                <option value="logo_designing">
                  {t('contactHero.servicesOptions.logo_designing')}
                </option>
                <option value="web_development">
                  {t('contactHero.servicesOptions.web_development')}
                </option>
                <option value="mobile_app_development">
                  {t('contactHero.servicesOptions.mobile_app_development')}
                </option>
                <option value="social_media_marketing">
                  {t('contactHero.servicesOptions.social_media_marketing')}
                </option>
                <option value="media_planning">
                  {t('contactHero.servicesOptions.media_planning')}
                </option>
                <option value="email_marketing">
                  {t('contactHero.servicesOptions.email_marketing')}
                </option>
                <option value="google_ads">
                  {t('contactHero.servicesOptions.google_ads')}
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
