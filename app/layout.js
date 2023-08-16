import "./globals.css";
import Navbar from "./navbar";

export const metadata = {
	title: "Osa's Portfolio",
	description: "Portfolio",
};

export default function RootLayout({ children }) {
	return (
		// old background color -> (#f2f2f2)
		<html className='bg-[#F5EFE6]' lang='en'>
			<body>
				<Navbar />
				{children}
				{/* Temp Footer below */}
				<div className='my-48'></div>
			</body>
		</html>
	);
}
