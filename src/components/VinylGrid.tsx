import { VinylRecord } from '@/lib/types';
import VinylCard from './VinylCard';
import styles from './VinylGrid.module.css';

interface VinylGridProps {
  vinyls: VinylRecord[];
}

/**
 * VinylGrid component
 * Displays vinyl records in a responsive masonry grid layout
 */
export default function VinylGrid({ vinyls }: VinylGridProps) {
  // Handle empty state
  if (vinyls.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="80"
            height="80"
          >
            <circle cx="12" cy="12" r="10" opacity="0.2" />
            <circle cx="12" cy="12" r="6" opacity="0.3" />
            <circle cx="12" cy="12" r="2" />
          </svg>
        </div>
        <h2 className={styles.emptyTitle}>No vinyls match your groovy filters</h2>
        <p className={styles.emptyText}>
          Try adjusting your filters or clearing them to see the full collection.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {vinyls.map((vinyl) => (
        <VinylCard key={vinyl.id} {...vinyl} />
      ))}
    </div>
  );
}
