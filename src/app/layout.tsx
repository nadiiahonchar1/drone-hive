import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Drone-hive',
  description:
    'Створюємо продукти виключно по запитам військових, щоб як можна більше збільшити ефективність використання наших систем',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
