"use client";

import pfp from "../../public/portTest.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

export default function ProfilePicture() {
	const [dimension, setDimension] = useState();
	const [whileHoverAction, setWhileHoverAction] = useState();

	const mobileDimension = 500;
	const desktopDimension = 600;

	useEffect(() => {
		if (isMobile) {
			setDimension(mobileDimension);
			setWhileHoverAction({});
		} else {
			setDimension(desktopDimension);

			setWhileHoverAction({ scale: 1.1, rotate: -25 });
		}
	}, []);

	return (
		<motion.div
			initial={{ scale: 0.01 }}
			animate={{ scale: 1 }}
			transition={{ duration: 1.5, delay: 0.2 }}
			className='p-5'
		>
			<motion.div whileHover={whileHoverAction}>
				<Image
					className='rounded-full overflow-hidden border-16 border-black drop-shadow-2xl'
					src={pfp}
					width={dimension}
					height={dimension}
					alt='Picture of Osa Naghise'
					quality={80}
				/>
			</motion.div>
		</motion.div>
	);
}
