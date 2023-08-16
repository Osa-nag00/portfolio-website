import PageTransition from "../pageTransitionComponent";

export default function Contact() {
	return (
		<PageTransition>
			<div className='flex flex-row justify-around'>
				<div className='flex flex-col '>
					<div className='mb-10'>
						<h1 className='text-6xl font-semibold  mb-4'>Contact</h1>
						<h3 className='text-lg'>Looking forward to hearing from you</h3>
					</div>

					<div>
						<h3 className='text-lg font-bold'>Email</h3>
						<p className='text-lg'>naghiseosa2000@gmail.com</p>
					</div>
				</div>

				{/* form will go here */}
				<div>words go heresssssssssssssssssssss</div>
			</div>
		</PageTransition>
	);
}
