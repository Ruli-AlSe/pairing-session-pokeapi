import { useState } from 'react';
import { usePokemonStore } from '../hooks';

export const DoubleTapComponent = ({ children }: { children: React.ReactNode }) => {
  const [lastTap, setLastTap] = useState(0);
  const { showPokemonDetails } = usePokemonStore();

  const handleTap = () => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (!isMobile) return;

    if (now - lastTap < DOUBLE_TAP_DELAY) {
      showPokemonDetails(true);
    }
    setLastTap(now);
  };

  return <div onClick={handleTap}>{children}</div>;
};
