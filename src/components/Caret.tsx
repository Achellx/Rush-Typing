import { motion } from 'framer-motion';

const Caret = () => {
    return (
        <motion.div
            aria-hidden={true}
            className="inline-block bg-primary-500 w-[.1em] h-[1em] rounded-[0.5rem]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        />
    );
};

export default Caret;