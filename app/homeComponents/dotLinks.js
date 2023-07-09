"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import Link from "next/link";

export default function Dots() {
	const [whileHoverAction, setWhileHoverAction] = useState();
	const [whenTapAction, setWhenTapAction] = useState();
	useEffect(() => {
		if (isMobile) {
			setWhileHoverAction({});
			setWhenTapAction({ scale: 0.6, transition: { type: "spring", stiffness: 400, damping: 17 } });
		} else {
			setWhileHoverAction({ scale: 1.2 });
			setWhenTapAction({ scale: 0.8, transition: { type: "spring", stiffness: 400, damping: 17 } });
		}
	}, []);

	return (
		<div className='flex flex-row justify-around my-12'>
			<Link href={"resume"}>
				{" "}
				<motion.button
					whileTap={whenTapAction}
					whileHover={whileHoverAction}
					className='bg-[#0c2431] mx-2 py-10 px-5 lg:py-[55px] lg:px-[35px] border border-black rounded-full font-bold text-xl drop-shadow-xl lg:drop-shadow-xl'
				>
					Resume
				</motion.button>
			</Link>

			<Link href={"/projects"}>
				{" "}
				<motion.button
					whileTap={whenTapAction}
					whileHover={whileHoverAction}
					className='bg-[#194a50] mx-2 py-10 px-5 lg:py-[55px] lg:px-[35px] border border-black rounded-full font-bold text-xl drop-shadow-xl'
				>
					Projects
				</motion.button>
			</Link>

			<Link href={"/contact"}>
				<motion.button
					whileTap={whenTapAction}
					whileHover={whileHoverAction}
					className='bg-[#d37556] mx-2 py-10 px-5 lg:py-[55px] lg:px-[35px] border border-black rounded-full font-bold text-xl drop-shadow-xl'
				>
					Contact
				</motion.button>
			</Link>
		</div>
	);
}
