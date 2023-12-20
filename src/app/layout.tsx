import "./globals.css";
import { Inter } from "next/font/google";

import { GlobalContextProvider } from "./context/store";
import Navigation from "./navigation";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clicar",
  description: "Seminario de Mediación cultural digital",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <title>Clicar</title>
        <meta
          name="description"
          content="Clicar fue el seminario sobre mediación cultural digital coordinado por Desmusea en el Museo Centro de Arte Reina Sofía en el año 2022"
        />
      </Head>
      <body className={inter.className}>
        <GlobalContextProvider>
          <Navigation />
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
