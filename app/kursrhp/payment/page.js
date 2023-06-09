'use client';
import { RightArrow } from '@/app/tools/icons/icons';
import '@/app/kursrhp/styles.scss';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function Page() {

  const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: ''
    }
  );
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const router = useRouter();
  const params = useSearchParams();
  const tariff = params.get('tariff');
  const price = params.get('price');

  const liqpay = {
    'soloTariff': {
      data: 'eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOjAuMSwiY3VycmVuY3kiOiJVU0QiLCJkZXNjcmlwdGlvbiI6ItCi0LDRgNC40YQg0KHQvtC70L4iLCJwdWJsaWNfa2V5IjoiaTMyOTI1NjgzMzU2IiwibGFuZ3VhZ2UiOiJ1ayIsIm9yZGVyX2lkIjoiNTY1MTE2NTQ0IiwicGF5dHlwZXMiOiJwYXlwYXJ0LCBhcGF5LCBncGF5LCBjYXJkLCBwcml2YXQyNCIsInJlc3VsdF91cmwiOiJodHRwczovL2VhdGluZy1kaXNvcmRlci1jb3Vyc2Uubm9yZW5rby5uZXQudWEva3Vyc3JocC9jb21wbGV0ZWQifQ==',
      signature: 'WcXY/KyZAe5Zc07l2wkiRnISKYs='
    }
  };


  const handleInputChange = async (e) => {
    const { id, value } = e.target;

    let updatedValue = value;

    if (id === 'name') {
      // Perform validation for the name field
      if (value.length > 20) {
        updatedValue = value.slice(0, 20);
      }
      // Other validation rules for the name field can be added here
    } else if (id === 'phone') {
      const numericValue = value.replace(/\D/g, '');

      // Limit the phone field to a maximum of 10 digits
      if (numericValue.length > 14) {
        updatedValue = numericValue.slice(0, 14);
      } else {
        updatedValue = numericValue;
      }

    } else if (id === 'email') {
      // Perform validation for the email field
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(value);
      if (!isValidEmail && value !== '') {
        // Clear the value if it is not a valid email address
        updatedValue = '';
      }
      updatedValue = value;
      // Other validation rules for the email field can be added here
    }

    const updatedFormData = {
      ...formData,
      [id]: updatedValue
    };

    setFormData(updatedFormData);

    // check if all fields are filled
    if (formData.name && formData.email && formData.phone) {
      setIsFormSubmitted(true);

      try {
        const res = await fetch('http://localhost:4000/api/payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: formData.name, email: formData.email, phone: formData.phone, tariff: tariff, price: price })
        });

        if (!res.ok) throw new Error('Error while registering');

        const data = await res.json();
        if (data) {
          setIsFormSubmitted(true);
        }
      } catch (error) {
        console.error(error);
      }

    } else {
      setIsFormSubmitted(false);
    }
  };

  const collectFormData = async () => {
    console.log('formData', formData);
    // try {
    //   const res = await fetch('http://localhost:4000/api/payment', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ name: formData.name, email: formData.email, phone: formData.email, tariff: tariff, price: price })
    //   });
    //
    //   if (!res.ok) throw new Error('Error while registering');
    //
    //   const data = await res.json();
    //   console.log(data);
    //   setIsFormSubmitted(true);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <div className='payment'>
      <div className='payment__title title-primary'>
        Оплата
      </div>
      <div className='payment__container'>
        <div className='payment__description'>
          <div className='payment__description-title'>
            Тариф: <b>{tariff}</b>
          </div>
          <div className='payment__description-price'>
            Ціна: <b>{price}$</b>
          </div>
          <div className='payment__description-text'>
            <p>
              Для оплати курсу ви можете скористатися будь-яким зручним для вас способом. Після оплати ви отримаєте лист на пошту з подальшими
              інструкціями. Якщо ви не отримали листа, напишіть нам на пошту <a href='mailto:norenkonikita@gmail.com'>email</a>.
            </p>
          </div>
        </div>
      </div>

      <div className='payment__form'>
        <div className='payment__form-title'>
          Заповніть форму для оплати та натисніть кнопку "Оплатити"
        </div>
        <div className='payment__form-container'>
          <div className='payment__form-field'>
            <input type='text' id='name' value={formData.name} onChange={handleInputChange} placeholder="Ім'я" />
          </div>
          <div className='payment__form-field'>
            <input type='text' id='phone' value={formData.phone} onChange={handleInputChange} placeholder='Телефон' />
          </div>
          <div className='payment__form-field'>
            <input type='text' id='email' value={formData.email} onChange={handleInputChange} placeholder='Електронна пошта' />
          </div>
          <div className='payment__form-field'>
            <form method='POST' action='https://www.liqpay.ua/api/3/checkout' acceptCharset='utf-8' onSubmit={collectFormData}>
              <input type='hidden' name='data'
                     value={liqpay.soloTariff.data} />
              <input type='hidden' name='signature' value={liqpay.soloTariff.signature} />
              <button type='submit' disabled={!isFormSubmitted} className='pay-button' onClick={collectFormData}>
                Оплатити
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}