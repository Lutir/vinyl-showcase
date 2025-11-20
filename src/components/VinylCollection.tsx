'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { VinylRecord } from '@/lib/types';
import FilterBar from './FilterBar';
import VinylGrid from './VinylGrid';

interface VinylCollectionProps {
  vinyls: VinylRecord[];
}

/**
 * VinylCollection component with URL sync
 */
function VinylCollectionContent({ vinyls }: VinylCollectionProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize state from URL query parameters
  const [selectedYear, setSelectedYear] = useState<string>(
    searchParams.get('year') || 'all'
  );
  const [selectedLocation, setSelectedLocation] = useState<string>(
    searchParams.get('location') || 'all'
  );

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedYear !== 'all') {
      params.set('year', selectedYear);
    }

    if (selectedLocation !== 'all') {
      params.set('location', selectedLocation);
    }

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

    router.replace(newUrl, { scroll: false });
  }, [selectedYear, selectedLocation, pathname, router]);

  // Apply filters to vinyl collection
  const filteredVinyls = useMemo(() => {
    return vinyls.filter((vinyl) => {
      const yearMatch =
        selectedYear === 'all' || vinyl.acquiredYear.toString() === selectedYear;
      const locationMatch =
        selectedLocation === 'all' || vinyl.location === selectedLocation;
      return yearMatch && locationMatch;
    });
  }, [vinyls, selectedYear, selectedLocation]);

  // Clear all filters
  const handleClearFilters = () => {
    setSelectedYear('all');
    setSelectedLocation('all');
  };

  return (
    <>
      <FilterBar
        vinyls={vinyls}
        selectedYear={selectedYear}
        selectedLocation={selectedLocation}
        onYearChange={setSelectedYear}
        onLocationChange={setSelectedLocation}
        onClearFilters={handleClearFilters}
      />
      <VinylGrid vinyls={filteredVinyls} />
    </>
  );
}

/**
 * VinylCollection component wrapper with Suspense boundary
 * Manages filter state and applies filtering logic to vinyl collection
 * Synchronizes filters with URL query parameters for shareable filtered views
 */
export default function VinylCollection({ vinyls }: VinylCollectionProps) {
  return (
    <Suspense
      fallback={
        <div>
          <VinylGrid vinyls={vinyls} />
        </div>
      }
    >
      <VinylCollectionContent vinyls={vinyls} />
    </Suspense>
  );
}
