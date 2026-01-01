"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
}

export function ScrollReveal({
    children,
    direction = "up",
    delay = 0,
    duration = 0.6,
    className = "",
    once = true,
}: ScrollRevealProps) {
    const variants = {
        up: {
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 },
        },
        down: {
            hidden: { opacity: 0, y: -60 },
            visible: { opacity: 1, y: 0 },
        },
        left: {
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 },
        },
        right: {
            hidden: { opacity: 0, x: 60 },
            visible: { opacity: 1, x: 0 },
        },
        scale: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
        },
        fade: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-100px" }}
            variants={variants[direction]}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Staggered scroll reveal for lists
interface ScrollRevealContainerProps {
    children: ReactNode;
    staggerDelay?: number;
    className?: string;
    once?: boolean;
}

export function ScrollRevealContainer({
    children,
    staggerDelay = 0.1,
    className = "",
    once = true,
}: ScrollRevealContainerProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-50px" }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function ScrollRevealItem({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                        duration: 0.5,
                        ease: [0.25, 0.4, 0.25, 1],
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
