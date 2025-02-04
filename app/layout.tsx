// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { AuthProvider } from "./context/AuthContext";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };


// export default function RootLayout({ 
//   children,
// }: {
//   children: React.ReactNode
//  }) {
//   return (
//     <html lang="en">
//       <body className= "flex flex-col min-h-screen">
        
//         <AuthProvider>
          
//           {children}
//         </AuthProvider>
        
//       </body>
//     </html>
//   );
// }

// app/layout.tsx
'use client';

import { ReactNode } from 'react';
import Head from 'next/head';
import './globals.css'
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider, useTheme} from'./context/ThemeToggle'
import Header from '@/components/header';

interface LayoutProps {
  children: ReactNode;
}


const ThemedBody = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  const { isAuthenticated } = useAuth();

  return (
    <body className={theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}>
      {isAuthenticated && <Header />}
      {children}
    </body>
  );
};

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
    
      <AuthProvider>

        <ThemeProvider>

          <ThemedBody>

            {children}

          </ThemedBody>
        </ThemeProvider>
      </AuthProvider>
    </html>
  );
};

export default RootLayout;