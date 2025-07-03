import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';

export interface TTSHook {
  speak: (text: string) => void;
  isEnabled: boolean;
  setEnabled: (enabled: boolean) => void;
  isInitialized: boolean;
}

export function useTTS(): TTSHook {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isInitialized, setIsInitialized] = useState(true); // Simplified for demo

  const speak = useCallback((text: string) => {
    if (!isInitialized || !isEnabled || !text) return;

    // For demo purposes, show alert instead of TTS
    // In production, you would use react-native-tts here
    console.log('TTS would speak:', text);
    
    // Uncomment this line to see what would be spoken
    // Alert.alert('TTS Announcement', text);
  }, [isInitialized, isEnabled]);

  const setEnabled = useCallback((enabled: boolean) => {
    setIsEnabled(enabled);
  }, []);

  return {
    speak,
    isEnabled,
    setEnabled,
    isInitialized
  };
}