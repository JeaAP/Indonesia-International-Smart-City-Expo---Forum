import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
  })
}

function Header() {
  return (
    <motion.header
      className="mt-3 mx-4 md:mx-7 mb-3 md:bg-gray-300 md:shadow-md rounded-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="hidden md:flex items-center justify-center">
          <ul className="flex items-center justify-center space-x-10 md:space-x-16">
            <li>
              <motion.a
                href="#"
                className="text-2xl md:text-3xl font-bold text-blue-950 hover:text-gray-900"
                variants={itemVariants}
                custom={0}
              >
                <img src="/src/assets/image/logo.svg" alt="IISC Expo & Forum" className="w-28 md:w-32" />
              </motion.a>
            </li>
            {['Home', 'About Us', 'Theme', 'Galery', 'Contact'].map((text, index) => (
              <li key={index}>
                <motion.a
                  href="#"
                  className={`text-base md:text-xl text-blue-950 ${index === 4 ? 'font-medium text-white bg-amber-500 hover:bg-blue-950 py-2 px-4 rounded-lg transition duration-300' : 'hover:border-b-2 border-amber-500 font-bold'}`}
                  variants={itemVariants}
                  custom={index + 1}
                >
                  {text}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden flex justify-center items-center">
          <motion.a href="#" variants={itemVariants} custom={6}>
            <img src="/src/assets/image/logo.svg" alt="IISC Expo & Forum" className="w-28" />
          </motion.a>
        </div>
      </nav>
    </motion.header>
  )
}

export default Header
