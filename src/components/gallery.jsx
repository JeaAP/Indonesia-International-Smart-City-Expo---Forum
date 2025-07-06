import { motion } from 'framer-motion';

function Gallery() {
  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{
          backgroundImage: 'url(/assets/image/Vektor2L.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'left top',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        className="absolute top-0 right-0 w-full h-full pointer-events-none z-0"
        style={{
          backgroundImage: 'url(/assets/image/Vektor2R.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'right bottom',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="relative z-10 container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Galeri</h2>
          <p className="text-sm md:text-base lg:text-lg text-blue-950 font-light">
            Lihat dokumentasi menarik dari penyelenggaraan <span className="text-amber-500">IISC </span>
            sebelumnya yang memperlihatkan antusiasme peserta, teknologi yang dipamerkan, serta
            momen-momen inspiratif selama acara.
          </p>
        </div>
        <div className="mt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-y-scroll max-h-[70vh] sm:max-h-auto">
          {Array.from({ length: 4 }).map((_, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg overflow-hidden group w-full h-full sm:h-auto mb-4 md:mb-0"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={`/assets/image/Property${index + 1}.png`}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img
                  src="/assets/image/logo.svg"
                  alt="Overlay Logo"
                  className="w-48 mb-4 sm:w-32 sm:mb-3"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
