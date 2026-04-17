import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
      </body>
    </html>
  );
}
