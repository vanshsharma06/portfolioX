import { useScrollProgress } from '../hooks/useScrollProgress.js';

function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed left-0 top-0 z-[90] h-1 w-full bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-mint via-aqua to-amber transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ScrollProgress;
