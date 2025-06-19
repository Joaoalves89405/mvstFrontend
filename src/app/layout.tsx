import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "MVST Coffee - Premium Roasted Coffee",
  description:
    "Discover our exclusive collection of premium roasted coffee. Choose from Dark Roast, Americano, Cappuccino, or create your own custom blend.",
  keywords:
    "coffee, roasted coffee, premium coffee, dark roast, americano, cappuccino",
  openGraph: {
    title: "MVST Coffee - Premium Roasted Coffee",
    description: "Discover our exclusive collection of premium roasted coffee.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster richColors position="top-right" />
        {children}
      </body>
    </html>
  );
}
