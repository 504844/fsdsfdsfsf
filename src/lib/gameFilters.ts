import { Game } from '@/types/basketball';

export function filterGamesByLeague(games: Game[], league: string): Game[] {
  switch (league) {
    case 'Visos lygos':
      return games.filter(game => !game.event_status.toLowerCase().includes('pasibaigė'));
    case 'Neprasidėjo':
      return games.filter(game => 
        game.event_status.toLowerCase().includes('neprasidėjo')
      );
    case 'Pasibaigė':
      return games.filter(game => 
        game.event_status.toLowerCase().includes('pasibaigė')
      );
    default:
      return games.filter(game => 
        game.league_name === league && 
        !game.event_status.toLowerCase().includes('pasibaigė')
      );
  }
}