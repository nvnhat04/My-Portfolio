// app/providers.tsx
"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ThemeProvider 
                attribute="class" 
                defaultTheme="system" // Có thể đổi thành "light" hoặc "dark"
                enableSystem
            />
            {children}
        </>
    );
}