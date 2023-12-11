import Image from 'next/image'
import styles from './page.module.css'
import grid from '@/css/grid-container.module.css';
import { skills } from '../../lib/skills';
import { about } from '../../lib/about';
import { FloatingHeader } from '../../ui/floating-header';
import { color } from 'framer-motion';
export default function About() {
	return (
		<div className={grid[`grid-row-content`]}>
			<main style={{ display: "block", overflowY: "scroll", overflowX: "hidden" }} className={`${grid[`flow`]}`}>

				<section className={`${grid[`main`]}`}>
					<FloatingHeader title="Contact" />

					<div style={{ display: "flex", alignItems: 'center', justifyContent: "center", width: "100%", textAlign: "left" }}>

						<p style={{ textAlign: "center", lineHeight: 1.5, marginBottom: "1rem", minWidth: "20rem", width: "40rem" }}>
							I&apos;m currently looking for an opportunity in telecommunication industries!
						</p>
					</div>

					<div style={{textAlign: "center", display: "grid", gridTemplateColumns:"1fr 1fr 1fr", columnGap:"1rem"}} className={styles['contacts']}>

							<a target='_blank' href="https://github.com/OchiMoto21" className={styles.skills}>
								<div className={styles.symbols} datatype='/mdi_github.svg'></div>
								<h3 style={{marginTop:"1rem"}}>Github</h3>
							</a>

							<a href="mailto:nikencarolina21@gmail.com" className={styles.skills}>
								<div className={styles.symbols} datatype='/email.svg'></div>
								<h3 style={{marginTop:"1rem"}}>Email</h3>
							</a>

							<a target='_blank' href= "https://www.linkedin.com/in/niken-dwi-carolina-putri-668a96292/" className={styles.skills}>
								<div className={styles.symbols} datatype='/mdi_linkedin.svg'></div>
								<h3 style={{marginTop:"1rem"}}>LinkedIn</h3>
							</a>


					</div>
				</section>

			</main>
		</div>
	)
}
