## Overview

React, TypeScript, Tailwind, Vite, JSON Placeholder - Demo Filtering Posts

## Getting Started

### Installation

To begin, use Vite default installation.

```bash
npm create vite@latest
```

Configure Vite localhost server on port 3000.
Add Tailwind

```javascript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
  },
});
```

Install the required dependencies using the following command:

```bash
pnpm i
```

## Development Server:

After installing the dependencies run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
