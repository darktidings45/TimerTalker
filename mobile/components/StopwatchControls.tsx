import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { IntervalRate } from '../hooks/useStopwatch';

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
}

export const StopwatchControls: React.FC<StopwatchControlsProps> = ({
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
}) => {
  const handleIntervalChange = (value: IntervalRate) => {
    onIntervalRateChange(value);
  };

  const getIntervalLabel = (rate: IntervalRate) => {
    switch (rate) {
      case '10seconds':
        return 'Every 10 Seconds';
      case '30seconds':
        return 'Every 30 Seconds';
      case 'minute':
        return 'Every Minute';
      default:
        return 'Every 10 Seconds';
    }
  };

  const showIntervalPicker = () => {
    Alert.alert(
      'Select Interval',
      'Choose announcement interval',
      [
        { text: 'Every 10 Seconds', onPress: () => handleIntervalChange('10seconds') },
        { text: 'Every 30 Seconds', onPress: () => handleIntervalChange('30seconds') },
        { text: 'Every Minute', onPress: () => handleIntervalChange('minute') },
        { text: 'Cancel', style: 'cancel' }
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Interval Selection */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⏰ Announcement Interval</Text>
        <TouchableOpacity
          style={styles.pickerButton}
          onPress={showIntervalPicker}
        >
          <Text style={styles.pickerText}>
            {getIntervalLabel(intervalRate)}
          </Text>
          <Text style={styles.pickerArrow}>▼</Text>
        </TouchableOpacity>
      </View>

      {/* Audio Settings */}
      <View style={styles.audioSection}>
        <View style={styles.audioHeader}>
          <Text style={styles.audioTitle}>🔊 Audio Announcements</Text>
          <TouchableOpacity
            style={[
              styles.audioToggle,
              {
                backgroundColor: isAudioEnabled && isAudioSupported
                  ? '#10B981'
                  : '#94A3B8'
              }
            ]}
            onPress={onToggleAudio}
            disabled={!isAudioSupported}
          >
            <Text style={styles.audioToggleText}>
              {isAudioEnabled && isAudioSupported ? 'ON' : 'OFF'}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.audioSubtitle}>
          {isAudioSupported 
            ? 'Tap to toggle voice announcements'
            : 'Audio not supported on this device'
          }
        </Text>
      </View>

      {/* Control Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.controlButton,
            styles.startButton,
            { opacity: isRunning ? 0.5 : 1 }
          ]}
          onPress={onStart}
          disabled={isRunning}
        >
          <Text style={styles.buttonEmoji}>▶️</Text>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.controlButton,
            styles.stopButton,
            { opacity: !isRunning ? 0.5 : 1 }
          ]}
          onPress={onStop}
          disabled={!isRunning}
        >
          <Text style={styles.buttonEmoji}>⏹️</Text>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.controlButton, styles.resetButton]}
          onPress={onReset}
        >
          <Text style={styles.buttonEmoji}>🔄</Text>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>

      {/* Additional Controls */}
      <View style={styles.additionalControls}>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={onAddLap}
        >
          <Text style={styles.secondaryButtonText}>🏁 Record Lap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 12,
  },
  pickerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    backgroundColor: '#F9FAFB',
  },
  pickerText: {
    fontSize: 16,
    color: '#374151',
  },
  pickerArrow: {
    fontSize: 12,
    color: '#6B7280',
  },
  audioSection: {
    backgroundColor: '#FEF3C7',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  audioHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  audioTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#92400E',
  },
  audioToggle: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    minWidth: 40,
    alignItems: 'center',
  },
  audioToggleText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  audioSubtitle: {
    fontSize: 14,
    color: '#A16207',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    gap: 8,
  },
  controlButton: {
    flex: 1,
    paddingVertical: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  startButton: {
    backgroundColor: '#10B981',
  },
  stopButton: {
    backgroundColor: '#EF4444',
  },
  resetButton: {
    backgroundColor: '#6B7280',
  },
  buttonEmoji: {
    fontSize: 20,
    marginBottom: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  additionalControls: {
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  secondaryButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
  },
  secondaryButtonText: {
    color: '#6B7280',
    fontSize: 14,
    fontWeight: '500',
  },
});