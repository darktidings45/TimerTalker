# Interactive Stopwatch - Mobile App

A complete React Native Expo mobile version of the interactive stopwatch with native text-to-speech announcements.

## 🚀 Quick Start

### Step 1: Install Dependencies
```bash
cd mobile
npm install
```

### Step 2: Start Development Server
```bash
npm start
```

### Step 3: Test on Device
- **Expo Go App**: Install from App Store/Google Play, scan QR code
- **Android Emulator**: `npm run android`
- **iOS Simulator**: `npm run ios` (Mac only)

## 📱 Features

- **Native Text-to-Speech**: Uses `expo-speech` for audio announcements
- **Configurable Intervals**: 10 seconds, 30 seconds, or 1 minute
- **Lap Time Recording**: Track multiple lap times
- **Touch-Optimized UI**: Large buttons, native alerts, emoji icons
- **Background Support**: Continues running when app is minimized
- **Cross-Platform**: Works on iOS, Android, and web

## 🔧 Project Structure

```
mobile/
├── App.tsx                     # Main app component
├── package.json               # Dependencies and scripts
├── app.json                   # Expo configuration
├── hooks/
│   ├── useStopwatch.ts        # Timer logic
│   └── useTTS.ts              # Text-to-speech integration
└── components/
    ├── StopwatchDisplay.tsx   # Time display
    ├── StopwatchControls.tsx  # Control buttons
    └── LapTimes.tsx           # Lap time list
```

## 🔨 Local Build Process (No Cloud)

### Prerequisites
1. **Install Android Studio**
   - Download from https://developer.android.com/studio
   - Install Android SDK (API 33 or higher)
   - Create Android Virtual Device (AVD)

2. **Configure Environment Variables**
   ```bash
   # Add to ~/.bashrc or ~/.zshrc
   export ANDROID_HOME=$HOME/Android/Sdk
   export PATH=$PATH:$ANDROID_HOME/emulator
   export PATH=$PATH:$ANDROID_HOME/tools
   export PATH=$PATH:$ANDROID_HOME/platform-tools
   ```

### Build Commands
```bash
# Test with emulator first
npm run android

# Build release APK locally
npm run build:android

# The APK will be generated in:
# android/app/build/outputs/apk/release/app-release.apk
```

### Install APK
```bash
# Install via ADB
adb install android/app/build/outputs/apk/release/app-release.apk

# Or copy APK to device and install manually
```

## 🎯 Key Differences from Web Version

- **Native Components**: Uses React Native components instead of HTML/CSS
- **Native TTS**: Uses `expo-speech` instead of Web Speech API
- **Native Alerts**: Uses `Alert.alert()` for interval selection
- **Touch Interactions**: Optimized for mobile touch patterns
- **Background Support**: Continues running when app is minimized

## 📦 Dependencies

- `expo` - React Native framework
- `expo-speech` - Native text-to-speech
- `react-native` - Mobile framework
- `react` - UI library

## 🐛 Troubleshooting

- **QR Code won't scan**: Ensure phone and computer are on same WiFi
- **Build errors**: Check Android Studio SDK installation
- **TTS not working**: Test on physical device, simulators may not support TTS
- **App crashes**: Check console for errors, restart with `npm start --clear`

## 🏠 100% Local Development

All builds happen on your local machine using Android Studio's build tools. No cloud services or external dependencies required for compilation.

This eliminates the need for any file copying between directories - everything is already in the correct structure within the `/mobile` folder.