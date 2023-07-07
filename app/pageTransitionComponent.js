"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition({ children, key }) {
	return (
		<div>
			<AnimatePresence>
				<motion.div
					key={key}
					initial={{ opacity: 0, scale: 0.5, y: 200 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1.2, delay: 0.4 }}
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
