import PageTransition from "../pageTransitionComponent";

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

					<div className='flex flex-row space-x-6 text-lg'>
						<p>2035-present</p>
						<div className='flex flex-col'>
							<h3 className='font-semibold'>Editor</h3>
							<p className='max-w-sm'>
								Commodo deserunt amet deserunt enim Lorem sunt pariatur aliquip irure fugiat eiusmod. In aliquip dolor
								culpa dolor eiusmod. Id ipsum sint tempor nisi id Lorem culpa esse ut dolore quis. Quis dolor sit in ex.
								Nisi ex culpa est duis nostrud.
							</p>
						</div>
					</div>
				</div>
			</div>
		</PageTransition>
	);
}
