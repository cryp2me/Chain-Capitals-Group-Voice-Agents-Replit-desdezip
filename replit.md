# Chain Capitals Group Voice Agents

## Overview

This is a modern web application for Chain Capitals Group, showcasing AI-powered voice agent solutions for various business sectors including dental clinics, aesthetic medicine, real estate, and hospitality. The application is built as a marketing and lead generation platform with informational pages, appointment booking functionality, and legal compliance pages.

The project uses a full-stack TypeScript architecture with React for the frontend and Express for the backend, designed to run on Vite's development server with hot module replacement support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript using Vite as the build tool and development server.

**UI Component System**: The application uses shadcn/ui components built on Radix UI primitives, providing a comprehensive set of accessible, customizable components. All UI components follow a consistent design system defined in CSS variables using HSL color values.

**Routing**: Client-side routing implemented with Wouter, a lightweight routing library. The application supports multiple routes including home, privacy policy, cookies policy, terms, appointment booking, and a 404 page.

**Styling Approach**: Tailwind CSS for utility-first styling with a custom design system that includes AI-themed colors and gradients. The design system defines specific color palettes for an AI voice theme (ai-blue, ai-cyan, ai-green, ai-glow) with custom gradient definitions.

**State Management**: React Query (@tanstack/react-query) for server state management and data fetching, with a centralized query client configuration.

**Form Handling**: React Hook Form with Zod resolvers for type-safe form validation (based on dependencies, though form schema implementation is minimal in the codebase).

**Theme Support**: Dark/light theme support via next-themes library.

**Key Design Decisions**:
- Component-based architecture with reusable UI primitives
- Custom animated components (VoiceMicButton with morphing gradients and orbital animations)
- Responsive design with mobile-first approach
- Accessibility-first component library (Radix UI)

### Backend Architecture

**Server Framework**: Express 5.x running on Node.js with TypeScript.

**Development Setup**: The application uses a custom Vite middleware integration for development that serves the React application through Express. In development mode, Vite handles HMR (Hot Module Replacement) and transforms the index.html template.

**Production Build**: Static files are built to `dist/public` and served by Express in production mode.

**API Structure**: Minimal API implementation with a health check endpoint at `/api/health`. The architecture is designed to be extensible for additional API routes.

**Request Logging**: Custom middleware for logging API requests with duration tracking and response capture (limited to 80 characters for readability).

**Error Handling**: Centralized error handling middleware that returns JSON error responses.

**Key Design Decisions**:
- Separation of development and production serving strategies
- Middleware-first approach for cross-cutting concerns
- RESTful API design pattern (prepared but minimal implementation)

### Build Configuration

**TypeScript Configuration**: Multiple tsconfig files for different contexts:
- `tsconfig.app.json` for client-side code with React JSX support
- `tsconfig.server.json` for server-side code targeting ES2022
- `tsconfig.node.json` for build tooling
- Path aliases configured for `@/*` (client src) and `@shared/*` (shared types)

**Build Process**:
- Client build via Vite with React SWC plugin for fast refresh
- Server build via TypeScript compiler
- Separate output directories for client (`dist/public`) and server (`dist/server`)

**Development Scripts**:
- `npm run dev`: Runs TypeScript server with watch mode and Vite middleware
- `npm run build`: Builds both client and server for production
- `npm start`: Runs production server from built files

**Linting**: ESLint configured with TypeScript and React plugins, with relaxed rules for rapid development (unused vars, no-implicit-any disabled).

### Project Structure

```
/client          - Frontend React application
  /public        - Static assets (robots.txt)
  /src
    /components  - Reusable UI components
      /ui        - shadcn/ui component library
    /hooks       - Custom React hooks
    /lib         - Utility functions and query client
    /pages       - Route components
    /assets      - Images and media files
/server          - Backend Express application
  index.ts       - Server entry point
  routes.ts      - API route definitions
  vite.ts        - Vite integration utilities
/shared          - Shared types between client and server
```

## External Dependencies

### Core Framework Dependencies
- **@supabase/supabase-js** (v2.81.0): Supabase client library (configured but not actively used in current codebase)
- **express** (v5.1.0): Web server framework
- **vite**: Build tool and development server
- **react** & **react-dom**: UI library
- **wouter**: Lightweight routing library

### UI Component Libraries
- **@radix-ui/***: Complete suite of unstyled, accessible UI primitives including accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, navigation-menu, popover, select, tabs, toast, and many others
- **cmdk**: Command menu component
- **embla-carousel-react**: Carousel/slider component
- **input-otp**: OTP input component
- **lucide-react**: Icon library
- **next-themes**: Theme management

### Utility Libraries
- **@tanstack/react-query**: Server state management
- **@hookform/resolvers**: Form validation resolvers
- **class-variance-authority**: Type-safe variant management
- **clsx** & **tailwind-merge**: CSS class manipulation
- **date-fns**: Date formatting and manipulation
- **react-day-picker**: Calendar/date picker component
- **react-hook-form**: Form handling
- **recharts**: Charting library (included but not actively used)
- **sonner**: Toast notifications
- **vaul**: Drawer component
- **zod**: Schema validation

### Development Dependencies
- **TypeScript**: Type system
- **@vitejs/plugin-react-swc**: Fast React refresh via SWC
- **tsx**: TypeScript execution for development
- **ESLint**: Code linting
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS** & **Autoprefixer**: CSS processing

### Notes on Integrations
- Supabase client is installed but no active database connection or queries are implemented
- The application is prepared for form validation with Zod but minimal schemas are defined
- Lovable-tagger plugin is used in development for component tagging (development-only feature)