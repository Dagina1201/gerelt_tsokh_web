'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theme/theme";
import Fonts from "@/theme/fonts";
import Navbar from "@/components/navbar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <ChakraProvider theme={theme}>
        <Fonts />
        <Navbar/>
        <Box h={20}/>
          {children}</ChakraProvider>
      </body>
    </html>
  );
}
