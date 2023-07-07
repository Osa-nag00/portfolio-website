import { Squash as Hamburger, Squash } from "hamburger-react";
import { useEffect, useState } from "react";

export default function Mobile() {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className='px-4 pt-2'>
			<Squash toggled={isOpen} toggle={setOpen} size={40} rounded easing='ease-in' duration={0.4}></Squash>
		</div>
	);
}
