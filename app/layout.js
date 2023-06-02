import './styles/globals.scss';

export const metadata = {
  title: 'Ставлення до прийому їжі (EAT-26)',
  description: 'Тест ставлення до прийому їжі (Eating Attitudes Test (EAT-26))',
  favicon: './favicons/favicon.ico'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
    <head>
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#707070' />
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
