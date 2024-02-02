import React from 'react';

const CTA = () => {
  return (
    <section className="overflow-hidden bg-[url(https://raw.githubusercontent.com/arslanzaki/findigit_site/main/public/images/business.png)] bg-cover bg-top bg-no-repeat">
      <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-5xl">
            Ready to Elevate Your Digital Presence?
          </h2>

          <p className="hidden max-w-2xl text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
            Tailored solutions for business growth by expert developers and
            consultants across industries. We focus on enhancing your customer
            journey, optimizing interactions, and delivering unique value.
          </p>

          <div className="mt-4 sm:mt-8">
            <a
              href="#"
              className="inline-block rounded-lg bg-transparent px-12 py-3 text-sm font-medium text-white transition border border-white hover:bg-white hover:text-black focus:outline-none"
            >
              Hire Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
