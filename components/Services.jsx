import { servicesList } from '@/constants/index';

const Services = () => {
  return (
    <section className="bg-white text-black" id="services">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">What We Do</h2>

          <p className="mt-4 text-gray-500">
            FinDigit for expertise that exceeds industry standards, innovative
            solutions from AI to blockchain, and tailored, swiftly deployed
            projects. Our user-centric design ensures visually stunning and
            intuitively engaging interfaces, creating a transformative digital
            experience.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service, index) => (
            <div
              className="rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/20"
              key={index}
            >
              <h2 className="text-xl font-bold text-black">{service.title}</h2>

              <p className="mt-1 text-sm text-gray-500">
                {service.description}
              </p>
              <a
                className="mt-1 text-sm bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500"
                href={service.link}
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-12 py-3 text-sm font-medium text-white transition  focus:outline-none "
          >
            More Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
