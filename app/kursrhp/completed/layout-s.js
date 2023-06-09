
export const metadata = {
  title: 'Ставлення до прийому їжі (EAT-26)',
  description: 'Тест ставлення до прийому їжі (Eating Attitudes Test (EAT-26))',
  favicon: './favicons/favicon.ico'
};

export default function RootLayout({ children }) {
  return (
    <html lang='uk'>
    <head>
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#707070' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
      <link
        href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700&display=swap'
        rel='stylesheet' />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#ffffff' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </head>
    <body className={'no-transition'}>
    {children}
    </body>

    </html>

  );
}