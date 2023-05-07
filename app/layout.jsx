import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "My First Next.js App",
  description: "Generated by create next app",
  keywords: "next.js, react",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <head>
        <body>
          <Navigation />
          {children}
        </body>
      </head>
    </html>
  );
}
