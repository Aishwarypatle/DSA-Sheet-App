import "./globals.css"
import Providers from "./provider"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
      </head>
      <body style={{ fontFamily: "Inter, sans-serif" }}>
        <Providers>
          {children}
          <ToastContainer
            position="top-right"
            autoClose={2000}
            theme="dark"
          />
        </Providers>
      </body>
    </html>
  )
}