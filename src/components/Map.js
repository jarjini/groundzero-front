import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const MapComponent = () => {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/taha001/clmesblp601fb01r752kh82hq',
          center: [-7.5898, 31.7917], 
          zoom: 5
        });
        // Set the cursor to 'grab' by default
        map.getCanvas().style.cursor = 'grab';

        // Change the cursor to 'grabbing' during a drag
        map.on('dragstart', () => {
            map.getCanvas().style.cursor = 'grabbing';
        });

        // Change the cursor back to 'grab' once the drag ends
        map.on('dragend', () => {
            map.getCanvas().style.cursor = 'grab';
        });
        // When the map is loaded...
        map.on('load', () => {
            // Add dots in specific locations
            const locations = [
              [-7.967984648358145,31.28528940562103],
              [-8.090840,31.350953],
                [-7.090840,30.350953],
                [-8.50840,30.350953],
                [-8.090840,29.850953],
              // Add more coordinates as you need
            ];

            // Add a data source for the locations
            map.addSource('points', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': locations.map(loc => ({
                        'type': 'Feature',
                        'geometry': {
                            'type': 'Point',
                            'coordinates': loc
                        }
                    }))
                }
            });

            // Add a layer to visualize the locations as green circles
            map.addLayer({
                'id': 'points',
                'type': 'circle',
                'source': 'points',
                'paint': {
                    'circle-radius': 10, // Circle size
                    'circle-color': '#006233' // Green color
                }
            });
        });

        return () => map.remove(); // Cleanup on component unmount
    }, []);

    return <div className='mapdiv' ref={mapContainerRef} />;
}

export default MapComponent;