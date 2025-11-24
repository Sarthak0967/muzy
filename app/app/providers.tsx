"use client"
import { SessionProvider } from "next-auth/react";
// Learn Context Api in react 
export function Providers({ children }: {
    children: React.ReactNode
}) {
    return <SessionProvider>
        {children}
    </SessionProvider>
}