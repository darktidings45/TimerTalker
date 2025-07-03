import { ListOrdered } from "lucide-react";
import { LapTime } from "@/hooks/use-stopwatch";

interface LapTimesProps {
  lapTimes: LapTime[];
}

export function LapTimes({ lapTimes }: LapTimesProps) {
  if (lapTimes.length === 0) return null;

  return (
    <div className="mt-8 bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-4">
        <ListOrdered className="inline w-5 h-5 mr-2 text-slate-500" />
        Lap Times
      </h3>
      <div className="space-y-2">
        {lapTimes.length === 0 ? (
          <div className="text-center text-slate-400 text-sm py-4">
            No lap times recorded yet
          </div>
        ) : (
          lapTimes.map((lap, index) => (
            <div key={lap.id} className="flex items-center justify-between py-2 px-4 bg-slate-50 rounded-lg">
              <span className="text-sm font-medium text-slate-600">
                Lap {index + 1}
              </span>
              <span className="text-sm font-mono text-slate-800">
                {lap.formattedTime}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
