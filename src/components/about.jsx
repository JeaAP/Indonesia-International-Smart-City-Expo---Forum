import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

function About() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  }

  const cardVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
    })
  }

  const aboutCards = [
    {
      title: "Tentang Penyelenggara",
      content: "Profil singkat PT Napindo Media Ashatama Pengalaman lebih dari 25 tahun di industri pameran dan forum"
    },
    {
      title: "Apa Itu IISMEX?",
      content: "Pameran & forum tahunan yang menampilkan teknologi terbaru dalam bidang:\n• Smart City\n• ICT\n• IoT\n• Energi & Infrastruktur"
    },
    {
      title: "Siapa yang Terlibat?",
      content: "Pemerintah (pusat & daerah), pelaku bisnis, distributor, kontraktor, penyedia teknologi"
    },
    {
      title: "Pencapaian & Edisi Sebelumnya",
      content: "Dokumentasi singkat edisi sebelumnya (tahun-tahun lalu) Jumlah peserta, pengunjung, dan partisipasi mitra"
    }
  ]

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          <motion.div 
            className="w-full md:w-1/2 space-y-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4 text-center md:text-right">About Us</h2>
              <p className="text-sm md:text-base lg:text-lg text-blue-950 font-light">
                Diselenggarakan oleh PT Napindo Media Ashatama, <span className="font-light text-amber-500">IISC </span> 
                hadir sebagai platform strategis untuk kolaborasi dan pertukaran solusi inovatif di bidang smart city.
              </p>
            </motion.div>
            <motion.div 
              ref={ref}
              variants={itemVariants} 
              className="relative"
              initial="hidden"
              animate={controls}
            >
              <div className="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                <div className="flex space-x-6">
                  {aboutCards.map((card, index) => (
                    <motion.div 
                      key={index}
                      custom={index}
                      variants={cardVariants}
                      className="flex-shrink-0 w-[280px] bg-pink-50 hover:bg-gray-100 p-6 rounded-lg transition-colors duration-300"
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                      }}
                    >
                      <div className="flex items-center justify-center mb-4">
                        <h3 className="text-xl font-bold text-blue-950 text-center">{card.title}</h3>
                      </div>
                      <motion.p 
                        className="text-blue-950 text-center whitespace-pre-line font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        {card.content}
                      </motion.p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 relative h-80 md:h-[500px]"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div 
              className="absolute inset-0"
              style={{ 
                backgroundImage: 'url(/src/assets/image/ImageBg1.png)',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
            <motion.img
              src="/src/assets/image/Property4NoBG.png"
              alt="About IISC"
              className="absolute inset-0 w-full h-full object-contain object-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
