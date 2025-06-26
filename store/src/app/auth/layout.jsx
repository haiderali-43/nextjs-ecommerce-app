
import { metadata } from "@/lib/metaData"
import { Poppins } from "next/font/google";
import '../styles/globals.css';



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});




export default function authLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body className={`${poppins.className}`}>
        {/* Layout UI */}

        <main>{children}</main>

      </body>
    </html>
  )
}