import CTA from '../components/CTA';
import ContactHero from '..//components/ContactHero';
import ContactUs from '../components/ContactUs';
import Testimonials from '../components/Testimonials';

const page = ({ params: { lng } }) => {
  return (
    <>
      <ContactHero lng={lng} />
      <ContactUs lng={lng} />
      <Testimonials lng={lng} />
      <CTA lng={lng} />
    </>
  );
};

export default page;
