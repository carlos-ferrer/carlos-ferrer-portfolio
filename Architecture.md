# Architecture & State Management

## Directory Structure
```
src/
├── app/
│   ├── layout.tsx       # Root layout (Fonts, SmoothScroll provider)
│   ├── page.tsx         # Main entry (Scene + DOM Overlay)
│   └── globals.css      # Tailwind v4 Theme & Base Styles
├── components/
│   ├── canvas/          # 3D Components (R3F)
│   │   ├── Scene.tsx    # Main Canvas wrapper
│   │   ├── ProjectWheel.tsx # The Liquid Gallery
│   │   └── LiquidImage.tsx # Shader-enabled plane
│   ├── dom/             # HTML/React Components
│   │   ├── Hero.tsx     # Kinetic Typography
│   │   ├── About.tsx    # Timeline
│   │   ├── Testimonials.tsx # Marquee
│   │   └── ui/          # Reusable UI (Cursor, Buttons)
│   └── logic/           # Business Logic / Hooks
│       └── useStore.ts  # Zustand State
├── hooks/
│   └── useScroll.ts     # Lenis hook
└── utils/
    └── math.ts          # Helper functions
```

## State Management (Zustand)
`useStore.ts`
- `activeProject`: index of currently centered project (for 3D focus).
- `isHovered`: boolean (for cursor effects).
- `scrollSpeed`: number (for shader distortion).

## Animation Strategy
- **Global Scroll**: Lenis (smooth scrolling).
- **3D Distortion**: React Three Fiber `useFrame` loop reading scroll velocity.
- **DOM Entrances**: GSAP `ScrollTrigger` for split-text reveals.

## Key Libraries
- `next`: Framework
- `react-three/fiber`: WebGL renderer
- `gsap`: Timeline animation
- `lenis`: Smooth scroll normalization
- `tailwind-merge` + `clsx`: Class utility
