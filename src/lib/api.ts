const BASE_PRIMARY_URL = 'https://static2.krepsinis.net/Uploads/scoreboard.js';
const BASE_FALLBACK_URL = 'https://www.sportas.lt/Uploads/scoreboard.js';

export function generateTimestamp(): string {
  // Get current timestamp in milliseconds and round down to nearest 15 seconds
  const now = Date.now();
  const fifteenSeconds = 15 * 1000;
  return Math.floor(now / fifteenSeconds) * fifteenSeconds + '';
}

export function getApiUrls(): { primary: string; fallback: string } {
  const timestamp = generateTimestamp();
  return {
    primary: `${BASE_PRIMARY_URL}?t=${timestamp}`,
    fallback: `${BASE_FALLBACK_URL}?t=${timestamp}`
  };
}