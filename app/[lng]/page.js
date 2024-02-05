import CTA from './components/CTA';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

export default async function Page({ params: { lng } }) {
  return (
    <>
      <Hero lng={lng} />
      <Services lng={lng} />
      <CTA lng={lng} />
      <Testimonials lng={lng} />
    </>
  );
}
