import { useCallback, useEffect, useState } from 'react';
import * as Speech from 'expo-speech';

export interface TTSHook {
  speak: (text: string) => void;
  isEnabled: boolean;
  setEnabled: (enabled: boolean) => void;
  isAvailable: boolean;
}

export function useTTS(): TTSHook {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    // Check if speech synthesis is available
    const checkAvailability = async () => {
      try {
        const voices = await Speech.getAvailableVoicesAsync();
        setIsAvailable(voices.length > 0);
      } catch (error) {
        console.log('TTS not available:', error);
        setIsAvailable(false);
      }
    };

    checkAvailability();
  }, []);

  const speak = useCallback(async (text: string) => {
    if (!isAvailable || !isEnabled || !text) return;

    try {
      // Stop any ongoing speech
      Speech.stop();
      
      // Speak the text with Expo Speech
      await Speech.speak(text, {
        language: 'en-US',
        pitch: 1.0,
        rate: 0.8,
        volume: 1.0,
      });
    } catch (error) {
      console.error('TTS speak error:', error);
    }
  }, [isAvailable, isEnabled]);

  const setEnabled = useCallback((enabled: boolean) => {
    setIsEnabled(enabled);
    if (!enabled) {
      Speech.stop();
    }
  }, []);

  return {
    speak,
    isEnabled,
    setEnabled,
    isAvailable
  };
}