import { motion } from 'framer-motion'

function Theme() {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  }

  const themeItems = [
    "Smart Governance",
    "Smart Energy",
    "Smart Mobility",
    "Smart Environment",
    "Smart Infrastructure"
  ]

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            className="w-full md:w-1/2 space-y-8"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Tema Acara</h2>
              <p className="text-sm md:text-base lg:text-lg text-blue-950 font-light">
                Mengusung tema Inovasi dan Kolaborasi Menuju Kota Cerdas, IISC 2025 menampilkan teknologi terbaru di bidang ICT, IoT, energi, dan tata kelola perkotaan modern.
              </p>
            </motion.div>

            <motion.div 
              className="relative"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <div className="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                <div className="flex space-x-6">
                  {themeItems.map((item, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={itemVariants}
                      className="flex-shrink-0 w-[200px] bg-blue-950 p-6 rounded-lg shadow-lg flex items-center justify-center"
                      whileHover={{ 
                        y: -5,
                        scale: 1.05,
                        backgroundColor: "#D97706",
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-white font-extrabold text-center">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-full md:w-full relative right-0 h-80 md:h-[500px]"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <div 
              className="absolute inset-0 md:right-0 md:left-auto md:w-full"
              style={{ 
                backgroundImage: 'url(/src/assets/image/ImageBg2.png)',
                backgroundSize: 'contain',
                backgroundPosition: 'right',
                backgroundRepeat: 'no-repeat'
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Theme
