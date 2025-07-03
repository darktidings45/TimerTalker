# Interactive Stopwatch - Audio Timer

## Overview

This is a full-stack interactive stopwatch application built with React, Express.js, and TypeScript. The application features audio time announcements, customizable counting intervals, and a modern user interface built with shadcn/ui components. The architecture follows a monorepo structure with shared types and utilities between frontend and backend.

## System Architecture

### Web Application Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: React hooks with custom stopwatch logic
- **Routing**: Wouter for lightweight client-side routing
- **Data Fetching**: TanStack Query for server state management
- **Audio**: Web Speech API for time announcements

### Mobile Application Architecture
- **Framework**: React Native with TypeScript
- **Platform Support**: iOS and Android native apps
- **Audio**: Native text-to-speech engines via react-native-tts
- **State Management**: React hooks with shared stopwatch logic
- **UI Components**: Native mobile components with platform-specific styling
- **Storage**: AsyncStorage for persistent settings
- **Build**: Metro bundler for React Native development

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: In-memory storage with extensible interface
- **Build**: esbuild for production bundling

### Key Design Decisions

1. **Monorepo Structure**: Shared schema and types between client and server in the `/shared` directory to ensure type safety across the full stack
2. **Modern UI**: shadcn/ui components with Radix UI primitives for accessibility and consistent design
3. **Audio Integration**: Web Speech API for real-time time announcements with configurable intervals
4. **Type Safety**: Full TypeScript coverage with strict configuration
5. **Development Experience**: Vite for fast HMR and development server with Replit integration

## Key Components

### Stopwatch Logic (`/client/src/hooks/use-stopwatch.ts`)
- Custom React hook managing stopwatch state
- Precise timing with RAF-based updates
- Configurable announcement intervals (seconds, minutes, hours)
- Lap time tracking functionality

### Audio System (`/client/src/hooks/use-speech-synthesis.ts`)
- Web Speech API integration
- Voice selection and configuration
- Browser compatibility detection
- Audio toggle functionality

### UI Components
- **StopwatchDisplay**: Large time display with running status indicator
- **StopwatchControls**: Button controls for start/stop/reset/lap operations
- **LapTimes**: Organized display of recorded lap times
- **shadcn/ui**: Comprehensive UI component library with Tailwind CSS

### Backend Storage Interface (`/server/storage.ts`)
- Extensible storage interface for user management
- In-memory implementation for development
- Ready for database integration with Drizzle ORM

## Data Flow

1. **Timer Updates**: RAF-based timer updates state every frame when running
2. **Audio Announcements**: Triggered based on elapsed time and interval settings
3. **State Management**: React hooks manage local stopwatch state
4. **Future API Integration**: TanStack Query configured for server communication
5. **Database Operations**: Drizzle ORM with PostgreSQL for persistent data

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Framework**: Radix UI primitives, Tailwind CSS, shadcn/ui
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Utilities**: date-fns, clsx, class-variance-authority

### Backend Dependencies
- **Server**: Express.js with TypeScript
- **Database**: Drizzle ORM with Neon Database driver
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build**: Vite, esbuild
- **Type Checking**: TypeScript with strict configuration
- **Database**: Drizzle Kit for migrations and schema management
- **Replit Integration**: Custom plugins for development environment

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `/dist/public`
2. **Backend**: esbuild bundles server code to `/dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: NODE_ENV=development with tsx for hot reloading
- **Production**: NODE_ENV=production with bundled JavaScript
- **Database**: DATABASE_URL environment variable required

### Replit Integration
- Custom Vite plugins for Replit development environment
- Cartographer plugin for enhanced debugging
- Runtime error overlay for development

## Changelog

- July 03, 2025. Initial web application setup with React, Express, and TypeScript
- July 03, 2025. Added React Native mobile version with native TTS support
- July 03, 2025. Updated audio announcement intervals to 10s, 30s, and 1min

## User Preferences

Preferred communication style: Simple, everyday language.