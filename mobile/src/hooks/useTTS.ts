import { useCallback, useEffect, useState } from 'react';
import Tts from 'react-native-tts';

export interface TTSHook {
  speak: (text: string) => void;
  isEnabled: boolean;
  setEnabled: (enabled: boolean) => void;
  isInitialized: boolean;
}

export function useTTS(): TTSHook {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeTTS = async () => {
      try {
        // Initialize TTS
        await Tts.getInitStatus();
        
        // Set default voice settings
        Tts.setDefaultRate(0.5);
        Tts.setDefaultPitch(1.0);
        Tts.setDefaultLanguage('en-US');
        
        setIsInitialized(true);
      } catch (error) {
        console.error('TTS initialization failed:', error);
        setIsInitialized(false);
      }
    };

    initializeTTS();

    // Cleanup on unmount
    return () => {
      Tts.stop();
    };
  }, []);

  const speak = useCallback((text: string) => {
    if (!isInitialized || !isEnabled || !text) return;

    try {
      // Stop any ongoing speech
      Tts.stop();
      
      // Speak the text
      Tts.speak(text);
    } catch (error) {
      console.error('TTS speak error:', error);
    }
  }, [isInitialized, isEnabled]);

  const setEnabled = useCallback((enabled: boolean) => {
    setIsEnabled(enabled);
    if (!enabled) {
      Tts.stop();
    }
  }, []);

  return {
    speak,
    isEnabled,
    setEnabled,
    isInitialized
  };
}