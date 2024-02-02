import Image from 'next/image';

const ContactUs = () => {
  return (
    <section className="bg-white text-black" id="services">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Reach to Our Presence Across The World
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/20 text-center flex flex-col justify-center items-center">
            <Image
              className="block"
              src="/whatsapp.svg"
              alt="icon"
              width={50}
              height={50}
            />
            <h2 className="mt-2 text-xl font-semibold text-black">Message</h2>
            <p className="mt-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold">
              +9661 15107 030
            </p>
          </div>
          <div className="rounded-xl p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/20 text-center flex flex-col justify-center items-center">
            <Image
              className="block"
              src="/email.svg"
              alt="icon"
              width={50}
              height={50}
            />
            <h2 className="mt-2 text-xl font-semibold text-black">Email</h2>
            <p className="mt-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold">
              book@findigit.com
            </p>
          </div>
          <div className="rounded-xl p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/20 text-center flex flex-col justify-center items-center">
            <Image
              className="block"
              src="/phone.svg"
              alt="icon"
              width={50}
              height={50}
            />
            <h2 className="mt-2 text-xl font-semibold text-black">Call</h2>
            <p className="mt-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold">
              +9661 15107 030 - UAE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
