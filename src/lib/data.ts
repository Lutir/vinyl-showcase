import { VinylRecord, Config, CollectionData } from "./types";

/**
 * Data access layer for vinyl collection
 *
 * This abstraction allows for easy migration from static JSON
 * to a database-backed solution in the future (e.g., Vercel Functions + Postgres)
 */

/**
 * Fetches all vinyl records from the data source
 *
 * Phase 1: Reads from static JSON file
 * Phase 2: Will fetch from Vercel Function + Database
 *
 * @returns Promise resolving to array of vinyl records
 */
export async function getVinyls(): Promise<VinylRecord[]> {
  try {
    // Phase 1: Import static JSON data
    const data: CollectionData = await import("@/data/collection.json").then(
      (module) => module.default
    );
    return data.vinyls;
  } catch (error) {
    console.error("Failed to load vinyl collection data:", error);
    // Return empty array as fallback
    return [];
  }
}

/**
 * Fetches site configuration
 *
 * Phase 1: Reads from static JSON file
 * Phase 2: Will fetch from environment variables or database
 *
 * @returns Promise resolving to configuration object
 */
export async function getConfig(): Promise<Config> {
  try {
    // Phase 1: Import static JSON data
    const data: CollectionData = await import("@/data/collection.json").then(
      (module) => module.default
    );
    return data.config;
  } catch (error) {
    console.error("Failed to load configuration:", error);
    // Return default config as fallback
    return {
      buyMeVinylUrl: "#",
    };
  }
}

/**
 * Future: Add vinyl record (Phase 2 - requires authentication)
 *
 * @param vinyl - Vinyl record to add
 * @returns Promise resolving to created vinyl record
 */
// export async function addVinyl(vinyl: Omit<VinylRecord, 'id'>): Promise<VinylRecord> {
//   // Will be implemented with Vercel Functions
//   throw new Error('Not implemented');
// }

/**
 * Future: Update vinyl record (Phase 2 - requires authentication)
 *
 * @param id - Vinyl record ID
 * @param updates - Partial vinyl record with fields to update
 * @returns Promise resolving to updated vinyl record
 */
// export async function updateVinyl(
//   id: string,
//   updates: Partial<VinylRecord>
// ): Promise<VinylRecord> {
//   // Will be implemented with Vercel Functions
//   throw new Error('Not implemented');
// }

/**
 * Future: Delete vinyl record (Phase 2 - requires authentication)
 *
 * @param id - Vinyl record ID to delete
 * @returns Promise resolving when deletion is complete
 */
// export async function deleteVinyl(id: string): Promise<void> {
//   // Will be implemented with Vercel Functions
//   throw new Error('Not implemented');
// }
