import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* antialised is a tailwind class that smooths out the font */}
        {children}
      </body>
    </html>
  );
}
