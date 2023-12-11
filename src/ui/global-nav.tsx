'use client';

import { sections } from '../lib/sections';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import styles from '../css/global-nav.module.css';
import grid from '../css/grid-container.module.css';

import clsx from 'clsx';
import { useState } from 'react';

export function GlobalNav(
    { isHome, onClick }: { isHome: boolean, onClick: () => void }
) {
    const numColumns = sections.length;
    const percentage = 1 / sections.length * 100;
    // var gridTemplateColumns = `repeat( ${numColumns}, minmax(0, ${percentage}%))`;
    // if (!isHome) {
    //     gridTemplateColumns = `repeat( ${numColumns}, ${percentage/2}%)`;
    // }

    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);

    return (
        <div className={grid[`main`]}>
            <div className={clsx(styles.sidebarContainer, {
                [styles.sidebarContainerNotHome]: !isHome
            })}>
                <div className={styles.title}>
                    <Link href='/' onClick={() => onClick()}>
                        <h1>
                            Niken carolina
                        </h1>
                    </Link>
                </div>

                <div
                    className={clsx(styles.sidebar, {
                        [styles.sidebarNotHome]: !isHome
                    })}
                // style={{ gridTemplateColumns }}
                >
                    {sections.map((item) =>
                        <div key={`${item.name}`} className={styles.container} >
                            <NavigationItem item={item} onClick={() => onClick()} />
                        </div>
                    )}

                    <button datatype={isOpen.toString()} onClick={() => setIsOpen(!isOpen)}></button>

                </div>

                {isOpen &&
                    <div className={styles[`mobile-menu`]}>
                        {sections.map((item) =>
                            <div key={`${item.name}`} className={styles[`mobile-menu-nav`]} onClick={close}>
                                <NavigationItem item={item} onClick={() => onClick()} />
                            </div>
                        )}

                    </div>}
            </div>
        </div>
    )

}

function NavigationItem(
    { item, onClick }: { item: { name: string; slug: string; description: string }, onClick: () => void }) {
    const segment = useSelectedLayoutSegment();
    const isSelected = item.slug === segment;

    return (
        <Link href={`/${item.slug}`} className={clsx([styles.sections], {
            [styles.selectedSection]: isSelected
        })} onClick={() => onClick()}>
            {item.name}
        </Link>
    )
}
