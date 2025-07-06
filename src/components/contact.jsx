import { useRef } from 'react';
import { useInView } from 'framer-motion';

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="py-16 px-4 md:px-8 lg:px-16 bg-white overflow-hidden"
      style={{
        transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
        opacity: isInView ? 1 : 0,
        transform: isInView ? "none" : "translateY(20px)",
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <img
              src="/assets/image/ImageBg3.png"
              alt="Person"
              className="sm:w-full lg:w-90 h-auto object-contain"
            />
          </div>
          <div className="w-full md:w-2/3 space-y-6">
            <img
              src="/assets/image/logo.svg"
              alt="IISC Logo"
              className="w-32 md:w-40"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950">Contact</h2>
            <p className="text-sm md:text-base lg:text-lg text-blue-950 font-light">
              Untuk pendaftaran, kemitraan, atau pertanyaan lebih lanjut, silakan hubungi kami 
              melalui form kontak atau email resmi yang tersedia di halaman ini.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <h3 className="text-2xl md:text-3xl font-medium text-blue-950">08123456789</h3>
              <h3 className="text-2xl md:text-3xl font-medium text-blue-950">Smart.City</h3>
              <h3 className="text-2xl md:text-3xl font-medium text-blue-950">@smartcity</h3>
              <h3 className="text-2xl md:text-3xl font-medium text-blue-950">SmartCity.Official</h3>
            </div>
            <div className="pt-2">
              <a 
                href="#" 
                className="inline-flex items-center bg-blue-950 text-white text-lg md:text-xl font-light py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-amber-500 transition duration-300"
              >
                Berlangganan !
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

