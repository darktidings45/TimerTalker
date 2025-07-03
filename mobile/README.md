# Interactive Stopwatch - React Native Mobile App

A native mobile version of the interactive stopwatch app with audio announcements for iOS and Android.

## Features

- **Native Text-to-Speech** - Uses device's built-in TTS engine
- **Precise Timing** - High-accuracy timers with background support
- **Audio Announcements** - Configurable intervals (10s, 30s, 1min)
- **Lap Recording** - Track multiple lap times
- **Native UI** - Platform-specific design and interactions
- **Background Operation** - Continues running when app is backgrounded

## Prerequisites

- Node.js 18+ 
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development)
- Physical device or emulator

## Installation

1. Navigate to the mobile directory:
```bash
cd mobile
```

2. Install dependencies:
```bash
npm install
```

3. For iOS, install CocoaPods dependencies:
```bash
cd ios && pod install && cd ..
```

## Running the App

### Android
```bash
npm run android
```

### iOS
```bash
npm run ios
```

### Development Server
```bash
npm start
```

## Project Structure

```
mobile/
├── src/
│   ├── hooks/
│   │   ├── useStopwatch.ts    # Stopwatch logic
│   │   └── useTTS.ts          # Text-to-speech integration
│   ├── components/
│   │   ├── StopwatchDisplay.tsx   # Time display component
│   │   ├── StopwatchControls.tsx  # Control buttons
│   │   └── LapTimes.tsx          # Lap time list
│   └── utils/
├── App.tsx                    # Main app component
├── index.js                   # App entry point
└── package.json
```

## Key Dependencies

- **react-native-tts** - Text-to-speech functionality
- **@react-native-picker/picker** - Native picker component
- **react-native-vector-icons** - Icon library
- **@react-native-async-storage/async-storage** - Local storage

## Building for Production

### Android APK
```bash
npm run build:android
```

### iOS Archive
```bash
npm run build:ios
```

## Native Features

- **Text-to-Speech**: Uses platform-native TTS engines
- **Vibration**: Haptic feedback on button presses
- **Background Timer**: Continues running when app is minimized
- **Native Navigation**: Platform-specific navigation patterns
- **Device Integration**: Respects system audio settings

## Differences from Web Version

- Native TTS instead of Web Speech API
- Platform-specific UI components
- Better performance and battery optimization
- Background execution capabilities
- Native device integrations

## Development Notes

- Uses React Native 0.76.5 with React 18.3.1
- TypeScript support throughout
- Platform-specific styling with StyleSheet
- Proper memory management for timers
- Native module integration for TTS