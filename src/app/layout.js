import { Toaster } from "react-hot-toast";
import "./globals.css";
import {Bebas_Neue , Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import TopNavbar from "@/components/TopNavbar";
export const bebasneue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  weight:['400'],
  display:"swap"
})
 
export const montserrat = Montserrat({
  subsets: ['cyrillic'],
  variable: '--font-mont',
  weight:['100','200','300','400','500','600','700','800','900'],
  display:"swap"
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebasneue.variable}`}>
        <TopNavbar/>
        {children}
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
      </body>
    </html>
  );
}
