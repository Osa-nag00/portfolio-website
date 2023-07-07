import Link from "next/link";

export default function Name() {
	return (
		<Link href={"/"} className='flex flex-col lg:flex-row text-2xl lg:text-3xl'>
			<div className='flex flex-row pl-2 min-w-max'>
				<button className='px-4 py-1 rounded-full bg-yellow-500 drop-shadow-lg'></button>
				<p href='' className='px-2 font-bold'>
					Osa Naghise
				</p>
			</div>

			<p className='px-2 font-light min-w-max'>Software Developer</p>
		</Link>
	);
}
