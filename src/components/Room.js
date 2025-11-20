import styles from './Room.module.css';
import Decor from './Decor';
import BlackCat from './BlackCat';
import { useState, useEffect } from 'react';

export default function Room({ children }) {
    const [showWelcome, setShowWelcome] = useState(true);

    return (
        <div className={styles.roomContainer}>
            {/* Curtain Animation */}
            <div className={styles.curtainLeft}>
                <div className={styles.curtainValance} />
            </div>
            <div className={styles.curtainRight}>
                <div className={styles.curtainValance} />
            </div>

            {/* Buy Me a Vinyl Button */}
            <a
                href="https://www.buymeacoffee.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.buyButton}
            >
                <div className={styles.vinylIcon} />
                Buy me a Vinyl
            </a>

            {/* List View Link */}
            <a href="/list-view" className={styles.listViewLink}>
                View List 📋
            </a>

            {/* Welcome Message */}
            {showWelcome && (
                <div className={styles.welcomeOverlay} onClick={() => setShowWelcome(false)}>
                    <div className={styles.welcomeBox}>
                        <h1>Welcome to the Vinyl Room</h1>
                        <p>Click on a vinyl to explore the collection.</p>
                        <span className={styles.clickHint}>(Click anywhere to start)</span>
                    </div>
                </div>
            )}

            <div className={styles.wall}>
                <Decor />
                <BlackCat />
                <div className={styles.decorArea}>
                    {/* Placeholder for wall decor */}
                </div>
                {children}
            </div>
            <div className={styles.floor}>
                <div className={styles.rug}>
                    <div className={styles.rugPattern} />
                    <div className={styles.rugFringes} />
                </div>
            </div>
        </div>
    );
}
