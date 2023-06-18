import '@/app/test/styles/globals.scss';

export const metadata = {
  title: 'Ставлення до прийому їжі (EAT-26)',
  description: 'Тест ставлення до прийому їжі (Eating Attitudes Test (EAT-26))',
  favicon: './favicons/favicon.ico'
};

export default function RootLayout({ children }) {
  return (
    <div className=''>
      {children}
    </div>

  );
}
