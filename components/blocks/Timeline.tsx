interface TimelineStep {
  step: string;
  title: string;
  description: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

export function Timeline({ steps }: TimelineProps) {
  return (
    <ol className="relative flex flex-col gap-0">
      {steps.map((item, i) => (
        <li key={item.step} className="flex gap-6 pb-10 last:pb-0">
          {/* Step indicator + line */}
          <div className="flex flex-col items-center">
            <div className="flex-shrink-0 w-9 h-9 rounded-full border border-indigo-900 bg-indigo-900/20 flex items-center justify-center">
              <span className="font-mono text-xs text-indigo-400 font-medium">{item.step}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex-1 w-px bg-carbon mt-2" />
            )}
          </div>

          {/* Content */}
          <div className="pt-1.5 pb-2">
            <h3 className="font-tight font-bold text-snow text-lg mb-1.5">{item.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-lg">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
