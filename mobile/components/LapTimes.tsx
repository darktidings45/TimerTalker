import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LapTime } from '../hooks/useStopwatch';

interface LapTimesProps {
  lapTimes: LapTime[];
}

export const LapTimes: React.FC<LapTimesProps> = ({ lapTimes }) => {
  if (lapTimes.length === 0) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏁 Lap Times</Text>
      <ScrollView style={styles.scrollView}>
        {lapTimes.map((lap, index) => (
          <View key={lap.id} style={styles.lapItem}>
            <Text style={styles.lapNumber}>Lap {index + 1}</Text>
            <Text style={styles.lapTime}>{lap.formattedTime}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  scrollView: {
    maxHeight: 300,
  },
  lapItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    marginBottom: 8,
  },
  lapNumber: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  lapTime: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
    fontFamily: 'monospace',
  },
});