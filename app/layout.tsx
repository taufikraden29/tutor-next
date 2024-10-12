import { Poppins } from "next/font/google";
import React from "react";
import { Metadata } from "next";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Next.js Tutorial - Codevolution",
    template: "%s | Codevolution",
  },
  description: " Explore Your Journey",
};

const RootLayout = ({ children }: { children: React.ReactDOM }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
          }}
        >
          <p>header</p>
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "ghostwhite",
            padding: "1rem",
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
