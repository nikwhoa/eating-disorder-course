
export const metadata = {
  title: 'Курс: Relife',
  description: 'Relife - вилікуватись від компульсивних переїдань, булімії, орторексії раз і назавжди',
  favicon: './favicons/favicon.ico'
};

export default function RootLayout({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}
