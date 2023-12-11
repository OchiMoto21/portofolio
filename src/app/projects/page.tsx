import Image from 'next/image';
import grid from '@/css/grid-container.module.css';
import styles from "./page.module.css"
import { projects } from "../../lib/projects";
import { FloatingHeader } from '../../ui/floating-header';

export default function Home() {
	return (

		<div className={grid['grid-row-content']}>
			<main style={{ display: "block", overflowY: "scroll", overflowX: "hidden" }} className={`${grid[`flow`]}`}>

			<section className={`${grid['main']}`}>
				{/* <section> */}
				<FloatingHeader title='Projects' />
				<div className={styles['projects-wrapper']}>
					{projects.map((item) =>
						<ProjectItem key={item.title} item={item} />

					)}
				</div>
				</section>
				{/* </div> */}
			</main>
		</div>
	)
}

function ProjectItem(
	{ item }:
		{
			item: {
				title: string,
				description: string,
				image: string,
				link:
				{
					media: string,
					url: string
				}[],
				technologies: string[]
			}
		}) {
	return (
		<div key={item.title} className={styles['projects']}>
			<div style={{ display: "flex", width: "100%", height: "300px" }} className={styles['imageWrapper']}>
				<Image priority
					fill
					// sizes="80vw"
					alt={item.title}
					// key={item.name}
					src={item.image}
					// rel="preload"
					style={{ objectFit: 'cover', top: "0", left: "0" }}
				/>
			</div>
			<div>
				<h3 className={styles['title']}>
					{item.title}
				</h3>
				<p style={{ marginTop: "0.5rem" }}>
					{item.description}
				</p>
				<div className={styles[`links-wrapper`]}>
					{item.link.map((link) =>
						<a href={link.url} target='_blank' key={link.media}>
							<h4 className={styles['link']} style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 0 }}>{link.media + " "}</h4>
						</a>
					)}
				</div>

				<div className={styles[`skills-wrapper`]}>
					{item.technologies.map((technology) =>
						<div className={styles['skills']} key={technology}>
							<p>
								{technology}
							</p>
						</div>
					)}
				</div>
			</div>

		</div>
	)
}