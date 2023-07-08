export default function ResumeEntryTemplate({ timePeriod, jobTitle, Desc }) {
	return (
		<div className='flex flex-row space-x-6 text-lg pb-10'>
			<p>{timePeriod}</p>
			<div className='flex flex-col'>
				<h3 className='font-semibold'>{jobTitle}</h3>
				<p className='max-w-sm'>{Desc}</p>
			</div>
		</div>
	);
}
