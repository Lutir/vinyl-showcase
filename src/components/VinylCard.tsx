'use client';

import Image from 'next/image';
import { useState } from 'react';
import { VinylRecord } from '@/lib/types';
import styles from './VinylCard.module.css';

interface VinylCardProps extends VinylRecord {}

/**
 * VinylCard component
 * Displays a single vinyl record with Polaroid-style card design
 */
export default function VinylCard({
  id,
  imageUrl,
  description,
  location,
  acquiredDate,
  acquiredYear,
}: VinylCardProps) {
  const [imageError, setImageError] = useState(false);

  // Format the date if available
  const formattedDate = acquiredDate
    ? new Date(acquiredDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : null;

  const handleImageError = () => {
    console.error(`Failed to load image for vinyl: ${description} (${imageUrl})`);
    setImageError(true);
  };

  return (
    <article className={styles.card} data-vinyl-id={id}>
      <div className={styles.imageContainer}>
        {!imageError ? (
          <Image
            src={imageUrl}
            alt={`Album cover for ${description}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.image}
            onError={handleImageError}
          />
        ) : (
          <div className={styles.placeholder}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={styles.placeholderIcon}
            >
              <circle cx="12" cy="12" r="10" opacity="0.2" />
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" strokeWidth="2" />
            </svg>
            <p className={styles.placeholderText}>Image not available</p>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <p className={styles.description}>{description}</p>
        <div className={styles.metadata}>
          <span className={styles.location}>{location}</span>
          {formattedDate && (
            <span className={styles.date} title={`Acquired on ${formattedDate}`}>
              {formattedDate}
            </span>
          )}
          {!formattedDate && (
            <span className={styles.year} title={`Acquired in ${acquiredYear}`}>
              {acquiredYear}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
