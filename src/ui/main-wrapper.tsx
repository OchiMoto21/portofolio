'use client';

import  React, {  useState, ElementRef, forwardRef, useEffect } from 'react';

import styles from '../css/main-wrapper.module.css';
import { useSelectedLayoutSegment } from 'next/navigation';

import FrozenRouter from './frozen-router';
import { Header } from '../ui/header';
import { Footer } from '../ui/footer';

import { AnimatePresence, motion} from 'framer-motion';
import clsx from 'clsx';

const Child = forwardRef<
	ElementRef<typeof motion.div>,
	{ children: React.ReactNode }
>((props, ref) => {
	console.log(props);

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0}}
			exit={{ opacity: 0, y: 100}}
		>	
			<FrozenRouter>
				{props.children}
			</FrozenRouter>
		</motion.div>
	);
});

Child.displayName = "Children";

export const MainWrapper = (
	{
		children,
	}: {
		children: React.ReactNode
	}
) => {
	const [visible, setVisible] = useState("home");
	const segment = useSelectedLayoutSegment();
	const isHome = null === segment;
	// console.log(!isAbout)

	const [selected, setSelected] = useState<string | null>(null);

	useEffect(() => {
		if (segment) {
			setSelected(segment);
		}
	}, [segment]);



	console.log(selected)


	return (
		<div className={styles.flexcontainer}>
			<div className={clsx([styles.childrenitem], {
				[styles.scaleItem]: !isHome
			})}>
				<AnimatePresence mode="popLayout" initial={false}>
					{ selected &&
							<Child key={segment}>
								{children}
							</Child>
					}
				</AnimatePresence>
			</div>
			<Header isHome={isHome} onClick={() => setSelected(null)}/>

			<Footer isHome={isHome} onClick={() => setSelected(segment)}/>
		</div>
	);
};


