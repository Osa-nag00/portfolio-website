"use client";
import React, { useState } from "react";

export default function Form() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

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
				<button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>
					Submit
				</button>
			</form>
		</div>
	);
}
