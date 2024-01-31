const Stats = () => {
  return (
    <section className="bg-white" id="stats">
      <div className="flex justify-evenly flex-wrap mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="w-full sm:max-w-xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Who We Are
          </h2>

          <h3 className="mt-4 text-gray-600 sm:text-2xl leading-loose">
            Our team is made up of over 100 experts, strategists, analysts and
            masterminds across our IN, SA and UK offices.
          </h3>

          <p className="mt-4 text-gray-500 sm:text-base leading-relaxed">
            Findigit has been at the forefront of the technology industry,
            providing cutting-edge solutions to clients across the globe. Our
            team of experts comprises some of the brightest minds in the field,
            and we take pride in our ability to consistently deliver results
            that exceed expectations. At Findigit, we believe that our success
            is measured by the success of our clients. That&apos;s why
            we&apos;re committed to providing top-notch services that help our
            clients achieve their goals. Over the years, our hard work and
            dedication have been recognized by several industry awards and
            recognitions.
          </p>
        </div>

        <div className="mt-12 sm:mt-0 flex border border-black w-full sm:max-w-fit rounded-lg">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-1 sm:divide-x sm:divide-gray-100 bg-[#EBF1FD]">
            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="mt-4 order-last text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                Active Pageviews
              </dt>

              <dd className="text-4xl font-semibold text-black md:text-5xl">
                150,000
              </dd>
            </div>

            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="mt-4 order-last text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                Total Revenue
              </dt>

              <dd className="text-4xl font-semibold text-black md:text-5xl">
                $10M+
              </dd>
            </div>
            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="mt-4 order-last text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                Published on
                <br />
                Google or Apple Store
              </dt>

              <dd className="text-4xl font-semibold text-black md:text-5xl">
                20 Apps
              </dd>
            </div>
          </dl>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-1 sm:divide-x sm:divide-gray-100">
            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="mt-4 order-last text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                Team Members
              </dt>

              <dd className="text-4xl font-semibold text-black md:text-5xl">
                200+
              </dd>
            </div>

            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="mt-4 order-last text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                Projects Completed
              </dt>

              <dd className="text-4xl font-semibold text-black md:text-5xl">
                400+
              </dd>
            </div>

            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="mt-4 order-last text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                Countries of Operation
              </dt>

              <dd className="text-4xl font-semibold text-black md:text-5xl">
                10+
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Stats;
