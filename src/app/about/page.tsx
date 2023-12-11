import Image from 'next/image'
import styles from './page.module.css'
import grid from '@/css/grid-container.module.css';
import { skills } from '../../lib/skills';
import { about } from '../../lib/about';
import { FloatingHeader } from '@/ui/floating-header';
import { color } from 'framer-motion';
export default function About() {
	return (
		<div className={grid[`grid-row-content`]}>
			<main style={{ display: "block", overflowY: "scroll", overflowX: "hidden" }} className={`${grid[`flow`]}`}>


				<section className={`${grid[`main`]}`}>
						<FloatingHeader title="About" />
						<div style={{ display: "flex", alignItems: 'center', justifyContent: "center", width: "100%", marginBottom:"2rem"}}>

							<p style={{ lineHeight: 1.7, maxWidth: "40rem", textAlign: "center" }}>
								{about.name}
							</p>
						</div>
				</section>
				<section className={`${grid[`main`]}`}>
					{/* <FloatingHeader title="Skills" /> */}

					<div style={{ display: "flex", alignItems: 'center', justifyContent: "center", width: "100%", textAlign: "left" }}>

						<p style={{ textAlign: "center", lineHeight: 1.5, marginBottom: "1rem", width: "40rem" }}>
							Here are some technologies I&apos;ve recently been working with:
						</p>
					</div>

					<div className={`${styles[`main-skill-wrapper`]} ${grid['breakout']}`}>

						{skills.map((item) =>
							<div key={item.name} className={styles.dots}>
								<div className={styles[`another-dots`]}></div>
								<h3>{item.name}</h3>
								<div className={styles[`skills-wrapper`]}>
									{item.description.map((item) =>
										<div key={item[0]} className={styles.skills}>
											<p>{item}</p>
										</div>
									)}
								</div>
							</div>
						)}
					</div>
				</section>
			</main>
		</div>
	)
}
