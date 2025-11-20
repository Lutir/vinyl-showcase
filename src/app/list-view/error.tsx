'use client';

import { useEffect } from 'react';
import styles from './error.module.css';

/**
 * Error boundary for the application
 * Catches and displays errors with retro styling
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console for debugging
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <div className={styles.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="80"
            height="80"
          >
            <circle cx="12" cy="12" r="10" opacity="0.2" />
            <path d="M12 8 L12 13 M12 16 L12 17" strokeWidth="2" stroke="currentColor" />
          </svg>
        </div>
        <h1 className={styles.title}>Oops! Something went wrong</h1>
        <p className={styles.message}>
          The vinyl collection hit a snag. Don&apos;t worry, it happens to the best of
          us!
        </p>
        {error.message && (
          <details className={styles.details}>
            <summary>Error details</summary>
            <pre className={styles.errorMessage}>{error.message}</pre>
          </details>
        )}
        <button onClick={reset} className={styles.retryButton}>
          Try Again
        </button>
      </div>
    </div>
  );
}
