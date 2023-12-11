'use client';
import styles from './page.module.css';
import buttonStyles from './button.module.css';

import { artworks } from '../../lib/artworks';
import { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import grid from '@/css/grid-container.module.css';
import { FloatingHeader } from '../../ui/floating-header';

export default function Page() {
    const [imageIndex, setImageIndex] = useState(0);
    const [nextAfter, setNextAfter] = useState(styles[`after`]);
    const [nextBefore, setNextBefore] = useState(styles[`before`]);

    const handleNextClick = () => {
        setImageIndex((imageIndex + 1) % artworks.length);
        setNextAfter(styles[`after-next`]);
        setNextBefore(styles[`before`])
    }

    const handlePreviousClick = () => {
        setImageIndex((imageIndex - 1 + artworks.length) % artworks.length);
        setNextAfter(styles[`after`]);
        setNextBefore(styles[`before-next`]);
    }


    const itemList = artworks
        .map((item, index) => {
            console.log(index);
            return (
                // <div key={index}>
                // <Link key={index} href={item.slug} as="image" style={{position:"relative"}} className={styles.imageWrapper}>
                <Image
                    className={clsx({
                        [styles.active]: index === imageIndex,
                        [nextBefore]: index === (imageIndex - 1 + artworks.length) % artworks.length,
                        [nextAfter]: index === (imageIndex + 1) % artworks.length,
                        [styles.inactive]: !(index === imageIndex) && !(index === (imageIndex - 1 + artworks.length) % artworks.length) && !(index === (imageIndex + 1) % artworks.length)
                    })}
                    // sizes="500px"
                    // width="100vw"
                    priority
                    fill
                    sizes="100vw"
                    alt={item.description}
                    key={item.name}
                    src={item.slug}
                    // rel="preload"
                    style={{ objectFit: 'cover', top: "0", left: "0" }}
                />
                // </Link>
                // </div>
            )
        })

    return (

        <div className={`${grid[`grid-row-content`]}`}>
            <main style={{ display: "block", overflowY: "scroll", overflowX: "hidden" }} className={`${grid[`flow`]}`}>
                <section className={`${grid[`main`]}`}>

                    <FloatingHeader title='Artworks' />
                    <div style={{ display: "flex", alignItems: 'center', justifyContent: "center", width: "100%", marginBottom: "2rem" }}>

                        <p style={{ lineHeight: 2, minWidth: "20rem", maxWidth: "50rem", textAlign: "center" }}>
                            Here are featured artworks I&apos;ve done in recent years with good ol&apos; drawing tablet and Krita:
                        </p>
                    </div>
                    <div className={`${styles.imageContainer} ${grid[`breakout`]}`}>
                        <div className={styles.imageWrapper}>
                            {itemList}
                        </div>
                        <div className={styles[`button-wrapper`]} style={{ position: "absolute" }}>
                            <button onClick={handlePreviousClick} className={styles[`left-button`]}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 7L10 12L15 17" strokeWidth="1px" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button onClick={handleNextClick} className={styles[`right-button`]}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 7L15 12L10 17" strokeWidth="1px" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* <div className={styles.imageContainer} style={{gridRow:1}}>

                </div> */}
                </section>
            </main>
        </div>
    )
}
