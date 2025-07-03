import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  AppState,
  AppStateStatus,
} from 'react-native';
import { useStopwatch } from './hooks/useStopwatch';
import { useTTS } from './hooks/useTTS';
import { StopwatchDisplay } from './components/StopwatchDisplay';
import { StopwatchControls } from './components/StopwatchControls';
import { LapTimes } from './components/LapTimes';

export default function App() {
  const {
    isRunning,
    elapsedTime,
    formattedTime,
    intervalRate,
    lapTimes,
    start,
    stop,
    reset,
    toggle,
    addLap,
    setIntervalRate,
    shouldAnnounce,
    getAnnouncementInterval
  } = useStopwatch();

  const { speak, isEnabled: isAudioEnabled, setEnabled: setAudioEnabled, isAvailable: isAudioSupported } = useTTS();
  const lastAnnouncementTimeRef = useRef<number>(0);

  // Handle audio announcements
  useEffect(() => {
    if (!isRunning || !isAudioEnabled || !isAudioSupported) return;

    const currentTime = elapsedTime;
    const interval = getAnnouncementInterval(intervalRate);
    
    // Only announce if enough time has passed since last announcement
    if (currentTime - lastAnnouncementTimeRef.current >= interval) {
      const totalSeconds = Math.floor(currentTime / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      
      let announcement = '';
      if (minutes > 0) {
        announcement = `${minutes} minute${minutes > 1 ? 's' : ''} ${seconds} second${seconds !== 1 ? 's' : ''}`;
      } else {
        announcement = `${seconds} second${seconds !== 1 ? 's' : ''}`;
      }
      
      speak(announcement);
      lastAnnouncementTimeRef.current = currentTime;
    }
  }, [elapsedTime, isRunning, isAudioEnabled, isAudioSupported, intervalRate, speak, getAnnouncementInterval]);

  // Handle app state changes (pause/resume)
  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === 'background' && isRunning) {
        // Keep running in background
      }
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);
    return () => subscription?.remove();
  }, [isRunning]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1E293B" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <StopwatchDisplay
            formattedTime={formattedTime}
            isRunning={isRunning}
          />
          
          <StopwatchControls
            isRunning={isRunning}
            intervalRate={intervalRate}
            isAudioEnabled={isAudioEnabled}
            isAudioSupported={isAudioSupported}
            onStart={start}
            onStop={stop}
            onReset={reset}
            onAddLap={addLap}
            onToggleAudio={setAudioEnabled}
            onIntervalRateChange={setIntervalRate}
          />
          
          <LapTimes lapTimes={lapTimes} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingBottom: 40,
  },
});