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

## 🔨 Building for Production (Local Builds)

### Option 1: Expo Development Build (Local)
```bash
# Install Expo CLI locally
npm install -g @expo/cli

# Create development build locally
npx expo run:android
npx expo run:ios
```

### Option 2: Eject to React Native CLI (Full Local Control)
```bash
# Eject from Expo to get full native control
npx expo eject

# Then build with standard React Native commands
npx react-native run-android
npx react-native run-ios
```

### Option 3: Local APK Generation
```bash
# Generate Android APK locally (requires Android Studio)
npx expo run:android --variant release

# Or build with Gradle directly after ejecting
cd android
./gradlew assembleRelease
```

### Prerequisites for Local Builds
- **Android**: Android Studio with SDK and emulator
- **iOS**: Xcode (Mac only) with iOS simulator
- **Java Development Kit (JDK)** for Android builds

## 🏠 Completely Local Build Setup

### Step 1: Install Android Studio
1. Download Android Studio from https://developer.android.com/studio
2. Install Android SDK (API 33 or higher)
3. Create Android Virtual Device (AVD) or connect physical device

### Step 2: Configure Environment Variables
```bash
# Add to your ~/.bashrc or ~/.zshrc
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### Step 3: Local Build Commands
```bash
# Test with emulator first
npx expo run:android

# Build release APK locally
npx expo run:android --variant release

# The APK will be generated in:
# android/app/build/outputs/apk/release/app-release.apk
```

### Step 4: Install APK on Device
```bash
# Install via ADB
adb install android/app/build/outputs/apk/release/app-release.apk

# Or copy APK file to device and install manually
```

This approach keeps everything on your local machine with no cloud dependencies.

## 🐛 Troubleshooting

- **QR Code won't scan**: Make sure phone and computer are on same WiFi
- **App crashes**: Check console for errors, restart with `npx expo start --clear`
- **TTS not working**: Test on physical device, some simulators don't support TTS

This Expo version eliminates all the React Native CLI setup issues and gets you running immediately!