import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { Navbar } from "@/components/navbar/navbar";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const fonts = `${GeistSans.variable} ${poppins.variable} font-sans`;

// Add Framer Motion
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Navbar className={fonts} />
        <main className={fonts}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}
