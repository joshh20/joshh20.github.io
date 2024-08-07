import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { configData } from "@/assets/configData";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/atoms/ScrollToTopButton";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

const nunito = Nunito({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        template: `${configData.name.first} ${configData.name.last} - %s`,
        default: `${configData.name.first} ${configData.name.last} - ${configData.jobTitle}`,
    },
    description: configData.metadata.description,
    authors: [{ name: `${configData.name.first} ${configData.name.last}` }],
    metadataBase: new URL(process.env.HOST_URI as string),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="overflow-y-scroll">
            <body className={nunito.className}>
                <ThemeProvider attribute="class">
                    <Header />
                    <main className="mx-4 max-w-4xl py-8 sm:mx-12 sm:mt-8 lg:mx-auto">
                        {children}
                    </main>
                    <Footer />
                    <ScrollToTopButton />
                </ThemeProvider>
            </body>
            {/* Tiny Analytics pixel */}
            <Script src="https://app.tinyanalytics.io/pixel/La8FX8bNuyu6ga2J" />
        </html>
    );
}
