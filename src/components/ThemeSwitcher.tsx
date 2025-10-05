import { Moon, Sun, Monitor, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeSwitcher = () => {
  const { mode, colorTheme, setMode, setColorTheme } = useTheme();

  const modes = [
    { value: 'light' as const, label: 'Light', icon: Sun },
    { value: 'dark' as const, label: 'Dark', icon: Moon },
    { value: 'auto' as const, label: 'Auto', icon: Monitor },
  ];

  const themes = [
    { value: 'default' as const, label: 'Lion Heart (Default)', color: '#f46e1e' },
    { value: 'ocean' as const, label: 'Ocean Blue', color: '#0284c7' },
    { value: 'forest' as const, label: 'Forest Green', color: '#16a34a' },
    { value: 'sunset' as const, label: 'Sunset Purple', color: '#9333ea' },
    { value: 'royal' as const, label: 'Royal Gold', color: '#ca8a04' },
    { value: 'slate' as const, label: 'Slate Gray', color: '#475569' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Palette className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {modes.map(({ value, label, icon: Icon }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => setMode(value)}
            className={mode === value ? 'bg-accent' : ''}
          >
            <Icon className="mr-2 h-4 w-4" />
            {label}
          </DropdownMenuItem>
        ))}
        
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Color Theme</DropdownMenuLabel>
        
        {themes.map(({ value, label, color }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => setColorTheme(value)}
            className={colorTheme === value ? 'bg-accent' : ''}
          >
            <div
              className="mr-2 h-4 w-4 rounded-full border"
              style={{ backgroundColor: color }}
            />
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
