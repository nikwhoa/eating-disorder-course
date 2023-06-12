'use client';
import { useState } from 'react';

export default function Page() {
  const [access, setAccess] = useState(false);
  const [password, setPassword] = useState('');

  const ACCESS_TO_DATA = process.env.NEXT_PUBLIC_ACCESS_TO_DATA;

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  console.log(ACCESS_TO_DATA);
  const handleAccess = (e) => {
    e.preventDefault();
    if (password === ACCESS_TO_DATA) {
      setAccess(true);
    } else {
      alert('Incorrect password');
      setPassword('');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      {!access && (
        <form onSubmit={handleAccess} style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
          <input
            style={{
              width: '100%',
              height: '40px',
              padding: '0 10px',
              marginBottom: '10px',
              border: '1px solid #000000',
              borderRadius: '10px'
            }}
            type='password'
            value={password}
            onChange={handlePasswordChange}
            placeholder='Enter password to access'
          />
          <button type='submit' style={{
            width: '50%',
            height: '40px',
            padding: '0 10px',
            marginBottom: '10px',
            border: '1px solid #000000',
            borderRadius: '10px',
            cursor: 'pointer'
          }}>Send
          </button>
        </form>
      )}

      {access && (
        <iframe
          style={{ background: '#FFFFFF', border: 'none', borderRadius: '2px', boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)' }}
          width={'100%'}
          height={480}
          src='https://charts.mongodb.com/charts-harchenko-com-ua-dszuz/embed/charts?id=64837dfa-8dce-4078-85f8-cc77b3184a7a&maxDataAge=3600&theme=light&autoRefresh=true'
        />
      )}
    </div>
  );
};
