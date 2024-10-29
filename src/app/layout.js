import "./globals.css";

export const metadata = {
  title: "Cafeteria il Lago Menukort",
  description: "Menukort",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
