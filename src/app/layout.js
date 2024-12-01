import "./globals.css";

export const metadata = {
  title: "فروشگاه محصولات سنتی و محلی",
  description: "فروشگاه محصولات سنتی دستی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className="bg-[#eacc90] font-IranSans">{children}</body>
    </html>
  );
}
