import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFavoriteBar } from '@/components/providers/FavoriteBarProvider';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function FavoriteBarToggle() {
  const { isVisible, toggleVisibility } = useFavoriteBar();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleVisibility}
          className={`w-9 h-9 ${isVisible ? 'text-yellow-500' : 'text-muted-foreground'}`}
        >
          <Star className={`h-4 w-4 transition-colors ${isVisible ? 'fill-current' : ''}`} />
          <span className="sr-only">Toggle favorites bar</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{isVisible ? 'Hide' : 'Show'} favorites bar</p>
      </TooltipContent>
    </Tooltip>
  );
}