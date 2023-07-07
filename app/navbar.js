"use client";
import Name from "./navbarComponents/Name";
import { motion } from "framer-motion";
import NavBarLinks from "./navbarComponents/navBarLinks";

export default function Navbar() {
	const transition = { duration: 1.5, delay: 0.5 };
	const animate = { opacity: 1, x: 0 };
	const initial = { opacity: 0 };

	return (
		<motion.div
			initial={initial}
			animate={animate}
			transition={transition}
			className='flex flex-row justify-between pt-2 pb-4 border-b-black border-[1px] lg:mb-10 bg-[#f2f2f2] drop-shadow-xl z-10'
		>
			<motion.div initial={{ opacity: 0, x: -100 }} animate={animate} transition={transition}>
				<Name />
			</motion.div>

			<motion.div initial={{ opacity: 0, x: 100 }} animate={animate} transition={transition}>
				<NavBarLinks />
			</motion.div>
		</motion.div>
	);
}
