import { create } from 'zustand';

interface State {
    activeProject: number;
    setActiveProject: (index: number) => void;
    isHovered: boolean;
    setIsHovered: (hovered: boolean) => void;
    scrollSpeed: number;
    setScrollSpeed: (speed: number) => void;
}

export const useStore = create<State>((set) => ({
    activeProject: 0,
    setActiveProject: (index) => set({ activeProject: index }),
    isHovered: false,
    setIsHovered: (hovered) => set({ isHovered: hovered }),
    scrollSpeed: 0,
    setScrollSpeed: (speed) => set({ scrollSpeed: speed }),
}));
