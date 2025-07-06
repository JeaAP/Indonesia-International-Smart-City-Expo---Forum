import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
}

const imageVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
}

function Hero() {
  return (
    <motion.div
      className="bg-white min-h-[95vh] flex items-center"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <motion.div
          className="w-full md:w-1/2 py-12 md:py-16 lg:py-20 space-y-4 md:space-y-6"
          variants={itemVariants}
        >
          <h1 className="text-sm md:text-base lg:text-lg text-blue-950 font-light">
            Indonesia International Smart City Expo & Forum
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 leading-tight">
            Mendorong Inovasi<br />
            Menuju Kota Cerdas<br />
            <span className="text-amber-500">Berkelanjutan</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-blue-950 font-light max-w-lg">
            Pameran dan forum terdepan yang mempertemukan pemerintah, pelaku 
            industri, dan penyedia solusi teknologi untuk bersama membangun kota
            cerdas yang berkelanjutan.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <motion.a 
              href="#" 
              className="flex items-center bg-blue-950 text-white text-sm md:text-base font-medium py-2 px-4 md:py-3 md:px-6 rounded-lg hover:bg-amber-500 transition duration-300"
              variants={itemVariants}
            >
              Berlangganan
              <ArrowRight className="ml-2" size={18} />
            </motion.a>
            <motion.a
              href="#"
              className="flex items-center justify-center bg-amber-500 text-white w-12 h-12 rounded-full hover:bg-blue-950 transition duration-300"
              variants={itemVariants}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="white"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 h-64 md:h-[400px] lg:h-[1000px] relative md:mt-0 md:flex md:justify-end"
          variants={imageVariants}
        >
          <div 
            className="absolute inset-0"
            style={{ 
              backgroundImage: 'url(/src/assets/image/Vektor1.png)',
              backgroundSize: '80%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <img
              src="/src/assets/image/Property1NoBG.png"
              alt="Hero"
              className="w-full h-full object-contain object-bottom mt-2.5"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Hero
