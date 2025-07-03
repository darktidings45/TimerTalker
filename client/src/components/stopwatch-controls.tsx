import { Play, Square, RotateCcw, Flag, Maximize, Volume2, VolumeX, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { IntervalRate } from "@/hooks/use-stopwatch";

interface StopwatchControlsProps {
  isRunning: boolean;
  intervalRate: IntervalRate;
  isAudioEnabled: boolean;
  isAudioSupported: boolean;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
  onAddLap: () => void;
  onToggleAudio: () => void;
  onIntervalRateChange: (rate: IntervalRate) => void;
  onFullscreen: () => void;
}

export function StopwatchControls({
  isRunning,
  intervalRate,
  isAudioEnabled,
  isAudioSupported,
  onStart,
  onStop,
  onReset,
  onAddLap,
  onToggleAudio,
  onIntervalRateChange,
  onFullscreen
}: StopwatchControlsProps) {
  return (
    <div className="p-8 space-y-6">
      {/* Rate Selection */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-slate-700">
          <Clock className="inline w-4 h-4 mr-2 text-slate-500" />
          Announcement Interval
        </label>
        <Select value={intervalRate} onValueChange={onIntervalRateChange}>
          <SelectTrigger className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="seconds">Every Second</SelectItem>
            <SelectItem value="minutes">Every Minute</SelectItem>
            <SelectItem value="hours">Every Hour</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Audio Settings */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            {isAudioEnabled && isAudioSupported ? (
              <Volume2 className="w-5 h-5 text-amber-600" />
            ) : (
              <VolumeX className="w-5 h-5 text-amber-600" />
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-amber-800">Audio Announcements</h3>
            <p className="text-xs text-amber-700 mt-1">
              {isAudioSupported 
                ? "Enable audio to hear time announcements"
                : "Audio not supported in this browser"
              }
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={onToggleAudio}
              disabled={!isAudioSupported}
              className={`w-8 h-8 p-0 ${
                isAudioEnabled 
                  ? 'bg-amber-200 border-amber-300 hover:bg-amber-300' 
                  : 'bg-slate-200 border-slate-300'
              }`}
            >
              {isAudioEnabled && isAudioSupported ? (
                <Volume2 className="w-4 h-4 text-amber-700" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-600" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="grid grid-cols-3 gap-4">
        <Button
          onClick={onStart}
          disabled={isRunning}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-8 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-200 flex flex-col items-center space-y-2"
        >
          <Play className="w-6 h-6" />
          <span className="text-sm">Start</span>
        </Button>

        <Button
          onClick={onStop}
          disabled={!isRunning}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-8 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-200 flex flex-col items-center space-y-2"
        >
          <Square className="w-6 h-6" />
          <span className="text-sm">Stop</span>
        </Button>

        <Button
          onClick={onReset}
          className="bg-slate-600 hover:bg-slate-700 text-white font-semibold py-8 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-slate-200 flex flex-col items-center space-y-2"
        >
          <RotateCcw className="w-6 h-6" />
          <span className="text-sm">Reset</span>
        </Button>
      </div>

      {/* Additional Controls */}
      <div className="pt-4 border-t border-slate-200">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onAddLap}
            className="text-slate-500 hover:text-slate-700 text-sm font-medium"
          >
            <Flag className="w-4 h-4 mr-2" />
            Record Lap
          </Button>
          <Button
            variant="ghost"
            onClick={onFullscreen}
            className="text-slate-500 hover:text-slate-700 text-sm font-medium"
          >
            <Maximize className="w-4 h-4 mr-2" />
            Fullscreen
          </Button>
        </div>
      </div>
    </div>
  );
}
