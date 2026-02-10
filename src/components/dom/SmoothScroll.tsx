'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';
import { useStore } from '../logic/useStore';

export default function SmoothScroll({ children }: { children: ReactNode }) {
    const setScrollSpeed = useStore((state) => state.setScrollSpeed);

    return (
        <ReactLenis
            root
            options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
            onScroll={(e: any) => {
                setScrollSpeed(e.velocity);
            }}
        >
            {children}
        </ReactLenis>
    );
}
