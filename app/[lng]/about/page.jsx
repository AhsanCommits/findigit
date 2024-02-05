import AboutHero from '../components/AboutHero';
import CTA from '../components/CTA';
import Stats from '../components/Stats';

const page = ({ params: { lng } }) => {
  return (
    <>
      <AboutHero lng={lng} />
      <Stats lng={lng} />
      <CTA lng={lng} />
    </>
  );
};

export default page;
