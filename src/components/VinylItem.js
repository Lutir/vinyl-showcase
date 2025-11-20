"use client";
import styles from './VinylItem.module.css';

export default function VinylItem({ vinyl, onClick }) {
    return (
        <div
            className={styles.spine}
            style={{
                backgroundColor: vinyl.spineColor,
                color: vinyl.textColor
            }}
            onClick={onClick}
        >
            <span className={styles.spineText}>{vinyl.title}</span>
        </div>
    );
}
