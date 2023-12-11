import Link from 'next/link';
import clsx from 'clsx';
import styles from '../css/main-wrapper.module.css';

export function Header(
	{ isHome, onClick }: { isHome: boolean, onClick: () => void}
) {
	return (
		<div className={clsx([styles.header], [styles.main], {
			[styles.shortenHeightHeader]: !isHome,
			
			[styles.expandWidth] :isHome
		})}>

			<div className={clsx(styles[`header-content`], {
				[styles.fontSizeChange]: !isHome
			})} onClick={onClick}>

				<Link href='/'>
					<h1 style={{lineHeight: 1}}>
						Niken Carolina
					</h1>
				</Link>
				<div className={clsx([styles.description], {
					[styles.descriptionHidden]: !isHome
				})}>
					<p>
						Developer & Digital Artist
					</p>
				</div>
			</div>
		</div>
	)
}