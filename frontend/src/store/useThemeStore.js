import {create } from 'zustand';

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem('chat-theme') || 'cupcake', // Default theme is 'cupcake'
    setTheme: (theme) => {
        localStorage.setItem('chat-theme', theme);
        set({ theme });
    },
}));