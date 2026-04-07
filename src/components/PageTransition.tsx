"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionTransitionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function SectionTransition({
    children,
    className = "",
    delay = 0
}: SectionTransitionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.4, 0.25, 1]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Page wrapper for overall page transitions
interface PageTransitionProps {
    children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
}
