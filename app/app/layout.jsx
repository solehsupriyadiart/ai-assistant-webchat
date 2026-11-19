import "./globals.css";

export const metadata = {
  title: "AI Assistant",
  description: "AI Assistant Webchat"
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
