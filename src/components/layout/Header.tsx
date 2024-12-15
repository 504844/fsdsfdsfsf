import { Trophy } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { HeaderControls } from './HeaderControls';

export function Header() {
  return (
    <div className="py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center space-x-3">
          <Trophy className="w-8 h-8 text-orange-500" />
          <h1 className="text-3xl font-bold tracking-tight">Kada kašis?</h1>
        </div>
        <HeaderControls />
      </div>
    </div>
  );
}