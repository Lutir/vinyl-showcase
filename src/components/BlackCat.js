import styles from './BlackCat.module.css';

export default function BlackCat() {
    return (
        <div className={styles.catContainer}>
            <div className={styles.thoughtBubble}>Don't touch me! 😾</div>
            <div className={styles.cat}>
                <div className={styles.head}>
                    <div className={styles.earLeft} />
                    <div className={styles.earRight} />
                    <div className={styles.eyeLeft} />
                    <div className={styles.eyeRight} />
                </div>
                <div className={styles.body} />
                <div className={styles.tail} />
                <div className={styles.legFront} />
                <div className={styles.legBack} />
            </div>
        </div>
    );
}
