import { useState, useEffect } from 'react';
import { Game } from '@/types/basketball';
import { getApiUrls } from '@/lib/api';

export function useBasketballData() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { primary, fallback } = getApiUrls();
        
        // Try primary API first
        let response = await fetch(primary);
        
        // If primary fails, try fallback
        if (!response.ok) {
          response = await fetch(fallback);
        }

        if (!response.ok) {
          throw new Error('Failed to fetch data from both APIs');
        }

        const data = await response.json();
        if (!data.success || !Array.isArray(data.games)) {
          throw new Error('Invalid data format');
        }

        setGames(data.games);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    fetchData();

    // Set up interval to fetch every 15 seconds
    const interval = setInterval(fetchData, 15000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return { games, loading, error };
}