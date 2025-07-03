import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StopwatchDisplayProps {
  formattedTime: string;
  isRunning: boolean;
}

export const StopwatchDisplay: React.FC<StopwatchDisplayProps> = ({ 
  formattedTime, 
  isRunning 
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.timeDisplay}>{formattedTime}</Text>
      <Text style={styles.subtitle}>Hours : Minutes : Seconds</Text>
      
      <View style={styles.statusContainer}>
        <View style={[
          styles.statusDot, 
          { backgroundColor: isRunning ? '#10B981' : '#94A3B8' }
        ]} />
        <Text style={styles.statusText}>
          {isRunning ? 'Running' : 'Ready'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E293B',
    padding: 32,
    alignItems: 'center',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  timeDisplay: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'monospace',
    letterSpacing: 4,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#CBD5E1',
    marginBottom: 24,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  statusText: {
    fontSize: 14,
    color: '#CBD5E1',
  },
});