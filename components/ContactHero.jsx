const ContactHero = () => {
  return (
    <section className="bg-black  z-0 " id="home">
      <div className="flex justify-evenly flex-wrap mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="w-full sm:max-w-xl mx-auto text-center">
          <h1 className="text-3xl font-medium sm:text-5xl text-white mb-6">
            <span className="text-6xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 leading-loose font-bold">
              Get in
              <br />
            </span>
            <span>Touch with Us!</span>
          </h1>
        </div>

        <div className="w-full sm:max-w-xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white rounded-lg">
          <div className="mx-auto max-w-lg ">
            <h1
              className="text-2xl font-semibold
         sm:text-3xl"
            >
              Fill the form and we&apos;ll be in touch as soon as possible
            </h1>
          </div>

          <form action="" className="mx-auto mb-0 mt-8 space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm border border-black"
                  placeholder="Full Name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="number" className="sr-only">
                Number
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm border border-black"
                  placeholder="Number"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border border-black p-4 pe-12 text-sm shadow-sm"
                  placeholder="Email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="industry" className="sr-only">
                Industries
              </label>

              <select
                name="industry"
                id="industry"
                className="mt-1.5 text-gray-700 sm:text-sm w-full rounded-lg border border-black p-4 pe-12 text-sm shadow-sm bg-white"
              >
                <option value="">Which Industry</option>
                <option value="web">Web Development</option>
                <option value="app">App Development</option>
                <option value="ai">Artificial Intelligence</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-10 py-2.5 text-sm font-medium text-white shadow"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
