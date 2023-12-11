'use client';

import { sections } from '../lib/sections';
// import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import styles from '../css/line-margin.module.css';
// import clsx from 'clsx';
export function LineMargin() {
    return (
        <div className={styles.line}></div>
    )

}