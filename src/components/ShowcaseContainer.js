"use client";
import { useState } from 'react';
import Room from './Room';
import VinylStand from './VinylStand';
import VinylDetailModal from './VinylDetailModal';

export default function ShowcaseContainer() {
    const [selectedVinyl, setSelectedVinyl] = useState(null);

    return (
        <>
            <Room>
                <VinylStand onSelect={setSelectedVinyl} />
            </Room>
            {selectedVinyl && (
                <VinylDetailModal
                    vinyl={selectedVinyl}
                    onClose={() => setSelectedVinyl(null)}
                />
            )}
        </>
    );
}
