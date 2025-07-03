import { useEffect, useCallback } from "react";
import { Timer } from "lucide-react";
import { useStopwatch } from "@/hooks/use-stopwatch";
import { useSpeechSynthesis } from "@/hooks/use-speech-synthesis";
import { StopwatchDisplay } from "@/components/stopwatch-display";
import { StopwatchControls } from "@/components/stopwatch-controls";
import { LapTimes } from "@/components/lap-times";

export default function StopwatchPage() {
  const stopwatch = useStopwatch();
  const speech = useSpeechSynthesis();

  // Handle audio announcements
  useEffect(() => {
    if (stopwatch.isRunning && speech.isEnabled && speech.isSupported) {
      if (stopwatch.shouldAnnounce(stopwatch.elapsedTime, stopwatch.intervalRate)) {
        const totalSeconds = Math.floor(stopwatch.elapsedTime / 1000);
        let announcement = "";

        switch (stopwatch.intervalRate) {
          case "10seconds":
            announcement = `${totalSeconds} second${totalSeconds !== 1 ? 's' : ''}`;
            break;
          case "30seconds":
            announcement = `${totalSeconds} second${totalSeconds !== 1 ? 's' : ''}`;
            break;
          case "minute":
            const minutes = Math.floor(totalSeconds / 60);
            announcement = `${minutes} minute${minutes !== 1 ? 's' : ''}`;
            break;
        }

        if (announcement) {
          speech.speak(announcement);
        }
      }
    }
  }, [stopwatch.elapsedTime, stopwatch.isRunning, stopwatch.intervalRate, speech]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Prevent shortcuts when typing in input fields
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.key.toLowerCase()) {
        case ' ':
          event.preventDefault();
          stopwatch.toggle();
          break;
        case 'r':
          event.preventDefault();
          stopwatch.reset();
          break;
        case 'l':
          event.preventDefault();
          stopwatch.addLap();
          break;
        case 'a':
          event.preventDefault();
          speech.setEnabled(!speech.isEnabled);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stopwatch, speech]);

  const handleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            <Timer className="inline w-10 h-10 text-blue-600 mr-3" />
            Interactive Timer
          </h1>
          <p className="text-slate-600 text-lg">Audio-enabled timer with customizable intervals</p>
        </div>

        {/* Main Timer Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <StopwatchDisplay 
            formattedTime={stopwatch.formattedTime}
            isRunning={stopwatch.isRunning}
          />
          
          <StopwatchControls
            isRunning={stopwatch.isRunning}
            intervalRate={stopwatch.intervalRate}
            isAudioEnabled={speech.isEnabled}
            isAudioSupported={speech.isSupported}
            onStart={stopwatch.start}
            onStop={stopwatch.stop}
            onReset={stopwatch.reset}
            onAddLap={stopwatch.addLap}
            onToggleAudio={speech.setEnabled}
            onIntervalRateChange={stopwatch.setIntervalRate}
            onFullscreen={handleFullscreen}
          />
        </div>

        {/* Lap Times Section */}
        <LapTimes lapTimes={stopwatch.lapTimes} />

        {/* Browser Compatibility Notice */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">i</span>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-blue-800">Browser Compatibility</h4>
              <p className="text-xs text-blue-700 mt-1">
                Audio announcements require a modern browser with Web Speech API support. 
                Works best in Chrome, Edge, and Safari.
              </p>
              <div className="mt-2 text-xs text-blue-600">
                <strong>Keyboard Shortcuts:</strong> Space (Start/Stop), R (Reset), L (Lap), A (Toggle Audio)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
