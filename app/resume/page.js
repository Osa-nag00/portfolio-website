import PageTransition from "../pageTransitionComponent";
import ResumeEntryTemplate from "./resumeEntryTemplate";

export default function Resume() {
	return (
		<PageTransition key={"Resume"}>
			<div className='flex flex-row justify-around'>
				<div className='flex flex-col '>
					<h1 className='text-5xl font-semibold  mb-16'>Resume</h1>

					<h2 className='text-3xl font-semibold mb-16'>
						Work <br />
						Experience
					</h2>
				</div>

				<div className='flex flex-col'>
					{/* need the line bellow to space correctly
					because the parent div has the Resume title */}
					<h1 className='mb-28'>&nbsp;</h1>

					<ResumeEntryTemplate
						timePeriod={"2035-present"}
						jobTitle={"Editor"}
						Desc={
							"Nulla ipsum qui sit enim id elit sunt mollit Lorem aute ipsum et. Est sunt occaecat pariatur sint deserunt officia. Ea consectetur consectetur occaecat occaecat sint esse ex excepteur. Esse est sunt eiusmod deserunt sunt dolor velit eu."
						}
					/>
				</div>
			</div>
		</PageTransition>
	);
}
