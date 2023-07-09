"use client";
import ProfilePicture from "./homeComponents/ProfilePicture";
import MyInfo from "./homeComponents/MyInfo";
import PageTransition from "./pageTransitionComponent";

export default function Home() {
	return (
		<PageTransition>
			<div className='flex flex-col-reverse lg:flex-row justify-center items-center mt-15 mb-15 lg:mt-35'>
				<ProfilePicture />
				<MyInfo />
			</div>
		</PageTransition>
	);
}
