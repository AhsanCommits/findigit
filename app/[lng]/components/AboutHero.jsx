import { ChevronDown } from 'lucide-react';
import { useTranslation } from '../../i18n';

const AboutHero = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'aboutHero');
  return (
    <section className="bg-black  z-0 " id="home">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-medium sm:text-5xl text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 leading-loose font-bold">
              {t('title.about')}
            </span>{' '}
            <span className="underline">FinDigit</span>
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block text-sm font-medium shadow  focus:outline-none focus:ring w-auto bg-white px-2 py-2 rounded-full "
              href="#stats"
            >
              <ChevronDown className="text-blue-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
