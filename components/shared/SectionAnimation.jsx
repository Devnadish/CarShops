'use client'

import { AnimatePresence, motion } from 'framer-motion'

const SectionAnimation = ({ children }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.1 }} // Adjust the duration as needed
    >
      {children}
    </motion.div>
  </AnimatePresence>
)
export default SectionAnimation
