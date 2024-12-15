import { ThemeToggle } from './ThemeToggle';
import { FavoriteBarToggle } from './FavoriteBarToggle';

export function HeaderControls() {
  return (
    <div className="flex items-center gap-2">
      <FavoriteBarToggle />
      <ThemeToggle />
    </div>
  );
}