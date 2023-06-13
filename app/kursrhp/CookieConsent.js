import React from 'react';
import { hasCookie, setCookie } from 'cookies-next';
import './styles.scss'
const CookieConsent = (props) => {
  const [showConsent, setShowConsent] = React.useState(true);

  React.useEffect(() => {
    setShowConsent(hasCookie('localConsent'));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie('localConsent', 'true', {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className='user-agreement'>
      <div className='user-agreement-container fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-8 bg-gray-100'>
        <span className='text-dark text-base mr-16'>
          Цей сайт збирає та використовує інформацію про користувачів, для покращення роботи. Користуючись сайтом ви погоджуєтесь з <a href='/kursrhp/privacy-policy' target='_blank'>політикою конфіденційності</a>.
        </span>
        <button className='bg-green-500 py-2 px-8 rounded text-white' onClick={() => acceptCookie()}>
          Добре
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;