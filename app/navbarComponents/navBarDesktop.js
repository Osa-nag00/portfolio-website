import Link from "next/link";

export default function Desktop() {
	return (
		<div className='flex items-end mr-5 text-xl md:text-3xl font-light'>
			<Link href='/resume'>Resume</Link>
			<p className='px-2'>|</p>
			<Link href='https://github.com/Osa-nag00'>Github</Link>
			<p className='px-2'>|</p>
			<Link href='/contact'>Contact</Link>
		</div>
	);
}
