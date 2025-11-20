import styles from './BuyMeButton.module.css';

interface BuyMeButtonProps {
  url: string;
}

/**
 * BuyMeButton component
 * Large prominent CTA button for supporting the vinyl collection
 */
export default function BuyMeButton({ url }: BuyMeButtonProps) {
  return (
    <div className={styles.container}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
        aria-label="Buy me a vinyl to add to the collection"
      >
        <span className={styles.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="32"
            height="32"
          >
            {/* Vinyl record icon */}
            <circle cx="12" cy="12" r="10" opacity="0.3" />
            <circle cx="12" cy="12" r="6" opacity="0.5" />
            <circle cx="12" cy="12" r="2" />
            <path
              d="M12 2 L12 4 M12 20 L12 22 M2 12 L4 12 M20 12 L22 12"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
            />
          </svg>
        </span>
        <span className={styles.text}>
          <span className={styles.mainText}>Buy Me a Vinyl</span>
          <span className={styles.subText}>Support the collection</span>
        </span>
      </a>
    </div>
  );
}
