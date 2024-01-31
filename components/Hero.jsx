const Hero = () => {
  return (
    <section className="bg-black  z-0 " id="home">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-medium sm:text-5xl text-white">
            Where{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 leading-loose">
              ideas
            </span>{' '}
            tranforms into
            <strong className="font-medium text-white sm:block">
              digital{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
                experiences
              </span>
              .
            </strong>
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg  block  px-12 py-3 text-sm font-medium text-white shadow  focus:outline-none focus:ring w-auto "
              href="/get-started"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
