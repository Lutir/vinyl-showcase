import styles from './Decor.module.css';

export default function Decor() {
    return (
        <div className={styles.decorContainer}>
            {/* Posters */}
            <div className={styles.posterGroup}>
                <div className={styles.poster1}><div className={styles.posterArt1} /></div>
                <div className={styles.poster2}><div className={styles.posterArt2} /></div>
                <div className={styles.poster3}><div className={styles.posterArt3} /></div>
            </div>

            {/* Floor Lamp (Left) - 3 Way */}
            <div className={styles.floorLamp}>
                <div className={styles.lampStandTall} />
                <div className={styles.lampHead1}><div className={styles.lampBulb} /></div>
                <div className={styles.lampHead2}><div className={styles.lampBulb} /></div>
                <div className={styles.lampHead3}><div className={styles.lampBulb} /></div>
                <div className={styles.lampBase} />
                <div className={styles.floorShadow} />
            </div>

            {/* Big Monstera Plant (Left) */}
            <div className={styles.plantLeft}>
                <div className={styles.leafBig1} />
                <div className={styles.leafBig2} />
                <div className={styles.leafBig3} />
                <div className={styles.potLarge} />
                <div className={styles.floorShadow} />
            </div>

            {/* Extra Plant (Mid-Left) */}
            <div className={styles.plantMid}>
                <div className={styles.cactus1} />
                <div className={styles.cactus2} />
                <div className={styles.potMedium} />
                <div className={styles.floorShadow} />
            </div>

            {/* Table Lamp (Right) */}
            <div className={styles.tableLamp}>
                <div className={styles.tableLampShade} />
                <div className={styles.tableLampBase} />
                <div className={styles.floorShadow} />
            </div>

            {/* Hanging Plant (Right) - Lowered */}
            <div className={styles.plantRight}>
                <div className={styles.vine1} />
                <div className={styles.vine2} />
                <div className={styles.vine3} />
                <div className={styles.potHanging} />
                <div className={styles.floorShadow} style={{ opacity: 0.2, transform: 'scale(0.5)' }} />
            </div>
        </div>
    );
}
