import CTA from '@/components/CTA';
import ContactHero from '@/components/ContactHero';
import ContactUs from '@/components/ContactUs';
import LogoCarousel from '@/components/LogoCarousel';
import Testimonials from '@/components/Testimonials';

const page = () => {
  return (
    <>
      <ContactHero />
      <LogoCarousel />
      <ContactUs />
      {/* <Testimonials /> */}
      <CTA />
    </>
  );
};

export default page;
