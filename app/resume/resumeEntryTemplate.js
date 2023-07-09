export default function ResumeEntryTemplate({ timePeriod, jobTitle, Desc }) {
	return (
		<div className='flex flex-row text-lg pb-10'>
			<p className='px-14 min-w-[35%]'>{timePeriod}</p>
			<div className='flex flex-col'>
				<h3 className='font-semibold'>{jobTitle}</h3>
				<p className='max-w-sm'>{Desc}</p>
			</div>
		</div>
	);
}
