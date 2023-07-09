import ResumeEntryTemplate from "../resumeEntryTemplate";
import ComponentFadeIn from "./componentFadeIn";

export default function Education() {
	return (
		<ComponentFadeIn>
			<div className='flex flex-row justify-around'>
				<div className='flex flex-col '>
					<h2 className='text-3xl font-semibold mb-16'>Education</h2>
				</div>

				<div className='flex flex-col'>
					<ResumeEntryTemplate
						timePeriod={"2035-Present"}
						jobTitle={"Editor"}
						Desc={
							"Nulla ipsum qui sit enim id elit sunt mollit Lorem aute ipsum et. Est sunt occaecat pariatur sint deserunt officia. Ea consectetur consectetur occaecat occaecat sint esse ex excepteur. Esse est sunt eiusmod deserunt sunt dolor velit eu."
						}
					/>

					<ResumeEntryTemplate
						timePeriod={"2035-2035"}
						jobTitle={"Something else"}
						Desc={
							"Nulla ipsum qui sit enim id elit sunt mollit Lorem aute ipsum et. Est sunt occaecat pariatur sint deserunt officia. Ea consectetur consectetur occaecat occaecat sint esse ex excepteur. Esse est sunt eiusmod deserunt sunt dolor velit eu."
						}
					/>

					<ResumeEntryTemplate
						timePeriod={"2020-2035"}
						jobTitle={"Something"}
						Desc={
							"Nulla ipsum qui sit enim id elit sunt mollit Lorem aute ipsum et. Est sunt occaecat pariatur sint deserunt officia. Ea consectetur consectetur occaecat occaecat sint esse ex excepteur. Esse est sunt eiusmod deserunt sunt dolor velit eu."
						}
					/>
				</div>
			</div>
		</ComponentFadeIn>
	);
}
