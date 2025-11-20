import styles from './VinylStand.module.css';
import VinylItem from './VinylItem';
import { useState, useEffect } from 'react';
import { vinyls } from '../data/vinyls';

export default function VinylStand({ onSelect }) {
    const [nowPlaying, setNowPlaying] = useState('');

    useEffect(() => {
        const randomVinyl = vinyls[Math.floor(Math.random() * vinyls.length)];
        setNowPlaying(randomVinyl.title);
    }, []);

    // Distribute 20 vinyls across slots 0, 2, 4, 5, 6
    // Decor in slots 1 (Painting), 3 (Camera), 7 (Books)

    const getVinylsForSlot = (startIdx, count) => {
        return vinyls.slice(startIdx, startIdx + count);
    };

    const slotConfig = [
        { type: 'vinyl', items: getVinylsForSlot(0, 5) }, // 5 vinyls
        { type: 'decor', decorType: 'paintingSupplies' },
        { type: 'vinyl', items: getVinylsForSlot(5, 4) }, // 4 vinyls
        { type: 'decor', decorType: 'cameraLens' },
        { type: 'vinyl', items: getVinylsForSlot(9, 4) }, // 4 vinyls
        { type: 'vinyl', items: getVinylsForSlot(13, 4) }, // 4 vinyls
        { type: 'vinyl', items: getVinylsForSlot(17, 3) }, // 3 vinyls
        { type: 'decor', decorType: 'booksStack' },
    ];

    return (
        <div className={styles.standContainer}>
            {/* Props on top of the shelf */}
            <div className={styles.topSurface}>
                <div className={styles.recordPlayer}>
                    <div className={styles.turntable} />
                    <div className={styles.arm} />
                    {/* Now Playing Bubble */}
                    <div className={styles.thoughtBubblePlayer}>
                        Now playing: <br />"{nowPlaying}"
                    </div>
                </div>
                <div className={styles.candleContainer}>
                    <div className={styles.candle} />
                    <div className={styles.flame} />
                </div>
            </div>

            {/* The Cubby Shelf */}
            <div className={styles.shelf}>
                {slotConfig.map((slot, index) => (
                    <div key={index} className={styles.cubby}>
                        {slot.type === 'vinyl' ? (
                            <div className={styles.vinylStack}>
                                {slot.items.map((vinyl, i) => (
                                    <div key={vinyl.id} className={styles.stackedSpineWrapper} style={{ zIndex: i }}>
                                        <VinylItem
                                            vinyl={vinyl}
                                            onClick={() => onSelect(vinyl)}
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className={styles.decorWrapper}>
                                <div
                                    className={`${styles.decorItem} ${styles[slot.decorType]} `}
                                />
                                {slot.decorType === 'booksStack' && (
                                    <div className={styles.thoughtBubbleBook}>
                                        Just a stack of good reads 📚
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
