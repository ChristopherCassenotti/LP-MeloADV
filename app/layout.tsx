// app/layout.tsx
import "./globals.css"; // A forma correta é importar aqui em cima

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* O Next.js cuida do Head automaticamente */}
      <body className="antialiased"> 
        {children}
      </body>
    </html>
  );
}