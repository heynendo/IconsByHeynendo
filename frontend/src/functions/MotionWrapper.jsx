import { motion } from 'framer-motion'

function MotionWrapper({ children }) {
  const pageMotion = {
    initial: { opacity: 0 },
    animate: { opacity: 1,transition: { duration: 0.25 } },   
    exit: { opacity: 0, transition: { duration: 0.25 } }
  }

  return <motion.div {...pageMotion}>{children}</motion.div>
}

export default MotionWrapper