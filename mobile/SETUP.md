# React Native Stopwatch Setup Guide

## Quick Setup for Android Studio

### 1. Initialize React Native Project
Since you're getting the default "Welcome to React" screen, you need to properly initialize the React Native project:

```bash
cd mobile
npx react-native init StopwatchMobile --template react-native-template-typescript
```

### 2. Replace Default Files
After initialization, replace these files with our custom stopwatch app:

- Copy `App.tsx` to replace the default App.tsx
- Copy the entire `src/` directory
- Replace `package.json` with our dependencies

### 3. Install Dependencies
```bash
npm install
```

### 4. Android Setup
```bash
npx react-native run-android
```

## Alternative: Manual Setup

If you want to use the existing structure:

### 1. Check Entry Point
Make sure `index.js` is properly configured:

```javascript
import { AppRegistry } from 'react-native';
import App from './App';  // Make sure this points to your custom App.tsx
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

### 2. Verify app.json
```json
{
  "name": "StopwatchMobile",
  "displayName": "Interactive Stopwatch"
}
```

### 3. Clear Cache and Rebuild
```bash
npx react-native start --reset-cache
npx react-native run-android
```

## Troubleshooting

### If you still see "Welcome to React":
1. The app name in `app.json` might not match the registered component
2. The `App.tsx` file might not be properly imported
3. Metro cache might need clearing

### Solution:
```bash
# Clear everything and start fresh
rm -rf node_modules
npm install
npx react-native start --reset-cache
# In another terminal:
npx react-native run-android
```

## Production TTS Setup

To add real text-to-speech functionality:

```bash
npm install react-native-tts
# Follow the platform-specific setup instructions for react-native-tts
```

Then uncomment the TTS code in `src/hooks/useTTS.ts`.