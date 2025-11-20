import { getVinyls, getConfig } from '@/lib/data';
import VinylCollection from '@/components/VinylCollection';
import BuyMeButton from '@/components/BuyMeButton';
import Link from 'next/link';

/**
 * Home page - Main vinyl collection showcase
 * Fetches vinyl data and config, sorts by acquisition year (descending)
 */
export default async function Home() {
  // Fetch data from data layer
  const vinyls = await getVinyls();
  const config = await getConfig();

  // Sort vinyls by acquisition year (descending) - newest first
  const sortedVinyls = [...vinyls].sort((a, b) => b.acquiredYear - a.acquiredYear);

  return (
    <div>
      <section style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '2rem', margin: 0 }}>
            My Groovy Collection
          </h2>
          <Link
            href="/"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: 'var(--retro-teal)',
              color: 'white',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              boxShadow: 'var(--shadow-button)',
              transition: 'all 0.2s ease'
            }}
          >
            🏠 Enter Vinyl Room
          </Link>
        </div>
        <p style={{ color: 'var(--text-secondary)' }}>
          {sortedVinyls.length} vinyl{sortedVinyls.length !== 1 ? 's' : ''} and
          counting!
        </p>
      </section>
      <VinylCollection vinyls={sortedVinyls} />
      <BuyMeButton url={config.buyMeVinylUrl} />
    </div>
  );
}
