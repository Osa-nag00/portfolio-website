import Link from "next/link";

export default function Name() {
	return (
		<Link href={"/"} className='flex flex-col ml-4 lg:flex-row text-2xl lg:text-3xl'>
			<div className='flex flex-row pl-2 min-w-max'>
				<div className='lg:px-[14px] px-[13px] rounded-full bg-[#7895B2] drop-shadow-lg'>&nbsp;</div>
				<p href='' className='px-2 font-bold'>
					Osa Naghise
				</p>
			</div>

			<p className='px-2 font-light min-w-max'>Software Developer</p>
		</Link>
	);
}
