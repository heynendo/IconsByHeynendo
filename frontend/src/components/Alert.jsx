import { useEffect } from 'react'
import '../styles/alert.css'
import { AnimatePresence, motion } from 'framer-motion'

export default function Alert({ content, openTime = 3000, isOpen, onClose }) {
    // Auto close after openTime
    useEffect(() => {
        if (!isOpen) return

        const timer = setTimeout(() => {
            onClose?.()
        }, openTime)

        return () => clearTimeout(timer)
    }, [isOpen, openTime, onClose])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="alert"
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '100%', opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                    <p>{content}</p>
                    <div
                        className="exit-icon"
                        onClick={onClose}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    )
}
