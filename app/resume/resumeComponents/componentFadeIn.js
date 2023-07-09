"use client";
import { motion } from "framer-motion";

export default function ComponentFadeIn({ children }) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ delay: 0.15, ease: "easeInOut" }}
		>
			{children}
		</motion.div>
	);
}
