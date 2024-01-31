import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CTA from '@/components/CTA';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const page = () => {
  return (
    <>
      <Hero />
      <Services />
      <CTA />
      <Testimonials />
    </>
  );
};

export default page;
