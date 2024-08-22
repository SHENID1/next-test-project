"use client"

import type {Viewport} from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
import React from "react";
import {NavLinks} from "@/app/ui/navLinks/nav-links";
import FooterComponent from "@/app/ui/footer/footer.component";
import NextTopLoader from "nextjs-toploader";


const inter = Montserrat({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});


export const viewport: Viewport = {
    themeColor: "#6fdb45",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="ru">
        <body className={inter.className}>
        <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            zIndex={9999}
            showAtBottom={false}
        />
        <nav>
            <NavLinks/>
        </nav>
        <main>
            {children}
        </main>
        <footer>
            <FooterComponent/>
        </footer>
        </body>
        </html>
    );
}
