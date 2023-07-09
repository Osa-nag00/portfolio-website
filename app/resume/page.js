import ContentBreak from "./resumeComponents/contentBreak";
import PageTransition from "../pageTransitionComponent";
import Education from "./resumeComponents/Education";
import Skills from "./resumeComponents/Skills";
import WorkExperience from "./resumeComponents/workExp";

export default function Resume() {
	return (
		<PageTransition>
			<WorkExperience />
			<ContentBreak />
			<Education />
			<ContentBreak />
			<Skills />
		</PageTransition>
	);
}
