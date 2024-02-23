import CTA from '@/components/CTA';
import ContactHero from '@/components/ContactHero';
import ContactUs from '@/components/ContactUs';
import Testimonials from '@/components/Testimonials';

const page = () => {
  return (
    <>
      <ContactHero />
      <ContactUs />
      <Testimonials />
      <CTA />
    </>
  );
};

export default page;
