/**
 * Represents a single vinyl record in the collection
 */
export interface VinylRecord {
  /** Unique identifier for the vinyl record */
  id: string;
  /** URL path to the vinyl cover image */
  imageUrl: string;
  /** One-line description of the vinyl (e.g., "Pink Floyd - Dark Side of the Moon") */
  description: string;
  /** Location where the vinyl was acquired */
  location: string;
  /** Optional acquisition date in ISO format (YYYY-MM-DD) */
  acquiredDate?: string;
  /** Year the vinyl was acquired */
  acquiredYear: number;
}

/**
 * Site configuration settings
 */
export interface Config {
  /** URL for the "Buy Me a Vinyl" button redirect */
  buyMeVinylUrl: string;
}

/**
 * Filter state for the vinyl collection
 */
export interface FilterState {
  /** Selected year filter ("all" or specific year as string) */
  selectedYear: string;
  /** Selected location filter ("all" or specific location) */
  selectedLocation: string;
}

/**
 * Complete collection data structure from JSON
 */
export interface CollectionData {
  /** Array of vinyl records */
  vinyls: VinylRecord[];
  /** Site configuration */
  config: Config;
}
