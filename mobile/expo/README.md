# Interactive Stopwatch - Expo App

A complete Expo React Native version of the interactive stopwatch with native text-to-speech.

## 🚀 Quick Start

### 1. Create Expo Project
```bash
# Navigate to where you want the project
cd your-project-directory

# Create Expo project
npx create-expo-app StopwatchMobile --template blank-typescript
```

### 2. Copy Our Files
Replace the generated files with our custom stopwatch app:

```bash
# Copy package.json dependencies
cp mobile/expo/package.json StopwatchMobile/

# Copy main app file
cp mobile/expo/App.tsx StopwatchMobile/

# Copy app config
cp mobile/expo/app.json StopwatchMobile/

# Copy all components and hooks
cp -r mobile/expo/hooks StopwatchMobile/
cp -r mobile/expo/components StopwatchMobile/
```

### 3. Install Dependencies
```bash
cd StopwatchMobile
npm install
```

### 4. Start Development
```bash
npx expo start
```

## 📱 Testing Options

### Option 1: Expo Go App (Easiest)
1. Install "Expo Go" from App Store/Google Play
2. Scan the QR code from `expo start`
3. App runs instantly on your phone

### Option 2: Android Emulator
```bash
npx expo start --android
```

### Option 3: iOS Simulator (Mac only)
```bash
npx expo start --ios
```

## ✨ Features

- **Native TTS**: Uses `expo-speech` for text-to-speech announcements
- **Configurable Intervals**: 10 seconds, 30 seconds, or 1 minute announcements
- **Lap Recording**: Track multiple lap times
- **Touch-Optimized UI**: Large buttons, native alerts, emoji icons
- **Cross-Platform**: Works on iOS, Android, and web

## 🔧 Key Files

- `App.tsx` - Main stopwatch app
- `hooks/useStopwatch.ts` - Timer logic
- `hooks/useTTS.ts` - Expo Speech integration
- `components/StopwatchDisplay.tsx` - Time display
- `components/StopwatchControls.tsx` - Control buttons
- `components/LapTimes.tsx` - Lap time list

## 📦 Dependencies

- `expo-speech` - Native text-to-speech
- `expo-status-bar` - Status bar control
- Standard React Native components

## 🎯 Expo Advantages

- **Zero Configuration**: No Android Studio setup needed
- **Instant Testing**: Scan QR code to test on device
- **Hot Reloading**: See changes instantly
- **Easy Deployment**: One command to build APK/IPA
- **Web Support**: Also runs in browser

## 🔨 Building for Production

```bash
# Build Android APK
npx expo build:android

# Build iOS IPA
npx expo build:ios
```

## 🐛 Troubleshooting

- **QR Code won't scan**: Make sure phone and computer are on same WiFi
- **App crashes**: Check console for errors, restart with `npx expo start --clear`
- **TTS not working**: Test on physical device, some simulators don't support TTS

This Expo version eliminates all the React Native CLI setup issues and gets you running immediately!