"use client";

import Dots from "./dotLinks";
import { motion } from "framer-motion";

export default function MyInfo() {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5, y: 200 }}
			animate={{ opacity: 1, scale: 1, y: 0 }}
			transition={{ duration: 1.3, delay: 0.4 }}
			className='flex flex-col p-5'
		>
			<h1 className='text-[160px] lg:text-[190px] font-semibold text-center lg:text-left'>Hello</h1>
			<h2 className='text-2xl font-bold text-center lg:text-left'>A Bit About me</h2>
			<p className='max-w-lg text-center lg:text-left text-xl'>
				Culpa laboris elit aliqua adipisicing magna deserunt quis qui reprehenderit. Reprehenderit labore esse irure non
				id occaecat deserunt laboris. Esse sit non sit aliquip elit laborum ut occaecat ad non do velit irure esse.
				Adipisicing adipisicing eu in incididunt commodo. Commodo anim anim magna sit excepteur anim exercitation non
				veniam sit exercitation. Irure magna aute minim eu voluptate Lorem cupidatat qui est consectetur labore
				consectetur eiusmod sunt.
			</p>
			<Dots />
		</motion.div>
	);
}
