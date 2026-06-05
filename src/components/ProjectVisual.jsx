import { FaChartLine, FaComments, FaShoppingBag, FaTasks } from 'react-icons/fa';

const iconMap = {
  analytics: FaChartLine,
  chat: FaComments,
  commerce: FaShoppingBag,
  pipeline: FaTasks
};

function ProjectVisual({ project }) {
  const Icon = iconMap[project.pattern] || FaChartLine;

  if (project.image) {
    return (
      <div className="overflow-hidden rounded-lg border border-white/10">
        <img
          src={project.image}
          alt={project.title}
          className="h-[250px] w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div
      className="relative min-h-[210px] overflow-hidden rounded-lg border border-white/10 bg-graphite"
      style={{
        background: `linear-gradient(135deg, ${project.accent}24, rgba(255,255,255,0.04) 42%, rgba(0,0,0,0.28))`
      }}
    >
      <div className="absolute inset-0 opacity-35">
        <div className="h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>

      <div className="relative flex h-full min-h-[210px] flex-col justify-between p-5">
        <div className="flex items-center justify-between">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-lg text-xl text-ink"
            style={{ backgroundColor: project.accent }}
          >
            <Icon />
          </span>

          <span className="rounded-lg border border-white/10 bg-black/25 px-3 py-1 text-xs font-bold text-white">
            {project.subtitle}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectVisual;