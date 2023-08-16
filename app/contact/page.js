import PageTransition from "../pageTransitionComponent";
import Form from "./form";

export default function Contact() {
	return (
		<PageTransition>
			<div className='flex flex-row justify-around'>
				<div className='flex flex-col'>
					<div className='mb-10'>
						<h1 className='text-6xl font-semibold  mb-4'>Contact</h1>
						<h3 className='text-md'>Looking forward to hearing from you</h3>
					</div>

					<div>
						<h3 className='text-lg font-bold'>Email</h3>
						<p className='text-md'>naghiseosa2000@gmail.com</p>
					</div>
				</div>
				<Form />
			</div>
		</PageTransition>
	);
}
