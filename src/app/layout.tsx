import type { Metadata } from 'next';
import './globals.css';
import { MainWrapper } from '../ui/main-wrapper';

export const metadata: Metadata = {
	title: 'Niken\'s Portfolio',
	description: 'Portfolio',
}

export default function RootLayout(props: {
	children: React.ReactNode
}) {

	
	return (
		<html lang="en">
			<head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body>
				<MainWrapper {...props} />
					
			</body>
		</html>
	)
}
