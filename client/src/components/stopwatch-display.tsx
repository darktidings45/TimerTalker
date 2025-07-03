import { Clock, Circle } from "lucide-react";

interface StopwatchDisplayProps {
  formattedTime: string;
  isRunning: boolean;
}

export function StopwatchDisplay({ formattedTime, isRunning }: StopwatchDisplayProps) {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 text-center rounded-t-2xl">
      <div className="mb-4">
        <div className="text-6xl md:text-7xl font-mono font-bold tracking-wider">
          {formattedTime}
        </div>
        <div className="text-lg text-slate-300 mt-2">
          Hours : Minutes : Seconds
        </div>
      </div>
      
      <div className="flex items-center justify-center space-x-2">
        <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${
          isRunning ? 'bg-green-400 animate-pulse' : 'bg-slate-400'
        }`} />
        <span className="text-sm text-slate-300">
          {isRunning ? 'Running' : 'Ready'}
        </span>
      </div>
    </div>
  );
}
