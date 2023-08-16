"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";

export default function Form() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
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

	const handleSubmit = (e) => {
		e.preventDefault();
		// You can add your form submission logic here
		console.log("Form submitted:", { firstName, lastName, email, message });
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className='mb-4'>
					{/* for first and last name */}
					<div className='flex flex-row'>
						<div className='pr-5'>
							<label htmlFor='name' className='block mb-1 font-medium'>
								First Name
							</label>
							<input
								type='text'
								id='name'
								className='w-full px-3 py-2 border border-gray-300 rounded-md'
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								required
							/>
						</div>
						<div className='pl-5'>
							<div>
								<label htmlFor='name' className='block mb-1 font-medium'>
									Last Name
								</label>
								<input
									type='text'
									id='name'
									className='w-full px-3 py-2 border border-gray-300 rounded-md'
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
									required
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='mb-4'>
					{/* for email and subject */}

					<label htmlFor='email' className='block mb-1 font-medium'>
						Email
					</label>
					<input
						type='email'
						id='email'
						className='w-full px-3 py-2 border border-gray-300 rounded-md'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className='mb-4'>
					<label htmlFor='message' className='block mb-1 font-medium'>
						Message
					</label>
					<textarea
						id='message'
						className='w-full px-3 py-2 border border-gray-300 rounded-md'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
					/>
				</div>
				<motion.button
					type='submit'
					whileTap={whenTapAction}
					whileHover={whileHoverAction}
					className='bg-[#AEBDCA] mx-2 py-10 px-5 lg:py-[55px] lg:px-[35px] border border-black rounded-full font-bold text-xl drop-shadow-xl'
				>
					Submit
				</motion.button>
			</form>
		</div>
	);
}
