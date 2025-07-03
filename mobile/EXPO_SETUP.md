# Expo React Native Setup (Recommended)

Since the React Native CLI is having template issues, use Expo CLI which is more reliable:

## Method 1: Expo CLI (Recommended)

```bash
# Install Expo CLI globally
npm install -g @expo/cli

# Create new Expo project with TypeScript
npx create-expo-app StopwatchMobile --template

# Choose "Blank (TypeScript)" template when prompted
```

Then copy our custom files:
1. Replace `App.tsx` with our stopwatch app
2. Copy the `src/` directory
3. Install additional dependencies if needed

## Method 2: Alternative React Native Setup

If you prefer pure React Native, try this older but stable approach:

```bash
# Use the React Native version 0.72 template (more stable)
npx react-native@0.72.0 init StopwatchMobile

# Or use the bare minimum setup
npx react-native init StopwatchMobile --version 0.72.0
```

## Method 3: Manual Android Project Setup

Since you already have Android Studio:

1. **Create a basic React Native project structure**
2. **Import our stopwatch components**
3. **Configure for Android builds**

## Expo Advantages:
- No Android Studio configuration needed
- Built-in development tools
- Easy deployment to devices
- Better debugging experience
- More reliable setup process

## Next Steps:
1. Choose one of the methods above
2. Copy our stopwatch app files
3. Test in Expo Go app or Android emulator

The Expo approach will get you running much faster and avoid the CLI template issues you encountered.