'use client';
import { RightArrow } from '@/app/tools/icons/icons';
import '@/app/kursrhp/styles.scss';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import CompletePayment from '@/app/kursrhp/payment/CompletePayment';
import { toBase64 } from 'request/lib/helpers';
import crypto from 'crypto';

export default function Page() {

  const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: ''
    }
  );
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isPostSuccessful, setIsPostSuccessful] = useState(false);
  const [isError, setIsError] = useState(false);
  const [tariffTitle, setTariffTitle] = useState('');


  const router = useRouter();
  const params = useSearchParams();
  const tariff = params.get('tariff');
  const price = params.get('price');

  if (!tariff || !price) {
    router.push('/kursrhp');
  }

  const liqpay = {
    data: '',
    signature: ''
  };

  if (tariff === 'solo') {
    liqpay.data = toBase64(JSON.stringify({
      'public_key': `${process.env.NEXT_PUBLIC_LIQPAY_PUBLIC_KEY}`,
      'version': 3,
      'action': 'pay',
      'amount': 0.1,
      'currency': 'USD',
      'description': 'Соло',
      'language': 'uk',
      'order_id': `solo_tariff_${Math.floor((Math.random() * 1000000))}`,
      'paytypes': 'paypart, apay, gpay, card, privat24'
    }));
    const string = liqpay.data
    const sha = crypto.createHash('sha1')
    sha.update(`${process.env.NEXT_PUBLIC_LIQPAY_PRIVATE_KEY}${string}${process.env.NEXT_PUBLIC_LIQPAY_PRIVATE_KEY}`)
    const signature = sha.digest('base64');
    liqpay.signature = signature

    useEffect(() => {
      setTariffTitle('Соло');
    }, [tariff]);
  }

  if (tariff === 'group') {

    liqpay.data = toBase64(JSON.stringify({
      'public_key': `${process.env.NEXT_PUBLIC_LIQPAY_PUBLIC_KEY}`,
      'version': 3,
      'action': 'pay',
      'amount': price,
      'currency': 'USD',
      'description': 'Я в групі',
      'language': 'uk',
      'order_id': `group_tariff_${Math.floor((Math.random() * 1000000))}`,
      'paytypes': 'paypart, apay, gpay, card, privat24'
    }));
    const string = liqpay.data
    const sha = crypto.createHash('sha1')
    sha.update(`${process.env.NEXT_PUBLIC_LIQPAY_PRIVATE_KEY}${string}${process.env.NEXT_PUBLIC_LIQPAY_PRIVATE_KEY}`)
    const signature = sha.digest('base64');
    liqpay.signature = signature

    useEffect(() => {
      setTariffTitle('Я в групі');
    }, [tariff]);
  }

  if (tariff === 'with-psychologist') {

    liqpay.data = toBase64(JSON.stringify({
      'public_key': `${process.env.NEXT_PUBLIC_LIQPAY_PUBLIC_KEY}`,
      'version': 3,
      'action': 'pay',
      'amount': price,
      'currency': 'USD',
      'description': 'Я з психологом',
      'language': 'uk',
      'order_id': `with-psychologist_tariff_${Math.floor((Math.random() * 1000000))}`,
      'paytypes': 'paypart, apay, gpay, card, privat24'
    }));
    const string = liqpay.data
    const sha = crypto.createHash('sha1')
    sha.update(`${process.env.NEXT_PUBLIC_LIQPAY_PRIVATE_KEY}${string}${process.env.NEXT_PUBLIC_LIQPAY_PRIVATE_KEY}`)
    const signature = sha.digest('base64');
    liqpay.signature = signature

    useEffect(() => {
      setTariffTitle('Я з психологом');
    }, [tariff]);
  }

  if (tariff === 'with-dasha') {

    liqpay.data = toBase64(JSON.stringify({
      'public_key': `${process.env.NEXT_PUBLIC_LIQPAY_PUBLIC_KEY}`,
      'version': 3,
      'action': 'pay',
      'amount': price,
      'currency': 'USD',
      'description': 'Я з Дашею',
      'language': 'uk',
      'order_id': `with-dasha_tariff_${Math.floor((Math.random() * 1000000))}`,
      'paytypes': 'paypart, apay, gpay, card, privat24'
    }));
    const string = liqpay.data
    const sha = crypto.createHash('sha1')
    sha.update(`${process.env.NEXT_PUBLIC_LIQPAY_PRIVATE_KEY}${string}${process.env.NEXT_PUBLIC_LIQPAY_PRIVATE_KEY}`)
    const signature = sha.digest('base64');
    liqpay.signature = signature

    useEffect(() => {
      setTariffTitle('Я з Дашею');
    }, [tariff]);
  }


  const validateName = value => {
    // Perform validation for the name field
    return value.length > 20 ? value.slice(0, 20) : value;
  };

  const validatePhone = value => {
    const numericValue = value.replace(/\D/g, '');
    // Limit the phone field to a maximum of 10 digits
    return numericValue.length > 14 ? numericValue.slice(0, 14) : numericValue;
  };

  const validateEmail = value => {
    // validation for the email field
    return value.length > 30 ? value.slice(0, 30) : value;
  };

  const handleInputChange = async (e) => {
    const { id, value } = e.target;
    let validatedValue = value;

    switch (id) {
      case 'name':
        validatedValue = validateName(value);
        break;
      case 'phone':
        validatedValue = validatePhone(value);
        break;
      case 'email':
        validatedValue = validateEmail(value);
        break;
      default:
        break;
    }

    const updatedFormData = {
      ...formData,
      [id]: validatedValue
    };

    setFormData(updatedFormData);

    // check if all fields are filled and valid
    const { name, email, phone } = updatedFormData;
    if (name && email && phone) {
      setIsFormSubmitted(true);
    } else {
      setIsFormSubmitted(false);
    }
  };

  // useEffect(() => {
  //   if (isPostSuccessful) {
  //     // Now we can submit the form
  //     document.getElementById('payment-form').submit();
  //   }
  // }, [isPostSuccessful]);

  const handleButtonClick = async (e) => {
    e.preventDefault(); // Prevent the form from submitting

    if (!isPostSuccessful) {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_PATH_TO_PAYMENT_API}/api/payment`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: formData.name, email: formData.email, phone: formData.phone, tariff: tariff, price: price })
        });

        if (!res.ok) throw new Error('Error while registering');

        const data = await res.json();

        if (data) {
          setIsPostSuccessful(true);
        }
      } catch (error) {
        console.error(error);
        setIsError(true);
      }
    }
  };



  return (
    <div className='payment'>

      <div className='payment__title title-primary'>
        Оплата
      </div>
      <div className='payment__container'>
        <div className='payment__description'>
          <div className='payment__description-title'>
            Тариф: <b>{tariffTitle}</b>
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
            {/*  error */}
            <div className='payment__form-error'>
              {isError && <div style={{
                color: 'red',
                fontSize: '16px',
                fontWeight: 'bold',
                border: '1px solid #e06b5b',
                padding: '10px',
                borderRadius: '5px'
              }}>Нажаль виникла помилка. Спробуйте пізніше</div>}
            </div>
          </div>
          <div className='payment__form-field'>
            {isPostSuccessful ? (
              <CompletePayment router={router} tariff={tariff} price={price} formData={formData} liqpay={liqpay} />
            ) : (
              <div className='payment__form-field'>
                {/*<form method='POST' action='https://www.liqpay.ua/api/3/checkout' acceptCharset='utf-8' id='payment-form'>*/}
                {/*  <input type='hidden' name='data'*/}
                {/*         value={liqpay.data} />*/}
                {/*  <input type='hidden' name='signature' value={liqpay.signature} />*/}
                {/*</form>*/}
                <button type='button' disabled={!isFormSubmitted} onClick={handleButtonClick} className='pay-button'>
                  Оплатити
                </button>
              </div>
              )}
          </div>

        </div>

        {/*  return button */}
        <div className='payment__return'>
          <a href='/kursrhp'>
            Повернутись на головну
          </a>
        </div>

      </div>

    </div>
  );
}