"use client";

import { isMobile } from "react-device-detect";
import Desktop from "./navBarDesktop";
import Mobile from "./navBarMobile";
import { useEffect, useState } from "react";

export default function NavBarLinks({ setBodyComponent }) {
	const [component, setComponent] = useState(null);

	// remember this how this works, it is very important
	useEffect(() => {
		if (isMobile) {
			setComponent(<Mobile />);
		} else {
			setComponent(<Desktop />);
		}
	}, [setBodyComponent]);

	return <div>{component}</div>;
}
