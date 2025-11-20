"use client";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./VinylDetailModal.module.css";

export default function VinylDetailModal({ vinyl, onClose }) {
    if (!vinyl) return null;

    return (
        <AnimatePresence>
            <motion.div
                className={styles.overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className={styles.modal}
                    initial={{ y: 50, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 50, opacity: 0, scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className={styles.closeButton} onClick={onClose}>×</button>

                    <div className={styles.content}>
                        <div className={styles.coverArt} style={{ backgroundColor: vinyl.spineColor }}>
                            {/* Placeholder for actual cover image if we had one, using color for now */}
                            <span className={styles.coverTitle}>{vinyl.title}</span>
                        </div>

                        <div className={styles.details}>
                            <h2 className={styles.title}>{vinyl.title}</h2>
                            <h3 className={styles.artist}>{vinyl.artist}</h3>

                            <div className={styles.divider} />

                            <div className={styles.storySection}>
                                <h4>My 2 Cents</h4>
                                <p className={styles.story}>
                                    "This is where the user's personal story about the vinyl goes.
                                    Maybe they found it on a rainy Tuesday or it was a gift from a dear friend.
                                    It adds that personal touch to the collection."
                                </p>
                            </div>

                            <div className={styles.meta}>
                                <span>Acquired: 2023</span>
                                <span>Condition: Mint</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
