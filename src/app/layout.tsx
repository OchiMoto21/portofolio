import type { Metadata } from 'next';
import './globals.css';
import { MainWrapper } from '../ui/main-wrapper';
import { Suspense } from 'react';
import {motion, AnimatePresence} from 'framer-motion';

export const metadata: Metadata = {
	title: 'Niken\'s Portfolio',
	description: 'Portfolio',
}

export default function RootLayout(props: {
	children: React.ReactNode
}) {

	
	return (
		<html lang="en">
			<body>
				<MainWrapper {...props} />
					
			</body>
		</html>
	)
}
