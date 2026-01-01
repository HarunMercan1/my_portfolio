"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center pt-2"
            >
                <motion.div
                    animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1.5 h-1.5 bg-primary rounded-full"
                />
            </motion.div>
        </motion.div>
    );
}
