'use client';

import { VinylRecord } from '@/lib/types';
import styles from './FilterBar.module.css';

interface FilterBarProps {
  vinyls: VinylRecord[];
  selectedYear: string;
  selectedLocation: string;
  onYearChange: (year: string) => void;
  onLocationChange: (location: string) => void;
  onClearFilters: () => void;
}

/**
 * FilterBar component
 * Provides filtering controls for the vinyl collection with tag-style buttons
 */
export default function FilterBar({
  vinyls,
  selectedYear,
  selectedLocation,
  onYearChange,
  onLocationChange,
  onClearFilters,
}: FilterBarProps) {
  // Extract unique years from vinyl data
  const uniqueYears = Array.from(
    new Set(vinyls.map((vinyl) => vinyl.acquiredYear))
  ).sort((a, b) => b - a); // Sort descending

  // Extract unique locations from vinyl data
  const uniqueLocations = Array.from(
    new Set(vinyls.map((vinyl) => vinyl.location))
  ).sort();

  // Count active filters
  const activeFilterCount =
    (selectedYear !== 'all' ? 1 : 0) + (selectedLocation !== 'all' ? 1 : 0);

  return (
    <div className={styles.filterBar}>
      <div className={styles.filterSection}>
        <h3 className={styles.filterTitle}>Year</h3>
        <div className={styles.filterTags}>
          <button
            className={`${styles.tag} ${selectedYear === 'all' ? styles.tagActive : ''}`}
            onClick={() => onYearChange('all')}
          >
            All
          </button>
          {uniqueYears.map((year) => (
            <button
              key={year}
              className={`${styles.tag} ${selectedYear === year.toString() ? styles.tagActive : ''}`}
              onClick={() => onYearChange(year.toString())}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.filterSection}>
        <h3 className={styles.filterTitle}>Location</h3>
        <div className={styles.filterTags}>
          <button
            className={`${styles.tag} ${selectedLocation === 'all' ? styles.tagActive : ''}`}
            onClick={() => onLocationChange('all')}
          >
            All
          </button>
          {uniqueLocations.map((location) => (
            <button
              key={location}
              className={`${styles.tag} ${selectedLocation === location ? styles.tagActive : ''}`}
              onClick={() => onLocationChange(location)}
            >
              {location}
            </button>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <button className={styles.clearButton} onClick={onClearFilters}>
          Clear All Filters ({activeFilterCount})
        </button>
      )}
    </div>
  );
}
