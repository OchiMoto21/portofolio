import styles from '../css/main-wrapper.module.css';
import clsx from 'clsx';
import { GlobalNav } from '../ui/global-nav';


export function Footer(
	{ isHome, onClick }: { isHome: boolean, onClick: () => void}
	
	) {
	return (
		<div className={clsx([styles.main], [styles.navigation], {
			[styles.shortenHeight]: !isHome,
			[styles.expandWidth] :isHome
		})}>
			<GlobalNav isHome={isHome} onClick={onClick}/>
		</div>
	)
}