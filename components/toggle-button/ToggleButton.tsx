'use client';

import { useTheme } from 'next-themes';
import Button from '../button/Button';
import { useState, useEffect } from 'react';

export default function ToggleButton() {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div>
      <Button
        color="primary"
        type="default"
        size="small"
        onClick={() => setTheme('dark')}
      >
        Dark
      </Button>
      <Button
        color="secondary"
        type="default"
        size="small"
        onClick={() => setTheme('light')}
      >
        Light
      </Button>
    </div>
  );
}
