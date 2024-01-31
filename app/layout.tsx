import { Montserrat } from "next/font/google";
import { ReactNode } from "react";
import { RenderComponent } from "../components/Render";
import "./globals.css";

const montserrat300 = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body
        className={`overflow-y-scroll min-w-fit ${montserrat300.className} font-light min-h-screen flex flex-col justify-between`}
      >
        <RenderComponent children={children} />
      </body>
    </html>
  );
}
