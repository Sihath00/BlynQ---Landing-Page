 // Import global styles
import {Navigation }from "../components/navigation/Navigation"; // Adjust the path based on your structure
import  Footer  from "../components/footer/Footer"; // Adjust the path based on your structure

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navigation /> {/* Navigation bar appears on every page */}
        <main className="flex-grow">{children}</main>
        <Footer /> {/* Footer appears on every page */}
      </body>
    </html>
  );
}
