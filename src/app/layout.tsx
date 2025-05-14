import "./globals.css";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import Menu from "@/components/Menu";
import Nav from "@/ui/nav";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "AKADEMI CRYPTO APP",
  description: "modul video akademi crypto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="dark">
      <body className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        <SessionProviderWrapper>
          <Nav />
          <main className="pt-16 pb-20">
            {/* Adjusted padding to prevent overlap */}
            {children}
          </main>
          <Menu />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
