import React, { useEffect, useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  ScrollView,
  Alert,
} from 'react-native';
import { useStopwatch } from './src/hooks/useStopwatch';
import { useTTS } from './src/hooks/useTTS';
import { StopwatchDisplay } from './src/components/StopwatchDisplay';
import { StopwatchControls } from './src/components/StopwatchControls';
import { LapTimes } from './src/components/LapTimes';

const App: React.FC = () => {
  const stopwatch = useStopwatch();
  const tts = useTTS();

  // Handle audio announcements
  useEffect(() => {
    if (stopwatch.isRunning && tts.isEnabled && tts.isInitialized) {
      if (stopwatch.shouldAnnounce(stopwatch.elapsedTime, stopwatch.intervalRate)) {
        const totalSeconds = Math.floor(stopwatch.elapsedTime / 1000);
        let announcement = '';

        switch (stopwatch.intervalRate) {
          case '10seconds':
            announcement = `${totalSeconds} second${totalSeconds !== 1 ? 's' : ''}`;
            break;
          case '30seconds':
            announcement = `${totalSeconds} second${totalSeconds !== 1 ? 's' : ''}`;
            break;
          case 'minute':
            const minutes = Math.floor(totalSeconds / 60);
            announcement = `${minutes} minute${minutes !== 1 ? 's' : ''}`;
            break;
        }

        if (announcement) {
          tts.speak(announcement);
        }
      }
    }
  }, [stopwatch.elapsedTime, stopwatch.isRunning, stopwatch.intervalRate, tts]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1E293B" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Interactive Timer</Text>
            <Text style={styles.subtitle}>
              Audio-enabled timer with customizable intervals
            </Text>
          </View>

          {/* Main Timer Card */}
          <View style={styles.timerCard}>
            <StopwatchDisplay 
              formattedTime={stopwatch.formattedTime}
              isRunning={stopwatch.isRunning}
            />
            
            <StopwatchControls
              isRunning={stopwatch.isRunning}
              intervalRate={stopwatch.intervalRate}
              isAudioEnabled={tts.isEnabled}
              isAudioSupported={tts.isInitialized}
              onStart={stopwatch.start}
              onStop={stopwatch.stop}
              onReset={stopwatch.reset}
              onAddLap={stopwatch.addLap}
              onToggleAudio={() => tts.setEnabled(!tts.isEnabled)}
              onIntervalRateChange={stopwatch.setIntervalRate}
            />
          </View>

          {/* Lap Times */}
          <LapTimes lapTimes={stopwatch.lapTimes} />

          {/* Info Section */}
          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>Native Mobile Features</Text>
            <Text style={styles.infoText}>
              This React Native app includes native text-to-speech, precise timing, 
              and works seamlessly across iOS and Android devices.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
  },
  timerCard: {
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
    overflow: 'hidden',
  },
  infoSection: {
    margin: 24,
    padding: 16,
    backgroundColor: '#DBEAFE',
    borderRadius: 12,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E40AF',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#1E40AF',
    lineHeight: 20,
  },
});

export default App;