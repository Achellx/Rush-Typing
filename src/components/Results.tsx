import { motion } from 'framer-motion';
import { formatPercentage } from '../utils/helpers';
import { State } from '../hooks/useEngine';

const Results = ({
    state,
    errors,
    accuracyPercentage,
    total,
    className,
}: {
    state: State;
    errors: number;
    accuracyPercentage: number;
    total: number;
    className: string;
}) => {
    const initial = { opacity: 0 };
    const animate = { opacity: 1 };
    const duration = { duration: 0.5 };

    if (state !== "finished") {
        return null;
    }
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`${className} flex flex-col items-center`}
            >
                <motion.div
                initial={initial}
                animate={animate}
                className="text-xl text-primary-500 font-semibold mb-2"
                transition={{...duration, delay: 0.1}}
                >
                    Results
                </motion.div>
                <motion.div 
                initial={initial}
                animate={animate}
                className="text-center"
                transition={{...duration,delay: 0.2}}
                >
                    <div className={errors === 0 ? 'text-slate-500' : 'text-red-500'}>
                        {errors === 0 ? 'Perfect!' : `Errros: ${errors}` }
                    </div>
                </motion.div>
                <motion.div 
                initial = {initial}
                animate={animate}
                transition={{...duration,delay: 0.3}}
                className="text-primary-500 font-medium mt-4">
                    Accuracy: {formatPercentage(accuracyPercentage)} 
                </motion.div>
                <motion.div 
                initial={initial}
                animate={animate}
                transition={{...duration,delay: 0.4}}
                className="text-slate-500 mt-4">
                    WPM: {total}
                </motion.div>
            </motion.div>
        );
};

export default Results;