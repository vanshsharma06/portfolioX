import { motion } from 'framer-motion';

function LoadingScreen({ inline = false }) {
  const content = (
    <div className="flex min-h-[320px] w-full items-center justify-center">
      <div className="glass-panel flex items-center gap-4 px-5 py-4">
        <motion.span
          className="h-3 w-3 rounded-full bg-mint"
          animate={{ scale: [1, 1.45, 1], opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <span className="text-sm font-semibold text-white">Loading portfolio</span>
      </div>
    </div>
  );

  if (inline) return content;

  return <div className="fixed inset-0 z-[100] bg-ink">{content}</div>;
}

export default LoadingScreen;
